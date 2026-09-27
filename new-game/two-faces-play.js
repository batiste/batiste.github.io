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
  x[k] = to;
  checkMet(p);
}

function checkMet(p) {
  if (S.met || P(p).out < P(p).cit) return;
  S.met = true;
  log(`— ${nm(p)}'s Citizen and Outcast meet: the game ends after this round's Uprising. —`);
}

const canPay = (p, cost) => P(p).cit - cost >= P(p).out;
const score = (x) => x.cit + x.out;

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

// Move: any troop of yours to any other location.
async function moveTroops(p, amount) {
  for (let i = 0; i < amount; i++) {
    const from = await pickLoc(p, `Move a troop (${i + 1}/${amount}): from where?`, (l) => troopsAt(l.id, p) > 0, { kind: "moveFrom" });
    if (!from) return log(`${nm(p)} has no troop to move.`);
    const to = await pickLoc(p, `Move a troop from the ${LOC[from].name} to where?`, (l) => l.id !== from, { kind: "moveTo", from });
    S.troops[from][p]--;
    S.troops[to][p]++;
    log(`${nm(p)} moves a troop from the <b>${LOC[from].name}</b> to the <b>${LOC[to].name}</b>.`);
  }
}


// Street run: draw contraband until you stop or your heat goes over the limit. Stims discard the card just drawn.
async function run(p, limit) {
  const x = P(p);
  const deck = shuffle([...TF_CONTRABAND]);
  const haul = [];
  let heat = 0;
  const haulText = () => (haul.length ? haul.map((c) => (c.good ? icon(c.good, c.n) : "Patrol")).join(" ") : "nothing");
  log(`${nm(p)} runs the street, limit ${icon("heat", limit)}.`);
  for (;;) {
    const msg = `Street run: ${icon("heat", `${heat}/${limit}`)} haul: ${haulText()}.`;
    const go = await pick(`${msg} Draw or stop?`, [{ label: "Draw", value: true }, { label: "Stop", value: false }], p, { kind: "draw", heat, limit, deck, haul });
    if (!go) break;
    const c = deck.pop();
    const drawn = `${c.good ? icon(c.good, c.n) : "a Patrol"} (${icon("heat", c.heat)})`;
    if (x.goods.T > 0) {
      const over = heat + c.heat > limit ? " That would get you caught!" : "";
      const stim = await pick(`Drew ${drawn}.${over} Spend a Stim to discard it?`, [{ label: "Spend Stim", value: true }, { label: "Keep", value: false }], p, { kind: "stim", heat, limit, card: c });
      if (stim) {
        x.goods.T--;
        log(`${nm(p)} spends a Stim to discard ${drawn}.`);
        continue;
      }
    }
    haul.push(c);
    heat += c.heat;
    if (heat > limit) {
      log(`${nm(p)} draws ${drawn}: ${icon("heat", `${heat}/${limit}`)} <b>caught</b>! Loses ${haulText()}.`);
      return;
    }
  }
  haul.forEach((c) => c.good && (x.goods[c.good] += c.n));
  log(`${nm(p)} stops at ${icon("heat", `${heat}/${limit}`)} and takes ${haulText()}.`);
}

async function scheme(p) {
  const seen = CHARS.map(draw).filter(Boolean);
  if (!seen.length) return log(`${nm(p)}: no card to Scheme with.`);
  const opts = seen.map((id) => ({ label: `Keep ${CARDS[id].name} (${strText(CARDS[id].str)})`, value: id }));
  const keep = await pick("Scheme: keep 1 card face down.", opts, p, { kind: "keep" });
  seen.filter((id) => id !== keep).forEach((id) => S.decks[CARDS[id].char].unshift(id));
  P(p).schemes.push(keep);
  log(`${nm(p)} schemes (${P(p).schemes.length} face down).`);
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
  const strips = [...P(p).sides[k][side]].reverse().flatMap((id) => CARDS[id][side]);
  log(`${nm(p)} activates <b>${SIDES[k][side].name}</b>.`);
  await effects(p, [...strips, ...SIDES[k][side].base]);
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
  if (!canAct() || !canPay(p, c.cost)) return;
  guarded(async () => {
    const side = await pick(
      `Tuck <b>${c.name}</b> above or below your ${SIDES[k].name}?`,
      ["up", "down"].map((s) => ({ label: `${s === "up" ? "▲ Above" : "▼ Below"} · ${SIDES[k][s].name}: ${fxList(c[s])}`, value: s })),
      p,
      { kind: "side", id },
    );
    const x = P(p);
    x.cit -= c.cost;
    S.row[k].splice(i, 1);
    refill(k);
    const col = x.sides[k][side];
    col.push(id);
    log(`${nm(p)} recruits <b>${c.name}</b>${c.cost ? ` (Citizen sinks ${c.cost} to ${x.cit})` : ""}, tucked ${side === "up" ? "above" : "below"}.`);
    if (col.length > TF_CONFIG.sideCap) {
      const old = col.shift();
      discard(old);
      log(`${nm(p)} discards the oldest strip, <b>${CARDS[old].name}</b>.`);
    }
    checkMet(p);
    await activate(p, k, side);
    await endTurn();
  });
}

