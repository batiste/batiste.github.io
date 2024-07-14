

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
        "title": "Eerie Castle",
        "discard": [],
        "cost": ['e', 's', 'h', 't'],
        "img": "cards/castle.png",
        // "production": ['r']
        'extra': ['vp-5', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Graveyard",
        "discard": [],
        "cost": ['s', 's', 't'],
        "img": "cards/grave.png",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
    },


    {
        "title": "Kraken's Fury",
        "discard": [],
        "cost": ['t', 't', 'h'],
        "img": "cards/kraken.png",
        // "production": ['r']
        'extra': ['vp-4', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Emerald Valley",
        "discard": [],
        "cost": ['e', 'e'],
        "img": "cards/emerald.png",
        // "production": ['r']
        'extra': ['vp-4'],
        'type': 'supremacy',
    },

    {
        "title": "Hidden Bounty",
        "discard": [],
        "cost": ['r', 'r'],
        "img": "cards/bay.png",
        // "production": ['r']
        'extra': ['vp-3'],
        'type': 'supremacy',
    },

    {
        "title": "Animal Overrun",
        "discard": [],
        "cost": ['p', 'p', 'p'],
        "img": "cards/freed_monkeys.jpeg",
        // "production": ['r']
        'extra': ['vp-5'],
        'type': 'supremacy',
    },

    {
        "title": "Military Domination",
        "discard": [],
        "cost": ['g', 'g', 'g', 's'],
        "img": "cards/raid.png",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Naval Supremacy",
        "discard": [],
        "cost": ['h', 'h', 'h'],
        "img": "cards/naval-sup.png",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
    },

    {
        "title": "Tavern Keeper",
        "discard": ['r'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/scruf.png",
        "production": ['r']
    },

    {
        "title": "White Parrot",
        "discard": ['p'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/parrot.png",
        "production": ['p'],
    },

    {
        "title": "Gun Merchant",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/merchant.jpeg",
        "production": ['g'],
    },

    {
        "title": "Tavern Keeper",
        "discard": ['r'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/scruf.png",
        "production": ['r']
    },

    {
        "title": "White Parrot",
        "discard": ['p'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/parrot.png",
        "production": ['p'],
    },

    {
        "title": "Gun Merchant",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/merchant.jpeg",
        "production": ['g'],
    },

    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "cost": ['r', 'cs', 'c'],
        "img": "cards/rich.png",
        "extra": ['vp-1'],
        "production": ['p'],
    },

    {
        "title": "Armed Orangutan",
        "discard": ['p'],
        "cost": ['p', 'cs', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "extra": ['vp-1'],
        "production": ['g'],
    },

    {
        "title": "Brawl",
        "cost": ['g', 'cs', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "extra": ['vp-1'],
        "production": ['r']
    },

    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "cost": ['r', 'cs', 'c'],
        "img": "cards/rich.png",
        "extra": ['vp-1'],
        "production": ['p'],
    },

    {
        "title": "Armed Orangutan",
        "discard": ['p'],
        "cost": ['p', 'cs', 'c'],
        "img": "cards/armed-orangutan.jpeg",
        "extra": ['vp-1'],
        "production": ['g'],
    },

    {
        "title": "Brawl",
        "cost": ['g', 'cs', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "extra": ['vp-1'],
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
        "cost": ['r', 'r', 'c', 'cs'],
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
        "extra": ['vp-6', 'bolt'],
        "production": ['discard-1', 'produce', 'r'],
    },

    {
        "title": "Water Bank",
        "discard": ['h'],
        "cost": ['cs', 'cs', 'cs', 'cs'],
        "img": "cards/water-bank.png",
        "extra": ['vp-1'],
        "production": ['cs'],
    },

    {
        "title": "Water Bank",
        "discard": ['h'],
        "cost": ['cs', 'cs', 'cs', 'cs'],
        "img": "cards/water-bank.png",
        "extra": ['vp-1'],
        "production": ['cs'],
    },

    {
        "title": "Deep Sea Horror",
        "discard": ['s'],
        "cost": ['s', 'e', 'cs', 'cs'],
        "img": "cards/deep-sea-horror.png",
        "extra": ['vp-2'],
        "production": ['s', 'or', 't'],
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
        "cost": ['g', 'g', 's', 'c'],
        "img": "cards/military.png",
        "extra": ['vp-2', 'x', 'g'],
    },

    {
        "discard": ['s'],
        "title": "Walk the Plank",
        "cost": [],
        "img": "cards/walk.png",
        "extra": ['bolt'],
        "production": ['discard-1', 'produce', 'g'],
    },

    {
        "discard": ['e'],
        "title": "Locksmith",
        "cost": ['cs', 'cs'],
        "img": "cards/locksmith.png",
        "extra": ['bolt'],
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
        "extra": ['vp-8'],
        // "production": ['t'],
    },

    {
        "title": "El Dorado",
        "discard": ['h'],
        "cost": ['p', 'p', 'g', 'g', 'r', 'r'],
        "img": "cards/el-dorado.png",
        "extra": ['vp-8'],
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
        "title": "Master Gunner",
        "discard": ['g'],
        "cost": ['c', 'c', 'cs'],
        "img": "cards/gunner.png",
        "extra": ['bolt', 'bolt'],
        "production": ['g']
    },

    {
        "title": "Bird Handler",
        "discard": ['p'],
        "cost": ['c', 'c', 'cs'],
        "img": "cards/handler.png",
        "extra": ['bolt', 'telescope', 'telescope'],
        "production": ['p']
    },


    {
        "title": "Rum Runner",
        "discard": ['r'],
        "cost": ['c', 'cs', 'cs'],
        "img": "cards/captain3.png",
        "extra": ['bolt'],
        "production": ['r']
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
        "extra": ['vp-3', 'bolt'],
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


    {
        "title": "Unforeseen Tentacle",
        "discard": ['p'],
        "cost": ['e', 'c'],
        "img": "cards/tentacle.png",
        "extra": ['vp-3'],
        "production": ['t']
    },

    {
        "title": "Cultist",
        "discard": ['s'],
        "cost": ['s', 's'],
        "img": "cards/cultist.png",
        "extra": ['vp-1'],
        "production": ['e', 'or', 't']
    },

    {
        "title": "Shipyard",
        "discard": ['e'],
        "cost": ['e', 'e'],
        "img": "cards/shipyard.png",
        "extra": ['vp-1'],
        "production": ['h', 'or', 't']
    },

    {
        "title": "Troubled Expedition",
        "discard": ['h'],
        "cost": ['h', 'h'],
        "img": "cards/doomed-expedition.png",
        "extra": ['vp-1'],
        "production": ['s', 'or', 't']
    },


]