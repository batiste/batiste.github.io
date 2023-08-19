
var cards = [
{
    'title': 'Fist Fight',
    'text': '+1 Treasure.',
    'flavor': 'Pirate friendships start with a fight.',
    'img': 'attacks/fist-fight.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Celebrate',
    'text': '+1 Treasure for each Celebrate in hand.<br>+1 Reload, you may draw a card.',
    'flavor': 'Lonely grog or shared laughter?',
    'img': 'adventures/celebrate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Tavern',
    'text': '+1 Card if you have an Adventure in hand.<br>+1 Treasure if you have an Attack in hand.<br>+1 Action if you have a Structure in hand.',
    'flavor': 'The tavern unites thieves, rogues and scoundrels.',
    'img': 'adventures/tavern-3.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Fortune Teller',
    'text': 'Reveal 2 cards from any one deck.<br>+1 Card for each Adventure revealed.<br>+1 Treasure for each Attack revealed.<br>+1 Action for each Structure revealed.',
    //'flavor': 'The tavern unites thieves, rogues and scoundrels.',
    'img': 'adventures/fortune-teller.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Quick Shot',
    'text': '+1 Treasure.<br>+1 Action if you have an Attack in hand.',
    'flavor-no-quotes': '“Don’t let them regroup!” she commands, with pistols ablaze.',
    'img': 'attacks/dual-pistol.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Blademaster',
    'text': '+1 Treasure for each 1 cost card in hand.<br>+1 Action for each 3 cost card in hand.',
    'flavor': `Accomplished tacticians blend subtle manoeuver with grand gestures.`,
    'img': 'attacks/dance-master-3.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Poisoned Grog',
    'text': '+1 Treasure, +1 Reload.<br>When Discarded: +1 Treasure.', // , add condition, if you have not treasure if too strong 
    'flavor': 'Sometimes, poison is slow-acting.',
    'img': 'attacks/pint.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'discard': true,

},

{
    'title': 'Beach Bum',
    'text': '+1 Treasure.<br>+1 Treasure if you are one of the players that owns the least amount of cards.',
    'flavor': 'Rumors have it that he is the richest man in town.',
    'img': 'adventures/beach-bum.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,

},

// {
//     'title': 'Reverie',
//     'text': '+1 Treasure.<br>If you are targeted by any effects from one card: Discard this card to cancel them.',
//     'flavor-no-quotes': '“Harmony! Serenity!” he yawned, after his nap.',
//     // 'reduced-font-size': '9.1px',
//     'img': 'adventures/namaste.png',
//     'type': 'adventure',
//     'victory': '1',
//     'cost': '1',
//     'amount': 1,
// },

{
    'title': 'Karmic Lethargy',
    'text': 'Pay 1, reveal a card from your hand. Choose an enemy: they swap the revealed card with a supply card that costs 1 more.',
    'flavor-no-quotes': '“Harmony! Serenity!” he yawned, after his nap.',
    // 'reduced-font-size': '9.1px',
    'img': 'adventures/namaste.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Kung Fu Lessons',
    'text': '+1 Treasure, +1 Card, +1 Reload.<br>Put 1 card from target player’s stash at the bottom of their deck.',
    'flavor': 'The tide, harness its power to your advantage!',
    // 'reduced-font-size': '9.1px',
    'img': 'adventures/kung-fu.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    // 'discard': 1,
    'target': true,
},

{
    'title': 'Governor’s Wedding',
    'text': '+1 Treasure. On their next turn, target enemy gains +1 Buy and must give you a Treasure before their first buy.',
    'flavor': 'A sumptuous gift secure favors and influence.',
    'img': 'structures/wedding.png',
    'type': 'structure',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'target': true,
},

{
    'title': 'Imperial Powder',
    'text': '+1 Treasure. If you lose ownership of this card: remove from the game a card from target enemy’s stash that cost 2 or less.',
    'flavor': 'WARNING: does not roll, shock, or sway.',
    'img': 'structures/powder-keg.png',
    'type': 'structure',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'target': true,
},

{
    'title': 'Haggling',
    'text': '+1 Reload, +1 Buy.<br>Your next buy this turn cost 1 less.',
    'flavor': 'At times, the tongue wields a sharper edge than the sword.',
    'img': 'attacks/haggling.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Alley Thief',
    'text': '+1 Treasure, +1 Reload.:or:Steal a Treasure from target player.',
    'flavor': 'A fleeting shadow, your treasures vanish!',
    'img': 'attacks/thief.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'target': true,
},


{
    'title': 'Useless Totem',
    'text': 'Useless Totem is a Structure, an Attack and an Adventure all at once.',
    'flavor': 'The futile trinket grins, seemingly mocking you.',
    'img': 'structures/totem.png',
    'type': 'structure',
    'victory': '2',
    'cost': '1',
    'amount': 1
},

{
    'title': 'Council Hall',
    'text': 'A chosen enemy takes a card from the supply and puts it in your stash.',
    'flavor': 'Gold for a seat is wealth wasted on whispers.',
    'img': 'structures/council-hall.png',
    'type': 'structure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Typhoon',
    'text': '+2 Cards, +1 Discard, +1 Treasure. All players move a card from their stash or, if unable, top deck to their left neighbor’s stash.',
    'flavor': 'A Swirling chaos! A navigational nightmare!',
    'reduced-font-size': '9.3px',
    'img': 'adventures/tornado.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Alchemy',
    'text': 'Discard any number of cards, get that many Treasures. +2 Card.',
    'flavor': 'Imbued with fire, twisting fate. What could possibly go awry?',
    'img': 'adventures/alchemist-2.png',
    'type': 'adventure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Emperor’s Caprice',
    'text': '+2 Reload. A chosen enemy selects 3 supply cards. You may apply the effects of one as if you just played it.',
    'flavor': 'In his royal hands, even your choices are illusions.',
    'img': 'attacks/emperor.png',
    'type': 'attack',
    'cost': 2,
    'victory': 2,
    'amount': 1,
},

{
    'title': 'Card Mastery',
    'text': '+1 Action.<br>Put a card from your stash in your hand.<br>When Discarded: +1 Card.',
    'flavor': 'A flick of the wrist commands wonder and fear.',
    'img': 'adventures/magician.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'discard': true,
},

{
    'title': 'Spice Trade',
    'text': '+1 Treasure.<br>If this card is in your stash, the first Structure you buy each turn cost 1 less.',
    'flavor': 'Spices dance and blend, a taste of opulence.',
    'img': 'adventures/spice-trade.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Hideout',
    'text': '+2 Cards, +1 Treasure.<br>When Discarded: you may put it back in your hand. Do this only once.',
    'flavor': 'A haven to open a rum bottle and see it through.',
    'img': 'structures/hideout.png',
    'type': 'structure',
    'discard': true,
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Gold Mine',
    'text': `A chosen enemy pick a number. +3 Cards. If the total cost of the drawn cards is not that number: 
    +1 Action and reveal the cards.`,
    'flavor': 'Beneath the soil, lies dreams and despair.',
    'img': 'structures/gold-mine.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    //'discard': true,
    'amount': 1
},


{
    'title': 'Harbor Market',
    'text': '+2 Treasures.:or:+1 Treasure, +1 Buy.',
    'flavor': 'Secrets and stolen treasures traded here.',
    'img': 'structures/market-super-format.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Ancient Library',
    'text': '+2 Treasures.<br>When discarded: you may shuffle your stash into your deck.',
    'flavor': 'Each page unravels an imperial secret.',
    'img': 'structures/archives.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'discard': true,
},

{
    'title': 'Rum Factory',
    'text': '+2 Treasures. You may give a Treasure from the bank to every player. If you do, every player must Discard a card after their initial draw on their next turn.',
    'img': 'structures/rum-factory.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
},

{
    'title': 'Exploration',
    'text': '+1 Action if you have an Adventure in hand.<br>+1 Card, +1 Treasure.',
    'flavor': 'Set sail, but not without a compass in hand.',
    'img': 'adventures/exploration.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Treasure Map',
    'text': '+1 Treasure. Look at the top 3 cards of your deck. You may put any number of them into your stash and the rest on top of your deck in any order. +1 Card.',
    //'flavor': 'Riches await the keen-eyed adventurer..',
    'img': 'adventures/treasure-map.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Going Ape',
    'text': '+1 Action, +1 Reload. If played from your hand, swap Going Ape or a card from your hand with a card of equal cost from the supply. The new card joins your hand.',
    'img': 'attacks/silverback.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Ghost Crew',
    'text': '+1 Card, +1 Treasure. You may put this card on the top of its owner’s deck. +1 Action if there is 3 or more Attacks in the supply.',
    'img': 'attacks/ghost-crew.png',
    'flavor': 'Trade your mortal life, enjoy eternal retribution.',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Haunted Cave',
    'text': '+2 Card.<br>+1 Treasure for each Attack in your hand.',
    'flavor': 'This place resonates with skeletal clatters. Fear not, for the pure-hearted and free of greed.',
    'img': 'attacks/infested-cave.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Unyielding Waves',
    'text': '+1 Action. +1 Reload. Move up to 3 cards from the stash of any number of target players to the bottom of their owner’s deck.',
    'flavor': 'The forces of the roaring ocean cannot be fought.',
    'img': 'attacks/relentless-waves.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'target': true,
},

{
    'title': 'Lost Expedition',
    'text': 'Remove a card from target player’s stash and place 2 bank Treasures on it. When their stash is shuffled, take the Treasures and return the card to their new stash.',
    'img': 'adventures/lost-expedition-2.png',
    //'reduced-font-size': '9.0px',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'target': true,
},

{
    'title': 'Stealthy Observer',
    'text': `Reveal the top 2 cards of target enemy’s deck. Put one in their stash and gain 
        Treasures equal to the card's victory points.`,
    'flavor': 'A vigilant eye  brings forth hidden truths.',
    'img': 'adventures/roof-thief.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'target': true,
},

{
    'title': 'Extravagance',
    'text': '+2 Buy, +1 Reload.:or:+1 Buy, +1 Treasure.',
    'flavor': 'Only one way to spend: lavishly and flamboyantly!',
    'img': 'adventures/extravagance-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Shipyard',
    'text': '+1 Treasure.<br>You can’t use more than 5 actions this turn.<br>+1 Action for each Structure in your stash.',
    'img': 'structures/shipyard.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Walk the Plank',
    'text': ' +2 Treasures. You may remove a card from your hand or stash from the game: Gain Treasures equal to the card’s cost.',
    'flavor': 'A dance on the plank or a delayed sentence?',
    'img': 'attacks/plank-2.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Monkey’s Bargain',
    'text': 'Remove a card from your hand or stash from the game: Gain Treasures and Actions equal to the card’s victory points.',
    'flavor': 'A monkey’s mischief is a pirate’s boon.',
    'img': 'attacks/exchange.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Wind in Sails',
    'text': '+1 Card.<br>At the start of your turn, if this card is in your stash: Draw an extra card during your initial draw.',
    'img': 'adventures/wind.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'start': true,
},

{
    'title': 'Adventurer’s Guild',
    'text': '+1 Treasure for each Adventure in the supply, up to a maximum of 4 Treasures.',
    'flavor': 'Where quests and bravery converge.',
    'img': 'structures/adventurer-center.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'End of the Rainbow',
    'text': '+1 Card.<br>At the start of your turn, if this card is in your stash, as well as an Attack and a Structure: +1 Action.',
    // 'flavor': 'A taunting mirage of unachievable dreams',
    'img': 'adventures/rainbow.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'start': true,

},

{
    'title': 'Bank Fortress',
    'text': '+2 Treasures.<br>When Discarded: +1 Action.',
    'flavor': 'Fortified against raiders, the bank safeguards against the mightiest of temptations.',
    'img': 'structures/bank-2.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'discard': true,

},

{
    'title': 'Seaside Citadel',
    'text': 'You can’t use more than 5 actions this turn.<br>+1 Card, +2 Actions.',
    'flavor': 'By the sea’s edge, the citadel beckons the intrepid in search of fortunes.',
    'img': 'structures/citadel-2.png',
    'type': 'structure',
    'cost': '3',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Architect’s Workshop',
    'text': '+1 Action, +1 Treasure. If there is 2 or more Structures in the supply: +1 Buy.',
    'flavor': 'Meticulous plans and skilled craftsmanship bring grand visions to life',
    'img': 'structures/architect-workshop.png',
    'type': 'structure',
    'cost': '3',
    'victory': '3',
    'amount': 1
},

{
    'title': 'Voodoo Curse',
    'text': 'Reveal the top 3 cards of target player’s deck. Put one in their stash, then apply its effects.',
    'flavor': 'With every step, the curse tightens its grip.',
    'img': 'attacks/spell.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Abyss Marauder',
    'text': '+1 Action. Swap a card from your hand with a card of equal cost from the stash pile of a target enemy.',
    'flavor': 'Born of the deep, it feasts on uncertainty.',
    'img': 'attacks/sea-bug.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Smuggler’s Cache',
    'text': '+1 Treasure.<br>At the start of your turn, if this card is in your stash: +1 Treasure.',
    'flavor': 'Few can chart the course to the forbidden spoils.',
    'img': 'structures/smugglers-cache.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'start': true,
},

{
    'title': 'Gambling Addiction',
    'text': '+2 Reload. If the supply has 4 or more cards of the same type: +3 Treasures.',
    'flavor': 'The allure of easy riches sealed his downfall.',
    'img': 'adventures/gambling.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Desperate Chase',
    'text': 'You and an enemy reveal the top 3 cards from your decks. If you revealed more Attacks: \
    put a supply card that cost 4 or less in your stash.',
    //'reduced-font-size': '9.3px',
    //'flavor': 'Sails ablaze, cannons roar, a final duel in pursuit.',
    'img': 'attacks/chase-2.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Improvised Grenade',
    'text': 'Target player chose a card from their stash and remove it from the game.<br>When Discarded: apply this card effect to all players.',
    'img': 'attacks/grenade.png',
    //  'reduced-font-size': '9.2px',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'discard': true,
    'target': true,
},

{
    'title': 'Unguarded Graveyard',
    'text': '+1 Treasure.<br>At the start of your turn, if this card is in your stash: you may put a card from your stash at the bottom of your deck.',
    'img': 'structures/grave-robbers.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'start': true,

},

{
    'title': 'Bewitched Doll',
    'text': 'On target enemy’s next turn you play their first action. You make all decisions that arise, including any extra actions.', // <br>When Discarded: +1 Action.
    'flavor': "Destiny is a fickle concept.",
    'img': 'attacks/voodoo-doll.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Crooked Merchant',
    'text': 'Swap a card between your stash and target enemy’s stash as long as the cost difference is 1 or less. Give a bank Treasure to the enemy.',
    // 'flavor': 'The lure of wealth lead to deceptive deals.',
    'img': 'attacks/merchant.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Merfolk Mercenary',
    'text': 'Pay 1, to reveal the top 2 cards of the supply deck. Put one in your stash.',
    'flavor': 'Though she secures priceless treasures, is this abomination worth the bargain?',
    'img': 'adventures/merfolk-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Kraken’s Fury',
    'text': 'All players Discard their hand. Apply the effects of a card from any stash.',
    'flavor': 'Beware of the devourer of ships and souls.',
    'img': 'attacks/kraken.png',
    'type': 'attack',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Skull island',
    'text': 'All players reveal the top card of their deck: you may swap one with another from the supply as long as the cost difference is 2 or less.',
    'img': 'structures/skull.png',
    //'reduced-font-size': true,
    'type': 'structure',
    'victory': '4',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Treasure Hunt',
    'text': '+1 Action, +1 Buy,<br>+1 Card, +1 Treasure.',
    'flavor': 'An isle shrouded in mystery holds the key to immense wealth.',
    'img': 'adventures/hunt.png',
    'type': 'adventure',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'The Grand Council',
    'text': '+2 Actions. Before the end of your turn, flip 4 supply cards face down.\
    These cards do not exist. Restore them at any time on your next turn.',
    // 'reduced-font-size': true,
    // 'flavor': 'Arbitrary decisions serve as displays of power.',
    'img': 'structures/grand-council.png',
    'type': 'structure',
    'victory': '5',
    'cost': '5',
    'amount': 1,

}]