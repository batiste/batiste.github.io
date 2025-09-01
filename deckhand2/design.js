
document.addEventListener('DOMContentLoaded', function() {
    // Load the cards.en.js script after the DOM is ready
    var script = document.createElement('script');
    script.src = './cards.en.js?v=' + new Date().getTime();
    script.onload = function() {
        console.log('cards.en.js loaded');
    };
    document.head.appendChild(script);
});

var i = 1;
var cards_total = "";
var res = (t, cls) => `
    <div class="resource ${cls}">
        <img src="img/${t}.png">
    </div>
    `

var get_res = (r) => {
    if (r == "p") {
        return res("parrot")
    }
    if (r == "c") {
        return res("coin-2")
    }
    if (r == "cs") {
        return res("silver-2")
    }
    if (r == "g") {
        return res("gun", "gun")
    }
    if (r == "r") {
        return res("rum")
    }
    if (r == "e") {
        return res("gem-2")
    }
    if (r == "m") {
        return res("purse")
    }
    if (r == "s") {
        return res("skull-2" , "skull")
    }
    if (r == "h") {
        return res("helm", "helm")
    }
    // if (r == "gem") {
    //     return res("gem-2")
    // }
    if (r == "produce") {
        return res("arrow", "arrow")
    }
    if (r == "discard-1") {
        return res("discard-1", "discard-1")
    }
    if (r.startsWith('discard-')) {
        return res(r, "discard-res")
    }
    if (r == "x") {
        return `<div class="mult" style="font-weight: bold; color: #fff">X</div>`
    }
    if (r == "t") {
        return res("purse")
    }
    if (r == "or") {
        return `<b style="font-size:18px;color:#000c;margin:1px">|</b>`
    } else {
        return res(r)
    }
}

var stats_costs = {};
var stats_discard = {};
var stats_vp = {};
var double_cost = {};
var single_cost = {};
var production_type = ['r', 's', 'g', 'p', 'h', 'c', 'e', 'cs']
var stats_production = {}
var stats_production_weighted = {}
var banner_stats = {}
var doubles = {}
var triples = {}
var cars_1_silver = 0;
var cars_2_silver = 0;
var silver_affinity = {}

var icon = (t) => {
    return `<img src="img/${t}.png" class="${t} icon">`
}

if (!localStorage.getItem("highQualityImages")) {
    // change the card image from cards/<filename>.ext to thumb/<filename>.jpg
    cards.forEach((c) => {
        c.img = c.img.replace("cards/", "thumb/").replace(/\.[^/.]+$/, ".jpg");
    });
} else {
    document.getElementById('use-high-quality-images').checked = true;
}

document.getElementById('use-high-quality-images').addEventListener('click', function(e) {
    console.log(e.target.checked)
    e.preventDefault()
    if(e.target.checked) {
        localStorage.setItem("highQualityImages", true);
        location.reload();
    } else {
        localStorage.removeItem("highQualityImages");
        location.reload();
    }
});

// expand the cards
cards.forEach((c) => {
    // transform gold to silver (part of simplification)
    // c.cost = c.cost.map((cost) => {
    //     if (cost == 'c') {
    //         return 'cs'
    //     }
    //     return cost
    // })
     if (c.copies) {
         var clone = JSON.parse(JSON.stringify(c));
         clone.copies = null
         clone.is_clone = true;
         for(let i=2; i<=c.copies; i++) {
             // clone.hide = true;
             cards.push(clone)
         }
    }
});

var virtual_cost = {
    "c": 1.2,
    "cs": 0.9,
    "g": 1.5, // justification: easier to get
    "p": 1.5,
    "r": 1.5,
    "s": 2.2, // justification: you can always discard 1 cards to get it
    "h": 2.2,
    "e": 2.2,
    "gun-banner": 1.1,
    "parrot-banner": 1.1,
    "rum-banner": 1.1,
    "helm-banner": 2,
    "gem-banner": 2,
    "skull-banner": 2,
    "coin-banner":1.3,
}

var affinity_mitigation = {
    'h': ['r', 'p'],
    'e': ['r', 'g'],
    's': ['g', 'p'],
}

