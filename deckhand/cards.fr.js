var fr_translations = [
  // {
  //   "title":"1 Pièce",
  //   'text': `Un jeton pièce <img class="rule-icon chest" src="icons/coins.svg" /> à dépenser habilement.`,
  //   "flavor":"Un pirate dépense sans compter."
  // },
  // {
  //   "title":"3 Pièces",
  //   'text': `3 jetons pièce <img class="rule-icon chest" src="icons/coins.svg" /> à dépenser habilement.`,
  //   "flavor":"Comment avez-vous acquis de telles richesses ?"
  // },
  {
    'title': 'Anatomie d\'une Carte',
    'text': `
    <div class="anatomy-list">
      1. Symboles de rappel
      &nbsp;&nbsp;&nbsp; 2. Titre<br>
      3. Texte <i>(effets)</i>
      &nbsp; 4. Crochets <i>(points de V.)</i><br>
      5. Type 
      &nbsp;&nbsp;&nbsp; 6. Coût <i>(à payer en pièces)</i>
    </div>`,
    // 'flavor': 'Pirates are notorious spenders.',
    'img': 'marketing/card-anatomy.png',
    'type': 'rule',
    // 'victory': '1',
    // 'cost': '1',
    'amount': 1
  },

  {
    'title': 'Aperçu du Tour du Joueur',
    'text': `1. Résous les effets qui peuvent se produire au début du tour <img class="rule-icon" src="icons/bookmark-yellow.svg" />.<br>
2. Défausse ta main <img class="rule-icon" src="icons/card-discard-yellow.svg" /> et pioche 3 cartes de ton deck.<br>
3. Tu disposes de 2 Actions par tour, parmi lesquelles:<br>
&nbsp;&nbsp;&nbsp; • Jouer une carte : Mets la carte de coté, résous ses effets et conséquences <b>puis</b> mets-la dans ta planque.<br>
&nbsp;&nbsp;&nbsp; • Achète 1 carte de la réserve : Paie le coût en pièces <img class="rule-icon coin" src="icons/coins.svg" />  indiqué par le 
coffre <img class="rule-icon" src="icons/chest-simplified.svg" /> en bas à droite
puis mets-la dans ta planque.
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
  'title': 'Référence Rapide des Cartes',
  'text': `<b>+1 <img class="rule-icon coin" src="icons/coins.svg" />:</b> Augmente tes pièces de 1.<br>
<b>+1 <img class="rule-icon draw" src="icons/card-draw-2.svg" />:</b> Tu peux immédiatement piocher 1 carte de ton deck.<br>
<b>+1 <img class="rule-icon reload" src="icons/cycle-2.svg" />:</b> Tu peux placer 1 carte de la réserve en bas 
du deck de recharge et la remplacer par une du <b>deck de recharge</b>.<br>
<b>+1 Action:</b> Gagne 1 Action ce tour.<br>
<b>+1 Achat:</b> Achète 1 carte sans utiliser d'Action plus tard ce tour.<br>
<b>+1 Défausse :</b> Défausse 1 carte de ta main dans ta planque.<br>
<b>Paye 1 :</b> Diminue tes pièces de 1.<br>
<img class="rule-icon" src="icons/card-discard-yellow.svg" /> <img class="rule-icon" src="icons/bookmark-yellow.svg" /> 
rappels d'effets déclenchés<br>
<img class="rule-icon target" src="icons/target.svg" /> effets ciblés qui affectent les ennemis.<br>
<img class="rule-icon target" src="icons/fist.svg" /> effet durable quand dans ta planque.`,
  'img': 'marketing/booklet.png',
  'type': 'rule',
  'class': 'quick-ref',
  'amount': 1
},

  {
    "title":"Bagarre",
    "text":"+1 :Coin:<br><i>(Augmente tes pièces de 1.)</i>",
    "flavor":"Les amitiés pirates débutent souvent par une bagarre."
  },
  {
    "title":"Célébration",
    "text":`+1 :Card: <i>(Tu peux piocher 1 carte.)</i>
    <br>+1 :Reload: <i>(Recharge 1 carte de la réserve.)</i>
    <br>Puis +1 :Coin: par Célébration en main.`,
    "flavor":"Grog solitaire ou rires partagés ?"
  },
  {
    "title":"Taverne",
    "text":"+1 :Card: si tu as une Aventure en main.<br>Puis +1 :Coin: si tu as une Attaque en main.<br>+1 :Action: si tu as une Structure en main.",
    "flavor":"Elle rassemble voleurs, coquins et fripouilles."
  },
  {
    "title":"Voyante",
    "text":"Révèle 2 cartes de n’importe quel deck.<br>+1 :Card: par Aventure révélée.<br>+1 :Coin: par Attaque révélée.<br>+1 :Action: par Structure révélée."
  },
  {
    "title":"Tir Rapide",
    "text":"+1 :Coin:.<br>+1 :Action: si tu as une Attaque en main.",
    "flavor-no-quotes": "« Ne les laissez pas se regrouper ! » ordonne-t-elle, les pistolets crépitant."
  },
  {
    'title': 'Mutinerie',
    'text': '+1 :Coin:, +1 :Reload:.<br>Mets une carte de la réserve coûtant 1 <br>dans ta planque.',
    'flavor': `Tous ensemble, exigeons notre part légitime !`,
  },
  {
    "title": "Maître d’Arme",
    "text":"+1 :Coin: par carte en main coûtant 1.<br>+1 :Action: par carte en main coûtant 3.",
    "flavor":"Les tacticiens accomplis mêlent manœuvres subtiles et gestes grandioses."
  },
  {
    "title":"Grog Empoisonné",
    "text":"+1 :Coin:. +1 :Reload:.<br>Quand défaussée : +1 :Coin:.",
    "flavor":"Parfois, le poison agit lentement."
  },
  {
    "title":"Flâneur de Plage",
    "text":"+1 :Coin:, +1 :Reload:<br>Si tu es le joueur possédant le moins<br> de cartes : +1 :Buy:, +1 :Coin:.",
    "flavor":"Les rumeurs disent qu'il est le plus riche du village."
  },
  {
    "title": "Léthargie Karmique",
    "text": "Paye 1 :Coin: : Choisis une carte de ta main. Choisi une carte de la réserve coûtant 1 de plus. Échanges ces cartes",
    "flavor-no-quotes": "« Harmonie ! Sérénité ! » bâilla-t-il, après sa sieste."
  },
  // {
  //   "title":"Rêverie",
  //   "text":"+1 :Coin:.<br>Si tu es ciblé par des effets d’une carte : planque Rêverie pour les annuler.",
  //   "flavor-no-quotes": "\"Harmonie ! Sérénité !\" bâilla-t-il après sa sieste.",
  // },
  {
    "title":"Leçons de Kung Fu",
    "text":"+1 :Coin:, +1 Card, +1 :Reload:.<br>Mets 1 carte de la planque d’un joueur ciblé en dessous de son deck.",
    "flavor":"Les marées, utilises leur pouvoir à ton avantage !"
  },
  {
    "title":"Mariage du Gouverneur",
    "text":"+1 :Coin:. Au prochain tour de l’ennemi ciblé, il gagne +1 :Achat: et doit tu donner une pièce avant son premier achat.",
    "flavor":"Un luxueux cadeau assure faveurs et influence."
  },
  {
    "title":"Poudre Impériale",
    "text":"+1 :Coin:. Si tu perds possession de cette carte : retire du jeu une carte de la planque de l’ennemi ciblé coûtant 2 ou moins.",
    "flavor":"ATTENTION : ne pas rouler, choquer ou vaciller."
  },
  {
    "title":"Marchandage",
    "text":"+1 :Reload:, +1 :Achat:.<br>Ton prochain achat ce tour-ci <br>coûte 1 de moins.",
    "flavor":"Parfois, la langue est plus tranchante que l’épée."
  },
  {
    "title":"Brigand",
    "text":"+1 :Coin:, +1 :Reload:, +1 :Card:.:or:Vole une pièce au joueur ciblé, +1 :Card:.",
    "flavor":"Une ombre fugace, tes trésors disparaissent !"
  },
  {
    "title":"Totem Inutile",
    "text":"Le Totem Inutile est à tout moment une Structure, une Attaque et une Aventure.",
    "flavor":"Le bibelot futile semble ricaner d’un air moqueur."
  },
  {
    "title":"Hôtel du Conseil",
    "text":"Un ennemi choisit une carte de la réserve et la place dans ta planque.",
    "flavor":"De l’or pour un siège, une richesse gaspillée en chuchotements."
  },
  {
    "title": "Typhon",
    "text": `+2 :Card:, +1 Défausse, +1 :Coin:. Puis tous les joueurs 
    déplacent simultanément une carte de leur planque ou la carte supérieure de leur deck 
    (sans regarder) dans la planque de leur voisin de gauche.`,
    "flavor": "",
    // "flavor": "Un chaos tourbillonnant ! Un cauchemar!"
  },
  {
    "title":"Alchimie",
    "text":"Défausse jusqu'à 3 cartes. +1 :Coin: pour chaque carte défaussée. Puis, +2 :Card:.",
    "flavor":"Imprégné de feu, tordant le destin. Qu'est-ce qui pourrait mal tourner ?"
  },
  {
    "title":"Caprice de l’Empereur",
    "text":"+2 :Reload: puis un ennemi choisi 3 cartes de la réserve. Tu peux appliquer les effets de l’une d’entre elles.",
    "flavor":"Dans ses mains royales vos choix sont illusoires."
  },
  {
    "title":"Maîtrise des Cartes",
    "text":"+1 :Action:. Mets une carte de ta planque dans ta main.<br>Quand défaussée : +1 :Card:.",
    "flavor":"Un geste du poignet provoque surprise et frayeur."
  },
  {
    "title":"Négoce d’Épices",
    "text":"+1 :Coin:. Si cette carte est dans ta planque, la première Structure que tu achètes chaque tour coûte 1 de moins.",
    "flavor":"Épices dansantes, saveurs d’opulence."
  },
  {
    "title":"Refuge",
    "text":"+2 :Card:, +1 :Coin:.<br>Quand défaussée : +1 :Card:.",
    "flavor":"Un refuge pour ouvrir un flacon de rhum et le finir."
  },
  {
    "title":"Mine d’Or",
    "text":"Un ennemi choisi un nombre. +3 :Card:. Si le coût total des cartes piochées n’est pas ce nombre : Révèle-les, +1 :Action:.",
    "flavor":"Sous le sol, se cachent rêves et désespoir."
  },
  {
    "title":"Marché Portuaire",
    "text":"+2 :Coin:.:or:+1 :Coin:, +1 :Achat:.",
    "flavor":"Des secrets et des trésors volés sont échangés ici."
  },
  {
    "title":"Bibliothèque Antique",
    "text":"+2 :Coin:.<br>Quand défaussée : tu peux mélanger ta planque dans ton deck.",
    "flavor":"Chaque page dévoile un secret impérial."
  },
  {
    "title":"Fabrique de Rhum",
    "text":"+2 :Coin:. Tu peux augmenter les pièces de tous les joueurs de 1. Si tu le fais, tous les joueurs doivent défausser une carte après leur pioche initiale lors de leur prochain tour."
  },
  {
    "title":"Exploration",
    "text":"+1 :Action: si tu as une Aventure en main.<br>Puis +1 :Card:, +1 :Coin:.",
    "flavor":"Mettez les voiles, mais pas sans une boussole en main."
  },
  {
    "title":"Carte au Trésor",
    "text":`+1 :Coin:. Regarde les 3 cartes du dessus de ton deck. Défausse-en autant que tu veux 
    et mets le reste sur le dessus de ton deck dans n’importe quel ordre. Puis, +1 :Card:.`
  },
  {
    "title":"Rage Simiesque",
    "text":"+1 :Action:, +1 :Reload:. Si joué depuis ta main, échange Rage Simiesque ou une carte de ta main avec une carte de coût égal de la réserve. La nouvelle carte rejoins ta main."
  },
  {
    "title": "Équipage Fantôme",
    "text": "+1 :Card:, +1 :Coin:. Tu peux mettre cette carte au dessus du deck de son propriétaire. +1 :Action: s'il y a 3 attaques ou plus dans la réserve.",
    // "flavor": "Ta vie mortelle contre une rétribution éternelle?"
  },
  {
    "title": "Caverne Hantée",
    "text": "+2 :Card:. Puis +1 :Coin: pour chaque Attaque dans ta main, jusqu'à un maximum de 3 Pièces.",
    "flavor": "Des cliquetis squelettiques perce le silence hanté."
  },
  {
    "title": "Prison du Gouverneur",
    "text": "+2 :Coin:. Retourne une carte de la réserve face cachée. Cette carte est hors jeu. Restaure-la à tout moment lors de ton prochain tour.",
    // "flavor": "Les forces de l’océan sont indomptables."
  },
  {
    "title": "Expédition Perdue",
    "text": `Enlève et mets de côté 1 carte de la planque du joueur ciblé. Quand sa
    planque est mélangée, tu obtiens +2 :Coin: et retourne sa carte dans sa nouvelle planque.`
  },
  {
    "title": "Observateur Furtif",
    "text": "Révèle les 2 premières cartes du deck de l’ennemi ciblé. Place-en une dans sa planque et gagne des Pièces équivalant aux crochets :Hook: de la carte.",
    // "flavor": "Un œil vigilant révèle les vérités cachées."
    "flavor": ""
  },
  {
    "title": "Extravagance",
    "text": "+2 :Achat:, +1 :Reload:.:or:+1 :Achat:, +1 :Coin:.",
    "flavor": "La dépense doit être grandiose et flamboyante!"
  },
  {
    "title": "Chantier Naval",
    "text": "+1 :Coin:.<br>+1 :Action: par Structure dans ta planque.<br><i>(N'utilise pas plus de 5 actions ce tour-ci.)</i>",
    "flavor": "Chaque planche rêve de lointains horizons."
  },
  {
    "title": "Sur la Planche",
    "text": "+2 :Coin:. Tu peux retirer une carte de ta main ou de ta planque du jeu : Gagne des Pièces équivalant au coût de la carte retirée.",
    "flavor": "Une danse sur la planche ou un sursis ?"
  },
  {
    "title": "Affaire de Singe",
    "text": "Retire 1 carte de ta main ou de ta planque du jeu. Pour chaque :Hook: de la carte retirée : +1 :Coin: et +1 :Action:.",
    "flavor": "Les espiègleries de l’un sont l’aubaine d’un autre."
  },
  {
    "title": "Vent dans les Voiles",
    "text": "+1 :Card:.<br>Au début de ton tour, si cette carte est dans ta planque : Pioche une carte de plus lors de ta pioche initiale."
  },
  {
    "title": "Guilde des Aventuriers",
    "text": "+1 :Coin: pour chaque Aventure dans la réserve, jusqu'à un maximum de 3 Pièces.",
    "flavor": "Là où quêtes et bravoure convergent."
  },
  {
    "title": "Pied de l’Arc-en-ciel",
    "text": "+1 :Card:.<br>Au début de ton tour, si cette carte est dans ta planque, ainsi qu'une Attaque et une Structure : +1 :Action:."
  },
  {
    "title": "Banque Forteresse",
    "text": "+2 :Coin:.<br>Quand défaussée : +1 :Achat:.",
    "flavor": "Fortifiée contre les pillards, la banque protège contre les tentations les plus puissantes."
  },
  {
    "title": "Citadelle Côtière",
    "text": "+1 :Card:, +2 :Action:.<br><i>(N'utilise pas plus de 5 actions ce tour-ci.)</i>",
    "flavor": "Au bord de la mer, la citadelle appelle les intrépides à la recherche de fortunes."
  },
  {
    "title": "Atelier d’Architectes",
    "text": "+1 :Action:, +1 :Coin:. S'il y a 2 Structures ou plus dans la réserve : +1 :Achat:.",
    "flavor": "Des plans méticuleux et un artisanat habile donnent vie aux grandes visions."
  },
  {
    "title": "Malédiction Vaudou",
    "text": "Révèle les 3 premières cartes du deck du joueur ciblé. Mets-en une dans sa planque, puis applique ses effets.",
    "flavor": "À chaque pas, la malédiction resserre son emprise."
  },
  {
    "title": "Maraudeur des Abysses",
    "text": "+1 :Action:. Échange une carte de ta<br> main avec une carte du même coût de la planque d’un ennemi.",
    "flavor": "Né des profondeurs, il se nourrit des incertitudes."
  },
  {
    "title": "Grotte des Contrebandiers",
    "text": "+1 :Coin:. Au début de ton tour, si cette carte est dans ta planque : +1 :Coin:.",
    "flavor": "Peu nombreux sont ceux qui peuvent tracer la route vers les trésors interdits."
  },
  {
    "title": "Addiction au Jeu",
    "text": "+2 :Reload:. Si la réserve contient 4 cartes ou plus du même type : +3 :Coin:.",
    "flavor": "L'attrait des richesses faciles a scellé sa chute."
  },
  {
    "title": "Course Désespérée",
    "text": `Toi et un ennemi devez avoir au moins 2 cartes dans vos decks. Révélez les 3 cartes du haut de vos decks.
    Si tu révèles plus d'Attaques que lui, place une carte de la réserve coûtant 4 ou moins dans ta planque.`
  },
  {
    "title": "Grenade Improvisée",
    "text": "Le joueur ciblé choisit une carte de sa planque coûtant 2 ou moins et la retire du jeu.<br>Quand défaussée : Applique l’effet de cette carte à tous les joueurs avec eux-même comme cible." // 
  },
  {
    "title": "Cimetière Délaissé",
    "text": "+1 :Coin:.<br>Au début de ton tour, si cette carte est dans ta planque : Tu peux mettre une carte de ta planque en bas de ton deck."
  },
  {
    "title": "Poupée Envoûtée",
    "text": `+1 :Coin:. Au tour suivant de l'ennemi ciblé, contrôle sa première Action, prenant toutes ses décisions. 
    Tu peux aussi contrôler les Actions ou Achats qu'il pourrait obtenir grâce à ce contrôle.`,
    // "flavor": "Le destin est un concept fragile."
  },
  {
    "title": "Marchand Sournois",
    "text": "Paye 1 :Coin: : Échange une carte entre ta planque et la planque de l’ennemi ciblé tant que la différence de coût est de 1 ou moins.",
    "flavor": "Le vernis de l'abondance cache ses tromperies."
  },
  {
    "title": "Mercenaire des Néréides",
    "text": "Paye 1 :Coin: : Révèle les 2 premières cartes <br>du deck de réserve. Mets-en une coûtant<br> 3 ou moins dans ta planque.",
    "flavor": "Est-ce rentable de négocier avec cette atrocité ?"
  },
  {
    "title": "Fureur du Kraken",
    "text": "Applique les effets d’une carte de n’importe quelle planque.",
    "flavor": "Méfiez-vous du dévoreur de navires et d’âmes."
  },
  {
    "title": "Île du Crâne",
    "text": "Chaque joueur révèle la carte du dessus de son deck : tu peux en échanger une avec une autre de la réserve tant que la différence de coût est de 2 ou moins."
  },
  {
    "title": "Chasse au Trésor",
    "text": "+1 :Action:, +1 :Achat:,<br>+1 :Card:, +1 :Coin:.",
    "flavor": "Une île enveloppée de mystère détient la clé d’une immense richesse."
  },
  {
    "title": "Le Grand Conseil",
    "text": "+2 :Action:. Avant la fin de ton tour, retourne 4 cartes de la réserve face cachée. Ces cartes sont hors jeu. Restaure-les à tout moment lors de ton prochain tour."
  },
  {
    "title": "Foule en Colère",
    "text": "+2 :Coin:.<br> Si cette carte est dans ta réserve et que tu achètes une carte coûtant 1 : +1 :Action:"
  },
  {
    "title": "Collecteur d'Impôts",
    "text": "+1 :Coin:, +1 :Card: :or: +1 :Coin: pour chaque Structure dans la réserve d'un ennemi, jusqu'à un maximum de 4 pièces."
  },
  {
    "title": "Crique Cachée",
    "text": `Retourne 1 carte de réserve face cachée. Cette carte est hors jeu. Restaure-la à tout moment lors de ton prochain tour.
      Ensuite, +1 :Coin: pour chaque type de carte différent dans la réserve.`
  },
  {
    "title": "Coco l'Astucieux",
    "text": `+1 :Action:, +1 :Reload:.<br>Si cette carte est dans ta planque et que tu 
    achètes une carte : Tu peux mettre la carte achetée dans ta main.`
  }
]