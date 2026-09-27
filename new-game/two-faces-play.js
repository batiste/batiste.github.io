"use strict";

// Hot-seat engine for Aeropolis: Two Faces. Rules: two-faces.html. Data: two-faces-data.js.
// Same pattern as spire-play.js: each turn runs as an async coroutine that awaits picks;
// Undo restores the snapshot taken before the current (or last) turn and aborts any pending pick.

const COLORS = ["#e07a5a", "#6fa8e0", "#e0c25a", "#b08ae8"];
const CHARS = ["cit", "out"];
const ABORT = Symbol("abort");
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const CARDS = Object.fromEntries(TF_CARDS.map((c) => [c.id, c]));

let S = null; // game state (plain JSON, snapshotted for undo)
let history = [];
let ui = {}; // pending pick: { msg, buttons, player, resolve, reject }
let busy = false;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const P = (q) => S.players[q];
const n = () => S.players.length;
const nm = (q) => `<b style="color:${P(q).color}">${esc(P(q).name)}</b>`;
const current = () => (S.first + (S.step % n())) % n();
// Sound effects (two-faces-sound.js). Absent in the simulator: then silent.
const sound = (name, arg) => typeof SFX !== "undefined" && SFX.play(name, arg);

function log(msg) {
  S.log.unshift(`R${S.round} · ${msg}`);
}

/* ---------- picks ---------- */

// info: what is being decided ({ kind, ... }). The page ignores it; bots in two-faces-sim.js read it.
function pick(msg, buttons, player, info = {}) {
  return new Promise((resolve, reject) => {
    ui = { msg, buttons, player, info, resolve, reject };
    render();
  });
}

function settle(v) {
  const r = ui.resolve;
  ui = {};
  r(v);
}

/* ---------- decks ---------- */

// Top of a deck = end of its array. An empty deck reshuffles its discards.
function draw(k) {
  if (!S.decks[k].length) {
    S.decks[k] = shuffle(S.discards[k]);
    S.discards[k] = [];
    if (S.decks[k].length) log(`${SIDES[k].name} deck reshuffled.`);
  }
  return S.decks[k].pop() ?? null;
}

function refill(k) {
  while (S.row[k].length < TF_CONFIG.row) {
    const id = draw(k);
    if (!id) return;
    S.row[k].push(id);
  }
}

const discard = (id) => S.discards[CARDS[id].char].push(id);

/* ---------- Spire ---------- */

// Outcast never above Citizen; Citizen never above the top.
function rise(p, k, amount) {
  const x = P(p);
  const cap = k === "cit" ? TF_CONFIG.spire : x.cit;
  const to = Math.min(cap, x[k] + amount);
  if (to === x[k]) return log(`${nm(p)}'s ${SIDES[k].name} cannot rise.`);
  log(`${nm(p)}'s ${SIDES[k].name} rises ${to - x[k]} to ${to}.`);
  sound("rise", k);
  x[k] = to;
  checkMet(p);
}

function checkMet(p) {
  if (S.met || P(p).out < P(p).cit) return;
  S.met = true;
  log(`— ${nm(p)}'s Citizen and Outcast meet: the game ends after this round's Uprising. —`);
  sound("fanfare");
}

// Cost: pay each good; each good you lack sinks your Citizen 1 (never below your Outcast).
const missing = (p, c) => Object.entries(c.cost).reduce((t, [g, k]) => t + Math.max(0, k - P(p).goods[g]), 0);
const canPay = (p, c) => P(p).cit - missing(p, c) >= P(p).out;
function payCost(p, c) {
  const x = P(p);
  const steps = missing(p, c);
  Object.entries(c.cost).forEach(([g, k]) => (x.goods[g] = Math.max(0, x.goods[g] - k)));
  x.cit -= steps;
  return steps;
}
const score = (x) => x.cit + x.out;
// Final ranking key: score, then leftover goods in tie-break order. Compare keys left to right.
const rankKey = (x) => [score(x), ...TF_CONFIG.tieBreak.map((g) => x.goods[g])];
const byRank = (a, b) => {
  const [ka, kb] = [rankKey(a), rankKey(b)];
  const i = ka.findIndex((v, j) => v !== kb[j]);
  return i < 0 ? 0 : kb[i] - ka[i];
};

/* ---------- effects ---------- */

// Stock shows a count, not repeated chips (a string n keeps the number).
const goodsLabel = (x) => Object.keys(GOODS).map((g) => icon(g, `${x.goods[g]}`)).join("");

async function pickGood(p, msg, filter, info) {
  const opts = Object.keys(GOODS)
    .filter(filter)
    .map((g) => ({ label: `${icon(g)} ${GOODS[g].name}`, value: g }));
  return pick(msg, opts, p, info);
}

async function spend(p, e) {
  const x = P(p);
  const [g, amount] = Object.entries(e.spend)[0];
  const total = Object.values(x.goods).reduce((a, b) => a + b, 0);
  if (g === "any" ? total < amount : x.goods[g] < amount) return log(`${nm(p)} cannot pay: ${fxText(e)}.`);
  const yes = await pick(`${fxText(e)}?`, [{ label: "Yes", value: true }, { label: "No", value: false }], p, { kind: "spend", e });
  if (!yes) return;
  if (g === "any") {
    for (let i = 0; i < amount; i++) {
      const h = await pickGood(p, `Spend which good? (${i + 1}/${amount})`, (h) => x.goods[h] > 0, { kind: "spendGood" });
      x.goods[h]--;
    }
  } else x.goods[g] -= amount;
  await effect(p, e.get, {});
}

