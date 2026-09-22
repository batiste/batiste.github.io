const CHARACTERS = [
  {
    title: "Councillor Vane",
    line: "citizen",
    glyph: "⏢",
    sockets: 3,
    // Cost to play the 1st, 2nd, 3rd, 4th card into this line, in coin.
    // Identical on both characters for now; a lever for asymmetry later.
    playCosts: [0, 1, 2, 3],
    ability: "Play 3 cards on this line → Rise 1.",
    reward: "Rise 1 3 coin.",
  },
  {
    title: "The Ferryman",
    line: "outcast",
    glyph: "⌭",
    sockets: 3,
    playCosts: [0, 1, 2, 2],
    ability: "Once per round, 1 coin → Rise 1.",
    reward: "Rise 2.",
  },
  {
    title: "The Assessor",
    line: "citizen",
    glyph: "⌗",
    sockets: 2,
    playCosts: [0, 1, 1, 2],
    ability: "Once per round, Sink 1 → 2 coin.",
    reward: "2 coin.",
  },
  {
    title: "The Scavenger",
    line: "outcast",
    glyph: "⚙",
    sockets: 2,
    playCosts: [0, 1, 2, 3],
    ability: "Once per round, discard 1 card → Rise 1.",
    reward: "Rise 1 or Trash a card.",
  },
];

const DECK = [
  {
    title: "Fixer",
    line: "any",
    glyph: "⎔",
    slots: [{ text: "cube" }],
    intrigueValue: 1,
    intrigue: "Retooling. Move up to 2 socketed cubes to other cards in your lines.",
    discardEffect: "1 coin",
  },
  {
    title: "Bribe",
    line: "outcast",
    glyph: "⬢",
    slots: [{ text: "Your next card played into this line costs nothing." }],
    intrigueValue: 1,
    intrigue: "Peek at one card in an opponent's hand.",
    discardEffect: "1 coin",
  },
  {
    title: "Smuggler",
    line: "outcast",
    glyph: "⟁",
    slots: [{ text: "Rise Outcast " }],
    intrigueValue: 1,
    intrigue: "coin for each space your Outcast Rose this round.",
    discardEffect: "1 coin",
  },
  {
    title: "Embezzler",
    line: "outcast",
    glyph: "⏣",
    // Playtest probe: a direct card-count interaction (see rules.html
    // Glossary — Other Line).
    slots: [{ text: "coin for each card in your other line." }],
    intrigueValue: 2,
    intrigue: "Audit. coin for each card in your Citizen line.",
    discardEffect: "1 coin",
  },
  {
    title: "Shady Deals",
    line: "outcast",
    glyph: "⌖",
    slots: [{ text: "Sink Outcast 1 → 2 coin" }],
    intrigueValue: 1,
    intrigue: "If any other Outcast sits above yours, Rise Outcast 1.",
    discardEffect: "1 coin",
  },
  {
    title: "Whisper",
    line: "citizen",
    glyph: "✧",
    slots: [{ text: "Draw 1 card" }],
    intrigueValue: 1,
    intrigue: "Resolve the Play effect of one card in your discard pile.",
    discardEffect: "1 coin",
  },
  {
    title: "Agitator",
    line: "citizen",
    glyph: "⌬",
    // Playtest probe: rewards Agitator further when the Citizen line is the
    // weaker/shorter one (see rules.html Glossary — Under Pressure).
    slots: [
      { text: "Sink Citizen 1 → Rise Outcast 1." },
      { text: "If this line is Under Pressure: Rise Outcast 2." },
    ],
    intrigueValue: 2,
    intrigue: "If your Outcast is within 3 spaces of your Citizen, gain 4 coin.",
    discardEffect: "1 coin",
  },
];

