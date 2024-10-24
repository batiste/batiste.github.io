

var cards = [

    {
        "title": "Totem",
        "discard": [],
        "cost": ['gun-banner', 'parrot-banner', 'rum-banner'],
        "img": "cards/totem.png",
        // "production": ['r']
        'extra': ['vp-1', 'crown', 'telescope'],
        // 'banners': ['parrot-banner'],
        'type': 'supremacy',
    },

    {
        "title": "Citadel Market",
        "discard": [],
        "cost": ['skull-banner', 'rum-banner', 'gun-banner', 'gun-banner'],
        "img": "cards/citadel.png",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
        "changed": false,
    },

    {
        "title": "Graveyard",
        "discard": [],
        "cost": ['skull-banner', 'skull-banner', 'rum-banner'],
        "img": "cards/grave.png",
        // "production": ['r']
        'extra': ['vp-4', '3-choices'],
        'type': 'supremacy',
        "changed": false,
    },


    {
        "title": "Kraken's Fury",
        "discard": [],
        "cost": ['gem-banner', 'skull-banner', 'helm-banner'],
        "img": "cards/kraken.png",
        // "production": ['r']
        'extra': ['vp-5', 'tentacle'],
        'type': 'supremacy',
    },

    {
        "title": "Mermaid",
        "discard": [],
        "cost": ['gem-banner', 'skull-banner', 'coin-banner', 'parrot-banner', 'gun-banner'],
        "img": "cards/mermaid.png",
        // "production": ['r']
        'extra': ['crown', '3-choices', 'tentacle'],
        'type': 'supremacy',
    },

    {
        "title": "Emerald Valley",
        "discard": [],
        "cost": ['gem-banner', 'gem-banner'],
        "img": "cards/explorers.png",
        // "production": ['r']
        'extra': ['vp-3', 'draw-1'],
        'type': 'supremacy',
    },

    {
        "title": "Smuggler's Cove",
        "discard": [],
        "cost": ['helm-banner', 'rum-banner', 'rum-banner'],
        "img": "cards/cove.png",
        // "production": ['r']
        'extra': ['vp-2', 'draw-2'],
        'type': 'supremacy',
    },

    {
        "title": "Deck Invasion",
        "discard": [],
        "cost": ['parrot-banner', 'parrot-banner', 'parrot-banner'],
        "img": "cards/grand-escape.png",
        // "production": ['r']
        'extra': ['vp-3', 'crown'],
        'type': 'supremacy',
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "Military Domination",
        "discard": [],
        "cost": ['gun-banner', 'gun-banner', 'gun-banner'],
        "img": "cards/raid.png",
        // "production": ['r']
        'extra': ['vp-4', 'tentacle'],
        'type': 'supremacy',
        "changed": false,
    },

    {
        "title": "Deep Exploration",
        "discard": [],
        "cost": ['helm-banner', 'helm-banner', 'helm-banner'],
        "img": "cards/naval-sup.png",
        // "production": ['r']
        'extra': ['vp-4', 'crown'],
        'type': 'supremacy',
        "changed": false,
    },

    {
        "title": "Governor's Bribe",
        "discard": [],
        "cost": ['coin-banner', 'coin-banner', 'coin-banner'],
        "img": "cards/bribe.png",
        // "production": ['r']
        'extra': ['compass', 'telescope', 'draw-2'],
        'type': 'supremacy',
        "changed": false,
    },

    {
        "title": "Provision",
        "discard": [],
        "cost": ['basic-banner', 'basic-banner', 'basic-banner', 'basic-banner', 'basic-banner'],
        "img": "cards/cellar.png",
        // "production": ['r']
        'extra': ['vp-2', 'draw-1'],
        'type': 'supremacy',
        "changed": false,
    },

    {
        "title": "Looter's Bank",
        "discard": ['h'],
        "cost": ['cs', 'cs', 'cs', 'cs'],
        "img": "cards/water-bank.png",
        "banners": ['basic-banner', 'coin-banner'],
        "extra": ['vp-1'],
        "production": ['cs'],
        "copies": 3,
    },


    {
        "title": "Treasure",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'p', 'g', 'r'],
        "img": "cards/big-chest.png",
        // "banners": ['coin-banner'],
        "extra": ['vp-1', 'x', 'coin-banner'],
        "production": ['cs', 'cs'],
        "copies": 2,
        "css": "bg-top"
    },
    

    {
        "title": "Tavern Keeper",
        "discard": ['r'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/scruf.png",
        'banners': ['basic-banner', 'rum-banner'],
        "production": ['r'],
        "copies": 2,
    },

    {
        "title": "White Parrot",
        "discard": ['p'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/toucan.png",
        'banners': ['basic-banner', 'parrot-banner'],
        "production": ['p'],
        "copies": 2,
    },

    {
        "title": "Gun Merchant",
        "discard": ['g'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/gun-merchant.png",
        'banners': ['basic-banner', 'gun-banner'],
        "production": ['g'],
        "copies": 2,
    },

    {
        "title": "Master Gunner",
        "discard": ['g'],
        "cost": ['g', 'c', 'cs'],
        "img": "cards/master-gunner.png",
        'banners': ['basic-banner', 'gun-banner'],
        "extra": ['bolt', 'bolt'],
        "production": ['g']
    },

    {
        "title": "Bird Handler",
        "discard": ['p'],
        "cost": ['p', 'c', 'cs'],
        "img": "cards/spyglass.png",
        "extra": ['bolt', 'telescope'],
        'banners': ['basic-banner', 'parrot-banner'],
        "production": ['p'],
        // "css": "bg-top"
    },


    {
        "title": "Rum Runner",
        "discard": ['r'],
        "cost": ['r', 'cs', 'cs'],
        "img": "cards/rum-runner.png",
        'banners': ['basic-banner', 'rum-banner'],
        "extra": ['bolt'],
        "production": ['r']
    },


    {
        "discard": ['r'],
        "title": "Rich Pirate",
        "cost": ['r', 'cs', 'c'],
        "img": "cards/handler.png",
        "extra": ['vp-1'],
        'banners': ['basic-banner', 'parrot-banner'],
        "production": ['p'],
        "copies": 2,
    },

    {
        "title": "Armed Orangutan",
        "discard": ['p'],
        "cost": ['p', 'cs', 'c'],
        "img": "cards/armed-orangutan.png",
        "extra": ['vp-1'],
        'banners': ['basic-banner', 'gun-banner'],
        "production": ['g'],
        "copies": 2,
    },

    {
        "title": "Brawl",
        "cost": ['g', 'cs', 'c'],
        "discard": ['g'],
        "img": "cards/brawl.png",
        "extra": ['vp-1'],
        'banners': ['basic-banner', 'rum-banner'],
        "production": ['r'],
        "copies": 2,
    },

    {
        "discard": ['s'],
        "title": "Gravecaller",
        "cost": ['p', 'g', 'c'],
        "img": "cards/necro.png",
        "extra": ['vp-1'],
        'banners': ['skull-banner'],
        "production": ['s'],
        "copies": 2,
    },

    {
        "title": "Docks",
        "discard": ['h'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/docks.png",
        "extra": ['vp-1'],
        'banners': ['helm-banner'],
        "production": ['h'],
        "copies": 2,
    },

    {
        "title": "Gems Market",
        "discard": ['e'],
        "cost": ['g', 'r', 'c'],
        "img": "cards/gem-merchant.png",
        'banners': ['gem-banner'],
        "extra": ['vp-1'],
        "production": ['e'],
        "copies": 2,
    },

    {
        "discard": ['e'],
        "title": "Hired Thief",
        "cost": ['r', 'g', 'cs', 'cs'],
        "img": "cards/thief.png",
        "extra": ['vp-1', 'x', 'gem-banner'],
        "banners": ['gun-banner'],
        "production": ['e'],
    },

    {
        "discard": ['r'],
        "title": "Abandoned Manor",
        "cost": ['g', 'p', 'cs', 'cs'],
        "img": "cards/manor.png",
        "banners": ['parrot-banner'],
        "extra": ['vp-1', 'x', 'skull-banner'],
        "production": ['s'],
    },

    {
        "title": "Treasure Map",
        "discard": ['p'],
        "cost": ['p', 'r', 'cs'],
        "img": "cards/parrot-reconnaissance.png",
        "banners": ['gem-banner'],
        "production": ['h'],
        "extra": ['telescope'],
        "css": "bg-top",
    },

    {
        "title": "Skeleton Crew",
        "discard": ['s'],
        "cost": ['h', 'g', 'g'],
        "img": "cards/skeleton-crew.png",
        "banners": ['skull-banner'],
        "extra": ['vp-1'],
        "production": ['s'],
        "css": "bg-top",
    },

    {
        "title": "Odd Apparition",
        "discard": ['p'],
        "cost": ['s', 'p', 'p'],
        "img": "cards/captain-death.png",
        "extra": ['vp-1'],
        "banners": ['parrot-banner'],
        "production": ['e'],
        "block": true,
        "css": "bg-top"
    },

    {
        "title": "Trade Route",
        "discard": ['p'],
        "cost": ['e', 'p', 'cs'],
        "img": "cards/wind.png",
        "extra": ['vp-1'],
        "banners": ['helm-banner'],
        "production": ['h'],
        "changed": false,
    },

    {
        "title": "Bird Bazaar",
        "discard": ['e'],
        "cost": ['r', 'p', 'cs', 'cs'],
        "img": "cards/animal-market.png",
        'banners': ['rum-banner'],
        // "extra": ['vp-1'],
        "production": ['g', 'or', 'p'],
    },

    // {
    //     "title": "Trading Post",
    //     "discard": ['e'],
    //     "cost": ['g', 'cs', 'c', 'c'],
    //     "img": "cards/animal_market.png",
    //     'banners': ['rum-banner'],
    //     "production": ['r', 'or', 'p'],
    // },

    // {
    //     "title": "Grand Escape",
    //     "discard": ['g'],
    //     "cost": ['p', 'g', 'e', 'c'],
    //     "img": "cards/freed_monkeys.jpeg",
    //     "extra": ['vp-1'],
    //     'banners': ['rum-banner'],
    //     "production": ['r', 'or', 'p'],
    //     "changed": false,
    // },

    {
        "title": "Poacher",
        "discard": ['s'],
        "cost": ['g', 'g', 'cs', 'cs'],
        "img": "cards/duchess.png",
        "banners": ['gun-banner'],
        "production": ['p', 'or', 'r'],
        "extra": ['vp-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "discard": ['h'],
        "title": "Kiss the ring",
        "cost": ['e', 'e', 'h'],
        "img": "cards/crooked.png",
        "extra": ['vp-3'],
        "banners": ['gem-banner'],
        "production": ['s'],
        "changed": false,
        "css": "bg-top"
    },


    {
        "discard": ['e'],
        "title": "Captain Longtooth",
        "cost": ['s', 's', 'e'],
        "img": "cards/witch.png",
        "extra": ['vp-3'],
        "banners": ['helm-banner'],
        "production": ['h'],
        "css": "bg-top",
    },


    {
        "title": "Desert Island",
        "discard": ['g'],
        "cost": ['h', 'r', 'cs', 'c'],
        "img": "cards/desert-island.png",
        // "extra": ['vp-1'],
        "banners": ['coin-banner'],
        "production": ['g', 'or', 'cs'],
        "changed": false,
    },


    {
        "title": "Rowdy Mob",
        "discard": ['r'],
        "cost": ['g', 'g', 'r'],
        "img": "cards/mob.png",
        "banners": ['gun-banner', 'gun-banner'],
        "production": ['s'],
        "changed": false,
    },


    {
        "title": "Barataria Bay",
        "discard": ['p'],
        "cost": ['r', 'p', 'g', 'cs'],
        "img": "cards/bay.png",
        "extra": ['vp-2'],
        'banners': ['coin-banner'],
        "production": ['cs'],
    },

    {
        "title": "Bustling Market",
        "discard": ['r'],
        "cost": ['r', 'r', 'cs', 'cs'],
        "img": "cards/busy.png",
        'banners': ['coin-banner'],
        "extra": ['vp-1', 'x', 'rum-banner'],
        "production": ['cs'],
        "copies": 2,
    },

    {
        "title": "Animal Sanctuary",
        "discard": ['p'],
        "cost": ['p', 'p', 'p', 'c'],
        "img": "cards/sanctuary.png",
        "extra": ['vp-2', 'x', 'parrot-banner'],
        "banners": ['parrot-banner'],
        // "production": ['t'],
        // "value_correction": -1
        "changed": false,
    },


    {
        "title": "Plunder",
        "discard": ['g'],
        "cost": ['g', 'g', 's'],
        "img": "cards/attack.png",
        "banners": ['gem-banner'],
        "extra": ['vp-1'],
        "production": ['e'],
        "changed": false,
    },

    {
        "title": "Rum Merchant",
        "discard": ['r'],
        "cost": ['h', 'cs', 'cs'],
        "img": "cards/rum-merchant.png",
        "banners": ['basic-banner'],
        "extra": ['draw-1'],
        "production": ['r'],
    },

    {
        "title": "Cavern Horror",
        "discard": ['s'],
        "cost": ['s', 'e', 'cs', 'cs'],
        "img": "cards/deep-sea-horror.png",
        "banners": ['skull-banner'],
        "extra": ['vp-2'],
        "production": ['s'],
    },

    {
        "title": "Amazon Warrior",
        "discard": ['g'],
        "cost": ['e', 'p', 'g'],
        "img": "cards/amazon.png",
        "banners": ['helm-banner'],
        "extra": ['vp-1', 'compass'],
        "production": ['p'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Sidekick",
        "discard": ['r'],
        "cost": ['e', 'r', 'p', 'c'],
        "img": "cards/sidekick.png",
        "extra": ['vp-2'],
        "banners": ['helm-banner'],
        "production": ['h'],
        "changed": false,
        "css": "bg-top",
    },

    {
        "discard": ['r'],
        "title": "Drunk Marmosets",
        "cost": ['p', 'r', 'cs', 'cs'],
        "img": "cards/tavern-invasion.png",
        "banners": ['rum-banner'],
        "extra": ['vp-1', 'x' , 'parrot-banner'],
        "production": ['g'],
        "changed": false,
        "css": "bg-top",
        "artist": "Vitor Henrique",
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "cost": ['s', 's', 'g', 'cs'],
        "img": "cards/sneak-attack.png",
        "banners": ['gem-banner'],
        "extra": ['vp-2'],
        "production": ['e'],
        "changed": false,
    },

    {
        "discard": ['g'],
        "title": "Cannoneer's Guild",
        "cost": ['g', 'g', 'g', 's'],
        "img": "cards/canon-guild.png",
        "banners": ["gun-banner"],
        "extra": ['vp-2', 'x', 'gun-banner'],
        "css": "bg-top",
    },

    {
        "discard": ['s'],
        "title": "Walk the Plank",
        "cost": ['g', 'g'],
        "img": "cards/walk.png",
        "banners": ["gun-banner"],
        "extra": ['vp-1', 'x', 'gun-banner'],
        // "production": ['', 'produce', 'g'],
        "changed": false,
    },


    {
        "discard": ['p'],
        "title": "Captain Lhoryn",
        "cost": ['h', 'h', 'c'],
        "img": "cards/watch.png",
        "banners": ['gem-banner'],
        "extra": ['vp-4', 'telescope'],
        "changed": false,
    },


    {
        "discard": ['e'],
        "title": "Captain Grenwish",
        "cost": ['e', 'p'],
        "img": "cards/emerald-bird.png",
        "banners": ['gem-banner'],
        "extra": ['vp-1', 'x', 'gem-banner'],
        "changed": false,
        "css": "bg-top",
        // "production": ['discard-helm', 'produce', 'any'],
    },


    {
        "discard": ['h'],
        "title": "Captain Cutlass",
        "cost": ['s', 'h', 'c', 'cs'],
        "img": "cards/killer.png",
        "extra": ['vp-3'],
        "banners": ['coin-banner'],
        "production": [`cs`],
        "changed": false,
        "block": true,
    },


    {
        "title": "Doom Temple",
        "discard": ['s'],
        "cost": ['g', 's', 's'],
        "img": "cards/doom-island.png",
        "extra": ['vp-3', 'x', 'skull-banner'],
        "css": "bg-top",
    },


    {
        "title": "Spice Monopoly",
        "discard": ['h'],
        "cost": ['p', 'h', 'h'],
        "img": "cards/mono.png",
        "banners": ['rum-banner'],
        "extra": ['vp-3', 'x', 'helm-banner'],
    },

    {
        "title": "Smuggler Cache",
        "discard": ['r'],
        "cost": ['r', 'e', 'e'],
        "img": "cards/mine.png",
        "extra": ['vp-3', 'x', 'gem-banner'],
    },


    {
        "title": "Monkey Island",
        "discard": ['p'],
        "cost": ['e', 's', 'h', 'p', 'c'],
        "img": "cards/monkey-temple.png",
        "extra": ['vp-6'],
        "banners": ['parrot-banner'],
        // "production": ['t'],
        "changed": false,
    },

    {
        "title": "El Dorado",
        "discard": ['h'],
        "cost": ['p', 'p', 'g', 'g', 'r', 'r'],
        "img": "cards/el-dorado.png",
        "banners": ['coin-banner'],
        "extra": ['vp-5', 'crown'],
        "changed": false,
    },

    {
        "title": "Pilferer's Guild",
        "discard": ['s'],
        "cost": ['r', 'g', 'g', 'cs'],
        "img": "cards/thieves-statue.png",
        "banners": ['coin-banner'],
        "extra": ['vp-2', 'x', 'coin-banner'],
        // "production": ['s']
        "changed": false,
        "css": "bg-top",
    },

    // affinity cards
    {
        "title": "Monkey at the bar",
        "discard": ['p'],
        "cost": ['p', 'r', 'h', 'cs'],
        "img": "cards/monkey-helm.png",
        "extra": ['crown'],
        "banners": ['gun-banner'],
        "production": ['g'],
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "Hunt",
        "discard": ['p'],
        "cost": ['g', 'r', 'e', 'c'],
        "img": "cards/hunt.png",
        "extra": ['bolt', 'bolt'],
        "banners": ['parrot-banner', 'parrot-banner'],
        "production": ['p'],
        "changed": false,
        "css": "bg-top",
        "block": true,
    },

    {
        "title": "Poison",
        "discard": ['r'],
        "cost": ['g', 'p', 's', 'cs'],
        "img": "cards/poison.png",
        "extra": ['bolt', 'bolt'],
        "banners": ['rum-banner'],
        "production": ['r'],
        "changed": false,
        "block": true,
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
        "discard": ['e'],
        "cost": ['s', 's'],
        "img": "cards/emerald-ritual.png",
        "extra": ['vp-1'],
        "banners": ['gem-banner'],
        "production": ['e'],
        "css": "bg-top",
    },

    {
        "title": "Shipyard",
        "discard": ['h'],
        "cost": ['e', 'e', 'cs'],
        "img": "cards/shipyard.png",
        "extra": ['vp-1'],
        "banners": ['helm-banner'],
        "production": ['h'],
        "css": "bg-top"
    },

    {
        "title": "Troubled Expedition",
        "discard": ['s'],
        "cost": ['h', 'h', 'c'],
        "img": "cards/trouble.png",
        "extra": ['crown'],
        // "banners": ['rum-banner'],
        "production": ['s'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Strange Encounter",
        "discard": ['e'],
        "cost": ['h', 's', 'r', 'cs'],
        "img": "cards/cover.jpg",
        "banners": ['skull-banner'],
        "extra": ['vp-4', 'tentacle'],
        "css": "bg-top"
    },

    {
        "title": "Haunted Shipwreck",
        "discard": ['s'],
        "cost": ['s', 's', 'g'],
        "img": "cards/skeleton-treasure.png",
        "banners": ['skull-banner'],
        "extra": ['vp-3', '3-choices'],
    },

    {
        "title": "Haven",
        "discard": ['r'],
        "cost": ['p', 'p', 'r', 'r', 'p'],
        "img": "cards/haven.png",
        "extra": ['vp-2', 'x', 'basic-banner'],
        "banners": ['rum-banner'],
        // "production": ['g'],
        "changed": true
    },

    {
        "title": "Docker's Guild",
        "discard": ['r'],
        "cost": ['p', 'g', 'r', 'cs', 'cs'],
        "img": "cards/dockers-guild.png",
        // "production": ['r'],
        "banners": ['basic-banner', 'basic-banner'],
        "extra": ['vp-1', 'x', 'basic-banner'],
        "changed": false,
         "css": "bg-top"
    },

    {
        "title": "Tavern",
        "discard": ['r'],
        "cost": ['r', 'r', 'cs', 'cs'],
        "img": "cards/ship-tavern.png",
        "banners": ["helm-banner"],
        "extra": ['vp-2', 'x', 'rum-banner'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Red Parrot",
        "discard": ['p'],
        "cost": ['p', 'p'],
        "img": "cards/turtle.png",
        "extra": ['vp-1'],
        "banners": ['parrot-banner', 'basic-banner'],
        "production": ['r'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Angry Ape",
        "discard": ['g'],
        "cost": ['p', 'p', 'g'],
        "img": "cards/gorilla.png",
        "extra": ['vp-2'],
        "banners": ['gun-banner', 'parrot-banner'],
        "production": ['g'],
        "block": true,
        // "css": "bg-top"
    },

    {
        "title": "Lady Celeste",
        "discard": ['e'],
        "cost": ['g'],
        "img": "cards/wanted.jpg", // toloma8
        "banners": ['gun-banner'],
        "extra": ['bolt', 'bolt'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Mobile Trader",
        "discard": ['h'],
        "cost": ['r', 'r', 'cs'],
        "img": "cards/traveling-salesman.png",
        "banners": ['helm-banner'],
        "production": ['g'],
        "extra": ['compass'],
        "changed": true,
        "css": "bg-top"
    },

    {
        "title": "Rum Dispensary",
        "discard": ['e'],
        "cost": ['r', 'r', 'r', 'cs'],
        "img": "cards/rum-collection.png",
        "banners": ['rum-banner', 'rum-banner'],
        // "production": ['g'],
        "extra": ['vp-5'],
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "No Mercy",
        "discard": ['s'],
        "cost": ['g', 'g', 'g'],
        "img": "cards/captain-crazy.png",
        "banners": ['gun-banner', 'gun-banner'],
        // "production": ['g'],
        "extra": ['vp-4'],
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "Hypnotic Frogs",
        "discard": ['p'],
        "cost": ['p', 'p', 'p', 'p'],
        "img": "cards/frogs.png",
        "banners": [],
        // "production": ['g']
        "banners": ['parrot-banner'],
        "extra": ['vp-5', 'crown'],
        "changed": false,
    },

    {
        "title": "Deadly Expedition",
        "discard": ['r'],
        "cost": ['h', 'h', 'e'],
        "img": "cards/dead-expedition.png",
        "production": ['e'],
        "banners": ['skull-banner'],
        "extra": ['vp-1', 'x', 'skull-banner'],
    },

    // {
    //     "title": "Animal Husbandry",
    //     "discard": ['p'],
    //     "cost": ['h', 'c'],
    //     "img": "cards/capture.png",
    //     "production": ['p'],
    //     // "banners": ['skull-banner'],
    //     "extra": ['vp-1'],
    //     "changed": false,
    // },

    {
        "title": "Swamp Meditation",
        "discard": ['g'],
        "cost": ['s', 'c', 'cs'],
        "img": "cards/voodoo.png",
        "production": ['h'],
        "banners": ['skull-banner'],
        "extra": ['vp-1'],
        "changed": false,
    },

    {
        "title": "Fortune Teller",
        "discard": ['g'],
        "cost": ['p', 'cs', 'cs'],
        "img": "cards/oracle.png",
        "production": ['r'],
        "banners": ['basic-banner'],
        "extra": ['compass'],
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "Thief",
        "discard": ['e'],
        "cost": ['cs', 'cs', 'cs'],
        "img": "cards/hooded.png",
        // "production": ['r'],
        "banners": ['coin-banner', 'coin-banner'],
        "extra": ['vp-1', 'x', 'coin-banner'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Happy End!",
        "discard": ['s'],
        "cost": ['e', 'e', 's', 's', 'h', 'h'],
        "img": "cards/king-treasure.png",
        // "production": ['r'],
        // "banners": ['helm-banner', 'skull-banner', 'gem-banner'],
        "extra": ['vp-8', 'crown'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Treasure Hunt",
        "discard": ['g'],
        "cost": ['h', 'p', 'g'],
        "img": "cards/treasure-map.png",
        "production": ['e'],
        // "banners": ['helm-banner', 'skull-banner', 'gem-banner'],
        "extra": ['vp-1', 'x', 'helm-banner'],
        "changed": false,
    },

    {
        "title": "Skull Collector",
        "discard": ['p'],
        "cost": ['s', 's', 's'],
        "img": "cards/skull-3.png",
        // "production": ['g'],
        "banners": ['skull-banner', 'skull-banner'],
        "extra": ['vp-4', '3-choices'],
        "changed": false,
    },

    {
        "title": "Captain Undead",
        "discard": ['g'],
        "cost": ['s', 's', 's', 's'],
        "img": "cards/captain-undead.png",
        // "production": ['g'],
        "banners": ['skull-banner', 'gun-banner'],
        "extra": ['vp-6', 'crown'],
        "changed": false,
    },

    {
        "title": "Emerald Bayou",
        "discard": ['e'],
        "cost": ['e', 'e', 'e', 's'],
        "img": "cards/doom-temple.png",
        // "production": ['g'],
        "banners": ['skull-banner', 'gem-banner'],
        "extra": ['vp-6'],
        "changed": false,
    },

    {
        "title": "Flag Workshop",
        "discard": ['h'],
        "cost": ['e', 'c', 'c'],
        "img": "cards/banner-workshop.png",
        // "production": ['g'],
        "banners": ['rum-banner', 'parrot-banner', 'helm-banner', 'basic-banner', 'coin-banner'],
        // "extra": ['vp-8'],
        "changed": false,
    },

    {
        "title": "Fruit Picker",
        "discard": ['p'],
        "cost": ['p', 'r', 'cs'],
        "img": "cards/fruit-picker.png",
        "production": ['p'],
        "banners": ['parrot-banner', 'rum-banner'],
        "extra": ['vp-1'],
        "changed": false,
    },

    {
        "title": "Sea Battle",
        "discard": ['g'],
        "cost": ['h', 'h', 'h', 'g'],
        "img": "cards/armada.png",
        // "production": ['p'],
        "banners": ['rum-banner', 'helm-banner', 'gem-banner'],
        "extra": ['vp-6'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Emerald Thief",
        "discard": ['p'],
        "cost": ['e', 'c', 'cs'],
        "img": "cards/emerald-thiefs.png",
        "production": ['p', 'p'],
        "banners": ['basic-banner', 'parrot-banner'],
        // "extra": ['vp-1'],
        "changed": false,
    },

    {
        "title": "Distill",
        "discard": ['r'],
        "cost": ['s', 'c', 'cs'],
        "img": "cards/distill.png",
        "production": ['r', 'r'],
        "banners": ['basic-banner', 'rum-banner'],
        // "extra": ['vp-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Armory",
        "discard": ['g'],
        "cost": ['h', 'c', 'cs'],
        "img": "cards/armory.png",
        "production": ['g', 'g'],
        "banners": ['basic-banner', 'gun-banner'],
        // "extra": ['vp-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Funeral",
        "discard": ['s'],
        "cost": ['p', 'p', 'g', 'g', 'c', 'cs'],
        "img": "cards/funeral.png",
        "production": ['s'],
        "banners": ['skull-banner'],
        "extra": ['vp-4', 'bolt'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "?",
        "discard": ['e'],
        "cost": ['p', 'p', 'r', 'r', 'r', 'cs', 'cs'],
        "img": "cards/fire.png",
        "production": [],
        "banners": ['parrot-banner', 'rum-banner'],
        "extra": ['vp-7', 'bolt', 'bolt'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Emerald Whale",
        "discard": ['h'],
        "cost": ['e', 'e', 'p'],
        "img": "cards/emerald-whale.png",
        "production": [],
        "banners": ['gem-banner', 'helm-banner'],
        "extra": ['draw-2'],
        "changed": false,
        "css": "bg-top"
    },
]