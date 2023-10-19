
var cards = [

{
    'title': '1 Coin',
    'text': `A coin token <img class="rule-icon chest" src="icons/coins.svg" /> to be spent wisely.`,
    'flavor': 'Pirates are notorious spenders.',
    'img': 'coins.png',
    'type': 'coin',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 8,
    'coin': 1,
},

{
    'title': '3 Coins',
    'text': `3 coin tokens <img class="rule-icon chest" src="icons/coins.svg" /> to be spent wisely.`,
    'flavor': 'How did you come to possess such riches?',
    'img': 'coins.png',
    'type': 'coin',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 4,
    'coin': 3,
},

{
    'title': 'Card’s Anatomy',
    'text': `
    <div class="anatomy-list">
        1. Reminder symbols
        &nbsp;&nbsp;&nbsp; 2. Title<br>
        3. Text <i>(effects)</i>
        &nbsp;&nbsp; 4. Hooks <i>(victory points)</i><br>
        5. Type 
        &nbsp;&nbsp;&nbsp; 6. Cost <i>(to be paid in coins)</i>
    </div>`,
    // 'flavor': 'Pirates are notorious spenders.',
    'img': 'marketing/card-anatomy.png',
    'type': 'rule',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 1
},

{
    'title': 'Player Turn Overview',
    'text': `1. Resolve any start-of-turn effects that might trigger <img class="rule-icon" src="icons/bookmark-yellow.svg" />.<br>
2. Discard <img class="rule-icon" src="icons/card-discard-yellow.svg" /> your hand, if any, then draw 3 cards from your deck.<br>
3. You then have 2 Actions that you can use in the following ways:<br>
&nbsp;&nbsp;&nbsp; • Play a card from your hand: Set the card aside, resolve its effects and consequences <b>then</b> put the card into your stash.<br>
&nbsp;&nbsp;&nbsp; • Buy a card from the supply: Pay the cost 
indicated by the chest <img class="rule-icon" src="icons/chest-simplified.svg" /> at the bottom right
with coins <img class="rule-icon coin" src="icons/coins.svg" /> and put it into your stash.<br>
If your deck is ever empty, immediately shuffle your stash into a new deck and resume any ongoing actions or effects.
    `,
    // 'flavor': 'Pirates are notorious spenders.',
    'img': 'marketing/booklet.png',
    'type': 'rule',
    'class': 'quick-ref',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 1
},


{
    'title': 'Card Quick Reference',
    'text': `<b>+1 <img class="rule-icon coin" src="icons/coins.svg" />:</b> Take 1 coin from the bank.<br>
<b>+1 <img class="rule-icon draw" src="icons/card-draw-2.svg" />:</b> You may draw 1 card from your deck immediately.<br>
<b>+1 <img class="rule-icon reload" src="icons/cycle-2.svg" />:</b> You may put 1 supply card at the bottom of the reload deck immediately. 
        If you do, replace it with a <b>reload deck</b> card.<br>
<b>+1 Action:</b> Gain an extra Action this turn.<br>
<b>+1 Buy:</b> You may Buy 1 card without using an Action this turn.<br>
<b>Pay 1 <img class="rule-icon coin" src="icons/coins.svg" />:</b> Put 1 of your coins into the bank.<br>
<b>+1 Discard:</b> Discard 1 card from your hand into your stash.<br>
<img class="rule-icon" src="icons/card-discard-yellow.svg" /> <img class="rule-icon" src="icons/bookmark-yellow.svg" /> 
are reminders of triggered effects<br>
<img class="rule-icon target" src="icons/target.svg" /> indicates targeted effects that affect enemies.`,
    // 'flavor': 'Pirates are notorious spenders.',
    'img': 'marketing/booklet.png',
    'type': 'rule',
    'class': 'quick-ref',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 1
},


{
    'title': 'Fist Fight',
    'text': '+1 :Coin:<br><i>(Take 1 coin from the bank.)</i>',
    'flavor': 'Pirate friendships start with a fight.',
    'img': 'attacks/fist-fight.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Celebrate',
    'text': '+1 :Card: <i>(You may draw 1 card.)</i><br>+1 :Reload: <i>(You may reload 1 supply card.)</i><br>Then +1 :Coin: for each Celebrate in hand.',
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
        Then if you have an Attack in hand: +1 :Coin:.<br>
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
    'title': 'Mutiny',
    'text': '+1 :Coin:, +1 :Reload:.<br>Put a 1-cost supply card into your stash.',
    'img': 'attacks/mutiny.png',
    'type': 'attack',
    'flavor': `Rising as one, we demand our rightful share!`,
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Blademaster',
    'text': '+1 :Coin: for each 1-cost card in hand.<br>+1 :Action: for each 3-cost card in hand.',
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
    'text': '+1 :Coin:, +1 :Reload:.<br>If you are the player that owns the<br> fewest cards: +1 :Buy:, +1 :Coin:.',
    'flavor': 'Rumors have it that he is the richest man in town.',
    'img': 'adventures/beach-bum.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,

},

{
    'title': 'Karmic Elevation',
    'text': 'Pay 1 :Coin:: Reveal a card from your hand, then you may choose a supply card that costs 1 more and swap them.',
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
    'text': `+1 :Coin:, +1 :Reload:.<br>If you lose ownership of this card: 
    Select a card costing 2 or less from target enemy’s stash and remove it from the game.`,
    // 'flavor': 'WARNING: Do not roll, shock, or sway.',
    'img': 'structures/powder-keg.png',
    // 'reduced-font-size': '9.0px',
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
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.:or:Steal a coin from target enemy, +1 :Card:.',
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
    'text': 'Discard up to 3 cards. Get a coin for each discarded card. Then +2 :Card:.',
    'flavor': 'Imbued with fire, twisting fate. What <br>could possibly go awry?',
    'img': 'adventures/alchemist-2.png',
    'type': 'adventure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Emperor’s Caprice',
    'text': '+2 :Reload: then a chosen enemy selects 3<br>supply cards. You may apply the effects <br>of one of the selected card.',
    'flavor': 'In his royal hands, even your choices are illusions.',
    'img': 'attacks/emperor.png',
    'type': 'attack',
    'cost': 2,
    'victory': 2,
    'amount': 1,
},

{
    'title': 'Card Mastery',
    'text': '+1 :Action:, put a card from <br>your stash into your hand.<br>When Discarded: +1 :Card:.',
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
    'text': '+2 :Coin:. You may give a bank coin to every player. If you do, each player must Discard a card after their initial draw on their<br> next turn.',
    'img': 'structures/rum3.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
},

{
    'title': 'Exploration',
    'text': 'If you have an Adventure in hand:<br>+1 :Action:.<br>Then +1 :Card:, +1 :Coin:.',
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
    'flavor': 'Clattering bones pierce the haunting silence.',
    'img': 'attacks/infested-cave.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Governor’s Jail',
    'text': `+2 :Coin:. Flip 1 supply card face down.<br>
    This card is out of the game. Restore it at <br>any time on your next turn.`,
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
    'text': ' +2 :Coin:. You may remove a card from your hand or stash from the game. Gain coins equal to the cost of the removed card.',
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
    'text': 'Reveal the top 3 cards of target player’s deck. Put one into their stash, then <br>apply its effects as if you had played it.',
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
    'text': '+2 :Reload: then if the supply has 4 or more <br>cards of the same type: +3 :Coin:.',
    'flavor': 'The allure of easy riches sealed his downfall.',
    'img': 'adventures/gambling.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Desperate Chase',
    'text': `You and an enemy must have at least 2 cards in deck. Reveal the top 3 cards from your decks. 
            If you reveal more Attacks than them, put a supply card that costs 4 or less into your stash.`,
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
    'text': `Target player selects and removes from the game a card from their stash costing 2 or less.<br> 
        When Discarded: Apply this card’s effect to all players with themselves as the target.`,
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
    making all decisions for this enemy. You may control Actions or Buys they may gain through this control.`,
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
    'text': `All players reveal the top card of their <br>deck: You may swap 1 revealed card with 
            <br>a card from the supply as long as the <br>cost difference is 2 or less.`,
    'img': 'structures/skull.png',
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
    'text': `+2 :Action:. Before the end of your turn, flip 4 supply cards face down.
    These cards are out of the game. Restore them at any time on your next turn.`,
    'img': 'structures/grand-council.png',
    'type': 'structure',
    'victory': '5',
    'cost': '5',
    'amount': 1,

},

{
    'title': 'Angry Mob',
    'text': `+1 :Coin: for each  1-cost card in the <br>supply, up to a maximum of 3 coins.<br>
    If this card if in your stash, and you <br>buy a 1-cost card: +1 :Action:.
    `,
    //'flavor': 'A united roar shakes the foundations.',
    'img': 'attacks/angry-mob.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Tax Collector',
    'text': `+1 :Coin:, +1 :Card: :or: +1 :Coin: for each Structure in an enemy’s stash, up to a maximum of 3 coins.`,
    'img': 'adventures/tax-collector.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},


{
    'title': 'Hidden Cove',
    'text': `Flip 1 supply cards face down. This card is out of the game. Restore it at any time on your next turn.
    Then +1 :Coin: for each different card type in the supply.`,
    'img': 'structures/hidden-cove.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
}


]