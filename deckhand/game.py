data = """market	citadel	exploration	lost expedition	shipyard	31
smuggler	citadel	smuggler	wind in sails	citadel	32
exploration	market	market	skull island	lost expedition	24
treasure hunt	haunted	quick shot	haunted	quick shot	27
merfolk	market	smuggler	citadel	citadel	28
exploration	tavern	treasure hunt	hideout	smuggler	26
haggling	citadel	lost expedition	merfolk	exploration	29
smuggler	smuggler	shipyard	haggling	shipyard	31
merfolk	citadel	exploration	voodoo	extravagance	28
walk the plank	haunted	voodoo	lost expedition	leviathan	27
walk the plank	lost expedition	shipyard	market	citadel	30
haunted	quick shot	citadel	voodoo	quick shot	30
haunted	wedding	crooked	leviathan	merfolk	30
whirlpool	exploration	haggling	lost expedition	treasure hunt	19
quick shot	hideout	citadel	haunted	voodoo	25
exploration	extravagance	market	crooked	exploration	27
exploration	leviathan	quick shot	haggling	market	27
crooked	market	merfolk	lost expedition	wedding	18
exploration	totem	whirlpool	going ape	quick shot	26
wedding	tavern	citadel	voodoo	haggling	21
quick shot	market	exploration	merfolk	wedding	24
smuggler	crooked	market	citadel	merfolk	23
haggling	merfolk	lost expedition	wedding	whirlpool	22
treasure hunt	going ape	lost expedition	market	citadel	27
exploration	wedding	kraken	exploration	exploration	24
haunted	quick shot	skull island	haunted	citadel	29
lost expedition	market	skull island	quick shot	wedding	21
exploration	merfolk	market	shipyard	smuggler	27
market	citadel	haunted	walk the plank	skull island	27
market	shipyard	crooked	citadel	crooked	24
crooked	whirlpool	market	market	treasure hunt	27
market	totem	haggling	quick shot	crooked	24
market	totem	hideout	market	extravagance	27
going ape	haunted	totem	citadel	shipyard	27
going ape	haunted	treasure hunt	skull island	citadel	27
haunted	haunted	citadel	merfolk	citadel	27
quick shot	market	haggling	merfolk	voodoo	25
market	tavern	citadel	quick shot	hideout	22
lost expedition	shipyard	shipyard	totem	wedding	17
totem	lost expedition	quick shot	going ape	tavern	22
haunted	Going Ape	Walk the plank	skull island	smuggler	30
Treasure hunt	Adventure	Wind in Sails	lost expedition	adventure	28
walk the plank	haunted	skull island	quick shot	smuggler	29
wind in sails	smuggler	haggling	exploration	tavern	25
hideout	treasure hunt	walk the plank	extravagance	lost expedition	23
quick shot	citadel	voodoo	skull island	kraken	27"""


lines = []
for line in data.split("\n"):
    cards = line.split('	')
    cleaned = []
    for el in cards:
        cleaned.append(el.lower())

    lines.append(cleaned)

scores = {}
occurrences = {}

def createKeys(card):
    if card not in scores:
        scores[card] = 0
    if card not in occurrences:
        occurrences[card] = 0

def score(card, level, final_score):
    createKeys(card)
    participation = 3 + level # 4, 5, 6, 7, 8
    scores[card] += final_score / float(participation)
    occurrences[card] += 1 / float(participation)

for line in lines:
    final = int(line[5])
    score(line[0], 1, final)
    score(line[1], 2, final)
    score(line[2], 3, final)
    score(line[3], 4, final)
    score(line[4], 5, final)

final_content = []

for name, score in scores.items():
    _score = round(score / occurrences[name], 1)
    final_content.append({"name": name, "occurrences": round(occurrences[name], 1), "score": _score })

final_content = sorted(final_content, key=lambda d: -d['score'])

for content in final_content:
    print(content)