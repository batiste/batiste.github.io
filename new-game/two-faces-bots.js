"use strict";

// Two Faces bots, shared by the playtest page (AI seats) and two-faces-sim.js.
// They read the game's globals (S, P, CARDS, canPay, …) from two-faces-play.js, so load this file after it.
// Bots: RANDOM (uniform) and valueBot(profile): a one-step value model; a profile is a set of weights (see PROFILES).
// Each bot has turn(p) → { type: "recruit", k, i, id, side } | { type: "pass" } and choose(p, info, buttons) → button index.

const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
const pickRandom = (a) => a[Math.floor(Math.random() * a.length)];
const upcoming = () => TF_UPRISINGS[S.uprisings[S.uprising]];
const affordable = (p) => CHARS.flatMap((k) => S.row[k].map((id, i) => ({ k, i, id })).filter((o) => canPay(p, CARDS[o.id])));

const RANDOM = {
  turn(p) {
    const opts = affordable(p);
    if (!opts.length) return { type: "pass" };
    return { type: "recruit", ...pickRandom(opts), side: pickRandom(["up", "down"]) };
  },
  choose: (p, info, buttons) => Math.floor(Math.random() * buttons.length),
};

// Value-model bots. A profile is a set of weights; greedy is the state-blind baseline.
// State-aware terms: tempo (end the game when ahead, stall when behind), contest (fight the leader's
// locations), deny (value a card has for the next player), engine (stack a side),
// future (a tucked strip fires again on later activations of its side).
const GV = { P: 0.6, S: 0.6, A: 0.5, T: 0.3 };
// plan: fight planning for the coming Uprising and no goods hoarding (0 = the older, naive bot).
const BASE_W = { plan: 1, riskBehind: 1, rise: 2.5, troop: 1, fight: 1.2, ctrl: 0.6, goods: 1, scheme: 1, limit: 0.2, cost: 1, arms: 1, tempo: 0, contest: 0, deny: 0, engine: 0, future: 0.6 };
const PROFILES = {
  greedy: {},
  myopic: { future: 0 }, // greedy without future activations: the old baseline
  frugal: { rise: 3.5, troop: 0.8, fight: 0.6, scheme: 0.5, tempo: 1 },
  warlord: { troop: 1.5, fight: 2.5, scheme: 1.6, ctrl: 0.3 },
  builder: { engine: 0.6, goods: 1.3, limit: 0.5 },
  smart: { tempo: 1, contest: 1.5, deny: 0.5 },
  "smart-old": { tempo: 1, contest: 1.5, deny: 0.5, plan: 0 }, // smart before fight planning, for comparison
  daring: { tempo: 1, contest: 1.5, deny: 0.5, riskBehind: 0.3 }, // smart, but gambles on street runs when behind
};