// Same slotted-card template as DECK — still slots a cube — but also
// charges coin up front. Priced on ~1 coin per Rise-step of effect on
// top of the cube, so the four samples trace a cheap-to-priced curve.
const MARKET = [
  {
    title: "Tipster",
    line: "any",
    glyph: "☍",
    slots: [{ text: "1 coin → Draw 1 card cube" }],
    cost: 2,
    intrigueValue: 2,
    intrigue: "Draw 1 card for each card in your discard pile, to a maximum of 3.",
    discardEffect: "1 coin",
  },
  {
    title: "Stevedore",
    line: "outcast",
    glyph: "⚓",
    slots: [{ text: "Rise Outcast 2" }],
    cost: 2,
    intrigueValue: 2,
    intrigue: "Rise Outcast 1 for each other player whose Outcast sits below yours.",
    discardEffect: "1 coin",
  },
  {
    title: "Under the table",
    line: "citizen",
    glyph: "⚖",
    slots: [{ text: "Sink Citizen 2 → 4 coin" }],
    cost: 3,
    intrigueValue: 1,
    intrigue: "coin for each card in your Citizen line.",
    discardEffect: "Rise 1",
  },
  {
    title: "Powerbroker",
    line: "any",
    glyph: "⚜",
    slots: [
      { text: "Rise Citizen 1 Rise Outcast 1 1 coin" },
      { text: "1 coin" },
    ],
    cost: 5,
    intrigueValue: 2,
    intrigue: "If your Citizen and Outcast are within 3 spaces of each other, gain 4 coin.",
    discardEffect: "2 coin",
  },
  {
    title: "The Solicitor",
    line: "citizen",
    glyph: "⎊",
    slots: [{ text: "Rise Citizen 1 Draw 1 card" }],
    cost: 3,
    intrigueValue: 1,
    intrigue: "coin for each card in your hand.",
    discardEffect: "1 coin",
  },
  {
    title: "The Cutthroat",
    line: "outcast",
    glyph: "⚒",
    slots: [{ text: "Discard 1 card → Rise Outcast 2 1 coin" }],
    cost: 3,
    intrigueValue: 2,
    intrigue: "coin for each card in your discard pile.",
    discardEffect: "1 coin",
  },
  {
    title: "The Middleman",
    line: "any",
    glyph: "⚗",
    slots: [{ text: "cube Rise Outcast" }, { text: "1 coin" }],
    cost: 4,
    intrigueValue: 1,
    intrigue: "Draw 1 card for each Broker card in your lines.",
    discardEffect: "1 coin",
  },
  // ---------- playtest probes (no coin cost — see deck.html's Noodle Shop
  // section note) ----------
  {
    title: "Revolutionary Organizer",
    line: "outcast",
    glyph: "⚑",
    // First card that lets one line develop the other — cube crosses into
    // the Outcast line instead of this card's own line (rendered with the
    // plant-other-icon, not a plain Plant; see rules.html Glossary).
    slots: [{ text: "cube. If your Outcast line is Under Pressure: Rise Outcast 2." }],
    intrigueValue: 2,
    cost: 2,
    intrigue: "Rise Outcast 2 if your Outcast line is Under Pressure.",
    discardEffect: "1 coin",
  },
  {
    title: "Echo",
    line: "any",
    glyph: "⟲",
    // Deliberately strong probe: repeats every card's normal socket/recruit
    // effect in the other line, not their Intrigue/discard effects, and
    // never moves cubes (see rules.html Glossary's Echo ruling).
    slots: [{ text: "Repeat the effect of every slotted card in your other line." }],
    intrigueValue: 2,
    cost: 4,
    intrigue: "Draw 1 card.",
    discardEffect: "1 coin",
  },
];

// Not part of a player's hand: one Citizen and one Outcast card are revealed from this
// deck at the start of each round to set that round's stakes for the two conflicts.
// `refill` is this card's X in the Replenish formula: 2 × player count + X cubes
// added this round (see rules.html — Replenish).
const CONFLICTS = [
  {
    title: "Show Trial",
    line: "citizen",
    glyph: "⚔",
    reward: "Rise Citizen 2 cube.",
    condition: "Ties are won by the Citizen nearer the top of the Spire.",
    refill: 1,
  },
  {
    title: "Underground Vote",
    line: "outcast",
    glyph: "⛓",
    reward: "Rise Outcast 2 1 coin",
    condition: "Each losing player 1 coin.",
    refill: 3,
  },
  {
    title: "Public Inquiry",
    line: "citizen",
    glyph: "⛨",
    reward: "4 coin.",
    condition: "The player with the lowest Citizen may not commit an Intrigue here.",
    refill: 2,
  },
];

// Replaces the Conflict pile once the Revolution begins (rules: "a pile of 3 random
// Revolution Conflict cards"). Same Reward/Condition/refill shape, raised stakes.
const REVOLUTION_CONFLICTS = [
  {
    title: "The Tribunal",
    line: "citizen",
    glyph: "⚡",
    reward: "Rise Leader 3 and 3 coin.",
    condition: "Every other player Sinks Leader 1.",
    refill: 4,
  },
  {
    title: "Blood In The Streets",
    line: "outcast",
    glyph: "☠",
    reward: "Rise Leader 4.",
    condition: "Each losing player discards their entire hand.",
    refill: 0,
  },
];