// how many of those symbols are expected to exist in the end
// game on a board, without pushing it too much
var distribution_end_game = {
    "gun-banner": 2.2,
    "parrot-banner": 2.2,
    "rum-banner": 2.2,
    "skull-banner": 1.5,
    "helm-banner": 1.5,
    "gem-banner": 1.5,
    "coin-banner": 1.5,
    'basic-banner': 3.3,
    'tentacle': 1.5
}

function removeItem(array, item) {
  var i = array.length;

  while (i--) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
}

var get_v_cost = (s) => {
    return virtual_cost[s] || 0;
}

var get_mitigation_cost = (co, l) => {
    var m = affinity_mitigation[co];
    var rebate = 0;
    if(m) {
        m.forEach((c) => {
            if (l.includes(c)) {
                removeItem(l, c)
                rebate -= 0.6;
            }
        })
    }
    return rebate;
}

var virtual_value = {
    // "c": 4,
    "cs": 2.6,
    "g": 2,
    "p": 2,
    "r": 2,
    "s": 3,
    "h": 3,
    "e": 3,
    "t": 0.5,
    "any": 8,
}

var evaluate_production = (c) => {
    if (!c.production) {
        return 0;
    }
    var bits = c.production;
    if (bits.length == 1) {
        var v = virtual_value[bits[0]]
        // remove value if it produce the same value it requires.
        if (bits[0] != 'cs') {
            c.cost.forEach(cost => {
                if (cost == bits[0]) {
                    v = v - 0.35;
                }
            })
        }
        return v
    }
    if (bits.length == 3) {
        if (bits[1] == "or") {
            // very minus here because of the distribution bonus
            return virtual_value[bits[0]] + virtual_value[bits[2]] - 0.1;
        }
        if (bits[1] == "produce") {
            return virtual_value[bits[2]] / 5.0;
        }
    }
    if (bits.length == 2) {
        if (bits[0] == 'cs') {
            return 1.8 * virtual_value[bits[0]]
        }
        // double production of the same value
        return 1.6 * virtual_value[bits[0]]
    }
    if (bits.length == 5) {
        if (bits[1] == "produce") {
            return (virtual_value[bits[2]] + virtual_value[bits[4]]) / 8.0
        }
    }
    return 0
}

var round = (n) => Math.round((100.0 * n)) / 100.0;

var get_v_value = (c) => {

    // the card itself has a value of 1
    var v_cost = 1;
    var duplicates = {};

    if (c.cost) {
        var copy = c.cost.slice()
        c.cost.forEach((co) => {
            if(duplicates[co]) {
                if (['cs', 'c'].includes(co)) {
                    v_cost += 0.15 * duplicates[co];
                }
                if (['r', 'p', 'g'].includes(co)) {
                    v_cost += 0.25 * duplicates[co];
                }
                if (['s', 'e', 'h'].includes(co)) {
                    v_cost += 0.3 * duplicates[co];
                }
                if (co.endsWith('banner')) {
                    v_cost += 0.3 * duplicates[co];
                }
            }
            v_cost += get_v_cost(co)
            v_cost += get_mitigation_cost(co, copy)
            duplicates[co] = 1 + (duplicates[co] || 0);
        })

    }
    c.v_cost = Math.round(10.0 * v_cost) / 10.0;

    var v = 0;

    // if (c.discard && ['h', 'e', 's'].includes(c.discard[0])) {
    //     v += 0.1;
    // }

    if(c.extra && c.extra.length) {
        var nb_bolt = 0;
        if (c.extra[1] != 'produce') {
            c.extra.forEach(e => {
                if (e == "bolt") {
                    v += 0.4 + nb_bolt;
                    nb_bolt += 0.3;
                }
                if (e == "crate") {
                    v += 0.3;
                }
                if (e == "telescope") {
                    v += 0.4;
                }
                if (e == "hook") {
                    v += 0.7;
                }
                if (e == "battle") {
                    v += 1;
                }
                if (e == "tentacle") {
                    v += 2 / c.v_cost;
                }
                if (e == "compass") {
                    v += 6 / c.v_cost;
                }
                if (e == "3-choices") {
                    v += 3;
                }
                if (e == "draw-1") {
                    v += 2;
                }
                if (e == "draw-2") {
                    v += 4;
                }
            })
        }
        if (c.extra[0].startsWith('vp-')) {
            var vp = parseInt(c.extra[0].split('-')[1]);
            if(c.extra.length == 3 && c.extra[1] == 'x') {
                var banner_type = c.extra[2];
                v += vp * distribution_end_game[banner_type]
                
                if (c.banners) {
                    c.banners.forEach(banner_t => {
                        if (banner_type == banner_t) {
                            v += vp;
                        }
                    })
                }
            } else {
                v += vp * 1.0;
            }
        }
        if (c.extra.length == 3 && c.extra[1] == 'produce') {
            var banner_type = c.extra[0];
            var n = distribution_end_game[banner_type]
            if (c.extra[2] == 'draw-1') {
                v += (n * 2);
            }
            if (c.extra[2] == '3-choices') {
                v += (n * 3);
            }
            if (c.extra[2] == 'telescope') {
                v += n * 0.3;
            }
        }
    }

    if(c.banners) {
        c.banners.forEach(b => {
            if (b == 'basic-banner' || b == 'coin-banner') {
                v += 0.50
            } else if (b == 'parrot-banner' || b == 'gun-banner' || b == 'rum-banner') {
                v += 0.85
            } else {
                v += 1
            }
        }) 
    }

    if(c.block) {
        v += 0.5
    }

    if (c.v_cost > 7) {
        v = v + (evaluate_production(c) / (c.v_cost / 8.0)); 
    } else {
        v = v + evaluate_production(c);
    }
    c.v_value = round(v)
    c.v_ratio = round(v / c.v_cost)
}


