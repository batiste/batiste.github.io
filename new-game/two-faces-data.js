// Aeropolis: Two Faces — data shared by two-faces.html (rules) and two-faces-play.html (hot-seat game).

const TF_CONFIG = {
  spire: 16, // Spire heights 1 (base) to 16 (top). Citizen starts on 16, Outcast on 1.
  row: 2, // cards on offer from each deck (Citizen, Outcast)
  sideCap: 3, // strips per side; a new one beyond this discards the oldest
  start: { P: 1, S: 1, A: 0, T: 0 }, // starting goods
};

const GOODS = {
  P: { name: "Papers", one: "Paper", use: "Deal: climb your Outcast." },
  S: { name: "Secrets", one: "Secret", use: "Rally: your Citizen lifts your Outcast (patronage)." },
  A: { name: "Arms", one: "Arms", use: "Uprising: +1 strength each, committed in secret." },
  T: { name: "Stims", one: "Stim", use: "Street run: discard the card just drawn." },
};

// A side = the column tucked above or below a character. The character card is the base of both its sides.
const SIDES = {
  cit: {
    name: "Citizen",
    up: { name: "Rally", base: [{ spend: { S: 1 }, rise: "out", n: 1 }] },
    down: { name: "Council", base: [{ gain: "S", n: 1 }] },
  },
  out: {
    name: "Outcast",
    up: { name: "Street", base: [{ run: 5 }] },
    down: { name: "Deal", base: [{ spend: { P: 1 }, rise: "out", n: 1 }] },
  },
};

// Effects: {gain, n} · {rise, n} · {spend, rise, n} (optional) · {limit} (Street only) · {scheme} · {run} (base only) · {choice}.
// Card: character (= its deck), cost (Sink Citizen), strength as a Scheme (+N, or "x2": doubles your total), top strip (up), bottom strip (down).
const TF_CARDS = [
  { id: "clerk", name: "Clerk", char: "cit", cost: 0, str: 2, copies: 4, up: [{ gain: "S", n: 1 }], down: [{ gain: "P", n: 1 }] },
  { id: "magistrate", name: "Magistrate", char: "cit", cost: 1, str: 2, copies: 3, up: [{ spend: { S: 1 }, rise: "out", n: 1 }], down: [{ gain: "P", n: 2 }] },
  { id: "physician", name: "Physician", char: "cit", cost: 0, str: 2, copies: 3, up: [{ gain: "T", n: 1 }], down: [{ gain: "T", n: 2 }] },
  { id: "spymaster", name: "Spymaster", char: "cit", cost: 1, str: 3, copies: 3, up: [{ gain: "S", n: 1 }], down: [{ scheme: true }] },
  { id: "quartermaster", name: "Quartermaster", char: "cit", cost: 1, str: 2, copies: 3, up: [{ gain: "A", n: 1 }], down: [{ gain: "A", n: 2 }] },
  { id: "orator", name: "Orator", char: "cit", cost: 2, str: 2, copies: 3, up: [{ rise: "out", n: 1 }], down: [{ gain: "S", n: 2 }] },
  { id: "censor", name: "Censor", char: "cit", cost: 2, str: "x2", copies: 3, up: [{ spend: { S: 1 }, rise: "out", n: 1 }], down: [{ scheme: true }] },
  { id: "patron", name: "Patron", char: "cit", cost: 2, str: 2, copies: 3, up: [{ spend: { S: 2 }, rise: "out", n: 2 }], down: [{ spend: { S: 1 }, rise: "cit", n: 1 }] },

  { id: "lookout", name: "Lookout", char: "out", cost: 0, str: 2, copies: 4, up: [{ limit: 1 }], down: [{ gain: "P", n: 1 }] },
  { id: "runner", name: "Runner", char: "out", cost: 0, str: 2, copies: 3, up: [{ gain: "T", n: 1 }], down: [{ gain: "P", n: 1 }] },
  { id: "forger", name: "Forger", char: "out", cost: 1, str: 2, copies: 3, up: [{ limit: 1 }], down: [{ spend: { P: 1 }, rise: "out", n: 1 }] },
  { id: "fence", name: "Fence", char: "out", cost: 1, str: 2, copies: 3, up: [{ limit: 2 }], down: [{ spend: { any: 2 }, rise: "out", n: 1 }] },
  { id: "gunrunner", name: "Gunrunner", char: "out", cost: 1, str: 2, copies: 3, up: [{ gain: "A", n: 1 }], down: [{ gain: "A", n: 2 }] },
  { id: "blackmailer", name: "Blackmailer", char: "out", cost: 1, str: 3, copies: 3, up: [{ gain: "S", n: 1 }], down: [{ spend: { S: 1 }, rise: "out", n: 1 }] },
  { id: "agitator", name: "Agitator", char: "out", cost: 1, str: "x2", copies: 3, up: [{ limit: 1 }], down: [{ scheme: true }] },
  { id: "smuggler", name: "Smuggler", char: "out", cost: 2, str: 2, copies: 3, up: [{ limit: 2 }], down: [{ spend: { P: 1 }, rise: "out", n: 2 }] },
];

