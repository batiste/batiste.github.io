

var cards = [

    {
        "title": "Smuggler Cache",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/cache.png",
        "type": "rum",
        "guild": ['rum', 'crate'],
        "play_text": '<b>4</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :helm: :trans: :draw-1:',
        "build_text": '&nbsp;:coin:'
    },

    {
        "title": "Military Dominance",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/sneak_attack.png",
        "type": "rum",
        // "guild": ['vp', 'vp'],
        "play_text": '<b>7</b> :gun-guild:&nbsp;&nbsp; <b>1</b> :skull-guild:&nbsp;&nbsp; <b>6</b> :helm:',
        "build_text": 'Win the game.'
    },


    {
        "title": "Trade Monopoly",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/mono.png",
        "type": "rum",
        "guild": ['rum', 'crate'],
        "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :parrot:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':helm::coin:'
    },


    {
        "title": "Monkey Island",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/skull.png",
        "type": "rum",
        "guild": ['parrot', 'skull'],
        "play_text": '<b>3</b> :parrot-guild:&nbsp;&nbsp; <b>2</b> :skull-guild:&nbsp;&nbsp; <b>4</b> :helm:',
        "build_text": ':parrot::coin:'
    },


    {
        "title": "Doom Temple",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/doom.png",
        "type": "rum",
        "guild": ['skull'],
        "play_text": '<b>3</b> :skull-guild:&nbsp;&nbsp; <b>2</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':skull::coin:'
    },

    {
        "title": "Barataria Bay",
        // "coin": 1,
        "discard": [],
        "cost": [],
        "img": "cards/bay.png",
        "type": "rum",
        "guild": ['gun', 'crate'],
        "play_text": '<b>3</b> :rum-guild:&nbsp;&nbsp; <b>3</b> :gun-guild:&nbsp;&nbsp; <b>3</b> :helm:',
        "build_text": ':rum::coin:'
    },


    {
        "title": "Shopkeeper",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'c'],
        "img": "cards/scruf.png",
        "type": "rum",
        "guild": ['rum'],
        "build_text": ':rum:'
    },

    {
        "title": "Docks",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'c'],
        "img": "cards/loaded.png",
        "type": "rum",
        "guild": ['rum'],
        "build_text": ':coin::coin::trans::rum::parrot:'
    },

    {
        "title": "Bustling Market",
        "coin": 1,
        "discard": ['r'],
        "cost": ['r', 'r', 'c'],
        "img": "cards/busy.png",
        "type": "rum",
        // "play_text": `:coin::coin:`,
        // "guild": ['rum'],
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
        "type": "rum",
        "build_text": `Produce 2`,
        "guild": ['rum'],
        "build_text": `:rum: :or: :parrot:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r', 'c', 'c'],
        "img": "cards/merchant2.png",
        "type": "rum",
        "guild": ['rum'],
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
        "type": "rum",
        "guild": ['rum'],
        // "play_text": `Build 1, Produce :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build_text": `:helm::rum:`,
    },

    {
        "title": "Water Bank",
        "discard": ['c'],
        "cost": ['c', 'c'],
        "img": "cards/water-bank.png",
        "type": "rum",
        "build_text": `:coin:`,
        "guild": ['crate'],
    },


    {
        "title": "Gun Merchant",
        "coin": 2,
        "discard": ['r'],
        "cost": ['r', 'r', 'g', 'g', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "rum",
        "guild": ['rum', 'gun'],
        "build_text": `:rum::gun:`,
    },

    {
        "discard": ['p'],
        "title": "Rich Pirate",
        "coin": 2,
        "cost": ['r', 'p', 'c'],
        "img": "cards/rich.png",
        "type": "rum",
        "guild": ['rum'],
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
        "guild": ['parrot']
    },

    {
        "title": "Blue Parrot",
        "discard": ['p'],
        "cost": ['p', 'p'],
        "img": "cards/parrot-2.png",
        "type": "wild",
        "guild": ['parrot', 'parrot'],
        "build_text": `:parrot:`
    },

    {
        "title": "Grand Escape",
        "coin": 3,
        "discard": ['g'],
        "cost": ['p', 'g', 'r'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "guild": ['parrot', 'gun'],
        "build_text": `:gun: :or: :rum:`
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "discard": ['p'],
        "cost": ['p', 'p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "guild": ['parrot'],
        "build_text": `:parrot-guild: <b>X</b> :parrot:`,
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "discard": ['p'],
        "cost": ['p', 'p', 'g', 'g', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "guild": ['parrot'],
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
        "guild": ['parrot', 'skull'],
        "build_text": `:helm::skull:`,
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "discard": ['p'],
        "cost": ['g', 's', 'c'],
        "img": "cards/crab.png",
        "type": "wild",
        "guild": ['skull'],
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
        "guild": ['parrot'],
        "build_text": `:helm::parrot:`,
    },

    {
        "discard": ['r'],
        "title": "Drunk Marmosets",
        "coin": 3,
        "cost": ['p', 'p', 'r', 'r'],
        "img": "cards/marmosets.png",
        "type": "wild",
        "guild": ['parrot', 'rum'],
        // "bid_text": `if you lose the bid: :draw-1:`,
        "build_text": `:rum-guild: <b>X</b> :parrot:`,
        "build": ['p'],
    },

    {
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['p', 'g', 'c'],
        "img": "cards/warrior.jpeg",
        "guild": ['parrot', 'gun'],
        "type": "gun",
        // "bid_text": `:parrot::trans::coin: `,
        "build_text": `:parrot:`,
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "coin": 3,
        "cost": ['g', 's', 'c', 'c'],
        "img": "cards/sneak_attack.png",
        "type": "gun",
        "guild": ['gun'],
        "build_text": `:gun-guild: <b>X</b> :skull:`,
        "build": ['g'],
    },

    // {
    //     "discard": ['g'],
    //     "title": "Skeleton Crew",
    //     "coin": 3,
    //     "cost": ['g', 'g', 'c'],
    //     "img": "cards/skeleton-crew.png",
    //     "type": "gun",
    //     "guild": ['gun'],
    //     "build": ['g'],
    //     "build_text": `:gun-guild: <b>X</b> :coin:`,
    // },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "type": "gun",
        "guild": ['gun'],
        "build_text": ':gun:'
    },

    {
        "title": "Skeleton Crew",
        "discard": ['s'],
        "cost": ['s', 's'],
        "img": "cards/skeleton-crew.png",
        "type": "gun",
        "guild": ['skull', 'gun'],
        "build_text": `:skull:`,
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 'r', 'c', 'c'],
        "img": "cards/military.png",
        "type": "gun",
        "guild": ['gun'],
        "build_text": `:gun::gun:`,
        "build": ['g']
    },

    {
        "discard": ['s'],
        "title": "Walk the Plank",
        "coin": 2,
        "cost": ['c'],
        "img": "cards/walk.png",
        "type": "gun",
        "guild": ['gun'],
        "build_text": `:coin::trans::gun:`,
        "build": ['g']
    },

    {
        "discard": ['g'],
        "title": "Locksmith",
        "coin": 2,
        "cost": ['g', 's', 'c'],
        "img": "cards/locksmith.png",
        "type": "gun",
        // "bid_text": `:coin: in settled cards count.`,
        "guild": ['gun'],
        "build_text": `:gun-guild: <b>X</b> :coin:`,
        "build": ['g'],
    },

    {
        "title": "Plunder",
        "coin": 2,
        "discard": ['g'],
        "cost": ['g', 'g', 'c', 'c'],
        "img": "cards/plunder.png",
        "type": "gun",
        "guild": ['gun'],
        "build_text": `:gun-guild: <b>X</b> :gun:`,
    },

    {
        "discard": ['s'],
        "title": "Necromancer",
        "coin": 3,
        "cost": ['s', 'c'],
        "img": "cards/necro.png",
        "type": "gun",
        "guild": ['skull'],
        "build_text": `:skull::trans::gun::parrot:`,
    },

    {
        "discard": ['s'],
        "title": "Crooked Smuggler",
        "coin": 3,
        "cost": ['s', 'g', 'r'],
        "img": "cards/crooked.png",
        "type": "gun",
        "guild": ['skull', 'rum'],
        "build_text": `:skull: :or: :gun:`,
    },


    {
        "discard": ['s'],
        "title": "Abandoned Manor",
        "coin": 3,
        "cost": ['s', 'c'],
        "img": "cards/manor.png",
        "type": "gun",
        "guild": ['skull'],
        "build_text": `:skull:`,
    },

    {
        "discard": ['s'],
        "title": "Captain Lhoryn",
        "coin": 3,
        "cost": ['s', 'p', 'c'],
        "img": "cards/captain1.png",
        "type": "gun",
        "guild": ['skull', 'parrot'],
        "build_text": `:helm: :or: :skull:`,
    },


    {
        "discard": ['g'],
        "title": "Captain Gerrard",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/captain2.png",
        "type": "gun",
        "guild": ['parrot'],
        "build_text": `:helm: :or: :parrot:`,
    },

    {
        "discard": ['p'],
        "title": "Captain Red",
        "coin": 3,
        "cost": ['g', 'c'],
        "img": "cards/captain3.png",
        "type": "gun",
        "guild": ['parrot'],
        "build_text": `:helm: :or: :rum:`,
    },


    {
        "discard": ['s'],
        "title": "Assassin",
        "coin": 3,
        "cost": ['s', 'g'],
        "img": "cards/assasin.png",
        "type": "gun",
        "guild": ['skull', 'gun'],
        "build_text": `:skull:`,
    },


]