/* ---------- city ---------- */

const troopsAt = (id, p) => S.troops[id][p];

async function pickLoc(p, msg, ok, info) {
  const opts = LOCATIONS.filter(ok).map((l) => ({ label: l.name, value: l.id }));
  return opts.length ? pick(msg, opts, p, info) : null;
}

async function sendTroops(p, zone, amount) {
  const x = P(p);
  const where = zone === "low" ? "lower" : "upper";
  for (let i = 0; i < amount; i++) {
    if (!x.supply) return log(`${nm(p)} has no troops left.`);
    const id = await pickLoc(p, `Send a troop to the ${where} city (${i + 1}/${amount}).`, (l) => l[zone], { kind: "send", zone });
    x.supply--;
    S.troops[id][p]++;
    log(`${nm(p)} sends a troop to the <b>${LOC[id].name}</b>.`);
  }
}

// Move: up to `amount` troops of yours, each to any other location. You may stop at any time.
async function moveTroops(p, amount) {
  for (let i = 0; i < amount; i++) {
    const opts = LOCATIONS.filter((l) => troopsAt(l.id, p) > 0).map((l) => ({ label: l.name, value: l.id }));
    if (!opts.length) return log(`${nm(p)} has no troop to move.`);
    const from = await pick(`Move a troop (${i + 1}/${amount}): from where?`, [...opts, { label: "Stop moving", value: null }], p, { kind: "moveFrom" });
    if (!from) return;
    const to = await pickLoc(p, `Move a troop from the ${LOC[from].name} to where?`, (l) => l.id !== from, { kind: "moveTo", from });
    S.troops[from][p]--;
    S.troops[to][p]++;
    log(`${nm(p)} moves a troop from the <b>${LOC[from].name}</b> to the <b>${LOC[to].name}</b>.`);
  }
}


// Street run: choose a deck, then draw from it until you stop or your heat goes over the limit. Each card gives the goods
// of its cost and adds its printed heat (a free card gives nothing). A Stim discards the card just drawn, but you must draw
// again. Drawn cards are discarded.
async function run(p, limit) {
  S.ctx.push("Street run");
  try {
    const x = P(p);
    const view = (id) => ({ id, heat: heatOf(CARDS[id]), n: costSize(CARDS[id]), cost: CARDS[id].cost });
    const k = await pick(
      `Street run, limit ${icon("heat", limit)}: draw from which deck?`,
      CHARS.map((c) => ({ label: `${SIDES[c].name} deck`, value: c })),
      p,
      { kind: "runDeck", limit, decks: Object.fromEntries(CHARS.map((c) => [c, S.decks[c].map(view)])) },
    );
    const haul = [];
    let heat = 0;
    const loot = () => haul.filter((id) => costSize(CARDS[id])).map((id) => costHtml(CARDS[id])).join(" ") || "nothing";
    const show = (drawn, note) => ({ cards: haul, drawn, note: note || `${SIDES[k].name} deck · heat ${heat}/${limit}` });
    S.ctx[S.ctx.length - 1] = `Street run · ${SIDES[k].name} deck`;
    log(`${nm(p)} runs the street through the ${SIDES[k].name} deck, limit ${icon("heat", limit)}.`);
    let redraw = false; // after a Stim: draw again, no stopping
    for (;;) {
      const info = { kind: "draw", heat, limit, deck: S.decks[k].map(view), haul: haul.map(view), show: show() };
      if (!redraw && !(await pick(`Street run: ${icon("heat", `${heat}/${limit}`)} haul: ${loot()}. Draw or stop?`, [{ label: "Draw", value: true }, { label: "Stop", value: false }], p, info))) break;
      redraw = false;
      const id = draw(k);
      if (!id) break;
      const c = view(id);
      sound("draw", Math.min(1, (heat + c.heat) / limit));
      if (x.goods.T > 0) {
        const over = heat + c.heat > limit ? " That would get you caught!" : "";
        const stim = await pick(`Drew ${CARDS[id].name} (${icon("heat", c.heat)}).${over} Spend a Stim to discard it and draw again?`, [{ label: "Spend Stim", value: true }, { label: "Keep", value: false }], p, {
          kind: "stim",
          heat,
          limit,
          card: c,
          show: show(id),
        });
        if (stim) {
          x.goods.T--;
          sound("stim");
          discard(id);
          log(`${nm(p)} spends a Stim to discard <b>${CARDS[id].name}</b> and must draw again.`);
          redraw = true;
          continue;
        }
      }
      haul.push(id);
      heat += c.heat;
      if (heat > limit) {
        log(`${nm(p)} draws <b>${CARDS[id].name}</b>: ${icon("heat", `${heat}/${limit}`)} <b>caught</b>! Loses ${loot()}.`);
        sound("caught");
        await pick(`Caught! Heat ${heat}/${limit}: you lose the haul.`, [{ label: "Continue", value: true }], p, { kind: "done", show: show(id, `Caught: heat ${heat}/${limit}`) });
        haul.forEach(discard);
        return;
      }
    }
    haul.forEach((id) => Object.entries(CARDS[id].cost).forEach(([g, k]) => (x.goods[g] += k)));
    log(`${nm(p)} stops at ${icon("heat", `${heat}/${limit}`)} and takes ${loot()}.`);
    haul.forEach(discard);
  } finally {
    S.ctx.pop();
  }
}

