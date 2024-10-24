

var cards = [
    {
        "title": "Water Grant",
        "discard": ['water'],
        "cost": ['cement', 'dollar'],
        "img": "cards/water.png",
        "production": ['water'],
        "copies": 5,
    },
    {
        "title": "Cement Factory",
        "discard": ['cement'],
        "cost": ['energy', 'dollar'],
        "img": "cards/cement.png",
        "production": ['cement'],
        "right": ['co2'],
        "copies": 4,
    },
    {
        "title": "Subsidy",
        "discard": ['energy'],
        "cost": ['dollar', 'dollar'],
        "img": "cards/subsidy.png",
        "production": ['dollar'],
        "right": ["corruption"],
        "copies": 4,
    },
    {
        "title": "Coal",
        "discard": ['energy'],
        "cost": ['water', 'dollar'],
        "img": "cards/coal.png",
        "production": ['energy'],
        "right": ['co2'],
        "copies": 2,
    },
    {
        "title": "Hydro",
        "discard": ['water'],
        "cost": ['water', 'water', 'cement', 'cement', 'dollar'],
        "img": "cards/hydro.png",
        "production": ['energy', 'energy'],
        "right": ['vp-3'],
        "copies": 3,
    },
    {
        "title": "SMR",
        "discard": ['nuclear'],
        "cost": ['water', 'cement', 'dollar'],
        "img": "cards/smr.png",
        "production": ['energy', 'nuclear'],
        "copies": 2,
    },
    {
        "title": "Nuclear",
        "discard": ['nuclear'],
        "cost": ['water', 'cement', 'dollar', 'dollar', 'dollar'],
        "img": "cards/nuclear-2.png",
        "production": ['energy', 'nuclear'],
        "right": ['vp-3'],
        "copies": 3,
    },
    {
        "title": "Wind Onshore",
        "discard": ['energy'],
        "cost": ['cement', 'dollar', 'dollar'],
        "img": "cards/wind.png",
        "production": ['energy'],
        "right": ['excess-energy'],
        "copies": 3,
    },
    {
        "title": "Battery Array",
        "discard": ['energy'],
        "cost": ['cement', 'dollar'],
        "img": "cards/battery.jpg",
        "production": ['energy-storage'],
        "copies": 2,
    },
    {
        "title": "Secret Lab",
        "discard": ['research'],
        "cost": ['nuclear', 'dollar', 'energy'],
        "img": "cards/research.png",
        "production": ['research'],
        "right": ['1-card'],
        "copies": 3,
    },
    {
        "title": "Solar Power",
        "discard": ['research'],
        "cost": ['energy', 'dollar'],
        "img": "cards/solar.png",
        "production": ['energy'],
        "right": ['vp-1'],
        "copies": 3,
    },
    {
        "title": "Fast Trains",
        "discard": ['research'],
        "cost": ['energy', 'energy', 'energy', 'energy', 'energy', 'dollar'],
        "img": "cards/train.png",
        "right": ['vp-6'],
        "copies": 1,
    },
    {
        "title": "Nuclear Shipping",
        "discard": ['nuclear'],
        "cost": ['research', 'nuclear', 'nuclear'],
        "img": "cards/atomic-shipping.png",
        "production": ['dollar'],
        "right": ['vp-3'],
        "copies": 1,
    },
    {
        "title": "Water Park",
        "discard": ['water'],
        "cost": ['dollar', 'water', 'cement', 'energy'],
        "img": "cards/water-park.png",
        "production": ['dollar'],
        "right": ['vp-4', 'corruption'],
        "copies": 2,
    },
    {
        "title": "Flying Cabs",
        "discard": ['research'],
        "cost": ['dollar', 'dollar', 'research', 'energy', 'energy', 'energy'],
        "img": "cards/cabs.png",
        "right": ['vp-5', '1-card'],
        "copies": 1,
    },
    {
        "title": "Capitalism",
        "discard": ['dollar'],
        "cost": ['dollar', 'dollar', 'dollar'],
        "img": "cards/capitalism.png",
        "right": ['vp-1', 'cross', 'dollar'],
        "copies": 1,
    },
    {
        "title": "Contact",
        "discard": ['research'],
        "cost": ['research', 'research', 'nuclear'],
        "img": "cards/contact.png",
        "right": ['vp-2', 'cross', 'research'],
        "copies": 1,
    },
    {
        "title": "Singularity",
        "discard": ['nuclear'],
        "cost": ['nuclear', 'research', 'water', 'cement', 'energy', 'energy', 'dollar'],
        "img": "cards/singularity.png",
        "production": ['nuclear', 'research'],
        "right": ['vp-6'],
        "copies": 1,
    },
    {
        "title": "Space Franchise",
        "discard": ['dollar'],
        "cost": ['dollar', 'dollar', 'dollar', 'dollar', 'dollar'],
        "img": "cards/space-franchise.png",
        "production": ['dollar'],
        "right": ['vp-8', 'corruption'],
        "copies": 1,
    },
    {
        "title": "Robotization",
        "discard": ['research'],
        "cost": ['research', 'energy', 'energy', 'energy'],
        "img": "cards/robots.png",
        "production": ['research', 'or' ,'dollar'],
        "copies": 2,
    },
    {
        "title": "Survivalisme",
        "discard": ['water'],
        "cost": ['water', 'water', 'cement', 'energy', 'energy'],
        "img": "cards/survivalisme.png",
        "right": ['vp-4'],
        "copies": 2,
    },
    {
        "title": "Crypto-anarchy",
        "discard": ['dollar'],
        "cost": ['energy', 'energy', 'energy', 'energy'],
        "img": "cards/crypto.png",
        "right": ['vp-6', 'co2'],
        "copies": 2,
    },
]