cards.forEach((c) => {

    get_v_value(c);
    if (c.type == 'supremacy') {
        return;
    }

    if (c.banners) {
        c.banners.forEach(b => {
            banner_stats[b] = 1 + (banner_stats[b] || 0);
        })
    }

    var s = {}
    var has_silver = false;
    c.cost.forEach((co) => {
        stats_costs[co] = 1 + (stats_costs[co] || 0);
        s[co] = 1 + (s[co] || 0);
        if (co == 'cs') {
            has_silver = true;
        }
    });
    c.cost.forEach((co) => {
        silver_affinity[co] = 1 +  (silver_affinity[co] || 0);
    });

    Object.entries(s).forEach(([key, value]) => {
        if (!double_cost[key]) {
            double_cost[key] = {}
        }
        double_cost[key][value] = 1 + (double_cost[key][value] || 0);
        // } else {
        //     single_cost[`${key}_${value}`] = 1 + (single_cost[`${key}_${value}`] || 0);
        // }
    });


    if (c.extra) {
        c.extra.forEach(g => {
            stats_vp[g] = 1 + (stats_vp[g] || 0);
        })
    }
    if (c.production) {
        var add = 1; 
        if (c.production.includes('or')) {
            add = 0.75;
        }
        c.production.forEach(t => {
            stats_discard[t] = 1 + (stats_discard[t] || 0);
            if (!['or'].includes(t)) {
                stats_production[t] = add + (stats_production[t] || 0)
                stats_production_weighted[t] = (add / c.v_cost) + (stats_production_weighted[t] || 0)
            }
        })
    }
});

sort_cost = (a, b) => {
    order = {'cs': 0, 'c': 1, 'p': 2, 'g': 3, 'r':4, 'e': 5, 's': 6,  'h': 7}
    return order[b] - order[a]
}

sort_banners = (a, b) => {
    order = {'basic-banner': 0, 'rum-banner': 1, 'parrot-banner': 2, 'gun-banner': 3, 'gem-banner': 5, 'skull-banner': 6,  'helm-banner': 7}
    return order[b] - order[a]
}


// Extract and sort v_ratio values
const sortedRatios = [...cards].sort((a, b) => a.v_ratio - b.v_ratio);

const count = cards.length;
const threshold = Math.ceil(count * 0.1); // 10% of the total count

// Get threshold values
const bottomThreshold = sortedRatios[threshold - 1]?.v_ratio;
const topThreshold = sortedRatios[count - threshold]?.v_ratio;