async function scheme(p) {
  S.ctx.push("Scheme");
  try {
    const seen = CHARS.map(draw).filter(Boolean);
    if (!seen.length) return log(`${nm(p)}: no card to Scheme with.`);
    const opts = seen.map((id) => ({ label: `Keep ${CARDS[id].name} (${strText(CARDS[id].str)})`, value: id }));
    const keep = await pick("Scheme: click the card to keep face down.", opts, p, { kind: "keep", show: { cards: seen, pickable: true, note: "Scheme" } });
    seen.filter((id) => id !== keep).forEach((id) => S.decks[CARDS[id].char].unshift(id));
    P(p).schemes.push(keep);
    sound("scheme");
    log(`${nm(p)} schemes (${P(p).schemes.length} face down).`);
  } finally {
    S.ctx.pop();
  }
}

async function effect(p, e, ctx) {
  const x = P(p);
  if (e.gain) {
    x.goods[e.gain] += e.n;
    return log(`${nm(p)}: ${fxText(e)}.`);
  }
  if (e.spend) return spend(p, e);
  if (e.rise) return rise(p, e.rise, e.n);
  if (e.troop) return sendTroops(p, e.troop, e.n);
  if (e.move) return moveTroops(p, e.move);
  if (e.limit) {
    ctx.limit += e.limit;
    return;
  }
  if (e.scheme) return scheme(p);
  if (e.run) return run(p, e.run + ctx.limit);
  if (e.choice) {
    for (let i = 0; i < e.choice; i++) {
      const g = await pickGood(p, `Take a good of your choice (${i + 1}/${e.choice}).`, () => true, { kind: "choice" });
      x.goods[g]++;
      log(`${nm(p)}: +${icon(g, 1)}.`);
    }
  }
}

async function effects(p, list) {
  const ctx = { limit: 0 };
  for (const e of list) await effect(p, e, ctx);
}

// Activate: strips newest to oldest, then the character's own strip.
async function activate(p, k, side) {
  S.ctx.push(`${SIDES[k].name} · ${SIDES[k][side].name}`);
  try {
    const strips = [...P(p).sides[k][side]].reverse().flatMap((id) => CARDS[id][side]);
    log(`${nm(p)} activates <b>${SIDES[k][side].name}</b>.`);
    await effects(p, activationOrder([...strips, ...SIDES[k][side].base]));
  } finally {
    S.ctx.pop();
  }
}

/* ---------- turns ---------- */

async function guarded(fn) {
  history.push(JSON.stringify(S));
  busy = true;
  try {
    await fn();
  } catch (e) {
    if (e === ABORT) return;
    throw e;
  }
  busy = false;
  render();
}

function undo() {
  if (!history.length) return;
  const reject = ui.reject;
  ui = {};
  S = JSON.parse(history.pop());
  busy = false;
  if (reject) reject(ABORT);
  render();
}

const canAct = () => S.phase === "play" && !busy;

function recruit(k, i) {
  const p = current();
  const id = S.row[k][i];
  const c = CARDS[id];
  if (!canAct() || !canPay(p, c)) return;
  guarded(async () => {
    const side = await pick(
      `Tuck <b>${c.name}</b> above or below your ${SIDES[k].name}?`,
      ["up", "down"].map((s) => ({ label: `${s === "up" ? "▲ Above" : "▼ Below"} · ${SIDES[k][s].name}: ${fxList(c[s])}`, value: s })),
      p,
      { kind: "side", id },
    );
    const x = P(p);
    const steps = payCost(p, c);
    S.row[k].splice(i, 1);
    refill(k);
    const col = x.sides[k][side];
    col.push(id);
    const paid = costSize(c) ? ` for ${costHtml(c)}${steps ? ` (lacking ${steps}: Citizen sinks to ${x.cit})` : ""}` : "";
    log(`${nm(p)} recruits <b>${c.name}</b>${paid}, tucked ${side === "up" ? "above" : "below"}.`);
    S.ctx.push(`Recruit ${c.name}`);
    sound("tuck");
    if (col.length > TF_CONFIG.sideCap) {
      const old = col.shift();
      discard(old);
      log(`${nm(p)} discards the oldest strip, <b>${CARDS[old].name}</b>.`);
    }
    checkMet(p);
    await activate(p, k, side);
    S.ctx.pop();
    await endTurn();
  });
}

// Only when no card in the row is affordable: take 1 good of your choice instead of recruiting.
const canRecruit = (p) => CHARS.some((k) => S.row[k].some((id) => canPay(p, CARDS[id])));
function passTurn() {
  const p = current();
  if (!canAct() || canRecruit(p)) return;
  guarded(async () => {
    const g = await pickGood(p, "No card you can afford: take 1 good of your choice.", () => true, { kind: "choice" });
    P(p).goods[g]++;
    log(`${nm(p)} cannot recruit: takes +${icon(g, 1)}.`);
    await endTurn();
  });
}

async function endTurn() {
  S.step++;
  if (S.step < 2 * n()) return sound("turn");
  await uprising();
  if (S.phase === "play") sound("turn");
}