function schemeTurn() {
  if (!canAct()) return;
  guarded(async () => {
    await scheme(current());
    await endTurn();
  });
}

async function endTurn() {
  S.step++;
  if (S.step < 2 * n()) return;
  await uprising();
}

// Strength: troops at the Uprising's locations, +N Schemes and committed Arms, doubled per ×2 Scheme.
function strength(p, at, arms) {
  const strs = P(p).schemes.map((id) => CARDS[id].str);
  const troops = at.reduce((t, id) => t + troopsAt(id, p), 0);
  const plus = troops + strs.filter((s) => s !== "x2").reduce((a, b) => a + b, 0) + arms;
  return plus * 2 ** strs.filter((s) => s === "x2").length;
}

async function uprising() {
  const u = TF_UPRISINGS[S.uprisings[S.uprising]];
  const order = Array.from({ length: n() }, (_, i) => (S.first + i) % n());
  const fighters = order.filter((q) => u.at.some((id) => troopsAt(id, q) > 0));
  log(`— Uprising: <b>${esc(u.name)}</b> at the ${locNames(u.at)}. —`);
  if (!fighters.length) log("Nobody has troops there: no fight.");
  const arms = {};
  for (const q of fighters) {
    const have = P(q).goods.A;
    arms[q] = have ? await pick(`Uprising: ${esc(u.name)}. Pass to ${nm(q)}, others look away. Commit how many Arms?`, Array.from({ length: have + 1 }, (_, a) => ({ label: `${a}`, value: a })), q, { kind: "arms", u }) : 0;
  }
  const res = fighters.map((q) => ({ q, s: strength(q, u.at, arms[q]) }));
  res.forEach((r) => {
    const sch = P(r.q).schemes.map((id) => `${CARDS[id].name} ${strText(CARDS[id].str)}`).join(", ") || "no Scheme";
    const troops = u.at.reduce((t, id) => t + troopsAt(id, r.q), 0);
    log(`${nm(r.q)}: ${troops} troops, ${sch}, ${arms[r.q]} Arms → strength <b>${r.s}</b>.`);
  });
  res.sort((a, b) => b.s - a.s || P(a.q).out - P(b.q).out);
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
}

// Catch-up: the lowest score (all tied players) sends 1 free troop to the lower city.
async function catchUp() {
  const s = S.players.map(score);
  const low = Math.min(...s);
  for (const [q, v] of s.entries()) {
    if (v !== low) continue;
    log(`${nm(q)} has the lowest score: catch-up troop.`);
    await sendTroops(q, "low", 1);
  }
}

// Control: the most troops at a location takes its reward. Tie: nobody.
async function control() {
  for (const l of LOCATIONS) {
    const t = S.troops[l.id];
    const top = Math.max(...t);
    if (!top || t.filter((v) => v === top).length > 1) continue;
    const q = t.indexOf(top);
    log(`${nm(q)} controls the <b>${l.name}</b>: ${fxList(l.control)}.`);
    await effects(q, l.control);
  }
}

function endGame() {
  S.phase = "end";
  log("— Game over. —");
}

function startGame(names) {
  const deck = (k) => shuffle(TF_CARDS.filter((c) => c.char === k).flatMap((c) => Array(c.copies).fill(c.id)));
  S = {
    players: names.map((name, q) => ({
      name,
      color: COLORS[q],
      cit: TF_CONFIG.spire,
      out: 1,
      goods: { ...TF_CONFIG.start },
      sides: { cit: { up: [], down: [] }, out: { up: [], down: [] } },
      schemes: [],
      supply: TF_CONFIG.troops,
    })),
    troops: Object.fromEntries(LOCATIONS.map((l) => [l.id, names.map(() => 0)])),
    decks: { cit: deck("cit"), out: deck("out") },
    discards: { cit: [], out: [] },
    row: { cit: [], out: [] },
    uprisings: shuffle(TF_UPRISINGS.map((_, i) => i)),
    uprising: 0,
    round: 1,
    first: 0,
    step: 0,
    met: false,
    phase: "play",
    log: [],
  };
  CHARS.forEach(refill);
  history = [];
  ui = {};
  busy = false;
  const u = TF_UPRISINGS[S.uprisings[0]];
  log(`— Game starts. ${nm(0)} goes first. Uprising: <b>${esc(u.name)}</b> at the ${locNames(u.at)}. —`);
  render();
}

/* ---------- render ---------- */

