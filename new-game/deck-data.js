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
    slots: [{ text: "cube Refresh 1" }],
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "Bribe",
    line: "outcast",
    glyph: "⬢",
    slots: [{ text: "Your next card played into this line costs nothing." }],
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "Smuggler",
    line: "outcast",
    glyph: "⟁",
    slots: [{ text: "Rise Outcast " }],
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "Embezzler",
    line: "outcast",
    glyph: "⏣",
    // Playtest probe: a direct card-count interaction (see rules.html
    // Glossary — Other Line).
    slots: [{ text: "1 coin for each card in your other line." }],
    conflictValue: 2,
    discardEffect: "1 coin",
  },
  {
    title: "Shady Deals",
    line: "outcast",
    glyph: "⌖",
    slots: [{ text: "Sink Outcast 1 → 2 coin" }],
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "Whisper",
    line: "citizen",
    glyph: "✧",
    slots: [{ text: "Draw 1 card" }],
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "Agitator",
    line: "citizen",
    glyph: "⌬",
    // Playtest probe: a direct card-count interaction, same pattern as
    // Embezzler (see rules.html Glossary — Other Line).
    slots: [
      { text: "Sink Citizen 1 → Rise Outcast 1." },
      { text: "Sink Citizen 1 coin → Rise Outcast for each card in your other line." },
    ],
    conflictValue: 2,
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
    slots: [{ text: "1 coin → Draw 1 card cube Refresh 1" }],
    cost: 2,
    conflictValue: 2,
    discardEffect: "1 coin",
  },
  {
    title: "Stevedore",
    line: "outcast",
    glyph: "⚓",
    slots: [{ text: "Rise Outcast 2" }],
    cost: 2,
    conflictValue: 2,
    discardEffect: "1 coin",
  },
  {
    title: "Under the table",
    line: "citizen",
    glyph: "⚖",
    slots: [{ text: "Sink Citizen 2 → 4 coin" }],
    cost: 3,
    conflictValue: 1,
    discardEffect: "Rise 1",
  },
  {
    title: "Powerbroker",
    line: "any",
    glyph: "⚜",
    slots: [
      { text: "Rise Citizen 1 Rise Outcast 1 1 coin" },
      { text: "1 coin Intrigue 1" },
    ],
    cost: 5,
    conflictValue: 2,
    discardEffect: "2 coin",
  },
  {
    title: "The Solicitor",
    line: "citizen",
    glyph: "⎊",
    slots: [{ text: "Rise Citizen 1 Draw 1 card" }],
    cost: 3,
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  {
    title: "The Cutthroat",
    line: "outcast",
    glyph: "⚒",
    slots: [{ text: "Discard 1 card → Rise Outcast 2 1 coin" }],
    cost: 3,
    conflictValue: 2,
    discardEffect: "1 coin",
  },
  {
    title: "The Middleman",
    line: "any",
    glyph: "⚗",
    slots: [{ text: "cube Rise Outcast" }, { text: "1 coin Refresh 1" }],
    cost: 4,
    conflictValue: 1,
    discardEffect: "1 coin",
  },
  // ---------- playtest probes (no coin cost — see deck.html's Noodle Shop
  // section note) ----------
  {
    title: "Revolutionary Organizer",
    line: "outcast",
    glyph: "⚑",
    // Playtest probe: a direct card-count interaction, same pattern as
    // Embezzler (see rules.html Glossary — Other Line).
    slots: [{ text: "cube. Rise Outcast for each card in your other line." }],
    conflictValue: 2,
    cost: 2,
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
    conflictValue: 2,
    cost: 4,
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
    reward: "Rise Citizen 2 cube",
    // Overrides the default tiebreak (rules.html Conflict: nearer the top
    // wins) instead of restating it — the point of a per-card condition.
    condition: "The player with the longest line Intrigue 1",
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
    reward: "4 coin",
    condition: "The player with the lowest Citizen may not commit an Intrigue.",
    refill: 2,
  },
  {
    title: "The Informant's Price",
    line: "outcast",
    glyph: "⚚",
    reward: "Rise Outcast 1 2 coin",
    condition: "Each player Sink Outcast 1.",
    refill: 2,
  },
  {
    title: "Closed Session",
    line: "citizen",
    glyph: "⌾",
    reward: "4 coin",
    condition: "Player(s) with the highest Citizen: Intrigue 1",
    refill: 1,
  },
];

// Replaces the Conflict pile once the Revolution begins (rules: "a pile of 3 random
// Revolution Conflict cards"). Same Reward/Condition/refill shape, raised stakes.
const REVOLUTION_CONFLICTS = [
  {
    title: "The Tribunal",
    line: "citizen",
    glyph: "⚡",
    reward: "Rise Citizen 3 2 coin",
    condition: "Every losing player Sink Citizen 1.",
    refill: 4,
  },
  {
    title: "Blood In The Streets",
    line: "outcast",
    glyph: "☠",
    reward: "Rise Outcast 3",
    // Hands are already empty by resolution time (Round Structure — Action
    // runs "until every player has discarded"), so a discard-the-hand
    // punishment can never actually happen. Sink is always resolvable.
    condition: "Each losing player Sink Outcast 1.",
    refill: 0,
  },
  {
    title: "The Purge",
    line: "outcast",
    glyph: "⛃",
    reward: "Rise Outcast 3 cube",
    // Same cost-on-the-winner shape as The Informant's Price, raised to
    // Revolution stakes.
    condition: "Each player Refresh 1.",
    refill: 3,
  },
];