const RUN_EV = {}; // expected goods from a street run (better of the two decks), by heat limit (stop when a draw is more likely to hurt than help)
for (let L = 1; L <= 14; L++) {
  let total = 0;
  for (let t = 0; t < 400; t++) {
    const deck = shuffle(TF_CARDS.filter((c) => c.char === CHARS[t % 2]).flatMap((c) => Array(c.copies).fill({ heat: heatOf(c), n: costSize(c) })));
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
  // Force at the coming Uprising: troops at its locations + Arms (a rival's Arms are visible).
  const force = (q) => upcoming().at.reduce((t, id) => t + S.troops[id][q], 0) + P(q).goods.A;
  // Fight planning: a troop at the Uprising is worth a lot when it can tip the fight, less once clearly ahead.
  function fightValue(p) {
    if (!w.plan) return w.fight;
    const mine = force(p);
    const rival = Math.max(...S.players.map((_, q) => (q === p ? 0 : force(q))));
    const first = fxValue(p, upcoming().first, { goods: { ...P(p).goods }, limit: 0 });
    // Half the reward: the troop may still lose, and every fighter loses a troop.
    if (mine + 1 > rival && mine <= rival) return w.fight + first * 0.5; // this troop takes the lead
    if (mine <= rival) return w.fight; // too far behind: do not chase
    if (mine === 0) return w.fight + 1; // join for the second reward
    return w.fight * 0.5; // already clearly ahead
  }

  function locValue(p, id) {
    let v = w.troop;
    if (upcoming().at.includes(id)) v += fightValue(p);
    const t = S.troops[id];
    const best = Math.max(...t.filter((_, q) => q !== p));
    if (t[p] <= best && t[p] + 1 > best) v += w.ctrl * fxValue(p, LOC[id].control, { goods: { ...P(p).goods }, limit: 0 });
    const l = leader();
    if (w.contest && l !== null && l !== p && t[l] === Math.max(...t) && t[p] + 1 >= t[l]) v += w.contest;
    return v;
  }
  const troopValue = (p, zone) => (P(p).supply ? Math.max(...LOCATIONS.filter((l) => l[zone]).map((l) => locValue(p, l.id))) : 0);

  // A good is worth less the more of it you already hold: a stockpile you cannot spend is worth little.
  const goodValue = (g, stock) => (w.goods * GV[g]) / (1 + stock / 4);
  function fxValue(p, list, sim) {
    let v = 0;
    for (const e of list) {
      if (e.gain) {
        for (let i = 0; i < e.n; i++) v += goodValue(e.gain, sim.goods[e.gain]++);
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
      else if (e.run) {
        // A street run is worth less the more goods you already hold (no hoarding).
        const stock = w.plan ? Object.values(sim.goods).reduce((a, b) => a + b, 0) : 0;
        v += (w.goods * 0.55 * RUN_EV[Math.min(14, e.run + sim.limit)]) / (1 + Math.max(0, stock - 6) / 6);
      }
      else if (e.choice) v += w.goods * 0.6 * e.choice;
    }
    return v;
  }

  // Cost of a card: the goods it takes, plus a Citizen step (1 point) for each good lacking.
  function payValue(p, card) {
    const x = P(p);
    const steps = missing(p, card);
    const goods = Object.entries(card.cost).reduce((t, [g, k]) => t + Math.min(k, x.goods[g]) * goodValue(g, x.goods[g] - 1), 0);
    return goods + w.cost * w.rise * steps - tempo(p, steps);
  }

  // Turns this player has left: the table's smallest Citizen–Outcast gap closes about 2.5 per round.
  const turnsLeft = () => {
    const gap = Math.min(...S.players.map((x) => x.cit - x.out));
    const rounds = Math.min(S.uprisings.length - S.uprising, Math.max(1, gap / 2.5));
    return Math.max(0, 2 * rounds - Math.floor(S.step / n()) - 1);
  };
  // Future activations of a strip: turns left × share of turns that activate its side (sides with more strips get more).
  // Spend strips are judged with a small stock of goods, not today's (often empty) one.
  function futureValue(p, k, side, strip, dropped) {
    if (!w.future) return 0;
    const x = P(p);
    const total = CHARS.reduce((t, c) => t + x.sides[c].up.length + x.sides[c].down.length, 0);
    const acts = turnsLeft() * ((2 + x.sides[k][side].length) / (8 + total));
    const val = (list) => fxValue(p, list, { goods: { P: 2, S: 2, A: 1, T: 1 }, limit: 0 });
    return w.future * acts * (val(strip) - (dropped ? val(dropped) : 0));
  }

  // Expected value of a street run through a deck: sampled runs, stopping when a draw hurts more than it helps;
  // goods valued against the current stock (so the deck with the goods you need wins).
  function deckRunValue(p, deck, limit) {
    let total = 0;
    for (let t = 0; t < 40; t++) {
      const d = shuffle([...deck]);
      const stock = { ...P(p).goods };
      let heat = 0;
      let got = [];
      while (d.length && drawEV(heat, limit, d, got.reduce((a, c) => a + c.n, 0)) > 0) {
        const c = d.pop();
        heat += c.heat;
        if (heat > limit) {
          got = [];
          break;
        }
        got.push(c);
      }
      got.forEach((c) => Object.entries(c.cost).forEach(([g, k]) => { for (let i = 0; i < k; i++) total += goodValue(g, stock[g]++); }));
    }
    return total / 40;
  }

  // Tucking card id on side: the new strip, then the side's strips newest to oldest (oldest dropped if full), then the base.
  function tuckValue(p, id, side) {
    const k = CARDS[id].char;
    const col = P(p).sides[k][side];
    const kept = col.length >= TF_CONFIG.sideCap ? col.slice(1) : col;
    const list = activationOrder([...CARDS[id][side], ...[...kept].reverse().flatMap((c) => CARDS[c][side]), ...charOf(P(p), k)[side]]);
    const cost = payValue(p, CARDS[id]);
    const dropped = kept !== col ? CARDS[col[0]][side] : null;
    return fxValue(p, list, { goods: { ...P(p).goods }, limit: 0 }) - cost + w.engine * kept.length + futureValue(p, k, side, CARDS[id][side], dropped);
  }
  const bestTuck = (p, id) => Math.max(tuckValue(p, id, "up"), tuckValue(p, id, "down"));

  return {
    turn(p) {
      const next = (S.step + 1) % n() === 0 && S.step + 1 >= 2 * n() ? null : (current() + 1) % n();
      const opts = affordable(p).flatMap((o) => {
        const deny = w.deny && next !== null && canPay(next, CARDS[o.id]) ? w.deny * bestTuck(next, o.id) : 0;
        return ["up", "down"].map((side) => ({ type: "recruit", ...o, side, v: tuckValue(p, o.id, side) + deny }));
      });
      if (!opts.length) return { type: "pass" };
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
          // Take a troop only from where it is spare: keep control (lead of 2+), never from the coming fight,
          // never one just moved (no back-and-forth). Otherwise stop moving.
          return idx((id) => {
            if (id === null) return 0.5;
            if ((info.arrived || []).includes(id)) return -99;
            return S.troops[id][p] - Math.max(...S.troops[id].filter((_, q) => q !== p)) - 1 - (upcoming().at.includes(id) ? 5 : 0);
          });
        case "runDeck":
          return idx((k) => deckRunValue(p, info.decks[k], info.limit));
        case "draw": {
          // Behind: losing the haul matters less (riskBehind < 1 pushes further).
          const haul = info.haul.reduce((t, c) => t + c.n, 0) * (lead(p) < 0 ? w.riskBehind : 1);
          return drawEV(info.heat, info.limit, info.deck, haul) > 0 ? 0 : 1;
        }
        case "stim": // a Stim forces another draw: only worth it against a card that would bust you
          return info.heat + info.card.heat > info.limit ? 0 : 1;
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