// Contraband deck for Street runs: good (or null for Patrol), goods gained, heat.
const TF_CONTRABAND = [
  ...["P", "S", "A", "T"].flatMap((g) => [
    ...Array(3).fill({ good: g, n: 1, heat: 1 }),
    ...Array(2).fill({ good: g, n: 2, heat: 2 }),
    { good: g, n: 3, heat: 3 },
  ]),
  ...Array(4).fill({ good: null, n: 0, heat: 2 }),
];

// One Uprising per round. first / second: rewards for the strongest and second strongest.
const TF_UPRISINGS = [
  { name: "Dock Riot", first: [{ rise: "out", n: 3 }], second: [{ rise: "out", n: 1 }] },
  { name: "Show Trial", first: [{ rise: "cit", n: 3 }], second: [{ rise: "cit", n: 1 }] },
  { name: "Barricades", first: [{ rise: "out", n: 2 }, { gain: "A", n: 2 }], second: [{ gain: "A", n: 1 }] },
  { name: "General Strike", first: [{ rise: "out", n: 2 }, { rise: "cit", n: 1 }], second: [{ rise: "out", n: 1 }] },
  { name: "Market Raid", first: [{ choice: 3 }], second: [{ choice: 1 }] },
  { name: "Council Purge", first: [{ rise: "cit", n: 2 }, { gain: "S", n: 1 }], second: [{ gain: "S", n: 1 }] },
  { name: "Storm the Forum", first: [{ rise: "out", n: 2 }, { rise: "cit", n: 2 }], second: [{ rise: "out", n: 1 }] },
  { name: "Night of Knives", first: [{ rise: "out", n: 3 }], second: [] },
];

// Icons: inline SVG chips (styles in two-faces-icons.css), shared by the rules page and the playtest.
const ICON_PATHS = {
  P: '<path d="M6 2h9l4 4v16H6z" fill="currentColor"/><path d="M9 10h7M9 13.5h7M9 17h5" stroke="var(--chip)" stroke-width="1.6"/>',
  S: '<path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" fill="currentColor"/><circle cx="12" cy="12" r="3.6" fill="var(--chip)"/>',
  A: '<path d="M12 1.5l2.4 12.5H9.6z" fill="currentColor"/><path d="M6.5 14.5h11v2h-11z" fill="currentColor"/><path d="M10.8 16.5h2.4v4.5h-2.4z" fill="currentColor"/>',
  T: '<g transform="rotate(45 12 12)"><rect x="7.5" y="1.5" width="9" height="21" rx="4.5" fill="currentColor"/><path d="M7.5 12h9" stroke="var(--chip)" stroke-width="1.8"/></g>',
  heat: '<path d="M12 1.5c1.5 4.5 7 6.5 7 13a7 7 0 0 1-14 0c0-3.5 2-5.8 3.3-7.6.6 2.2 1.9 3.6 3.2 3.9-.7-3.6.2-6.8.5-9.3z" fill="currentColor"/>',
  scheme: '<path d="M2 7c3-1 6.5-1.2 10 1 3.5-2.2 7-2 10-1-.3 5.5-3 9-6.5 9-2 0-3-1.5-3.5-3-.5 1.5-1.5 3-3.5 3C5 16 2.3 12.5 2 7z" fill="currentColor"/><ellipse cx="7.8" cy="10.3" rx="1.9" ry="1.3" fill="var(--chip)"/><ellipse cx="16.2" cy="10.3" rx="1.9" ry="1.3" fill="var(--chip)"/>',
  cit: '<path d="M12 3l8 9h-5v9H9v-9H4z" fill="currentColor"/>',
  out: '<path d="M12 3l8 9h-5v9H9v-9H4z" fill="currentColor"/>',
  sink: '<path d="M12 21l8-9h-5V3H9v9H4z" fill="currentColor"/>',
  any: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 7.5v9M7.5 12h9" stroke="currentColor" stroke-width="2.4"/>',
};
const ICON_TITLES = { heat: "Heat", scheme: "Scheme", cit: "Rise Citizen", out: "Rise Outcast", sink: "Sink Citizen", any: "Any good" };

// icon("P") → chip; icon("P", 2) → 2 chips. Above 3, or a non-number (e.g. "2/7"): the number + 1 chip.
function icon(key, n) {
  const title = GOODS[key] ? GOODS[key].name : ICON_TITLES[key];
  const chip = `<span class="gi gi-${key}" title="${title}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[key]}</svg></span>`;
  if (typeof n === "number" && n <= 3) return `<span class="gx">${chip.repeat(n)}</span>`;
  return `<span class="gx">${n != null ? `<b>${n}</b>` : ""}${chip}</span>`;
}

function fxText(e) {
  if (e.gain) return `+${icon(e.gain, e.n)}`;
  if (e.spend) {
    const [g, n] = Object.entries(e.spend)[0];
    return `${icon(g, n)} → ${icon(e.rise, e.n)}`;
  }
  if (e.rise) return icon(e.rise, e.n);
  if (e.limit) return `+${icon("heat", e.limit)} limit`;
  if (e.scheme) return icon("scheme");
  if (e.run) return `Run ${icon("heat", e.run)}`;
  if (e.choice) return `+${icon("any", e.choice)}`;
  return "";
}
const strText = (str) => `<span class="str">${str === "x2" ? "×2" : `+${str}`}</span>`;
const fxList = (list) => (list.length ? list.map(fxText).join(" ") : "—");
