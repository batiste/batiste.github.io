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

function pick(msg, buttons, player) {
  return new Promise((resolve, reject) => {
    ui = { msg, buttons, player, resolve, reject };
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

/* ---------- effects ---------- */

// Stock shows a count, not repeated chips (a string n keeps the number).
const goodsLabel = (x) => Object.keys(GOODS).map((g) => icon(g, `${x.goods[g]}`)).join("");

async function pickGood(p, msg, filter = () => true) {
  const opts = Object.keys(GOODS)
    .filter(filter)
    .map((g) => ({ label: `${icon(g)} ${GOODS[g].name}`, value: g }));
  return pick(msg, opts, p);
}

async function spend(p, e) {
  const x = P(p);
  const [g, amount] = Object.entries(e.spend)[0];
  const total = Object.values(x.goods).reduce((a, b) => a + b, 0);
  if (g === "any" ? total < amount : x.goods[g] < amount) return log(`${nm(p)} cannot pay: ${fxText(e)}.`);
  const yes = await pick(`${fxText(e)}?`, [{ label: "Yes", value: true }, { label: "No", value: false }], p);
  if (!yes) return;
  if (g === "any") {
    for (let i = 0; i < amount; i++) {
      const h = await pickGood(p, `Spend which good? (${i + 1}/${amount})`, (h) => x.goods[h] > 0);
      x.goods[h]--;
    }
  } else x.goods[g] -= amount;
  rise(p, e.rise, e.n);
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
    const go = await pick(`${msg} Draw or stop?`, [{ label: "Draw", value: true }, { label: "Stop", value: false }], p);
    if (!go) break;
    const c = deck.pop();
    const drawn = `${c.good ? icon(c.good, c.n) : "a Patrol"} (${icon("heat", c.heat)})`;
    if (x.goods.T > 0) {
      const over = heat + c.heat > limit ? " That would get you caught!" : "";
      const stim = await pick(`Drew ${drawn}.${over} Spend a Stim to discard it?`, [{ label: "Spend Stim", value: true }, { label: "Keep", value: false }], p);
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
  const keep = await pick("Scheme: keep 1 card face down.", opts, p);
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
  if (e.limit) {
    ctx.limit += e.limit;
    return;
  }
  if (e.scheme) return scheme(p);
  if (e.run) return run(p, e.run + ctx.limit);
  if (e.choice) {
    for (let i = 0; i < e.choice; i++) {
      const g = await pickGood(p, `Take a good of your choice (${i + 1}/${e.choice}).`);
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

// Strength: +N Schemes and committed Arms, doubled per ×2 Scheme.
function strength(x, arms) {
  const strs = x.schemes.map((id) => CARDS[id].str);
  const plus = strs.filter((s) => s !== "x2").reduce((a, b) => a + b, 0) + arms;
  return plus * 2 ** strs.filter((s) => s === "x2").length;
}

async function uprising() {
  const u = TF_UPRISINGS[S.uprisings[S.uprising]];
  const order = Array.from({ length: n() }, (_, i) => (S.first + i) % n());
  const arms = {};
  for (const q of order) {
    const have = P(q).goods.A;
    arms[q] = have ? await pick(`Uprising: ${esc(u.name)}. Pass to ${nm(q)}, others look away. Commit how many Arms?`, Array.from({ length: have + 1 }, (_, a) => ({ label: `${a}`, value: a })), q) : 0;
  }
  const res = order.map((q) => ({ q, s: strength(P(q), arms[q]) }));
  res.forEach((r) => {
    const sch = P(r.q).schemes.map((id) => `${CARDS[id].name} ${strText(CARDS[id].str)}`).join(", ") || "no Scheme";
    log(`${nm(r.q)} reveals ${sch}, ${arms[r.q]} Arms: strength <b>${r.s}</b>.`);
  });
  res.sort((a, b) => b.s - a.s || P(a.q).out - P(b.q).out);
  log(`— Uprising: <b>${esc(u.name)}</b>. —`);
  for (const [rank, key] of [[0, "first"], [1, "second"]]) {
    const r = res[rank];
    if (!r || !r.s || !u[key].length) continue;
    log(`${nm(r.q)} takes the ${key} reward: ${fxList(u[key])}.`);
    await effects(r.q, u[key]);
  }
  S.players.forEach((x, q) => {
    x.schemes.forEach(discard);
    x.schemes = [];
    x.goods.A -= arms[q];
  });
  S.uprising++;
  if (S.met || S.uprising >= S.uprisings.length) return endGame();
  S.first = (S.first + 1) % n();
  S.step = 0;
  S.round++;
  log(`— Round ${S.round}: ${nm(S.first)} goes first. Uprising: <b>${esc(TF_UPRISINGS[S.uprisings[S.uprising]].name)}</b>. —`);
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
    })),
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
  log(`— Game starts. ${nm(0)} goes first. Uprising: <b>${esc(TF_UPRISINGS[S.uprisings[0]].name)}</b>. —`);
  render();
}

/* ---------- render ---------- */

function renderStatus() {
  if (S.phase === "end") return ($("status").innerHTML = renderResults());
  const u = TF_UPRISINGS[S.uprisings[S.uprising]];
  const turn = Math.floor(S.step / n()) + 1;
  $("status").innerHTML = `Round ${S.round}/${S.uprisings.length} · turn ${turn}/2 · ${nm(current())} to play${S.met ? " · <b>last round</b>" : ""}
    <div class="uprising"><b>Uprising: ${esc(u.name)}</b> · first: ${fxList(u.first)} · second: ${fxList(u.second)}</div>`;
}

function renderResults() {
  const rows = S.players
    .map((x, q) => ({ q, lo: Math.min(x.cit, x.out), cit: x.cit, out: x.out }))
    .sort((a, b) => b.lo - a.lo || b.cit - a.cit)
    .map((r) => `<tr><td>${nm(r.q)}</td><td>${r.lo}</td><td>${r.cit}</td><td>${r.out}</td></tr>`)
    .join("");
  return `<b>Game over.</b> Score = height of your lower pawn; tie → higher Citizen.
    <table class="results"><tr><th>Player</th><th>Score</th><th>Citizen</th><th>Outcast</th></tr>${rows}</table>`;
}

// A card: top strip, face (name, cost, Scheme strength), bottom strip.
const band = (k, side, fx, label = SIDES[k][side].name) =>
  `<div class="band ${side}"><span class="band-name">${side === "up" ? "▲" : "▼"} ${label}</span><div class="band-fx">${fx}</div></div>`;

function cardHtml(id, attrs = "", live = false) {
  const c = CARDS[id];
  const k = c.char;
  return `<div class="tcard ${k} ${live ? "live" : ""}" ${attrs}>
    ${band(k, "up", fxList(c.up))}
    <div class="face">
      <div class="corners"><span title="Cost: Sink Citizen">${c.cost ? icon("sink", c.cost) : "free"}</span><span title="Scheme strength">${icon("scheme")}${strText(c.str)}</span></div>
      <h3>${c.name}</h3><div class="deck-name">${SIDES[k].name}</div>
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

// Each character: tucked strips above (newest on top), the character card, tucked strips below (newest at the bottom).
function tableauHtml(x) {
  const tuck = (id, side) => `<div class="tuck ${side} ${CARDS[id].char}" title="${CARDS[id].name}">${band(CARDS[id].char, side, fxList(CARDS[id][side]), CARDS[id].name)}</div>`;
  return CHARS.map((k) => {
    const s = x.sides[k];
    return `<div class="char-col ${k}">
      ${[...s.up].reverse().map((id) => tuck(id, "up")).join("")}
      <div class="tcard char ${k}">${band(k, "up", fxList(SIDES[k].up.base))}
        <div class="face"><h3>${SIDES[k].name}</h3><div class="height">${icon(k)}<b>${x[k]}</b></div></div>
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
        <h3><span style="color:${x.color}">${esc(x.name)}</span><small>score ${Math.min(x.cit, x.out)}</small></h3>
        <div class="goods">${goodsLabel(x)}${sch}</div>
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
  renderRow();
  renderSpire();
  renderPlayers();
  renderPrompt();
  $("log").innerHTML = S.log.map((m) => `<li>${m}</li>`).join("");
}

/* ---------- events ---------- */

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
