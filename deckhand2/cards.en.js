

var cards = [

    {
        "title": "Smuggler Cache",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/cache.png",
        "type": "merchant",
        "guild": ['merchant', 'crate'],
        "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :helm: :trans: :draw-2:',
        "build_text": '&nbsp;:coin:'
    },

    {
        "title": "Military Dominance",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/sneak_attack.png",
        "type": "merchant",
        // "guild": ['vp', 'vp'],
        "play_text": '<b>7</b> :gun-guild:&nbsp;&nbsp; <b>6</b> :helm:',
        "build_text": 'Win the game.'
    },


    {
        "title": "Trade Monopoly",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/mono.png",
        "type": "merchant",
        "guild": ['merchant', 'crate'],
        "play_text": '<b>4</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':helm::coin:'
    },


    {
        "title": "Monkey Island",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/skull.png",
        "type": "merchant",
        "guild": ['animal', 'skull'],
        "play_text": '<b>3</b> :parrot-guild:&nbsp;&nbsp; <b>2</b> :skull-guild:&nbsp;&nbsp; <b>4</b> :helm:',
        "build_text": ':parrot::coin:'
    },


    {
        "title": "Doom Temple",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/doom.png",
        "type": "merchant",
        "guild": ['skull'],
        "play_text": '<b>3</b> :skull-guild:&nbsp;&nbsp; <b>2</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':skull::coin:'
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
        // "guild": ['merchant'],
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
        "guild": ['merchant'],
        "build_text": `:rum: :or: :parrot:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r', 'c', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "guild": ['merchant'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:rum::rum:`,
    },

    {
        "title": "Trade Route",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r'],
        "img": "cards/wind.png",
        "type": "merchant",
        "guild": ['merchant'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:helm::rum:`,
    },

    {
        "title": "Water Bank",
        "discard": ['c'],
        "cost": ['c', 'c'],
        "img": "cards/water-bank.png",
        "type": "merchant",
        "build_text": `:coin:`,
        "guild": ['crate'],
    },


    {
        "title": "Gun Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r', 'g', 'g', 'c'],
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
        "discard": ['g'],
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
        "cost": ['p', 'p', 'g', 'g', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:gun::parrot:`,
        "build": ['p'],
    },

    {
        "title": "Deep Sea Horror",
        "coin": 3,
        "discard": ['s'],
        "cost": ['p', 's', 'c'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "guild": ['animal', 'skull'],
        "build_text": `:helm::skull:`,
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "discard": ['p'],
        "cost": ['p', 's', 'c'],
        "img": "cards/crab.png",
        "type": "wild",
        "guild": ['animal'],
        "build_text": `:skull::coin:`,
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
        "build_text": `:helm::parrot:`,
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
        "cost": ['g', 'r', 'c', 'c'],
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
        "discard": ['s'],
        "cost": ['s', 's'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "guild": ['skull', 'military'],
        "build_text": `:skull:`,
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 'r', 'c', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun::gun:`,
        "build": ['g']
    },

    {
        "discard": ['s'],
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
        "cost": ['g', 'r', 'c'],
        "img": "cards/locksmith.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :coin:`,
        "build": ['g'],
    },

    {
        "title": "Plunder",
        "coin": 2,
        "discard": ['g'],
        "cost": ['g', 'g', 'c', 'c'],
        "img": "cards/plunder.png",
        "type": "military",
        "guild": ['military'],
        "build_text": `:gun-guild: <b>X</b> :gun:`,
    },

    {
        "discard": ['s'],
        "title": "Necromancer",
        "coin": 3,
        "cost": ['s', 'c'],
        "img": "cards/necro.png",
        "type": "military",
        "guild": ['skull'],
        "build_text": `:skull::trans::gun::parrot:`,
    },

    {
        "discard": ['s'],
        "title": "Crooked Smuggler",
        "coin": 3,
        "cost": ['s', 'r', 'r'],
        "img": "cards/crooked.png",
        "type": "military",
        "guild": ['skull', 'merchant'],
        "build_text": `:skull: :or: :gun:`,
    },


    {
        "discard": ['s'],
        "title": "Abandoned Manor",
        "coin": 3,
        "cost": ['s', 'c'],
        "img": "cards/manor.png",
        "type": "military",
        "guild": ['skull'],
        "build_text": `:skull:`,
    },

    {
        "discard": ['s'],
        "title": "Captain Lhoryn",
        "coin": 3,
        "cost": ['s', 'g', 'p'],
        "img": "cards/captain1.png",
        "type": "military",
        "guild": ['skull', 'parrot'],
        "build_text": `:helm::skull:`,
    },



]