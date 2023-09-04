
import random

compo = { "attack": 20, "structure": 18, "adventure": 19 }

deck = []

for a in range(20):
    deck.append("at")

for s in range(17):
    deck.append("st")

deck.append("tot")

for s in range(19):
    deck.append("ad")


sums = {"coins": 0, "cards": 0, "actions": 0}


for t in range(1000):
    a = random.choice(deck)
    b = random.choice(deck)
    c = random.choice(deck)
    if a == "at" or a == "tot":
        sums["coins"] += 1
    if b == "at" or b == "tot":
        sums["coins"] += 1
    if c == "at" or c == "tot":
        sums["coins"] += 1
    if a == "ad" or a == "tot":
        sums["cards"] += 1
    if b == "ad" or b == "tot":
        sums["cards"] += 1
    if c == "ad" or c == "tot":
        sums["cards"] += 1

    if a == "st" or a == "tot" or b == "st" or b == "tot" or c == "st" or c == "tot":
        sums["actions"] += 1


print("Fortune Teller v2")
print(sums['coins'] / 1000., sums['cards'] / 1000., sums['actions'] / 1000.)


sums = {"coins": 0, "cards": 0, "actions": 0}

for t in range(1000):
    a = random.choice(deck)
    b = random.choice(deck)
    if a == "at" or a == "tot":
        sums["coins"] += 1
    if b == "at" or b == "tot":
        sums["coins"] += 1
    if a == "ad" or a == "tot":
        sums["cards"] += 1
    if b == "ad" or b == "tot":
        sums["cards"] += 1

    if a == "st" or a == "tot":
        sums["actions"] += 1
    if b == "st" or b == "tot":
        sums["actions"] += 1


print("Fortune Teller v1")
print(sums['coins'] / 1000., sums['cards'] / 1000., sums['actions'] / 1000.)