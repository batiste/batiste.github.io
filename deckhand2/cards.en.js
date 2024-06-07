

var cards = [

    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `:parrot: and draw a card.`,
    },
    {
        "title": "Cannoneer's Guild",
        "coin": 3,
        "cost": ['g', 'r', 'r', 'c', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `:gun: :gun:`,
        "build_text": `:hammer: <b>:</b> :gun: <b>=</b> :coin:`,
        "build": ['g']
    },

    {
        "title": "Walk the Plank",
        "coin": 1,
        "cost": ['c', 'c'],
        "img": "cards/walk.png",
        "type": "military",
        "play_text": `:gun: and draw a card.`,
        "build": ['g']
    },

    {
        "title": "Plunder",
        "coin": 2,
        "cost": ['c', 'g'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `Draw 2 cards.`,
        "build": ['g']
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `:parrot: <b>=</b> :coin:.`,
        "build": ['p', 'p']
    },

    {
        "title": "Spice Merchant",
        "coin": 1,
        "cost": ['r', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        "bid_text": `If you win the bid, draw a card.`,
        "build": ['r']
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "play_text": `:coin: :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['r']
    },

    {
        "title": "Grand Escape",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "play_text": `:gun: :rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['p', 'r']
    },

    {
        "title": "Amazon Warrior",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/warrior.jpeg",
        "type": "military",
        "bid_text": `:parrot: <b>=</b> :coin: `,
        "build": ['g']
    },

    {
        "title": "Rich Pirate",
        "coin": 1,
        "cost": ['c', 'c', 'c'],
        "img": "cards/rich.png",
        "type": "merchant",
        "play_text": `:coin::coin:`,
        "build": ['c']
    },

    {
        "title": "Animal Market",
        "coin": 2,
        "cost": ['p', 'c', 'r'],
        "img": "cards/animal_market.png",
        "type": "merchant",
        "play_text": `:parrot::coin:`,
        "build_text": `:coin: <b>=</b> :parrot:`,
        "build": ['r']
    },

    {
        "title": "Wild Winds",
        "coin": 2,
        "cost": ['p', 'g', 'r', 'c'],
        "img": "cards/wind.png",
        "type": "wild",
        // "play_text": `:coin::coin:`,
        "build": ['p'],
        "build_text": `Draw an extra card at cleanup`
    },

    {
        "title": "Loaded Cargo",
        "coin": 1,
        "cost": ['r', 'p'],
        "img": "cards/loaded.png",
        "type": "merchant",
        "bid_text": `:rum: <b>=</b> :coin:`,
        "build_text": `:rum: <b>=</b> :coin:`,
        "build": ['r'],
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "cost": ['r', 'p', 'g'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "bid_text": `:parrot::gun: <b>=</b> :coin:`,
        "build_text": `:parrot::gun: <b>=</b> :coin::coin::coin:`,
        "build": ['p'],
    }
]