// Strength: (troops at the Uprising's locations + committed Arms) doubled per ×2 Scheme, plus the +N Schemes.
function strength(p, at, arms) {
  const strs = P(p).schemes.map((id) => CARDS[id].str);
  const troops = at.reduce((t, id) => t + troopsAt(id, p), 0);
  const doubles = strs.filter((s) => s === "x2").length;
  const plus = strs.filter((s) => s !== "x2").reduce((a, b) => a + b, 0);
  return (troops + arms) * 2 ** doubles + plus;
}

// Why a fighter has that strength, e.g. "(3 troops + 1 Arms) ×2 + 2 from Schemes".
function strengthText(p, at, arms) {
  const strs = P(p).schemes.map((id) => CARDS[id].str);
  const troops = at.reduce((t, id) => t + troopsAt(id, p), 0);
  const sch = strs.filter((s) => s !== "x2").reduce((a, b) => a + b, 0);
  const doubles = strs.filter((s) => s === "x2").length;
  const force = [`${troops} troop${troops === 1 ? "" : "s"}`, arms && `${arms} Arms`].filter(Boolean).join(" + ");
  const doubled = doubles ? `(${force}) ×${2 ** doubles}` : force;
  return sch ? `${doubled} + ${sch} from Schemes` : doubled;
}

// Uprising result: who fought, each strength and why, the ranking with tie-breaks, rewards and losses. Logged and shown in a modal.
function uprisingResult(u, res, arms, order) {
  const row = (r, i) => {
    const sch = P(r.q).schemes.map((id) => `${CARDS[id].name} ${strText(CARDS[id].str)}`).join(", ") || "—";
    const reward = i === 0 ? u.first : i === 1 ? u.second : [];
    return `<tr><td>${i + 1}. ${nm(r.q)}</td><td>${sch}</td><td>${arms[r.q]}</td><td>${strengthText(r.q, u.at, arms[r.q])}</td><td><b>${r.s}</b></td><td>${reward.length ? fxList(reward) : "—"}</td></tr>`;
  };
  const lines = [];
  res.forEach((r, i) => lines.push(`${nm(r.q)}: ${strengthText(r.q, u.at, arms[r.q])} = strength <b>${r.s}</b>${i === 0 ? " → <b>first</b>" : i === 1 ? " → <b>second</b>" : ""}.`));
  // Tie-breaks between neighbours with the same strength.
  res.slice(1).forEach((r, i) => {
    const a = res[i];
    if (a.s !== r.s) return;
    const why = P(a.q).out < P(r.q).out ? `lower Outcast (${P(a.q).out} vs ${P(r.q).out})` : "same Outcast: earlier in turn order";
    lines.push(`Tie at ${a.s}: ${nm(a.q)} ranks above ${nm(r.q)}, ${why}.`);
  });
  const out = order.filter((q) => !res.some((r) => r.q === q));
  if (out.length) lines.push(`${out.map(nm).join(", ")}: no troops there, did not fight (Schemes kept).`);
  if (res.length) lines.push(`Every fighter loses 1 troop at each of the ${locNames(u.at)} and discards their Schemes and committed Arms.`);
  const table = res.length
    ? `<table class="results"><tr><th>Fighter</th><th>Schemes</th><th>Arms</th><th>Why</th><th>Strength</th><th>Reward</th></tr>${res.map(row).join("")}</table>`
    : "<p>Nobody has troops there: no fight, no reward.</p>";
  const notes = lines.slice(res.length).map((l) => `<p>${l}</p>`).join("");
  return {
    lines,
    html: `<div class="modal-uprising">${uprisingCardHtml(u)}<div><h2>Uprising: ${esc(u.name)}</h2><p class="modal-sub">at the ${locNames(u.at)} · strength = (troops there + Arms) ×2 per ×2 Scheme, + your +N Schemes · tie: lower Outcast</p>${table}${notes}</div></div>`,
  };
}

async function uprising() {
  S.ctx.push(`Uprising: ${TF_UPRISINGS[S.uprisings[S.uprising]].name}`);
  try {
    const u = TF_UPRISINGS[S.uprisings[S.uprising]];
    const order = Array.from({ length: n() }, (_, i) => (S.first + i) % n());
    const fighters = order.filter((q) => u.at.some((id) => troopsAt(id, q) > 0));
    log(`— Uprising: <b>${esc(u.name)}</b> at the ${locNames(u.at)}. —`);
    const arms = {};
    for (const q of fighters) {
      const have = P(q).goods.A;
      arms[q] = have ? await pick(`Uprising: ${esc(u.name)}. Pass to ${nm(q)}, others look away. Commit how many Arms?`, Array.from({ length: have + 1 }, (_, a) => ({ label: `${a}`, value: a })), q, { kind: "arms", u }) : 0;
    }
    const res = fighters.map((q) => ({ q, s: strength(q, u.at, arms[q]) }));
    res.sort((a, b) => b.s - a.s || P(a.q).out - P(b.q).out);
    const result = uprisingResult(u, res, arms, order);
    result.lines.forEach((l) => log(l));
    sound("uprising");
    await pick(`Uprising result: <b>${esc(u.name)}</b>.`, [{ label: "Continue", value: true }], null, { kind: "result", modal: result.html });
    for (const [rank, key] of [[0, "first"], [1, "second"]]) {
      const r = res[rank];
      if (!r || !u[key].length) continue;
      log(`${nm(r.q)} takes the ${key} reward: ${fxList(u[key])}.`);
      await effects(r.q, u[key]);
    }
    // Every fighter loses 1 troop at each of the Uprising's locations, and spends their Schemes and committed Arms.
    res.forEach((r) =>
      u.at.forEach((id) => {
        if (!troopsAt(id, r.q)) return;
        S.troops[id][r.q]--;
        P(r.q).supply++;
        log(`${nm(r.q)} loses a troop at the <b>${LOC[id].name}</b>.`);
      }),
    );
    fighters.forEach((q) => {
      P(q).schemes.forEach(discard);
      P(q).schemes = [];
      P(q).goods.A -= arms[q];
    });
    await control();
    await catchUp();
    S.uprising++;
    if (S.met || S.uprising >= S.uprisings.length) return endGame();
    S.first = (S.first + 1) % n();
    S.step = 0;
    S.round++;
    const next = TF_UPRISINGS[S.uprisings[S.uprising]];
    log(`— Round ${S.round}: ${nm(S.first)} goes first. Uprising: <b>${esc(next.name)}</b> at the ${locNames(next.at)}. —`);
  } finally {
    S.ctx.pop();
  }
}

