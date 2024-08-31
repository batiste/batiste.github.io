# pylint: disable-all
import random
import json
from typing import List, Dict

# Sample card data in JSON format
cards_json = """
[
    {
        "title": "Deep Sea Horror",
        "coin": 3,
        "discard": ["s"],
        "cost": ["s", "e", "cs", "cs"],
        "img": "cards/deep-sea-horror.png",
        "extra": ["vp-2"],
        "production": ["s"]
    },
    {
        "title": "Giant Crab",
        "coin": 3,
        "discard": ["p"],
        "cost": ["g", "s", "c"],
        "img": "cards/crab.png",
        "extra": ["vp-4"],
        "production": ["discard-1", "produce", "p"]
    },
    {
        "title": "Skeleton Crew",
        "discard": ["s"],
        "cost": ["s", "h", "c"],
        "img": "cards/skeleton-crew.png",
        "extra": ["vp-2"],
        "production": ["s"]
    }
]
"""

# Load card data from JSON
cards = json.loads(cards_json)

class Card:
    def __init__(self, title: str, coin: int, discard: List[str], cost: List[str], img: str, extra: List[str], production: List[str]):
        self.title = title
        self.coin = coin
        self.discard = discard
        self.cost = cost
        self.img = img
        self.extra = extra
        self.production = production

### Resources available
class ResourceSimple():
    def __init__(self, values: List[str]):
        self.values = values
        self.discard_cost = 0

    def match(self, resource):
        return self.values[0] == resource

    def consume(self, holding_area):
        pass

class ResourceOr():
    def __init__(self, values: List[str]):
        self.values = values
        self.discard_cost = 0

    def match(self, resource):
        return self.values[0] == resource or self.values[2] == resource

    def consume(self, holding_area):
        pass


class ResourceDiscard():
    def __init__(self, values: List[str]):
        self.values = values
        self.discard_cost = 1

    def match(self, resource):
        if self.values[2] == resource:
            return DiscardAny1Cost(resource)

    def consume(self, holding_area):
        holding_area.pop()
        

class CoinDiscard():
    def __init__(self):
        self.discard_cost = 1

    def match(self, resource):
        if resource in ['cs', 'c']:
            return DiscardAny1Cost(resource)

    def sufficient(self, holding_area):
        return len(holding_area) > 0

    def consume(self, holding_area):
        # AI choice
        holding_area.pop()


class AnyFor3Discard():
    def __init__(self, values: List[str]):
        self.values = values
        self.discard_cost = 3

    def match(self, resource):
        return Discard3Cost(resource)

    def sufficient(self, holding_area):
        return len(holding_area) > 2

    def consume(self, holding_area):
        # AI choice
        holding_area.pop()
        holding_area.pop()
        holding_area.pop()

class TwoMatchingDiscard():
    def __init__(self, values: List[str]):
        self.values = values
        self.discard_cost = 2

    def match(self, resource):
        return Discard3Cost(resource)

    def sufficient(self, holding_area):
        return len(holding_area) > 2

    def consume(self, holding_area):
        # AI choice
        holding_area.pop()
        holding_area.pop()
        holding_area.pop()


class Deck:
    def __init__(self, cards: List[Card]):
        self.cards = cards
        self.shuffle_deck()

    def shuffle_deck(self):
        random.shuffle(self.cards)

    def deal(self, num_cards: int) -> List[Card]:
        hand = self.cards[:num_cards]
        self.cards = self.cards[num_cards:]
        return hand

    def add_to_discard(self, discard_pile: List[Card], cards: List[Card]):
        discard_pile.extend(cards)

    def reshuffle_discard_into_deck(self, discard_pile: List[Card]):
        self.cards.extend(discard_pile)
        self.shuffle_deck()
        discard_pile.clear()

class Player:
    def __init__(self, name: str):
        self.name = name
        self.hand = []
        self.holding_area = []
        self.production_line = []
        self.victory_points = 0
        self.free_resources = []
        self.or_resources = []
        self.discard_resources = [CoinDiscard()]

    def draw_hand(self, deck: Deck, num_cards: int):
        self.hand = deck.deal(num_cards)

    def select_card(self, index: int):
        card = self.hand.pop(index)
        self.holding_area.append(card)

    def pass_hand(self, other_player):
        other_player.hand, self.hand = self.hand, other_player.hand

    def get_pay_cost(self, cost: List[str]) -> bool:
        used_resource = []
        discard_costs = []
        for resource in cost:
            found = False
            for free_resource in self.free_resources:
                if free_resource.match(resource):
                    used_resource.append(free_resource)
                    found = True
            if found:
                continue
            for or_resource in self.or_resources:
                if or_resource.match(resource):
                    used_resource.append(or_resource)
                    found = True
                    break
            if found:
                continue
            for discard_resource in self.discard_resources:
                discard_cost = discard_resource.match(resource)
                if discard_cost:
                    used_resource.append(discard_resource)
                    discard_costs.append(cost)
                    found = True
                    break
            if found:
                continue
    
        if len(used_resource) == len(cost):
            return used_resource, discard_costs

        return None

    def can_pay_cost(card):
        used_resource, discard_costs = self.get_pay_cost(card.cost)
        if not used_resource:
            return False

        cards_to_discard = []
        holding_area = self.holding_area[:]
        if discard_costs:
            for discard_cost in discard_costs:
                card = discard_cost.discard(holding_area)
                if card:
                    cards_to_discard.append(card)
                else:
                    return False
            return cards_to_discard

        return []
        

    def build_card(self, card: Card):
        if self.can_pay_cost(card.cost):
            self.production_line.append(card)
            self.holding_area.remove(card)
            self.register_resource(card)

    def register_resource(self, card: Card):
        if len(card.production) == 1:
            self.free_resources.append(ResourceSimple(card.production))
        if len(card.production) == 3 and card.production[1] == 'or':
            self.free_resources.append(ResourceOr(card.production))
        if len(card.production) == 3 and card.production[1] == 'discard':
            self.discard_resources.append(ResourceDiscard(card.production), 1)
                

# Convert JSON data to Card objects
card_objects = [Card(**card) for card in cards]

# Initialize the deck with the card objects
deck = Deck(card_objects)

# Example usage
players = [Player(f"Player {i+1}") for i in range(3)]  # Creating 3 players

# Deal initial hands
for player in players:
    player.draw_hand(deck, 6)

# Draft Phase Function
def draft_phase(players: List[Player]):
    for _ in range(6):  # 6 cards to draft
        for player in players:
            # Simulate player selecting the first card in their hand
            player.select_card(0)
        
        # Pass hands to the left
        temp_hand = players[0].hand
        for i in range(len(players) - 1):
            players[i].hand = players[i + 1].hand
        players[-1].hand = temp_hand

# Execute the draft phase
draft_phase(players)

# Building Phase Function
def building_phase(players: List[Player]):
    for player in players:
        first_card_built = True
        for card in player.holding_area[:]:  # Iterate over a copy of the holding area
            if player.can_pay_cost(card.cost):
                player.build_card(card)
                first_card_built = False
            else:
                print(f"{player.name} cannot build {card.title} due to insufficient resources.")
        
        # After attempting to build all cards, manage resource production
        for card in player.production_line:
            player.produce_resources(card)

# Execute the building phase
building_phase(players)

# Display production line and resources for each player after the building phase
for player in players:
    print(f"{player.name}'s production line:")
    for card in player.production_line:
        print(f"- {card.title} (VP: {player.victory_points})")