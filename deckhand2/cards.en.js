

var cards = [

    {
        "title": "Return to Port",
        "coin": 2,
        "cost": ['r'],
        "img": "cards/loaded.png",
        "type": "merchant",
        // "bid_text": `:rum::trans::coin:`,
        // "build_text": `:rum::trans::coin::coin:`,
        "play_text": 'Return 5.',
        "build_text": 'Return 3.',
        "build": ['r'],
    },

    {
        "title": "Engineer",
        "coin": 1,
        "cost": ['r'],
        "img": "cards/scruf.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "build": ['r'],
        "play_text": `Settle 1.`,
        // "bid_text": `:parrot::rum:`,
        "build_text": `Settle 1.`
    },

    // {
    //     "title": "Explore",
    //     "coin": 3,
    //     "cost": ['p', 'r', 'c'],
    //     "img": "cards/wind.png",
    //     "type": "merchant",
    //     // "play_text": `:coin::coin:`,
    //     "build": ['r'],
    //     "play_text": 'Return 2 cards into your hand. Produce 1.',
    //     // "build_text": `:rum::trans::draw-1:`
    // },

    {
        "title": "Brawl",
        "coin": 1,
        "cost": ['g'],
        "img": "cards/brawl.png",
        "type": "military",
        "play_text": `Plunder 1.`,
        "build_text": `Plunder 1.`,
        "build": ['g']
    },

    {
        "title": "Plunder",
        "coin": 2,
        "cost": ['c'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `Take 1.`,
        "build_text": `Plunder 1.`,
        "build": ['g']
    },

    {
        "title": "Bustling Market",
        "coin": 2,
        "cost": ['c'],
        "img": "cards/busy.png",
        "type": "merchant",
        // "play_text": `:coin::coin:`,
        "build": ['r'],
        "play_text": 'Return 1 and Produce 1.',
        // "play_text": `:parrot::rum:`,
        // "bid_text": `:rum::coin:`,
        "build_text": `Return 1 and Produce 1.`
    },

    {
        "title": "Spice Trade",
        "coin": 2,
        "cost": ['p', 'r'],
        "img": "cards/animal_market.png",
        "type": "merchant",
        "play_text": `Produce 2.`,
        "build_text": `Produce 2.`,
        "build": ['r']
    },


    {
        "title": "Wild Parrot",
        "coin": 2,
        "cost": ['p', 'c'],
        "img": "cards/parrot.png",
        "type": "wild",
        "build": ['p'],
        "play_text": `Return 1, Produce 2`,
        "build_text": `:parrot::trans: Produce 3.`,
    },

    {
        "title": "Blue Parrot",
        "coin": 2,
        "cost": ['p'],
        "img": "cards/parrot-2.png",
        "type": "wild",
        // "play_text": `:coin::coin:`,
        "build": ['p'],
        "play_text": 'Produce 1, Play again.',
        "build_text": `1 VP per :parrot:`
    },

    {
        "title": "Skeleton Crew",
        "coin": 2,
        "cost": ['g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "play_text": `1 Plunder. If you have no cards in hand: Return 1.`,
        // "build_text": ``,
        "build": ['g'],
    },

    {
        "title": "Animal Sanctuary",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/sanctuary.png",
        "type": "wild",
        "play_text": `Settle 1. Return 1 :parrot:.`,
        "build": ['p', 'p']
    },

    {
        "title": "Grand Escape",
        "coin": 3,
        "cost": ['p', 'c'],
        "img": "cards/freed_monkeys.jpeg",
        "type": "wild",
        "play_text": `:gun::rum:`,
        // "bid_text": `If you win a bid with this card, draw a card.`,
        "build": ['p', 'r', 'g']
    },

    {
        "title": "Armed Orangutan",
        "coin": 2,
        "cost": ['p', 'g'],
        "img": "cards/armed-orangutan.jpeg",
        "type": "wild",
        "play_text": `Produce 3.`,
        "build_text": `:gun::trans: Produce 3.`,
        "build": ['p'],
    },

    {
        "title": "Deep Sea Horror",
        "coin": 2,
        "cost": ['g'],
        "img": "cards/deep-sea-horror.png",
        "type": "wild",
        // "bid_text": `:coin:`,
        // "build_text": `:hammer::parrot::trans::coin:`,
        "build": ['p'],
    },

    {
        "title": "Giant Crab",
        "coin": 3,
        "cost": ['g', 'p'],
        "img": "cards/crab.png",
        "type": "wild",
        "play_text": `:parrot::trans::coin::coin::coin:`,
        "build": ['p', 'c'],
    },

    {
        "title": "Sidekick",
        "coin": 2,
        "cost": ['g', 'p'],
        "img": "cards/sidekick.png",
        "type": "wild",
        // "bid_text": `:rum::trans::coin:`,
        "play_text": `:coin::gun:`,
        "build": ['p'],
    },

    {
        "title": "Drunk Marmosets",
        "coin": 3,
        "cost": ['r', 'p', 'p'],
        "img": "cards/marmosets.png",
        "type": "wild",
        // "bid_text": `if you lose the bid: :draw-1:`,
        "build_text": `:parrot::rum::trans::draw-1:`,
        "build": ['p'],
    },

    {
        "title": "Spice Merchant",
        "coin": 2,
        "cost": ['r', 'c'],
        "img": "cards/merchant.jpeg",
        "type": "merchant",
        // "bid_text": `If you win the bid: :draw-1:`,
        "build": ['r'],
        "build_text": `:rum::coin::trans::draw-1:`,
    },

    {
        "title": "Rum Merchant",
        "coin": 3,
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
        "coin": 2,
        "cost": ['c', 'p'],
        "img": "cards/rich.png",
        "type": "merchant",
        "play_text": `:coin::coin:`,
        "build": ['c']
    },

    {
        "title": "Water Bank",
        "coin": 3,
        "cost": ['c', 'c', 'c', 'r'],
        "img": "cards/water-bank.png",
        "type": "merchant",
        // "bid_text": `:parrot::rum::gun:`,
        "build": ['c', 'c']
    },

    {
        "title": "Sneak Attack",
        "coin": 3,
        "cost": ['r', 'g', 'g'],
        "img": "cards/sneak_attack.png",
        "type": "military",
        "play_text": `:gun::coin::coin:`,
        "build_text": `:gun::trans::draw-1:`,
        "build": ['g'],
    },

    {
        "title": "Skeleton Crew",
        "coin": 3,
        "cost": ['g'],
        "img": "cards/skeleton-crew.png",
        "type": "military",
        "play_text": `if you have no cards <br>in hand: :coin::draw-2:`,
        // "build_text": ``,
        "build": ['g'],
    },

    {
        "title": "Cannoneer's Guild",
        "coin": 4,
        "cost": ['g', 'r', 'c'],
        "img": "cards/military.png",
        "type": "military",
        "play_text": `:gun: :gun:`,
        // "build_text": `:hammer: :gun::trans::coin:`,
        "build": ['g']
    },

    {
        "title": "Walk the Plank",
        "coin": 2,
        "cost": ['c', 'c'],
        "img": "cards/walk.png",
        "type": "military",
        "play_text": `:gun::draw-1:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Plunder",
        "coin": 3,
        "cost": ['c', 'g'],
        "img": "cards/plunder.png",
        "type": "military",
        "play_text": `:draw-2:`,
        "build_text": `:gun::trans::gun::coin:`,
        "build": ['g']
    },

    {
        "title": "Amazon Warrior",
        "coin": 3,
        "cost": ['g', 'p'],
        "img": "cards/warrior.jpeg",
        "type": "military",
        // "bid_text": `:parrot::trans::coin: `,
        "build": ['g']
    },

    {
        "title": "Locksmith",
        "coin": 2,
        "cost": ['g', 'r'],
        "img": "cards/locksmith.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "play_text": `:coin::coin:`,
        // "build_text": `:hammer::coin::trans::coin:`,
        "build": ['g'],
    },

    {
        "title": "Haunted Cave",
        "coin": 3,
        "cost": ['g', 'g', 'c'],
        "img": "cards/haunted.png",
        "type": "military",
        // "bid_text": `:coin: in settled cards count.`,
        "play_text": `:coin::coin::gun:`,
        // "build_text": `:hammer::coin::trans::coin:`,
        "build": ['g', 'g'],
    },
]