// Catch-up: the lowest score (all tied players) sends 1 free troop to the lower city.
async function catchUp() {
  S.ctx.push("Catch-up");
  try {
    const s = S.players.map(score);
    const low = Math.min(...s);
    for (const [q, v] of s.entries()) {
      if (v !== low) continue;
      log(`${nm(q)} has the lowest score: catch-up troop.`);
      await sendTroops(q, "low", 1);
    }
  } finally {
    S.ctx.pop();
  }
}

// Control: the most troops at a location takes its reward. Tie: nobody.
async function control() {
  S.ctx.push("Control");
  try {
    for (const l of LOCATIONS) {
      const t = S.troops[l.id];
      const top = Math.max(...t);
      if (!top || t.filter((v) => v === top).length > 1) continue;
      const q = t.indexOf(top);
      S.ctx[S.ctx.length - 1] = `Control: ${l.name}`;
      log(`${nm(q)} controls the <b>${l.name}</b>: ${fxList(l.control)}.`);
      await effects(q, l.control);
      if (l.upkeep) {
        const lost = Math.min(l.upkeep, S.troops[l.id][q]);
        S.troops[l.id][q] -= lost;
        P(q).supply += lost;
        log(`${nm(q)} pays upkeep: loses ${lost} troop at the <b>${l.name}</b>.`);
      }
    }
  } finally {
    S.ctx.pop();
  }
}

function endGame() {
  S.phase = "end";
  resultsOpen = true;
  sound("fanfare");
  log("— Game over. —");
}

// seats: names, or { name, ai } where ai is a bot profile (two-faces-bots.js) or null for a human.
function startGame(seats) {
  const deck = (k) => shuffle(TF_CARDS.filter((c) => c.char === k).flatMap((c) => Array(c.copies).fill(c.id)));
  S = {
    players: seats.map((seat, q) => ({
      name: seat.name ?? seat,
      ai: seat.ai || null,
      color: COLORS[q],
      cit: TF_CONFIG.spire,
      out: 1,
      goods: { ...TF_CONFIG.start },
      sides: { cit: { up: [], down: [] }, out: { up: [], down: [] } },
      schemes: [],
      supply: TF_CONFIG.troops,
    })),
    troops: Object.fromEntries(LOCATIONS.map((l) => [l.id, seats.map(() => 0)])),
    decks: { cit: deck("cit"), out: deck("out") },
    discards: { cit: [], out: [] },
    row: { cit: [], out: [] },
    uprisings: shuffle(TF_UPRISINGS.map((_, i) => i)).slice(0, TF_CONFIG.rounds),
    uprising: 0,
    round: 1,
    first: 0,
    step: 0,
    met: false,
    phase: "play",
    log: [],
    ctx: [], // what is being resolved, shown above the prompt (e.g. "Uprising: Dock Riot › Control")
  };
  CHARS.forEach(refill);
  history = [];
  resultsOpen = false;
  ui = {};
  busy = false;
  const u = TF_UPRISINGS[S.uprisings[0]];
  log(`— Game starts. ${nm(0)} goes first. Uprising: <b>${esc(u.name)}</b> at the ${locNames(u.at)}. —`);
  render();
}

/* ---------- render ---------- */

function renderStatus() {
  if (S.phase === "end") {
    const win = [...S.players.keys()].sort((a, b) => byRank(P(a), P(b)))[0];
    return ($("status").innerHTML = `<b>Game over</b> · ${nm(win)} wins with ${score(P(win))} <button class="btn small" data-results>Results</button>`);
  }
  const turn = S.step < 2 * n() ? `turn ${Math.floor(S.step / n()) + 1}/2 · ${nm(current())} to play` : "resolving the Uprising";
  $("status").innerHTML = `Round ${S.round}/${S.uprisings.length} · ${turn}${S.met ? " · <b>last round</b>" : ""}`;
}

