"use strict";

// Headless simulator for Two Faces: plays many games with bots and prints balance and "fun" metrics.
// Runs the real rules (two-faces-data.js, two-faces-play.js) in a VM with a stub page, so it never drifts from the game.
//
//   node two-faces-sim.js [games=1000] [players=3]            full report: random, smart, 1 smart vs greedy
//   node two-faces-sim.js compare  [games] [players]           rule variants side by side (see VARIANTS)
//   node two-faces-sim.js profiles [games] [players]           bot profiles: mixed tournament + each against itself
//   node two-faces-sim.js cards    [games] [players]           forced pick: does taking a strip win games?
//
// Bots: "random" picks uniformly; the others are value-model profiles (see PROFILES in valueBot).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const MODE = ["compare", "profiles", "cards"].includes(process.argv[2]) ? process.argv[2] : "report";
const args = process.argv.slice(MODE === "report" ? 2 : 3);
const GAMES = +args[0] || 1000;
const PLAYERS = +args[1] || 3;

// Rule variants for "compare". data: runs in the sandbox after loading (mutate TF_* data, define helpers).
// patch: [find, replace] pairs applied to two-faces-play.js source before loading.
const VARIANTS = [
  { name: "Current rules" },
  {
    name: "No Scheme (strips → +1 Arms, Council Hall → +Secret +Arms)",
    data: `NO_SCHEME = true;
    TF_CARDS.forEach((c) => ["up", "down"].forEach((s) => (c[s] = c[s].map((e) => (e.scheme ? { gain: "A", n: 1 } : e)))));
    LOC.hall.control = [{ gain: "S", n: 1 }, { gain: "A", n: 1 }];`,
  },
  {
    name: "Catch-up: leader −2 Uprising strength",
    patch: [["s: strength(q, u.at, arms[q]) }));", "s: strength(q, u.at, arms[q]) - leaderPenalty(q) }));"]],
    data: `function leaderPenalty(q) {
      const s = S.players.map(score);
      const top = Math.max(...s);
      return s[q] === top && s.filter((v) => v === top).length === 1 ? 2 : 0;
    }`,
  },
];

// ---------- load the game in a sandbox ----------

function sandbox(variant = {}) {
  const els = {};
  const stubEl = () => ({ innerHTML: "", textContent: "", value: "3", returnValue: "", children: [], addEventListener() {}, showModal() {} });
  const box = vm.createContext({
    console,
    process,
    setImmediate,
    document: { getElementById: (id) => els[id] || (els[id] = stubEl()), querySelectorAll: () => [], addEventListener() {} },
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, "two-faces-data.js"), "utf8"), box, { filename: "two-faces-data.js" });
  let play = fs.readFileSync(path.join(__dirname, "two-faces-play.js"), "utf8");
  for (const [a, b] of variant.patch || []) {
    if (!play.includes(a)) throw new Error(`Variant "${variant.name}": patch target not found: ${a}`);
    play = play.replace(a, b);
  }
  vm.runInContext(play, box, { filename: "two-faces-play.js" });
  if (variant.data) vm.runInContext(variant.data, box);
  return box;
}

