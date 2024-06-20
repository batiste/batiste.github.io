

var cards = [

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
        "title": "Plunder",
        "coin": 2,
        "discard": ['g'],
        "cost": ['g', 'g', 'c'],
        "img": "cards/plunder.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :gun:`,
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
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['p', 'g', 'c'],
        "img": "cards/warrior.jpeg",
        "guild": ['animal', 'military'],
        "type": "wild",
        // "bid_text": `:parrot::trans::coin: `,
        "build_text": `:parrot:`,
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
        "build_text": `:rum: <b>|</b> :parrot:`,
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
        "title": "Wild Parrot",
        "discard": ['p'],
        "cost": ['p', 'p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:parrot::parrot:`,
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
        "build_text": `:gun: <b>|</b> :rum:`
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
        "cost": ['p', 'c'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "play_text": `Activate 2 buildings, Produce 1.`,
        "build_text": `Activate 2 other buildings`,
        // "build_text": `.`,
        "build": ['p'],
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