// The Uprising as a card (as it would be printed): name, locations, first and second rewards.
const FLAG = '<svg class="ucard-art" viewBox="0 0 64 48" aria-hidden="true"><path d="M14 4v42" stroke="currentColor" stroke-width="3"/><path d="M16 6c10-5 18 5 30 0v20c-12 5-20-5-30 0z" fill="currentColor"/></svg>';
function uprisingCardHtml(u) {
  const locs = u.at.map((id) => `<span class="uloc ${LOC[id].low ? "low" : ""} ${LOC[id].high ? "high" : ""}">${LOC[id].name}</span>`).join("");
  const reward = (rank, list) => `<div class="ucard-reward"><span class="rank">${rank}</span>${list.length ? fxList(list) : "—"}</div>`;
  return `<div class="ucard"><div class="ucard-head"><span>Uprising</span><b>${esc(u.name)}</b></div>
    <div class="ucard-locs">${locs}</div>${FLAG}${reward("1st", u.first)}${reward("2nd", u.second)}</div>`;
}

function renderUprisingCard() {
  if (S.phase === "end") return ($("uprising-card").innerHTML = "");
  const left = S.uprisings.length - S.uprising - 1;
  $("uprising-card").innerHTML = `<p class="mini-label">This round</p><div class="uprising-slot">${uprisingCardHtml(TF_UPRISINGS[S.uprisings[S.uprising]])}<p class="mini-label">${left} more Uprising${left === 1 ? "" : "s"} to come</p></div>`;
}

function renderMap() {
  const u = TF_UPRISINGS[S.uprisings[Math.min(S.uprising, S.uprisings.length - 1)]];
  $("map").innerHTML = LOCATIONS.map((l) => {
    const zone = l.low && l.high ? "lower + upper" : l.low ? "lower city" : "upper city";
    const troops = S.players
      .map((x, q) => (troopsAt(l.id, q) ? `<span class="troops" style="background:${x.color}" title="${esc(x.name)}">${troopsAt(l.id, q)}</span>` : ""))
      .join("");
    const fight = S.phase === "play" && u.at.includes(l.id);
    return `<div class="city-loc ${l.low ? "low" : ""} ${l.high ? "high" : ""} ${fight ? "fight" : ""}">
      <div class="loc-name">${l.name}</div><div class="loc-body"><div class="loc-zone">${zone}${fight ? " · <b>Uprising</b>" : ""}</div>
      <div class="loc-ctrl">Control: ${fxList(l.control)}${l.upkeep ? ` · <span class="upkeep" title="Upkeep: the controller loses ${l.upkeep} troop here">−${icon("low")}</span>` : ""}</div><div class="loc-troops">${troops || "—"}</div></div></div>`;
  }).join("");
}

// Final results, shown in a modal that can be closed and reopened (status bar "Results").
let resultsOpen = false;
function renderResults() {
  const order = TF_CONFIG.tieBreak;
  const ranked = [...S.players.keys()].sort((a, b) => byRank(P(a), P(b)));
  const win = P(ranked[0]);
  const tied = ranked.length > 1 && score(P(ranked[1])) === score(win);
  const rows = ranked
    .map((q, i) => {
      const x = P(q);
      return `<tr class="${i ? "" : "winner"}"><td>${i + 1}</td><td>${nm(q)}</td><td><b>${score(x)}</b></td><td>${x.cit}</td><td>${x.out}</td><td>${order.map((g) => icon(g, `${x.goods[g]}`)).join(" ")}</td></tr>`;
    })
    .join("");
  const ending = S.met ? "A Citizen and Outcast met: the revolution is here." : `The last Uprising is over (round ${S.round}).`;
  return `<div class="victory" style="--pc:${win.color}">
    <div class="victory-crown">♛</div><h2>${esc(win.name)} wins</h2>
    <p class="modal-sub">${ending} Score = Citizen + Outcast heights${tied ? `; tie broken by most ${order.map((g) => GOODS[g].name).join(", then ")}` : ""}.</p></div>
    <table class="results"><tr><th>#</th><th>Player</th><th>Score</th><th>Citizen</th><th>Outcast</th><th>Tie-break goods</th></tr>${rows}</table>`;
}

// A card: top strip, face (name, cost, Scheme strength), bottom strip.
const band = (k, side, fx, label = SIDES[k][side].name) =>
  `<div class="band ${side}" title="${label}"><div class="band-fx">${fx}</div></div>`;

function cardHtml(id, attrs = "", live = false) {
  const c = CARDS[id];
  const k = c.char;
  return `<div class="tcard ${k} ${live ? "live" : ""}" ${attrs}>
    ${band(k, "up", fxList(c.up))}
    <div class="face">
      <div class="corners"><span title="Cost">${costHtml(c)}</span><span title="Scheme strength">${icon("scheme")}${strText(c.str)}</span></div>
      <h3>${c.name}</h3>
      <div class="heat" title="Street-run heat">${icon("heat", heatOf(c))}</div>
    </div>
    ${band(k, "down", fxList(c.down))}</div>`;
}

function renderRow() {
  $("row").innerHTML = CHARS.map((k) => {
    const cards = S.row[k].map((id, i) => cardHtml(id, `data-row="${k},${i}"`, canAct() && !ui.msg && !P(current()).ai && canPay(current(), CARDS[id])));
    return `<div><p class="mini-label">${SIDES[k].name} deck · ${S.decks[k].length} left</p><div class="row-cards">${cards.join("")}</div></div>`;
  }).join("");
}

function renderSpire() {
  const rows = [];
  for (let h = TF_CONFIG.spire; h >= 1; h--) {
    const toks = S.players.flatMap((x) =>
      CHARS.filter((k) => x[k] === h).map((k) => `<i class="tok ${k === "cit" ? "C" : "O"}" style="background:${x.color}" title="${esc(x.name)} ${SIDES[k].name}"></i>`),
    );
    rows.push(`<div class="sp-row"><b>${h}</b>${toks.join("")}</div>`);
  }
  $("spire").innerHTML = rows.join("");
}