// Everything below runs inside the sandbox, where the game's globals (S, ui, busy, recruit, …) live.
// setups: [[title, botNames]]. done(results): [{ title, text, m }] (m: headline metrics).
function sim(GAMES, setups, done) {
  render = () => {};
  const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
  const pct = (x) => `${(100 * x).toFixed(0)}%`;
  const pickRandom = (a) => a[Math.floor(Math.random() * a.length)];
  const noScheme = () => typeof NO_SCHEME !== "undefined"; // set by the "No Scheme" variant
  const upcoming = () => TF_UPRISINGS[S.uprisings[S.uprising]];
  const affordable = (p) => CHARS.flatMap((k) => S.row[k].map((id, i) => ({ k, i, id })).filter((o) => canPay(p, CARDS[o.id].cost)));

  /* ---------- bots ---------- */

  const RANDOM = {
    turn(p) {
      const opts = affordable(p);
      if (!opts.length || (!noScheme() && Math.random() < 1 / (opts.length + 1))) return { type: "scheme" };
      return { type: "recruit", ...pickRandom(opts), side: pickRandom(["up", "down"]) };
    },
    choose: (p, info, buttons) => Math.floor(Math.random() * buttons.length),
  };

  // Value-model bots. A profile is a set of weights; greedy is the state-blind baseline.
  // State-aware terms: tempo (end the game when ahead, stall when behind), contest (fight the leader's
  // locations), deny (value a card has for the next player), engine (stack a side).
  const GV = { P: 0.6, S: 0.6, A: 0.5, T: 0.3 };
  const BASE_W = { rise: 2.5, troop: 1, fight: 1.2, ctrl: 0.6, goods: 1, scheme: 1, limit: 0.2, cost: 1, arms: 1, tempo: 0, contest: 0, deny: 0, engine: 0 };
  const PROFILES = {
    greedy: {},
    rusher: { rise: 3.5, troop: 0.8, fight: 0.6, scheme: 0.5, tempo: 1 },
    warlord: { troop: 1.5, fight: 2.5, scheme: 1.6, ctrl: 0.3 },
    builder: { engine: 0.6, goods: 1.3, limit: 0.5 },
    smart: { tempo: 1, contest: 1.5, deny: 0.5 },
  };

  const RUN_EV = {}; // expected goods from a street run, by heat limit (stop when a draw is more likely to hurt than help)
  for (let L = 1; L <= 14; L++) {
    let total = 0;
    for (let t = 0; t < 400; t++) {
      const deck = shuffle([...TF_CONTRABAND]);
      let heat = 0;
      let goods = 0;
      while (deck.length && drawEV(heat, L, deck, goods) > 0) {
        const c = deck.pop();
        heat += c.heat;
        if (heat > L) {
          goods = 0;
          break;
        }
        goods += c.n;
      }
      total += goods;
    }
    RUN_EV[L] = total / 400;
  }
  function drawEV(heat, limit, deck, haulGoods) {
    const bust = deck.filter((c) => heat + c.heat > limit);
    const safe = deck.filter((c) => heat + c.heat <= limit);
    const pb = bust.length / deck.length;
    return (1 - pb) * avg(safe.map((c) => c.n)) - pb * haulGoods;
  }

  const lead = (p) => score(P(p)) - Math.max(...S.players.filter((_, q) => q !== p).map(score));
  const leader = () => {
    const s = S.players.map(score);
    const top = Math.max(...s);
    return s.filter((v) => v === top).length === 1 ? s.indexOf(top) : null;
  };
  const fighting = (p) => upcoming().at.some((id) => S.troops[id][p] > 0);

  function valueBot(profile) {
    const w = { ...BASE_W, ...PROFILES[profile] };
    const schemeValue = (p) => w.scheme * (fighting(p) ? 1.8 : 0.5);
    // Tempo: closing your own Citizen–Outcast gap ends the game sooner: good when ahead, bad when behind.
    const tempo = (p, steps) => w.tempo * steps * Math.sign(lead(p) || -1) * 0.5;
    // Score = Citizen + Outcast, so every effective step up is worth the same.
    const riseValue = (p, k, n) => {
      const x = P(p);
      const eff = k === "out" ? Math.min(n, x.cit - x.out) : Math.min(n, TF_CONFIG.spire - x.cit);
      return eff * w.rise + (k === "out" ? tempo(p, eff) : -tempo(p, eff));
    };
    function locValue(p, id) {
      let v = w.troop;
      if (upcoming().at.includes(id)) v += w.fight;
      const t = S.troops[id];
      const best = Math.max(...t.filter((_, q) => q !== p));
      if (t[p] <= best && t[p] + 1 > best) v += w.ctrl * fxValue(p, LOC[id].control, { goods: { ...P(p).goods }, limit: 0 });
      const l = leader();
      if (w.contest && l !== null && l !== p && t[l] === Math.max(...t) && t[p] + 1 >= t[l]) v += w.contest;
      return v;
    }
    const troopValue = (p, zone) => (P(p).supply ? Math.max(...LOCATIONS.filter((l) => l[zone]).map((l) => locValue(p, l.id))) : 0);

    function fxValue(p, list, sim) {
      let v = 0;
      for (const e of list) {
        if (e.gain) {
          sim.goods[e.gain] += e.n;
          v += w.goods * GV[e.gain] * e.n;
        } else if (e.spend) {
          const [g, n] = Object.entries(e.spend)[0];
          const have = g === "any" ? Object.values(sim.goods).reduce((a, b) => a + b, 0) : sim.goods[g];
          if (have < n) continue;
          const gain = fxValue(p, [e.get], sim) - w.goods * (g === "any" ? 0.4 : GV[g]) * n;
          if (gain <= 0) continue;
          v += gain;
          if (g !== "any") sim.goods[g] -= n;
        } else if (e.rise) v += riseValue(p, e.rise, e.n);
        else if (e.troop) v += troopValue(p, e.troop) * e.n;
        else if (e.move) v += 0.5 * e.move;
        else if (e.limit) {
          sim.limit += e.limit;
          v += w.limit * e.limit;
        } else if (e.scheme) v += schemeValue(p);
        else if (e.run) v += w.goods * 0.55 * RUN_EV[Math.min(14, e.run + sim.limit)];
        else if (e.choice) v += w.goods * 0.6 * e.choice;
      }
      return v;
    }

    // Tucking card id on side: the new strip, then the side's strips newest to oldest (oldest dropped if full), then the base.
    function tuckValue(p, id, side) {
      const k = CARDS[id].char;
      const col = P(p).sides[k][side];
      const kept = col.length >= TF_CONFIG.sideCap ? col.slice(1) : col;
      const list = [...CARDS[id][side], ...[...kept].reverse().flatMap((c) => CARDS[c][side]), ...SIDES[k][side].base];
      const c = CARDS[id].cost;
      const cost = w.cost * w.rise * c - tempo(p, c); // each cost step is a point lost
      return fxValue(p, list, { goods: { ...P(p).goods }, limit: 0 }) - cost + w.engine * kept.length;
    }
    const bestTuck = (p, id) => Math.max(tuckValue(p, id, "up"), tuckValue(p, id, "down"));

    return {
      turn(p) {
        const next = (S.step + 1) % n() === 0 && S.step + 1 >= 2 * n() ? null : (current() + 1) % n();
        const opts = affordable(p).flatMap((o) => {
          const deny = w.deny && next !== null && canPay(next, CARDS[o.id].cost) ? w.deny * bestTuck(next, o.id) : 0;
          return ["up", "down"].map((side) => ({ type: "recruit", ...o, side, v: tuckValue(p, o.id, side) + deny }));
        });
        if (!noScheme() || !opts.length) opts.push({ type: "scheme", v: schemeValue(p) * 1.1 });
        opts.forEach((o) => (o.v += Math.random() * 0.3));
        return opts.sort((a, b) => b.v - a.v)[0];
      },
      choose(p, info, buttons) {
        const idx = (f) => buttons.reduce((best, b, i) => (f(b.value) > f(buttons[best].value) ? i : best), 0);
        const x = P(p);
        switch (info.kind) {
          case "spend":
            return 0;
          case "spendGood":
            return idx((g) => x.goods[g] - GV[g]);
          case "send":
          case "moveTo":
            return idx((id) => locValue(p, id));
          case "moveFrom":
            return idx((id) => S.troops[id][p] - Math.max(...S.troops[id].filter((_, q) => q !== p)) - (upcoming().at.includes(id) ? 5 : 0));
          case "draw":
            return drawEV(info.heat, info.limit, info.deck, info.haul.reduce((t, c) => t + c.n, 0)) > 0 ? 0 : 1;
          case "stim":
            return info.heat + info.card.heat > info.limit || !info.card.good ? 0 : 1;
          case "keep": {
            const base = upcoming().at.reduce((t, id) => t + S.troops[id][p], 0) + x.schemes.reduce((t, id) => t + (CARDS[id].str === "x2" ? 0 : CARDS[id].str), 0);
            return idx((id) => (CARDS[id].str === "x2" ? base : CARDS[id].str));
          }
          case "choice":
            return idx((g) => (g === "P" || g === "S" ? 2 : g === "A" ? 1 : 0) - x.goods[g]);
          case "arms":
            return Math.round(w.arms * (buttons.length - 1));
          default:
            return 0;
        }
      },
    };
  }

  // Forced pick: a bot that takes card key ("id.side") the first time it can, otherwise plays like base.
  function forcedBot(base, key) {
    const [id, side] = key.split(".");
    let done = false;
    return {
      ...base,
      turn(p) {
        if (!done) {
          const o = affordable(p).find((o) => o.id === id);
          if (o) {
            done = true;
            G.forced = p;
            return { type: "recruit", ...o, side };
          }
        }
        return base.turn(p);
      },
    };
  }

  /* ---------- one game, with stats ---------- */

  let G = null; // current game's stats
  const wrap = (fn, before, after) =>
    async function (...args) {
      if (before) before(...args);
      await fn(...args);
      if (after) after(...args);
    };
  activate = wrap(activate, (p, k, side) => G.sides[p].add(`${k}.${side}`));
  run = wrap(run, null, () => {
    G.runs++;
    if (S.log[0].includes("caught")) G.busts++;
  });
  uprising = wrap(
    uprising,
    () => {
      const u = upcoming();
      const fighters = S.players.map((_, q) => q).filter((q) => u.at.some((id) => S.troops[id][q] > 0));
      G.fights.push(fighters.length);
    },
    () => G.leaders.push(S.players.map(score)),
  );
  control = wrap(control, () =>
    LOCATIONS.forEach((l) => {
      const t = S.troops[l.id];
      const top = Math.max(...t);
      const c = G.ctrl[l.id];
      c.rounds++;
      if (top && t.filter((v) => v === top).length === 1) c.held++;
      if (t.filter((v) => v > 0).length >= 2) c.contested++;
    }),
  );

  const makeBot = (name) => {
    if (name === "random") return RANDOM;
    const [kind, base, key] = name.split(":");
    return kind === "forced" ? forcedBot(valueBot(base), key) : valueBot(name);
  };

  async function playGame(names) {
    const bots = names.map(makeBot);
    G = { forced: null, runs: 0, busts: 0, fights: [], leaders: [], ctrl: Object.fromEntries(LOCATIONS.map((l) => [l.id, { rounds: 0, held: 0, contested: 0 }])) };
    G.sides = bots.map(() => new Set());
    G.took = bots.map(() => new Set());
    G.options = [];
    startGame(bots.map((_, q) => `P${q}`));
    const plan = {};
    for (let steps = 0; S.phase === "play"; steps++) {
      if (steps > 20000) throw new Error("stalled game");
      if (ui.msg) {
        const p = ui.player;
        const i = ui.info.kind === "side" ? Math.max(0, ui.buttons.findIndex((b) => b.value === plan[p])) : bots[p].choose(p, ui.info, ui.buttons);
        settle(ui.buttons[i].value);
      } else if (!busy) {
        const p = current();
        G.options.push(affordable(p).length);
        const a = bots[p].turn(p);
        if (a.type === "scheme") schemeTurn();
        else {
          plan[p] = a.side;
          G.took[p].add(`${a.id}.${a.side}`);
          recruit(a.k, a.i);
        }
      }
      await new Promise((r) => setImmediate(r));
    }
    // Winner(s): higher lower-pawn, then higher Citizen. Shared ties split the win.
    const final = S.players.map((x) => [score(x), x.cit]);
    const best = final.reduce((b, f) => (f[0] > b[0] || (f[0] === b[0] && f[1] > b[1]) ? f : b));
    const winners = final.map((f) => f[0] === best[0] && f[1] === best[1]);
    const share = winners.map((w) => (w ? 1 / winners.filter(Boolean).length : 0));
    const sorted = final.map((f) => f[0]).sort((a, b) => b - a);
    return { ...G, names, rounds: S.round, met: S.met, final: final.map((f) => f[0]), cit: S.players.map((x) => x.cit), share, margin: sorted[0] - sorted[1] };
  }

  /* ---------- reports ---------- */

  function report(title, games) {
    const botNames = games[0].names;
    const n = botNames.length;
    const m = {};
    const lines = [`\n## ${title} — ${games.length} games, ${n} players\n`];
    const out = (s) => lines.push(s);

    out("### Game shape");
    const rounds = {};
    games.forEach((g) => (rounds[g.rounds] = (rounds[g.rounds] || 0) + 1));
    m.rounds = avg(games.map((g) => g.rounds));
    out(`- Rounds: avg ${m.rounds.toFixed(1)} · ${Object.keys(rounds).sort((a, b) => a - b).map((r) => `${r}: ${pct(rounds[r] / games.length)}`).join(", ")}`);
    out(`- Ended by a meeting: ${pct(avg(games.map((g) => (g.met ? 1 : 0))))} (else: Uprising deck ran out)`);
    out(`- Final score (Citizen + Outcast): winner avg ${avg(games.map((g) => Math.max(...g.final))).toFixed(1)}, all players avg ${avg(games.flatMap((g) => g.final)).toFixed(1)}; Citizen avg ${avg(games.flatMap((g) => g.cit)).toFixed(1)}`);
    out(`- Affordable cards per turn: avg ${avg(games.flatMap((g) => g.options)).toFixed(1)} of ${2 * TF_CONFIG.row}`);

    out("\n### Tension (fun proxies)");
    m.margin = avg(games.map((g) => g.margin));
    m.close = avg(games.map((g) => (g.margin <= 1 ? 1 : 0)));
    m.blowout = avg(games.map((g) => (g.margin >= 4 ? 1 : 0)));
    out(`- Winning margin (1st − 2nd): avg ${avg(games.map((g) => g.margin)).toFixed(2)} · tie on score ${pct(avg(games.map((g) => (g.margin === 0 ? 1 : 0))))} · ≤1 ${pct(avg(games.map((g) => (g.margin <= 1 ? 1 : 0))))} · blowout ≥4 ${pct(avg(games.map((g) => (g.margin >= 4 ? 1 : 0))))}`);
    const leaderOf = (s) => {
      const top = Math.max(...s);
      return s.filter((v) => v === top).length === 1 ? s.indexOf(top) : null;
    };
    const changes = games.map((g) => {
      let c = 0;
      let last = null;
      g.leaders.map(leaderOf).forEach((l) => {
        if (l !== null && last !== null && l !== last) c++;
        if (l !== null) last = l;
      });
      return c;
    });
    m.changes = avg(changes);
    out(`- Lead changes per game: avg ${m.changes.toFixed(2)} · games with none ${pct(avg(changes.map((c) => (c ? 0 : 1))))}`);
    const early = games.filter((g) => g.leaders.length >= 3 && leaderOf(g.leaders[1]) !== null);
    m.runaway = avg(early.map((g) => g.share[leaderOf(g.leaders[1])]));
    out(`- Runaway: sole leader after round 2 wins ${pct(m.runaway)} (fair baseline ${pct(1 / n)})`);
    const mid = games.filter((g) => g.leaders.length >= 2);
    const comeback = mid.map((g) => {
      const s = g.leaders[Math.floor(g.leaders.length / 2) - 1];
      const low = Math.min(...s);
      return g.share.some((w, q) => w > 0 && s[q] === low && s.filter((v) => v === low).length === 1) ? 1 : 0;
    });
    m.comeback = avg(comeback);
    m.seats = botNames.map((_, q) => avg(games.map((g) => g.share[q])));
    out(`- Comeback: the sole last player at mid-game wins ${pct(m.comeback)}`);
    out(`- Win rate by seat: ${m.seats.map((w, q) => `P${q + 1} ${pct(w)}`).join(" · ")}`);

    out("\n### Uprisings & city");
    const fights = games.flatMap((g) => g.fights);
    out(`- Fighters per Uprising: avg ${avg(fights).toFixed(2)} · nobody ${pct(avg(fights.map((f) => (f === 0 ? 1 : 0))))} · uncontested (1) ${pct(avg(fights.map((f) => (f === 1 ? 1 : 0))))} · contested (2+) ${pct(avg(fights.map((f) => (f >= 2 ? 1 : 0))))}`);
    LOCATIONS.forEach((l) => {
      const c = games.map((g) => g.ctrl[l.id]).reduce((a, b) => ({ rounds: a.rounds + b.rounds, held: a.held + b.held, contested: a.contested + b.contested }));
      out(`- ${l.name.padEnd(13)} controlled ${pct(c.held / c.rounds)} of rounds · contested ${pct(c.contested / c.rounds)}`);
    });
    const runs = games.reduce((t, g) => t + g.runs, 0);
    m.caught = games.reduce((t, g) => t + g.busts, 0) / runs;
    out(`- Street runs per game: ${(runs / games.length).toFixed(1)} · caught ${pct(m.caught)}`);

    out("\n### Sides (does the game force 3 of 4?)");
    const players = games.flatMap((g) => g.sides.map((s, q) => ({ s, w: g.share[q] })));
    const bySides = [1, 2, 3, 4].map((k) => players.filter((x) => x.s.size === k));
    m.sides3 = players.filter((x) => x.s.size >= 3).length / players.length;
    out(`- Distinct sides activated: ${bySides.map((a, i) => `${i + 1}: ${pct(a.length / players.length)} (win ${pct(avg(a.map((x) => x.w)))})`).join(" · ")}`);
    const names = { "cit.up": "Rally", "cit.down": "Council", "out.up": "Street", "out.down": "Deal" };
    m.council = avg(players.map((x) => (x.s.has("cit.down") ? 1 : 0)));
    out(`- Used by: ${Object.entries(names).map(([k, v]) => `${v} ${pct(avg(players.map((x) => (x.s.has(k) ? 1 : 0))))}`).join(" · ")}`);

    out("\n### Cards (win rate of players who took it, vs fair " + pct(1 / n) + ")");
    const rows = [];
    TF_CARDS.forEach((c) =>
      ["up", "down"].forEach((side) => {
        const key = `${c.id}.${side}`;
        const takers = games.flatMap((g) => g.took.map((t, q) => (t.has(key) ? g.share[q] : null)).filter((v) => v !== null));
        if (takers.length >= 30) rows.push({ name: `${c.name} ${side === "up" ? "▲" : "▼"}`, fx: fxList(c[side]).replace(/<[^>]*>/g, " ").replace(/\s+/g, " "), taken: takers.length, win: avg(takers) });
      }),
    );
    rows.sort((a, b) => b.win - a.win);
    m.best = rows[0];
    m.worst = rows[rows.length - 1];
    const fmt = (r) => `  ${r.name.padEnd(16)} win ${pct(r.win).padStart(4)} · taken by ${String(r.taken).padStart(4)} players · ${r.fx.trim()}`;
    out("- Strongest:");
    rows.slice(0, 6).forEach((r) => out(fmt(r)));
    out("- Weakest:");
    rows.slice(-6).forEach((r) => out(fmt(r)));
    // Per bot name (seat-independent), and the forced pick's taker if any.
    m.byBot = {};
    games.forEach((g) =>
      g.names.forEach((b, q) => {
        const r = (m.byBot[b] = m.byBot[b] || { games: 0, win: 0 });
        r.games++;
        r.win += g.share[q];
      }),
    );
    const forced = games.filter((g) => g.forced != null);
    m.forced = { games: forced.length, win: avg(forced.map((g) => g.share[g.forced])) };
    return { title, text: lines.join("\n"), m };
  }

  (async () => {
    const results = [];
    for (const [title, names, count = GAMES] of setups) {
      const games = [];
      for (let i = 0; i < count; i++) games.push(await playGame(typeof names === "function" ? names() : names));
      results.push(report(title, games));
    }
    done(results);
  })().catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
}