// Mark cards
cards.forEach(card => {
    card.bottom_ratio = card.v_ratio <= bottomThreshold;
    card.top_ratio = card.v_ratio >= topThreshold;
});


cards.forEach((c) => {

    var cost = "";
    // nb_cards += c.copies || 1;
    var v_cost = 0

    var dis = ""
    // if (c.discard) {
    //     c.discard.forEach(d => {
    //         dis += get_res(d)
    //     })
    //     dis = `<span class="discard">${dis}</span>`
    // }

    if (c.banners) {
        c.banners.sort(sort_banners)
    }

    if (c.cost) {
        c.cost.sort(sort_cost)
        if (c.type == 'supremacy') {
            c.cost.sort(sort_banners)
        }

        if(c.cost[c.cost.length-1] == 'cs') {
            cars_1_silver += 1;
            if(c.cost[c.cost.length-2] == 'cs') {
                cars_2_silver += 1;
            }
        }

        c.cost.forEach((co) => {
            cost += get_res(co)
        })
        if (cost) {
            cost = `<div class="price-tag"><div class="price-tag-top"></div><div class="price-tag-bottom">${cost}</div>${dis}</div>`
        }
    }

    var banners = ''
    if (c.banners) {
        c.banners.forEach(d => {
            if (d.endsWith('banner')) {
                banners += `<img class="banner ${d}" src="img/${d}.png">`
            }
        })
        if (banners) {
            banners = `<div class="banners">${banners}</div>`
        }
    }

    var extra = ''
    if (c.extra) {
        c.extra.forEach(c => {
            if (c == "bolt") {
                extra += `<img class="res" src="img/bolt.png">`
            }
            if (c.startsWith('vp-')) {
                extra += `<img class="vp ${c}" src="img/${c}.png">`
            }
            if (c == "telescope") {
                extra += `<img class="res telescope" src="img/telescope.png">`
            }
            if (c == "tentacle") {
                extra += `<img class="res tentacle" src="img/tentacles.png">`
            }
            if (c.endsWith('banner')) {
                extra += `<img class="banner-icon"  src="img/${c}.png">`
            }
            if (c == "compass") {
                extra += `<img class="compass" src="img/compass-2.png">`
            }
            if (c.startsWith('draw-')) {
                extra += `<img class="${c}" src="img/${c}.png">`
            }
            if (c == "3-choices") {
                extra += `<img class="grab-3" src="img/3-choices.png">`
            }
            if (c == "x") {
                extra += `<img class="cross" src="img/cross.png">`
            }
            if (c == "produce") {
                extra += `<img class="res arrow" src="img/arrow.png">`
            }
            if (c == "hook") {
                extra += `<img class="res hook" src="img/hook-2.png">`
            }
            if (c == "battle") {
                extra += `<img class="res battle" src="img/battle.png">`
            }
            if (c == "t") {
                extra += `<img class="res hook" src="img/tentacles.png">`
            }
        })
        if (extra) {
            extra = `<div class="extra">${(extra || '')}</div>`
        }
    }

    if (extra) {
        extra = `<div class="right">${(extra || '')}</div>`
    }

    var build = "";
    var production = ""
    if (c.production && c.production.length) {
        c.production.forEach(p => {
            production += get_res(p)
        })
        production = `<div class="production">${production}</div>`
    }
    build = `<div class="type line">
            ${production}
            ${banners}
            ${extra}
        </div>`


    var title_class = "";
    var split_title = c.title;
    var words = split_title.split(" ")

    if (words.length > 1) {
        split_title = "<div class='title-container'>"
        words.forEach(w => {
            var cls = "word"
            if (w.length > 5) {
                cls = "long-word"
            }
            split_title += `<span class='${cls}'>` + w + "</span> "
        })
        split_title += "</div>"
    } else {
        split_title = "<div class='title-container single-word'><span>" + c.title + "</span></div>"
    }

    if(c.top_ratio > 0.75) {
        c.v_ratio = `<b class="op">${c.v_ratio}</b>`
    }
    if(c.bottom_ratio) {
        c.v_ratio = `<b class="up">${c.v_ratio}</b>`
    }

    var ship = ''
    if (c.type == "ship") {
        ship = `<div class="ship line"><div>${c.holding}<img class="crate" src="img/crate.png"></div></div>`
    }

    var top = ''
    var title = ''
    var l = -130 + 5.5 * c.title.length;

    if(c.type == 'supremacy') {
        var cos = ''
        c.cost.forEach(c => {
            cos += res(c)
        })

        top = `
        <div class="supremacy-cost"><div class="supremacy-bg">${cos}</div></div>
        `

        title = `<span class="title ${title_class}" style="right:${l}px">${split_title}</span>`
    } else {
        top = `${cost}`
        title = `<span class="title ${title_class}" style="right:${l}px">${split_title}</span>`
    }

    function createCurvedTitle(title, width = 400, height = 100, baseCurve = 40) {
        const startX = 20;
        const endX = width - 20;
        const midX = (startX + endX) / 2;
        const baseY = height / 2;

        // Estimate curve depth: shorter titles = deeper curve
        const maxTitleLength = 40; // tweak this depending on your font size
        const lengthRatio = 0 // Math.min(title.length / maxTitleLength, 1);
        let curveDepth = baseCurve;
        // if (title.length < 12) {
        //     curveDepth = baseCurve * 1.1;
        // }
        // if (title.length > 16) {
        //     curveDepth = baseCurve * 0.9;
        // }
        // if (title.length > 20) {
        //     curveDepth = baseCurve * 0.8;
        // }

        const controlY = baseY + curveDepth;

        return `
            <svg class="svg-curve" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <path id="curve-${i}" d="M${startX},${baseY} Q${midX},${controlY} ${endX},${baseY}" fill="transparent" />
            <text font-family="'IM Fell English', cursive" font-size="14.5" fill="#100">
                <textPath href="#curve-${i}" startOffset="50%" text-anchor="middle">
                ${title}
                </textPath>
            </text>
            </svg>`;
    }

    var svgCurvedTitle = createCurvedTitle(c.title, 200, 60, 14);
    if (c.type == 'supremacy') {
        svgCurvedTitle = createCurvedTitle(c.title, 200, 60, 10);
    }

    var ch = ''

    var copies = "";
    if (c.copies) {
        copies = ` | ${c.copies} copies`;
    }

    var block = "";
    if (!c.sign) {
        c.css += " no-sign";
    }

    var card_template = `
    <div>
        <div class="card ${c.css || ""} type-${c.type || ""} ${block}" title="${c.title}" id="card-${i}">
            <div class="inner">
                
                ${top}

                <div class="bg">
                    <img src="${c.img}">
                </div>

                <div class="card-infos">#${i}</div>

                <div class="top">
                    ${build}
                </div>

                <div class="sign ${c.sign}"><div></div></div>
                
                <div class="mpc"></div>
                ${title}
                ${svgCurvedTitle}
            </div>
        </div>
        <button class="${ch}" onclick="downloadCardButton(this)">Download #${i} ${copies} </button><br>
        ${c.title} <span style="font-size:12px;color: #bbb;"> / ${c.img.split('/')[1]}</span><br>
        <span style="font-size: 11px; color: #ccc">cost: ${c.v_cost}, value: ${c.v_value}, ratio: ${c.v_ratio}</span><br>
        <label style="font-size: 11px; color: #ccc"><input type="checkbox" id="check-pdf-${i}" 
                onclick="changePrintSelection(this)" data-card-id="${i}">Part of print sheet</label>
    </div>
    `

    if (!c.hide) {
        cards_total += card_template;
    }
    c.id = i;
    i++;
})