function renderStatus() {
  if (S.phase === "end") return ($("status").innerHTML = renderResults());
  const u = TF_UPRISINGS[S.uprisings[S.uprising]];
  const turn = Math.floor(S.step / n()) + 1;
  $("status").innerHTML = `Round ${S.round}/${S.uprisings.length} · turn ${turn}/2 · ${nm(current())} to play${S.met ? " · <b>last round</b>" : ""}
    <div class="uprising"><b>Uprising: ${esc(u.name)}</b> at the ${locNames(u.at)} · first: ${fxList(u.first)} · second: ${fxList(u.second)}</div>`;
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
      <div class="loc-name">${l.name}</div><div class="loc-zone">${zone}${fight ? " · <b>Uprising</b>" : ""}</div>
      <div class="loc-ctrl">Control: ${fxList(l.control)}</div><div class="loc-troops">${troops || "—"}</div></div>`;
  }).join("");
}

function renderResults() {
  const rows = S.players
    .map((x, q) => ({ q, lo: score(x), cit: x.cit, out: x.out }))
    .sort((a, b) => b.lo - a.lo || b.cit - a.cit)
    .map((r) => `<tr><td>${nm(r.q)}</td><td>${r.lo}</td><td>${r.cit}</td><td>${r.out}</td></tr>`)
    .join("");
  return `<b>Game over.</b> Score = Citizen + Outcast heights; tie → higher Citizen.
    <table class="results"><tr><th>Player</th><th>Score</th><th>Citizen</th><th>Outcast</th></tr>${rows}</table>`;
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
      <div class="corners"><span title="Cost: Sink Citizen">${c.cost ? icon("sink", c.cost) : ""}</span><span title="Scheme strength">${icon("scheme")}${strText(c.str)}</span></div>
      <h3>${c.name}</h3>
    </div>
    ${band(k, "down", fxList(c.down))}</div>`;
}

function renderRow() {
  $("row").innerHTML = CHARS.map((k) => {
    const cards = S.row[k].map((id, i) => cardHtml(id, `data-row="${k},${i}"`, canAct() && !ui.msg && canPay(current(), CARDS[id].cost)));
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
  const tuck = (id, side) => `<div class="tuck ${side} ${CARDS[id].char}" title="${CARDS[id].name}">${band(CARDS[id].char, side, fxList(CARDS[id][side]), CARDS[id].name)}</div>`;
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
      return `<div class="player ${q === acting ? "active" : ""}" style="border-left-color:${x.color}">
        <h3><span style="color:${x.color}">${esc(x.name)}</span><small>score ${score(x)}</small></h3>
        <div class="goods">${goodsLabel(x)}<span class="gx" title="Troops in supply"><span class="gt">troops in supply:</span><b>${x.supply}</b>${icon("low")}</span>${sch}</div>
        <div class="tableau">${tableauHtml(x)}</div></div>`;
    })
    .join("");
}

function renderPrompt() {
  let msg = "";
  let buttons = "";
  if (ui.msg) {
    msg = (ui.player != null ? `${nm(ui.player)}: ` : "") + ui.msg;
    buttons = ui.buttons.map((b, i) => `<button class="btn" data-btn="${i}">${b.label}</button>`).join("");
  } else if (S.phase === "play") {
    msg = `${nm(current())}: click a row card to Recruit it, or Scheme.`;
    buttons = `<button class="btn primary" data-scheme>Scheme</button>`;
  } else msg = "Game over.";
  buttons += `<button class="btn" data-undo ${history.length ? "" : "disabled"}>Undo</button>`;
  $("prompt").innerHTML = `<div class="msg">${msg}</div>${buttons}`;
}

function render() {
  renderStatus();
  renderMap();
  renderRow();
  renderSpire();
  renderPlayers();
  renderPrompt();
  $("log").innerHTML = S.log.map((m) => `<li>${m}</li>`).join("");
}

/* ---------- events ---------- */

$("glossary").innerHTML = glossaryHtml();

// Copy the log as plain text; icons carry hidden labels.
$("copy-log").addEventListener("click", () => {
  if (S) navigator.clipboard.writeText([...$("log").children].map((li) => li.textContent).join("\n"));
});

document.addEventListener("click", (e) => {
  if (!S) return;
  const t = e.target.closest("[data-undo],[data-scheme],[data-row],[data-btn]");
  if (!t) return;
  const d = t.dataset;
  if (d.undo !== undefined) return undo();
  if (d.btn !== undefined && ui.msg) return settle(ui.buttons[+d.btn].value);
  if (ui.msg) return;
  if (d.scheme !== undefined) return schemeTurn();
  if (d.row !== undefined) {
    const [k, i] = d.row.split(",");
    return recruit(k, +i);
  }
});

/* ---------- setup dialog ---------- */

function renderSetup() {
  const count = +$("setup-count").value;
  const prev = [...document.querySelectorAll(".setup-player input")].map((i) => i.value);
  $("setup-players").innerHTML = Array.from(
    { length: count },
    (_, i) => `<div class="setup-player"><i style="background:${COLORS[i]}"></i><input value="${esc(prev[i] || `Player ${i + 1}`)}" /></div>`,
  ).join("");
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
  startGame([...document.querySelectorAll(".setup-player input")].map((i) => i.value.trim() || "Player"));
});

openSetup();
