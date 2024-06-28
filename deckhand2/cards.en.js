

var cards = [

    // {
    //     "title": "Smuggler Cache",
    //     // "coin": 1,
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/cache.png",
    //     "type": "rum",
    //     "guild": ['rum', 'crate'],
    //     "play_text": '<b>4</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :helm: :trans: :draw-1:',
    //     "build_text": '&nbsp;:coin:'
    // },

    // {
    //     "title": "Military Dominance",
    //     // "coin": 1,
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/sneak_attack.png",
    //     "type": "rum",
    //     // "guild": ['vp', 'vp'],
    //     "play_text": '<b>7</b> :gun-guild:&nbsp;&nbsp; <b>1</b> :skull-guild:&nbsp;&nbsp; <b>6</b> :helm:',
    //     "build_text": 'Win the game.'
    // },


    // {
    //     "title": "Trade Monopoly",
    //     // "coin": 1,
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/mono.png",
    //     "type": "rum",
    //     "guild": ['rum', 'crate'],
    //     "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :parrot:&nbsp;&nbsp; <b>3</b> :helm:',
    //     "build_text": ':helm::coin:'
    // },


    // {
    //     "title": "Monkey Island",
    //     // "coin": 1,
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/skull.png",
    //     "type": "rum",
    //     "guild": ['parrot', 'skull'],
    //     "play_text": '<b>3</b> :parrot-guild:&nbsp;&nbsp; <b>2</b> :skull-guild:&nbsp;&nbsp; <b>4</b> :helm:',
    //     "build_text": ':parrot::coin:'
    // },


    // {
    //     "title": "Doom Temple",
    //     // "coin": 1,
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/doom.png",
    //     "type": "rum",
    //     "guild": ['skull'],
    //     "play_text": '<b>3</b> :skull-guild:&nbsp;&nbsp; <b>2</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
    //     "build_text": ':skull::coin:'
    // },

    {
        "title": "Tavern Keeper",
        "coin": 1,
        "discard": ['r'],
        "cost": ['c', 'c', 'c'],
        "img": "cards/scruf.png",
        "type": "rum",
        // "guild": [''],
        "build_text": ':rum:'
    },

    {
        "title": "White Parrot",
        "coin": 2,
        "discard": ['p'],
        "cost": ['c', 'c', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build_text": ':parrot:',
        // "guild": ['parrot']
    },

    {
        "title": "Gun Merchant",
        "coin": 2,
        "discard": ['g'],
        "cost": ['c', 'c', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "rum",
        // "guild": ['rum'],
        "build_text": `:gun:`,
    },

    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "coin": 2,
        "cost": ['r', 'c', 'c'],
        "img": "cards/rich.png",
        "type": "rum",
        "guild": ['vp-1'],
        "build_text": `:parrot:`,
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "discard": ['p'],
        "cost": ['p', 'c', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "guild": ['vp-1'],
        "build_text": `:gun:`,
        "build": ['p'],
    },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g', 'c', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "type": "gun",
        "guild": ['vp-1'],
        "build_text": ':rum:'
    },

    {
        "discard": ['s'],
        "title": "Necromancer",
        "coin": 3,
        "cost": ['p', 'g', 'c'],
        "img": "cards/necro.png",
        "type": "gun",
        "guild": ['vp-1'],
        "build_text": `:skull:`,
    },

    {
        "title": "Docks",
        "coin": 1,
        "discard": ['h'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/loaded.png",
        "type": "rum",
        "guild": ['vp-1'],
        "build_text": ':helm:'
    },

    {
        "title": "Gems Market",
        "coin": 2,
        "discard": ['e'],
        "cost": ['g', 'r', 'c'],
        "img": "cards/animal_market.png",
        "type": "rum",
        "build_text": `Produce 2`,
        "guild": ['vp-1'],
        "build_text": `:gem:`,
    },

    {
        "title": "Barataria Bay",
        // "coin": 1,
        "discard": ['p'],
        "cost": ['r', 'p', 'g', 'c'],
        "img": "cards/bay.png",
        "type": "rum",
        "guild": ['vp-3'],
        // "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':coin:'
    },

    {
        "title": "Bustling Market",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'r', 'c', 'c', 'c'],
        "img": "cards/busy.png",
        "type": "rum",
        // "play_text": `:coin::coin:`,
        "guild": ['vp-3'],
        // "play_text": 'Produce 2:coin:',
        // "play_text": `:parrot::rum:`,
        // "bid_text": `:rum::coin:`,
        "build_text": `:coin:`
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "discard": ['p'],
        "cost": ['p', 'p', 'h', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "guild": ['vp-4'],
        "build_text": `:parrot:`,
    },


    {
        "title": "Plunder",
        "coin": 2,
        "discard": ['g'],
        "cost": ['g', 'g', 's', 'c'],
        "img": "cards/plunder.png",
        "type": "gun",
        "guild": ['vp-3'],
        "build_text": `:gem:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'h', 'c'],
        "img": "cards/merchant2.png",
        "type": "rum",
        "guild": ['rum'],
        "guild": ['vp-3'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:rum:`,
    },

    {
        "title": "Trade Route",
        "coin": 2,
        "discard": ['p'],
        "cost": ['h', 'h', 'r', 'c'],
        "img": "cards/wind.png",
        "type": "rum",
        "guild": ['vp-5'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:rum:`,
    },

    {
        "title": "Water Bank",
        "discard": ['h'],
        "cost": ['c', 'c', 'c', 'c', 'c'],
        "img": "cards/water-bank.png",
        "type": "rum",
        "guild": ['vp-1'],
        "build_text": `:coin:`,
    },

    // {
    //     "title": "Blue Parrot",
    //     "discard": ['p'],
    //     "cost": ['p', 'p'],
    //     "img": "cards/parrot-2.png",
    //     "type": "wild",
    //     "guild": ['parrot', 'parrot'],
    //     "build_text": `:parrot:`
    // },

    {
        "title": "Grand Escape",
        "coin": 3,
        "discard": ['g'],
        "cost": ['p', 'g', 'e'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "guild": ['vp-3'],
        "build_text": `:gun: :or: :rum:`
    },

    {
        "title": "Deep Sea Horror",
        "coin": 3,
        "discard": ['s'],
        "cost": ['s', 'e', 'c', 'c'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "guild": ['vp-3'],
        "build_text": `:skull:`,
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "discard": ['p'],
        "cost": ['g', 's', 'c'],
        "img": "cards/crab.png",
        "type": "wild",
        "guild": ['vp-4'],
        "build_text": `:draw-1: :trans: :parrot:`,
        "build": ['p', 'c', 'g'],
    },

    {
        "title": "Skeleton Crew",
        "discard": ['s'],
        "cost": ['s', 'h', 'c'],
        "img": "cards/skeleton-crew.png",
        "type": "gun",
        "guild": ['vp-2'],
        "build_text": `:skull:`,
    },

    {
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['e', 'p', 'g', 'c'],
        "img": "cards/warrior.jpeg",
        "guild": ['parrot', 'gun'],
        "guild": ['vp-4'],
        "type": "gun",
        // "bid_text": `:parrot::trans::coin: `,
        "build_text": `:parrot:`,
    },

    {
        "title": "Sidekick",
        "coin": 2,
        "discard": ['r'],
        "cost": ['e', 'r', 'p'],
        "img": "cards/sidekick.png",
        "type": "wild",
        "guild": ['vp-3'],
        "build_text": `:helm:`,
    },

    {
        "discard": ['r'],
        "title": "Drunk Marmosets",
        "coin": 3,
        "cost": ['p', 'r', 'c', 'c'],
        "img": "cards/marmosets.png",
        "type": "wild",
        "guild": ['vp-5'],
        // "bid_text": `if you lose the bid: :draw-1:`,
        "build_text": ` `,
        "build": ['p'],
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "coin": 3,
        "cost": ['s', 's', 'g', 'c'],
        "img": "cards/sneak_attack.png",
        "type": "gun",
        "guild": ['vp-4'],
        "build_text": `:gem:`,
        "build": ['g'],
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 's', 'c', 'c'],
        "img": "cards/military.png",
        "type": "gun",
        "guild": ['vp-5'],
        "build_text": ` `,
        "build": ['g']
    },

    {
        "discard": ['s'],
        "title": "Walk the Plank",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/walk.png",
        "type": "gun",
        "guild": ['vp-1'],
        "build_text": `:draw-1: :trans: :gun:`,
        "build": ['g']
    },

    {
        "discard": ['e'],
        "title": "Locksmith",
        "coin": 2,
        "cost": ['c', 'c', 'c'],
        "img": "cards/locksmith.png",
        "type": "gun",
        // "bid_text": `:coin: in settled cards count.`,
        "guild": ['vp-1'],
        "build_text": `:draw-1: :trans: :gem:`,
        "build": ['g'],
    },


    {
        "discard": ['r'],
        "title": "Abandoned Manor",
        "coin": 3,
        "cost": ['c', 'c', 'c'],
        "img": "cards/manor.png",
        "type": "gun",
        "guild": ['vp-1'],
        "build_text": `:draw-1: :trans: :skull:`,
    },

    {
        "discard": ['h'],
        "title": "Crooked Smuggler",
        // "captain": true,
        "coin": 3,
        "cost": ['e', 'e', 'h', 'r'],
        "img": "cards/crooked.png",
        "type": "gun",
        "guild": ['vp-4'],
        "build_text": `:skull: :or: :gun:`,
    },

    {
        "discard": ['p'],
        "title": "Captain Lhoryn",
        // "captain": true,
        "coin": 3,
        "cost": ['h', 'h', 'c'],
        "img": "cards/captain1.png",
        "type": "gun",
        "guild": ['vp-4'],
        "build_text": `:parrot:`,
    },


    {
        "discard": ['e'],
        "title": "Captain Grenwish",
        // "captain": true,
        "coin": 3,
        "cost": ['e', 'p', 'c'],
        "img": "cards/captain2.png",
        "type": "gun",
        "guild": ['vp-3'],
        "build_text": `:draw-1: :trans: :helm:`,
    },

    // {
    //     "discard": ['p'],
    //     "title": "Captain Scruf",
    //     "captain": true,
    //     "coin": 3,
    //     "cost": ['g', 'c', 'c'],
    //     "img": "cards/captain3.png",
    //     "type": "gun",
    //     "guild": ['rum'],
    //     "build_text": `:rum:`,
    // },


    {
        "discard": ['e'],
        "title": "Captain Longtooth",
        // "captain": true,
        "coin": 3,
        "cost": ['s', 'e', 'e', 'c'],
        "img": "cards/captain4.png",
        "type": "gun",
        "guild": ['vp-5'],
        "build_text": `:helm:`,
    },


    {
        "discard": ['h'],
        "title": "Captain Cutlass",
        // "captain": true,
        "coin": 3,
        "cost": ['s', 'h', 'c'],
        "img": "cards/assasin.png",
        "type": "gun",
        "guild": ['vp-3'],
        "build_text": `:coin:`,
    },


    {
        "title": "Doom Temple",
        // "coin": 1,
        "discard": ['s'],
        "cost": ['s', 's', 's', 'c'],
        "img": "cards/doom.png",
        "type": "rum",
        "guild": ['vp-3', 'x', 'skull'],
        // "play_text": '<b>3</b> :skull-guild:&nbsp;&nbsp; <b>2</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ' '
    },


    {
        "title": "Trade Monopoly",
        // "coin": 1,
        "discard": ['h'],
        "cost": ['h', 'h', 'h', 'c'],
        "img": "cards/mono.png",
        "type": "rum",
        "guild": ['vp-3', 'x', 'helm'],
        // "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :parrot:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ' '
    },

    {
        "title": "Smuggler Cache",
        // "coin": 1,
        "discard": ['e'],
        "cost": ['e', 'e', 'e', 'c'],
        "img": "cards/cache.png",
        "type": "rum",
        "guild": ['vp-3', 'x', 'gem'],
        // "play_text": '<b>4</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :helm: :trans: :draw-1:',
        "build_text": ' '
    },


]