// Character art: a Citizen in a top hat, a hooded Outcast.
const SILHOUETTE = {
  cit: '<svg class="silhouette" viewBox="0 0 40 48" aria-hidden="true"><path d="M13 2h14v11h4v3H9v-3h4z"/><circle cx="20" cy="22" r="6"/><path d="M6 48c0-11 6-17 14-17s14 6 14 17z"/></svg>',
  out: '<svg class="silhouette" viewBox="0 0 40 48" aria-hidden="true"><path d="M20 4c-8 0-12 7-12 15 0 5 1 9 3 11h18c2-2 3-6 3-11 0-8-4-15-12-15z"/><path d="M4 48c0-10 6-17 16-17s16 7 16 17z"/></svg>',
};

// Each character: tucked strips above (newest on top), the character card, tucked strips below (newest at the bottom).
function tableauHtml(x) {
  // Hovering a tucked strip for 1s shows the whole card (CSS delay).
  const tuck = (id, side) =>
    `<div class="tuck ${side} ${CARDS[id].char}">${band(CARDS[id].char, side, fxList(CARDS[id][side]), CARDS[id].name)}<div class="tuck-preview">${cardHtml(id)}</div></div>`;
  return CHARS.map((k) => {
    const s = x.sides[k];
    return `<div class="char-col ${k}">
      ${[...s.up].reverse().map((id) => tuck(id, "up")).join("")}
      <div class="tcard char ${k}">${band(k, "up", fxList(SIDES[k].up.base))}
        <div class="face">${SILHOUETTE[k]}<h3>${SIDES[k].name}</h3></div>
        ${band(k, "down", fxList(SIDES[k].down.base))}</div>
      ${s.down.map((id) => tuck(id, "down")).join("")}</div>`;
  }).join("");
}

function renderPlayers() {
  const acting = ui.player != null ? ui.player : S.phase === "play" ? current() : null;
  $("players").innerHTML = S.players
    .map((x, q) => {
      const open = q === acting || S.phase === "end";
      const sch = x.schemes.map((id) => `<span class="scheme-card">${icon("scheme")}${open ? strText(CARDS[id].str) : "?"}</span>`).join("");
      return `<div class="player ${q === acting ? "active" : ""}" style="--pc:${x.color}">
        <h3><span>${esc(x.name)}${x.ai ? ` <em class="ai-badge">AI · ${x.ai}</em>` : ""}</span><small>score ${score(x)}</small></h3>
        <div class="player-body"><div class="goods">${goodsLabel(x)}<span class="gx" title="Troops in supply"><span class="gt">troops in supply:</span><b>${x.supply}</b>${icon("low")}</span>${sch}</div>
        <div class="tableau">${tableauHtml(x)}</div></div></div>`;
    })
    .join("");
}

function renderPrompt() {
  let msg = "";
  let buttons = "";
  const aiPick = ui.msg && ui.player != null && P(ui.player).ai;
  if (ui.msg) {
    msg = (ui.player != null ? `${nm(ui.player)}${aiPick ? " (AI)" : ""}: ` : "") + ui.msg;
    buttons = ui.buttons.map((b, i) => `<button class="btn" data-btn="${i}" ${aiPick ? "disabled" : ""}>${b.label}</button>`).join("");
  } else if (S.phase === "play" && P(current()).ai) msg = `${nm(current())} (AI · ${P(current()).ai}) is thinking…`;
  else if (S.phase === "play") {
    if (canRecruit(current())) msg = `${nm(current())}: click a row card to Recruit it.`;
    else {
      msg = `${nm(current())}: no card you can afford.`;
      buttons = `<button class="btn primary" data-pass>Take 1 good</button>`;
    }
  } else msg = "Game over.";
  buttons += `<button class="btn" data-undo ${history.length ? "" : "disabled"}>Undo</button>`;
  const ctx = S.ctx.length ? `<div class="ctx">${S.ctx.map(esc).join(" › ")}</div>` : "";
  $("prompt").innerHTML = `<div class="msg">${ctx}${msg}</div>${buttons}`;
}

// Modal: a result to read before going on (e.g. an Uprising), with the pending pick's buttons.
function renderModal() {
  const html = ui.info && ui.info.modal;
  if (html) return ($("modal").innerHTML = `<div class="modal-box">${html}<menu>${ui.buttons.map((b, i) => `<button class="btn primary" data-btn="${i}">${b.label}</button>`).join("")}</menu></div>`);
  $("modal").innerHTML =
    S.phase === "end" && resultsOpen ? `<div class="modal-box">${renderResults()}<menu><button class="btn primary" data-close-results>Close</button></menu></div>` : "";
}

// Reveal panel: cards drawn in a street run, or the cards seen by a Scheme (click one to keep).
function renderReveal() {
  const sh = ui.info && ui.info.show;
  if (!sh) return ($("reveal").innerHTML = "");
  const cards = [...sh.cards, ...(sh.drawn && !sh.cards.includes(sh.drawn) ? [sh.drawn] : [])].map((id, i) => {
    const attrs = sh.pickable ? `data-btn="${i}"` : "";
    return `<div class="reveal-card ${id === sh.drawn ? "drawn" : ""}">${cardHtml(id, attrs, sh.pickable)}</div>`;
  });
  $("reveal").innerHTML = `<div class="reveal-note">${sh.note}</div><div class="reveal-cards">${cards.join("") || "<i>No card yet.</i>"}</div>`;
}

