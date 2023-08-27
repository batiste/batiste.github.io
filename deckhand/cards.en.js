
var cards = [
{
    'title': 'Fist Fight',
    'text': '+1 :Coin:<br><i>(Take a coin from the bank.)</i>',
    'flavor': 'Pirate friendships start with a fight.',
    'img': 'attacks/fist-fight.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Celebrate',
    'text': '+1 :Card: <i>(You may Draw a card.)</i><br>+1 :Reload: <i>(You may Reload a supply card.)</i><br>Then +1 :Coin: for each Celebrate in hand.',
    'flavor': 'Lonely grog or shared laughter?',
    'img': 'adventures/celebrate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Tavern',
    'text': `If you have an Adventure in hand: +1 :Card:.<br>
        If you have an Attack in hand: +1 :Coin:.<br>
        If you have a Structure in hand: +1 :Action:.`,
    'flavor': 'The tavern unites thieves, rogues and scoundrels.',
    'img': 'adventures/tavern-3.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Fortune Teller',
    'text': `Reveal the 2 top cards from any one deck.<br>
        +1 :Card: for each Adventure revealed.<br>
        +1 :Coin: for each Attack revealed.<br>
        +1 :Action: for each Structure revealed.`,
    //'flavor': 'The tavern unites thieves, rogues and scoundrels.',
    'img': 'adventures/fortune-teller.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Quick Shot',
    'text': '+1 :Coin:.<br>If you have an Attack in hand: +1 :Action:.',
    'flavor-no-quotes': '“Don’t let them regroup!” she commands, <br>with pistols ablaze.',
    'img': 'attacks/dual-pistol.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Blademaster',
    'text': '+1 :Coin: for each 1 cost card in hand.<br>+1 :Action: for each 3 cost card in hand.',
    'flavor': `Accomplished tacticians blend subtle <br>manoeuver with grand gestures.`,
    'img': 'attacks/dance-master-3.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Poisoned Grog',
    'text': '+1 :Coin:, +1 :Reload:.<br>When Discarded: +1 :Coin:.', // , add condition, if you have not treasure if too strong 
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
    'text': '+1 :Coin:, +1 :Reload:.<br>If you are the player that owns the<br> least amount of cards: +1 Buy, +1 :Coin:.',
    'flavor': 'Rumors have it that he is the richest man in town.',
    'img': 'adventures/beach-bum.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,

},

{
    'title': 'Karmic Elevation',
    'text': 'Pay 1 :Coin:: Reveal a card from your hand.<br>A chosen enemy pick a supply card that costs 1 more. Swap those 2 cards.',
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
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.<br>Put 1 card from target player’s stash<br>at the bottom of their deck.',
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
    'text': '+1 :Coin:, +1 :Reload:. On their next turn, target enemy gains +1 :Buy: and must give you 1 coin before their first Buy.',
    'flavor': 'A sumptuous gift secure favors and influence.',
    'img': 'structures/wedding.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'target': true,
},

{
    'title': 'Imperial Powder',
    'text': '+1 :Coin:. If you lose ownership of this card: Remove from the game a card from target enemy’s stash that costs 2 or less.',
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
    'text': '+1 :Buy:, +1 :Reload:.<br>Your next Buy this turn costs 1 less.',
    'flavor': 'At times, the tongue wields a sharper edge <br>than the sword.',
    'img': 'attacks/haggling.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Alley Thief',
    'text': '+1 :Coin:, +1 :Reload:.:or:Steal a coin from target player, +1 :Reload:.',
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
    'text': 'Useless Totem is always a Structure,<br>Attack, and Adventure.',
    'flavor': 'The futile trinket grins, seemingly mocking you.',
    'img': 'structures/totem.png',
    'type': 'structure',
    'victory': '2',
    'cost': '1',
    'amount': 1
},

{
    'title': 'Council Hall',
    'text': 'A chosen enemy takes a card from the supply and puts it into your stash.',
    'flavor': 'Gold secured you a seat, yet your influence <br>remains desperately elusive.',
    'img': 'structures/city-hall-2.png',
    'type': 'structure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Typhoon',
    'text': `+2 :Card:, +1 :Discard:, +1 :Coin:. Then all players simultaneously
     move a card from their stash or the top card of their deck (no peeking) to their left neighbor’s stash.`,
    //'flavor': 'A Swirling chaos! A navigational nightmare!',
    'reduced-font-size': '9.3px',
    'img': 'adventures/tornado.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Alchemy',
    'text': 'Discard up to 3 cards, get that many coins. Then +2 :Card:.',
    'flavor': 'Imbued with fire, twisting fate. What <br>could possibly go awry?',
    'img': 'adventures/alchemist-2.png',
    'type': 'adventure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Emperor’s Caprice',
    'text': '+2 :Reload: then a chosen enemy selects 3 supply cards. You may apply the effects of one of the selected card.',
    'flavor': 'In his royal hands, even your choices are illusions.',
    'img': 'attacks/emperor.png',
    'type': 'attack',
    'cost': 2,
    'victory': 2,
    'amount': 1,
},

{
    'title': 'Card Mastery',
    'text': '+1 :Action:, put a card from your <br>stash into your hand.<br>When Discarded: +1 :Card:.',
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
    'text': '+1 :Coin:.<br>If this card is in your stash, the first Structure you Buy each turn costs 1 less.',
    'flavor': 'Spices dance and blend, a taste of opulence.',
    'img': 'adventures/spice-trade.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Hideout',
    'text': '+2 :Card:, +1 :Coin:.<br>When Discarded: +1 :Card:',
    'flavor': 'A haven to open a rum bottle <br>and see it through.',
    'img': 'structures/hideout.png',
    'type': 'structure',
    'discard': true,
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Gold Mine',
    'text': `A chosen enemy picks a number. +3 :Card:. <br>If the total cost of the drawn cards is not that number: 
    +1 :Action: and reveal them.`,
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
    'text': '+2 :Coin:.:or:+1 :Coin:, +1 :Buy:.',
    'flavor': 'Secrets and stolen treasures traded here.',
    'img': 'structures/market-super-format.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Ancient Library',
    'text': '+2 :Coin:.<br>When Discarded: You may shuffle <br>your stash into your deck.',
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
    'text': '+2 :Coin:. You may give a coin from the <br>bank to every player. If you do, each <br>player must Discard a card after their <br>initial draw on their next turn.',
    'img': 'structures/rum3.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
},

{
    'title': 'Exploration',
    'text': 'If you have an Adventure in<br>hand: +1 :Action:.<br>Then +1 :Card:, +1 :Coin:.',
    'flavor': 'Set sail, but not without a compass in hand.',
    'img': 'adventures/exploration.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Treasure Map',
    'text': '+1 :Coin:. Look at the top 3 cards of your <br>deck. You may put any number of them<br> into your stash and the rest on top of your deck in any order. Then +1 :Card:.',
    //'flavor': 'Riches await the keen-eyed adventurer.',
    'img': 'adventures/treasure-map.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Going Ape',
    'text': '+1 :Action:, +1 :Reload:. If played from your hand, swap Going Ape or a card from your hand with a card of equal cost from the supply. The new card joins your hand.',
    'img': 'attacks/silverback.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Ghost Crew',
    'text': '+1 :Card:, +1 :Coin:. You may put this card on the top of its owner’s deck. If there is 3 or <br>more Attacks in the supply: +1 :Action:',
    'img': 'attacks/ghost-crew.png',
    'flavor': 'Trade your mortal life, enjoy eternal retribution.',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Haunted Cave',
    'text': '+2 :Card:. Then +1 :Coin: for each Attack in <br>hand, up to a maximum of 3 coins.',
    'flavor': 'This place resonates with skeletal clatters. Fear <br>not, for the pure-hearted and free of greed.',
    'img': 'attacks/infested-cave.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Governor’s Jail',
    'text': `+2 :Coin:. Flip 1 supply card face down.<br>
    This card does not exist. Restore it at <br>any time on your next turn.`,
    'flavor': 'Dear guest, you’re truly at your best restrained.',
    'img': 'structures/jail.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Lost Expedition',
    'text': 'Remove a card from target player’s stash and place 2 bank coins on it. When their stash is shuffled, take the coins and return the card to their new stash.',
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
    'text': `Reveal the top 2 cards of target enemy’s deck. Put 1 revealed card into their stash and gain 
        coins equal to its hooks :Hook:.`,
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
    'text': '+1 :Reload:, +2 :Buy:.:or:+1 :Coin:, +1 :Buy:.',
    'flavor': 'Only one way to spend: lavishly and flamboyantly!',
    'img': 'adventures/extravagance-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Shipyard',
    'text': '+1 :Coin:.<br>+1 :Action: for each Structure in your stash. <i>(Do not use more than 5 Actions per turn.)</i>',
    'img': 'structures/shipyard.png',
    'flavor': 'Every plank aspires to endless horizons.',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Walk the Plank',
    'text': ' +2 :Coin:. You may remove a card from your hand or stash from the game. Gain as many coins as the cost of the removed card.',
    'flavor': 'A dance on the plank or a delayed sentence?',
    'img': 'attacks/plank-2.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Monkey’s Bargain',
    'text': 'Remove a card from your hand or stash from the game. For each hooks :Hook: of the removed card: +1 :Coin: and +1 :Action:',
    'flavor': 'A monkey’s mischief is a pirate’s boon.',
    'img': 'attacks/exchange.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Wind in Sails',
    'text': '+1 :Card:, +1 :Reload:.<br>At the start of your turn, if this card is in your stash: Draw an extra card during<br>your initial draw.',
    'img': 'adventures/wind.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'start': true,
},

{
    'title': 'Adventurer’s Guild',
    'text': '+1 :Coin: for each Adventure in the supply,<br>up to a maximum of 3 coins.',
    'flavor': 'Where quests and bravery converge.',
    'img': 'structures/adventurer-center.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'End of the Rainbow',
    'text': '+1 :Card:.<br>At the start of your turn, if this card is in your stash, as well as an Attack and a Structure: +1 :Action:.',
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
    'text': '+2 :Coin:.<br>When Discarded: +1 :Buy:.',
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
    'text': '+1 :Card:, +2 :Action:.<br><i>(Do not use more than 5 Actions per turn.)</i>',
    'flavor': 'By the sea’s edge, the citadel beckons the <br>  intrepid in search of fortunes.',
    'img': 'structures/citadel-2.png',
    'type': 'structure',
    'cost': '3',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Architect’s Workshop',
    'text': '+1 :Coin:, +1 :Action:. If there is 2 or more Structures in the supply: +1 :Buy:.',
    'flavor': 'Meticulous plans and skilled craftsmanship <br>bring grand visions to life',
    'img': 'structures/architect-workshop.png',
    'type': 'structure',
    'cost': '3',
    'victory': '3',
    'amount': 1
},

{
    'title': 'Voodoo Curse',
    'text': 'Reveal the top 3 cards of target player’s deck. Put one in their stash, then <br>apply its effects.',
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
    'text': '+1 :Action:. Swap a card from your hand <br>with a card of equal cost from the <br>stash of a target enemy.',
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
    'text': '+1 :Coin:.<br>At the start of your turn, if this card is <br>in your stash: +1 :Coin:.',
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
    'text': '+2 :Reload:. If the supply has 4 or more cards <br>of the same type: +3 :Coin:.',
    'flavor': 'The allure of easy riches sealed his downfall.',
    'img': 'adventures/gambling.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Desperate Chase',
    'text': `You and an enemy reveal the top 3 cards from your decks. If you reveal more <br>Attacks:
    Put a supply card that costs <br>4 or less into your stash.`,
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
    'text': 'Target player removes from the game a card from their stash that costs 2 or less.<br>When Discarded: Apply this card’s <br>effect to all players.',
    'img': 'attacks/grenade.png',
    // 'reduced-font-size': '9.05px',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'discard': true,
    'target': true,
},

{
    'title': 'Unguarded Graveyard',
    'text': '+1 :Coin:.<br>At the start of your turn, if this card is in your stash: You may put a card from your stash at the bottom of your deck.',
    'img': 'structures/grave-robbers.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'start': true,

},

{
    'title': 'Bewitched Doll',
    'text': `+1 :Coin:. On target enemy’s next turn, control their first Action 
    making all decisions for this enemy, including Actions or Buys they may gain through this control.`,
    // 'flavor': "Destiny is a fickle concept.",
    'img': 'attacks/voodoo-doll.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Crooked Merchant',
    'text': 'Pay 1 :Coin:: Swap a card between your <br>stash and target enemy’s stash as long as the cost difference is 1 or less.',
    'flavor': 'The lure of wealth leads to deceptive deals.',
    'img': 'attacks/merchant.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Merfolk Mercenary',
    'text': 'Pay 1 :Coin:: Reveal the top 2 cards of the supply deck. Put one revealed card that <br>cost 3 or less into your stash.',
    'flavor': 'Is the bounty worth dealing with this abomination?', // Though she secures priceless treasures, i
    'img': 'adventures/merfolk-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Kraken’s Fury',
    'text': 'Apply the effects of a card from any stash.',
    'flavor': 'Beware of the devourer of ships and souls.',
    'img': 'attacks/kraken.png',
    'type': 'attack',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Skull island',
    'text': `All players reveal the top card of their <br>deck: You may swap a revealed card with 
            <br>a card from the supply as long as the <br>cost difference is 2 or less.`,
    'img': 'structures/skull.png',
    //'reduced-font-size': true,
    'type': 'structure',
    'victory': '4',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Treasure Hunt',
    'text': '+1 :Card:, +1 :Coin:,<br>+1 :Action:, +1 :Buy:.',
    'flavor': 'An isle shrouded in mystery holds the <br>key to immense wealth.',
    'img': 'adventures/hunt.png',
    'type': 'adventure',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'The Grand Council',
    'text': `+2 :Action:. Before the end of your turn,<br> flip 4 supply cards face down.
    These <br>cards do not exist. Restore them at any <br>time on your next turn.`,
    // 'reduced-font-size': true,
    // 'flavor': 'Arbitrary decisions serve as displays of power.',
    'img': 'structures/grand-council.png',
    'type': 'structure',
    'victory': '5',
    'cost': '5',
    'amount': 1,

}]