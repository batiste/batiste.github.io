
var cards = [

// {
//     'title': '1 Coin',
//     'text': `A coin token <img class="rule-icon chest" src="icons/coins.svg" /> to be spent wisely.`,
//     'flavor': 'Pirates are notorious spenders.',
//     'img': 'coins.png',
//     'type': 'coin',
//     'amount': 8,
//     'coin': 1,
//     // 'flip': 3,
// },

// {
//     'title': '3 Coins',
//     'text': `3 coin tokens <img class="rule-icon chest" src="icons/coins.svg" /> to be spent wisely.`,
//     'flavor': 'How did you come to possess such riches?',
//     'img': 'coins.png',
//     'type': 'coin',
//     'amount': 4,
//     'coin': 3,
//     // 'flip': 1,
// },

{
    'title': 'Card Anatomy',
    'text': `
    <div class="anatomy-list">
        1. Reminder symbols
        &nbsp;&nbsp;&nbsp; 2. Title<br>
        3. Text <i>(effects)</i>
        &nbsp;&nbsp; 4. Hooks <i>(victory points)</i><br>
        5. Type 
        &nbsp;&nbsp;&nbsp; 6. Cost <i>(paid in coins)</i>
    </div>`,
    'img': 'marketing/card-anatomy.png',
    'type': 'rule',
    'class': 'card-anat',
    'amount': 0,
    // 'flip': 1,
},

{
    'title': 'Your Turn',
    'text': `1. Resolve any start-of-turn effects that might trigger <img class="rule-icon" src="icons/bookmark-yellow.svg" />.<br>
2. Discard <img class="rule-icon" src="icons/card-discard-yellow.svg" /> your hand, if any, then draw 3 cards from your deck.<br>
3. You then have 2 Actions that you can use in the following ways:<br>
&nbsp;&nbsp;&nbsp; • Play a card from your hand: Set the card aside, resolve its effects and consequences <b>then</b> put the card into your stash.<br>
&nbsp;&nbsp;&nbsp; • Buy a card from the supply: Pay the cost 
indicated by the chest <img class="rule-icon" src="icons/chest-simplified.svg" /> at the bottom right
with coins :Coing: and put it into your stash.
    `,
    'img': 'marketing/booklet.png',
    'type': 'indicator',
    'class': 'quick-ref',
    'amount': 0,
    // 'flip': 1,
},


{
    'title': 'Card Quick Reference',
    'text': `<b>+1 :Coin::</b> Increase your coins by 1.<br>
<b>+1 <img class="rule-icon draw" src="icons/card-draw-2.svg" />:</b> You may draw 1 card from your deck immediately.<br>
<b>+1 <img class="rule-icon reload" src="icons/cycle-2.svg" />:</b> You may put 1 supply card at the bottom of the reload deck immediately. 
        If you do, replace it with a <b>reload deck</b> card.<br>
<b>+1 Action:</b> Gain an extra Action this turn.<br>
<b>+1 Buy:</b> You may Buy 1 card without using an Action this turn.<br>
<b>Pay 1 :Coin::</b> Decrease your coins by 1.<br>
<b>+1 Discard:</b> You must discard 1 card from your hand into your stash.<br>
<img class="rule-icon" src="icons/card-discard-yellow.svg" /> <img class="rule-icon" src="icons/bookmark-yellow.svg" /> 
are reminders of triggered effects.<br>
<img class="rule-icon target" src="icons/target.svg" /> targeted effect that affect enemies.<br>
<img class="rule-icon target" src="icons/fist.svg" /> permanent effect while in your stash.
`,
    'img': 'marketing/booklet.png',
    'type': 'indicator',
    'class': 'quick-ref quick-ref-2',
    'amount': 0,
},

// {
//     'title': '',
//     'text': `<ul class="treasure-coins">
    
//     <li>0</li>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
//     <li>7</li>
//     <li>8</li>
//     <li>9</li>

//     </ul>
    
//     `,
//     'img': 'coins.png',
//     'type': 'treasure',
//     'class': 'quick-ref',
//     'amount': 1,
// },


{
    'title': 'Fist Fight',
    'text': '+1 :Coin:<br><i>(Increase your coins by 1.)</i>',
    'flavor': 'Pirate friendships start with a fight.',
    'img': 'attacks/fist-fight.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 0
},
{
    'title': 'Celebrate',
    'text': `+1 :Card: <i>(You may draw 1 card.)</i><br>
    +1 :Reload: <i>(You may reload 1 supply card.)</i><br>
    +1 :Coin: for each Celebrate in hand.`,
    'flavor': 'Lonely grog or shared laughter?',
    'img': 'adventures/celebrate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 0
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
    'text': 'Pay 1 :Coin:: Reveal a card from your <br>hand, then choose a supply card that <br>costs 1 more and swap them.',
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
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.<br>Put 1 card from a target player’s stash<br>at the bottom of their deck.',
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
    'text': '+1 :Coin:, +1 :Reload:. On their next turn, a target enemy gains +1 :Buy: and must give you 1 coin before their first Buy.',
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
    Select a card costing 2 or less from a target enemy’s stash and remove it from the game.`,
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
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.:or:Steal a coin from a target enemy, +1 :Card:.',
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
    'text': 'Useless Totem is always a Structure, Attack, and Adventure regardless of its location.',
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
     move a card from their stash, or the top card of their deck (no peeking),
     to the stash of the player on their left.`,
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
    'text': 'Discard up to 3 cards. +1 :Coin: for each discarded card. Then +2 :Card:.',
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
    'fist': true,
},

{
    'title': 'Hideout',
    'text': '+2 :Card:, +1 :Coin:.<br>When Discarded: +1 :Card:.',
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
    'text': `A chosen enemy picks a number. +3 :Card:.<br> If the total cost of the drawn cards is not that number: 
    +1 :Action: and reveal the cards.`,
    'flavor': 'Beneath the soil, lies dreams and despair.',
    'img': 'structures/gold-mine.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'reduced-font-size': '9.2px',
    //'discard': true,
    'amount': 1
},


{
    'title': 'Harbor Market',
    'text': '+2 :Coin:.:or:+1 :Coin:, +1 :Buy:.',
    'flavor': 'Secrets and stolen treasures are traded here.',
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
    'text': `+2 :Coin:. You may increase every player’s coins by 1. 
    If you do, on their next turn, each player must Discard a card after <br>their initial draw.`,
    'img': 'structures/rum3.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
},

{
    'title': 'Exploration',
    'text': 'If you have an Adventure in hand:<br>+1 :Action:.<br>Additionally, +1 :Card:, +1 :Coin:.',
    'flavor': 'Set sail, but not without a compass in hand.',
    'img': 'adventures/exploration.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Treasure Map',
    'text': `+1 :Coin:. Look at the top 3 cards of your <br>deck. 
    You may put any number of them<br> into your stash and the 
    rest back on top of your deck in any order. Then +1 :Card:.`,
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
    'text': '+1 :Card:, +1 :Coin:. You may put this card on the top of its owner’s deck. If there are 3 or <br>more Attacks in the supply: +1 :Action:.',
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
    This card is out of the game. Restore it <br>at any time on your next turn.`,
    'flavor': 'Dear guest, you’re truly at your best restrained.',
    'img': 'structures/jail.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Lost Expedition',
    'text': `Remove and set aside a card from a target player’s stash. When their stash is shuffled, you get +2 :Coin: and return the card to their new stash.`,
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
    'text': `Reveal the top 2 cards of a target enemy’s deck. Put 1 revealed card into their stash and gain 
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
    'text': `+2 :Coin:. You may remove from the game a card from your hand or stash.
    Gain coins equal to the cost of the removed card.`,
    'flavor': 'A dance on the plank or a delayed sentence?',
    'img': 'attacks/plank-2.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Monkey’s Bargain',
    'text': `Remove from the game a card from your hand or stash. 
    For each hook :Hook: of the removed card: +1 :Coin: and +1 :Action:.`,
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
    'title': 'Adventurers’ Guild',
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
    'title': 'Architects’ Workshop',
    'text': '+1 :Coin:, +1 :Action:. If there are 2 or more Structures in the supply: +1 :Buy:.',
    'flavor': 'Meticulous plans and skilled craftsmanship <br>bring grand visions to life.',
    'img': 'structures/architect-workshop.png',
    'type': 'structure',
    'cost': '3',
    'victory': '3',
    'amount': 1
},

{
    'title': 'Voodoo Curse',
    'text': `Reveal the top 3 cards of a target player’s deck. Put one into their stash, 
    then apply <br>its effects as if you had played it.`,
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
    'text': `+1 :Action:. Swap a card from your hand<br> with a card of equal cost from a target enemy’s stash.`,
    'flavor': 'Born of the deep, it feasts on uncertainty.',
    'img': 'attacks/sea-bug.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Smugglers’ Cache',
    'text': '+1 :Coin:.<br>At the start of your turn, if this <br>card is in your stash: +1 :Coin:.',
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
    'text': '+2 :Reload: then, if the supply has 4 or more <br>cards of the same type: +3 :Coin:.',
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
    'text': `A target player picks a card from their stash that costs 2 or less and removes it from the game.<br> 
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
    'text': `+1 :Coin:. On a target enemy’s next turn, control their first Action, 
    making all decisions for this enemy. You may control Actions or Buys they may gain through this.`,
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
    'text': 'Pay 1 :Coin:: Swap a card between your <br>stash and a target enemy’s stash as long as the cost difference is 1 or less.',
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
    'text': `Pay 1 :Coin:: Reveal the top 2 cards of the supply deck. 
    Put one revealed card that <br>costs 3 or less into your stash.`,
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
    'text': `+2 :Coin:.<br>
    If this card is in your stash, and you <br>buy a 1-cost card: +1 :Action:.
    `,
    //'flavor': 'A united roar shakes the foundations.',
    'img': 'attacks/angry-mob.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'fist': true,
},

{
    'title': 'Tax Collector',
    'text': `+1 :Coin:, +1 :Card:. :or: +1 :Coin: for each Structure in an enemy’s stash, up to a maximum of 4 coins.`,
    'img': 'adventures/tax-collector.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},


{
    'title': 'Hidden Cove',
    'text': `Flip 1 supply card face down. This card is out of the game. Restore it at any time on your next turn.
    Then +1 :Coin: for each different card type in the supply.`,
    'img': 'structures/hidden-cove.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
},

{
    'title': 'Crafty Coco',
    'text': `+1 :Action:, +1 :Reload:.<br>If this card is in your stash and you <br>buy a card: You may put the bought <br>card
    into your hand.`,
    'img': 'adventures/coco-alternate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'fist': true,
},

// {
//     'title': 'Seance',
//     'text': `+1 :Action:, +1 :Coin:, +1 :Card:.<br>
//     If this card is in your stash, and you play a 1 cost card: Look at the 2 top cards from any one deck.`,
//     'img': 'ext/seance.png',
//     'type': 'adventure',
//     'victory': '2',
//     'cost': '3',
//     'amount': 1,
//     // 'start': true,
//     'fist': true,
// },

{
    'title': `Raiders’ Excavation`,
    'text': `+1 :Coin:, +1 :Card:.<br>If this card is in your stash
    and you play a second Adventure this turn: +1 :Coin:.
    <span class="extension-sign">e1</span>`,
    'img': 'ext/excavation.png',
    'flavor': 'Two pirates, the door surrenders, a glint of gold.',
    'type': 'structure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'fist': true,
},

{
    'title': `Haunted Shipwreck`,
    'text': `Name a card type and reveal the top 3 cards of a target enemy’s deck. 
    Put the cards matching the named type into their stash, then +1 :Coin: for each remaining card.
    <span class="extension-sign">e1</span>`,
    'img': 'ext/shipwreck.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'target': true,
},


{
    'title': `Bloodfang’s Manor`,
    'text': `+1 :Coin:, +1 :Reload:.<br>If this card is in your stash and an enemy buys a card that costs 3 or more: +1 :Coin:.
    <span class="extension-sign">e1</span>`,
    'img': 'ext/manor.png',
    'type': 'structure',
    'flavor': 'Wealth and veins must flow — obey the Manor!',
    // 'extra_type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'fist': true,
},

{
    'title': `Raid on Port Royal`,
    'text': `+1 :Coin:, + :Reload:<br>At the start of your turn, if there are at <br>least 4 Attacks in your stash: +1 :Action:.
    <span class="extension-sign">e1</span>`,
    'flavor': 'Sanctuary to cinders, memories to smoke.',
    'img': 'ext/raid.png',
    'type': 'attack',
    'victory': '3',
    'cost': '4',
    'amount': 1,
    'start': true,
},

{
    'title': `Jail Breaker`,
    'text': `
    <span style="display: inline-block; margin-bottom: 1px"><span class="keyword">+1 <img class="rule-icon" style="margin-bottom: -2.5px; margin-left: -1px" src="icons/tentacle.svg" /> Buy</span>, +1 :Coin:.</span>
    <br>
    When discarded: +1 :Coin: and put this <br>card at the bottom of your deck.
    <span class="extension-sign">e1</span>`,
    'img': 'ext/jail-breaker.png',
    'flavor': 'Lousy rations fuel my hunger for the sea.',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'discard': true,
},



]