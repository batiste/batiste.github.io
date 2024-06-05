

var cards = [

    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `Draw a card, <img src="img/parrot.png" class="gun">`,
        // "build_text": "Something short lela alss.",
    },
    {
        "title": "Cannoneer's Guild",
        "coin": 3,
        "cost": ['g', 'r', 'r', 'c', 'c', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `<img src="img/gun.png" class="gun"> <img src="img/gun.png" class="gun">`,
        "build_text": "Guns in the building cost of your bids are added to the bid.",
        "build": ['g']
    },
    {
        "title": "Plunder",
        "coin": 1,
        "cost": ['c', 'c'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `Remove a card from you hand or discard from the game.`,
        // "build_text": "Guns in the building cost of your bids are added to the bid.",
        "build": ['g']
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'c', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `<img src="img/coin.png" class="coin"> for each <img src="img/parrot.png" class="gun"> built.`,
        // "build_text": "Guns in the building cost of your bids are added to the bid.",
        "build": ['p', 'p']
    },

    {
        "title": "Spice Merchant",
        "coin": 1,
        "cost": ['r', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        // "play_text": `<img src="img/coin.png" class="coin"> for each <img src="img/parrot.png" class="gun"> built.`,
        "bid_text": `If you win a bid with this card, draw a card.`,
        // "build_text": "Guns in the building cost of your bids are added to the bid.",
        "build": ['r']
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "play_text": `<img src="img/coin.png" class="coin"> <img src="img/rum.png" class="hammer">.`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        // "build_text": "Guns in the building cost of your bids are added to the bid.",
        "build": ['r']
    }
]