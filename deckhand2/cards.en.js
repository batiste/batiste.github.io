

var cards = [

    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `Draw a card, <img src="img/parrot.png" class="gun">`,
    },
    {
        "title": "Cannoneer's Guild",
        "coin": 3,
        "cost": ['g', 'r', 'r', 'c', 'c', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `<img src="img/gun.png" class="gun"> <img src="img/gun.png" class="gun">`,
        "build_text": `<img src="img/hammer.png" class="hammer"> : <img src="img/gun.png" class="gun"> in
            the cost of your cards are worth <img src="img/coin.png" class="coin">.`,
        "build": ['g']
    },
    {
        "title": "Plunder",
        "coin": 1,
        "cost": ['c', 'c'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `Remove a card from you hand or discard from the game.`,
        "build": ['g']
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `<img src="img/coin.png" class="coin"> for each <img src="img/parrot.png" class="gun"> built.`,
        "build": ['p', 'p']
    },

    {
        "title": "Spice Merchant",
        "coin": 1,
        "cost": ['r', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        // "play_text": `<img src="img/coin.png" class="coin"> for each <img src="img/parrot.png" class="gun"> built.`,
        "bid_text": `If you win the bid, draw a card.`,
        "build": ['r']
    },

    {
        "title": "Rum Merchant",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/merchant2.png",
        "type": "merchant",
        "play_text": `<img src="img/coin.png" class="coin"> <img src="img/rum.png" class="rum">`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['r']
    },

    {
        "title": "Grand Escape",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "play_text": `<img src="img/parrot.png" class="hammer"> <img src="img/gun.png" class="coin"> <img src="img/rum.png" class="rum">`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['p', 'r']
    },

    {
        "title": "Amazon Warrior",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/warrior.jpeg",
        "type": "military",
        // "play_text": `Draw 1 card.`,
        "bid_text": `<img src="img/parrot.png" class="coin"> gain 1<img src="img/coin.png" class="coin"> `,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['g']
    }
]