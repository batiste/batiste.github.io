

var cards = [

    {
        "title": "Return to Port",
        "coin": 2,
        "cost": ['p'],
        "img": "cards/loaded.png",
        "type": "wild",
        // "bid_text": `:rum::trans::coin:`,
        // "build_text": `:rum::trans::coin::coin:`,
        "play_text": 'Return 4, Refresh 2',
        "build_text": 'Return 3, Refresh 3',
        "build": ['p'],
    },

    {
        "title": "Engineer",
        "coin": 1,
        "cost": ['r'],
        "img": "cards/scruf.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "build": ['r'],
        "play_text": `Build 1`,
        // "bid_text": `:parrot::rum:`,
        "build_text": `Build 1`
    },

    // {
    //     "title": "Explore",
    //     "coin": 3,
    //     "cost": ['p', 'r', 'c'],
    //     "img": "cards/wind.png",
    //     "type": "merchant",
    //     // "play_text": `:coin::coin:`,
    //     "build": ['r'],
    //     "play_text": 'Return 2 cards into your hand. Produce 1.',
    //     // "build_text": `:rum::trans::draw-1:`
    // },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g'],
        "img": "cards/brawl.png",
        "type": "military",
        "play_text": `Buy 1`,
        "build_text": `Buy 1`,
        "build": ['g']
    },

    {
        "title": "Bustling Market",
        "coin": 1,
        "cost": ['c'],
        "img": "cards/busy.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "build": ['r'],
        "play_text": 'Produce 2',
        // "play_text": `:parrot::rum:`,
        // "bid_text": `:rum::coin:`,
        "build_text": `Produce 1`
    },

    {
        "title": "Plunder",
        "coin": 2,
        "cost": ['c'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `Buy 1`,
        "build_text": `Buy 1`,
        "build": ['g']
    },

    {
        "title": "Emerald Trade",
        "coin": 2,
        "cost": ['p', 'r'],
        "img": "cards/animal_market.png",
        "type": "merchant",
        "play_text": `Produce 2`,
        "build_text": `Produce 2`,
        "build": ['r', 'c']
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "cost": ['r', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['r', 'c'],
        "build_text": `Trade 2`,
    },


    {
        "title": "Spice Merchant",
        "coin": 2,
        "cost": ['r'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win the bid: :draw-1:`,
        "build": ['r'],
        "build_text": `:rum: :trans: Return all`,
    },


    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `Return 1, Produce 2`,
        "build_text": `Produce :parrot::parrot:`,
    },

    {
        "title": "Blue Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot-2.png",
        "type": "wild",
        // "play_text": `:coin::coin:`,
        "build": ['p'],
        "play_text": 'Produce 1, Return 2',
        "build_text": `Return 2, Produce :parrot:`
    },

    {
        "title": "Skeleton Crew",
        "coin": 2,
        "cost": ['g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "play_text": `Buy 1`,
        "build_text": `Buy 1`,
        "build": ['g'],
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `Build 1. Return 1.`,
        "build": ['p'],
        "build_text": `Produce :parrot::parrot::parrot:`,
    },

    {
        "title": "Grand Escape",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "play_text": `Produce :parrot::gun::rum::coin:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['p', 'r', 'g']
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "cost": ['p', 'g'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "play_text": `Produce :gun::gun::gun:.`,
        "build_text": `Produce :gun::gun::gun:`,
        "build": ['p'],
    },

    {
        "title": "Deep Sea Horror",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "play_text": `Activate 2 buildings, Produce 1.`,
        "build_text": `Activate 2 other buildings`,
        // "build_text": `.`,
        "build": ['p'],
    },

    {
        "title": "Water Bank",
        "coin": 3,
        "cost": ['c', 'c', 'r'],
        "img": "cards/water-bank.png",
        "type": "merchant",
        // "bid_text": `:parrot::rum::gun:`,
        "play_text": "Build 1.",
        "build_text": `Produce :coin::coin::coin:`,
        "build": ['c']
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "cost": ['g', 'c'],
        "img": "cards/crab.png",
        "type": "wild",
        "play_text": `Produce :gun::parrot::coin:`,
        "build": ['p', 'c', 'g'],
    },

    {
        "title": "Sidekick",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/sidekick.png",
        "type": "wild",
        // "bid_text": `:rum::trans::coin:`,
        "play_text": `Move any resource, Build 1`,
        "build": ['p', 'g'],
    },

    {
        "title": "Drunk Marmosets",
        "coin": 3,
        "cost": ['r', 'p', 'p'],
        "img": "cards/marmosets.png",
        "type": "wild",
        // "bid_text": `if you lose the bid: :draw-1:`,
        "build_text": `:parrot::rum::trans::draw-1:`,
        "build": ['p'],
    },

    {
        "title": "Rich Pirate",
        "coin": 2,
        "cost": ['c', 'p'],
        "img": "cards/rich.png",
        "type": "merchant",
        "play_text": `:coin::coin:`,
        "build": ['c']
    },

    {
        "title": "Sneak Attack",
        "coin": 3,
        "cost": ['r', 'g', 'g'],
        "img": "cards/sneak_attack.png",
        "type": "military",
        "play_text": `:gun::coin::coin:`,
        "build_text": `:gun::trans::draw-1:`,
        "build": ['g'],
    },

    {
        "title": "Skeleton Crew",
        "coin": 3,
        "cost": ['g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "play_text": `if you have no cards <br>in hand: :coin::draw-2:`,
        "build": ['g'],
    },

    {
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 'r', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `:gun: :gun:`,
        // "build_text": `:hammer: :gun::trans::coin:`,
        "build": ['g']
    },

    {
        "title": "Walk the Plank",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/walk.png",
        "type": "military",
        "play_text": `:gun::draw-1:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Buy",
        "coin": 3,
        "cost": ['c', 'g'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `:draw-2:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Amazon Warrior",
        "coin": 3,
        "cost": ['g', 'p'],
        "img": "cards/warrior.jpeg",
        "type": "military",
        // "bid_text": `:parrot::trans::coin: `,
        "build": ['g']
    },

    {
        "title": "Locksmith",
        "coin": 2,
        "cost": ['g', 'r'],
        "img": "cards/locksmith.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "play_text": `:coin::coin:`,
        // "build_text": `:hammer::coin::trans::coin:`,
        "build": ['g'],
    },

    {
        "title": "Haunted Cave",
        "coin": 3,
        "cost": ['g', 'g', 'c'],
        "img": "cards/haunted.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "play_text": `:coin::coin::gun:`,
        // "build_text": `:hammer::coin::trans::coin:`,
        "build": ['g', 'g'],
    },
]