document.getElementById('cards').innerHTML = cards_total;



// Adjust title after rendering
setTimeout(() => {
    cards.forEach((c) => {
        var t =  document.getElementById('card-'+c.id).querySelector('.title')
        var curve = document.getElementById('card-'+c.id).querySelector('.svg-curve')
        if (t.querySelector('div')) {
            var w = t.querySelector('div').clientWidth

            if (curve) {
                curve.style.right = (-70 + (w * 0.45)) + 'px'
            }

            if(c.type == 'supremacy') {
                t.style.left = (-170 + w) + 'px'
                curve.style.left = (-66 + (w * 0.43)) + 'px'
                curve.style.right = 'auto'
                curve.style.top = '38px'
                curve.style.rotate = '-1deg'
                // if (w > 80) {
                //     curve.style.rotate = '0deg'
                // }
            } else {
                t.style.rotate = '-2deg'
                curve.style.rotate = '1deg'
                if (w > 60) {
                    t.style.rotate = '-2deg'
                    curve.style.rotate = '0.5deg'
                }
                if (w > 70) {
                    t.style.rotate = '-2deg'
                    curve.style.rotate = '0.2deg'
                }
                if (w > 90) {
                    t.style.rotate = '-1.2deg'
                    curve.style.rotate = '0deg'
                }
                if (w > 100) {
                    t.style.rotate = '-1.2deg'
                    curve.style.rotate = '-0.5deg'
                }
                if (w > 110) {
                    t.style.rotate = '-1.2deg'
                    curve.style.rotate = '-1deg'
                }
                let right = -135;
                // if (w < 50) {
                //     right = right + 2;
                // }
                // if (w < 90) {
                //     right = right + 2;
                // }
                t.style.right = (right + w) + 'px'
            }
        }
    })
}, 1000)

