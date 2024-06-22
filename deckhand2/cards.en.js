

var cards = [

    {
        "title": "Shopkeeper",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'c'],
        "img": "cards/scruf.png",
        "type": "merchant",
        "guild": ['merchant'],
        "build_text": ':rum:'
    },

    {
        "title": "Docks",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'c'],
        "img": "cards/loaded.png",
        "type": "merchant",
        "guild": ['merchant'],
        "build_text": ':coin::coin::trans::rum::parrot:'
    },

    {
        "title": "Bustling Market",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'r', 'c'],
        "img": "cards/busy.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "guild": ['merchant'],
        // "play_text": 'Produce 2:coin:',
        // "play_text": `:parrot::rum:`,
        // "bid_text": `:rum::coin:`,
        "build_text": `:rum-guild: <b>X</b> :rum:`
    },

    {
        "title": "Animal Market",
        "coin": 2,
        "discard": ['p'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/animal_market.png",
        "type": "merchant",
        "build_text": `Produce 2`,
        "guild": ['merchant', 'animal'],
        "build_text": `:rum: :or: :parrot:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "guild": ['merchant'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:rum::rum:`,
    },

    {
        "title": "Trade",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r'],
        "img": "cards/wind.png",
        "type": "merchant",
        "guild": ['merchant', 'merchant'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:rum:`,
    },

    {
        "title": "Water Bank",
        "discard": ['c'],
        "cost": ['c', 'c'],
        "img": "cards/water-bank.png",
        "type": "merchant",
        "build_text": `:coin:`,
        "guild": [],
    },


    {
        "title": "Gun Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'g', 'c', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        "guild": ['merchant', 'military'],
        "build_text": `:rum::gun:`,
    },

    {
        "discard": ['p'],
        "title": "Rich Pirate",
        "coin": 2,
        "cost": ['r', 'p', 'c'],
        "img": "cards/rich.png",
        "type": "merchant",
        "guild": ['merchant'],
        "build_text": `:coin::coin:`,
    },

    {
        "title": "White Parrot",
        "coin": 2,
        "discard": ['p'],
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build_text": ':parrot:',
        "guild": ['animal']
    },

    {
        "title": "Blue Parrot",
        "discard": ['p'],
        "cost": ['p', 'p'],
        "img": "cards/parrot-2.png",
        "type": "wild",
        "guild": ['animal', 'animal'],
        "build_text": `:parrot:`
    },

    {
        "title": "Grand Escape",
        "coin": 3,
        "discard": ['r'],
        "cost": ['p', 'g', 'r'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "guild": ['animal', 'military'],
        "build_text": `:gun: :or: :rum:`
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "discard": ['p'],
        "cost": ['p', 'p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:parrot-guild: <b>X</b> :parrot:`,
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "discard": ['p'],
        "cost": ['p', 'g', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:gun::parrot:`,
        "build": ['p'],
    },

    {
        "title": "Deep Sea Horror",
        "coin": 3,
        "discard": ['g'],
        "cost": ['p', 'c'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:gun:`,
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "discard": ['r'],
        "cost": ['g', 'c'],
        "img": "cards/crab.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:parrot::coin:`,
        "build": ['p', 'c', 'g'],
    },

    {
        "title": "Sidekick",
        "coin": 2,
        "discard": ['r'],
        "cost": ['g', 'p'],
        "img": "cards/sidekick.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:rum:`,
    },

    {
        "discard": ['r'],
        "title": "Drunk Marmosets",
        "coin": 3,
        "cost": ['p', 'p', 'r', 'r'],
        "img": "cards/marmosets.png",
        "type": "wild",
        "guild": ['animal', 'merchant'],
        // "bid_text": `if you lose the bid: :draw-1:`,
        "build_text": `:rum-guild: <b>X</b> :parrot:`,
        "build": ['p'],
    },

    {
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['p', 'g', 'c'],
        "img": "cards/warrior.jpeg",
        "guild": ['animal', 'military'],
        "type": "military",
        // "bid_text": `:parrot::trans::coin: `,
        "build_text": `:parrot:`,
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "coin": 3,
        "cost": ['g', 'g', 'c', 'c'],
        "img": "cards/sneak_attack.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :rum:`,
        "build": ['g'],
    },

    // {
    //     "discard": ['g'],
    //     "title": "Skeleton Crew",
    //     "coin": 3,
    //     "cost": ['g', 'g', 'c'],
    //     "img": "cards/skeleton-crew.png",
    //     "type": "military",
    //     "guild": ['military'],
    //     "build": ['g'],
    //     "build_text": `:gun-guild: <b>X</b> :coin:`,
    // },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "type": "military",
        "guild": ['military'],
        "build_text": ':gun:'
    },

    {
        "title": "Skeleton Crew",
        "discard": ['g'],
        "cost": ['g', 'g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "guild": ['military', 'military'],
        "build_text": `:gun:`,
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 'r', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:coin::coin::trans::gun::gun:`,
        "build": ['g']
    },

    {
        "discard": ['g'],
        "title": "Walk the Plank",
        "coin": 2,
        "cost": ['c'],
        "img": "cards/walk.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:coin::trans::gun:`,
        "build": ['g']
    },

    {
        "discard": ['g'],
        "title": "Locksmith",
        "coin": 2,
        "cost": ['g', 'r'],
        "img": "cards/locksmith.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :coin:`,
        "build": ['g'],
    },

    {
        "discard": ['g'],
        "title": "Haunted Cave",
        "coin": 3,
        "cost": ['g', 'g', 'c'],
        "img": "cards/haunted.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun::trans::coin::coin::coin:`,
        "build": ['g', 'g'],
    },

    {
        "title": "Plunder",
        "coin": 2,
        "discard": ['g'],
        "cost": ['g', 'g', 'c'],
        "img": "cards/plunder.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :gun:`,
    },

]