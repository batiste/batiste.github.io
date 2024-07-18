

var cards = [

    // {
    //     "title": "Ship 5",
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/ship1.png",
    //     // "production": ['r']
    //     'extra': [],
    //     'production': ['cs'],
    //     'holding': 5,
    //     'type': 'ship',
    // },

    // {
    //     "title": "Ship 4",
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/ship1.png",
    //     // "production": ['r']
    //     'extra': ['vp-1'],
    //     'production': ['s'],
    //     'holding': 5,
    //     'type': 'ship',
    // },

    // {
    //     "title": "Ship 3",
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/ship1.png",
    //     // "production": ['r']
    //     'extra': ['vp-4'],
    //     'production': ['r'],
    //     'holding': 6,
    //     'type': 'ship',
    // },

    // {
    //     "title": "Ship 2",
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/ship1.png",
    //     // "production": ['r']
    //     'extra': ['vp-2', 'x', 'g'],
    //     'production': ['t'],
    //     'holding': 6,
    //     'type': 'ship',
    // },

    // {
    //     "title": "Ship 1",
    //     "discard": [],
    //     "cost": [],
    //     "img": "cards/ship1.png",
    //     // "production": ['r']
    //     'extra': ['vp-1', 'x', 'p'],
    //     'production': ['p'],
    //     'holding': 6,
    //     'type': 'ship',
    // },

    {
        "title": "Totem",
        "discard": [],
        "cost": ['g', 'p', 'r'],
        "img": "cards/totem.png",
        // "production": ['r']
        'extra': ['crown'],
        'type': 'supremacy',
    },

    {
        "title": "Eerie Castle",
        "discard": [],
        "cost": ['s', 'r', 'g', 'g'],
        "img": "cards/castle.png",
        // "production": ['r']
        'extra': ['vp-4', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Graveyard",
        "discard": [],
        "cost": ['s', 's', 'r'],
        "img": "cards/grave.png",
        // "production": ['r']
        'extra': ['vp-2', 'discard-grab'],
        'type': 'supremacy',
    },


    {
        "title": "Kraken's Fury",
        "discard": [],
        "cost": ['e', 's', 'h'],
        "img": "cards/kraken.png",
        // "production": ['r']
        'extra': ['vp-4', 'no-compass'],
        'type': 'supremacy',
    },

    {
        "title": "Emerald Valley",
        "discard": [],
        "cost": ['e', 'e'],
        "img": "cards/emerald.png",
        // "production": ['r']
        'extra': ['vp-3', 'draw-1'],
        'type': 'supremacy',
    },

    {
        "title": "Hidden Bounty",
        "discard": [],
        "cost": ['h', 'r', 'r'],
        "img": "cards/bay.png",
        // "production": ['r']
        'extra': ['vp-2', 'draw-2'],
        'type': 'supremacy',
    },

    {
        "title": "Animal Overrun",
        "discard": [],
        "cost": ['p', 'p', 'p'],
        "img": "cards/freed_monkeys.jpeg",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Military Domination",
        "discard": [],
        "cost": ['g', 'g', 'g'],
        "img": "cards/raid.png",
        // "production": ['r']
        'extra': ['vp-3', 'no-compass'],
        'type': 'supremacy',
    },

    {
        "title": "Naval Supremacy",
        "discard": [],
        "cost": ['h', 'h', 'h'],
        "img": "cards/naval-sup.png",
        // "production": ['r']
        'extra': ['vp-4', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Tavern Keeper",
        "discard": ['r'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/scruf.png",
        'extra': ['compass'],
        "production": ['r']
    },

    {
        "title": "White Parrot",
        "discard": ['p'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/parrot.png",
        'extra': ['compass'],
        "production": ['p'],
    },

    {
        "title": "Gun Merchant",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/merchant.jpeg",
        'extra': ['compass'],
        "production": ['g'],
    },

    {
        "title": "Tavern Keeper",
        "discard": ['r'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/scruf.png",
        'extra': ['compass'],
        "production": ['r']
    },

    {
        "title": "White Parrot",
        "discard": ['p'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/parrot.png",
        'extra': ['compass'],
        "production": ['p'],
    },

    {
        "title": "Gun Merchant",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/merchant.jpeg",
        'extra': ['compass'],
        "production": ['g'],
    },

    {
        "title": "Master Gunner",
        "discard": ['g'],
        "cost": ['c', 'c', 'cs'],
        "img": "cards/gunner.png",
        "extra": ['bolt', 'bolt', 'compass'],
        "production": ['g']
    },

    {
        "title": "Bird Handler",
        "discard": ['p'],
        "cost": ['c', 'c', 'cs'],
        "img": "cards/handler.png",
        "extra": ['bolt', 'telescope'],
        "production": ['p']
    },


    {
        "title": "Rum Runner",
        "discard": ['r'],
        "cost": ['c', 'cs', 'cs'],
        "img": "cards/captain3.png",
        "extra": ['bolt', 'compass'],
        "production": ['r']
    },

    // {
    //     "title": "Master Gunner",
    //     "discard": ['g'],
    //     "cost": ['c', 'c', 'cs'],
    //     "img": "cards/gunner.png",
    //     "extra": ['bolt', 'bolt', 'compass'],
    //     "production": ['g']
    // },

    // {
    //     "title": "Bird Handler",
    //     "discard": ['p'],
    //     "cost": ['c', 'c', 'cs'],
    //     "img": "cards/handler.png",
    //     "extra": ['bolt', 'telescope'],
    //     "production": ['p']
    // },


    // {
    //     "title": "Rum Runner",
    //     "discard": ['r'],
    //     "cost": ['c', 'cs', 'cs'],
    //     "img": "cards/captain3.png",
    //     "extra": ['bolt', 'compass'],
    //     "production": ['r']
    // },

    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "cost": ['r', 'cs', 'c'],
        "img": "cards/rich.png",
        "extra": ['vp-1'],
        'extra': ['compass'],
        "production": ['p'],
    },

    {
        "title": "Armed Orangutan",
        "discard": ['p'],
        "cost": ['p', 'cs', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "extra": ['vp-1', 'compass'],
        "production": ['g'],
    },

    {
        "title": "Brawl",
        "cost": ['g', 'cs', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "extra": ['vp-1', 'compass'],
        "production": ['r']
    },

    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "cost": ['r', 'cs', 'c'],
        "img": "cards/rich.png",
        "extra": ['vp-1', 'compass'],
        "production": ['p'],
    },

    {
        "title": "Armed Orangutan",
        "discard": ['p'],
        "cost": ['p', 'cs', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "extra": ['vp-1', 'compass'],
        "production": ['g'],
    },

    {
        "title": "Brawl",
        "cost": ['g', 'cs', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "extra": ['vp-1', 'compass'],
        "production": ['r']
    },

    {
        "discard": ['s'],
        "title": "Necromancer",
        "cost": ['p', 'g', 'c'],
        "img": "cards/necro.png",
        "extra": ['vp-1'],
        "production": ['s'],
    },

    {
        "title": "Docks",
        "discard": ['h'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/loaded.png",
        "extra": ['vp-1'],
        "production": ['h'],
    },

    {
        "title": "Gems Market",
        "discard": ['e'],
        "cost": ['g', 'r', 'c'],
        "img": "cards/animal_market.png",
        "extra": ['vp-1'],
        "production": ['e'],
    },

    {
        "discard": ['s'],
        "title": "Necromancer",
        "cost": ['p', 'g', 'c'],
        "img": "cards/necro.png",
        "extra": ['vp-1'],
        "production": ['s'],
    },

    {
        "title": "Docks",
        "discard": ['h'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/loaded.png",
        "extra": ['vp-1'],
        "production": ['h'],
    },

    {
        "title": "Gems Market",
        "discard": ['e'],
        "cost": ['g', 'r', 'c'],
        "img": "cards/animal_market.png",
        "extra": ['vp-1'],
        "production": ['e'],
    },

    {
        "title": "Sails Bazaar",
        "discard": ['e'],
        "cost": ['r', 'cs', 'c', 'c'],
        "img": "cards/animal_market.png",
        "extra": [],
        "production": ['g', 'or', 'p'],
    },

    {
        "title": "Trading Post",
        "discard": ['e'],
        "cost": ['g', 'cs', 'c', 'c'],
        "img": "cards/animal_market.png",
        "extra": [],
        "production": ['r', 'or', 'p'],
    },

    {
        "title": "Grand Escape",
        "discard": ['g'],
        "cost": ['p', 'g', 'e', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "extra": ['vp-2'],
        "production": ['r', 'or', 'p'],
    },


    {
        "title": "Barataria Bay",
        "discard": ['p'],
        "cost": ['r', 'p', 'g', 'cs'],
        "img": "cards/bay.png",
        "extra": ['vp-3'],
        "production": ['cs'],
    },

    {
        "title": "Bustling Market",
        "discard": ['r'],
        "cost": ['r', 'r', 'cs', 'cs'],
        "img": "cards/busy.png",
        "extra": ['vp-1', 'x', 'r'],
        "production": ['cs'],
    },

    {
        "title": "Animal Sanctuary",
        "discard": ['p'],
        "cost": ['p', 'p', 'p'],
        "img": "cards/sanctuary.png",
        "extra": ['vp-2', 'x', 'p'],
        // "production": ['t'],
        // "value_correction": -1
    },


    {
        "title": "Plunder",
        "discard": ['g'],
        "cost": ['g', 'g', 's', 'c'],
        "img": "cards/plunder.png",
        "extra": ['vp-3'],
        "production": ['e'],
    },

    {
        "title": "Rum Merchant",
        "discard": ['r'],
        "cost": ['r', 'h', 'cs', 'cs'],
        "img": "cards/merchant2.png",
        "extra": ['r'],
        "extra": ['vp-3'],
        "production": ['r'],
    },

    {
        "title": "Trade Route",
        "discard": ['p'],
        "cost": ['h', 'h', 'r', 'c'],
        "img": "cards/wind.png",
        "extra": ['vp-5', 'bolt'],
        "production": ['discard-1', 'produce', 'r'],
    },

    {
        "title": "Water Bank",
        "discard": ['h'],
        "cost": ['cs', 'cs', 'cs', 'cs'],
        "img": "cards/water-bank.png",
        "extra": ['vp-1', 'compass'],
        "production": ['cs'],
    },

    {
        "title": "Water Bank",
        "discard": ['h'],
        "cost": ['cs', 'cs', 'cs', 'cs'],
        "img": "cards/water-bank.png",
        "extra": ['vp-1', 'compass'],
        "production": ['cs'],
    },

    {
        "title": "Deep Sea Horror",
        "discard": ['s'],
        "cost": ['s', 'e', 'cs', 'cs'],
        "img": "cards/deep-sea-horror.png",
        "extra": ['vp-2'],
        "production": ['s'],
    },

    {
        "title": "Giant Crab",
        "discard": ['p'],
        "cost": ['g', 's', 'c'],
        "img": "cards/crab.png",
        "extra": ['vp-4', 'bolt'],
        "production": ['discard-1', 'produce', 'p'],
    },

    {
        "title": "Skeleton Crew",
        "discard": ['s'],
        "cost": ['s', 'h', 'c'],
        "img": "cards/skeleton-crew.png",
        "extra": ['vp-2'],
        "production": ['s'],
    },

    {
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['e', 'p', 'g', 'c'],
        "img": "cards/warrior.jpeg",
        "extra": ['vp-4'],
        "production": ['p'],
    },

    {
        "title": "Sidekick",
        "discard": ['r'],
        "cost": ['e', 'r', 'p', 'c'],
        "img": "cards/sidekick.png",
        "extra": ['vp-3'],
        "production": ['h'],
    },

    {
        "discard": ['r'],
        "title": "Drunk Marmosets",
        "cost": ['p', 'r', 'cs', 'cs'],
        "img": "cards/marmosets.png",
        "extra": ['vp-4'],
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "cost": ['s', 's', 'g', 'cs', 'c'],
        "img": "cards/sneak_attack.png",
        "extra": ['vp-4'],
        "production": ['e'],
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "cost": ['g', 'g', 's', 'cs'],
        "img": "cards/military.png",
        "extra": ['vp-2', 'x', 'g'],
    },

    {
        "discard": ['s'],
        "title": "Walk the Plank",
        "cost": ['cs'],
        "img": "cards/walk.png",
        "extra": ['vp-1'],
        "production": ['discard-1', 'produce', 'g'],
    },

    {
        "discard": ['e'],
        "title": "Locksmith",
        "cost": ['cs', 'cs'],
        "img": "cards/locksmith.png",
        "extra": ['vp-1'],
        "production": ['discard-1', 'produce', 'e'],
    },


    {
        "discard": ['r'],
        "title": "Abandoned Manor",
        "cost": ['cs', 'cs'],
        "img": "cards/manor.png",
        "extra": ['bolt'],
        "production": ['discard-1', 'produce', 's'],
    },

    {
        "discard": ['h'],
        "title": "Crooked Smuggler",
        "cost": ['e', 'e', 'h', 'r'],
        "img": "cards/crooked.png",
        "extra": ['vp-3'],
        "production": ['s', 'or', 'g'],
    },

    {
        "discard": ['p'],
        "title": "Captain Lhoryn",
        "cost": ['h', 'h', 'c'],
        "img": "cards/captain1.png",
        "extra": ['vp-5', 'telescope'],
    },


    {
        "discard": ['e'],
        "title": "Captain Grenwish",
        "cost": ['e', 'p', 'c'],
        "img": "cards/captain2.png",
        "extra": ['vp-3', 'bolt'],
        "production": ['discard-1', 'produce', 'h'],
    },

    {
        "discard": ['e'],
        "title": "Captain Longtooth",
        "cost": ['s', 'e', 'e', 'cs', 'cs'],
        "img": "cards/captain4.png",
        "extra": ['vp-4'],
        "production": ['h'],
    },


    {
        "discard": ['h'],
        "title": "Captain Cutlass",
        "cost": ['s', 'h', 'c'],
        "img": "cards/assasin.png",
        "extra": ['vp-3'],
        "production": [`cs`],
    },


    {
        "title": "Doom Temple",
        "discard": ['s'],
        "cost": ['g', 's', 's'],
        "img": "cards/doom.png",
        "extra": ['vp-3', 'x', 's'],
    },


    {
        "title": "Spice Monopoly",
        "discard": ['h'],
        "cost": ['p', 'h', 'h'],
        "img": "cards/mono.png",
        "extra": ['vp-3', 'x', 'h'],
    },

    {
        "title": "Smuggler Cache",
        "discard": ['r'],
        "cost": ['r', 'e', 'e'],
        "img": "cards/cache.png",
        "extra": ['vp-3', 'x', 'e'],
    },


    {
        "title": "Monkey Island",
        "discard": ['p'],
        "cost": ['e', 's', 'h', 'p', 'cs'],
        "img": "cards/skull.png",
        "extra": ['vp-7'],
        // "production": ['t'],
    },

    {
        "title": "El Dorado",
        "discard": ['h'],
        "cost": ['p', 'p', 'g', 'g', 'r', 'r'],
        "img": "cards/el-dorado.png",
        "extra": ['vp-6', 'crown'],
    },


    {
        "title": "Desert Island",
        "discard": ['g'],
        "cost": ['h', 'r', 'cs', 'c'],
        "img": "cards/desert.png",
        "extra": ['vp-1'],
        "production": ['g', 'or', 'cs']
    },

    {
        "title": "Pilferer's Guild",
        "discard": ['s'],
        "cost": ['s', 'p', 'cs'],
        "img": "cards/p-guild.png",
        "extra": ['vp-2', 'x', 'cs'],
    },

    {
        "title": "Rowdy Mob",
        "discard": ['r'],
        "cost": ['g', 'g', 'r', 'cs'],
        "img": "cards/mob.png",
        "production": ['h', 'or', 'r']
    },

    // affinity cards
    {
        "title": "Feast",
        "discard": ['g'],
        "cost": ['p', 'r', 'h', 'cs'],
        "img": "cards/feast.png",
        "extra": ['vp-2', 'crown'],
        "production": ['g']
    },

    {
        "title": "Hunt",
        "discard": ['p'],
        "cost": ['g', 'r', 'e', 'cs'],
        "img": "cards/hunt.png",
        "extra": ['vp-2', 'bolt', 'bolt'],
        "production": ['p']
    },

    {
        "title": "Distill",
        "discard": ['r'],
        "cost": ['g', 'p', 's', 'cs'],
        "img": "cards/distill.png",
        "extra": ['vp-2', 'bolt', 'bolt'],
        "production": ['r']
    },


    // {
    //     "title": "Unforeseen Tentacle",
    //     "discard": ['p'],
    //     "cost": ['e', 'c'],
    //     "img": "cards/tentacle.png",
    //     "extra": ['vp-2'],
    //     "production": ['t']
    // },

    {
        "title": "Cultist",
        "discard": ['s'],
        "cost": ['s', 's'],
        "img": "cards/cultist.png",
        "extra": ['vp-1'],
        "production": ['e']
    },

    {
        "title": "Shipyard",
        "discard": ['e'],
        "cost": ['e', 'e', 'cs'],
        "img": "cards/shipyard.png",
        "extra": ['vp-2'],
        "production": ['h']
    },

    {
        "title": "Troubled Expedition",
        "discard": ['h'],
        "cost": ['h', 'h'],
        "img": "cards/doomed-expedition.png",
        "extra": ['crown'],
        "production": ['s']
    },

    {
        "title": "Strange Encounter",
        "discard": ['e'],
        "cost": ['h', 's', 'r', 'cs'],
        "img": "cards/strange.png",
        "extra": ['vp-4', 'no-compass'],
    },

    {
        "title": "Haunted Shipwreck",
        "discard": ['s'],
        "cost": ['s', 's', 'g'],
        "img": "cards/haunted-2.png",
        "extra": ['vp-3', 'discard-grab'],
    },


    {
        "title": "Haven",
        "discard": ['g'],
        "cost": ['p', 'g', 'h', 'cs', 'cs'],
        "img": "cards/haven.png",
        "extra": ['vp-2', 'x', 'compass-icon'],
        "production": ['e']
    },

    {
        "title": "Tavern",
        "discard": ['r'],
        "cost": ['r', 'r', 'cs'],
        "img": "cards/tavern.png",
        "extra": ['vp-2', 'x', 'r'],
    },

    {
        "title": "Red Parrot",
        "discard": ['p'],
        "cost": ['p', 'p'],
        "img": "cards/parrot-2.png",
        "extra": ['vp-1'],
        "production": ['p']
    },

    {
        "title": "Angry Ape",
        "discard": ['g'],
        "cost": ['p', 'p', 'g'],
        "img": "cards/ape.png",
        "extra": ['vp-2'],
        "production": ['g']
    },

    {
        "title": "Treasure Map",
        "discard": ['p'],
        "cost": ['p', 'r', 'cs'],
        "img": "cards/treasure-map.png",
        "production": ['h'],
        "extra": ['telescope'],
    },

    {
        "title": "Lady Celeste",
        "discard": ['e'],
        "cost": ['g'],
        "img": "cards/lady-something.png",
        // "production": ['h'],
        "extra": ['bolt', 'bolt'],
    },

    {
        "title": "Mobile Trader",
        "discard": ['h'],
        "cost": ['r', 'r'],
        "img": "cards/market-3.png",
        "production": ['e', 'produce', 'h', 'or', 'e'],
        // "extra": ['bolt', 'bolt'],
    },

    {
        "title": "Poacher",
        "discard": ['s'],
        "cost": ['p', 'p'],
        "img": "cards/poacher.png",
        "production": ['s', 'produce', 's', 'or', 'e'],
        // "extra": ['bolt', 'bolt'],
    },
]