var stats = document.getElementById('stats');

function cost_table_maker(double_cost) {
    var body = ''
    for (const [key, row] of Object.entries(double_cost)) {
        var row_html = ''
        for (const [multiple, value] of Object.entries(row)) {
            row_html += `<td>${value}</td>`
        }
        body += `<tr><td>${key}</td>${row_html}</tr>`
    }

    return `<table class="styled-table">
        <caption>Cost table</caption>
        <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th></tr>
        ${body}
        </table>`
}

function card_signatures_stats(cards) {
    var body = ''
    var signatures = {};
    scards = cards.filter(c => !c.is_clone);
    scards.forEach((c) => {
        if (c.sign) {
            if (!signatures[c.sign]) {
                signatures[c.sign] = 0;
            }
            signatures[c.sign] += 1;
        }
    })
    body += `<tr><th>Signature</th><th>Count</th></tr>`
    Object.entries(signatures).forEach(([key, value]) => {
        body += `<tr><td>${key}</td><td>${value}</td></tr>`
    })
    let total = 0;
    Object.entries(signatures).forEach(([key, value]) => {
        total += value;
    })
    body += `<tr><td>Total</td><td>${total} / ${scards.length} / ${((total / scards.length) * 100).toFixed(2)}%</td></tr>`

    return `<table class="styled-table">
        <caption>Card signatures</caption>
        ${body}
        </table>`
}

stats.innerHTML = cost_table_maker(double_cost) + card_signatures_stats(cards)


function all_effects_table(cards) {
    var body = ''
    var effects = {};
    cards.forEach((c) => {
        // exclude vp-*
        if (c.extra) {
            c.extra.forEach((e) => {
                if (e.startsWith('vp-') || e.endsWith('banner') || ['x', 'produce'].includes(e)) {
                    return 
                }
                if (!effects[e]) {
                    effects[e] = 0;
                }
                effects[e] += 1;
            })
        }
    })
    body += `<tr><th>Effect</th><th>Count</th></tr>`
    Object.entries(effects).forEach(([key, value]) => {
        body += `<tr><td>${key}</td><td>${value}</td></tr>`
    })
    let total = 0;
    Object.entries(effects).forEach(([key, value]) => {
        total += value;
    })

    return `<table class="styled-table">
        <caption>Card effects</caption>
        ${body}
        </table>`
}


document.getElementById('effect-stats').innerHTML = all_effects_table(cards)
  
console.log('stats_costs', stats_costs)
console.log('stats_discard', stats_discard)
console.log('stats_vp', stats_vp)
console.log('stats_production', stats_production)
console.log('stats_production_weighted (bigger is easier)', stats_production_weighted)
console.log('double_cost', double_cost)
console.log('single_cost', single_cost)
console.log('banner_stats', banner_stats)
console.log('cars_1_silver', cars_1_silver, 'cars_2_silver', cars_2_silver)
console.log('silver_affinity', silver_affinity)