const run = (variant, setups) => new Promise((resolve) => vm.runInContext(`(${sim})`, sandbox(variant))(GAMES, setups, resolve));
const all = (bot) => Array(PLAYERS).fill(bot);
const pct = (x) => `${Math.round(100 * x)}%`;

const PROFILE_NAMES = ["greedy", "rusher", "warlord", "builder", "smart"];
const shuffled = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((x) => x[1]);
const cols = [
  ["Rounds", (m) => m.rounds.toFixed(1)],
  ["Runaway", (m) => pct(m.runaway)],
  ["Comeback", (m) => pct(m.comeback)],
  ["Lead chg", (m) => m.changes.toFixed(2)],
  ["Margin", (m) => m.margin.toFixed(1)],
  ["Close ≤1", (m) => pct(m.close)],
  ["Blowout", (m) => pct(m.blowout)],
  ["Seats", (m) => m.seats.map(pct).join("/")],
  ["3+ sides", (m) => pct(m.sides3)],
  ["Council", (m) => pct(m.council)],
  ["Caught", (m) => pct(m.caught)],
  ["Best strip", (m) => (m.best ? `${m.best.name.trim()} ${pct(m.best.win)}` : "—")],
  ["Worst strip", (m) => (m.worst ? `${m.worst.name.trim()} ${pct(m.worst.win)}` : "—")],
];
const md = (head, rows) => [head, head.map(() => "---"), ...rows].map((r) => `| ${r.join(" | ")} |`).join("\n");
const metricsTable = (rows) => md(["Setup", ...cols.map(([h]) => h)], rows.map(([name, m]) => [name, ...cols.map(([, f]) => f(m))]));
const tick = () => process.stderr.write(".");

