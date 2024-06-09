

var cards = [

    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `:parrot::draw-1:`,
        "build_text": `:parrot::trans::coin::coin:`,
    },

    {
        "title": "Blue Parrot",
        "coin": 1,
        "cost": ['p'],
        "img": "cards/parrot-2.png",
        "type": "wild",
        // "play_text": `:coin::coin:`,
        "build": ['p'],
        "play_text": ':parrot::parrot:',
        "build_text": `:parrot::trans::draw-1:`
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `:parrot::coin:`,
        "build": ['p', 'p']
    },

    {
        "title": "Grand Escape",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "play_text": `:gun::rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['p', 'r']
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "cost": ['r', 'p', 'g'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "bid_text": `:gun::trans::coin:`,
        "build_text": `:gun::trans::coin::coin::coin:`,
        "build": ['p'],
    },

    {
        "title": "Deep Sea Horror",
        "coin": 1,
        "cost": ['g'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        "bid_text": `:coin:`,
        "build_text": `:hammer::parrot::trans::coin:`,
        "build": ['p'],
    },

    {
        "title": "Giant Crab",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/crab.png",
        "type": "wild",
        "play_text": `:parrot::trans::coin::coin::coin:`,
        "build": ['p', 'c'],
    },


    {
        "title": "Wild Winds",
        "coin": 2,
        "cost": ['p', 'r', 'c'],
        "img": "cards/wind.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "build": ['r'],
        "build_text": `:rum::trans::draw-1:`
    },

    {
        "title": "Spice Merchant",
        "coin": 1,
        "cost": ['r', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        "bid_text": `If you win the bid: :draw-1:`,
        "build": ['r'],
        "build_text": `:rum::coin::trans::draw-1:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "play_text": `:coin::rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['r'],
        "build_text": `:coin::trans::rum::rum:`,
    },

    {
        "title": "Rich Pirate",
        "coin": 1,
        "cost": ['c', 'p'],
        "img": "cards/rich.png",
        "type": "merchant",
        "play_text": `:coin::coin:`,
        "build": ['c']
    },

    {
        "title": "Water Bank",
        "coin": 2,
        "cost": ['c', 'c', 'c', 'r'],
        "img": "cards/water-bank.png",
        "type": "merchant",
        "bid_text": `:parrot::rum::gun:`,
        "build": ['c', 'c']
    },

    {
        "title": "Animal Market",
        "coin": 2,
        "cost": ['p', 'c', 'r'],
        "img": "cards/animal_market.png",
        "type": "merchant",
        "play_text": `:parrot::coin:`,
        "build_text": `:coin::trans::parrot::parrot:`,
        "build": ['r']
    },

    {
        "title": "Loaded Cargo",
        "coin": 1,
        "cost": ['r', 'p'],
        "img": "cards/loaded.png",
        "type": "merchant",
        "bid_text": `:rum::trans::coin:`,
        "build_text": `:rum::trans::coin::coin:`,
        "build": ['r'],
    },

    {
        "title": "Sneak Attack",
        "coin": 2,
        "cost": ['r', 'g', 'g'],
        "img": "cards/sneak_attack.png",
        "type": "military",
        "play_text": `:gun::coin::coin:`,
        "build_text": `:gun::trans::draw-1:`,
        "build": ['g'],
    },

    {
        "title": "Skeleton Crew",
        "coin": 2,
        "cost": ['g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "play_text": `if you have no cards <br>in hand: :coin::draw-2:`,
        // "build_text": ``,
        "build": ['g'],
    },

    {
        "title": "Cannoneer's Guild",
        "coin": 3,
        "cost": ['g', 'r', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `:gun: :gun:`,
        "build_text": `:hammer: :gun::trans::coin:`,
        "build": ['g']
    },

    {
        "title": "Walk the Plank",
        "coin": 1,
        "cost": ['c', 'c'],
        "img": "cards/walk.png",
        "type": "military",
        "play_text": `:gun::draw-1:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Plunder",
        "coin": 2,
        "cost": ['c', 'g'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `:draw-2:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Amazon Warrior",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/warrior.jpeg",
        "type": "military",
        "bid_text": `:parrot::trans::coin: `,
        "build": ['g']
    },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g'],
        "img": "cards/brawl.png",
        "type": "military",
        "play_text": `:gun::trans::draw-2: `,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },
]