var lang = 'en';
var format = 'png'
function updateFormat(e) {
    if (e.checked) {
        format = 'jpg'
    } else {
        format = 'png'
    }
}

var preparePrintClass = 'preparePrint';

function download(url, title) {
    var a = document.createElement('a')
    a.href=url
    a.download=title+"."+format;
    document.body.appendChild(a)
    a.click()
    a.remove()
}

function changePrintSelection(e) {
    cards.forEach((card) => {
        if(card.id == parseInt(e.dataset.cardId, 10)) {
            card['pdf'] = e.checked
        }
    })
}

var zoom = 3.118 * 2
document.getElementById('zoom').value = zoom
function updateZoom(e) {
    zoom = parseFloat(e.value)
}

function updateMask(e) {
    if (e.checked) {
        document.body.classList.add('work')
    } else {
        document.body.classList.remove('work')
    }
}

var mask = true;
function noMask(e) {
    if (e.checked) {
        document.body.classList.add('no-mask')
        mask = false;
    } else {
        document.body.classList.remove('no-mask')
        mask = true;
    }
}

function downloadCardButton(e) {
    downloadCard(e.parentNode.querySelector('.card'))
}

function downloadCard(card, cb) {
    createCardImage(card, (canvas) => {
        var title = card.title.toLowerCase().replace(/\s/g, '-')
        if (format=='png') {
            img = canvas.toDataURL();
        } else {
            img = canvas.toDataURL("image/jpeg", 0.9)
        }
        download(img, title);
        cb && cb(title);
    })
}

function downloadBookletFace(id) {
    createBookletImage(document.getElementById(id || 'face'))
}

function downloadBookletBack(id) {
    createBookletImage(document.getElementById(id || 'back'))
}

function createCardImage(card, cb) {

    card.classList.add(preparePrintClass)
    cls = ""
    if (lang) {
        cls = 'class="lang-fr"'
    }
    if (!mask) {
        cls = 'class="no-mask"'
    }

    var h = `
        <link href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Lobster+Two:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Pirata+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="2.css">
        <style>
            html, body {margin:0; padding:0; background-color: transparent;}
            .card {zoom: ${zoom}; float: none; position: initial; margin: 0;}
        </style>
        <div ${cls}>
            ${card.outerHTML}
        </div>`

    rasterizeHTML.drawHTML(h, null).then(function success(renderResult) {
        img = renderResult.image;
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        document.body.appendChild(canvas)
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0)
        card.classList.remove(preparePrintClass)
        canvas.parentNode.removeChild(canvas)
        cb && cb(canvas)
    }, function error(e) {
        console.log("Error on card", card.title, e)
    });
}

var toRender = 0;

function bindImage(element, card, cb) {
    if (card['canvas']) {
        return cb();
    }
    createCardImage(element, (canvas) => {
        card['canvas'] = canvas
        cb();
    })
}

function selectAll() { 
    for (i=0; i<cards.length; i++) {
        var card = cards[i];
        card.pdf = true;
        document.getElementById('check-pdf-'+card['id']).checked = true
    }
}

function downloadSelection(e) {
    e.disable = true;
    var previous = e.innerHTML
    toRender = 0;
    cards_to_render = {}
    queue = []
    rendering = {}

    e.innerHTML = 'Rendering..., please wait, it might take a while.'

    for (i=0; i<cards.length; i++) {
        var card = cards[i];
        if (card.pdf) {
            toRender = toRender + 1;
            queue.push(card)
        }
    }

    function render(card) {
        rendering[card.title] = card
        var e = document.getElementById('card-'+card['id'])
        downloadCard(e, () => {
            delete rendering[card.title];
            toRender = toRender - 1;
        })
    }

    var inter = setInterval(() => {
        if (queue.length > 0) {
            if (queue.length > 0 || Object.keys(rendering).length > 0) {
                c = queue.pop();
                render(c)
            }
            e.innerHTML = `Starting rendering of cards (${toRender}).`
            return
        }
        clearInterval(inter);
        e.innerHTML = 'Done!'
        setTimeout(() => {
            e.innerHTML = previous;
        }, 2000)
    }, 1000);
}