const MODES = {
  // Full report: random, smart, and a skill check.
  async report() {
    const results = await run({}, [
      ["All random", all("random")],
      ["All smart", all("smart")],
      ["Skill check: 1 smart vs greedy", ["smart", ...all("greedy").slice(1)]],
    ]);
    console.log(results.map((r) => r.text).join("\n"));
  },

  // Rule variants side by side, all-smart and all-random.
  async compare() {
    const rows = { smart: [], random: [] };
    for (const v of VARIANTS) {
      const [s, r] = await run(v, [["smart", all("smart")], ["random", all("random")]]);
      rows.smart.push([v.name, s.m]);
      rows.random.push([v.name, r.m]);
      tick();
    }
    console.log(`# Variants — ${GAMES} games each, ${PLAYERS} players (fair win rate ${pct(1 / PLAYERS)})\n`);
    console.log(`## All smart\n\n${metricsTable(rows.smart)}\n\n## All random\n\n${metricsTable(rows.random)}`);
  },

  // Bot profiles: a mixed tournament (who wins?), then each profile against itself (does the game stay tight?).
  async profiles() {
    const setups = [["Mixed", () => shuffled(PROFILE_NAMES).slice(0, PLAYERS), GAMES * 2], ...PROFILE_NAMES.map((b) => [b, all(b)])];
    const [mixed, ...mirror] = await run({}, setups);
    const byBot = Object.entries(mixed.m.byBot).sort((a, b) => b[1].win / b[1].games - a[1].win / a[1].games);
    console.log(`# Bot profiles — ${PLAYERS} players (fair win rate ${pct(1 / PLAYERS)})\n`);
    console.log(`## Mixed tournament (${GAMES * 2} games, random profiles and seats)\n`);
    console.log(md(["Profile", "Games", "Win rate"], byBot.map(([b, r]) => [b, r.games, pct(r.win / r.games)])));
    console.log(`\n## Each profile against itself (${GAMES} games each)\n\n${metricsTable(mirror.map((r) => [r.title, r.m]))}`);
  },

  // Forced pick: one smart player at a random seat takes a given strip the first time it can.
  async cards() {
    const keys = [];
    sandboxCards().forEach((c) => ["up", "down"].forEach((side) => keys.push([`${c.name} ${side === "up" ? "▲" : "▼"}`, `${c.id}.${side}`, c])));
    const rows = [];
    for (const [label, key, c] of keys) {
      const [r] = await run({}, [[label, () => shuffled([`forced:smart:${key}`, ...all("smart").slice(1)])]]);
      rows.push({ label, c, side: key.split(".")[1], ...r.m.forced });
      tick();
    }
    rows.sort((a, b) => b.win - a.win);
    const se = (r) => Math.sqrt((r.win * (1 - r.win)) / r.games);
    const flag = (r) => (r.win - 2 * se(r) > 1 / PLAYERS ? "strong" : r.win + 2 * se(r) < 1 / PLAYERS ? "weak" : "");
    console.log(`# Forced pick — ${GAMES} games per strip, ${PLAYERS} smart players (fair ${pct(1 / PLAYERS)})\n`);
    console.log("One player takes the strip the first time it can afford it; everyone else plays normally. Flag: outside 2 standard errors.\n");
    console.log(md(["Strip", "Cost", "Win rate", "± 2 SE", "Flag"], rows.map((r) => [r.label, r.c.cost, pct(r.win), pct(2 * se(r)), flag(r)])));
  },
};

// Card list for the "cards" mode, read from the data file.
function sandboxCards() {
  return vm.runInContext("TF_CARDS", sandbox());
}

(async () => {
  await MODES[MODE]();
  process.stderr.write("\n");
})();
