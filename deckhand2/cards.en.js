

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
        "title": "Greed till the end",
        "discard": [],
        "cost": ['skull-banner', 'skull-banner', 'rum-banner'],
        "img": "cards/skeleton-treasure.png",
        // "production": ['r']
        'extra': ['vp-4', '3-choices'],
        'type': 'supremacy',
        "changed": false,
    },


    {
        "title": "Tamed Kraken",
        "discard": [],
        "cost": ['gem-banner', 'skull-banner', 'parrot-banner'],
        "img": "cards/tamed.jpg",
        // "production": ['r']
        'extra': ['vp-4', 'tentacle', 'telescope'],
        'type': 'supremacy',
        "css": "bg-top"
    },

    {
        "title": "Mermaid",
        "discard": [],
        "cost": ['helm-banner', 'skull-banner', 'coin-banner', 'parrot-banner', 'gun-banner'],
        "img": "cards/mermaid.png",
        // "production": ['r']
        'extra': ['vp-5', 'crown', 'tentacle'],
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
        "img": "cards/thief-town.png",
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
        "title": "Shooting the Kraken",
        "discard": [],
        "cost": ['gun-banner', 'gun-banner', 'gun-banner'],
        "img": "cards/shooting-kraken.jpg",
        // "production": ['r']
        'extra': ['vp-4', 'tentacle'],
        'type': 'supremacy',
        "changed": false,
        "css": "bg-top",
    },

    {
        "title": "Deep Exploration",
        "discard": [],
        "cost": ['helm-banner', 'helm-banner', 'helm-banner'],
        "img": "cards/3-scrolls.png",
        // "production": ['r']
        'extra': ['vp-3', '3-choices', 'crown'],
        'type': 'supremacy',
        "changed": false,
        "css": "bg-0",
    },

    {
        "title": "Governor's Bribe",
        "discard": [],
        "cost": ['coin-banner', 'coin-banner', 'coin-banner'],
        "img": "cards/bribe.png",
        // "production": ['r']
        'extra': ['vp-1', 'compass', 'draw-2'],
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
        "copies": 2,
    },


    {
        "title": "Stolen Treasure",
        "discard": ['g'],
        "cost": ['c', 'p', 'g', 'r'],
        "img": "cards/2-thieves.png",
        "banners": ['coin-banner'],
        // "extra": ['vp-1'],
        "production": ['cs', 'cs'],
        "copies": 1,
        "css": "bg-top"
    },


    {
        "title": "Emerald Thief",
        "discard": ['p'],
        "cost": ['e', 'c', 'cs', 'cs'],
        "img": "cards/nesting.png",
        "production": ['p', 'p'],
        "banners": ['basic-banner', 'parrot-banner'],
        // "extra": ['vp-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Distill",
        "discard": ['r'],
        "cost": ['s', 'c', 'cs', 'cs'],
        "img": "cards/distill.png",
        "production": ['r', 'r'],
        "banners": ['basic-banner', 'rum-banner'],
        // "extra": ['vp-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "War Ship",
        "discard": ['g'],
        "cost": ['h', 'c', 'cs', 'cs'],
        "img": "cards/war-ship.png",
        "production": ['g', 'g'],
        "banners": ['basic-banner', 'gun-banner'],
        // "extra": ['vp-1'],
        "changed": false,
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
        "title": "Familiar Toucan",
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
        "title": "Lookout",
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
        "css": "bg-top",
        "sign": "vh",
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
        "title": "Monkey at the helm",
        "discard": ['h'],
        "cost": ['r', 'p', 'c'],
        "img": "cards/monkey-helm.png",
        "extra": ['vp-1'],
        'banners': ['helm-banner'],
        "production": ['h'],
        "copies": 2,
        "css": "bg-top",
    },

    {
        "title": "Gems Greed",
        "discard": ['e'],
        "cost": ['g', 'r', 'c'],
        "img": "cards/gem-greed.png",
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
        "banners": ['coin-banner'],
        "production": ['e'],
    },

    {
        "discard": ['r'],
        "title": "Abandoned Manor",
        "cost": ['g', 'p', 'cs', 'cs'],
        "img": "cards/manor.png",
        "banners": ['gun-banner'],
        "extra": ['vp-1', 'x', 'skull-banner'],
        "production": ['s'],
        "css": "bg-50",
    },

    {
        "title": "Helpful Parrot",
        "discard": ['h'],
        "cost": ['p', 'r', 'cs'],
        "img": "cards/parrot-reconnaissance.png",
        // "banners": ['gem-banner'],
        "production": ['h'],
        "extra": ['parrot-banner', 'produce', 'telescope'],
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
        "block": true,
    },

    {
        "title": "Odd Apparition",
        "discard": ['s'],
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
        "cost": ['e', 'r', 'cs'],
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
        "css": "bg-top"
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
        "title": "Duchess",
        "discard": ['p'],
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
        "title": "Thief in Action",
        "discard": ['g'],
        "cost": ['h', 'r', 'cs', 'c'],
        "img": "cards/fisherman.png",
        // "extra": ['vp-1'],
        "banners": ['coin-banner'],
        "production": ['g', 'or', 'cs'],
        "changed": false,
        "css": "bg-top",
        "sign": "vh",
    },


    {
        "title": "Rowdy Mob",
        "discard": ['r'],
        "cost": ['g', 'g', 'r'],
        "img": "cards/mob.png",
        "banners": ['gun-banner', 'gun-banner'],
        "extra": ["battle"],
        "production": ['s'],
        "changed": false,
        "sign": "vh",
        "css": "bg-top",
    },


    {
        "title": "Quiet Afternoon",
        "discard": ['p'],
        "cost": ['r', 'p', 'g', 'cs'],
        "img": "cards/39.jpg",
        "extra": ['vp-2'],
        'banners': ['rum-banner'],
        "production": ['cs'],
        "css": "bg-top",
        "copies": 2,
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
        "css": "bg-30",
    },

    {
        "title": "Animal Sanctuary",
        "discard": ['p'],
        "cost": ['p', 'p', 'p', 'c'],
        // "img": "cards/magic-tree.png",
        "img": "cards/sanctuary.png",
        "extra": ['vp-2', 'x', 'parrot-banner'],
        "banners": ['parrot-banner'],
        // "production": ['t'],
        // "value_correction": -1
        "changed": false,
        "css": "bg-top",
    },


    {
        "title": "Plunder",
        "discard": ['g'],
        "cost": ['g', 'g', 's'],
        "img": "cards/attack.png",
        "banners": ['gem-banner'],
        "extra": ['battle'],
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
        "img": "cards/cavern-horror.png",
        "banners": ['skull-banner'],
        "extra": ['vp-2'],
        "production": ['s'],
        "sign": "vh",
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
        "extra": ['vp-3'],
        // "banners": ['helm-banner'],
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
        "sign": "vh",
    },

    {
        "discard": ['g'],
        "title": "Sneak Attack",
        "cost": ['s', 's', 'g', 'cs'],
        "img": "cards/sneak-attack.png",
        "banners": ['gem-banner'],
        "extra": ['vp-1', 'battle'],
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
        "title": "Lady Pirate",
        "cost": ['g', 'g'],
        "img": "cards/lady-pirate.png",
        "banners": ["gun-banner"],
        "extra": ['vp-1', 'x', 'gun-banner'],
        // "production": ['', 'produce', 'g'],
        "changed": false,
        "css": "bg-top",    
        "sign": "to",
    },


    {
        "discard": ['p'],
        "title": "Planning attack",
        "cost": ['h', 'h', 'c'],
        "img": "cards/watch.png",
        "banners": ['gem-banner'],
        "extra": ['vp-4', 'telescope'],
        "changed": false,
    },


    {
        "discard": ['e'],
        "title": "Emerald Bird",
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
        "title": "Cutlass Wielder",
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
        "img": "cards/construction.jpg",
        "banners": ['rum-banner'],
        "extra": ['vp-3', 'x', 'helm-banner'],
        "css": "bg-top",
    },

    {
        "title": "Emerald's Mine",
        "discard": ['r'],
        "cost": ['r', 'e', 'e'],
        "img": "cards/mine.png",
        "extra": ['vp-3', 'x', 'gem-banner'],
    },


    {
        "title": "Friendly Octopus",
        "discard": ['p'],
        "cost": ['e', 's', 'h', 'p', 'c'],
        "img": "cards/possesion.png",
        "extra": ['vp-6'],
        "banners": ['parrot-banner'],
        // "production": ['t'],
        "changed": false,
        "css": "bg-top",
        "sign": "vh",
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
        "title": "Pilferer's Monument",
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
        "title": "Walk the plank",
        "discard": ['p'],
        "cost": ['p', 'r', 'h'],
        "img": "cards/walk-plank.png",
        "extra": ['crown'],
        // "banners": ['gun-banner'],
        "production": ['g'],
        "changed": false,
        "css": "bg-top",
        "sign": "vh"
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
        "extra": ['battle', 'bolt', 'bolt'],
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
        "cost": ['e', 'e', 'c'],
        "img": "cards/shipyard.png",
        "extra": ['vp-2'],
        "banners": ['helm-banner'],
        "production": ['h'],
        "css": "bg-top"
    },

    {
        "title": "Troubled Expedition",
        "discard": ['s'],
        "cost": ['h', 'h', 'cs'],
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
        "img": "cards/monkey-temple.png",
        "banners": ['skull-banner'],
        "extra": ['vp-3', 'battle', 'tentacle'],
        "css": "bg-40"
    },

    {
        "title": "Shipwreck",
        "discard": ['s'],
        "cost": ['h', 'g'],
        "img": "cards/grave.png",
        // "banners": ['skull-banner'],
        "extra": ['skull-banner', 'produce', '3-choices'],
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
        "cost": ['p', 'g', 'r', 'c', 'cs'],
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
        "title": "Ambush",
        "discard": ['e'],
        "cost": ['g'],
        "img": "cards/wanted.jpg", // toloma8
        "banners": ['gun-banner'],
        "extra": ['bolt', 'bolt', 'battle'],
        "changed": false,
        "css": "bg-top",
        "sign": "to",
    },

    {
        "title": "Potion Trader",
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
        "extra": ['vp-3', 'battle'],
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
        "title": "Dead King's Treasure",
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
        "discard": ['p'],
        "cost": ['e', 'p'],
        "img": "cards/treasure-map.png",
        // "production": ['e'],
        "banners": ['parrot-banner'],
        "extra": ['helm-banner', 'produce', 'draw-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Skull Collector",
        "discard": ['g'],
        "cost": ['s', 's', 's'],
        "img": "cards/skull-collector.png",
        // "production": ['g'],
        "banners": ['skull-banner', 'skull-banner'],
        "extra": ['vp-4', '3-choices'],
        "changed": false,
        "sign": "ma",
        "css": "bg-0"
    },

    {
        "title": "Captain Undead",
        "discard": ['g'],
        "cost": ['s', 's', 's', 'h'],
        "img": "cards/ghost.jpg",
        // "production": ['g'],
        "banners": ['skull-banner', 'gun-banner'],
        "extra": ['vp-6', 'crown'],
        "changed": false,
        "css": "bg-0"
    },

    {
        "title": "Emerald's Portal",
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
        "css": "bg-60"
    },

    {
        "title": "Jaguar's Ambush",
        "discard": ['s'],
        "cost": ['p', 'p', 'g', 'g', 'c', 'cs'],
        "img": "cards/2-jaguars.png",
        "production": ['s'],
        "banners": ['skull-banner'],
        "extra": ['vp-4', 'bolt'],
        "changed": false,
        "css": "bg-top",
        "block": true,
    },

    {
        "title": "Powder Keg Accident",
        "discard": ['e'],
        "cost": ['p', 'p', 'r', 'r', 'r', 'cs', 'cs'],
        "img": "cards/powder.png",
        "production": [],
        "banners": ['parrot-banner', 'gun-banner'],
        "extra": ['vp-7', 'bolt', 'bolt'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Emerald Whale",
        "discard": ['h'],
        "cost": ['h', 'p'],
        "img": "cards/emerald-whale.png",
        "production": [],
        "banners": ['helm-banner'],
        "extra": ['gem-banner', 'produce', 'draw-1'],
        "changed": false,
        "css": "bg-top"
    },

    {
        "title": "Statuette",
        "discard": ['g'],
        "cost": ['r', 'r', 'p', 'p', 'e', 'e'],
        "img": "cards/statuette.png",
        "production": ["h", "or", "cs"],
        "banners": ['gem-banner'],
        "extra": ['vp-4','bolt'],
        "changed": false,
        "css": "bg-top"
    },
]