/* ---------- AI seats ---------- */

// AI players act on their own after a short pause, so the table can follow. Bots: two-faces-bots.js.
const AI_DELAY = { turn: 900, pick: 650, result: 2500 };
const aiBots = {};
const aiPlan = {}; // side chosen by an AI's turn, answered when the game asks "above or below?"
let aiTimer = null;
const botFor = (p) => (aiBots[P(p).ai] = aiBots[P(p).ai] || (P(p).ai === "random" ? RANDOM : valueBot(P(p).ai)));

function scheduleAI() {
  clearTimeout(aiTimer);
  if (!S || typeof valueBot === "undefined") return;
  if (ui.msg) {
    const p = ui.player;
    // A result to read: humans click Continue; with only AI seats, it continues by itself.
    if (p == null) {
      if (S.players.every((x) => x.ai)) aiTimer = setTimeout(() => ui.msg && settle(ui.buttons[0].value), AI_DELAY.result);
      return;
    }
    if (!P(p).ai) return;
    aiTimer = setTimeout(() => {
      if (!ui.msg || ui.player !== p) return;
      const i = ui.info.kind === "side" ? Math.max(0, ui.buttons.findIndex((b) => b.value === aiPlan[p])) : botFor(p).choose(p, ui.info, ui.buttons);
      settle(ui.buttons[i].value);
    }, AI_DELAY.pick);
  } else if (S.phase === "play" && !busy && P(current()).ai) {
    aiTimer = setTimeout(() => {
      const p = current();
      if (ui.msg || busy || S.phase !== "play" || !P(p).ai) return;
      const a = botFor(p).turn(p);
      if (a.type === "pass") return passTurn();
      aiPlan[p] = a.side;
      recruit(a.k, a.i);
    }, AI_DELAY.turn);
  }
}

function render() {
  renderStatus();
  renderMap();
  renderRow();
  renderSpire();
  renderPlayers();
  renderPrompt();
  renderReveal();
  renderUprisingCard();
  renderModal();
  $("log").innerHTML = S.log.map((m) => `<li>${m}</li>`).join("");
  scheduleAI();
}

/* ---------- events ---------- */

$("glossary").innerHTML = glossaryHtml();

// Sound toggle (remembered per browser).
if (typeof SFX !== "undefined") {
  const soundLabel = () => ($("sound").textContent = SFX.muted ? "Sound off" : "Sound on");
  $("sound").addEventListener("click", () => {
    SFX.toggle();
    soundLabel();
  });
  soundLabel();
}

// Copy the log as plain text; icons carry hidden labels.
$("copy-log").addEventListener("click", () => {
  if (S) navigator.clipboard.writeText([...$("log").children].map((li) => li.textContent).join("\n"));
});

document.addEventListener("click", (e) => {
  if (!S) return;
  const t = e.target.closest("[data-undo],[data-pass],[data-row],[data-btn],[data-results],[data-close-results]");
  if (!t) return;
  const d = t.dataset;
  if (d.results !== undefined || d.closeResults !== undefined) {
    resultsOpen = d.results !== undefined;
    return render();
  }
  if (d.undo !== undefined) return undo();
  if (d.btn !== undefined && ui.msg) return ui.player != null && P(ui.player).ai ? undefined : settle(ui.buttons[+d.btn].value);
  if (ui.msg || P(current()).ai) return; // AI seats play by themselves
  if (d.pass !== undefined) return passTurn();
  if (d.row !== undefined) {
    const [k, i] = d.row.split(",");
    return recruit(k, +i);
  }
});

/* ---------- setup dialog ---------- */

// Seat types: a human, or an AI with one of the bot profiles.
const SEAT_TYPES = [
  ["", "Human"],
  ["smart", "AI · smart"],
  ["greedy", "AI · greedy"],
  ["frugal", "AI · frugal"],
  ["warlord", "AI · warlord"],
  ["builder", "AI · builder"],
  ["random", "AI · random"],
];
function renderSetup() {
  const count = +$("setup-count").value;
  const prev = [...document.querySelectorAll(".setup-player")].map((el) => [el.querySelector("input").value, el.querySelector("select").value]);
  $("setup-players").innerHTML = Array.from({ length: count }, (_, i) => {
    const [name, ai] = prev[i] || [`Player ${i + 1}`, ""];
    const opts = SEAT_TYPES.map(([v, label]) => `<option value="${v}" ${v === ai ? "selected" : ""}>${label}</option>`).join("");
    return `<div class="setup-player"><i style="background:${COLORS[i]}"></i><input value="${esc(name)}" /><select>${opts}</select></div>`;
  }).join("");
}

function openSetup() {
  $("setup").returnValue = "";
  renderSetup();
  $("setup").showModal();
}

$("setup-count").addEventListener("change", renderSetup);
$("new-game").addEventListener("click", openSetup);
$("setup").addEventListener("close", () => {
  if ($("setup").returnValue !== "start") return;
  startGame([...document.querySelectorAll(".setup-player")].map((el) => ({ name: el.querySelector("input").value.trim() || "Player", ai: el.querySelector("select").value || null })));
  sound("start");
});

openSetup();
