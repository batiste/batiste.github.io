const CHARACTERS = [
  {
    title: "Councillor Vane",
    line: "citizen",
    glyph: "⏢",
    sockets: 3,
    // Cost to play the 1st, 2nd, 3rd, 4th card into this line, in coin.
    // Identical on both characters for now; a lever for asymmetry later.
    playCosts: [0, 1, 2, 3],
    ability: "Sink twice a turn → gain 1 coin.",
    reward: "Rise your Citizen 1 and gain 3 coin.",
  },
  {
    title: "The Ferryman",
    line: "outcast",
    glyph: "⌭",
    sockets: 3,
    playCosts: [0, 1, 2, 2],
    ability: "Once per turn, pay 1 coin → Rise your Outcast 1.",
    reward: "Rise your Outcast 2.",
  },
];

const DECK = [
  {
    title: "Fixer",
    line: "any",
    glyph: "⎔",
    slots: [
      {
        text: "Recruit.",
      },
    ],
    intrigue: "Retooling. Move up to 2 socketed cubes to other cards in your lines.",
    keep: "1 coin",
  },
  {
    title: "Bribe",
    line: "citizen",
    glyph: "⬢",
    slot: true,
    play: "Your next card played into this line costs nothing.",
    intrigue: "Peek at one card in an opponent's hand.",
    keep: "1 coin",
  },
  {
    title: "Smuggler",
    line: "outcast",
    glyph: "⟁",
    slot: true,
    play: "Rise your Outcast 1.",
    intrigue: "Gain 1 coin for each space your Outcast Rose this round.",
    keep: "1 coin",
  },
  {
    title: "Embezzler",
    line: "citizen",
    glyph: "⏣",
    slot: true,
    play: "Gain 1 coin.",
    intrigue: "Audit. Gain 1 coin for each card in your Citizen line.",
    keep: "1 coin",
  },
  {
    title: "Fence",
    line: "outcast",
    glyph: "⌖",
    slot: true,
    play: "Sink your Outcast 1 → gain 2 coin.",
    intrigue: "If any other Outcast sits above yours, Rise your Outcast 1.",
    keep: "1 coin",
  },
  {
    title: "Whisper",
    line: "outcast",
    glyph: "✧",
    slot: true,
    play: "Draw 1 card.",
    intrigue: "Resolve the Play effect of one card in your discard pile.",
    keep: "1 coin",
  },
  {
    title: "Agitator",
    line: "outcast",
    glyph: "⌬",
    slots: [
      { text: "Sink your Citizen 1 → Rise your Outcast 1." },
      { text: "Gain 1 coin.", note: "A slotted cube may be moved here from another card." },
    ],
    intrigue: "If your Outcast is within 3 spaces of your Citizen, gain 4 coin.",
    keep: "1 coin",
  },
];
