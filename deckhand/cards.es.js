
var es_translations = [

{
    'title': 'Estructura de Carta',
    'text': `
    <div class="anatomy-list">
        1. Iconos Recordatorios
        &nbsp;&nbsp;&nbsp; 2. Title<br>
        3. Texto <i>(efectos)</i>
        &nbsp;&nbsp; 4. Garfios <i>(puntos de victoria)</i><br>
        5. Tipo 
        &nbsp;&nbsp;&nbsp; 6. Coste <i>(se paga con monedas)</i>
    </div>`,
    'img': 'marketing/card-anatomy.png',
    'type': 'rule',
    'amount': 8,
    // 'flip': 1,
},

{
    'title': 'Tu turno',
    'text': `1. Resuelve cualquier efecto de inicio de turno que pueda desencadenar <img class="rule-icon" src="icons/bookmark-yellow.svg" />.<br>
2. Descarta <img class="rule-icon" src="icons/card-discard-yellow.svg" /> tu mano, si la hay, luego roba 3 cartas de tu mazo.<br>
3.Luego tienes 2 acciones que puedes usar de las siguientes maneras:<br>
&nbsp;&nbsp;&nbsp; • Juega una carta de tu mano: Deja la carta a un lado, resuelve sus efectos y consecuencias <b>y luego</b> guárdala en tu Alijo.<br>
&nbsp;&nbsp;&nbsp; • Compra una tarjeta de la oferta: Paga el coste 
indicado por el cofre <img class="rule-icon" src="icons/chest-simplified.svg" /> en la parte inferior derecha
con monedas <img class="rule-icon coin" src="icons/coins.svg" /> y ponlo en tu Alijo.
    `,
    'img': 'marketing/booklet.png',
    'type': 'indicator',
    'class': 'quick-ref',
    'amount': 1,
    //'flip': 1,
},


{
    'title': 'Carta de Referencia',
    'text': `<b>+1 <img class="rule-icon coin" src="icons/coins.svg" />:</b> Incrementa tus monedas en 1.<br>
<b>+1 <img class="rule-icon draw" src="icons/card-draw-2.svg" />:</b> Roba 1 carta de tu mazo.<br>
<b>+1 <img class="rule-icon reload" src="icons/cycle-2.svg" />:</b> Coloca 1 carta de suministro en la parte inferior del mazo de recarga.
     Si lo haces, reemplázala con una del <b>mazo de recarga</b>.<br>
<b>+1 Acción:</b> Gana Acción extra este turno.<br>
<b>+1 Compra:</b> Compra una carta sin gastar una Acción este turno.<br>
<b>Paga 1 <img class="rule-icon coin" src="icons/coins.svg" />:</b> Reduce tus monedas en 1.<br>
<b>+1 Descarte:</b> Descartar 1 carta de tu mano y ponla en tu Alijo.<br>
<img class="rule-icon" src="icons/card-discard-yellow.svg" /> <img class="rule-icon" src="icons/bookmark-yellow.svg" /> 
 efectos desencadenados.<br>
<img class="rule-icon target" src="icons/target.svg" /> efecto dirigido, afecta a enemigos.<br>
<img class="rule-icon target" src="icons/fist.svg" /> efecto perma. mientras está en tu Alijo.
`,
    'img': 'marketing/booklet.png',
    'type': 'indicator',
    'class': 'quick-ref quick-ref-2',
    'amount': 1,
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
    'title': 'Primer Combate',
    'text': '+1 :Coin:<br><i>(Aumenta tus monedas en 1.)</i>',
    'flavor': 'Las amistades piratas comienzan con un combate.',
    'img': 'attacks/fist-fight.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Celebración',
    'text': '+1 :Card: <i>(Robar 1 carta.)</i><br>+1 :Reload: <i>(Recarga 1 carta de suministros.)</i><br>+1 :Coin: por cada Celebración en la mano.',
    'flavor': '¿Un trago solitario o una risa compartida?',
    'img': 'adventures/celebrate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 2 * 4
},
{
    'title': 'Taverna',
    'text': `+1 :Card: si tienes una Aventura en mano.<br>
        Luego +1 :Coin: si tienes un Ataque en mano.<br>
        +1 :Accion: si tienes una Estructura en mano.`,
    'flavor': 'La taberna atrae ladrones, rufianes y pícaros',
    'img': 'adventures/tavern-3.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Adivino',
    'text': `Revela 2 cartas de cualquier mazo.<br>
        +1 :Card: por cada Aventura revelada.<br>
        +1 :Coin: por cada Ataque revelado.<br>
        +1 :Accion: por cada Estructura revelada.`,
    //'flavor': 'The tavern unites thieves, rogues and scoundrels.',
    'img': 'adventures/fortune-teller.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Tiro rápido',
    'text': '+1 :Coin:.<br>Si tienes un Ataque en la mano: +1 :Accion:.',
    'flavor-no-quotes': '“¡No dejes que se reagrupen!” —ordena ella, <br>con las pistolas en llamas.',
    'img': 'attacks/dual-pistol.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Motín',
    'text': '+1 :Coin:, +1 :Reload:.<br>Pon una carta del suministro que cueste 1 en tu Alijo.',
    'img': 'attacks/mutiny.png',
    'type': 'attack',
    'flavor': `Unidos, exigimos lo que nos corresponde.`,
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Espadachín',
    'text': '+1 :Coin: por carta en mano que cueste 1.<br>+1 :Accion: por carta en mano que cueste 3',
    'flavor': `Los estrategas consumados combinan maniobras sutiles con grandes gestos.`,
    'img': 'attacks/dance-master-3.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
},

{
    'title': 'Trago envenenado',
    'text': '+1 :Coin:, +1 :Reload:.<br>Si es descartada: +1 :Coin:.', // , add condition, if you have not treasure if too strong 
    'flavor': 'A veces, el veneno actúa lentamente.',
    'img': 'attacks/pint.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'discard': true,

},

{
    'title': 'Vagabundo de la playa',
    'text': `+1 :Coin:, +1 :Reload:.<br>Si eres el jugador
     que ha comprado la<br> carta más reciente: +1 :Compra:, +1 :Coin:.`,
    'flavor': 'Se rumorea que es el más rico de la ciudad.',
    'img': 'adventures/beach-bum.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,

},

{
    'title': 'Elevación Kármica',
    'text': 'Paga 1 :Coin:: revela una carta de tu mano, <br>elige una carta de suministro que <br> cueste 1 más e intercambialas.',
    'flavor-no-quotes': 'Bostezó tras la siesta: "¡Armonía! ¡Serenidad!"',
    // 'reduced-font-size': '9.1px',
    'img': 'adventures/namaste.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Lecciones de Kung Fu',
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.<br>Pon una carta del Alijo objetivo<br>abajo de su mazo.',
    'flavor': '¡La marea, aprovecha su poder a tu favor!',
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
    'title': 'Boda del Governador',
    'text': '+1 :Coin:, +1 :Reload:. En su turno, el enemigo objetivo gana +1 :Compra: y tiene que darte 1 moneda antes de su compra.',
    'flavor': 'Un regalo suntuoso asegura favores e influencia.',
    'img': 'structures/wedding.png',
    'type': 'attack',
    'cost': 1,
    'victory': 1,
    'amount': 1,
    'target': true,
},

{
    'title': 'Pólvora Imperial',
    'text': `+1 :Coin:, +1 :Reload:.<br>Si pierdes la propiedad de esta carta: 
    Selecciona una carta que cueste 2 o menos del Alijo del enemigo objetivo y elimínala del juego.`,
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
    'title': 'Regateo',
    'text': '+1 :Compra:, +1 :Reload:.<br>Tu siguiente compra este turno cuesta 1 menos.',
    'flavor': 'La lengua tiene un filo más afilado que la espada.',
    'img': 'attacks/haggling.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
},

{
    'title': 'Ladrón del Callejón',
    'text': '+1 :Coin:, +1 :Card:, +1 :Reload:.:or:Robar una moneda a un enemigo, +1 :Card:.',
    'flavor': '¡Una sombra fugaz, tus tesoros se desvanecen!',
    'img': 'attacks/thief.png',
    'type': 'attack',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'target': true,
},


{
    'title': 'Totem Inútil',
    'text': 'El Totem Inútil siempre es una Estructura,<br>Ataque y Aventura.',
    'flavor': 'La inútil baratija sonríe, aparentemente burlándose de ti.',
    'img': 'structures/totem.png',
    'type': 'structure',
    'victory': '2',
    'cost': '1',
    'amount': 1
},

{
    'title': 'Salón del Consejo',
    'text': 'Un enemigo elegido toma una carta del suministro y la guarda en tu Alijo.',
    'flavor': 'El Oro le aseguró un asiento, pero su influencia sigue siendo desesperadamente esquiva.',
    'img': 'structures/city-hall-2.png',
    'type': 'structure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Tifón',
    'text': `+2 :Card:, +1 :Descarte:, +1 :Coin:. Todos los jugadores mueven simultáneamente
     una carta de su Alijo o la carta superior de su mazo (sin mirar) al Alijo de su vecino izquierdo.`,
    //'flavor': 'A Swirling chaos! A navigational nightmare!',
    'reduced-font-size': '9.3px',
    'img': 'adventures/tornado.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Alquimia',
    'text': 'Descarta hasta 3 cartas. +1 :Coin: por cada carta descartada. Si lo haces +2 :Card:.',
    'flavor': 'Imbuido de fuego, modificando el destino. ¿Qué podría salir mal?',
    'img': 'adventures/alchemist-2.png',
    'type': 'adventure',
    'cost': 2,
    'victory': 2,
    'amount': 1,

},

{
    'title': 'Capricho del Emperador',
    'text': '+2 :Reload: despue un enemigo elige 3 cartas<br> de suministro. Tienes que aplicar los efectos uno por uno de las cartas.',
    'flavor': 'Bajo manos reales, tus elecciones son ilusiones.',
    'img': 'attacks/emperor.png',
    'type': 'attack',
    'cost': 2,
    'victory': 2,
    'amount': 1,
},

{
    'title': 'Maestro de las Cartas',
    'text': '+1 :Accion:, coloca una carta de tu Alijo en tu mano. Cuando se descarte: +1 :Card:.',
    'flavor': 'Un movimiento de muñeca provoca asombro y miedo.',
    'img': 'adventures/magician.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'discard': true,
},

{
    'title': 'Mercado de Especias',
    'text': '+1 :Coin:. Si esta carta está en tu Alijo, la primera Estructura que compres cada turno cuesta 1 menos.',
    'flavor': 'Las especias bailan, mezclándose en opulencia.',
    'img': 'adventures/spice-trade.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'fist': true,
},

{
    'title': 'Escondite',
    'text': '+2 :Card:, +1 :Coin:.<br>Cuando se descarta: +1 :Card:',
    'flavor': 'Un paraíso para abrir una botella <br> de ron y verla hasta el final.',
    'img': 'structures/hideout.png',
    'type': 'structure',
    'discard': true,
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Mina de Oro',
    'text': `El enemigo elegido escoge un número. <br>+3 :Card:. Si el total del coste de las cartas robadas no es igual: 
    +1 :Accion: y las revelas.`,
    'flavor': 'Bajo el suelo, sueños y desesperación.',
    'img': 'structures/gold-mine.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    //'discard': true,
    'amount': 1
},


{
    'title': 'Mercado del Puerto',
    'text': '+2 :Coin:.:or:+1 :Coin:, +1 :Compra:.',
    'flavor': 'Aquí se intercambian secretos y tesoros robados',
    'img': 'structures/market-super-format.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Biblioteca Antigua',
    'text': '+2 :Coin:.<br>Cuando se descarta: Tienes que <br>mezclar tu Alijo en tu mazo.',
    'flavor': 'Cada página desvela un secreto imperial.',
    'img': 'structures/archives.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'discard': true,
},

{
    'title': 'Fabrica de Ron',
    'text': '+2 :Coin:. Aumenta las monedas de todos <br> los jugadores en 1. Si lo haces, cada jugador debe descartar una carta después de su robo inicial en su próximo turno.',
    'img': 'structures/rum3.png',
    'type': 'structure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
},

{
    'title': 'Exploración',
    'text': 'Si tienes una Aventura en la mano:<br>+1 :Accion:.<br>Luego +1 :Card:, +1 :Coin:.',
    'flavor': 'Zarpa, pero no sin brújula en mano.',
    'img': 'adventures/exploration.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Mapa del Tesoro',
    'text': `+1 :Coin:. Mira las 3 primeras cartas de tu mazo. 
        Puedes poner cualquier número de ellas en tu Alijo y el resto encima de tu mazo en cualquier orden. Luego +1 :Card:.`,
    //'flavor': 'Riches await the keen-eyed adventurer.',
    'img': 'adventures/treasure-map.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Volviendose Mono',
    'text': '+1 :Accion:, +1 :Reload:. Si se juega de tu mano, cambia Volviendose Mono o una carta de tu mano por una carta del mismo valor de suministros. La nueva carta va a tu mano.',
    'img': 'attacks/silverback.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Tripulación Fantasma',
    'text': '+1 :Card:, +1 :Coin:. <br>Pon esta carta en la parte superior del mazo de su propietario. +1 :Accion: si hay 3 o más Ataques en el suministro.',
    'img': 'attacks/ghost-crew.png',
    // 'flavor': 'Transforma tu vida, goza de la retribución eterna.',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Cueva Encantada',
    'text': '+2 :Card:. +1 :Coin: por cada Ataque en <br>tu mano, hasta un máximo de 3 monedas.',
    'flavor': 'El ruido de los huesos perfora el silencio inquietante.',
    'img': 'attacks/infested-cave.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Cárcel del Governador',
    'text': `+2 :Coin:. Voltea una carta de suministro cara abajo.
    Esta carta está fuera de juego. Recupérala en cualquier momento en tu siguiente turno.`,
    //'flavor': 'Querido invitado: realmente estás en tu mejor condena.',
    'img': 'structures/jail.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Expedición Perdida',
    'text': `Retira y reserva una carta del Alijo del jugador objetivo. Cuando se baraje su Alijo, obtienes +2 :Coin: y devuelves la carta a su nuevo Alijo.`,
    'img': 'adventures/lost-expedition-2.png',
    //'reduced-font-size': '9.0px',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'target': true,
},

{
    'title': 'Observador Silencioso',
    'text': `Revela las 2 primeras cartas del mazo del enemigo objetivo. Pon 1 carta revelada en su Alijo y gana monedas iguales a sus ganchos :Hook:.`,
    //'flavor': 'Un ojo vigilante saca a la luz verdades ocultas.',
    'img': 'adventures/roof-thief.png',
    'type': 'adventure',
    'cost': '2',
    'victory': '2',
    'amount': 1,
    'target': true,
},

{
    'title': 'Extravagancia',
    'text': '+1 :Reload:, +2 :Compra:.:or:+1 :Coin:, +1 :Compra:.',
    'flavor': 'Solo gasta de manera lujosa y extravagante.',
    'img': 'adventures/extravagance-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1
},

{
    'title': 'Astillero',
    'text': '+1 :Coin:.<br>+1 :Accion: por cada Estructura en tu Alijo. <i>(No uses más de 5 acciones por turno.)</i>',
    'img': 'structures/shipyard.png',
    'flavor': 'Cada tabla aspira a horizontes infinitos.',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Caminar por la Tabla',
    'text': ' +2 :Coin:. Retira una carta de tu mano o del Alijo. Gana monedas equivalentes al coste de la carta retirada.',
    'flavor': '¿Un baile sobre la tabla o una sentencia retrasada?',
    'img': 'attacks/plank-2.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Pacto del Mono',
    'text': 'Retira una carta de tu mano o Alijo. Para cada gancho :Hook: de la carta retirada +1 :Coin: y +1 :Accion:',
    'flavor': 'Las travesuras del mono, la bendición del pirata.',
    'img': 'attacks/exchange.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Viento en Velas',
    'text': `+1 :Card:, +1 :Reload:.<br>Al comienzo de tu turno, si esta carta está en tu Alijo: Roba una carta extra en el robo inicial.`,
    'img': 'adventures/wind.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'start': true,
},

{
    'title': 'Gremio de Aventureros',
    'text': '+1 :Coin: por cada Aventura en el Suministro,<br>hasta un máximo de 3 monedas.',
    'flavor': 'Donde convergen las misiones y la valentía.',
    'img': 'structures/adventurer-center.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,

},

{
    'title': 'Final del Arcoiris',
    'text': '+1 :Card:.<br>Al comienzo del tu turno, si esta carta está en tu Alijo, y tambien un Ataque y una Estructura: +1 :Accion:.',
    // 'flavor': 'A taunting mirage of unachievable dreams',
    'img': 'adventures/rainbow.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'start': true,

},

{
    'title': 'Fortaleza del Banco',
    'text': '+2 :Coin:.<br>Cuando se descarta: +1 :Compra:.',
    'flavor': 'Fortificado contra los asaltantes, el banco protege contra las tentaciones más poderosas.',
    'img': 'structures/bank-2.png',
    'type': 'structure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'discard': true,

},

{
    'title': 'Ciudadela Costera',
    'text': '+1 :Card:, +2 :Accion:.<br><i>(No uses más de 5 acciones por turno..)</i>',
    'flavor': 'A la orilla del mar, la ciudadela atrae a los <br>intrépidos en busca de fortuna.',
    'img': 'structures/citadel-2.png',
    'type': 'structure',
    'cost': '3',
    'victory': '2',
    'amount': 1
},

{
    'title': 'Taller de Arquitectura',
    'text': '+1 :Coin:, +1 :Accion:. Si hay 2 o más Estructuras en el suministro: +1 :Compra:.',
    'flavor': 'Planos meticulosos y mano de obra de alta calidad <br>hacen realidad grandes visiones',
    'img': 'structures/architect-workshop.png',
    'type': 'structure',
    'cost': '3',
    'victory': '3',
    'amount': 1
},

{
    'title': 'Maldición Vudú',
    'text': `Revela las 3 primeras cartas del mazo del jugador objetivo. 
    Pon una en su alijo, luego aplica sus efectos.`,
    'flavor': 'Con cada paso, la maldición se intensifica.',
    'img': 'attacks/spell.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Meroreador del Abismo',
    'text': '+1 :Accion:. Cambia una carta de tu mano con una carta del Alijo enemigo con el mismo coste.',
    'flavor': 'De lo profundo nace la incertidumbre.',
    'img': 'attacks/sea-bug.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Alijo del Contrabandista',
    'text': '+1 :Coin:.<br>Al comienzo de tu turno, Si esta carta <br>está en tu alijo: +1 :Coin:.',
    'flavor': 'Pocos trazan el rumbo al botín prohibido.',
    'img': 'structures/smugglers-cache.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'start': true,
},

{
    'title': 'Adicción al Juego',
    'text': '+2 :Reload: <br>Si el suministro tiene 4 o más cartas del mismo tipo: +3 :Coin:.',
    'flavor': 'La seducción de riquezas fáciles selló su destino.',
    'img': 'adventures/gambling.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Persecución desesperada',
    'text': `Tú y un enemigo debéis tener al menos 2 cartas en el mazo. Revela las 3 cartas superiores de vuestros mazos.
    Si revelas más ataques que él, pon una carta de suministro que cueste 4 o menos en tu Alijo.`,
    //'reduced-font-size': '9.3px',
    //'flavor': 'Sails ablaze, cannons roar, a final duel in pursuit.',
    'img': 'attacks/chase-2.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},

{
    'title': 'Granada Improvisada',
    'text': `El jugador objetivo selecciona y retira del juego una carta de su alijo que cueste 2 o menos.
    Cuando se descarta: aplica el efecto de esta carta a todos los jugadores que tienen a ellos mismos como objetivo.`,
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
    'title': 'Cementerio Abandonado',
    'text': '+1 :Coin:.<br>Al comienzo de tu turno, si esta carta está en tu Alijo: Puedes poner una carta de tu Alijo en la parte inferior de tu mazo.',
    'img': 'structures/grave-robbers.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'start': true,

},

{
    'title': 'Muñeca Embrujada',
    'text': `+1 :Coin:. En el siguiente turno del enemigo objetivo, controla su primera acción y toma todas las decisiones por este enemigo. 
    Puedes controlar las Acciones o Compras de su turno a través de este control.`,
    // 'flavor': "Destiny is a fickle concept.",
    'img': 'attacks/voodoo-doll.png',
    'type': 'attack',
    'victory': '3',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Comerciante Corrupto',
    'text': `Paga 1 :Coin:: Cambia una carta entre tu alijo y el alijo
         del enemigo objetivo, siempre que la diferencia de costo sea 1 o menos.`,
    'flavor': 'La riqueza atrae a acuerdos engañosos.',
    'img': 'attacks/merchant.png',
    'type': 'attack',
    'victory': '2',
    'cost': '3',
    'amount': 1,
    'target': true,
},

{
    'title': 'Tritón Mercenario',
    'text': 'Paga 1 :Coin:: Revela las 2 primeras cartas del mazo de suministros. Pon una carta revelada que cueste 3 o menos en tu alijo.',
    'flavor': '¿Vale la pena hacer frente a esta abominación?', // Though she secures priceless treasures, i
    'img': 'adventures/merfolk-2.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '3',
    'amount': 1
},

{
    'title': 'Furia del Kraken',
    'text': 'Aplica los efectos de una carta de <br>cualquier alijo.',
    'flavor': 'Cuidado con el devorador de barcos y almas.',
    'img': 'attacks/kraken.png',
    'type': 'attack',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Isla Calavera',
    'text': `Todos los jugadores revelan la carta superior de su mazo: puedes intercambiar 1 carta revelada con
    una carta del suministro siempre que la diferencia de coste sea 2 o menos.`,
    'img': 'structures/skull.png',
    'type': 'structure',
    'victory': '4',
    'cost': '4',
    'amount': 1
},

{
    'title': 'Caza del Tesoro',
    'text': '+1 :Card:, +1 :Coin:,<br>+1 :Accion:, +1 :Compra:.',
    'flavor': 'Una isla envuelta en misterio contiene la clave de una inmensa riqueza.',
    'img': 'adventures/hunt.png',
    'type': 'adventure',
    'victory': '3',
    'cost': '4',
    'amount': 1
},

{
    'title': 'El Gran Consejo',
    'text': `+2 :Accion:. Antes del final de tu turno, gira 4 cartas de suministro cara abajo.
    Estas cartas están fuera de juego. Restauralas en cualquier momento en tu próximo turno.`,
    'img': 'structures/grand-council.png',
    'type': 'structure',
    'victory': '5',
    'cost': '5',
    'amount': 1,

},

{
    'title': 'Turba Enfurecida',
    'text': `+2 :Coin:.<br>
    Si esta carta está en tu Alijo, y compras <br>una carta de coste 1: +1 :Accion:.
    `,
    'flavor': 'Un rugido unido sacude los cimientos de la ciudad.',
    'img': 'attacks/angry-mob.png',
    'type': 'attack',
    'victory': '2',
    'cost': '2',
    'amount': 1,
    'fist': true,
},

{
    'title': 'Recaudador de Impuestos',
    'text': `+1 :Coin:, +1 :Card: :or: +1 :Coin: por cada Estructura en Alijos enemigos, hasta un máximo de 4 monedas.`,
    'img': 'adventures/tax-collector.png',
    'type': 'adventure',
    'victory': '2',
    'cost': '2',
    'amount': 1,
},


{
    'title': 'Cala Oculta',
    'text': `Voltee 1 tarjeta de suministros boca abajo. Esta carta está fuera del juego. Restaurarla en cualquier momento en tu próximo turno.
     +1 :Coin: para cada tipo de carta diferente en el suministro.`,
    'img': 'structures/hidden-cove.png',
    'type': 'structure',
    'victory': '2',
    'cost': '3',
    'amount': 1,
},

{
    'title': 'Loro Astuto',
    'text': `+1 :Accion:, +1 :Reload:.<br>Si esta carta está en tu Alijo y compras una carta: Pon la carta comprada en tu mano.`,
    'img': 'adventures/coco-alternate.png',
    'type': 'adventure',
    'victory': '1',
    'cost': '1',
    'amount': 1,
    'fist': true,
},

]