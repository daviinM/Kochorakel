// Kochorakel 0.2.5 – kanonische Rezeptdaten.
// Diese Datei enthält alle Rezepte, Mengen, Schritte, Timer und Allergenangaben.

import { additionalRecipes025 } from "./recipes-0.2.5.js";

export const ingredientVocab = {
  "nudeln": {
    "label": "Nudeln",
    "cat": "grund",
    "buyPrice": 1.2,
    "usePrice": 0.6,
    "amount": 400,
    "unit": "g"
  },
  "reis": {
    "label": "Reis",
    "cat": "grund",
    "buyPrice": 2.2,
    "usePrice": 0.6,
    "amount": 300,
    "unit": "g"
  },
  "kartoffeln": {
    "label": "Kartoffeln",
    "cat": "grund",
    "buyPrice": 2.5,
    "usePrice": 1,
    "amount": 600,
    "unit": "g"
  },
  "mehl": {
    "label": "Mehl",
    "cat": "grund",
    "buyPrice": 0.89,
    "usePrice": 0.3,
    "amount": 250,
    "unit": "g"
  },
  "zucker": {
    "label": "Zucker",
    "cat": "grund",
    "buyPrice": 1,
    "usePrice": 0.2,
    "amount": 100,
    "unit": "g"
  },
  "toast": {
    "label": "Brot/Toast",
    "cat": "grund",
    "buyPrice": 1.79,
    "usePrice": 0.6,
    "amount": 6,
    "unit": "Scheiben"
  },
  "couscous": {
    "label": "Couscous",
    "cat": "grund",
    "buyPrice": 1.99,
    "usePrice": 0.7,
    "amount": 250,
    "unit": "g"
  },
  "tortilla": {
    "label": "Tortilla-Fladen",
    "cat": "grund",
    "buyPrice": 2.29,
    "usePrice": 1.2,
    "amount": 6,
    "unit": "Stück"
  },
  "gnocchi": {
    "label": "Gnocchi",
    "cat": "grund",
    "buyPrice": 1.99,
    "usePrice": 1.5,
    "amount": 500,
    "unit": "g"
  },
  "zwiebeln": {
    "label": "Zwiebeln",
    "cat": "vorrat",
    "buyPrice": 1.29,
    "usePrice": 0.25,
    "amount": 2,
    "unit": "Stück"
  },
  "knoblauch": {
    "label": "Knoblauch",
    "cat": "vorrat",
    "buyPrice": 0.79,
    "usePrice": 0.15,
    "amount": 2,
    "unit": "Zehen"
  },
  "olivenoel": {
    "label": "Olivenöl",
    "cat": "vorrat",
    "buyPrice": 4.99,
    "usePrice": 0.3,
    "amount": 3,
    "unit": "EL"
  },
  "bruehe": {
    "label": "Brühe",
    "cat": "vorrat",
    "buyPrice": 1.49,
    "usePrice": 0.4,
    "amount": 500,
    "unit": "ml"
  },
  "dosentomaten": {
    "label": "Dosentomaten",
    "cat": "vorrat",
    "buyPrice": 0.99,
    "usePrice": 0.9,
    "amount": 400,
    "unit": "g"
  },
  "kokosmilch": {
    "label": "Kokosmilch",
    "cat": "vorrat",
    "buyPrice": 1.49,
    "usePrice": 1.3,
    "amount": 400,
    "unit": "ml"
  },
  "sojasauce": {
    "label": "Sojasoße",
    "cat": "vorrat",
    "buyPrice": 2.49,
    "usePrice": 0.25,
    "amount": 3,
    "unit": "EL"
  },
  "pesto": {
    "label": "Pesto",
    "cat": "vorrat",
    "buyPrice": 2.29,
    "usePrice": 1.5,
    "amount": 100,
    "unit": "g"
  },
  "essig": {
    "label": "Essig",
    "cat": "vorrat",
    "buyPrice": 1.29,
    "usePrice": 0.15,
    "amount": 2,
    "unit": "EL"
  },
  "honig": {
    "label": "Honig",
    "cat": "vorrat",
    "buyPrice": 3.49,
    "usePrice": 0.4,
    "amount": 2,
    "unit": "EL"
  },
  "linsen": {
    "label": "Linsen",
    "cat": "vorrat",
    "buyPrice": 1.79,
    "usePrice": 0.9,
    "amount": 200,
    "unit": "g"
  },
  "kichererbsen": {
    "label": "Kichererbsen",
    "cat": "vorrat",
    "buyPrice": 0.99,
    "usePrice": 0.9,
    "amount": 400,
    "unit": "g"
  },
  "eier": {
    "label": "Eier",
    "cat": "milchprodukte",
    "buyPrice": 3.29,
    "usePrice": 0.7,
    "amount": 3,
    "unit": "Stück"
  },
  "milch": {
    "label": "Milch",
    "cat": "milchprodukte",
    "buyPrice": 1.19,
    "usePrice": 0.5,
    "amount": 250,
    "unit": "ml"
  },
  "sahne": {
    "label": "Sahne",
    "cat": "milchprodukte",
    "buyPrice": 1.19,
    "usePrice": 1,
    "amount": 200,
    "unit": "ml"
  },
  "butter": {
    "label": "Butter",
    "cat": "milchprodukte",
    "buyPrice": 2.29,
    "usePrice": 0.5,
    "amount": 30,
    "unit": "g"
  },
  "reibekaese": {
    "label": "Reibekäse",
    "cat": "milchprodukte",
    "buyPrice": 2.49,
    "usePrice": 1.8,
    "amount": 100,
    "unit": "g"
  },
  "joghurt": {
    "label": "Joghurt",
    "cat": "milchprodukte",
    "buyPrice": 1.29,
    "usePrice": 0.6,
    "amount": 200,
    "unit": "g"
  },
  "mozzarella": {
    "label": "Mozzarella",
    "cat": "milchprodukte",
    "buyPrice": 1.19,
    "usePrice": 1.19,
    "amount": 125,
    "unit": "g"
  },
  "feta": {
    "label": "Feta",
    "cat": "milchprodukte",
    "buyPrice": 2.49,
    "usePrice": 2,
    "amount": 150,
    "unit": "g"
  },
  "speck": {
    "label": "Speck",
    "cat": "fleisch",
    "buyPrice": 2.29,
    "usePrice": 1.8,
    "amount": 100,
    "unit": "g"
  },
  "hackfleisch": {
    "label": "Hackfleisch",
    "cat": "fleisch",
    "buyPrice": 4.49,
    "usePrice": 4,
    "amount": 400,
    "unit": "g"
  },
  "haehnchen": {
    "label": "Hähnchenbrust",
    "cat": "fleisch",
    "buyPrice": 5.99,
    "usePrice": 5.5,
    "amount": 400,
    "unit": "g"
  },
  "rindfleisch": {
    "label": "Rindfleisch",
    "cat": "fleisch",
    "buyPrice": 8.99,
    "usePrice": 8,
    "amount": 500,
    "unit": "g"
  },
  "schweinefleisch": {
    "label": "Schweinefleisch",
    "cat": "fleisch",
    "buyPrice": 5.99,
    "usePrice": 5.5,
    "amount": 400,
    "unit": "g"
  },
  "schinken": {
    "label": "Schinken",
    "cat": "fleisch",
    "buyPrice": 2.29,
    "usePrice": 1.8,
    "amount": 100,
    "unit": "g"
  },
  "wurst": {
    "label": "Wurst",
    "cat": "fleisch",
    "buyPrice": 2.99,
    "usePrice": 2.5,
    "amount": 300,
    "unit": "g"
  },
  "fisch": {
    "label": "Fisch",
    "cat": "fleisch",
    "buyPrice": 6.99,
    "usePrice": 6.5,
    "amount": 400,
    "unit": "g"
  },
  "tofu": {
    "label": "Tofu",
    "cat": "fleisch",
    "buyPrice": 1.99,
    "usePrice": 1.8,
    "amount": 300,
    "unit": "g"
  },
  "tomaten": {
    "label": "Tomaten",
    "cat": "gemuese",
    "buyPrice": 2.49,
    "usePrice": 1.5,
    "amount": 4,
    "unit": "Stück"
  },
  "paprika": {
    "label": "Paprika",
    "cat": "gemuese",
    "buyPrice": 1.99,
    "usePrice": 1.3,
    "amount": 2,
    "unit": "Stück"
  },
  "zucchini": {
    "label": "Zucchini",
    "cat": "gemuese",
    "buyPrice": 1.29,
    "usePrice": 1.1,
    "amount": 1,
    "unit": "Stück"
  },
  "karotten": {
    "label": "Karotten",
    "cat": "gemuese",
    "buyPrice": 1.19,
    "usePrice": 0.5,
    "amount": 300,
    "unit": "g"
  },
  "champignons": {
    "label": "Champignons",
    "cat": "gemuese",
    "buyPrice": 1.79,
    "usePrice": 1.5,
    "amount": 250,
    "unit": "g"
  },
  "spinat": {
    "label": "Spinat",
    "cat": "gemuese",
    "buyPrice": 1.99,
    "usePrice": 1.7,
    "amount": 300,
    "unit": "g"
  },
  "salat": {
    "label": "Salat",
    "cat": "gemuese",
    "buyPrice": 1.49,
    "usePrice": 1.2,
    "amount": 150,
    "unit": "g"
  },
  "gurke": {
    "label": "Gurke",
    "cat": "gemuese",
    "buyPrice": 0.99,
    "usePrice": 0.8,
    "amount": 1,
    "unit": "Stück"
  },
  "kuerbis": {
    "label": "Kürbis",
    "cat": "gemuese",
    "buyPrice": 2.99,
    "usePrice": 2,
    "amount": 500,
    "unit": "g"
  },
  "suesskartoffel": {
    "label": "Süßkartoffel",
    "cat": "gemuese",
    "buyPrice": 2.29,
    "usePrice": 1.8,
    "amount": 400,
    "unit": "g"
  },
  "aubergine": {
    "label": "Aubergine",
    "cat": "gemuese",
    "buyPrice": 1.49,
    "usePrice": 1.3,
    "amount": 1,
    "unit": "Stück"
  },
  "avocado": {
    "label": "Avocado",
    "cat": "obst",
    "buyPrice": 1.29,
    "usePrice": 1.1,
    "amount": 1,
    "unit": "Stück"
  },
  "zitrone": {
    "label": "Zitrone",
    "cat": "obst",
    "buyPrice": 0.59,
    "usePrice": 0.35,
    "amount": 1,
    "unit": "Stück"
  },
  "apfel": {
    "label": "Apfel",
    "cat": "obst",
    "buyPrice": 2.49,
    "usePrice": 0.6,
    "amount": 2,
    "unit": "Stück"
  },
  "banane": {
    "label": "Banane",
    "cat": "obst",
    "buyPrice": 1.79,
    "usePrice": 0.4,
    "amount": 2,
    "unit": "Stück"
  },
  "ananas": {
    "label": "Ananas",
    "cat": "obst",
    "buyPrice": 2.49,
    "usePrice": 1.2,
    "amount": 300,
    "unit": "g"
  },
  "basilikum": {
    "label": "Basilikum",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.9,
    "amount": 15,
    "unit": "g"
  },
  "petersilie": {
    "label": "Petersilie",
    "cat": "gewuerze",
    "buyPrice": 0.99,
    "usePrice": 0.6,
    "amount": 15,
    "unit": "g"
  },
  "chili": {
    "label": "Chili",
    "cat": "gewuerze",
    "buyPrice": 1.29,
    "usePrice": 0.2,
    "amount": 1,
    "unit": "Stück"
  },
  "currypulver": {
    "label": "Currypulver",
    "cat": "gewuerze",
    "buyPrice": 1.79,
    "usePrice": 0.3,
    "amount": 2,
    "unit": "TL"
  },
  "paprikapulver": {
    "label": "Paprikapulver",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.2,
    "amount": 2,
    "unit": "TL"
  },
  "zimt": {
    "label": "Zimt",
    "cat": "gewuerze",
    "buyPrice": 1.99,
    "usePrice": 0.2,
    "amount": 1,
    "unit": "TL"
  },
  "schokolade": {
    "label": "Schokolade",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 1.3,
    "amount": 100,
    "unit": "g"
  },
  "ingwer": {
    "label": "Ingwer",
    "cat": "gewuerze",
    "buyPrice": 0.99,
    "usePrice": 0.4,
    "amount": 20,
    "unit": "g"
  },
  "erdnuesse": {
    "label": "Erdnüsse",
    "cat": "gewuerze",
    "buyPrice": 1.99,
    "usePrice": 0.8,
    "amount": 50,
    "unit": "g"
  },
  "lamm": {
    "label": "Lamm",
    "cat": "fleisch",
    "buyPrice": 9.99,
    "usePrice": 8.5,
    "amount": 500,
    "unit": "g"
  },
  "garnelen": {
    "label": "Garnelen",
    "cat": "fleisch",
    "buyPrice": 6.99,
    "usePrice": 6,
    "amount": 300,
    "unit": "g"
  },
  "sellerie": {
    "label": "Sellerie",
    "cat": "gemuese",
    "buyPrice": 1.29,
    "usePrice": 0.6,
    "amount": 1,
    "unit": "Stück"
  },
  "lauch": {
    "label": "Lauch",
    "cat": "gemuese",
    "buyPrice": 1.19,
    "usePrice": 0.6,
    "amount": 1,
    "unit": "Stück"
  },
  "rotkohl": {
    "label": "Rotkohl",
    "cat": "gemuese",
    "buyPrice": 1.49,
    "usePrice": 1,
    "amount": 400,
    "unit": "g"
  },
  "sauerkraut": {
    "label": "Sauerkraut",
    "cat": "gemuese",
    "buyPrice": 1.29,
    "usePrice": 0.9,
    "amount": 300,
    "unit": "g"
  },
  "oliven": {
    "label": "Oliven",
    "cat": "gewuerze",
    "buyPrice": 2.29,
    "usePrice": 0.8,
    "amount": 80,
    "unit": "g"
  },
  "kapern": {
    "label": "Kapern",
    "cat": "gewuerze",
    "buyPrice": 2.49,
    "usePrice": 0.3,
    "amount": 20,
    "unit": "g"
  },
  "rosmarin": {
    "label": "Rosmarin",
    "cat": "gewuerze",
    "buyPrice": 1.29,
    "usePrice": 0.2,
    "amount": 5,
    "unit": "g"
  },
  "kreuzkuemmel": {
    "label": "Kreuzkümmel",
    "cat": "gewuerze",
    "buyPrice": 1.79,
    "usePrice": 0.2,
    "amount": 1,
    "unit": "TL"
  },
  "sesam": {
    "label": "Sesam",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.3,
    "amount": 1,
    "unit": "EL"
  },
  "limette": {
    "label": "Limette",
    "cat": "obst",
    "buyPrice": 0.59,
    "usePrice": 0.35,
    "amount": 1,
    "unit": "Stück"
  },
  "koriander": {
    "label": "Koriander",
    "cat": "gewuerze",
    "buyPrice": 0.99,
    "usePrice": 0.6,
    "amount": 10,
    "unit": "g"
  },
  "mandeln": {
    "label": "Mandeln",
    "cat": "gewuerze",
    "buyPrice": 2.99,
    "usePrice": 1,
    "amount": 50,
    "unit": "g"
  },
  "quark": {
    "label": "Quark",
    "cat": "milchprodukte",
    "buyPrice": 1.29,
    "usePrice": 0.9,
    "amount": 250,
    "unit": "g"
  },
  "parmesan": {
    "label": "Parmesan",
    "cat": "milchprodukte",
    "buyPrice": 2.99,
    "usePrice": 1.5,
    "amount": 60,
    "unit": "g"
  },
  "polenta": {
    "label": "Polenta",
    "cat": "grund",
    "buyPrice": 1.99,
    "usePrice": 1.2,
    "amount": 250,
    "unit": "g"
  },
  "bulgur": {
    "label": "Bulgur",
    "cat": "grund",
    "buyPrice": 1.79,
    "usePrice": 0.8,
    "amount": 200,
    "unit": "g"
  },
  "haferflocken": {
    "label": "Haferflocken",
    "cat": "grund",
    "buyPrice": 1.29,
    "usePrice": 0.55,
    "amount": 200,
    "unit": "g"
  },
  "bohnen": {
    "label": "Kidneybohnen",
    "cat": "vorrat",
    "buyPrice": 0.99,
    "usePrice": 0.99,
    "amount": 400,
    "unit": "g"
  },
  "mais": {
    "label": "Mais",
    "cat": "vorrat",
    "buyPrice": 0.99,
    "usePrice": 0.99,
    "amount": 285,
    "unit": "g"
  },
  "brokkoli": {
    "label": "Brokkoli",
    "cat": "gemuese",
    "buyPrice": 2.29,
    "usePrice": 2.29,
    "amount": 500,
    "unit": "g"
  },
  "thunfisch": {
    "label": "Thunfisch",
    "cat": "fleisch",
    "buyPrice": 2.79,
    "usePrice": 2.79,
    "amount": 2,
    "unit": "Stück"
  },
  "frischkaese": {
    "label": "Frischkäse",
    "cat": "milchprodukte",
    "buyPrice": 1.49,
    "usePrice": 1.49,
    "amount": 200,
    "unit": "g"
  },
  "senf": {
    "label": "Senf",
    "cat": "vorrat",
    "buyPrice": 1.19,
    "usePrice": 0.2,
    "amount": 3,
    "unit": "EL"
  },
  "backpulver": {
    "label": "Backpulver",
    "cat": "gewuerze",
    "buyPrice": 0.69,
    "usePrice": 0.15,
    "amount": 2,
    "unit": "TL"
  },
  "kakao": {
    "label": "Backkakao",
    "cat": "gewuerze",
    "buyPrice": 2.49,
    "usePrice": 0.4,
    "amount": 3,
    "unit": "EL"
  },
  "lachs": {
    "label": "Lachs",
    "cat": "fleisch",
    "buyPrice": 8.99,
    "usePrice": 8.99,
    "amount": 600,
    "unit": "g"
  },
  "hefe": {
    "label": "Hefe",
    "cat": "grund",
    "buyPrice": 0.49,
    "usePrice": 0.35,
    "amount": 1,
    "unit": "Päckchen"
  },
  "mascarpone": {
    "label": "Mascarpone",
    "cat": "milchprodukte",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 500,
    "unit": "g"
  },
  "loeffelbiskuits": {
    "label": "Löffelbiskuits",
    "cat": "grund",
    "buyPrice": 1.79,
    "usePrice": 1.79,
    "amount": 250,
    "unit": "g"
  },
  "kaffee": {
    "label": "Starker Kaffee",
    "cat": "vorrat",
    "buyPrice": 3.99,
    "usePrice": 0.35,
    "amount": 250,
    "unit": "ml"
  },
  "speisestaerke": {
    "label": "Speisestärke",
    "cat": "grund",
    "buyPrice": 1.19,
    "usePrice": 0.2,
    "amount": 40,
    "unit": "g"
  },
  "vanille": {
    "label": "Vanille",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.75,
    "amount": 1,
    "unit": "Päckchen"
  },
  "gelatine": {
    "label": "Gelatine",
    "cat": "gewuerze",
    "buyPrice": 1.29,
    "usePrice": 0.65,
    "amount": 4,
    "unit": "Blätter"
  },
  "paniermehl": {
    "label": "Paniermehl",
    "cat": "grund",
    "buyPrice": 1.29,
    "usePrice": 0.45,
    "amount": 150,
    "unit": "g"
  },
  "rotebete": {
    "label": "Rote Bete",
    "cat": "gemuese",
    "buyPrice": 1.49,
    "usePrice": 1.2,
    "amount": 500,
    "unit": "g"
  },
  "beeren": {
    "label": "Beerenmischung",
    "cat": "obst",
    "buyPrice": 3.49,
    "usePrice": 3.49,
    "amount": 500,
    "unit": "g"
  },
  "mango": {
    "label": "Mango",
    "cat": "obst",
    "buyPrice": 1.49,
    "usePrice": 1.49,
    "amount": 2,
    "unit": "Stück"
  },
  "halloumi": {
    "label": "Halloumi",
    "cat": "milchprodukte",
    "buyPrice": 3.29,
    "usePrice": 3.29,
    "amount": 250,
    "unit": "g"
  },
  "bagel": {
    "label": "Bagels",
    "cat": "grund",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 4,
    "unit": "Stück"
  },
  "filoteig": {
    "label": "Filoteig",
    "cat": "grund",
    "buyPrice": 2.29,
    "usePrice": 2.29,
    "amount": 250,
    "unit": "g"
  },
  "ricotta": {
    "label": "Ricotta",
    "cat": "milchprodukte",
    "buyPrice": 2.19,
    "usePrice": 2.19,
    "amount": 250,
    "unit": "g"
  },
  "kalbfleisch": {
    "label": "Kalbfleisch",
    "cat": "fleisch",
    "buyPrice": 11.99,
    "usePrice": 10.5,
    "amount": 600,
    "unit": "g"
  },
  "gewuerzgurken": {
    "label": "Gewürzgurken",
    "cat": "gemuese",
    "buyPrice": 1.69,
    "usePrice": 0.8,
    "amount": 4,
    "unit": "Stück"
  },
  "fladenbrot": {
    "label": "Fladenbrot",
    "cat": "grund",
    "buyPrice": 1.99,
    "usePrice": 1.99,
    "amount": 1,
    "unit": "Stück"
  },
  "gyozateig": {
    "label": "Gyoza-Teigblätter",
    "cat": "grund",
    "buyPrice": 2.99,
    "usePrice": 2.99,
    "amount": 24,
    "unit": "Stück"
  },
  "fruehlingsrollenteig": {
    "label": "Frühlingsrollenteig",
    "cat": "grund",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 12,
    "unit": "Blätter"
  },
  "baguette": {
    "label": "Baguette",
    "cat": "grund",
    "buyPrice": 1.49,
    "usePrice": 1.49,
    "amount": 1,
    "unit": "Stück"
  },
  "lasagneplatten": {
    "label": "Lasagneplatten",
    "cat": "grund",
    "buyPrice": 1.59,
    "usePrice": 1.3,
    "amount": 250,
    "unit": "g"
  },
  "weisswein": {
    "label": "Trockener Weißwein",
    "cat": "vorrat",
    "buyPrice": 4.49,
    "usePrice": 1.2,
    "amount": 250,
    "unit": "ml"
  },
  "cheddar": {
    "label": "Cheddar",
    "cat": "milchprodukte",
    "buyPrice": 2.79,
    "usePrice": 2.2,
    "amount": 150,
    "unit": "g"
  },
  "erbsen": {
    "label": "Erbsen",
    "cat": "gemuese",
    "buyPrice": 1.79,
    "usePrice": 1.2,
    "amount": 300,
    "unit": "g"
  },
  "butterkekse": {
    "label": "Butterkekse",
    "cat": "grund",
    "buyPrice": 1.49,
    "usePrice": 0.9,
    "amount": 150,
    "unit": "g"
  },
  "birne": {
    "label": "Birnen",
    "cat": "obst",
    "buyPrice": 2.49,
    "usePrice": 1.2,
    "amount": 4,
    "unit": "Stück"
  },
  "tomatenmark": {
    "label": "Tomatenmark",
    "cat": "vorrat",
    "buyPrice": 1.29,
    "usePrice": 0.35,
    "amount": 2,
    "unit": "EL"
  },
  "thymian": {
    "label": "Thymian",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.2,
    "amount": 2,
    "unit": "TL"
  },
  "kuemmel": {
    "label": "Kümmel",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 0.1,
    "amount": 1,
    "unit": "TL"
  },
  "fruehlingszwiebeln": {
    "label": "Frühlingszwiebeln",
    "cat": "gemuese",
    "buyPrice": 1.19,
    "usePrice": 0.9,
    "amount": 3,
    "unit": "Stück"
  },
  "dill": {
    "label": "Dill",
    "cat": "gewuerze",
    "buyPrice": 1.29,
    "usePrice": 0.9,
    "amount": 15,
    "unit": "g"
  },
  "vanillezucker": {
    "label": "Vanillezucker",
    "cat": "grund",
    "buyPrice": 0.79,
    "usePrice": 0.15,
    "amount": 1,
    "unit": "Päckchen"
  },
  "currypaste": {
    "label": "Currypaste",
    "cat": "gewuerze",
    "buyPrice": 2.49,
    "usePrice": 0.75,
    "amount": 3,
    "unit": "EL"
  },
  "rotwein": {
    "label": "Trockener Rotwein",
    "cat": "vorrat",
    "buyPrice": 4.99,
    "usePrice": 1.8,
    "amount": 300,
    "unit": "ml"
  },
  "safran": {
    "label": "Safran",
    "cat": "gewuerze",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 1,
    "unit": "Päckchen"
  },
  "salbei": {
    "label": "Salbei",
    "cat": "gewuerze",
    "buyPrice": 1.49,
    "usePrice": 1,
    "amount": 15,
    "unit": "g"
  },
  "reisnudeln": {
    "label": "Reisnudeln",
    "cat": "grund",
    "buyPrice": 2.29,
    "usePrice": 2.29,
    "amount": 400,
    "unit": "g"
  },
  "miso": {
    "label": "Misopaste",
    "cat": "vorrat",
    "buyPrice": 3.49,
    "usePrice": 1.4,
    "amount": 80,
    "unit": "g"
  },
  "weisskohl": {
    "label": "Weißkohl",
    "cat": "gemuese",
    "buyPrice": 1.99,
    "usePrice": 1.2,
    "amount": 500,
    "unit": "g"
  },
  "paneer": {
    "label": "Paneer",
    "cat": "milchprodukte",
    "buyPrice": 3.49,
    "usePrice": 3.49,
    "amount": 400,
    "unit": "g"
  },
  "fischsauce": {
    "label": "Fischsauce",
    "cat": "vorrat",
    "buyPrice": 2.49,
    "usePrice": 0.35,
    "amount": 2,
    "unit": "EL"
  },
  "kimchi": {
    "label": "Kimchi",
    "cat": "gemuese",
    "buyPrice": 3.49,
    "usePrice": 3.49,
    "amount": 350,
    "unit": "g"
  },
  "nori": {
    "label": "Nori-Blätter",
    "cat": "vorrat",
    "buyPrice": 2.49,
    "usePrice": 1,
    "amount": 4,
    "unit": "Blätter"
  },
  "burgerbroetchen": {
    "label": "Burgerbrötchen",
    "cat": "grund",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 4,
    "unit": "Stück"
  },
  "gruenkohl": {
    "label": "Grünkohl",
    "cat": "gemuese",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 800,
    "unit": "g"
  },
  "udonnudeln": {
    "label": "Udon-Nudeln",
    "cat": "grund",
    "buyPrice": 2.49,
    "usePrice": 2.49,
    "amount": 400,
    "unit": "g"
  },
  "raeucherlachs": {
    "label": "Räucherlachs",
    "cat": "fleisch",
    "buyPrice": 5.99,
    "usePrice": 5.99,
    "amount": 350,
    "unit": "g"
  }
};

const baseDishes = [
  {
    "id": "ko-0001",
    "name": "Spaghetti Aglio e Olio",
    "emoji": "🍝",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "knoblauch",
      "olivenoel",
      "chili",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "knoblauch": [
        4,
        "Zehen"
      ],
      "olivenoel": [
        5,
        "EL"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Nudeln in Salzwasser bissfest kochen und 200 ml Kochwasser auffangen.",
      "Knoblauch in dünne Scheiben und Chili in feine Ringe schneiden.",
      "Öl sanft erhitzen; Knoblauch und Chili 2 Minuten ziehen lassen, ohne sie zu bräunen.",
      "Nudeln und zunächst 100 ml Kochwasser zugeben und kräftig schwenken.",
      "Mit Salz und Petersilie abschmecken und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      2,
      null,
      null
    ],
    "tip": "Knoblauch nur hellgolden garen, da er dunkel gebraten bitter wird."
  },
  {
    "id": "ko-0002",
    "name": "Rührei mit Speck",
    "emoji": "🍳",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "eier",
      "speck",
      "butter",
      "fruehlingszwiebeln"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "speck": [
        150,
        "g"
      ],
      "butter": [
        20,
        "g"
      ],
      "fruehlingszwiebeln": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Eier in einer Schüssel verquirlen und mit wenig Salz sowie Pfeffer würzen.",
      "Speck würfeln und in einer beschichteten Pfanne langsam knusprig auslassen.",
      "Speck herausnehmen und überschüssiges Fett bis auf einen Esslöffel abgießen.",
      "Butter und Eier zugeben.",
      "Bei kleiner Hitze langsam vom Rand zur Mitte schieben, bis sie gerade gestockt sind.",
      "Speck und fein geschnittene Frühlingszwiebeln unterheben und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Pfanne früh vom Herd nehmen; die Restwärme gart das Rührei noch nach."
  },
  {
    "id": "ko-0003",
    "name": "Caprese-Salat",
    "emoji": "🍅",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tomaten",
      "mozzarella",
      "basilikum",
      "olivenoel",
      "essig"
    ],
    "amounts": {
      "tomaten": [
        600,
        "g"
      ],
      "mozzarella": [
        300,
        "g"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "essig": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 3,
    "restMinutes": 0,
    "minutes": 15,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Tomaten waschen, Strunk entfernen und in gleichmäßige Scheiben schneiden.",
      "Mozzarella abtropfen lassen, trocken tupfen und ebenfalls in Scheiben schneiden.",
      "Tomaten und Mozzarella abwechselnd auf einer Platte anordnen.",
      "Mit Salz und Pfeffer würzen und mit Olivenöl sowie Essig beträufeln.",
      "Basilikumblätter erst unmittelbar vor dem Servieren darübergeben."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Tomaten bei Zimmertemperatur verwenden; gekühlt schmecken sie deutlich weniger aromatisch."
  },
  {
    "id": "ko-0004",
    "name": "Toast Hawaii",
    "emoji": "🍍",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "toast",
      "schinken",
      "ananas",
      "reibekaese",
      "butter"
    ],
    "amounts": {
      "toast": [
        8,
        "Stück"
      ],
      "schinken": [
        200,
        "g"
      ],
      "ananas": [
        8,
        "Stück"
      ],
      "reibekaese": [
        200,
        "g"
      ],
      "butter": [
        20,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 22,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen und ein Blech belegen.",
      "Toast dünn buttern und mit je einer Scheibe Schinken belegen.",
      "Ananas sehr gut abtropfen lassen und auf den Schinken setzen.",
      "Käse gleichmäßig darüber verteilen und die Toasts auf das Blech legen.",
      "10 bis 12 Minuten backen, bis der Käse vollständig geschmolzen und leicht gebräunt ist."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      12
    ],
    "tip": "Ananas trocken tupfen, damit der Toast nicht durchweicht."
  },
  {
    "id": "ko-0005",
    "name": "Pfannkuchen",
    "emoji": "🥞",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "eier",
      "milch",
      "zucker",
      "butter"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "milch": [
        500,
        "ml"
      ],
      "zucker": [
        30,
        "g"
      ],
      "butter": [
        40,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Zucker und eine Prise Salz in einer Schüssel mischen.",
      "Eier und zunächst die Hälfte der Milch einrühren, bis keine Klümpchen mehr vorhanden sind.",
      "Restliche Milch einarbeiten und den Teig 10 Minuten ruhen lassen.",
      "Wenig Butter in einer Pfanne erhitzen und acht dünne Pfannkuchen nacheinander ausbacken.",
      "Pfannkuchen wenden, sobald die Oberfläche gestockt ist, und die zweite Seite goldgelb backen."
    ],
    "stepTimers": [
      null,
      null,
      10,
      null,
      null
    ],
    "tip": "Die kurze Ruhezeit lässt das Mehl quellen und macht den Teig gleichmäßiger."
  },
  {
    "id": "ko-0006",
    "name": "Quesadillas",
    "emoji": "🫓",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tortilla",
      "reibekaese",
      "paprika",
      "zwiebeln",
      "mais",
      "olivenoel"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "reibekaese": [
        300,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "mais": [
        150,
        "g"
      ],
      "olivenoel": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 33,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Paprika und Zwiebel klein würfeln.",
      "Mais abspülen und abtropfen lassen.",
      "Gemüse im Öl 6 Minuten braten und kräftig würzen.",
      "Vier Tortillas mit Käse und Gemüse belegen, dabei einen Rand frei lassen.",
      "Mit den übrigen Tortillas abdecken und in einer trockenen Pfanne je Seite 3 bis 4 Minuten braten.",
      "Quesadillas kurz ruhen lassen, in Stücke schneiden und heiß servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      4,
      null
    ],
    "tip": "Bei mittlerer Hitze braten, damit der Käse schmilzt, bevor die Tortilla zu dunkel wird."
  },
  {
    "id": "ko-0007",
    "name": "Gemüse-Omelett",
    "emoji": "🥚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "eier",
      "paprika",
      "zwiebeln",
      "champignons",
      "spinat",
      "olivenoel"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "champignons": [
        250,
        "g"
      ],
      "spinat": [
        150,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 33,
    "difficulty": "Einfach",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Paprika und Zwiebel klein würfeln, Champignons in Scheiben schneiden und Spinat waschen.",
      "Gemüse im Öl 7 Minuten anbraten.",
      "Spinat kurz zusammenfallen lassen.",
      "Eier verquirlen und mit Salz sowie Pfeffer würzen.",
      "Eier über das Gemüse gießen und bei kleiner Hitze 7 bis 9 Minuten stocken lassen.",
      "Omelett zusammenklappen oder vierteln und vollständig gestockt servieren."
    ],
    "stepTimers": [
      null,
      7,
      null,
      null,
      9,
      null
    ],
    "tip": "Ein Deckel sorgt dafür, dass die Oberfläche stockt, ohne dass die Unterseite verbrennt."
  },
  {
    "id": "ko-0008",
    "name": "Couscous-Salat",
    "emoji": "🌾",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "couscous",
      "tomaten",
      "gurke",
      "zitrone",
      "olivenoel",
      "petersilie",
      "bruehe"
    ],
    "amounts": {
      "couscous": [
        300,
        "g"
      ],
      "tomaten": [
        400,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "petersilie": [
        25,
        "g"
      ],
      "bruehe": [
        350,
        "ml"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Couscous in eine Schüssel geben und mit kochender Brühe übergießen.",
      "Abdecken, 8 Minuten quellen lassen und anschließend mit einer Gabel auflockern.",
      "Tomaten und Gurke klein würfeln, Petersilie fein hacken.",
      "Zitronensaft und Olivenöl unter den lauwarmen Couscous rühren.",
      "Gemüse und Petersilie unterheben, abschmecken und mindestens 10 Minuten ziehen lassen."
    ],
    "stepTimers": [
      null,
      8,
      null,
      null,
      10
    ],
    "tip": "Couscous vor dem Gemüse etwas abkühlen lassen, damit Tomaten und Gurke knackig bleiben."
  },
  {
    "id": "ko-0009",
    "name": "Avocado-Toast",
    "emoji": "🥑",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "toast",
      "avocado",
      "zitrone",
      "chili",
      "tomaten"
    ],
    "amounts": {
      "toast": [
        8,
        "Stück"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "tomaten": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 8,
    "restMinutes": 0,
    "minutes": 18,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Toastscheiben rundherum goldbraun und knusprig rösten.",
      "Avocados halbieren, entkernen und das Fruchtfleisch in eine Schüssel geben.",
      "Mit Zitronensaft, Salz und Pfeffer grob zerdrücken.",
      "Tomaten klein würfeln und Chili in feine Ringe schneiden.",
      "Avocadocreme auf den Toasts verteilen und mit Tomaten sowie Chili belegen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Avocado erst kurz vor dem Essen zerdrücken, damit sie frisch und grün bleibt."
  },
  {
    "id": "ko-0010",
    "name": "Nudeln mit Pesto",
    "emoji": "🍝",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "pesto",
      "parmesan",
      "tomaten"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "pesto": [
        180,
        "g"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "tomaten": [
        250,
        "g"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 23,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "nuesse"
    ],
    "steps": [
      "Nudeln in reichlich Salzwasser bissfest kochen.",
      "Währenddessen Tomaten halbieren und Parmesan fein reiben.",
      "Etwa 150 ml Nudelwasser auffangen und die Nudeln abgießen.",
      "Pesto mit 80 ml Kochwasser cremig rühren und abseits der Hitze unter die Nudeln mischen.",
      "Tomaten unterheben und mit Parmesan servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Pesto nicht mitkochen; starke Hitze nimmt Kräutern Farbe und Aroma."
  },
  {
    "id": "ko-0011",
    "name": "Waffeln",
    "emoji": "🧇",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "eier",
      "milch",
      "butter",
      "zucker",
      "backpulver",
      "vanillezucker"
    ],
    "amounts": {
      "mehl": [
        300,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "milch": [
        350,
        "ml"
      ],
      "butter": [
        150,
        "g"
      ],
      "zucker": [
        100,
        "g"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Butter schmelzen und etwas abkühlen lassen.",
      "Waffeleisen vorheizen.",
      "Eier, Zucker und Vanillezucker 2 Minuten schaumig rühren.",
      "Butter und Milch einarbeiten, anschließend Mehl und Backpulver kurz unterrühren.",
      "Waffeleisen dünn fetten und den Teig portionsweise einfüllen.",
      "Waffeln goldbraun backen und auf einem Gitter kurz ausdampfen lassen."
    ],
    "stepTimers": [
      null,
      null,
      2,
      null,
      null,
      null
    ],
    "tip": "Fertige Waffeln nicht stapeln, sonst verlieren sie ihre knusprigen Ränder."
  },
  {
    "id": "ko-0012",
    "name": "Schokopudding",
    "emoji": "🍫",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "milch",
      "zucker",
      "kakao",
      "speisestaerke",
      "schokolade"
    ],
    "amounts": {
      "milch": [
        800,
        "ml"
      ],
      "zucker": [
        70,
        "g"
      ],
      "kakao": [
        35,
        "g"
      ],
      "speisestaerke": [
        55,
        "g"
      ],
      "schokolade": [
        100,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "150 ml Milch mit Zucker, Kakao und Stärke klümpchenfrei verrühren.",
      "Übrige Milch in einem Topf aufkochen.",
      "Stärkemischung unter ständigem Rühren in die kochende Milch gießen.",
      "Eine Minute sprudelnd kochen, bis der Pudding deutlich bindet.",
      "Topf vom Herd nehmen, Schokolade einrühren und den Pudding in vier Schalen füllen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Frischhaltefolie direkt auf die Oberfläche legen, wenn sich keine Haut bilden soll."
  },
  {
    "id": "ko-0013",
    "name": "Bruschetta",
    "emoji": "🍞",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "baguette",
      "tomaten",
      "knoblauch",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "baguette": [
        1,
        "Stück"
      ],
      "tomaten": [
        600,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 8,
    "restMinutes": 0,
    "minutes": 23,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Tomaten entkernen, klein würfeln und in einem Sieb 5 Minuten abtropfen lassen.",
      "Eine Knoblauchzehe fein hacken und mit Tomaten, zwei Esslöffeln Öl, Salz und Pfeffer mischen.",
      "Baguette schräg in acht bis zwölf Scheiben schneiden.",
      "Scheiben mit restlichem Öl bestreichen und im Ofen oder in der Pfanne goldbraun rösten.",
      "Mit der zweiten Knoblauchzehe abreiben, Tomaten auflegen und Basilikum darübergeben."
    ],
    "stepTimers": [
      5,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Tomaten erst direkt vor dem Servieren auf das Brot geben, damit es knusprig bleibt."
  },
  {
    "id": "ko-0014",
    "name": "Griechischer Salat",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tomaten",
      "gurke",
      "feta",
      "oliven",
      "paprika",
      "zwiebeln",
      "olivenoel",
      "essig"
    ],
    "amounts": {
      "tomaten": [
        500,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "feta": [
        250,
        "g"
      ],
      "oliven": [
        100,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "essig": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 2,
    "restMinutes": 0,
    "minutes": 17,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Tomaten, Gurke und Paprika in grobe mundgerechte Stücke schneiden.",
      "Zwiebel halbieren und in sehr dünne Streifen schneiden.",
      "Gemüse mit Oliven in einer großen Schüssel mischen.",
      "Olivenöl und Essig darübergeben und mit Pfeffer sowie wenig Salz abschmecken.",
      "Feta in groben Stücken daraufsetzen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Feta und Oliven sind salzig; deshalb den Salat erst ganz am Ende zusätzlich salzen."
  },
  {
    "id": "ko-0015",
    "name": "Tomatensuppe",
    "emoji": "🍅",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "sahne",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "dosentomaten": [
        800,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 28,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Zwiebel und Knoblauch fein würfeln.",
      "Öl erhitzen, Zwiebel 4 Minuten glasig dünsten und Knoblauch kurz mitgaren.",
      "Tomaten und Brühe zugeben und 20 Minuten offen sanft köcheln.",
      "Suppe fein pürieren und Sahne einrühren.",
      "Noch einmal vollständig erhitzen, abschmecken und mit Basilikum servieren."
    ],
    "stepTimers": [
      null,
      4,
      20,
      null,
      null
    ],
    "tip": "Eine kleine Prise Zucker kann starke Säure aus den Tomaten ausgleichen."
  },
  {
    "id": "ko-0016",
    "name": "Burrito Bowl",
    "emoji": "🌯",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "kichererbsen",
      "avocado",
      "paprika",
      "mais",
      "tomaten",
      "limette",
      "paprikapulver"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "mais": [
        200,
        "g"
      ],
      "tomaten": [
        300,
        "g"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis nach Packungsangabe garen und anschließend 5 Minuten ausdampfen lassen.",
      "Kichererbsen abspülen, mit Paprikapulver würzen und 8 Minuten in einer Pfanne rösten.",
      "Paprika würfeln und 5 Minuten mitbraten.",
      "Mais abtropfen lassen.",
      "Tomaten und Avocado würfeln und mit Limettensaft beträufeln.",
      "Reis auf Schalen verteilen und alle vorbereiteten Zutaten getrennt darauf anrichten."
    ],
    "stepTimers": [
      5,
      8,
      5,
      null,
      null,
      null
    ],
    "tip": "Avocado erst unmittelbar vor dem Servieren schneiden, damit sie sich nicht verfärbt."
  },
  {
    "id": "ko-0017",
    "name": "Pancakes (fluffig)",
    "emoji": "🥞",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "eier",
      "milch",
      "honig",
      "backpulver",
      "butter"
    ],
    "amounts": {
      "mehl": [
        280,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "milch": [
        350,
        "ml"
      ],
      "honig": [
        2,
        "EL"
      ],
      "backpulver": [
        3,
        "TL"
      ],
      "butter": [
        30,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Backpulver und eine Prise Salz mischen.",
      "Eier trennen und Eiweiß steif schlagen.",
      "Eigelb, Milch und Honig verrühren und kurz unter die Mehlmischung ziehen.",
      "Eischnee vorsichtig unterheben und den Teig 5 Minuten ruhen lassen.",
      "Kleine Pancakes in wenig Butter bei mittlerer Hitze von beiden Seiten goldbraun backen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      null
    ],
    "tip": "Nach dem Unterheben des Eischnees nur noch vorsichtig arbeiten, damit der Teig luftig bleibt."
  },
  {
    "id": "ko-0018",
    "name": "Kartoffelsuppe",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "zwiebeln",
      "lauch",
      "karotten",
      "bruehe",
      "sahne",
      "butter"
    ],
    "amounts": {
      "kartoffeln": [
        900,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "lauch": [
        1,
        "Stange"
      ],
      "karotten": [
        250,
        "g"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "butter": [
        25,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Kartoffeln und Karotten schälen und würfeln.",
      "Lauch gründlich waschen und schneiden.",
      "Butter erhitzen und Zwiebel sowie Lauch 5 Minuten anschwitzen.",
      "Kartoffeln, Karotten und Brühe zugeben und 25 Minuten weich kochen.",
      "Etwa zwei Drittel der Suppe pürieren und mit dem stückigen Rest vermischen.",
      "Sahne einrühren, vollständig erhitzen und mit Salz sowie Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      5,
      25,
      null,
      null
    ],
    "tip": "Ein Teil der Suppe bleibt stückig; dadurch wird sie cremig und behält gleichzeitig Biss."
  },
  {
    "id": "ko-0019",
    "name": "Chili sin Carne",
    "emoji": "🌶️",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "dosentomaten",
      "bohnen",
      "kichererbsen",
      "mais",
      "paprika",
      "zwiebeln",
      "chili",
      "paprikapulver",
      "kreuzkuemmel"
    ],
    "amounts": {
      "dosentomaten": [
        800,
        "g"
      ],
      "bohnen": [
        480,
        "g"
      ],
      "kichererbsen": [
        240,
        "g"
      ],
      "mais": [
        200,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "kreuzkuemmel": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen, Kichererbsen und Mais abspülen.",
      "Paprika und Zwiebel würfeln.",
      "Zwiebel und Paprika 6 Minuten in wenig Öl anbraten.",
      "Chili, Paprikapulver und Kreuzkümmel kurz mitrösten.",
      "Tomaten, Bohnen und Kichererbsen zugeben und 25 Minuten offen köcheln.",
      "Mais einrühren, weitere 5 Minuten erhitzen und kräftig abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      25,
      5
    ],
    "tip": "Das Chili schmeckt nach einer kurzen Ruhezeit aromatischer und lässt sich gut wieder aufwärmen."
  },
  {
    "id": "ko-0020",
    "name": "Currywurst mit Pommes",
    "emoji": "🌭",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "wurst",
      "dosentomaten",
      "currypulver",
      "kartoffeln"
    ],
    "amounts": {
      "wurst": [
        300,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "currypulver": [
        2,
        "TL"
      ],
      "kartoffeln": [
        800,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen. Kartoffeln in gleichmäßige Stifte schneiden, gründlich abspülen und sehr gut trocknen.",
      "Kartoffelstifte mit wenig Öl mischen, auf einem Blech verteilen und 30 bis 35 Minuten backen.",
      "Nach der Hälfte der Zeit wenden.",
      "Dosentomaten in einem kleinen Topf einkochen, mit Currypulver, Salz und einer Prise Zucker abschmecken und fein pürieren.",
      "Würste in einer Pfanne rundherum vollständig erhitzen und kräftig anbräunen, anschließend in Stücke schneiden.",
      "Pommes salzen, Currywurst mit der heißen Sauce überziehen und mit zusätzlichem Currypulver servieren."
    ],
    "stepTimers": [
      null,
      35,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Kartoffeln werden knuspriger, wenn sie vor dem Backen vollständig trocken sind und nicht übereinanderliegen."
  },
  {
    "id": "ko-0021",
    "name": "Gemüsecurry mit Reis",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "kokosmilch",
      "currypulver",
      "paprika",
      "zucchini",
      "karotten",
      "kichererbsen",
      "zwiebeln"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "kichererbsen": [
        240,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Paprika, Zucchini, Karotten und Zwiebel in gleichmäßige Stücke schneiden.",
      "Zwiebel und Karotten 5 Minuten anbraten, Currypulver kurz mitrösten.",
      "Paprika, Zucchini, Kichererbsen und Kokosmilch zugeben und 15 Minuten sanft köcheln.",
      "Gemüse auf Gargrad prüfen, abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      5,
      15,
      null
    ],
    "tip": "Zucchini erst später zugeben als Karotten, damit beide Gemüsesorten gleichzeitig gar sind."
  },
  {
    "id": "ko-0022",
    "name": "Spaghetti Bolognese",
    "emoji": "🍝",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "hackfleisch",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "karotten",
      "sellerie",
      "tomatenmark",
      "olivenoel"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "hackfleisch": [
        500,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "karotten": [
        150,
        "g"
      ],
      "sellerie": [
        120,
        "g"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sellerie"
    ],
    "steps": [
      "Zwiebel, Karotten, Sellerie und Knoblauch sehr fein würfeln.",
      "Gemüse im Öl 6 Minuten anschwitzen, Hackfleisch zugeben und vollständig krümelig bräunen.",
      "Tomatenmark 1 Minute mitrösten, anschließend Dosentomaten einrühren.",
      "Sauce 30 Minuten offen sanft köcheln und regelmäßig umrühren.",
      "Spaghetti bissfest kochen, mit der abgeschmeckten Sauce vermengen und servieren."
    ],
    "stepTimers": [
      null,
      6,
      1,
      30,
      null
    ],
    "tip": "Die Sauce gewinnt durch langsames Einkochen; bei Bedarf nur wenig Wasser ergänzen."
  },
  {
    "id": "ko-0023",
    "name": "Falafel mit Hummus",
    "emoji": "🧆",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kichererbsen",
      "knoblauch",
      "zitrone",
      "petersilie",
      "sesam",
      "mehl",
      "kreuzkuemmel",
      "olivenoel"
    ],
    "amounts": {
      "kichererbsen": [
        720,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "petersilie": [
        30,
        "g"
      ],
      "sesam": [
        3,
        "EL"
      ],
      "mehl": [
        50,
        "g"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "sesam"
    ],
    "steps": [
      "Kichererbsen sehr gut abtropfen.",
      "Ein Drittel für den Hummus beiseitestellen.",
      "Übrige Kichererbsen mit einer Knoblauchzehe, Petersilie, Mehl und Kreuzkümmel grob zerkleinern.",
      "Zwölf Taler formen und in zwei Esslöffeln Öl je Seite 4 bis 5 Minuten braten.",
      "Beiseitegestellte Kichererbsen mit Sesam, restlichem Knoblauch, Zitronensaft, Öl und etwas Wasser fein pürieren.",
      "Hummus abschmecken und mit den heißen Falafeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      null,
      null
    ],
    "tip": "Für stabile Falafel die Kichererbsenmasse nicht zu fein pürieren und vor dem Formen 10 Minuten ruhen lassen."
  },
  {
    "id": "ko-0024",
    "name": "Hähnchen-Gemüse-Pfanne",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "haehnchen",
      "paprika",
      "zucchini",
      "zwiebeln",
      "brokkoli",
      "olivenoel",
      "paprikapulver"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "brokkoli": [
        350,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 22,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Hähnchen trocken tupfen und getrennt vom Gemüse in gleichmäßige Stücke schneiden.",
      "Paprika, Zucchini und Zwiebel waschen beziehungsweise schälen und in gleichmäßige, mundgerechte Stücke schneiden.",
      "Brokkoli in kleine Röschen teilen.",
      "Hähnchen im heißen Öl rundherum anbraten und vollständig durchgaren, dann herausnehmen.",
      "Zwiebel, Brokkoli und Paprika 6 Minuten braten, Zucchini weitere 4 Minuten mitgaren.",
      "Hähnchen zurückgeben, vollständig erhitzen und mit Paprikapulver, Salz und Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      6,
      null
    ],
    "tip": "Fleisch und Gemüse getrennt vorbereiten und dafür unterschiedliche Bretter oder gründlich gereinigte Flächen verwenden."
  },
  {
    "id": "ko-0025",
    "name": "Kürbissuppe",
    "emoji": "🎃",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kuerbis",
      "zwiebeln",
      "kartoffeln",
      "bruehe",
      "kokosmilch",
      "ingwer",
      "olivenoel"
    ],
    "amounts": {
      "kuerbis": [
        900,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "kartoffeln": [
        250,
        "g"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "kokosmilch": [
        250,
        "ml"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kürbis entkernen und mit Kartoffeln sowie Zwiebel würfeln.",
      "Öl erhitzen, Zwiebel und fein geriebenen Ingwer 4 Minuten anschwitzen.",
      "Kürbis, Kartoffeln und Brühe zugeben und 22 bis 25 Minuten weich kochen.",
      "Suppe fein pürieren und Kokosmilch einrühren.",
      "Noch einmal erhitzen, Konsistenz mit Wasser anpassen und abschmecken."
    ],
    "stepTimers": [
      null,
      4,
      25,
      null,
      null
    ],
    "tip": "Hokkaidokürbis kann mit Schale verwendet werden; andere Sorten vorher schälen."
  },
  {
    "id": "ko-0026",
    "name": "Risotto mit Pilzen",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "champignons",
      "zwiebeln",
      "parmesan",
      "bruehe",
      "weisswein",
      "butter",
      "olivenoel"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "champignons": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "weisswein": [
        120,
        "ml"
      ],
      "butter": [
        50,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Brühe in einem Topf heiß halten.",
      "Pilze schneiden und im Öl kräftig braten, dann herausnehmen.",
      "Zwiebel in der Hälfte der Butter glasig dünsten und Reis 2 Minuten mitrösten.",
      "Mit Weißwein ablöschen und unter Rühren fast vollständig einkochen.",
      "Heiße Brühe portionsweise zugeben und den Reis 18 bis 22 Minuten unter häufigem Rühren garen.",
      "Pilze, restliche Butter und Parmesan unterheben, abschmecken und 2 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      2,
      null,
      22,
      2
    ],
    "tip": "Neue Brühe erst nachgießen, wenn die vorherige Portion fast aufgenommen ist."
  },
  {
    "id": "ko-0027",
    "name": "Flammkuchen",
    "emoji": "🫓",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "mehl",
      "olivenoel",
      "sahne",
      "quark",
      "zwiebeln",
      "speck"
    ],
    "amounts": {
      "mehl": [
        300,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "quark": [
        150,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "speck": [
        180,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 43,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Mehl mit 150 ml Wasser, Öl und einem halben Teelöffel Salz 5 Minuten glatt kneten.",
      "Teig abdecken und 15 Minuten ruhen lassen.",
      "Backofen samt Blech auf 250 °C vorheizen.",
      "Sahne und Quark verrühren, Zwiebeln sehr dünn schneiden und Speck würfeln.",
      "Teig in zwei sehr dünne Fladen ausrollen und mit Creme, Zwiebeln und Speck belegen.",
      "Nacheinander auf dem heißen Blech 8 bis 10 Minuten knusprig backen."
    ],
    "stepTimers": [
      5,
      15,
      null,
      null,
      null,
      10
    ],
    "tip": "Ein vorgeheiztes Blech sorgt auch ohne Pizzastein für einen knusprigen Boden."
  },
  {
    "id": "ko-0028",
    "name": "Shakshuka",
    "emoji": "🍳",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "eier",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "chili",
      "kreuzkuemmel",
      "olivenoel"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "kreuzkuemmel": [
        1,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Zwiebel und Paprika würfeln, Knoblauch und Chili fein hacken.",
      "Gemüse im Öl 7 Minuten weich braten.",
      "Knoblauch und Kreuzkümmel kurz mitrösten.",
      "Tomaten zugeben und 12 Minuten offen einkochen, bis die Sauce dicklich ist.",
      "Acht Mulden formen, Eier hineinschlagen und die Pfanne abdecken.",
      "Bei kleiner Hitze 7 bis 9 Minuten garen, bis das Eiweiß vollständig gestockt ist."
    ],
    "stepTimers": [
      null,
      7,
      null,
      12,
      null,
      9
    ],
    "tip": "Eigelb nach Wunsch weich lassen, für Risikogruppen die Eier jedoch vollständig durchgaren."
  },
  {
    "id": "ko-0029",
    "name": "Linsensuppe",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "linsen",
      "karotten",
      "zwiebeln",
      "sellerie",
      "lauch",
      "kartoffeln",
      "bruehe",
      "essig"
    ],
    "amounts": {
      "linsen": [
        280,
        "g"
      ],
      "karotten": [
        300,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "sellerie": [
        180,
        "g"
      ],
      "lauch": [
        1,
        "Stange"
      ],
      "kartoffeln": [
        350,
        "g"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "essig": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Linsen abspülen; Gemüse putzen und in kleine gleichmäßige Würfel schneiden.",
      "Zwiebel, Sellerie und Lauch in wenig Öl 5 Minuten anschwitzen.",
      "Linsen, Kartoffeln, Karotten und Brühe zugeben und aufkochen.",
      "Je nach Linsensorte 25 bis 35 Minuten sanft köcheln, bis alles weich ist.",
      "Mit Salz, Pfeffer und Essig abschmecken.",
      "Bei Bedarf etwas Wasser ergänzen."
    ],
    "stepTimers": [
      null,
      5,
      null,
      35,
      null,
      null
    ],
    "tip": "Säure erst nach dem Garen zugeben, da Linsen in saurer Flüssigkeit langsamer weich werden."
  },
  {
    "id": "ko-0030",
    "name": "Käsespätzle",
    "emoji": "🧀",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "mehl",
      "eier",
      "milch",
      "reibekaese",
      "zwiebeln",
      "butter"
    ],
    "amounts": {
      "mehl": [
        400,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "milch": [
        150,
        "ml"
      ],
      "reibekaese": [
        300,
        "g"
      ],
      "zwiebeln": [
        3,
        "Stück"
      ],
      "butter": [
        40,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Eier, Milch, einen Teelöffel Salz und etwa 50 ml Wasser schlagen, bis der Teig Blasen wirft.",
      "Zwiebeln in dünne Ringe schneiden und in der Hälfte der Butter langsam dunkelgolden rösten.",
      "Spätzleteig portionsweise in siedendes Salzwasser schaben oder pressen.",
      "Aufsteigende Spätzle herausnehmen, abtropfen lassen und mit Käse in eine warme Form schichten.",
      "Bei 180 °C 10 Minuten überbacken und mit Röstzwiebeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      10
    ],
    "tip": "Der Spätzleteig ist richtig, wenn er zäh vom Löffel reißt und sichtbar Blasen bildet."
  },
  {
    "id": "ko-0031",
    "name": "Fischstäbchen mit Kartoffelsalat",
    "emoji": "🐟",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "fisch",
      "kartoffeln",
      "mehl",
      "eier",
      "paniermehl",
      "essig",
      "zwiebeln",
      "bruehe",
      "olivenoel"
    ],
    "amounts": {
      "fisch": [
        600,
        "g"
      ],
      "kartoffeln": [
        900,
        "g"
      ],
      "mehl": [
        70,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "paniermehl": [
        150,
        "g"
      ],
      "essig": [
        4,
        "EL"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        200,
        "ml"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "fisch"
    ],
    "steps": [
      "Kartoffeln mit Schale 20 bis 25 Minuten garen, kurz ausdampfen lassen, pellen und in Scheiben schneiden.",
      "Zwiebel fein würfeln, mit heißer Brühe und Essig über die Kartoffeln geben und vorsichtig mischen.",
      "Fisch auf Gräten prüfen, in Stäbchen schneiden und nacheinander in Mehl, Ei und Paniermehl wenden.",
      "Fischstäbchen in Öl je Seite 3 bis 4 Minuten braten, bis sie goldbraun und innen vollständig gegart sind.",
      "Öl unter den Kartoffelsalat heben, abschmecken und mit den Fischstäbchen servieren."
    ],
    "stepTimers": [
      25,
      null,
      null,
      4,
      null
    ],
    "tip": "Kartoffelsalat lauwarm marinieren; dann nimmt er die Brühe besonders gut auf."
  },
  {
    "id": "ko-0032",
    "name": "Milchreis",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "reis",
      "milch",
      "zucker",
      "zimt",
      "butter"
    ],
    "amounts": {
      "reis": [
        250,
        "g"
      ],
      "milch": [
        1000,
        "ml"
      ],
      "zucker": [
        60,
        "g"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "butter": [
        15,
        "g"
      ]
    },
    "prepMinutes": 5,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Topfboden dünn mit Butter ausstreichen, damit die Milch weniger leicht ansetzt.",
      "Milch mit einer kleinen Prise Salz aufkochen.",
      "Reis einrühren und die Hitze sofort stark reduzieren.",
      "Zugedeckt 28 bis 32 Minuten quellen lassen und dabei regelmäßig vom Topfboden lösen.",
      "Zucker einrühren, Konsistenz prüfen und mit Zimt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      32,
      null
    ],
    "tip": "Der Milchreis dickt beim Abkühlen nach; am Herd darf er deshalb noch leicht flüssig wirken."
  },
  {
    "id": "ko-0033",
    "name": "Caesar Salad",
    "emoji": "🥗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "salat",
      "haehnchen",
      "parmesan",
      "toast",
      "joghurt",
      "senf",
      "zitrone",
      "knoblauch",
      "olivenoel"
    ],
    "amounts": {
      "salat": [
        350,
        "g"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "toast": [
        4,
        "Stück"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "senf": [
        1,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Salat waschen, gründlich trocknen und in mundgerechte Stücke zupfen.",
      "Hähnchen trocken tupfen, würzen und im Öl 10 bis 12 Minuten vollständig durchgaren.",
      "Toast würfeln und in derselben Pfanne rundherum knusprig rösten.",
      "Joghurt, Senf, Zitronensaft, fein geriebenen Knoblauch und die Hälfte des Parmesans verrühren.",
      "Salat mit Dressing mischen, Hähnchen aufschneiden und mit Croûtons sowie restlichem Parmesan anrichten."
    ],
    "stepTimers": [
      null,
      12,
      null,
      null,
      null
    ],
    "tip": "Dressing erst kurz vor dem Servieren unterheben, damit der Salat knackig bleibt."
  },
  {
    "id": "ko-0034",
    "name": "Thai-Curry mit Tofu",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tofu",
      "kokosmilch",
      "currypaste",
      "paprika",
      "zucchini",
      "brokkoli",
      "limette",
      "sojasauce",
      "reis"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "currypaste": [
        3,
        "EL"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "brokkoli": [
        350,
        "g"
      ],
      "limette": [
        1,
        "Stück"
      ],
      "sojasauce": [
        2,
        "EL"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Reis garen; Tofu pressen, würfeln und Gemüse mundgerecht schneiden.",
      "Tofu in einer großen Pfanne rundherum knusprig braten und herausnehmen.",
      "Currypaste kurz anrösten, Kokosmilch einrühren und aufkochen.",
      "Brokkoli und Paprika 6 Minuten, dann Zucchini und Tofu weitere 6 Minuten garen.",
      "Mit Sojasauce und Limettensaft abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      null
    ],
    "tip": "Currypaste variiert in Schärfe und Salzgehalt; zunächst weniger verwenden und später nachwürzen."
  },
  {
    "id": "ko-0035",
    "name": "Kartoffelgratin",
    "emoji": "🥔",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "sahne",
      "milch",
      "reibekaese",
      "knoblauch",
      "butter"
    ],
    "amounts": {
      "kartoffeln": [
        1000,
        "g"
      ],
      "sahne": [
        400,
        "ml"
      ],
      "milch": [
        200,
        "ml"
      ],
      "reibekaese": [
        180,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "butter": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 60,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und eine Form mit Butter sowie Knoblauch ausreiben.",
      "Kartoffeln schälen und in 2 bis 3 mm dünne Scheiben hobeln.",
      "Sahne und Milch mit Salz und Pfeffer verrühren.",
      "Kartoffeln überlappend einschichten, Flüssigkeit angießen und Käse darüber verteilen.",
      "50 bis 60 Minuten backen, bis die Kartoffeln weich und die Oberfläche goldbraun ist."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      60
    ],
    "tip": "Kartoffelscheiben nicht wässern; ihre Stärke bindet die Sauce."
  },
  {
    "id": "ko-0036",
    "name": "Gebackene Süßkartoffel",
    "emoji": "🍠",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "suesskartoffel",
      "kichererbsen",
      "avocado",
      "zitrone",
      "tomaten",
      "paprikapulver",
      "olivenoel"
    ],
    "amounts": {
      "suesskartoffel": [
        4,
        "Stück"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "tomaten": [
        250,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Backofen auf 200 °C vorheizen.",
      "Süßkartoffeln waschen, einstechen und 45 bis 55 Minuten weich backen.",
      "Kichererbsen abspülen, mit Öl und Paprikapulver mischen und die letzten 20 Minuten mitrösten.",
      "Avocado mit Zitronensaft, Salz und Pfeffer grob zerdrücken.",
      "Tomaten klein würfeln und mit etwas Salz würzen.",
      "Süßkartoffeln aufschneiden, auflockern und mit Kichererbsen, Avocadocreme und Tomaten füllen."
    ],
    "stepTimers": [
      null,
      55,
      20,
      null,
      null,
      null
    ],
    "tip": "Ähnlich große Süßkartoffeln auswählen, damit sie gleichzeitig gar werden."
  },
  {
    "id": "ko-0037",
    "name": "Chicken Tikka Masala",
    "emoji": "🍛",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "haehnchen",
      "joghurt",
      "dosentomaten",
      "sahne",
      "currypulver",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        650,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "dosentomaten": [
        700,
        "g"
      ],
      "sahne": [
        180,
        "ml"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen würfeln, mit Joghurt und der Hälfte des Currypulvers mischen und 15 Minuten ziehen lassen.",
      "Reis garen; Zwiebel, Knoblauch und Ingwer fein schneiden.",
      "Hähnchen aus der Marinade heben und portionsweise vollständig anbraten.",
      "Zwiebelmischung anschwitzen, übriges Currypulver und Tomaten zugeben und 15 Minuten köcheln.",
      "Sahne und Hähnchen einrühren, 8 Minuten vollständig durchgaren und mit Reis servieren."
    ],
    "stepTimers": [
      15,
      null,
      null,
      15,
      8
    ],
    "tip": "Mariniertes Hähnchen in kleinen Portionen braten, damit es röstet statt zu kochen."
  },
  {
    "id": "ko-0038",
    "name": "Bibimbap",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "eier",
      "karotten",
      "spinat",
      "champignons",
      "gurke",
      "sojasauce",
      "sesam"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "spinat": [
        300,
        "g"
      ],
      "champignons": [
        250,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis garen und zugedeckt warm halten.",
      "Karotten stifteln, Pilze schneiden und Gurke fein hobeln.",
      "Karotten, Pilze und Spinat nacheinander in derselben Pfanne kurz garen und jeweils würzen.",
      "Vier Spiegeleier vollständig oder nach persönlicher Vorliebe braten.",
      "Reis auf Schalen verteilen, Gemüse getrennt anordnen, Ei auflegen und mit Sojasauce sowie Sesam servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Zutaten getrennt garen, damit jede ihre eigene Konsistenz und Farbe behält."
  },
  {
    "id": "ko-0039",
    "name": "Minestrone",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "dosentomaten",
      "karotten",
      "zucchini",
      "nudeln",
      "bohnen",
      "sellerie",
      "zwiebeln",
      "bruehe",
      "basilikum"
    ],
    "amounts": {
      "dosentomaten": [
        600,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "nudeln": [
        180,
        "g"
      ],
      "bohnen": [
        300,
        "g"
      ],
      "sellerie": [
        150,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "basilikum": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sellerie"
    ],
    "steps": [
      "Zwiebel, Karotten und Sellerie klein würfeln und 6 Minuten in wenig Öl anschwitzen.",
      "Tomaten und Brühe zugeben und 15 Minuten köcheln.",
      "Nudeln einrühren und entsprechend der Packungszeit garen.",
      "Zucchini und abgespülte Bohnen in den letzten 7 Minuten zufügen.",
      "Suppe abschmecken und mit frischem Basilikum servieren."
    ],
    "stepTimers": [
      6,
      15,
      null,
      7,
      null
    ],
    "tip": "Nudeln für geplante Reste separat kochen, damit sie in der Suppe nicht aufquellen."
  },
  {
    "id": "ko-0040",
    "name": "Ofengemüse mit Feta",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "aubergine",
      "zucchini",
      "paprika",
      "feta",
      "zwiebeln",
      "tomaten",
      "olivenoel",
      "thymian"
    ],
    "amounts": {
      "aubergine": [
        1,
        "Stück"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "feta": [
        250,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "tomaten": [
        400,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "thymian": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 210 °C vorheizen und ein großes Blech bereitstellen.",
      "Aubergine, Zucchini, Paprika und Zwiebeln in ähnlich große Stücke schneiden.",
      "Gemüse mit Öl, Thymian, Salz und Pfeffer mischen und 25 Minuten rösten.",
      "Tomaten und grob zerbröselten Feta darübergeben.",
      "Weitere 12 bis 15 Minuten backen und direkt vom Blech servieren."
    ],
    "stepTimers": [
      null,
      null,
      25,
      null,
      15
    ],
    "tip": "Das Gemüse locker verteilen; auf einem überfüllten Blech dämpft es statt zu rösten."
  },
  {
    "id": "ko-0041",
    "name": "Döner-Bowl",
    "emoji": "🥙",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "haehnchen",
      "reis",
      "salat",
      "tomaten",
      "gurke",
      "joghurt",
      "knoblauch",
      "paprikapulver",
      "zitrone"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "salat": [
        250,
        "g"
      ],
      "tomaten": [
        350,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Reis garen; Hähnchen in dünne Streifen schneiden und mit Paprikapulver würzen.",
      "Hähnchen in einer heißen Pfanne portionsweise vollständig durchgaren.",
      "Salat waschen, Tomaten und Gurke schneiden.",
      "Joghurt mit fein geriebenem Knoblauch, Zitronensaft, Salz und Pfeffer verrühren.",
      "Reis auf Schalen verteilen und mit Salat, Gemüse, Hähnchen und Joghurtsauce anrichten."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Hähnchenstreifen in kleinen Portionen braten, damit sie kräftige Röstaromen bekommen."
  },
  {
    "id": "ko-0042",
    "name": "Kürbis-Gnocchi-Pfanne",
    "emoji": "🎃",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "gnocchi",
      "kuerbis",
      "butter",
      "parmesan",
      "zwiebeln",
      "spinat",
      "bruehe"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "kuerbis": [
        600,
        "g"
      ],
      "butter": [
        40,
        "g"
      ],
      "parmesan": [
        70,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "spinat": [
        200,
        "g"
      ],
      "bruehe": [
        150,
        "ml"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Kürbis in 1,5 cm große Würfel und Zwiebel in feine Streifen schneiden.",
      "Kürbis in der Hälfte der Butter 10 Minuten braten, Zwiebel zufügen und 4 Minuten weitergaren.",
      "Gnocchi in einer zweiten Pfanne mit restlicher Butter goldbraun braten.",
      "Brühe und Spinat zum Kürbis geben und 3 Minuten einkochen.",
      "Gnocchi unterheben, abschmecken und mit Parmesan servieren."
    ],
    "stepTimers": [
      null,
      10,
      null,
      3,
      null
    ],
    "tip": "Kleine Kürbiswürfel garen schnell genug und bleiben trotzdem formstabil."
  },
  {
    "id": "ko-0043",
    "name": "Vegane Bolognese",
    "emoji": "🍝",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "linsen",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "karotten",
      "sellerie",
      "tomatenmark",
      "olivenoel"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "linsen": [
        250,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "karotten": [
        200,
        "g"
      ],
      "sellerie": [
        150,
        "g"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sellerie"
    ],
    "steps": [
      "Linsen abspülen; Zwiebel, Karotten, Sellerie und Knoblauch sehr fein würfeln.",
      "Gemüse im Öl 7 Minuten braten und Tomatenmark kurz mitrösten.",
      "Linsen, Tomaten und 400 ml Wasser zugeben und 25 bis 30 Minuten köcheln.",
      "Nudeln bissfest kochen und etwas Kochwasser auffangen.",
      "Sauce abschmecken, Konsistenz anpassen und mit den Nudeln servieren."
    ],
    "stepTimers": [
      null,
      7,
      30,
      null,
      null
    ],
    "tip": "Die Linsen regelmäßig prüfen und nur bei Bedarf zusätzliches Wasser angießen."
  },
  {
    "id": "ko-0044",
    "name": "Rinderbraten mit Klößen",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "rindfleisch",
      "kartoffeln",
      "karotten",
      "zwiebeln",
      "sellerie",
      "bruehe",
      "rotwein",
      "eier",
      "speisestaerke"
    ],
    "amounts": {
      "rindfleisch": [
        1200,
        "g"
      ],
      "kartoffeln": [
        1200,
        "g"
      ],
      "karotten": [
        300,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "sellerie": [
        180,
        "g"
      ],
      "bruehe": [
        800,
        "ml"
      ],
      "rotwein": [
        300,
        "ml"
      ],
      "eier": [
        1,
        "Stück"
      ],
      "speisestaerke": [
        80,
        "g"
      ]
    },
    "prepMinutes": 40,
    "cookMinutes": 150,
    "restMinutes": 0,
    "minutes": 190,
    "difficulty": "Aufwendig",
    "allergens": [
      "eier",
      "sellerie"
    ],
    "steps": [
      "Fleisch trocken tupfen, kräftig würzen und in einem Bräter rundherum dunkel anbraten.",
      "Gemüse grob würfeln, mitrösten, mit Rotwein ablöschen und Brühe angießen.",
      "Zugedeckt bei 170 °C etwa 2 Stunden schmoren, bis das Fleisch weich ist.",
      "Kartoffeln weich kochen, pressen und mit Ei sowie Stärke zu acht Klößen formen.",
      "18 Minuten in siedendem Wasser gar ziehen lassen.",
      "Braten ruhen lassen, Sauce pürieren und abschmecken.",
      "Fleisch aufschneiden und mit Klößen servieren."
    ],
    "stepTimers": [
      null,
      null,
      120,
      null,
      18,
      null,
      null
    ],
    "tip": "Das Fleisch quer zur Faser schneiden und vorab zehn Minuten ruhen lassen."
  },
  {
    "id": "ko-0045",
    "name": "Lasagne",
    "emoji": "🥘",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "lasagneplatten",
      "hackfleisch",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "milch",
      "butter",
      "mehl",
      "reibekaese",
      "tomatenmark"
    ],
    "amounts": {
      "lasagneplatten": [
        250,
        "g"
      ],
      "hackfleisch": [
        500,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "milch": [
        700,
        "ml"
      ],
      "butter": [
        60,
        "g"
      ],
      "mehl": [
        60,
        "g"
      ],
      "reibekaese": [
        220,
        "g"
      ],
      "tomatenmark": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hackfleisch mit Zwiebel und Knoblauch vollständig bräunen.",
      "Tomatenmark und Tomaten zugeben und 20 Minuten köcheln.",
      "Butter schmelzen, Mehl einrühren und Milch nach und nach klümpchenfrei zugeben.",
      "Die Sauce bei kleiner Hitze 5 Minuten sanft köcheln lassen und anschließend noch einmal abschmecken.",
      "Backofen auf 190 °C vorheizen und etwas Tomatensauce in eine Form geben.",
      "Lasagneplatten, Tomatensauce und helle Sauce abwechselnd schichten.",
      "Mit Sauce und Käse abschließen.",
      "45 bis 50 Minuten backen und vor dem Anschneiden 10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      20,
      null,
      5,
      null,
      null,
      null,
      50
    ],
    "tip": "Die Ruhezeit stabilisiert die Schichten und verhindert, dass die Lasagne zerläuft."
  },
  {
    "id": "ko-0046",
    "name": "Schweinebraten",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "schweinefleisch",
      "kartoffeln",
      "zwiebeln",
      "karotten",
      "bruehe",
      "senf",
      "kuemmel"
    ],
    "amounts": {
      "schweinefleisch": [
        1200,
        "g"
      ],
      "kartoffeln": [
        1000,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "senf": [
        2,
        "EL"
      ],
      "kuemmel": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 120,
    "restMinutes": 0,
    "minutes": 145,
    "difficulty": "Mittel",
    "allergens": [
      "senf"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen.",
      "Fleisch trocken tupfen, mit Senf einreiben und würzen.",
      "Zwiebeln und Karotten grob schneiden und mit dem Fleisch in einen Bräter geben.",
      "Die Hälfte der Brühe angießen und 75 Minuten offen braten.",
      "Dabei zweimal mit Bratensaft übergießen.",
      "Kartoffeln würfeln, zugeben, restliche Brühe angießen und weitere 35 bis 45 Minuten garen.",
      "Fleisch 10 Minuten ruhen lassen, Kerntemperatur prüfen, Sauce abschmecken und servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      75,
      null,
      45,
      10
    ],
    "tip": "Ein Küchenthermometer liefert zuverlässigere Garergebnisse als die Beurteilung nach Farbe."
  },
  {
    "id": "ko-0047",
    "name": "Paella",
    "emoji": "🥘",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "haehnchen",
      "garnelen",
      "paprika",
      "erbsen",
      "zwiebeln",
      "dosentomaten",
      "bruehe",
      "safran",
      "olivenoel"
    ],
    "amounts": {
      "reis": [
        350,
        "g"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "garnelen": [
        300,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "dosentomaten": [
        300,
        "g"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "safran": [
        1,
        "Päckchen"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Mittel",
    "allergens": [
      "schalentiere"
    ],
    "steps": [
      "Hähnchen würfeln, Garnelen trocken tupfen und Gemüse vorbereiten.",
      "Hähnchen im Öl vollständig anbraten und herausnehmen.",
      "Zwiebel und Paprika 5 Minuten braten.",
      "Reis, Tomaten und Safran einrühren, Brühe angießen und Hähnchen zurückgeben.",
      "Ohne häufiges Rühren 20 Minuten sanft garen.",
      "Erbsen nach 12 Minuten zufügen.",
      "Garnelen auflegen und 5 bis 6 Minuten vollständig garen.",
      "Paella vor dem Servieren 5 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      20,
      12,
      6,
      5
    ],
    "tip": "Nach Zugabe der Brühe möglichst nicht mehr rühren, damit sich am Boden eine leichte Kruste bilden kann."
  },
  {
    "id": "ko-0048",
    "name": "Selbstgemachte Pizza",
    "emoji": "🍕",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "mehl",
      "hefe",
      "dosentomaten",
      "mozzarella",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "mehl": [
        500,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "mozzarella": [
        300,
        "g"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 90,
    "restMinutes": 0,
    "minutes": 120,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Mehl, Hefe, 300 ml lauwarmes Wasser, zwei Esslöffel Öl und einen Teelöffel Salz 8 Minuten kneten.",
      "Teig abdecken und 60 Minuten gehen lassen, bis er deutlich größer ist.",
      "Tomaten mit Salz und Pfeffer würzen.",
      "Backofen mit Blech auf 250 °C vorheizen.",
      "Teig in vier Portionen dünn ausziehen, sparsam mit Tomaten und abgetropftem Mozzarella belegen.",
      "Pizzen nacheinander 8 bis 12 Minuten backen und mit Basilikum sowie restlichem Öl servieren."
    ],
    "stepTimers": [
      8,
      60,
      null,
      null,
      null,
      12
    ],
    "tip": "Belag sparsam verwenden; zu viel Flüssigkeit verhindert einen knusprigen Boden."
  },
  {
    "id": "ko-0049",
    "name": "Gulasch",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "rindfleisch",
      "zwiebeln",
      "paprika",
      "paprikapulver",
      "tomatenmark",
      "bruehe",
      "olivenoel"
    ],
    "amounts": {
      "rindfleisch": [
        900,
        "g"
      ],
      "zwiebeln": [
        500,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "paprikapulver": [
        3,
        "TL"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 110,
    "restMinutes": 0,
    "minutes": 135,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Fleisch trocken tupfen und in 3 cm große Würfel schneiden.",
      "Zwiebeln fein würfeln.",
      "Fleisch portionsweise im heißen Öl kräftig anbraten und herausnehmen.",
      "Zwiebeln 10 Minuten bräunen, Tomatenmark und Paprikapulver kurz einrühren.",
      "Fleisch und Brühe zugeben und zugedeckt 80 Minuten leise schmoren.",
      "Paprika würfeln, weitere 20 Minuten mitgaren und das Gulasch abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      10,
      80,
      20
    ],
    "tip": "Paprikapulver nur kurz und nicht bei zu hoher Hitze rösten, sonst wird es bitter."
  },
  {
    "id": "ko-0050",
    "name": "Ramen from scratch",
    "emoji": "🍜",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "eier",
      "sojasauce",
      "champignons",
      "zwiebeln",
      "ingwer",
      "knoblauch",
      "bruehe",
      "spinat",
      "sesam"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "sojasauce": [
        8,
        "EL"
      ],
      "champignons": [
        350,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "ingwer": [
        30,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "bruehe": [
        1600,
        "ml"
      ],
      "spinat": [
        200,
        "g"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 135,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "sesam"
    ],
    "steps": [
      "Zwiebeln halbieren und mit Ingwer sowie Knoblauch kräftig anrösten.",
      "Brühe und vier Esslöffel Sojasauce zugeben.",
      "Brühe 60 Minuten sanft köcheln und anschließend durch ein feines Sieb gießen.",
      "Eier 7 Minuten kochen, abschrecken, pellen und in übriger Sojasauce 20 Minuten marinieren.",
      "Pilze braten, Spinat kurz zusammenfallen lassen und Nudeln separat nach Packungsangabe garen.",
      "Nudeln auf Schalen verteilen, heiße Brühe angießen und mit Gemüse, halbierten Eiern und Sesam anrichten."
    ],
    "stepTimers": [
      null,
      null,
      60,
      20,
      null,
      null
    ],
    "tip": "Nudeln separat garen, damit die Brühe klar bleibt und beim Aufbewahren nichts aufquillt."
  },
  {
    "id": "ko-0051",
    "name": "Kürbisrisotto mit Salbeibutter",
    "emoji": "🎃",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "kuerbis",
      "butter",
      "parmesan",
      "salbei",
      "zwiebeln",
      "bruehe",
      "weisswein"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "kuerbis": [
        500,
        "g"
      ],
      "butter": [
        70,
        "g"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "salbei": [
        15,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "weisswein": [
        120,
        "ml"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Brühe heiß halten; Kürbis klein würfeln und die Hälfte in 20 g Butter weich braten.",
      "Zwiebel in weiterer Butter glasig dünsten, Reis mitrösten und mit Weißwein ablöschen.",
      "Brühe portionsweise einrühren und den Reis 18 bis 22 Minuten garen.",
      "Kürbis nach 10 Minuten zufügen.",
      "Salbei in restlicher Butter knusprig braten.",
      "Parmesan unter das Risotto ziehen, abschmecken und mit Salbeibutter servieren."
    ],
    "stepTimers": [
      null,
      null,
      22,
      10,
      null,
      null
    ],
    "tip": "Risotto soll fließend cremig sein; bei Bedarf unmittelbar vor dem Servieren etwas Brühe ergänzen."
  },
  {
    "id": "ko-0052",
    "name": "Apfelkuchen",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "apfel",
      "zucker",
      "butter",
      "eier",
      "backpulver",
      "zimt",
      "milch"
    ],
    "amounts": {
      "mehl": [
        300,
        "g"
      ],
      "apfel": [
        5,
        "Stück"
      ],
      "zucker": [
        160,
        "g"
      ],
      "butter": [
        160,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "milch": [
        80,
        "ml"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen und eine Springform fetten.",
      "Äpfel schälen, entkernen und in dünne Spalten schneiden.",
      "Butter und Zucker cremig rühren, Eier einzeln einarbeiten und Milch zugeben.",
      "Mehl, Backpulver und Zimt kurz unterheben.",
      "Teig in die Form geben und Äpfel auflegen.",
      "50 bis 55 Minuten backen, Stäbchenprobe machen und vollständig auskühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      55
    ],
    "tip": "Mehl nur kurz unterrühren, damit der Kuchen locker bleibt."
  },
  {
    "id": "ko-0053",
    "name": "Bananenbrot",
    "emoji": "🍌",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "banane",
      "zucker",
      "butter",
      "eier",
      "backpulver",
      "zimt",
      "mandeln"
    ],
    "amounts": {
      "mehl": [
        280,
        "g"
      ],
      "banane": [
        4,
        "Stück"
      ],
      "zucker": [
        100,
        "g"
      ],
      "butter": [
        100,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "mandeln": [
        70,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen und eine Kastenform fetten oder auslegen.",
      "Drei Bananen fein zerdrücken.",
      "Vierte Banane längs halbieren.",
      "Butter, Zucker und Eier verrühren, anschließend Bananenmus einarbeiten.",
      "Mehl, Backpulver, Zimt und gehackte Mandeln kurz unterheben.",
      "Teig einfüllen, Bananenhälften auflegen und 50 bis 55 Minuten backen.",
      "Stäbchenprobe machen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      55,
      null
    ],
    "tip": "Sehr reife Bananen mit brauner Schale liefern das beste Aroma und natürliche Süße."
  },
  {
    "id": "ko-0054",
    "name": "Zimtschnecken",
    "emoji": "🌀",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "hefe",
      "milch",
      "butter",
      "zucker",
      "zimt",
      "eier"
    ],
    "amounts": {
      "mehl": [
        500,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "milch": [
        250,
        "ml"
      ],
      "butter": [
        120,
        "g"
      ],
      "zucker": [
        120,
        "g"
      ],
      "zimt": [
        3,
        "TL"
      ],
      "eier": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 135,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Hefe, lauwarme Milch, Ei, 50 g Zucker und 50 g weiche Butter 8 Minuten kneten.",
      "Teig abdecken und 60 Minuten gehen lassen.",
      "Teig rechteckig ausrollen, mit 70 g Butter bestreichen und mit restlichem Zucker sowie Zimt bestreuen.",
      "Aufrollen, in zwölf Scheiben schneiden und mit Abstand in eine Form setzen.",
      "20 Minuten gehen lassen.",
      "Bei 180 °C 20 bis 25 Minuten goldbraun backen und lauwarm servieren."
    ],
    "stepTimers": [
      8,
      60,
      null,
      null,
      20,
      25
    ],
    "tip": "Milch nur handwarm verwenden; zu hohe Temperatur kann die Hefe schädigen."
  },
  {
    "id": "ko-0055",
    "name": "Enchiladas",
    "emoji": "🌯",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tortilla",
      "hackfleisch",
      "dosentomaten",
      "reibekaese",
      "zwiebeln",
      "paprika",
      "bohnen",
      "paprikapulver"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "hackfleisch": [
        500,
        "g"
      ],
      "dosentomaten": [
        700,
        "g"
      ],
      "reibekaese": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "bohnen": [
        240,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen.",
      "Zwiebel und Paprika würfeln.",
      "Hackfleisch vollständig krümelig braten, Gemüse zugeben und 6 Minuten mitbraten.",
      "Bohnen und 250 g Tomaten einrühren, würzen und 5 Minuten einkochen.",
      "Füllung auf Tortillas verteilen, aufrollen und mit der Naht nach unten in eine Form legen.",
      "Übrige Tomaten und Käse darübergeben und 25 Minuten backen."
    ],
    "stepTimers": [
      null,
      null,
      6,
      5,
      null,
      25
    ],
    "tip": "Tortillas kurz erwärmen, dann lassen sie sich ohne Reißen aufrollen."
  },
  {
    "id": "ko-0056",
    "name": "Pad Thai",
    "emoji": "🍜",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reisnudeln",
      "tofu",
      "eier",
      "karotten",
      "erdnuesse",
      "sojasauce",
      "limette",
      "zucker",
      "fruehlingszwiebeln"
    ],
    "amounts": {
      "reisnudeln": [
        400,
        "g"
      ],
      "tofu": [
        350,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "erdnuesse": [
        80,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "zucker": [
        30,
        "g"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "erdnuesse",
      "soja"
    ],
    "steps": [
      "Reisnudeln nach Packungsangabe einweichen, abgießen und bereitstellen.",
      "Tofu würfeln und in einer großen Pfanne knusprig braten.",
      "Karottenstifte kurz mitbraten.",
      "Gemüse an den Rand schieben, Eier in der Mitte vollständig stocken lassen.",
      "Sojasauce, Limettensaft und Zucker verrühren.",
      "Mit Nudeln in die Pfanne geben und 3 Minuten schwenken.",
      "Mit Frühlingszwiebeln und grob gehackten Erdnüssen servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      3,
      null
    ],
    "tip": "Alle Zutaten vor dem Braten vorbereiten, da das Gericht im Wok sehr schnell fertig wird."
  },
  {
    "id": "ko-0057",
    "name": "Katsu Curry",
    "emoji": "🍛",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "reis",
      "karotten",
      "zwiebeln",
      "currypulver",
      "bruehe",
      "mehl",
      "eier",
      "paniermehl",
      "olivenoel"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "mehl": [
        70,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "paniermehl": [
        150,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier"
    ],
    "steps": [
      "Reis garen; Zwiebel und Karotten klein schneiden und 5 Minuten anbraten.",
      "Currypulver kurz mitrösten, Brühe angießen und 15 Minuten köcheln.",
      "Anschließend fein pürieren.",
      "Hähnchen flach klopfen und nacheinander in Mehl, Ei und Paniermehl wenden.",
      "Im Öl je Seite 5 bis 6 Minuten goldbraun und vollständig durchgaren.",
      "Hähnchen kurz ruhen lassen, aufschneiden und mit Reis sowie Currysauce servieren."
    ],
    "stepTimers": [
      5,
      15,
      null,
      null,
      6,
      null
    ],
    "tip": "Die Hitze beim Braten mittelhoch halten, damit die Panade bräunt, ohne vor dem Fleisch zu verbrennen."
  },
  {
    "id": "ko-0058",
    "name": "Butter Chicken",
    "emoji": "🍛",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "dosentomaten",
      "sahne",
      "butter",
      "currypulver",
      "knoblauch",
      "ingwer",
      "zwiebeln",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        650,
        "g"
      ],
      "dosentomaten": [
        700,
        "g"
      ],
      "sahne": [
        180,
        "ml"
      ],
      "butter": [
        50,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Reis garen; Hähnchen würfeln, Zwiebel, Knoblauch und Ingwer fein schneiden.",
      "Hähnchen in der Hälfte der Butter portionsweise vollständig anbraten und herausnehmen.",
      "Restliche Butter, Zwiebel, Knoblauch, Ingwer und Currypulver 4 Minuten anschwitzen.",
      "Tomaten zugeben, 15 Minuten köcheln und die Sauce fein pürieren.",
      "Sahne und Hähnchen einrühren, 8 Minuten sanft garen und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      4,
      15,
      8
    ],
    "tip": "Nach Zugabe der Sahne nur noch sanft köcheln, damit die Sauce glatt bleibt."
  },
  {
    "id": "ko-0059",
    "name": "Miso-Suppe",
    "emoji": "🍲",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "miso",
      "tofu",
      "champignons",
      "ingwer",
      "fruehlingszwiebeln",
      "sojasauce",
      "bruehe"
    ],
    "amounts": {
      "miso": [
        80,
        "g"
      ],
      "tofu": [
        300,
        "g"
      ],
      "champignons": [
        250,
        "g"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "sojasauce": [
        2,
        "EL"
      ],
      "bruehe": [
        1000,
        "ml"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Tofu würfeln, Pilze in Scheiben und Frühlingszwiebeln in feine Ringe schneiden.",
      "Brühe mit Ingwer aufkochen und Pilze 6 Minuten sanft garen.",
      "Tofu zugeben und weitere 3 Minuten erhitzen.",
      "Miso mit einer Kelle heißer Brühe in einer Schüssel glatt rühren.",
      "Topf vom Herd nehmen, Misomischung und Sojasauce einrühren und mit Frühlingszwiebeln servieren."
    ],
    "stepTimers": [
      null,
      6,
      3,
      null,
      null
    ],
    "tip": "Miso nach dem Einrühren nicht mehr sprudelnd kochen, damit Aroma und Struktur erhalten bleiben."
  },
  {
    "id": "ko-0060",
    "name": "Gyoza",
    "emoji": "🥟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "gyozateig",
      "hackfleisch",
      "weisskohl",
      "ingwer",
      "knoblauch",
      "sojasauce",
      "sesam"
    ],
    "amounts": {
      "gyozateig": [
        24,
        "Stück"
      ],
      "hackfleisch": [
        350,
        "g"
      ],
      "weisskohl": [
        250,
        "g"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 53,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Weißkohl sehr fein schneiden, leicht salzen, 10 Minuten ziehen lassen und kräftig ausdrücken.",
      "Hackfleisch mit Kohl, geriebenem Ingwer, Knoblauch und zwei Esslöffeln Sojasauce vermengen.",
      "Je einen Teelöffel Füllung auf die Teigblätter geben, Ränder anfeuchten und gefaltet verschließen.",
      "Gyoza mit wenig Öl 3 Minuten anbraten, 100 ml Wasser angießen und zugedeckt 6 Minuten dämpfen.",
      "Deckel abnehmen, Flüssigkeit verdampfen lassen und mit übriger Sojasauce sowie Sesam servieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      6,
      null
    ],
    "tip": "Teigränder frei von Füllung halten, damit die Taschen beim Garen geschlossen bleiben."
  },
  {
    "id": "ko-0061",
    "name": "Ratatouille",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "zucchini",
      "paprika",
      "tomaten",
      "zwiebeln",
      "knoblauch",
      "olivenoel",
      "thymian"
    ],
    "amounts": {
      "aubergine": [
        1,
        "Stück"
      ],
      "zucchini": [
        2,
        "Stück"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "tomaten": [
        700,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "thymian": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Aubergine, Zucchini und Paprika in 2 cm große Würfel schneiden.",
      "Zwiebel und Knoblauch hacken.",
      "Aubergine portionsweise in Öl kräftig anbraten und herausnehmen.",
      "Zwiebel und Paprika 7 Minuten braten, dann Zucchini und Knoblauch zufügen.",
      "Tomaten, Aubergine und Thymian einrühren und 25 Minuten offen sanft schmoren.",
      "Gemüse auf Gargrad prüfen, abschmecken und vor dem Servieren 5 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      7,
      25,
      5
    ],
    "tip": "Gemüsesorten nacheinander anbraten, damit sie Röstaromen entwickeln und nicht wässrig werden."
  },
  {
    "id": "ko-0062",
    "name": "Moussaka",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "hackfleisch",
      "kartoffeln",
      "dosentomaten",
      "zwiebeln",
      "milch",
      "butter",
      "mehl",
      "reibekaese"
    ],
    "amounts": {
      "aubergine": [
        3,
        "Stück"
      ],
      "hackfleisch": [
        500,
        "g"
      ],
      "kartoffeln": [
        600,
        "g"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "milch": [
        500,
        "ml"
      ],
      "butter": [
        50,
        "g"
      ],
      "mehl": [
        50,
        "g"
      ],
      "reibekaese": [
        120,
        "g"
      ]
    },
    "prepMinutes": 40,
    "cookMinutes": 65,
    "restMinutes": 0,
    "minutes": 105,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Kartoffeln in Scheiben 8 Minuten vorkochen.",
      "Auberginen schneiden, salzen, trocken tupfen und portionsweise braten.",
      "Hackfleisch mit Zwiebel vollständig bräunen, Tomaten zugeben und 20 Minuten einkochen.",
      "Butter schmelzen, Mehl einrühren und Milch portionsweise zufügen.",
      "5 Minuten zu einer glatten Sauce kochen.",
      "Kartoffeln, Auberginen und Fleischsauce in eine Form schichten, helle Sauce und Käse daraufgeben.",
      "Bei 190 °C 45 Minuten backen und vor dem Anschneiden 10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      8,
      null,
      20,
      null,
      5,
      null,
      45
    ],
    "tip": "Auberginen gut bräunen und nicht nur weich dünsten; das gibt der Moussaka mehr Geschmack."
  },
  {
    "id": "ko-0063",
    "name": "Okonomiyaki",
    "emoji": "🥞",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "eier",
      "weisskohl",
      "karotten",
      "speck",
      "sojasauce",
      "fruehlingszwiebeln"
    ],
    "amounts": {
      "mehl": [
        220,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "weisskohl": [
        600,
        "g"
      ],
      "karotten": [
        150,
        "g"
      ],
      "speck": [
        160,
        "g"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "soja"
    ],
    "steps": [
      "Mehl mit Eiern, 220 ml Wasser und einem Esslöffel Sojasauce glatt rühren.",
      "Weißkohl fein hobeln, Karotten raspeln und mit Frühlingszwiebeln unter den Teig heben.",
      "Speck in einer Pfanne kurz anbraten und ein Viertel der Kohlmasse darauf verteilen.",
      "Bei mittlerer Hitze 6 Minuten braten, vorsichtig wenden und weitere 5 Minuten vollständig garen.",
      "Drei weitere Pfannkuchen ebenso backen und mit übriger Sojasauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      null
    ],
    "tip": "Kleine, nicht zu dicke Pfannkuchen lassen sich sicherer wenden und garen gleichmäßig."
  },
  {
    "id": "ko-0064",
    "name": "Tacos al Pastor",
    "emoji": "🌮",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "schweinefleisch",
      "ananas",
      "tortilla",
      "zwiebeln",
      "chili",
      "paprikapulver",
      "limette",
      "koriander"
    ],
    "amounts": {
      "schweinefleisch": [
        650,
        "g"
      ],
      "ananas": [
        350,
        "g"
      ],
      "tortilla": [
        12,
        "Stück"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "koriander": [
        20,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Schweinefleisch in dünne Streifen schneiden und mit Paprikapulver, Chili und Limettensaft mischen.",
      "Ananas und eine Zwiebel klein würfeln, zweite Zwiebel in feine Ringe schneiden.",
      "Fleisch in einer sehr heißen Pfanne portionsweise vollständig durchgaren.",
      "Ananaswürfel und gewürfelte Zwiebel zufügen und 5 Minuten karamellisieren.",
      "Tortillas erwärmen und mit Fleischmischung, Zwiebelringen, Koriander und Limette füllen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      null
    ],
    "tip": "Dünne Fleischstreifen und eine sehr heiße Pfanne sorgen für Röstaromen ohne langes Garen."
  },
  {
    "id": "ko-0065",
    "name": "Croque Monsieur",
    "emoji": "🥪",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "toast",
      "schinken",
      "reibekaese",
      "butter",
      "milch",
      "mehl",
      "senf"
    ],
    "amounts": {
      "toast": [
        8,
        "Stück"
      ],
      "schinken": [
        200,
        "g"
      ],
      "reibekaese": [
        220,
        "g"
      ],
      "butter": [
        35,
        "g"
      ],
      "milch": [
        250,
        "ml"
      ],
      "mehl": [
        25,
        "g"
      ],
      "senf": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Backofen auf 220 °C vorheizen.",
      "25 g Butter schmelzen und Mehl 1 Minute einrühren.",
      "Milch nach und nach zufügen und 4 Minuten zu einer dicken Sauce kochen.",
      "Die Hälfte des Käses einrühren.",
      "Vier Toastscheiben mit Senf bestreichen, mit Schinken und etwas Sauce belegen und zuklappen.",
      "Sandwiches außen dünn buttern und auf ein Blech setzen.",
      "Übrige Sauce und Käse darauf verteilen und 8 bis 10 Minuten goldbraun überbacken."
    ],
    "stepTimers": [
      null,
      1,
      4,
      null,
      null,
      null,
      10
    ],
    "tip": "Die Sauce dick einkochen, damit sie beim Überbacken auf dem Brot bleibt."
  },
  {
    "id": "ko-0066",
    "name": "Boeuf Bourguignon",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "karotten",
      "champignons",
      "zwiebeln",
      "speck",
      "rotwein",
      "bruehe",
      "tomatenmark",
      "thymian"
    ],
    "amounts": {
      "rindfleisch": [
        900,
        "g"
      ],
      "karotten": [
        300,
        "g"
      ],
      "champignons": [
        350,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "speck": [
        150,
        "g"
      ],
      "rotwein": [
        600,
        "ml"
      ],
      "bruehe": [
        400,
        "ml"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "thymian": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 150,
    "restMinutes": 0,
    "minutes": 185,
    "difficulty": "Aufwendig",
    "allergens": [],
    "steps": [
      "Speck auslassen; Fleisch trocken tupfen und portionsweise im Speckfett kräftig anbraten.",
      "Zwiebeln und Karotten 6 Minuten mitrösten, Tomatenmark kurz einarbeiten.",
      "Mit Rotwein ablöschen, Brühe und Thymian zugeben und zugedeckt bei 165 °C 2 Stunden schmoren.",
      "Pilze separat kräftig braten und in den letzten 20 Minuten zum Fleisch geben.",
      "Fleisch auf Zartheit prüfen, Sauce bei Bedarf offen einkochen und abschmecken."
    ],
    "stepTimers": [
      null,
      6,
      120,
      20,
      null
    ],
    "tip": "Fleisch portionsweise braten; ein überfüllter Topf verhindert die gewünschte Bräunung."
  },
  {
    "id": "ko-0067",
    "name": "Baba Ganoush mit Fladenbrot",
    "emoji": "🫓",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "fladenbrot",
      "sesam",
      "zitrone",
      "knoblauch",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "aubergine": [
        3,
        "Stück"
      ],
      "fladenbrot": [
        2,
        "Stück"
      ],
      "sesam": [
        4,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sesam"
    ],
    "steps": [
      "Backofen auf 230 °C vorheizen.",
      "Auberginen mehrfach einstechen und auf ein Blech legen.",
      "35 bis 45 Minuten backen, bis die Haut dunkel und das Fruchtfleisch sehr weich ist.",
      "Auberginen aufschneiden, Fruchtfleisch herauslösen und 10 Minuten abtropfen lassen.",
      "Mit Sesam, Zitronensaft, Knoblauch und Öl fein oder grob pürieren und abschmecken.",
      "Fladenbrot erwärmen und mit Baba Ganoush sowie Petersilie servieren."
    ],
    "stepTimers": [
      null,
      null,
      45,
      10,
      null,
      null
    ],
    "tip": "Das Abtropfen verhindert eine wässrige Creme und konzentriert das Röstaroma."
  },
  {
    "id": "ko-0068",
    "name": "Shepherd's Pie",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "kartoffeln",
      "karotten",
      "zwiebeln",
      "erbsen",
      "bruehe",
      "tomatenmark",
      "milch",
      "butter"
    ],
    "amounts": {
      "hackfleisch": [
        600,
        "g"
      ],
      "kartoffeln": [
        1000,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "bruehe": [
        350,
        "ml"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "milch": [
        150,
        "ml"
      ],
      "butter": [
        40,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 85,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Kartoffeln weich kochen, abgießen und mit Milch sowie Butter stampfen.",
      "Hackfleisch vollständig bräunen, Zwiebel und Karotten zufügen und 6 Minuten braten.",
      "Tomatenmark kurz mitrösten, Brühe und Erbsen einrühren und 12 Minuten einkochen.",
      "Fleischfüllung in eine Form geben und Kartoffelpüree gleichmäßig darauf verstreichen.",
      "Bei 200 °C 25 bis 30 Minuten backen, bis die Oberfläche goldbraun ist."
    ],
    "stepTimers": [
      null,
      6,
      12,
      null,
      30
    ],
    "tip": "Mit einer Gabel Rillen ins Püree ziehen; die Spitzen werden im Ofen besonders knusprig."
  },
  {
    "id": "ko-0069",
    "name": "Churros mit Schokosoße",
    "emoji": "🍩",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "butter",
      "eier",
      "zucker",
      "zimt",
      "schokolade",
      "sahne"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "butter": [
        60,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "zucker": [
        100,
        "g"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "schokolade": [
        180,
        "g"
      ],
      "sahne": [
        180,
        "ml"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "250 ml Wasser mit Butter und einer Prise Salz aufkochen, Mehl auf einmal einrühren und 2 Minuten abbrennen.",
      "Teig kurz abkühlen lassen und Eier einzeln gründlich einarbeiten.",
      "Teig in einen stabilen Spritzbeutel mit Sterntülle füllen und Streifen auf Backpapier spritzen.",
      "Churros portionsweise in 170 °C heißem Frittieröl 4 bis 5 Minuten goldbraun garen und in Zimtzucker wenden.",
      "Sahne erhitzen, über Schokolade gießen, glatt rühren und als Sauce servieren."
    ],
    "stepTimers": [
      2,
      null,
      null,
      5,
      null
    ],
    "tip": "Öltemperatur kontrollieren: Zu heißes Öl bräunt die Churros, bevor sie innen gar sind."
  },
  {
    "id": "ko-0070",
    "name": "Tiramisu",
    "emoji": "🍰",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mascarpone",
      "loeffelbiskuits",
      "kaffee",
      "eier",
      "zucker",
      "kakao"
    ],
    "amounts": {
      "mascarpone": [
        500,
        "g"
      ],
      "loeffelbiskuits": [
        250,
        "g"
      ],
      "kaffee": [
        250,
        "ml"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "zucker": [
        100,
        "g"
      ],
      "kakao": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 240,
    "restMinutes": 0,
    "minutes": 270,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Starken Kaffee brühen, in eine flache Schale geben und vollständig abkühlen lassen.",
      "Für eine sichere Zubereitung pasteurisierte Eier verwenden. Eier trennen und Eigelb mit Zucker mehrere Minuten dickcremig aufschlagen.",
      "Mascarpone nur kurz glatt unterrühren.",
      "Eiweiß in einer sauberen Schüssel steif schlagen und vorsichtig unter die Mascarponecreme heben.",
      "Löffelbiskuits jeweils nur kurz im kalten Kaffee wenden und abwechselnd mit der Creme in eine Form schichten.",
      "Mindestens 4 Stunden vollständig durchkühlen lassen und erst direkt vor dem Servieren mit Backkakao bestäuben."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      240
    ],
    "tip": "Pasteurisierte Eier verwenden und das Tiramisu durchgehend gekühlt aufbewahren."
  },
  {
    "id": "ko-0071",
    "name": "Crème brûlée",
    "emoji": "🍮",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "sahne",
      "eier",
      "zucker",
      "vanille"
    ],
    "amounts": {
      "sahne": [
        200,
        "ml"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "zucker": [
        100,
        "g"
      ],
      "vanille": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 45,
    "restMinutes": 120,
    "minutes": 195,
    "difficulty": "Anspruchsvoll",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 150 °C Ober-/Unterhitze vorheizen und vier ofenfeste Förmchen in eine tiefe Form stellen.",
      "Sahne mit Vanille langsam erhitzen, aber nicht kochen lassen.",
      "Anschließend einige Minuten ziehen lassen.",
      "Eier trennen. Eigelb mit einem Teil des Zuckers verrühren, ohne zu viel Luft einzuschlagen, und die warme Sahne langsam unterrühren.",
      "Creme durch ein feines Sieb in die Förmchen gießen. Heißes Wasser bis etwa zur halben Höhe der Förmchen angießen und 35 bis 45 Minuten stocken lassen.",
      "Vollständig abkühlen und mindestens 2 Stunden kühlen. Restlichen Zucker dünn aufstreuen und unmittelbar vor dem Servieren karamellisieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      45,
      120
    ],
    "tip": "Die Creme ist fertig, wenn der Rand fest ist und die Mitte beim Bewegen noch leicht wackelt."
  },
  {
    "id": "ko-0072",
    "name": "Pho",
    "emoji": "🍜",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "haehnchen",
      "bruehe",
      "ingwer",
      "zwiebeln"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 60,
    "restMinutes": 0,
    "minutes": 85,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Zwiebeln halbieren und mit den Schnittflächen in einem großen Topf kräftig anrösten.",
      "Ingwer in Scheiben schneiden und kurz mitrösten.",
      "Brühe angießen, Hähnchenbrust einlegen und bei kleiner Hitze vollständig gar ziehen lassen.",
      "Anschließend herausnehmen und in feine Stücke schneiden.",
      "Brühe durch ein Sieb gießen, erneut erhitzen und mit Salz sowie nach Wunsch etwas Säure sorgfältig abschmecken.",
      "Nudeln nach Packungsangabe separat garen, abgießen und auf vorgewärmte Schalen verteilen.",
      "Hähnchen auf die Nudeln geben, mit der kochend heißen Brühe übergießen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Das Hähnchen vollständig durchgaren; die klare Brühe nur sanft köcheln lassen."
  },
  {
    "id": "ko-0073",
    "name": "Poke Bowl",
    "emoji": "🥗",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "tofu",
      "avocado",
      "gurke",
      "karotten",
      "sojasauce",
      "sesam",
      "limette"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "tofu": [
        500,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "limette": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis garen und auf Zimmertemperatur abkühlen lassen.",
      "Tofu pressen, würfeln und in einer Pfanne rundherum knusprig braten.",
      "Gurke schneiden, Karotten stifteln und Avocado würfeln sowie mit Limettensaft beträufeln.",
      "Reis auf vier Schalen verteilen und Gemüse sowie Tofu getrennt darauf anordnen.",
      "Mit Sojasauce beträufeln, Sesam darüberstreuen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Tofu gut auspressen und erst danach würfeln; dadurch bräunt er deutlich besser."
  },
  {
    "id": "ko-0074",
    "name": "Spinat-Kichererbsen-Curry",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "spinat",
      "kichererbsen",
      "currypulver",
      "kokosmilch",
      "knoblauch",
      "zwiebeln",
      "dosentomaten",
      "reis"
    ],
    "amounts": {
      "spinat": [
        500,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "dosentomaten": [
        300,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis garen; Kichererbsen abspülen und Spinat waschen.",
      "Zwiebel 5 Minuten anschwitzen, Knoblauch und Currypulver kurz mitrösten.",
      "Tomaten, Kokosmilch und Kichererbsen einrühren und 15 Minuten köcheln.",
      "Spinat portionsweise zugeben und vollständig zusammenfallen lassen.",
      "Weitere 5 Minuten garen, abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      5,
      15,
      null,
      5
    ],
    "tip": "Spinat erst am Ende zugeben, damit Farbe und Struktur besser erhalten bleiben."
  },
  {
    "id": "ko-0075",
    "name": "Baklava",
    "emoji": "🍯",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "filoteig",
      "butter",
      "mandeln",
      "zucker",
      "honig",
      "zitrone",
      "zimt"
    ],
    "amounts": {
      "filoteig": [
        400,
        "g"
      ],
      "butter": [
        220,
        "g"
      ],
      "mandeln": [
        350,
        "g"
      ],
      "zucker": [
        180,
        "g"
      ],
      "honig": [
        120,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 180 °C vorheizen.",
      "Mandeln grob mahlen und mit Zimt mischen.",
      "Form buttern und mehrere Filoteigblätter einzeln einlegen, jedes dünn mit Butter bestreichen.",
      "Mandeln und weitere gebutterte Teiglagen abwechseln, mit mehreren Teigblättern abschließen.",
      "Vor dem Backen in Rauten schneiden und 40 bis 45 Minuten goldbraun backen.",
      "Zucker, Honig, Zitronensaft und 180 ml Wasser 8 Minuten kochen und über das heiße Baklava gießen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      45,
      8
    ],
    "tip": "Teig während der Arbeit mit einem leicht feuchten Tuch abdecken, damit er nicht austrocknet."
  },
  {
    "id": "ko-0076",
    "name": "Käsefondue",
    "emoji": "🧀",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reibekaese",
      "weisswein",
      "knoblauch",
      "baguette",
      "speisestaerke",
      "zitrone"
    ],
    "amounts": {
      "reibekaese": [
        700,
        "g"
      ],
      "weisswein": [
        350,
        "ml"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "baguette": [
        2,
        "Stück"
      ],
      "speisestaerke": [
        25,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Käse grob reiben, Baguette in mundgerechte Würfel schneiden.",
      "Fondue-Topf mit halbierter Knoblauchzehe ausreiben.",
      "Weißwein mit einem Esslöffel Zitronensaft erhitzen, aber nicht stark kochen.",
      "Käse portionsweise unter ständigem Rühren schmelzen.",
      "Stärke mit wenig kaltem Wasser glatt rühren, einarbeiten und das Fondue bei kleiner Hitze cremig halten."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Käse immer erst vollständig schmelzen lassen, bevor die nächste Portion dazukommt."
  },
  {
    "id": "ko-0077",
    "name": "Wiener Schnitzel",
    "emoji": "🍖",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kalbfleisch",
      "mehl",
      "eier",
      "paniermehl",
      "butter",
      "zitrone"
    ],
    "amounts": {
      "kalbfleisch": [
        600,
        "g"
      ],
      "mehl": [
        100,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "paniermehl": [
        180,
        "g"
      ],
      "butter": [
        120,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Kalbfleisch zwischen Folie gleichmäßig 4 bis 5 mm dünn klopfen und würzen.",
      "Mehl, verquirlte Eier und Paniermehl auf drei Teller verteilen.",
      "Fleisch erst in Mehl, dann Ei und zuletzt locker in Paniermehl wenden.",
      "Panade nicht andrücken.",
      "Schnitzel in reichlich heißer Butter je Seite 2 bis 3 Minuten goldbraun schwenkend ausbacken.",
      "Auf Küchenpapier abtropfen lassen und sofort mit Zitronenspalten servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      3,
      null
    ],
    "tip": "Eine locker sitzende Panade und ausreichend Fett sorgen für die typische gewellte Oberfläche."
  },
  {
    "id": "ko-0078",
    "name": "Rouladen",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "senf",
      "speck",
      "zwiebeln",
      "gewuerzgurken",
      "karotten",
      "bruehe",
      "rotwein"
    ],
    "amounts": {
      "rindfleisch": [
        800,
        "g"
      ],
      "senf": [
        4,
        "EL"
      ],
      "speck": [
        160,
        "g"
      ],
      "zwiebeln": [
        3,
        "Stück"
      ],
      "gewuerzgurken": [
        4,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "rotwein": [
        250,
        "ml"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 120,
    "restMinutes": 0,
    "minutes": 155,
    "difficulty": "Aufwendig",
    "allergens": [
      "senf"
    ],
    "steps": [
      "Rouladen flach auslegen, würzen, mit Senf bestreichen und mit Speck, Zwiebelstreifen sowie Gurken belegen.",
      "Seiten einklappen, fest aufrollen und mit Küchengarn fixieren.",
      "Rouladen rundherum kräftig anbraten.",
      "Karotten und übrige Zwiebeln mitrösten.",
      "Mit Rotwein ablöschen, Brühe angießen und zugedeckt 90 Minuten sanft schmoren.",
      "Rouladen herausnehmen, Garn entfernen, Sauce pürieren und abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      90,
      null
    ],
    "tip": "Rouladen straff rollen und die Seiten einschlagen, damit die Füllung im Inneren bleibt."
  },
  {
    "id": "ko-0079",
    "name": "Kartoffelpuffer",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "eier",
      "mehl",
      "zwiebeln",
      "olivenoel"
    ],
    "amounts": {
      "kartoffeln": [
        1000,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "mehl": [
        60,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        6,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier"
    ],
    "steps": [
      "Kartoffeln und Zwiebel grob reiben.",
      "Masse in einem sauberen Tuch kräftig ausdrücken und die Flüssigkeit kurz stehen lassen.",
      "Wasser abgießen, abgesetzte Kartoffelstärke mit Eiern, Mehl und Kartoffelmasse verrühren.",
      "Öl portionsweise erhitzen und jeweils flache Puffer formen.",
      "Puffer je Seite 3 bis 4 Minuten goldbraun braten und auf Küchenpapier abtropfen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      4
    ],
    "tip": "Gut ausgedrückte Kartoffeln ergeben knusprige Puffer, die beim Wenden zusammenhalten."
  },
  {
    "id": "ko-0080",
    "name": "Rotkohl mit Knödeln",
    "emoji": "🥬",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rotkohl",
      "apfel",
      "zwiebeln",
      "essig",
      "zucker",
      "kartoffeln",
      "speisestaerke",
      "olivenoel"
    ],
    "amounts": {
      "rotkohl": [
        900,
        "g"
      ],
      "apfel": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "essig": [
        3,
        "EL"
      ],
      "zucker": [
        30,
        "g"
      ],
      "kartoffeln": [
        1000,
        "g"
      ],
      "speisestaerke": [
        130,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 70,
    "restMinutes": 0,
    "minutes": 105,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Rotkohl fein schneiden, Äpfel und Zwiebel würfeln und alles im Öl 5 Minuten anschwitzen.",
      "Essig, Zucker, 250 ml Wasser, Salz und Pfeffer zugeben und zugedeckt 50 Minuten schmoren.",
      "Kartoffeln weich kochen, ausdampfen lassen und noch warm durch eine Presse drücken.",
      "Mit Stärke und Salz rasch verkneten, acht Knödel formen und in siedendem Salzwasser 18 Minuten gar ziehen lassen.",
      "Rotkohl abschmecken, Knödel herausheben und zusammen servieren."
    ],
    "stepTimers": [
      5,
      50,
      null,
      18,
      null
    ],
    "tip": "Kartoffelteig nur kurz bearbeiten, sonst werden die Knödel zäh."
  },
  {
    "id": "ko-0081",
    "name": "Königsberger Klopse",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "eier",
      "toast",
      "zwiebeln",
      "bruehe",
      "sahne",
      "kapern",
      "zitrone",
      "butter",
      "mehl"
    ],
    "amounts": {
      "hackfleisch": [
        600,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ],
      "toast": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "sahne": [
        180,
        "ml"
      ],
      "kapern": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "butter": [
        30,
        "g"
      ],
      "mehl": [
        30,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Toast in etwas Wasser einweichen, ausdrücken und mit Hackfleisch, Ei sowie halber fein gewürfelter Zwiebel mischen.",
      "Zwölf Klopse formen und in nur siedender Brühe 15 Minuten vollständig gar ziehen lassen.",
      "Klopse herausheben und 600 ml Brühe abmessen.",
      "Butter schmelzen, Mehl einrühren, Brühe und Sahne nach und nach zugeben und 5 Minuten köcheln.",
      "Kapern und Zitronensaft einrühren, Klopse in der Sauce vollständig erhitzen und abschmecken."
    ],
    "stepTimers": [
      null,
      15,
      null,
      5,
      null
    ],
    "tip": "Brühe nicht sprudelnd kochen lassen, damit die Klopse ihre Form behalten."
  },
  {
    "id": "ko-0082",
    "name": "Maultaschen",
    "emoji": "🥟",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "eier",
      "spinat",
      "zwiebeln",
      "quark",
      "paniermehl",
      "bruehe"
    ],
    "amounts": {
      "mehl": [
        400,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "spinat": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "quark": [
        300,
        "g"
      ],
      "paniermehl": [
        60,
        "g"
      ],
      "bruehe": [
        1200,
        "ml"
      ]
    },
    "prepMinutes": 55,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, vier Eier, 80 ml Wasser und Salz 8 Minuten kneten.",
      "Teig 30 Minuten abgedeckt ruhen lassen.",
      "Spinat zusammenfallen lassen, abkühlen, kräftig ausdrücken und mit Zwiebel fein hacken.",
      "Quark, Paniermehl, Spinatmischung und übriges Ei gründlich vermengen und würzen.",
      "Teig dünn ausrollen, Füllung portionieren, Ränder befeuchten und rechteckige Taschen dicht verschließen.",
      "Maultaschen in siedender Brühe 12 bis 15 Minuten vollständig gar ziehen lassen."
    ],
    "stepTimers": [
      8,
      30,
      null,
      null,
      null,
      15
    ],
    "tip": "Beim Verschließen eingeschlossene Luft herausdrücken, damit die Taschen beim Garen nicht platzen."
  },
  {
    "id": "ko-0083",
    "name": "Sauerbraten",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "rotwein",
      "essig",
      "zwiebeln",
      "karotten",
      "sellerie",
      "honig",
      "bruehe"
    ],
    "amounts": {
      "rindfleisch": [
        1200,
        "g"
      ],
      "rotwein": [
        500,
        "ml"
      ],
      "essig": [
        250,
        "ml"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "sellerie": [
        150,
        "g"
      ],
      "honig": [
        2,
        "EL"
      ],
      "bruehe": [
        500,
        "ml"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 210,
    "restMinutes": 4320,
    "minutes": 4565,
    "difficulty": "Aufwendig",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Fleisch mit Rotwein, Essig und grob geschnittenem Gemüse bedecken und abgedeckt im Kühlschrank 2 bis 3 Tage marinieren.",
      "Fleisch herausnehmen, sehr gut trocken tupfen und Marinade durch ein Sieb gießen.",
      "Fleisch rundherum kräftig anbraten, Marinadengemüse kurz mitrösten.",
      "Marinade und Brühe angießen und zugedeckt bei 160 °C etwa 3 Stunden schmoren.",
      "Fleisch ruhen lassen, Sauce pürieren, mit Honig ausbalancieren und das Fleisch quer zur Faser aufschneiden."
    ],
    "stepTimers": [
      4320,
      null,
      null,
      180,
      null
    ],
    "tip": "Während des Marinierens das Fleisch einmal täglich wenden und immer gekühlt lagern."
  },
  {
    "id": "ko-0084",
    "name": "Labskaus",
    "emoji": "🥔",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "rindfleisch",
      "rotebete",
      "gewuerzgurken",
      "eier",
      "zwiebeln",
      "butter"
    ],
    "amounts": {
      "kartoffeln": [
        900,
        "g"
      ],
      "rindfleisch": [
        400,
        "g"
      ],
      "rotebete": [
        350,
        "g"
      ],
      "gewuerzgurken": [
        4,
        "Stück"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "butter": [
        30,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Kartoffeln schälen, würfeln und in Salzwasser weich kochen.",
      "Zwiebel würfeln und in Butter glasig dünsten.",
      "Gegartes Rindfleisch klein schneiden und 5 Minuten mitbraten.",
      "Kartoffeln abgießen und grob stampfen, Fleischmischung unterarbeiten.",
      "Rote Bete und Gurken fein würfeln, die Hälfte unterheben und alles abschmecken.",
      "Eier vollständig zu Spiegeleiern braten und mit Labskaus sowie restlichem Gemüse servieren."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      null,
      null
    ],
    "tip": "Kartoffeln nur grob stampfen; eine leicht stückige Konsistenz ist für Labskaus passend."
  },
  {
    "id": "ko-0085",
    "name": "Penne Arrabbiata",
    "emoji": "🍝",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "dosentomaten",
      "knoblauch",
      "chili",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "chili": [
        2,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Knoblauch in dünne Scheiben und Chili in feine Ringe schneiden.",
      "Öl sanft erhitzen und beides 2 Minuten ziehen lassen, ohne den Knoblauch zu bräunen.",
      "Tomaten zugeben und 15 Minuten offen einkochen.",
      "Penne bissfest kochen, 100 ml Kochwasser auffangen und abgießen.",
      "Nudeln mit Sauce und bei Bedarf etwas Kochwasser vermengen, abschmecken und Petersilie unterheben."
    ],
    "stepTimers": [
      null,
      2,
      15,
      null,
      null
    ],
    "tip": "Chili zunächst sparsam dosieren und die Schärfe am Ende anpassen."
  },
  {
    "id": "ko-0086",
    "name": "Risotto alla Milanese",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "bruehe",
      "butter",
      "parmesan",
      "weisswein",
      "zwiebeln",
      "safran"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "butter": [
        60,
        "g"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "weisswein": [
        120,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "safran": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Brühe heiß halten und Safran in einer Kelle davon 10 Minuten ziehen lassen.",
      "Zwiebel in 20 g Butter glasig dünsten und Reis 2 Minuten mitrösten.",
      "Mit Weißwein ablöschen und fast vollständig einkochen.",
      "Brühe portionsweise einrühren und den Reis 18 bis 22 Minuten garen.",
      "Safranbrühe nach 10 Minuten zugeben.",
      "Topf vom Herd nehmen, restliche Butter und Parmesan unterziehen und 2 Minuten ruhen lassen."
    ],
    "stepTimers": [
      10,
      2,
      null,
      22,
      10,
      2
    ],
    "tip": "Risotto direkt servieren; beim Stehen verliert es schnell seine fließend-cremige Konsistenz."
  },
  {
    "id": "ko-0087",
    "name": "Saltimbocca",
    "emoji": "🍖",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "schweinefleisch",
      "schinken",
      "salbei",
      "butter",
      "weisswein",
      "mehl"
    ],
    "amounts": {
      "schweinefleisch": [
        600,
        "g"
      ],
      "schinken": [
        120,
        "g"
      ],
      "salbei": [
        12,
        "g"
      ],
      "butter": [
        40,
        "g"
      ],
      "weisswein": [
        120,
        "ml"
      ],
      "mehl": [
        40,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Fleisch in acht dünne Scheiben schneiden oder flach klopfen und leicht pfeffern.",
      "Je eine Scheibe Schinken und ein Salbeiblatt auflegen und mit einem Zahnstocher fixieren.",
      "Unterseite leicht mit Mehl bestäuben und überschüssiges Mehl abklopfen.",
      "In Butter zuerst auf der Schinkenseite, dann auf der anderen Seite je 2 bis 3 Minuten garen.",
      "Fleisch herausnehmen, Bratensatz mit Weißwein lösen, kurz einkochen und als Sauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      3,
      null
    ],
    "tip": "Wegen des salzigen Schinkens das Fleisch erst nach dem Braten bei Bedarf salzen."
  },
  {
    "id": "ko-0088",
    "name": "Panzanella",
    "emoji": "🥗",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "baguette",
      "tomaten",
      "gurke",
      "zwiebeln",
      "olivenoel",
      "essig",
      "basilikum"
    ],
    "amounts": {
      "baguette": [
        1,
        "Stück"
      ],
      "tomaten": [
        700,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        5,
        "EL"
      ],
      "essig": [
        3,
        "EL"
      ],
      "basilikum": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Baguette in Würfel schneiden und im Ofen bei 190 °C etwa 10 Minuten knusprig rösten.",
      "Tomaten grob würfeln, Gurke schneiden und Zwiebel sehr fein hobeln.",
      "Öl und Essig mit Salz sowie Pfeffer zu einem Dressing verrühren.",
      "Brot und Gemüse mischen, Dressing darübergeben und 10 Minuten ziehen lassen.",
      "Basilikum erst unmittelbar vor dem Servieren unterheben."
    ],
    "stepTimers": [
      10,
      null,
      null,
      10,
      null
    ],
    "tip": "Das Brot soll Dressing aufnehmen, aber noch Biss behalten; deshalb nicht zu lange ziehen lassen."
  },
  {
    "id": "ko-0089",
    "name": "Orecchiette mit Spinat und Parmesan",
    "emoji": "🍝",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "spinat",
      "knoblauch",
      "parmesan",
      "olivenoel",
      "zitrone"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "spinat": [
        500,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "parmesan": [
        90,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch"
    ],
    "steps": [
      "Nudeln bissfest kochen und 180 ml Kochwasser auffangen.",
      "Knoblauch fein schneiden und im Öl 1 Minute sanft anschwitzen.",
      "Spinat portionsweise zugeben und vollständig zusammenfallen lassen.",
      "Nudeln, 100 ml Kochwasser und die Hälfte des Parmesans unterheben und cremig schwenken.",
      "Mit Zitronensaft, Salz und Pfeffer abschmecken und übrigen Parmesan darübergeben."
    ],
    "stepTimers": [
      null,
      1,
      null,
      null,
      null
    ],
    "tip": "Parmesan abseits starker Hitze einarbeiten, damit er cremig schmilzt und nicht klumpt."
  },
  {
    "id": "ko-0090",
    "name": "Vitello Tonnato",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kalbfleisch",
      "thunfisch",
      "kapern",
      "zitrone",
      "joghurt",
      "bruehe",
      "sellerie",
      "karotten"
    ],
    "amounts": {
      "kalbfleisch": [
        700,
        "g"
      ],
      "thunfisch": [
        250,
        "g"
      ],
      "kapern": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "joghurt": [
        150,
        "g"
      ],
      "bruehe": [
        800,
        "ml"
      ],
      "sellerie": [
        120,
        "g"
      ],
      "karotten": [
        150,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 75,
    "restMinutes": 0,
    "minutes": 105,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose",
      "fisch",
      "sellerie"
    ],
    "steps": [
      "Brühe mit Karotten und Sellerie aufkochen, Kalbfleisch einlegen und bei kleiner Hitze 50 bis 60 Minuten gar ziehen lassen.",
      "Fleisch in der Brühe abkühlen lassen und anschließend mindestens 30 Minuten kalt stellen.",
      "Thunfisch, Joghurt, zwei Esslöffel Kapern, Zitronensaft und etwas kalte Brühe fein pürieren.",
      "Fleisch quer zur Faser in sehr dünne Scheiben schneiden und auf einer Platte anordnen.",
      "Sauce darübergeben, mit übrigen Kapern garnieren und gut gekühlt servieren."
    ],
    "stepTimers": [
      60,
      30,
      null,
      null,
      null
    ],
    "tip": "Gut gekühltes Fleisch lässt sich deutlich dünner und sauberer aufschneiden."
  },
  {
    "id": "ko-0091",
    "name": "Panna Cotta",
    "emoji": "🍮",
    "time": "aufwendig",
    "diet": "alles",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "sahne",
      "zucker",
      "vanille",
      "gelatine",
      "beeren"
    ],
    "amounts": {
      "sahne": [
        500,
        "ml"
      ],
      "zucker": [
        70,
        "g"
      ],
      "vanille": [
        1,
        "Päckchen"
      ],
      "gelatine": [
        4,
        "Blätter"
      ],
      "beeren": [
        200,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 240,
    "restMinutes": 0,
    "minutes": 255,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Gelatineblätter einzeln in kaltes Wasser legen und 5 bis 10 Minuten einweichen.",
      "Sahne, Zucker und Vanille in einem Topf unter Rühren erhitzen und etwa fünf Minuten sanft ziehen lassen, aber nicht sprudelnd kochen.",
      "Topf vom Herd nehmen, Gelatine gut ausdrücken und vollständig in der heißen Sahne auflösen.",
      "Masse in vier Gläser oder Förmchen füllen, abkühlen lassen und anschließend mindestens vier Stunden im Kühlschrank fest werden lassen.",
      "Beeren kurz vor dem Servieren vorbereiten und auf der gut gekühlten Panna Cotta verteilen."
    ],
    "stepTimers": [
      10,
      null,
      null,
      null,
      null
    ],
    "tip": "Gelatine nie mitkochen; die Creme erst in den Kühlschrank stellen, wenn sie nicht mehr heiß ist."
  },
  {
    "id": "ko-0092",
    "name": "Cannoli",
    "emoji": "🍩",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "butter",
      "zucker",
      "eier",
      "ricotta",
      "schokolade",
      "zitrone"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "butter": [
        30,
        "g"
      ],
      "zucker": [
        100,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ],
      "ricotta": [
        500,
        "g"
      ],
      "schokolade": [
        100,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 40,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, 30 g Zucker, Butter, Ei und 70 ml Wasser zu einem festen Teig kneten und 30 Minuten ruhen lassen.",
      "Ricotta in einem Sieb gut abtropfen und mit restlichem Zucker, Zitronenschale und gehackter Schokolade verrühren.",
      "Teig sehr dünn ausrollen, Kreise ausstechen und um Cannoli-Röhrchen legen.",
      "Naht mit Wasser verschließen.",
      "Schalen in 170 °C heißem Öl portionsweise 2 bis 3 Minuten knusprig frittieren und vollständig abkühlen lassen.",
      "Ricottacreme erst kurz vor dem Servieren in die Schalen spritzen."
    ],
    "stepTimers": [
      30,
      null,
      null,
      null,
      3,
      null
    ],
    "tip": "Spätes Füllen hält die Cannoli-Schalen knusprig."
  },
  {
    "id": "ko-0093",
    "name": "Focaccia",
    "emoji": "🍞",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "hefe",
      "olivenoel",
      "rosmarin"
    ],
    "amounts": {
      "mehl": [
        500,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "olivenoel": [
        6,
        "EL"
      ],
      "rosmarin": [
        12,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 125,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Mehl, Hefe, 350 ml lauwarmes Wasser, zwei Esslöffel Öl und einen Teelöffel Salz 8 Minuten kneten.",
      "Teig abdecken und 60 Minuten gehen lassen.",
      "Teig auf ein geöltes Blech drücken und weitere 20 Minuten entspannen lassen.",
      "Mit geölten Fingern tiefe Mulden eindrücken, restliches Öl und Rosmarin verteilen.",
      "Bei 220 °C 20 bis 25 Minuten goldbraun backen und auf einem Gitter abkühlen lassen."
    ],
    "stepTimers": [
      8,
      60,
      20,
      null,
      25
    ],
    "tip": "Ein weicher, leicht klebriger Teig ergibt eine besonders luftige Focaccia."
  },
  {
    "id": "ko-0094",
    "name": "Osso Buco",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kalbfleisch",
      "sellerie",
      "karotten",
      "zwiebeln",
      "dosentomaten",
      "weisswein",
      "bruehe",
      "polenta",
      "mehl"
    ],
    "amounts": {
      "kalbfleisch": [
        1000,
        "g"
      ],
      "sellerie": [
        180,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "weisswein": [
        250,
        "ml"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "polenta": [
        300,
        "g"
      ],
      "mehl": [
        50,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 130,
    "restMinutes": 0,
    "minutes": 160,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "sellerie"
    ],
    "steps": [
      "Fleisch würzen, leicht mehlieren und in einem Bräter von beiden Seiten kräftig anbraten.",
      "Zwiebeln, Karotten und Sellerie klein würfeln und 7 Minuten mitrösten.",
      "Mit Weißwein ablöschen, Tomaten und Brühe zugeben und zugedeckt bei 165 °C etwa 2 Stunden schmoren.",
      "Polenta nach Packungsangabe in Salzwasser cremig garen.",
      "Fleisch auf Zartheit prüfen, Sauce abschmecken und Osso Buco mit Polenta servieren."
    ],
    "stepTimers": [
      null,
      7,
      120,
      null,
      null
    ],
    "tip": "Fleischscheiben während des Schmorens möglichst wenig bewegen, damit sie nicht zerfallen."
  },
  {
    "id": "ko-0095",
    "name": "Quiche Lorraine",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "butter",
      "eier",
      "speck",
      "sahne",
      "reibekaese"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "butter": [
        140,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "speck": [
        200,
        "g"
      ],
      "sahne": [
        300,
        "ml"
      ],
      "reibekaese": [
        120,
        "g"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 85,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, 120 g kalte Butter, ein Ei, eine Prise Salz und zwei Esslöffel Wasser rasch verkneten.",
      "Den Teig abgedeckt für 30 Minuten in den Kühlschrank legen, damit er sich später sauber ausrollen lässt.",
      "Teig ausrollen, eine Quicheform auskleiden, einstechen und bei 190 °C 12 Minuten vorbacken.",
      "Speck würfeln und knusprig auslassen.",
      "Auf dem Boden verteilen.",
      "Vier Eier mit Sahne, Käse, Pfeffer und wenig Salz verquirlen und eingießen.",
      "Bei 180 °C 32 bis 38 Minuten backen, bis die Füllung gestockt ist.",
      "10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      30,
      12,
      null,
      null,
      null,
      38,
      10
    ],
    "tip": "Die Quiche ist fertig, wenn die Mitte nur noch leicht wackelt und nicht mehr flüssig ist."
  },
  {
    "id": "ko-0096",
    "name": "Coq au Vin",
    "emoji": "🍗",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "champignons",
      "zwiebeln",
      "speck",
      "rotwein",
      "bruehe",
      "karotten",
      "thymian",
      "mehl"
    ],
    "amounts": {
      "haehnchen": [
        1000,
        "g"
      ],
      "champignons": [
        350,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "speck": [
        150,
        "g"
      ],
      "rotwein": [
        600,
        "ml"
      ],
      "bruehe": [
        350,
        "ml"
      ],
      "karotten": [
        250,
        "g"
      ],
      "thymian": [
        2,
        "TL"
      ],
      "mehl": [
        30,
        "g"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 135,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Speck auslassen und herausnehmen.",
      "Hähnchenteile trocken tupfen und rundherum anbraten.",
      "Zwiebeln und Karotten 6 Minuten braten, Mehl kurz einrühren.",
      "Rotwein und Brühe angießen, Thymian, Speck und Hähnchen zurückgeben.",
      "Zugedeckt 55 bis 65 Minuten sanft schmoren, bis das Hähnchen vollständig durchgegart ist.",
      "Pilze separat braten, 10 Minuten in der Sauce mitgaren und alles abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      65,
      10
    ],
    "tip": "Hähnchenstücke mit ähnlicher Größe verwenden, damit sie gleichzeitig gar werden."
  },
  {
    "id": "ko-0097",
    "name": "Crêpes",
    "emoji": "🥞",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "eier",
      "milch",
      "zucker",
      "butter"
    ],
    "amounts": {
      "mehl": [
        220,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "milch": [
        500,
        "ml"
      ],
      "zucker": [
        30,
        "g"
      ],
      "butter": [
        40,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Zucker und eine Prise Salz mischen.",
      "Eier und die Hälfte der Milch klümpchenfrei einrühren, anschließend restliche Milch zugeben.",
      "Geschmolzene Butter einarbeiten und den Teig 15 Minuten ruhen lassen.",
      "Eine beschichtete Pfanne dünn fetten und jeweils wenig Teig sehr dünn verteilen.",
      "Acht Crêpes je Seite etwa 1 Minute goldgelb backen und warm halten."
    ],
    "stepTimers": [
      null,
      null,
      15,
      null,
      1
    ],
    "tip": "Der erste Crêpe zeigt, ob der Teig noch etwas Milch oder Mehl benötigt."
  },
  {
    "id": "ko-0098",
    "name": "Bouillabaisse",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "fisch",
      "garnelen",
      "tomaten",
      "zwiebeln",
      "lauch",
      "knoblauch",
      "weisswein",
      "bruehe",
      "paprikapulver",
      "zitrone"
    ],
    "amounts": {
      "fisch": [
        700,
        "g"
      ],
      "garnelen": [
        300,
        "g"
      ],
      "tomaten": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "lauch": [
        1,
        "Stange"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "weisswein": [
        250,
        "ml"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Mittel",
    "allergens": [
      "fisch",
      "schalentiere"
    ],
    "steps": [
      "Fisch auf Gräten prüfen und in große Stücke schneiden.",
      "Garnelen bis zur Verwendung kalt stellen.",
      "Zwiebel und Lauch 6 Minuten anschwitzen, Knoblauch und Paprikapulver kurz zugeben.",
      "Tomaten, Weißwein und Brühe einrühren und 25 Minuten sanft köcheln.",
      "Fischstücke 6 Minuten gar ziehen lassen, Garnelen zufügen und weitere 4 Minuten vollständig garen.",
      "Mit Zitronensaft, Salz und Pfeffer abschmecken und behutsam servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      25,
      6,
      null
    ],
    "tip": "Nach Zugabe des Fisches nur vorsichtig rühren, damit die Stücke nicht zerfallen."
  },
  {
    "id": "ko-0099",
    "name": "Croissant",
    "emoji": "🥐",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "hefe",
      "butter",
      "milch",
      "zucker",
      "eier"
    ],
    "amounts": {
      "mehl": [
        500,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "butter": [
        300,
        "g"
      ],
      "milch": [
        250,
        "ml"
      ],
      "zucker": [
        50,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 45,
    "cookMinutes": 300,
    "restMinutes": 0,
    "minutes": 345,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Hefe, Milch, Zucker, 40 g Butter und Salz 8 Minuten kneten.",
      "Den Teig abgedeckt 60 Minuten kühlen, damit Butter und Teig vor dem nächsten Ausrollen wieder fest werden.",
      "260 g kalte Butter zwischen Backpapier zu einer Platte rollen und in den Teig einschlagen.",
      "Teig dreimal ausrollen und jeweils dreifach falten.",
      "Zwischen den Touren 30 Minuten kühlen.",
      "Teig 4 mm dünn ausrollen, Dreiecke schneiden, straff aufrollen und 75 Minuten gehen lassen.",
      "Mit verquirltem Ei bestreichen und bei 200 °C 17 bis 20 Minuten goldbraun backen."
    ],
    "stepTimers": [
      8,
      60,
      null,
      null,
      30,
      75,
      20
    ],
    "tip": "Teig und Butter müssen beim Tourieren kühl, aber biegsam bleiben; austretende Butter sofort wieder kühlen."
  },
  {
    "id": "ko-0100",
    "name": "Französische Zwiebelsuppe",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "zwiebeln",
      "butter",
      "bruehe",
      "weisswein",
      "baguette",
      "reibekaese",
      "mehl"
    ],
    "amounts": {
      "zwiebeln": [
        900,
        "g"
      ],
      "butter": [
        50,
        "g"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "weisswein": [
        180,
        "ml"
      ],
      "baguette": [
        1,
        "Stück"
      ],
      "reibekaese": [
        180,
        "g"
      ],
      "mehl": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 60,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Zwiebeln halbieren, in dünne Streifen schneiden und in Butter bei mittlerer Hitze 30 Minuten tief goldbraun rösten.",
      "Mehl einrühren, mit Weißwein ablöschen und fast vollständig einkochen.",
      "Brühe angießen und 20 Minuten sanft köcheln.",
      "Kräftig abschmecken.",
      "Baguette in Scheiben rösten und mit Käse bestreuen.",
      "Suppe in ofenfeste Schalen füllen, Brote auflegen und unter dem Grill goldbraun überbacken."
    ],
    "stepTimers": [
      30,
      null,
      20,
      null,
      null,
      null
    ],
    "tip": "Geduld beim Rösten der Zwiebeln ist entscheidend; hohe Hitze macht sie bitter statt süß."
  },
  {
    "id": "ko-0101",
    "name": "Niçoise-Salat",
    "emoji": "🥗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "salat",
      "thunfisch",
      "eier",
      "tomaten",
      "gurke",
      "oliven",
      "kartoffeln",
      "bohnen",
      "olivenoel",
      "essig"
    ],
    "amounts": {
      "salat": [
        250,
        "g"
      ],
      "thunfisch": [
        300,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "tomaten": [
        400,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "oliven": [
        100,
        "g"
      ],
      "kartoffeln": [
        500,
        "g"
      ],
      "bohnen": [
        250,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "essig": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 43,
    "difficulty": "Einfach",
    "allergens": [
      "eier",
      "fisch"
    ],
    "steps": [
      "Kartoffeln weich kochen und in Scheiben schneiden.",
      "Eier 9 Minuten hart kochen und pellen.",
      "Bohnen in Salzwasser 7 Minuten bissfest garen, kalt abschrecken und abtropfen.",
      "Salat, Tomaten und Gurke vorbereiten.",
      "Thunfisch abtropfen lassen.",
      "Öl und Essig mit Salz sowie Pfeffer verrühren und mit Salat, Kartoffeln und Bohnen mischen.",
      "Eier vierteln und mit Thunfisch sowie Oliven auf dem Salat anrichten."
    ],
    "stepTimers": [
      null,
      9,
      7,
      null,
      null,
      null,
      null
    ],
    "tip": "Warme Kartoffeln mit etwas Dressing mischen, damit sie mehr Geschmack aufnehmen."
  },
  {
    "id": "ko-0102",
    "name": "Tortilla Española",
    "emoji": "🍳",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "eier",
      "zwiebeln",
      "olivenoel"
    ],
    "amounts": {
      "kartoffeln": [
        800,
        "g"
      ],
      "eier": [
        8,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        6,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Kartoffeln schälen, in 3 mm dünne Scheiben und Zwiebel in Streifen schneiden.",
      "Beides in Olivenöl bei mittlerer Hitze 18 Minuten weich garen, ohne stark zu bräunen.",
      "Kartoffelmischung abtropfen lassen und mit verquirlten, gewürzten Eiern vermengen.",
      "In einer beschichteten Pfanne bei kleiner Hitze 8 Minuten stocken lassen.",
      "Mithilfe eines Tellers wenden und weitere 5 bis 7 Minuten vollständig garen."
    ],
    "stepTimers": [
      null,
      18,
      null,
      8,
      7
    ],
    "tip": "Die Tortilla vor dem Anschneiden 10 Minuten ruhen lassen; dann ist sie stabiler und aromatischer."
  },
  {
    "id": "ko-0103",
    "name": "Gazpacho",
    "emoji": "🍅",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tomaten",
      "gurke",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "olivenoel",
      "essig",
      "toast"
    ],
    "amounts": {
      "tomaten": [
        1000,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "essig": [
        2,
        "EL"
      ],
      "toast": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 5,
    "restMinutes": 120,
    "minutes": 145,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Tomaten, Gurke, Paprika und Zwiebel grob schneiden.",
      "Toast mit wenig kaltem Wasser einweichen und ausdrücken.",
      "Gemüse, Toast, Knoblauch, Öl und Essig sehr fein pürieren.",
      "Konsistenz mit kaltem Wasser anpassen und kräftig abschmecken.",
      "Mindestens 2 Stunden kalt stellen, nochmals umrühren und gut gekühlt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      120
    ],
    "tip": "Sehr reife aromatische Tomaten sind wichtiger als jede zusätzliche Würzung."
  },
  {
    "id": "ko-0104",
    "name": "Patatas Bravas",
    "emoji": "🥔",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "dosentomaten",
      "paprikapulver",
      "chili",
      "knoblauch",
      "olivenoel",
      "essig"
    ],
    "amounts": {
      "kartoffeln": [
        1000,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "olivenoel": [
        5,
        "EL"
      ],
      "essig": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Backofen auf 220 °C vorheizen.",
      "Kartoffeln in 2 cm große Würfel schneiden.",
      "Kartoffeln mit drei Esslöffeln Öl und Salz mischen und 35 bis 40 Minuten rösten, einmal wenden.",
      "Knoblauch und Chili im restlichen Öl anschwitzen, Paprikapulver und Tomaten zugeben.",
      "Sauce 15 Minuten einkochen, pürieren und mit Essig sowie Salz abschmecken.",
      "Kartoffeln mit der würzigen Tomatensauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      40,
      null,
      15,
      null
    ],
    "tip": "Kartoffelwürfel nach dem Waschen sehr gut trocknen, damit sie im Ofen knusprig werden."
  },
  {
    "id": "ko-0105",
    "name": "Crema Catalana",
    "emoji": "🍮",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "eier",
      "milch",
      "zucker",
      "speisestaerke",
      "zimt",
      "zitrone"
    ],
    "amounts": {
      "eier": [
        6,
        "Stück"
      ],
      "milch": [
        750,
        "ml"
      ],
      "zucker": [
        140,
        "g"
      ],
      "speisestaerke": [
        35,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Milch mit Zimt und dünn abgeschälter Zitronenschale erhitzen und 10 Minuten ziehen lassen.",
      "Eigelb von sechs Eiern mit 90 g Zucker und Stärke glatt rühren.",
      "Milch durch ein Sieb gießen und langsam unter die Eigelbmischung rühren.",
      "Zurück in den Topf geben und bei mittlerer Hitze unter Rühren eindicken, nicht kochen.",
      "In Schalen füllen, kühlen, restlichen Zucker aufstreuen und direkt vor dem Servieren karamellisieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Creme darf nach Zugabe des Eigelbs nicht sprudelnd kochen, sonst kann sie gerinnen."
  },
  {
    "id": "ko-0106",
    "name": "Empanadas",
    "emoji": "🥟",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "butter",
      "eier",
      "hackfleisch",
      "zwiebeln",
      "paprika",
      "oliven",
      "paprikapulver"
    ],
    "amounts": {
      "mehl": [
        450,
        "g"
      ],
      "butter": [
        120,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "hackfleisch": [
        450,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "oliven": [
        80,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 45,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Butter, ein Ei, 140 ml Wasser und Salz zu einem glatten Teig kneten und 30 Minuten kühlen.",
      "Hackfleisch vollständig bräunen, Zwiebeln und Paprika 6 Minuten mitgaren.",
      "Oliven und Paprikapulver einrühren, Füllung abschmecken und vollständig abkühlen lassen.",
      "Teig dünn ausrollen, Kreise ausstechen, füllen, zuklappen und Ränder mit einer Gabel verschließen.",
      "Mit verquirltem Ei bestreichen und bei 200 °C 22 bis 25 Minuten backen."
    ],
    "stepTimers": [
      30,
      6,
      null,
      null,
      25
    ],
    "tip": "Nur kalte Füllung verwenden, damit der Teig vor dem Backen stabil bleibt."
  },
  {
    "id": "ko-0107",
    "name": "Souvlaki",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "zitrone",
      "olivenoel",
      "joghurt",
      "knoblauch",
      "rosmarin",
      "paprika"
    ],
    "amounts": {
      "haehnchen": [
        700,
        "g"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "rosmarin": [
        8,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen in gleich große Würfel schneiden und mit Öl, Saft einer Zitrone, Rosmarin und einem gehackten Knoblauch marinieren.",
      "Paprika in ähnlich große Stücke schneiden und abwechselnd mit Hähnchen auf Spieße stecken.",
      "Joghurt mit restlichem Knoblauch und Zitronensaft verrühren und kalt stellen.",
      "Spieße in einer heißen Grillpfanne rundherum 12 bis 15 Minuten braten.",
      "Vollständigen Gargrad des Hähnchens prüfen und mit Joghurtsauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      15,
      null
    ],
    "tip": "Holzspieße vorher wässern, damit sie beim Braten weniger stark bräunen."
  },
  {
    "id": "ko-0108",
    "name": "Tzatziki mit Fladenbrot",
    "emoji": "🥙",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "joghurt",
      "gurke",
      "knoblauch",
      "zitrone",
      "olivenoel",
      "fladenbrot",
      "dill"
    ],
    "amounts": {
      "joghurt": [
        500,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "fladenbrot": [
        2,
        "Stück"
      ],
      "dill": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Gurke grob raspeln, leicht salzen und 10 Minuten ziehen lassen.",
      "Gurkenraspel in einem sauberen Tuch sehr kräftig ausdrücken.",
      "Joghurt mit Gurke, fein geriebenem Knoblauch, Zitronensaft und Öl verrühren.",
      "Dill hacken, unterheben und Tzatziki mit Salz sowie Pfeffer abschmecken.",
      "Fladenbrot erwärmen, in Stücke schneiden und mit dem Tzatziki servieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      null,
      null
    ],
    "tip": "Gut ausgedrückte Gurke verhindert, dass der Dip nach kurzer Zeit wässrig wird."
  },
  {
    "id": "ko-0109",
    "name": "Fattoush",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "salat",
      "gurke",
      "tomaten",
      "paprika",
      "fladenbrot",
      "zitrone",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "salat": [
        250,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "tomaten": [
        450,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "fladenbrot": [
        1,
        "Stück"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "petersilie": [
        25,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Fladenbrot in Stücke reißen und bei 190 °C etwa 8 Minuten knusprig rösten.",
      "Salat waschen und gründlich trocknen.",
      "Gurke, Tomaten und Paprika schneiden.",
      "Zitronensaft, Öl, Salz und Pfeffer zu einem kräftigen Dressing verrühren.",
      "Gemüse, Salat und gehackte Petersilie mit dem Dressing mischen.",
      "Geröstetes Brot erst direkt vor dem Servieren unterheben."
    ],
    "stepTimers": [
      8,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Das Brot zuletzt zugeben, damit es Dressing aufnimmt und trotzdem knusprig bleibt."
  },
  {
    "id": "ko-0110",
    "name": "Kibbeh",
    "emoji": "🧆",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "bulgur",
      "zwiebeln",
      "mandeln",
      "kreuzkuemmel",
      "olivenoel"
    ],
    "amounts": {
      "hackfleisch": [
        600,
        "g"
      ],
      "bulgur": [
        250,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "mandeln": [
        80,
        "g"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "nuesse"
    ],
    "steps": [
      "Bulgur mit heißem Wasser bedecken, 15 Minuten quellen lassen und sehr gut ausdrücken.",
      "Eine Zwiebel mit 300 g Hackfleisch und Mandeln vollständig anbraten und abkühlen lassen.",
      "Übriges Hackfleisch mit Bulgur, zweiter fein geriebener Zwiebel und Kreuzkümmel gründlich kneten.",
      "Aus der Masse ovale Hüllen formen, mit Fleischmischung füllen und dicht verschließen.",
      "Kibbeh rundherum mit Öl bestreichen und bei 210 °C 25 bis 30 Minuten vollständig durchgaren."
    ],
    "stepTimers": [
      15,
      null,
      null,
      null,
      30
    ],
    "tip": "Hände beim Formen leicht anfeuchten; so klebt die Bulgurmasse weniger."
  },
  {
    "id": "ko-0111",
    "name": "Shawarma-Bowl",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "reis",
      "joghurt",
      "salat",
      "tomaten",
      "gurke",
      "zitrone",
      "knoblauch",
      "kreuzkuemmel",
      "paprikapulver"
    ],
    "amounts": {
      "haehnchen": [
        650,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "salat": [
        250,
        "g"
      ],
      "tomaten": [
        350,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Reis garen; Hähnchen in Streifen schneiden und mit Kreuzkümmel, Paprikapulver und einem Esslöffel Joghurt mischen.",
      "Hähnchen in einer heißen Pfanne portionsweise vollständig durchgaren.",
      "Salat, Tomaten und Gurke vorbereiten.",
      "Übrigen Joghurt mit Knoblauch, Zitronensaft, Salz und Pfeffer verrühren.",
      "Reis auf Schalen verteilen und mit Gemüse, Hähnchen und Joghurtsauce anrichten."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Dünne Hähnchenstreifen entwickeln schnell Röstaromen und bleiben bei kurzer Garzeit saftig."
  },
  {
    "id": "ko-0112",
    "name": "Tabouleh",
    "emoji": "🥗",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "bulgur",
      "petersilie",
      "tomaten",
      "gurke",
      "fruehlingszwiebeln",
      "zitrone",
      "olivenoel"
    ],
    "amounts": {
      "bulgur": [
        220,
        "g"
      ],
      "petersilie": [
        80,
        "g"
      ],
      "tomaten": [
        450,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Bulgur nach Packungsangabe mit heißem Wasser quellen lassen und vollständig abkühlen.",
      "Petersilie gründlich waschen, trocknen und fein hacken.",
      "Tomaten und Gurke klein würfeln, Frühlingszwiebeln in feine Ringe schneiden.",
      "Zitronensaft, Öl, Salz und Pfeffer verrühren.",
      "Alle Zutaten mischen, 15 Minuten ziehen lassen und nochmals abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      15
    ],
    "tip": "Viel frische Petersilie und vollständig abgekühlter Bulgur sorgen für einen frischen, lockeren Salat."
  },
  {
    "id": "ko-0113",
    "name": "Halloumi vom Grill",
    "emoji": "🧀",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "halloumi",
      "zucchini",
      "paprika",
      "olivenoel",
      "zitrone",
      "tomaten"
    ],
    "amounts": {
      "halloumi": [
        500,
        "g"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "tomaten": [
        300,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Halloumi trocken tupfen und in 1 cm dicke Scheiben schneiden.",
      "Zucchini längs und Paprika in breite Stücke schneiden.",
      "Gemüse mit zwei Esslöffeln Öl mischen.",
      "Gemüse auf Grill oder Grillpfanne 8 bis 10 Minuten bissfest garen.",
      "Halloumi mit restlichem Öl je Seite 2 bis 3 Minuten goldbraun grillen.",
      "Mit Tomaten anrichten, Zitronensaft darübergeben und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      10,
      3,
      null
    ],
    "tip": "Halloumi direkt servieren; beim Abkühlen wird er schnell fester."
  },
  {
    "id": "ko-0114",
    "name": "Palak Paneer",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "spinat",
      "paneer",
      "sahne",
      "currypulver",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "dosentomaten",
      "reis"
    ],
    "amounts": {
      "spinat": [
        800,
        "g"
      ],
      "paneer": [
        400,
        "g"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "dosentomaten": [
        200,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Reis garen; Spinat portionsweise zusammenfallen lassen, kurz abkühlen und fein pürieren.",
      "Paneer würfeln und in wenig Öl rundherum goldbraun braten, dann herausnehmen.",
      "Zwiebel, Knoblauch und Ingwer 5 Minuten anschwitzen, Currypulver kurz mitrösten.",
      "Tomaten und Spinatpüree einrühren und 10 Minuten sanft köcheln.",
      "Sahne und Paneer zugeben, vollständig erhitzen und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      5,
      10,
      null
    ],
    "tip": "Paneer erst am Ende zurückgeben, damit die Würfel ihre Form behalten."
  },
  {
    "id": "ko-0115",
    "name": "Dal Tarka",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "currypulver",
      "kreuzkuemmel",
      "dosentomaten",
      "reis",
      "olivenoel"
    ],
    "amounts": {
      "linsen": [
        300,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "currypulver": [
        2,
        "TL"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "dosentomaten": [
        300,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis garen; Linsen abspülen und mit Tomaten sowie 700 ml Wasser 20 bis 25 Minuten weich kochen.",
      "Zwiebel fein würfeln und im Öl goldbraun braten.",
      "Knoblauch, Ingwer, Kreuzkümmel und Currypulver zufügen und 1 Minute rösten.",
      "Gewürzöl unter die weichen Linsen rühren.",
      "Konsistenz mit Wasser anpassen, kräftig abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      25,
      null,
      1,
      null,
      null
    ],
    "tip": "Das Gewürzöl erst am Ende einrühren; so bleibt sein Röstaroma deutlich wahrnehmbar."
  },
  {
    "id": "ko-0116",
    "name": "Biryani",
    "emoji": "🍚",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "haehnchen",
      "joghurt",
      "zwiebeln",
      "currypulver",
      "karotten",
      "erbsen",
      "mandeln"
    ],
    "amounts": {
      "reis": [
        350,
        "g"
      ],
      "haehnchen": [
        600,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "zwiebeln": [
        3,
        "Stück"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "karotten": [
        200,
        "g"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "mandeln": [
        50,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Reis gründlich waschen und 8 Minuten vorkochen, dann abgießen.",
      "Hähnchen würfeln und mit Joghurt sowie Currypulver mischen.",
      "Zwiebeln langsam dunkelgolden braten, die Hälfte herausnehmen.",
      "Hähnchen mit übrigen Zwiebeln vollständig anbraten.",
      "Karotten und Erbsen zufügen, Reis darauf verteilen und 180 ml Wasser angießen.",
      "Zugedeckt bei kleinster Hitze 20 Minuten garen, 10 Minuten ruhen lassen und mit Röstzwiebeln sowie Mandeln servieren."
    ],
    "stepTimers": [
      8,
      null,
      null,
      null,
      null,
      20
    ],
    "tip": "Den Reis nach dem Schichten nicht mehr umrühren; erst vor dem Servieren vorsichtig auflockern."
  },
  {
    "id": "ko-0117",
    "name": "Samosas",
    "emoji": "🥟",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "kartoffeln",
      "karotten",
      "erbsen",
      "currypulver",
      "kreuzkuemmel",
      "olivenoel"
    ],
    "amounts": {
      "mehl": [
        350,
        "g"
      ],
      "kartoffeln": [
        600,
        "g"
      ],
      "karotten": [
        180,
        "g"
      ],
      "erbsen": [
        150,
        "g"
      ],
      "currypulver": [
        2,
        "TL"
      ],
      "kreuzkuemmel": [
        1,
        "TL"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 45,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Mehl, zwei Esslöffel Öl, Salz und 150 ml Wasser zu einem festen Teig kneten.",
      "30 Minuten ruhen lassen.",
      "Kartoffeln weich kochen und grob zerdrücken.",
      "Karotten klein würfeln.",
      "Karotten und Erbsen anbraten, Gewürze kurz mitrösten und Kartoffeln unterheben.",
      "Füllung abkühlen lassen.",
      "Teig in zwölf Kreise ausrollen, halbieren, zu Tüten formen, füllen und Ränder mit Wasser verschließen.",
      "Mit Öl bestreichen und bei 210 °C 25 bis 30 Minuten goldbraun backen."
    ],
    "stepTimers": [
      null,
      30,
      null,
      null,
      null,
      null,
      null,
      30
    ],
    "tip": "Die Füllung vollständig abkühlen lassen, damit der Teig beim Formen nicht weich wird."
  },
  {
    "id": "ko-0118",
    "name": "Chana Masala",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kichererbsen",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "kreuzkuemmel",
      "currypulver",
      "reis"
    ],
    "amounts": {
      "kichererbsen": [
        720,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "currypulver": [
        2,
        "TL"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis garen; Kichererbsen abspülen und gut abtropfen lassen.",
      "Zwiebel 6 Minuten braten, Knoblauch und Ingwer zugeben.",
      "Kreuzkümmel und Currypulver kurz mitrösten.",
      "Tomaten und Kichererbsen einrühren und 20 Minuten offen köcheln.",
      "Einige Kichererbsen zerdrücken, Sauce abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      6,
      null,
      20,
      null
    ],
    "tip": "Ein Teil zerdrückter Kichererbsen bindet die Sauce ohne zusätzliche Stärke."
  },
  {
    "id": "ko-0119",
    "name": "Tandoori-Hähnchen",
    "emoji": "🍗",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "joghurt",
      "currypulver",
      "paprikapulver",
      "zitrone",
      "knoblauch",
      "ingwer",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        800,
        "g"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen in große Stücke schneiden und an dickeren Stellen leicht einschneiden.",
      "Joghurt, Gewürze, Zitronensaft, Knoblauch und Ingwer verrühren und das Hähnchen mindestens 30 Minuten marinieren.",
      "Backofen auf 220 °C vorheizen und Reis garen.",
      "Hähnchen auf ein Gitter über einem Blech legen und 30 bis 35 Minuten rösten.",
      "Vollständigen Gargrad prüfen, 5 Minuten ruhen lassen und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      30,
      null,
      35,
      5
    ],
    "tip": "Für mehr Aroma kann das Hähnchen abgedeckt bis zu zwölf Stunden im Kühlschrank marinieren."
  },
  {
    "id": "ko-0120",
    "name": "Gulab Jamun",
    "emoji": "🍯",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "milch",
      "mehl",
      "butter",
      "backpulver",
      "zucker",
      "honig",
      "zitrone"
    ],
    "amounts": {
      "milch": [
        500,
        "ml"
      ],
      "mehl": [
        120,
        "g"
      ],
      "butter": [
        30,
        "g"
      ],
      "backpulver": [
        1,
        "TL"
      ],
      "zucker": [
        300,
        "g"
      ],
      "honig": [
        2,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Milch in einer breiten Pfanne unter Rühren stark einkochen, bis etwa 180 g feste Milchmasse bleiben; abkühlen lassen.",
      "Milchmasse mit Mehl, Backpulver und Butter kurz zu einem weichen Teig verkneten.",
      "Sechzehn glatte Kugeln ohne Risse formen.",
      "Zucker, Honig, Zitronensaft und 350 ml Wasser 8 Minuten zu einem Sirup kochen.",
      "Kugeln bei 150 bis 160 °C langsam dunkelgolden frittieren und mindestens 30 Minuten im warmen Sirup ziehen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      30
    ],
    "tip": "Bei niedriger Temperatur frittieren, damit die Kugeln innen gar werden, bevor sie außen dunkel sind."
  },
  {
    "id": "ko-0121",
    "name": "Rotes Thai-Curry mit Hähnchen",
    "emoji": "🍛",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "kokosmilch",
      "currypaste",
      "zucchini",
      "paprika",
      "brokkoli",
      "fischsauce",
      "limette",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "currypaste": [
        3,
        "EL"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "brokkoli": [
        300,
        "g"
      ],
      "fischsauce": [
        2,
        "EL"
      ],
      "limette": [
        1,
        "Stück"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "fisch"
    ],
    "steps": [
      "Reis garen; Hähnchen und Gemüse getrennt in mundgerechte Stücke schneiden.",
      "Hähnchen in wenig Öl rundherum anbraten.",
      "Currypaste kurz mitrösten und Kokosmilch einrühren.",
      "Brokkoli und Paprika 6 Minuten, dann Zucchini weitere 5 Minuten mitgaren.",
      "Hähnchen vollständig durchgaren.",
      "Mit Fischsauce und Limettensaft abschmecken und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      null,
      null
    ],
    "tip": "Currypaste und Fischsauce sind salzig; erst nach dem Abschmecken zusätzlich salzen."
  },
  {
    "id": "ko-0122",
    "name": "Frühlingsrollen",
    "emoji": "🥟",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "fruehlingsrollenteig",
      "weisskohl",
      "karotten",
      "champignons",
      "fruehlingszwiebeln",
      "sojasauce",
      "ingwer",
      "olivenoel"
    ],
    "amounts": {
      "fruehlingsrollenteig": [
        12,
        "Blätter"
      ],
      "weisskohl": [
        350,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "champignons": [
        180,
        "g"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 40,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Gemüse in sehr feine Streifen schneiden.",
      "Gemüse und Ingwer im Öl bei hoher Hitze 6 Minuten braten, Sojasauce einrühren und vollständig abkühlen lassen.",
      "Teigblätter einzeln auslegen, Füllung auf das untere Drittel geben und Seiten einschlagen.",
      "Straff aufrollen und die letzte Ecke mit Wasser verschließen.",
      "Mit wenig Öl bestreichen und bei 210 °C 18 bis 22 Minuten knusprig backen, einmal wenden."
    ],
    "stepTimers": [
      null,
      6,
      null,
      null,
      22
    ],
    "tip": "Eine trockene, kalte Füllung verhindert, dass die Teighülle aufweicht oder reißt."
  },
  {
    "id": "ko-0123",
    "name": "Massaman Curry",
    "emoji": "🍛",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "kokosmilch",
      "kartoffeln",
      "currypaste",
      "zwiebeln",
      "erdnuesse",
      "fischsauce",
      "reis"
    ],
    "amounts": {
      "rindfleisch": [
        750,
        "g"
      ],
      "kokosmilch": [
        600,
        "ml"
      ],
      "kartoffeln": [
        650,
        "g"
      ],
      "currypaste": [
        3,
        "EL"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "erdnuesse": [
        80,
        "g"
      ],
      "fischsauce": [
        2,
        "EL"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 105,
    "restMinutes": 0,
    "minutes": 130,
    "difficulty": "Mittel",
    "allergens": [
      "erdnuesse",
      "fisch"
    ],
    "steps": [
      "Rindfleisch in 3 cm große Würfel schneiden und portionsweise anbraten.",
      "Currypaste kurz mitrösten, Kokosmilch angießen und Fleisch zurückgeben.",
      "Zugedeckt 65 Minuten sanft schmoren.",
      "Kartoffeln und Zwiebeln grob würfeln, zugeben und weitere 25 bis 30 Minuten garen.",
      "Mit Fischsauce abschmecken, Erdnüsse darübergeben und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      65,
      30,
      null
    ],
    "tip": "Das Curry nur leise köcheln lassen, damit das Fleisch zart wird und die Kokosmilch nicht stark trennt."
  },
  {
    "id": "ko-0124",
    "name": "Bún Chả",
    "emoji": "🍜",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reisnudeln",
      "hackfleisch",
      "karotten",
      "gurke",
      "fischsauce",
      "limette",
      "zucker",
      "knoblauch",
      "koriander"
    ],
    "amounts": {
      "reisnudeln": [
        400,
        "g"
      ],
      "hackfleisch": [
        600,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "fischsauce": [
        5,
        "EL"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "zucker": [
        35,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "koriander": [
        20,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "fisch"
    ],
    "steps": [
      "Hackfleisch mit einem Esslöffel Fischsauce, etwas Zucker und Knoblauch mischen und zwölf flache Bällchen formen.",
      "Reisnudeln nach Packungsangabe garen, kalt abspülen und abtropfen lassen.",
      "Karotten stifteln und Gurke in dünne Scheiben schneiden.",
      "Fleischbällchen in einer Grillpfanne rundherum bräunen und vollständig durchgaren.",
      "Übrige Fischsauce, Limettensaft, Zucker und 180 ml Wasser verrühren und mit Nudeln, Gemüse, Fleisch und Koriander servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Sauce soll salzig, sauer und süß ausgewogen sein; vorsichtig in kleinen Schritten nachjustieren."
  },
  {
    "id": "ko-0125",
    "name": "Laksa",
    "emoji": "🍜",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reisnudeln",
      "kokosmilch",
      "haehnchen",
      "currypaste",
      "bruehe",
      "limette",
      "sojasauce",
      "paprika",
      "spinat"
    ],
    "amounts": {
      "reisnudeln": [
        350,
        "g"
      ],
      "kokosmilch": [
        500,
        "ml"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "currypaste": [
        3,
        "EL"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "spinat": [
        200,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Reisnudeln nach Packungsangabe separat garen und auf vier Schalen verteilen.",
      "Hähnchen in dünne Streifen und Paprika in Stücke schneiden.",
      "Currypaste kurz anrösten, Kokosmilch und Brühe einrühren und aufkochen.",
      "Hähnchen und Paprika 10 bis 12 Minuten vollständig garen, Spinat am Ende zusammenfallen lassen.",
      "Mit Sojasauce und Limettensaft abschmecken und die heiße Suppe über die Nudeln geben."
    ],
    "stepTimers": [
      null,
      null,
      null,
      12,
      null
    ],
    "tip": "Nudeln separat garen, damit sie die Suppe beim Aufbewahren nicht vollständig aufsaugen."
  },
  {
    "id": "ko-0126",
    "name": "Mango Sticky Rice",
    "emoji": "🍚",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "reis",
      "kokosmilch",
      "zucker",
      "mango",
      "sesam"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "kokosmilch": [
        500,
        "ml"
      ],
      "zucker": [
        90,
        "g"
      ],
      "mango": [
        2,
        "Stück"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "sesam"
    ],
    "steps": [
      "Reis gründlich waschen und mindestens 30 Minuten in kaltem Wasser einweichen.",
      "Reis abgießen und in einem Dämpfeinsatz 25 bis 30 Minuten weich dämpfen.",
      "Kokosmilch mit Zucker und einer Prise Salz erhitzen, aber nicht stark kochen.",
      "Zwei Drittel der Kokosmilch unter den heißen Reis rühren und 15 Minuten quellen lassen.",
      "Mango schneiden, mit dem Reis anrichten, übrige Kokosmilch darübergeben und mit Sesam bestreuen."
    ],
    "stepTimers": [
      30,
      30,
      null,
      15,
      null
    ],
    "tip": "Klebreis wird am zuverlässigsten gedämpft; normaler Langkornreis ergibt eine andere Konsistenz."
  },
  {
    "id": "ko-0127",
    "name": "Kung Pao Chicken",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "erdnuesse",
      "paprika",
      "fruehlingszwiebeln",
      "sojasauce",
      "chili",
      "ingwer",
      "knoblauch",
      "speisestaerke",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "erdnuesse": [
        90,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "chili": [
        2,
        "Stück"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "speisestaerke": [
        20,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "erdnuesse",
      "soja"
    ],
    "steps": [
      "Reis garen; Hähnchen würfeln und mit zwei Esslöffeln Sojasauce sowie Stärke mischen.",
      "Paprika schneiden, Frühlingszwiebeln, Ingwer, Knoblauch und Chili fein vorbereiten.",
      "Hähnchen portionsweise bei hoher Hitze vollständig durchgaren und herausnehmen.",
      "Gemüse und Gewürze 5 Minuten braten, Hähnchen und übrige Sojasauce zugeben.",
      "Erdnüsse unterheben, alles 2 Minuten glasieren und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      2
    ],
    "tip": "Alle Zutaten vorher bereitstellen; bei hoher Hitze bleibt während des Bratens keine Zeit zum Schneiden."
  },
  {
    "id": "ko-0128",
    "name": "Mapo Tofu",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "champignons",
      "sojasauce",
      "knoblauch",
      "chili",
      "ingwer",
      "bruehe",
      "speisestaerke",
      "reis"
    ],
    "amounts": {
      "tofu": [
        600,
        "g"
      ],
      "champignons": [
        300,
        "g"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "chili": [
        2,
        "Stück"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "bruehe": [
        300,
        "ml"
      ],
      "speisestaerke": [
        15,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Reis garen; Tofu in 2 cm große Würfel und Pilze sehr fein schneiden.",
      "Pilze in einer tiefen Pfanne kräftig braten, bis ihre Flüssigkeit verdampft ist.",
      "Knoblauch, Ingwer und Chili kurz mitrösten, Brühe und Sojasauce angießen.",
      "Tofu vorsichtig einlegen und 8 Minuten sanft köcheln.",
      "Stärke mit kaltem Wasser verrühren, Sauce binden und behutsam mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      null
    ],
    "tip": "Tofu nach dem Einlegen nur durch Schwenken bewegen, damit die Würfel nicht zerbrechen."
  },
  {
    "id": "ko-0129",
    "name": "Süß-saure Suppe",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "eier",
      "tofu",
      "champignons",
      "karotten",
      "bruehe",
      "sojasauce",
      "essig",
      "zucker",
      "speisestaerke",
      "ingwer"
    ],
    "amounts": {
      "eier": [
        3,
        "Stück"
      ],
      "tofu": [
        300,
        "g"
      ],
      "champignons": [
        250,
        "g"
      ],
      "karotten": [
        150,
        "g"
      ],
      "bruehe": [
        1100,
        "ml"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "essig": [
        4,
        "EL"
      ],
      "zucker": [
        30,
        "g"
      ],
      "speisestaerke": [
        25,
        "g"
      ],
      "ingwer": [
        15,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier",
      "soja"
    ],
    "steps": [
      "Tofu würfeln, Pilze in Scheiben und Karotten in feine Stifte schneiden.",
      "Brühe mit Ingwer, Pilzen und Karotten 10 Minuten köcheln.",
      "Tofu, Sojasauce, Essig und Zucker zugeben und 5 Minuten erhitzen.",
      "Stärke mit kaltem Wasser glatt rühren und die Suppe damit leicht binden.",
      "Eier verquirlen, in dünnem Strahl einlaufen lassen und vollständig stocken lassen; abschmecken."
    ],
    "stepTimers": [
      null,
      10,
      5,
      null,
      null
    ],
    "tip": "Säure und Süße am Ende in kleinen Schritten ausbalancieren, da Essigsorten unterschiedlich kräftig sind."
  },
  {
    "id": "ko-0130",
    "name": "Chow Mein",
    "emoji": "🍜",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "haehnchen",
      "karotten",
      "weisskohl",
      "paprika",
      "fruehlingszwiebeln",
      "sojasauce",
      "ingwer"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "weisskohl": [
        300,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Nudeln bissfest garen, kalt abschrecken und gut abtropfen lassen.",
      "Hähnchen in dünne Streifen schneiden und in einer heißen Pfanne vollständig durchgaren.",
      "Karotten, Kohl, Paprika und Ingwer zugeben und 6 Minuten bissfest braten.",
      "Nudeln und Sojasauce einrühren und bei hoher Hitze 3 Minuten durchschwenken.",
      "Frühlingszwiebeln unterheben, Gargrad prüfen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      3,
      null
    ],
    "tip": "Gut abgetropfte Nudeln braten statt zu dämpfen und bleiben dadurch bissfest."
  },
  {
    "id": "ko-0131",
    "name": "Teriyaki-Lachs",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lachs",
      "sojasauce",
      "honig",
      "ingwer",
      "knoblauch",
      "reis",
      "brokkoli",
      "sesam"
    ],
    "amounts": {
      "lachs": [
        650,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "reis": [
        300,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "fisch",
      "sesam"
    ],
    "steps": [
      "Reis garen und Brokkoli 6 Minuten bissfest dämpfen.",
      "Lachs trocken tupfen und auf mögliche Gräten prüfen.",
      "Sojasauce, Honig, geriebenen Ingwer und Knoblauch verrühren.",
      "Lachs in einer Pfanne zunächst auf der Hautseite braten, wenden und Sauce angießen.",
      "Sauce 3 bis 4 Minuten glasieren, vollständigen Gargrad prüfen und mit Reis, Brokkoli sowie Sesam servieren."
    ],
    "stepTimers": [
      6,
      null,
      null,
      null,
      4
    ],
    "tip": "Nach Zugabe der süßen Sauce die Hitze reduzieren, damit sie nicht verbrennt."
  },
  {
    "id": "ko-0132",
    "name": "Kimchi-Pfanne",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "kimchi",
      "eier",
      "fruehlingszwiebeln",
      "sojasauce",
      "sesam",
      "tofu"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "kimchi": [
        350,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "tofu": [
        300,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis idealerweise vorab garen, rasch abkühlen und gekühlt aufbewahren.",
      "Tofu würfeln und in einer großen Pfanne rundherum knusprig braten.",
      "Kimchi klein schneiden und 4 Minuten mitbraten.",
      "Reis und Sojasauce zugeben und unter Rühren vollständig durcherhitzen.",
      "Vier Eier separat vollständig zu Spiegeleiern braten und mit Frühlingszwiebeln sowie Sesam auf dem Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      4,
      null,
      null
    ],
    "tip": "Kalter Reis vom Vortag bleibt locker; beim Braten muss er vollständig durcherhitzt werden."
  },
  {
    "id": "ko-0133",
    "name": "Bulgogi",
    "emoji": "🍖",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "sojasauce",
      "knoblauch",
      "sesam",
      "birne",
      "zwiebeln",
      "fruehlingszwiebeln",
      "reis",
      "zucker"
    ],
    "amounts": {
      "rindfleisch": [
        650,
        "g"
      ],
      "sojasauce": [
        6,
        "EL"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "birne": [
        1,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "reis": [
        300,
        "g"
      ],
      "zucker": [
        20,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Rindfleisch quer zur Faser in sehr dünne Streifen schneiden.",
      "Birne fein reiben und mit Sojasauce, Zucker, Knoblauch und Sesam verrühren.",
      "Fleisch 20 Minuten darin marinieren.",
      "Reis garen, Zwiebel schneiden und Frühlingszwiebeln in Ringe schneiden.",
      "Fleisch aus der Marinade heben und portionsweise bei sehr hoher Hitze kurz braten; Zwiebel mitgaren.",
      "Marinade nur vollständig aufgekocht verwenden, Fleisch zusammenführen und mit Reis sowie Frühlingszwiebeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      20,
      null,
      null,
      null
    ],
    "tip": "Leicht angefrorenes Fleisch lässt sich besonders dünn quer zur Faser schneiden."
  },
  {
    "id": "ko-0134",
    "name": "Onigiri",
    "emoji": "🍙",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "nori",
      "tofu",
      "sojasauce",
      "sesam",
      "fruehlingszwiebeln"
    ],
    "amounts": {
      "reis": [
        400,
        "g"
      ],
      "nori": [
        4,
        "Blätter"
      ],
      "tofu": [
        220,
        "g"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "fruehlingszwiebeln": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis gründlich waschen, mit passender Wassermenge garen und 10 Minuten zugedeckt ruhen lassen.",
      "Tofu fein zerbröseln, knusprig braten und mit Sojasauce sowie Frühlingszwiebeln würzen.",
      "Reis lauwarm abkühlen lassen und Sesam unterheben.",
      "Mit angefeuchteten Händen Reis flach drücken, etwas Füllung einschließen und zu acht Dreiecken formen.",
      "Nori in Streifen schneiden, um die Onigiri legen und zeitnah servieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      null,
      null
    ],
    "tip": "Nur lauwarmen Reis formen und Hände anfeuchten, damit er nicht klebt und die Füllung sicher eingeschlossen bleibt."
  },
  {
    "id": "ko-0135",
    "name": "Tempura-Gemüse",
    "emoji": "🍢",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "zucchini",
      "paprika",
      "brokkoli",
      "mehl",
      "eier",
      "speisestaerke",
      "sojasauce"
    ],
    "amounts": {
      "zucchini": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "brokkoli": [
        350,
        "g"
      ],
      "mehl": [
        200,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ],
      "speisestaerke": [
        60,
        "g"
      ],
      "sojasauce": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "soja"
    ],
    "steps": [
      "Gemüse in dünne, ähnlich große Stücke schneiden und sehr gut trocknen.",
      "Frittieröl auf 170 bis 175 °C erhitzen.",
      "Ei mit 300 ml eiskaltem Wasser verrühren, Mehl und Stärke nur kurz klumpig unterheben.",
      "Gemüse portionsweise durch den Teig ziehen und 3 bis 4 Minuten hellgolden frittieren.",
      "Auf einem Gitter abtropfen lassen und sofort mit Sojasauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      4,
      null
    ],
    "tip": "Der Teig muss eiskalt bleiben und darf nicht glatt gerührt werden; so wird die Hülle leicht und knusprig."
  },
  {
    "id": "ko-0136",
    "name": "Guacamole mit Nachos",
    "emoji": "🥑",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "avocado",
      "limette",
      "tomaten",
      "zwiebeln",
      "chili",
      "koriander",
      "tortilla",
      "olivenoel"
    ],
    "amounts": {
      "avocado": [
        3,
        "Stück"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "tomaten": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "koriander": [
        15,
        "g"
      ],
      "tortilla": [
        8,
        "Stück"
      ],
      "olivenoel": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen.",
      "Tortillas in Dreiecke schneiden und dünn mit Öl bestreichen.",
      "Tortillastücke 8 bis 12 Minuten knusprig backen und vollständig auskühlen lassen.",
      "Avocados auslösen und mit Limettensaft grob zerdrücken.",
      "Tomaten entkernen, Zwiebel, Chili und Koriander fein schneiden und unterheben.",
      "Mit Salz abschmecken und die Guacamole sofort mit den Nachos servieren."
    ],
    "stepTimers": [
      null,
      null,
      12,
      null,
      null,
      null
    ],
    "tip": "Tomaten entkernen und Avocado erst kurz vorher verarbeiten, damit die Guacamole nicht wässrig oder braun wird."
  },
  {
    "id": "ko-0137",
    "name": "Chilaquiles",
    "emoji": "🌶️",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "dosentomaten",
      "eier",
      "feta",
      "zwiebeln",
      "chili",
      "avocado",
      "olivenoel"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "feta": [
        150,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "avocado": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 22,
    "restMinutes": 0,
    "minutes": 42,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Tortillas in Dreiecke schneiden, mit wenig Öl mischen und bei 200 °C 10 bis 12 Minuten knusprig backen.",
      "Zwiebel und Chili anschwitzen, Tomaten zugeben und 10 Minuten einkochen.",
      "Eier in einer Pfanne vollständig zu Spiegeleiern braten.",
      "Tortillachips nur kurz in der heißen Tomatensauce wenden.",
      "Auf Tellern verteilen und mit Ei, Feta, Avocado und feinen Zwiebelstreifen servieren."
    ],
    "stepTimers": [
      12,
      10,
      null,
      null,
      null
    ],
    "tip": "Chips nur wenige Sekunden mit der Sauce mischen, damit sie an den Rändern knusprig bleiben."
  },
  {
    "id": "ko-0138",
    "name": "Ceviche",
    "emoji": "🍤",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "garnelen",
      "zitrone",
      "tomaten",
      "zwiebeln",
      "koriander",
      "chili"
    ],
    "amounts": {
      "garnelen": [
        400,
        "g"
      ],
      "zitrone": [
        3,
        "Stück"
      ],
      "tomaten": [
        3,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "koriander": [
        15,
        "g"
      ],
      "chili": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "schalentiere"
    ],
    "steps": [
      "Rohe Garnelen schälen, entdarmen und in leicht siedendem Salzwasser vollständig garen, bis sie durchgehend rosa und fest sind.",
      "Vorgegarte Garnelen nur abspülen und gut abtropfen lassen.",
      "Gegarte Garnelen sofort kurz in Eiswasser abkühlen, anschließend gründlich abtropfen lassen und in mundgerechte Stücke schneiden.",
      "Tomaten würfeln, Zwiebel sehr fein schneiden, Koriander hacken und Chili nach gewünschter Schärfe vorbereiten.",
      "Zitronen auspressen und den Saft mit Garnelen, Tomaten, Zwiebel, Koriander und Chili vermengen.",
      "Abgedeckt 15 Minuten im Kühlschrank ziehen lassen, abschmecken und gut gekühlt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      15
    ],
    "tip": "Nur vollständig gegarte Garnelen verwenden; Zitronensaft ersetzt kein sicheres Durchgaren."
  },
  {
    "id": "ko-0139",
    "name": "Churrasco",
    "emoji": "🍖",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "knoblauch",
      "petersilie",
      "zitrone",
      "olivenoel",
      "paprika"
    ],
    "amounts": {
      "rindfleisch": [
        800,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "petersilie": [
        40,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        5,
        "EL"
      ],
      "paprika": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Fleisch 30 Minuten vor dem Garen aus dem Kühlschrank nehmen und trocken tupfen.",
      "Petersilie und Knoblauch fein hacken und mit Öl sowie Zitronensaft zu einer Sauce verrühren.",
      "Paprika in breite Stücke schneiden und auf Grill oder Grillpfanne 8 Minuten garen.",
      "Fleisch bei hoher Hitze je nach Dicke und gewünschtem Gargrad von beiden Seiten grillen.",
      "Fleisch 5 bis 8 Minuten ruhen lassen, quer zur Faser schneiden und mit Kräutersauce sowie Paprika servieren."
    ],
    "stepTimers": [
      30,
      null,
      8,
      null,
      8
    ],
    "tip": "Ein Küchenthermometer hilft, den gewünschten Gargrad sicher und reproduzierbar zu erreichen."
  },
  {
    "id": "ko-0140",
    "name": "Feijoada",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "schweinefleisch",
      "wurst",
      "bohnen",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "reis",
      "olivenoel"
    ],
    "amounts": {
      "schweinefleisch": [
        600,
        "g"
      ],
      "wurst": [
        300,
        "g"
      ],
      "bohnen": [
        700,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "reis": [
        300,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 110,
    "restMinutes": 0,
    "minutes": 140,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Schweinefleisch würfeln, Wurst in Scheiben schneiden und beides portionsweise anbraten.",
      "Zwiebeln und Knoblauch im Bratensatz 5 Minuten anschwitzen.",
      "Fleisch, abgespülte Bohnen und Brühe zugeben und 75 Minuten leise schmoren.",
      "Wurst in den letzten 20 Minuten wieder zugeben.",
      "Den Reis währenddessen separat nach Packungsangabe garen und bis zum Servieren warm halten.",
      "Einige Bohnen zerdrücken, Eintopf damit binden und zusammen mit Reis servieren."
    ],
    "stepTimers": [
      null,
      5,
      75,
      20,
      null,
      null
    ],
    "tip": "Wurst erst später zugeben, damit sie Geschmack abgibt, aber nicht völlig zerfällt."
  },
  {
    "id": "ko-0141",
    "name": "Klassischer Cheeseburger",
    "emoji": "🍔",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "burgerbroetchen",
      "cheddar",
      "gewuerzgurken",
      "tomaten",
      "salat",
      "zwiebeln",
      "senf"
    ],
    "amounts": {
      "hackfleisch": [
        600,
        "g"
      ],
      "burgerbroetchen": [
        4,
        "Stück"
      ],
      "cheddar": [
        8,
        "Stück"
      ],
      "gewuerzgurken": [
        4,
        "Stück"
      ],
      "tomaten": [
        2,
        "Stück"
      ],
      "salat": [
        120,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "senf": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 43,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Hackfleisch ohne starkes Kneten in vier gleich große Patties formen und mittig leicht eindrücken.",
      "Brötchen aufschneiden und Schnittflächen in einer trockenen Pfanne rösten.",
      "Patties kräftig anbraten und vollständig oder nach sicherem gewünschtem Gargrad garen.",
      "Cheddar auflegen und zugedeckt schmelzen lassen.",
      "Brötchen mit Senf, Salat, Tomaten, Patties, Gurken und Zwiebeln zusammensetzen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Hackfleischburger für Risikogruppen immer vollständig durchgaren; Patties erst direkt vor dem Braten salzen."
  },
  {
    "id": "ko-0142",
    "name": "Mac and Cheese",
    "emoji": "🧀",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "cheddar",
      "milch",
      "butter",
      "mehl",
      "senf",
      "paniermehl"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "cheddar": [
        300,
        "g"
      ],
      "milch": [
        600,
        "ml"
      ],
      "butter": [
        50,
        "g"
      ],
      "mehl": [
        45,
        "g"
      ],
      "senf": [
        1,
        "EL"
      ],
      "paniermehl": [
        60,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Backofen auf 210 °C vorheizen.",
      "Nudeln 2 Minuten kürzer als angegeben kochen.",
      "Butter schmelzen, Mehl einrühren und Milch nach und nach klümpchenfrei zufügen.",
      "Sauce 5 Minuten köcheln, Senf und 250 g Cheddar einrühren.",
      "Nudeln mit Sauce mischen und in eine Form geben.",
      "Übrigen Käse und Paniermehl darüberstreuen und 15 bis 20 Minuten goldbraun backen."
    ],
    "stepTimers": [
      null,
      2,
      null,
      5,
      null,
      20
    ],
    "tip": "Käse bei kleiner Hitze einrühren, damit die Sauce glatt bleibt und nicht ölig wird."
  },
  {
    "id": "ko-0143",
    "name": "Fish and Chips",
    "emoji": "🐟",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "fisch",
      "kartoffeln",
      "mehl",
      "speisestaerke",
      "backpulver",
      "zitrone",
      "erbsen"
    ],
    "amounts": {
      "fisch": [
        700,
        "g"
      ],
      "kartoffeln": [
        1000,
        "g"
      ],
      "mehl": [
        220,
        "g"
      ],
      "speisestaerke": [
        50,
        "g"
      ],
      "backpulver": [
        1,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "erbsen": [
        300,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "fisch"
    ],
    "steps": [
      "Kartoffeln in dicke Stifte schneiden, 6 Minuten vorkochen, abgießen und vollständig ausdampfen lassen.",
      "Kartoffeln bei 160 °C 5 Minuten vorfrittieren, abkühlen lassen und später bei 190 °C goldbraun fertig frittieren.",
      "Fisch trocken tupfen, auf Gräten prüfen und leicht in Mehl wenden.",
      "Restliches Mehl, Stärke, Backpulver und 300 ml eiskaltes Wasser kurz verrühren.",
      "Fisch durchziehen und bei 175 °C vollständig ausbacken.",
      "Erbsen erhitzen, grob zerdrücken und mit Fisch, Chips sowie Zitrone servieren."
    ],
    "stepTimers": [
      6,
      5,
      null,
      null,
      null,
      null
    ],
    "tip": "Öltemperatur zwischen den Portionen wieder erreichen lassen, sonst wird die Panade fettig."
  },
  {
    "id": "ko-0144",
    "name": "BBQ Pulled Pork",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "schweinefleisch",
      "zwiebeln",
      "honig",
      "paprikapulver",
      "senf",
      "dosentomaten",
      "bruehe",
      "burgerbroetchen"
    ],
    "amounts": {
      "schweinefleisch": [
        1200,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "honig": [
        3,
        "EL"
      ],
      "paprikapulver": [
        3,
        "TL"
      ],
      "senf": [
        2,
        "EL"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "bruehe": [
        250,
        "ml"
      ],
      "burgerbroetchen": [
        8,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 250,
    "restMinutes": 0,
    "minutes": 275,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "senf"
    ],
    "steps": [
      "Backofen auf 150 °C vorheizen.",
      "Fleisch mit Paprikapulver, Senf, Salz und Pfeffer einreiben.",
      "Zwiebeln in einen Bräter geben, Fleisch daraufsetzen, Tomaten und Brühe angießen.",
      "Zugedeckt 3,5 bis 4 Stunden schmoren, bis sich das Fleisch leicht zerteilen lässt.",
      "Fleisch herausnehmen, mit zwei Gabeln zerzupfen und Sauce offen einkochen; Honig einrühren.",
      "Fleisch mit Sauce vermengen, vollständig erhitzen und in gerösteten Brötchen servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      240,
      null,
      null
    ],
    "tip": "Pulled Pork ist fertig, wenn es sich ohne Kraftaufwand mit zwei Gabeln auseinanderziehen lässt."
  },
  {
    "id": "ko-0145",
    "name": "Carrot Cake",
    "emoji": "🥕",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "karotten",
      "mehl",
      "zucker",
      "eier",
      "olivenoel",
      "zimt",
      "backpulver",
      "mandeln",
      "frischkaese"
    ],
    "amounts": {
      "karotten": [
        400,
        "g"
      ],
      "mehl": [
        280,
        "g"
      ],
      "zucker": [
        180,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "olivenoel": [
        160,
        "ml"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "mandeln": [
        120,
        "g"
      ],
      "frischkaese": [
        250,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen und eine Springform auslegen.",
      "Karotten fein raspeln.",
      "Eier und Zucker 3 Minuten schaumig rühren, Öl langsam einlaufen lassen.",
      "Mehl, Backpulver, Zimt und gemahlene Mandeln kurz unterheben, dann Karotten einarbeiten.",
      "Teig 45 bis 50 Minuten backen, Stäbchenprobe machen und vollständig auskühlen lassen.",
      "Frischkäse glatt rühren, dünn auf dem kalten Kuchen verteilen und bis zum Servieren kühlen."
    ],
    "stepTimers": [
      null,
      null,
      3,
      null,
      50,
      null
    ],
    "tip": "Frischkäse nur auf vollständig ausgekühlten Kuchen streichen, damit das Topping fest bleibt."
  },
  {
    "id": "ko-0146",
    "name": "French Toast (Armer Ritter)",
    "emoji": "🍞",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "toast",
      "eier",
      "milch",
      "zimt",
      "zucker",
      "butter",
      "beeren"
    ],
    "amounts": {
      "toast": [
        8,
        "Stück"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "milch": [
        300,
        "ml"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "zucker": [
        40,
        "g"
      ],
      "butter": [
        40,
        "g"
      ],
      "beeren": [
        250,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 28,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Eier, Milch, Zucker, Zimt und eine Prise Salz in einer flachen Schale verquirlen.",
      "Toastscheiben nacheinander kurz von beiden Seiten einweichen, aber nicht zerfallen lassen.",
      "Butter portionsweise in einer Pfanne bei mittlerer Hitze schmelzen.",
      "Toast je Seite 3 bis 4 Minuten braten, bis er goldbraun und die Eiermasse vollständig gestockt ist.",
      "French Toast warm mit den vorbereiteten Beeren servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      4,
      null
    ],
    "tip": "Dickeres, leicht trockenes Brot nimmt die Eiermilch auf, ohne dabei schnell zu zerfallen."
  },
  {
    "id": "ko-0147",
    "name": "Granola-Bowl mit Joghurt",
    "emoji": "🥣",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "joghurt",
      "haferflocken",
      "honig",
      "banane",
      "mandeln",
      "beeren",
      "zimt"
    ],
    "amounts": {
      "joghurt": [
        600,
        "g"
      ],
      "haferflocken": [
        240,
        "g"
      ],
      "honig": [
        3,
        "EL"
      ],
      "banane": [
        2,
        "Stück"
      ],
      "mandeln": [
        80,
        "g"
      ],
      "beeren": [
        250,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 180 °C vorheizen und ein Blech mit Backpapier belegen.",
      "Haferflocken, gehackte Mandeln, Zimt und Honig gründlich mischen.",
      "Mischung 15 bis 20 Minuten rösten und zweimal wenden.",
      "Vollständig auskühlen lassen.",
      "Banane schneiden und Beeren vorbereiten.",
      "Joghurt auf vier Schalen verteilen und mit Obst sowie dem knusprigen Granola servieren."
    ],
    "stepTimers": [
      null,
      null,
      20,
      null,
      null,
      null
    ],
    "tip": "Granola wird erst beim Abkühlen knusprig und sollte vollständig kalt luftdicht gelagert werden."
  },
  {
    "id": "ko-0148",
    "name": "Bagel mit Lachs und Quark",
    "emoji": "🥯",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "bagel",
      "lachs",
      "quark",
      "gurke",
      "zitrone",
      "dill"
    ],
    "amounts": {
      "bagel": [
        4,
        "Stück"
      ],
      "lachs": [
        300,
        "g"
      ],
      "quark": [
        300,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "dill": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Lachs vollständig garen, abkühlen lassen und in grobe Stücke teilen.",
      "Quark mit Zitronensaft, gehacktem Dill, Salz und Pfeffer verrühren.",
      "Gurke in sehr dünne Scheiben schneiden.",
      "Bagels halbieren und Schnittflächen kurz rösten.",
      "Quark aufstreichen und mit Gurke sowie Lachs belegen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Gegarten Lachs vollständig abkühlen lassen, bevor er auf den Quark kommt."
  },
  {
    "id": "ko-0149",
    "name": "Porridge mit Apfel",
    "emoji": "🥣",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "haferflocken",
      "milch",
      "apfel",
      "honig",
      "zimt",
      "mandeln"
    ],
    "amounts": {
      "haferflocken": [
        240,
        "g"
      ],
      "milch": [
        800,
        "ml"
      ],
      "apfel": [
        2,
        "Stück"
      ],
      "honig": [
        2,
        "EL"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "mandeln": [
        50,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 22,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Äpfel entkernen und in kleine Würfel schneiden.",
      "Haferflocken, Milch, Zimt und drei Viertel der Äpfel in einen Topf geben.",
      "Unter Rühren aufkochen und 6 bis 8 Minuten bei kleiner Hitze cremig garen.",
      "Konsistenz mit etwas Milch oder Wasser anpassen und Honig einrühren.",
      "Auf Schalen verteilen und mit übrigen Äpfeln sowie Mandeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      8,
      null,
      null
    ],
    "tip": "Beim Abkühlen dickt Porridge nach; am Herd darf er deshalb noch etwas flüssiger sein."
  },
  {
    "id": "ko-0150",
    "name": "Rührtofu",
    "emoji": "🍳",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "currypulver",
      "paprika",
      "zwiebeln",
      "spinat",
      "olivenoel"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "currypulver": [
        2,
        "TL"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "spinat": [
        150,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "soja"
    ],
    "steps": [
      "Tofu gut abtropfen lassen und mit den Händen grob zerbröseln.",
      "Paprika und Zwiebel klein würfeln.",
      "Gemüse im Öl 6 Minuten anbraten, Currypulver kurz mitrösten.",
      "Tofu zugeben und 5 bis 6 Minuten unter gelegentlichem Rühren braten.",
      "Spinat zusammenfallen lassen und alles kräftig mit Salz und Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      6,
      null
    ],
    "tip": "Tofu vor dem Braten gut ausdrücken, damit er mehr Röstaromen entwickelt."
  },
  {
    "id": "ko-0151",
    "name": "Eggs Benedict",
    "emoji": "🍳",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "eier",
      "bagel",
      "schinken",
      "butter",
      "zitrone",
      "essig"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "bagel": [
        4,
        "Stück"
      ],
      "schinken": [
        200,
        "g"
      ],
      "butter": [
        180,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "essig": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Vier Eier trennen; Eigelb mit zwei Esslöffeln Wasser über einem warmen Wasserbad cremig aufschlagen.",
      "150 g Butter langsam einlaufen lassen, Zitronensaft einrühren und die Sauce warm halten.",
      "Großen Topf mit Wasser und Essig knapp unter dem Siedepunkt halten.",
      "Übrige vier Eier einzeln in Tassen aufschlagen, je 3 bis 4 Minuten pochieren und gut abtropfen.",
      "Bagelhälften rösten, mit Schinken und pochiertem Ei belegen und sofort mit Sauce servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      4,
      null
    ],
    "tip": "Für Risikogruppen pasteurisierte Eier verwenden oder Eier und Sauce vollständig durcherhitzen."
  },
  {
    "id": "ko-0152",
    "name": "Zitronenkuchen",
    "emoji": "🍋",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "zitrone",
      "zucker",
      "butter",
      "eier",
      "backpulver",
      "milch"
    ],
    "amounts": {
      "mehl": [
        300,
        "g"
      ],
      "zitrone": [
        3,
        "Stück"
      ],
      "zucker": [
        180,
        "g"
      ],
      "butter": [
        180,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "milch": [
        80,
        "ml"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen und eine Kastenform fetten.",
      "Butter und 150 g Zucker cremig rühren, Eier einzeln einarbeiten.",
      "Schale von zwei Zitronen und Milch unterrühren, Mehl und Backpulver kurz unterheben.",
      "Teig 50 bis 55 Minuten backen und per Stäbchenprobe prüfen.",
      "Saft der Zitronen mit restlichem Zucker verrühren und den warmen Kuchen mehrfach einstechen sowie tränken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      55,
      null
    ],
    "tip": "Nur den gelben Teil der Zitronenschale abreiben; die weiße Schicht schmeckt bitter."
  },
  {
    "id": "ko-0153",
    "name": "Schokoladenkuchen",
    "emoji": "🍫",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "schokolade",
      "eier",
      "zucker",
      "butter",
      "kakao",
      "backpulver"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "schokolade": [
        220,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "zucker": [
        170,
        "g"
      ],
      "butter": [
        180,
        "g"
      ],
      "kakao": [
        30,
        "g"
      ],
      "backpulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C vorheizen und eine Springform auslegen.",
      "Schokolade und Butter über einem Wasserbad schmelzen und etwas abkühlen lassen.",
      "Eier und Zucker 4 Minuten dickcremig aufschlagen.",
      "Schokoladenmischung einrühren, anschließend Mehl, Kakao und Backpulver kurz unterheben.",
      "40 bis 45 Minuten backen, Stäbchenprobe machen und vor dem Anschneiden auskühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      4,
      null,
      45
    ],
    "tip": "Die Schokoladenmischung nur lauwarm zu den Eiern geben, damit sie nicht stocken."
  },
  {
    "id": "ko-0154",
    "name": "Vanillepudding",
    "emoji": "🍮",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "milch",
      "zucker",
      "vanille",
      "speisestaerke"
    ],
    "amounts": {
      "milch": [
        800,
        "ml"
      ],
      "zucker": [
        70,
        "g"
      ],
      "vanille": [
        1,
        "Stück"
      ],
      "speisestaerke": [
        55,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Vanilleschote längs öffnen und Mark herauskratzen.",
      "150 ml Milch mit Zucker und Stärke klümpchenfrei verrühren.",
      "Übrige Milch mit Vanillemark und Schote aufkochen, Schote entfernen.",
      "Stärkemischung unter ständigem Rühren eingießen und eine Minute sprudelnd kochen.",
      "Pudding in vier Schalen füllen und warm servieren oder abgedeckt kühlen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Folie direkt auf die Oberfläche legen, wenn sich beim Abkühlen keine Haut bilden soll."
  },
  {
    "id": "ko-0155",
    "name": "Käsekuchen",
    "emoji": "🍰",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "quark",
      "eier",
      "zucker",
      "mehl",
      "butter",
      "speisestaerke",
      "zitrone",
      "vanillezucker"
    ],
    "amounts": {
      "quark": [
        1000,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "zucker": [
        180,
        "g"
      ],
      "mehl": [
        250,
        "g"
      ],
      "butter": [
        140,
        "g"
      ],
      "speisestaerke": [
        50,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 65,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, 80 g Zucker, 120 g Butter, ein Ei und eine Prise Salz rasch verkneten und 30 Minuten kühlen.",
      "Backofen auf 170 °C vorheizen.",
      "Teig ausrollen und Boden sowie Rand einer Springform auskleiden.",
      "Quark, übrige Eier, Zucker, Butter, Stärke, Vanillezucker und Zitronenschale glatt rühren.",
      "Füllung in die Form geben und 55 bis 65 Minuten backen.",
      "Ofen ausschalten, Tür einen Spalt öffnen und Kuchen langsam abkühlen lassen."
    ],
    "stepTimers": [
      30,
      null,
      null,
      null,
      65,
      null
    ],
    "tip": "Langsames Abkühlen reduziert starke Spannungsrisse in der Oberfläche."
  },
  {
    "id": "ko-0156",
    "name": "Mandelkekse",
    "emoji": "🍪",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mandeln",
      "mehl",
      "zucker",
      "honig",
      "butter",
      "eier"
    ],
    "amounts": {
      "mandeln": [
        220,
        "g"
      ],
      "mehl": [
        180,
        "g"
      ],
      "zucker": [
        110,
        "g"
      ],
      "honig": [
        2,
        "EL"
      ],
      "butter": [
        120,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 180 °C vorheizen und zwei Bleche mit Backpapier belegen.",
      "Butter, Zucker und Honig cremig rühren, Ei einarbeiten.",
      "Mehl und 170 g gemahlene Mandeln kurz unterheben.",
      "Aus dem Teig kleine Kugeln formen, flach drücken und mit übrigen Mandeln bestreuen.",
      "12 bis 15 Minuten hellgolden backen und auf dem Blech 5 Minuten fest werden lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      15
    ],
    "tip": "Kekse nicht zu dunkel backen; beim Abkühlen werden sie noch fester."
  },
  {
    "id": "ko-0157",
    "name": "Rote Grütze",
    "emoji": "🍮",
    "time": "schnell",
    "diet": "vegan",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "beeren",
      "zucker",
      "speisestaerke",
      "vanillezucker",
      "zitrone"
    ],
    "amounts": {
      "beeren": [
        800,
        "g"
      ],
      "zucker": [
        100,
        "g"
      ],
      "speisestaerke": [
        45,
        "g"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Beeren verlesen beziehungsweise tiefgekühlte Beeren direkt bereitstellen.",
      "Beeren mit 150 ml Wasser, Zucker, Vanillezucker und Zitronensaft aufkochen.",
      "Stärke mit 80 ml kaltem Wasser glatt rühren.",
      "Stärkemischung unter Rühren eingießen und eine Minute sprudelnd kochen.",
      "Grütze in eine Schüssel füllen, abkühlen und mindestens eine Stunde kühlen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Weiche Beeren erst später zugeben, wenn mehr ganze Früchte erhalten bleiben sollen."
  },
  {
    "id": "ko-0158",
    "name": "Poutine",
    "emoji": "🍟",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "reibekaese",
      "bruehe",
      "butter",
      "mehl",
      "sojasauce"
    ],
    "amounts": {
      "kartoffeln": [
        1200,
        "g"
      ],
      "reibekaese": [
        250,
        "g"
      ],
      "bruehe": [
        600,
        "ml"
      ],
      "butter": [
        40,
        "g"
      ],
      "mehl": [
        40,
        "g"
      ],
      "sojasauce": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "soja"
    ],
    "steps": [
      "Kartoffeln in dicke Stifte schneiden, 6 Minuten vorkochen und vollständig ausdampfen lassen.",
      "Kartoffeln mit wenig Öl bei 220 °C 35 bis 40 Minuten knusprig backen, einmal wenden.",
      "Butter schmelzen, Mehl einrühren und Brühe nach und nach zugeben.",
      "Sauce 8 Minuten einkochen, Sojasauce einrühren und kräftig abschmecken.",
      "Heiße Pommes mit Käse bestreuen, Sauce darübergeben und sofort servieren."
    ],
    "stepTimers": [
      6,
      40,
      null,
      8,
      null
    ],
    "tip": "Pommes erst unmittelbar vor dem Essen mit Sauce übergießen, damit sie möglichst knusprig bleiben."
  },
  {
    "id": "ko-0159",
    "name": "Piroggen",
    "emoji": "🥟",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "eier",
      "kartoffeln",
      "zwiebeln",
      "quark",
      "butter"
    ],
    "amounts": {
      "mehl": [
        400,
        "g"
      ],
      "eier": [
        1,
        "Stück"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "quark": [
        250,
        "g"
      ],
      "butter": [
        50,
        "g"
      ]
    },
    "prepMinutes": 50,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 85,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Ei, 180 ml Wasser und Salz 8 Minuten zu einem glatten Teig kneten und 30 Minuten ruhen lassen.",
      "Kartoffeln weich kochen, zerstampfen und mit Quark vermengen.",
      "Zwiebeln in Butter goldbraun braten, die Hälfte unter die Füllung mischen und abschmecken.",
      "Teig dünn ausrollen, Kreise ausstechen, füllen, zuklappen und Ränder fest zusammendrücken.",
      "Piroggen in siedendem Salzwasser garen, bis sie aufsteigen, und mit übrigen Zwiebeln servieren."
    ],
    "stepTimers": [
      30,
      null,
      null,
      null,
      null
    ],
    "tip": "Ränder frei von Füllung halten und sorgfältig verschließen, damit die Taschen nicht aufgehen."
  },
  {
    "id": "ko-0160",
    "name": "Borschtsch",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rotebete",
      "rotkohl",
      "kartoffeln",
      "karotten",
      "rindfleisch",
      "zwiebeln",
      "bruehe",
      "dosentomaten",
      "essig",
      "sahne"
    ],
    "amounts": {
      "rotebete": [
        600,
        "g"
      ],
      "rotkohl": [
        400,
        "g"
      ],
      "kartoffeln": [
        500,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "rindfleisch": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1400,
        "ml"
      ],
      "dosentomaten": [
        300,
        "g"
      ],
      "essig": [
        2,
        "EL"
      ],
      "sahne": [
        120,
        "ml"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 80,
    "restMinutes": 0,
    "minutes": 110,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Rindfleisch würfeln, in Brühe aufkochen und bei kleiner Hitze 40 Minuten garen.",
      "Rote Bete, Kohl, Kartoffeln, Karotten und Zwiebel in feine Stücke schneiden.",
      "Gemüse und Tomaten zum Fleisch geben und weitere 30 Minuten sanft köcheln.",
      "Gargrad von Fleisch und Gemüse prüfen und mit Essig, Salz sowie Pfeffer abschmecken.",
      "Suppe 10 Minuten ruhen lassen und mit einem Klecks Sahne servieren."
    ],
    "stepTimers": [
      40,
      null,
      30,
      null,
      10
    ],
    "tip": "Rote Bete färbt stark; Brett und Hände direkt nach dem Schneiden abspülen."
  },
  {
    "id": "ko-0161",
    "name": "Apfelstrudel",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "apfel",
      "zimt",
      "butter",
      "zucker",
      "mandeln",
      "zitrone"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "apfel": [
        6,
        "Stück"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "butter": [
        90,
        "g"
      ],
      "zucker": [
        100,
        "g"
      ],
      "mandeln": [
        70,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 45,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Aufwendig",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Mehl mit 130 ml lauwarmem Wasser, einem Esslöffel Öl und Salz 8 Minuten kneten.",
      "30 Minuten ruhen lassen.",
      "Äpfel schälen, dünn schneiden und mit Zucker, Zimt, Mandeln sowie Zitronensaft mischen.",
      "Teig auf einem bemehlten Tuch ausrollen und vorsichtig hauchdünn ausziehen.",
      "Mit Butter bestreichen, Füllung auf einem Drittel verteilen und mithilfe des Tuchs aufrollen.",
      "Mit Butter bestreichen und bei 190 °C 35 bis 40 Minuten goldbraun backen."
    ],
    "stepTimers": [
      8,
      30,
      null,
      null,
      null,
      40
    ],
    "tip": "Dicke Teigränder vor dem Füllen abschneiden, damit der Strudel gleichmäßig zart wird."
  },
  {
    "id": "ko-0162",
    "name": "Falscher Hase",
    "emoji": "🍖",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "eier",
      "zwiebeln",
      "toast",
      "senf",
      "paniermehl",
      "bruehe"
    ],
    "amounts": {
      "hackfleisch": [
        800,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "toast": [
        3,
        "Stück"
      ],
      "senf": [
        2,
        "EL"
      ],
      "paniermehl": [
        50,
        "g"
      ],
      "bruehe": [
        300,
        "ml"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 65,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier",
      "senf"
    ],
    "steps": [
      "Vier Eier 9 Minuten hart kochen, abschrecken und pellen.",
      "Toast einweichen, ausdrücken und mit Hackfleisch, rohem Ei, gewürfelter Zwiebel, Senf und Paniermehl mischen.",
      "Hälfte der Fleischmasse zu einem Laib formen, gekochte Eier mittig auflegen und mit übriger Masse dicht umschließen.",
      "In eine Form setzen, Brühe angießen und bei 180 °C 55 bis 60 Minuten vollständig durchgaren.",
      "Braten 10 Minuten ruhen lassen, aufschneiden und Bratensaft abschmecken."
    ],
    "stepTimers": [
      9,
      null,
      null,
      60,
      10
    ],
    "tip": "Fleischmasse um die Eier lückenlos verschließen, damit der Braten beim Garen stabil bleibt."
  },
  {
    "id": "ko-0163",
    "name": "Paprikahähnchen",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "paprika",
      "paprikapulver",
      "sahne",
      "zwiebeln",
      "bruehe",
      "tomatenmark",
      "reis"
    ],
    "amounts": {
      "haehnchen": [
        700,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "paprikapulver": [
        3,
        "TL"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        300,
        "ml"
      ],
      "tomatenmark": [
        1,
        "EL"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Reis garen; Hähnchen trocken tupfen und in große Stücke schneiden.",
      "Hähnchen rundherum anbraten und herausnehmen.",
      "Zwiebel und Paprika 6 Minuten braten, Tomatenmark und Paprikapulver kurz einrühren.",
      "Brühe angießen, Hähnchen zurückgeben und 15 Minuten vollständig durchgaren.",
      "Sahne einrühren, 5 Minuten sanft einkochen und mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      15,
      5
    ],
    "tip": "Paprikapulver nur kurz und bei mäßiger Hitze rösten, damit es nicht bitter wird."
  },
  {
    "id": "ko-0164",
    "name": "Chicken Wings BBQ",
    "emoji": "🍗",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "honig",
      "paprikapulver",
      "senf",
      "dosentomaten",
      "zitrone"
    ],
    "amounts": {
      "haehnchen": [
        1200,
        "g"
      ],
      "honig": [
        3,
        "EL"
      ],
      "paprikapulver": [
        3,
        "TL"
      ],
      "senf": [
        2,
        "EL"
      ],
      "dosentomaten": [
        250,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Einfach",
    "allergens": [
      "senf"
    ],
    "steps": [
      "Backofen auf 210 °C vorheizen und ein Blech mit Rost vorbereiten.",
      "Wings trocken tupfen, mit Paprikapulver und Salz mischen und auf dem Rost verteilen.",
      "35 Minuten backen und nach der Hälfte wenden.",
      "Tomaten, Honig, Senf und Zitronensaft zu einer dicken Sauce 8 Minuten einkochen.",
      "Wings mit Sauce bestreichen und weitere 12 bis 15 Minuten backen, bis sie vollständig durchgegart und glasiert sind."
    ],
    "stepTimers": [
      null,
      null,
      35,
      8,
      15
    ],
    "tip": "Wings auf einem Rost backen, damit heiße Luft rundherum zirkulieren kann und die Haut knuspriger wird."
  },
  {
    "id": "ko-0165",
    "name": "Süßkartoffel-Pommes",
    "emoji": "🍠",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "suesskartoffel",
      "olivenoel",
      "paprikapulver",
      "speisestaerke"
    ],
    "amounts": {
      "suesskartoffel": [
        1000,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "speisestaerke": [
        30,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Backofen mit zwei Blechen auf 220 °C Umluft vorheizen.",
      "Süßkartoffeln in gleichmäßige, etwa 1 cm dicke Stifte schneiden und gründlich trocken tupfen.",
      "Stifte zuerst mit Stärke, dann mit Öl und Paprikapulver mischen.",
      "Locker auf den heißen Blechen verteilen und 25 bis 35 Minuten backen, einmal wenden.",
      "Erst nach dem Backen salzen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      35,
      null
    ],
    "tip": "Pommes nicht übereinanderlegen; ausreichend Abstand ist wichtiger als zusätzliches Öl."
  },
  {
    "id": "ko-0166",
    "name": "Club Sandwich",
    "emoji": "🥪",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "toast",
      "haehnchen",
      "speck",
      "salat",
      "tomaten",
      "joghurt",
      "senf"
    ],
    "amounts": {
      "toast": [
        12,
        "Stück"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "speck": [
        160,
        "g"
      ],
      "salat": [
        160,
        "g"
      ],
      "tomaten": [
        3,
        "Stück"
      ],
      "joghurt": [
        150,
        "g"
      ],
      "senf": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Hähnchen trocken tupfen, würzen und in einer Pfanne vollständig durchgaren.",
      "Kurz ruhen lassen und aufschneiden.",
      "Speck knusprig braten und auf Küchenpapier abtropfen lassen.",
      "Toast rösten; Salat und Tomaten vorbereiten.",
      "Joghurt mit Senf, Salz und Pfeffer verrühren.",
      "Je drei Toastscheiben mit Sauce, Salat, Tomaten, Hähnchen und Speck stapeln, fixieren und diagonal schneiden."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Hähnchen kurz ruhen lassen und erst dann schneiden, damit weniger Saft austritt."
  },
  {
    "id": "ko-0167",
    "name": "Reuben Sandwich",
    "emoji": "🥪",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "toast",
      "rindfleisch",
      "sauerkraut",
      "reibekaese",
      "joghurt",
      "senf",
      "butter"
    ],
    "amounts": {
      "toast": [
        8,
        "Stück"
      ],
      "rindfleisch": [
        400,
        "g"
      ],
      "sauerkraut": [
        300,
        "g"
      ],
      "reibekaese": [
        240,
        "g"
      ],
      "joghurt": [
        120,
        "g"
      ],
      "senf": [
        2,
        "EL"
      ],
      "butter": [
        30,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 33,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Gegartes Rindfleisch dünn schneiden und Sauerkraut sehr gut ausdrücken.",
      "Joghurt und Senf verrühren und auf die Innenseiten der Toasts streichen.",
      "Vier Scheiben mit Käse, Fleisch, Sauerkraut und erneut Käse belegen und zuklappen.",
      "Außenseiten dünn buttern.",
      "Sandwiches bei mittlerer Hitze je Seite 4 bis 5 Minuten braten, bis der Käse geschmolzen und das Brot knusprig ist."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      5
    ],
    "tip": "Sauerkraut kräftig ausdrücken, damit das Sandwich innen nicht durchweicht."
  },
  {
    "id": "ko-0168",
    "name": "Gemüse-Frittata",
    "emoji": "🍳",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "eier",
      "zucchini",
      "paprika",
      "feta",
      "zwiebeln",
      "spinat",
      "olivenoel"
    ],
    "amounts": {
      "eier": [
        10,
        "Stück"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "feta": [
        180,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "spinat": [
        150,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen.",
      "Zucchini, Paprika und Zwiebel klein schneiden.",
      "Gemüse in einer ofenfesten Pfanne 8 Minuten anbraten, Spinat zusammenfallen lassen.",
      "Eier verquirlen, pfeffern und wegen des Fetas nur leicht salzen.",
      "Eier in die Pfanne gießen, Feta darüberbröseln und 3 Minuten am Herd anstocken lassen.",
      "Im Ofen 15 bis 18 Minuten vollständig stocken lassen und kurz ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      8,
      null,
      3,
      18
    ],
    "tip": "Frittata nicht zu lange backen; sobald die Mitte gestockt ist, bleibt sie saftiger."
  },
  {
    "id": "ko-0169",
    "name": "Räucherlachs-Salat",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "salat",
      "raeucherlachs",
      "gurke",
      "tomaten",
      "zitrone",
      "joghurt",
      "dill"
    ],
    "amounts": {
      "salat": [
        300,
        "g"
      ],
      "raeucherlachs": [
        350,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "tomaten": [
        300,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "dill": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Räucherlachs bis zur Verwendung gekühlt aufbewahren und in breite Streifen schneiden.",
      "Salat waschen, sehr gut trocknen und in mundgerechte Stücke zupfen.",
      "Gurke und Tomaten schneiden.",
      "Joghurt mit Zitronensaft, Dill, Salz und Pfeffer verrühren.",
      "Salat und Gemüse mit Dressing mischen, Räucherlachs darauf verteilen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Räucherlachs durchgehend kühlen, nach Packungsangabe verbrauchen und für Risikogruppen geeignete Hinweise beachten."
  },
  {
    "id": "ko-0170",
    "name": "Waldorf-Salat",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "apfel",
      "sellerie",
      "salat",
      "mandeln",
      "joghurt",
      "zitrone",
      "honig"
    ],
    "amounts": {
      "apfel": [
        3,
        "Stück"
      ],
      "sellerie": [
        350,
        "g"
      ],
      "salat": [
        180,
        "g"
      ],
      "mandeln": [
        80,
        "g"
      ],
      "joghurt": [
        220,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "honig": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "nuesse",
      "sellerie"
    ],
    "steps": [
      "Mandeln in einer trockenen Pfanne rösten und abkühlen lassen.",
      "Äpfel entkernen, in feine Stifte schneiden und sofort mit etwas Zitronensaft mischen.",
      "Sellerie ebenfalls in sehr feine Stifte schneiden und Salat waschen sowie trocknen.",
      "Joghurt, übrigen Zitronensaft, Honig, Salz und Pfeffer verrühren.",
      "Äpfel und Sellerie mit Dressing mischen und auf Salat mit Mandeln anrichten."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Äpfel sofort mit Zitronensaft mischen, damit sie hell und frisch bleiben."
  },
  {
    "id": "ko-0171",
    "name": "Tajine",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lamm",
      "aubergine",
      "karotten",
      "zwiebeln",
      "kichererbsen",
      "zitrone",
      "honig",
      "kreuzkuemmel",
      "bruehe",
      "couscous"
    ],
    "amounts": {
      "lamm": [
        750,
        "g"
      ],
      "aubergine": [
        1,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "kichererbsen": [
        300,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "honig": [
        2,
        "EL"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "bruehe": [
        600,
        "ml"
      ],
      "couscous": [
        300,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 130,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Lamm würfeln und in einem schweren Topf portionsweise kräftig anbraten.",
      "Zwiebeln und Karotten 6 Minuten mitrösten, Kreuzkümmel kurz zufügen.",
      "Brühe angießen und zugedeckt 55 Minuten leise schmoren.",
      "Aubergine, Kichererbsen, Honig und Zitronenschale zugeben und weitere 25 Minuten garen.",
      "Couscous quellen lassen, Tajine abschmecken und zusammen servieren."
    ],
    "stepTimers": [
      null,
      6,
      55,
      25,
      null
    ],
    "tip": "Das Gericht nur leise schmoren lassen; starke Hitze macht das Fleisch eher fest als zart."
  },
  {
    "id": "ko-0172",
    "name": "Grünkohl-Eintopf",
    "emoji": "🥬",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "gruenkohl",
      "kartoffeln",
      "wurst",
      "zwiebeln",
      "bruehe",
      "senf"
    ],
    "amounts": {
      "gruenkohl": [
        800,
        "g"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "wurst": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "senf": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Einfach",
    "allergens": [
      "senf"
    ],
    "steps": [
      "Grünkohl gründlich waschen und grob schneiden.",
      "Kartoffeln würfeln und Zwiebel hacken.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Grünkohl portionsweise zusammenfallen lassen.",
      "Kartoffeln und Brühe zugeben und 30 Minuten sanft köcheln.",
      "Wurst in Scheiben schneiden und weitere 15 Minuten vollständig erhitzen.",
      "Senf einrühren, Eintopf abschmecken und 5 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      4,
      30,
      15,
      5
    ],
    "tip": "Senf erst am Ende einrühren, damit sein Aroma deutlich bleibt."
  },
  {
    "id": "ko-0173",
    "name": "Zwiebelkuchen",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "hefe",
      "zwiebeln",
      "speck",
      "sahne",
      "eier",
      "butter",
      "kuemmel"
    ],
    "amounts": {
      "mehl": [
        400,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "zwiebeln": [
        900,
        "g"
      ],
      "speck": [
        180,
        "g"
      ],
      "sahne": [
        250,
        "ml"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "butter": [
        40,
        "g"
      ],
      "kuemmel": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 35,
    "cookMinutes": 80,
    "restMinutes": 0,
    "minutes": 115,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Hefe, 240 ml lauwarmes Wasser, Butter und Salz 8 Minuten kneten.",
      "45 Minuten gehen lassen.",
      "Zwiebeln in feine Streifen schneiden und mit Speck bei mittlerer Hitze 15 Minuten weich dünsten; abkühlen lassen.",
      "Teig auf einem Blech ausrollen und einen kleinen Rand formen.",
      "Eier, Sahne und Kümmel verrühren, mit der Zwiebelmischung vermengen und verteilen.",
      "Bei 190 °C 35 bis 40 Minuten backen und vor dem Schneiden 10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      8,
      45,
      15,
      null,
      null,
      40
    ],
    "tip": "Zwiebeln langsam weich dünsten und nicht dunkel rösten, damit die Füllung mild und saftig bleibt."
  },
  {
    "id": "ko-0174",
    "name": "Yaki Udon",
    "emoji": "🍜",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "udonnudeln",
      "haehnchen",
      "karotten",
      "weisskohl",
      "paprika",
      "sojasauce",
      "ingwer",
      "fruehlingszwiebeln"
    ],
    "amounts": {
      "udonnudeln": [
        400,
        "g"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "karotten": [
        180,
        "g"
      ],
      "weisskohl": [
        300,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Udon nach Packungsangabe lösen oder kurz vorgaren und gut abtropfen lassen.",
      "Hähnchen in dünne Streifen schneiden und bei hoher Hitze vollständig durchgaren.",
      "Karotten, Kohl, Paprika und Ingwer zugeben und 6 Minuten bissfest braten.",
      "Udon und Sojasauce einrühren und 3 Minuten kräftig durchschwenken.",
      "Frühlingszwiebeln unterheben, Gargrad prüfen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      3,
      null
    ],
    "tip": "Udon nur kurz mitbraten, sonst werden die dicken Nudeln weich und klebrig."
  },
  {
    "id": "ko-0175",
    "name": "Katsudon",
    "emoji": "🍚",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "schweinefleisch",
      "eier",
      "mehl",
      "paniermehl",
      "zwiebeln",
      "sojasauce",
      "bruehe"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "schweinefleisch": [
        600,
        "g"
      ],
      "eier": [
        6,
        "Stück"
      ],
      "mehl": [
        70,
        "g"
      ],
      "paniermehl": [
        150,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "bruehe": [
        300,
        "ml"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "soja"
    ],
    "steps": [
      "Reis garen; Schweinefleisch flach klopfen und in Mehl, zwei verquirlten Eiern und Paniermehl wenden.",
      "Schnitzel in Öl je Seite 4 bis 5 Minuten vollständig durchgaren, kurz ruhen lassen und in Streifen schneiden.",
      "Zwiebeln mit Brühe und Sojasauce 6 Minuten weich köcheln.",
      "Schnitzelstreifen auflegen, übrige Eier verquirlen und darübergeben.",
      "Zugedeckt bei kleiner Hitze vollständig stocken lassen und auf Reis servieren."
    ],
    "stepTimers": [
      null,
      5,
      6,
      null,
      null
    ],
    "tip": "Schnitzel erst nach kurzer Ruhezeit schneiden, damit die Panade besser haften bleibt."
  },
  {
    "id": "ko-0176",
    "name": "Zabaione",
    "emoji": "🍮",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "eier",
      "zucker",
      "honig",
      "weisswein",
      "beeren"
    ],
    "amounts": {
      "eier": [
        6,
        "Stück"
      ],
      "zucker": [
        90,
        "g"
      ],
      "honig": [
        1,
        "EL"
      ],
      "weisswein": [
        120,
        "ml"
      ],
      "beeren": [
        250,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Mittel",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Eier trennen und nur die sechs Eigelb in eine hitzefeste Schüssel geben.",
      "Eigelb, Zucker und Honig 2 Minuten schaumig rühren.",
      "Weißwein langsam einrühren und die Schüssel auf ein nur sanft siedendes Wasserbad setzen.",
      "8 bis 10 Minuten ununterbrochen aufschlagen, bis die Creme dick, luftig und vollständig erhitzt ist.",
      "Sofort in Gläser füllen und mit Beeren servieren."
    ],
    "stepTimers": [
      null,
      2,
      null,
      10,
      null
    ],
    "tip": "Die Schüssel darf das Wasser nicht berühren; für Risikogruppen pasteurisierte Eier verwenden."
  },
  {
    "id": "ko-0177",
    "name": "One-Pot Tomaten-Mozzarella-Gnocchi",
    "emoji": "🍅",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "gnocchi",
      "dosentomaten",
      "sahne",
      "mozzarella",
      "zwiebeln",
      "knoblauch",
      "basilikum"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "mozzarella": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "basilikum": [
        15,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Zwiebel und Knoblauch fein würfeln, Mozzarella abtropfen lassen und schneiden.",
      "Zwiebel 4 Minuten anschwitzen, Knoblauch kurz mitgaren.",
      "Gnocchi, Tomaten und 150 ml Wasser zugeben und 10 bis 12 Minuten sanft köcheln.",
      "Sahne einrühren und Mozzarella bei kleiner Hitze schmelzen lassen.",
      "Konsistenz prüfen, abschmecken und mit Basilikum servieren."
    ],
    "stepTimers": [
      null,
      4,
      12,
      null,
      null
    ],
    "tip": "Gnocchi regelmäßig vorsichtig umrühren, damit sie nicht am Pfannenboden ansetzen."
  },
  {
    "id": "ko-0178",
    "name": "Linsen-Fusilli-Bolognese",
    "emoji": "🍝",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "linsen",
      "dosentomaten",
      "karotten",
      "zwiebeln",
      "knoblauch",
      "tomatenmark"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "linsen": [
        220,
        "g"
      ],
      "dosentomaten": [
        700,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "tomatenmark": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Linsen abspülen; Zwiebel, Karotten und Knoblauch fein würfeln.",
      "Gemüse 6 Minuten anbraten und Tomatenmark kurz mitrösten.",
      "Linsen, Tomaten und 350 ml Wasser zugeben und 22 bis 25 Minuten köcheln.",
      "Nudeln bissfest kochen und etwas Kochwasser auffangen.",
      "Sauce abschmecken, Konsistenz anpassen und mit den Nudeln servieren."
    ],
    "stepTimers": [
      null,
      6,
      25,
      null,
      null
    ],
    "tip": "Linsen erst gegen Ende salzen und bei Bedarf schluckweise Wasser ergänzen."
  },
  {
    "id": "ko-0179",
    "name": "Hähnchen-Reis-One-Pot",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "haehnchen",
      "paprika",
      "zwiebeln",
      "bruehe",
      "erbsen",
      "paprikapulver"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "haehnchen": [
        600,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Hähnchen trocken tupfen und getrennt vom Gemüse würfeln.",
      "Hähnchen rundherum anbraten und vollständig bräunen, dann kurz herausnehmen.",
      "Zwiebel und Paprika 5 Minuten braten, Reis und Paprikapulver einrühren.",
      "Brühe und Hähnchen zugeben und zugedeckt 18 Minuten sanft garen.",
      "Erbsen in den letzten 5 Minuten zufügen, vollständigen Gargrad prüfen und 5 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      5,
      18,
      5
    ],
    "tip": "Während der Reis gart nur selten rühren, damit die Körner nicht breiig werden."
  },
  {
    "id": "ko-0180",
    "name": "Baked Oats mit Banane",
    "emoji": "🍌",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "haferflocken",
      "banane",
      "milch",
      "eier",
      "backpulver",
      "zimt",
      "mandeln"
    ],
    "amounts": {
      "haferflocken": [
        220,
        "g"
      ],
      "banane": [
        3,
        "Stück"
      ],
      "milch": [
        350,
        "ml"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "mandeln": [
        50,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 180 °C vorheizen und eine Form leicht fetten.",
      "Zwei Bananen fein zerdrücken, dritte in Scheiben schneiden.",
      "Bananenmus mit Eiern und Milch verrühren.",
      "Haferflocken, Backpulver, Zimt und Mandeln einrühren und Bananenscheiben auflegen.",
      "22 bis 25 Minuten backen, bis die Mitte gestockt ist, und kurz abkühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      25
    ],
    "tip": "Für eine saftige Mitte die Baked Oats nicht länger als nötig backen."
  },
  {
    "id": "ko-0181",
    "name": "Thunfisch-Reis-Bowl",
    "emoji": "🥗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "thunfisch",
      "gurke",
      "mais",
      "joghurt",
      "zitrone",
      "tomaten"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "thunfisch": [
        300,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "mais": [
        200,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "tomaten": [
        250,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Reis garen und 10 Minuten ausdampfen lassen.",
      "Thunfisch und Mais abtropfen lassen.",
      "Gurke und Tomaten in mundgerechte Stücke schneiden.",
      "Joghurt mit Zitronensaft, Salz und Pfeffer verrühren.",
      "Reis auf Schalen verteilen und mit Gemüse, Thunfisch, Mais und Dressing anrichten."
    ],
    "stepTimers": [
      10,
      null,
      null,
      null,
      null
    ],
    "tip": "Thunfisch erst beim Anrichten zugeben, damit er in saftigen Stücken bleibt."
  },
  {
    "id": "ko-0182",
    "name": "Ofenkartoffeln mit Kräuterquark",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "quark",
      "joghurt",
      "petersilie",
      "zitrone",
      "olivenoel"
    ],
    "amounts": {
      "kartoffeln": [
        1000,
        "g"
      ],
      "quark": [
        500,
        "g"
      ],
      "joghurt": [
        150,
        "g"
      ],
      "petersilie": [
        25,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 210 °C vorheizen und ein Blech vorbereiten.",
      "Kartoffeln in gleichmäßige Spalten schneiden und gründlich trocken tupfen.",
      "Mit Öl, Salz und Pfeffer mischen und 35 bis 40 Minuten rösten, einmal wenden.",
      "Quark, Joghurt, gehackte Petersilie und Zitronensaft glatt rühren.",
      "Gargrad und Bräunung der Kartoffeln prüfen und mit Kräuterquark servieren."
    ],
    "stepTimers": [
      null,
      null,
      40,
      null,
      null
    ],
    "tip": "Kartoffeln locker auf dem Blech verteilen, damit sie rösten statt zu dämpfen."
  },
  {
    "id": "ko-0183",
    "name": "Brokkoli-Käse-Nudeln",
    "emoji": "🥦",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "brokkoli",
      "sahne",
      "reibekaese",
      "knoblauch",
      "zitrone"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "reibekaese": [
        180,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 32,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Nudeln bissfest kochen und 200 ml Kochwasser auffangen.",
      "Brokkoli in kleinen Röschen in den letzten 5 Minuten mit den Nudeln garen.",
      "Knoblauch sanft anschwitzen, Sahne und zunächst 80 ml Kochwasser zugeben.",
      "Käse bei kleiner Hitze einrühren, bis die Sauce glatt ist.",
      "Nudeln und Brokkoli unterheben, mit Zitronensaft abschmecken und sofort servieren."
    ],
    "stepTimers": [
      null,
      5,
      null,
      null,
      null
    ],
    "tip": "Käse nicht in sprudelnde Sauce geben, damit er glatt schmilzt."
  },
  {
    "id": "ko-0184",
    "name": "Bohnen-Mais-Chili",
    "emoji": "🌶️",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "bohnen",
      "mais",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "chili",
      "kreuzkuemmel",
      "paprikapulver"
    ],
    "amounts": {
      "bohnen": [
        480,
        "g"
      ],
      "mais": [
        250,
        "g"
      ],
      "dosentomaten": [
        700,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "kreuzkuemmel": [
        1,
        "TL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen und Mais abspülen.",
      "Paprika und Zwiebel würfeln.",
      "Zwiebel und Paprika 6 Minuten anbraten.",
      "Chili, Kreuzkümmel und Paprikapulver kurz mitrösten.",
      "Tomaten und Bohnen zugeben und 20 Minuten offen köcheln.",
      "Mais einrühren, 5 Minuten erhitzen und das Chili kräftig abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      20,
      5
    ],
    "tip": "Das Chili nach dem Kochen 5 Minuten ruhen lassen; dadurch verbinden sich die Aromen besser."
  },
  {
    "id": "ko-0185",
    "name": "Spinat-Frischkäse-Pasta",
    "emoji": "🍝",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "spinat",
      "frischkaese",
      "knoblauch",
      "parmesan",
      "zitrone"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "spinat": [
        500,
        "g"
      ],
      "frischkaese": [
        220,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 28,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Nudeln bissfest kochen und 180 ml Kochwasser auffangen.",
      "Knoblauch fein hacken und sanft anschwitzen.",
      "Spinat portionsweise zugeben und vollständig zusammenfallen lassen.",
      "Frischkäse und 100 ml Kochwasser einrühren, Nudeln unterheben und cremig schwenken.",
      "Mit Zitrone, Salz und Pfeffer abschmecken und mit Parmesan servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Frischkäse nur sanft erhitzen, damit die Sauce cremig bleibt."
  },
  {
    "id": "ko-0186",
    "name": "Eier-Reis-Pfanne",
    "emoji": "🍳",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "eier",
      "karotten",
      "zwiebeln",
      "erbsen",
      "sojasauce",
      "sesam"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "erbsen": [
        150,
        "g"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis garen, rasch ausdampfen lassen oder gut gekühlten Reis vom Vortag verwenden.",
      "Zwiebel und Karotten klein schneiden und 5 Minuten kräftig anbraten.",
      "Erbsen zugeben, Gemüse an den Pfannenrand schieben und Eier in der Mitte vollständig stocken lassen.",
      "Reis einrühren und bei hoher Hitze vollständig durcherhitzen.",
      "Sojasauce und Sesam unterheben und sofort servieren."
    ],
    "stepTimers": [
      null,
      5,
      null,
      null,
      null
    ],
    "tip": "Vorgekochten Reis immer gekühlt lagern und beim Braten vollständig durcherhitzen."
  },
  {
    "id": "ko-0187",
    "name": "Honig-Senf-Hähnchen",
    "emoji": "🍯",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "haehnchen",
      "senf",
      "honig",
      "sahne",
      "kartoffeln",
      "bruehe",
      "olivenoel"
    ],
    "amounts": {
      "haehnchen": [
        650,
        "g"
      ],
      "senf": [
        3,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ],
      "sahne": [
        180,
        "ml"
      ],
      "kartoffeln": [
        800,
        "g"
      ],
      "bruehe": [
        180,
        "ml"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Kartoffeln würfeln und in Salzwasser 18 bis 20 Minuten weich garen.",
      "Hähnchen trocken tupfen, portionieren und im Öl rundherum anbraten.",
      "Brühe angießen und Hähnchen 10 Minuten vollständig durchgaren.",
      "Senf, Honig und Sahne einrühren und 5 Minuten sanft einkochen.",
      "Gargrad prüfen, Sauce abschmecken und mit den Kartoffeln servieren."
    ],
    "stepTimers": [
      20,
      null,
      10,
      5,
      null
    ],
    "tip": "Honig kann bei hoher Hitze anbrennen; die Sauce deshalb nur sanft einkochen."
  },
  {
    "id": "ko-0188",
    "name": "Tomaten-Feta-Nudeln",
    "emoji": "🍅",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "tomaten",
      "feta",
      "knoblauch",
      "olivenoel",
      "basilikum"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "tomaten": [
        600,
        "g"
      ],
      "feta": [
        250,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "basilikum": [
        15,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 42,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 200 °C vorheizen.",
      "Tomaten in eine große Form geben.",
      "Feta mittig einsetzen, Knoblauch und Öl verteilen und 20 Minuten backen.",
      "Währenddessen Nudeln bissfest kochen und 150 ml Kochwasser auffangen.",
      "Tomaten und Feta in der Form zerdrücken und mit etwas Kochwasser cremig rühren.",
      "Nudeln unterheben, abschmecken und mit Basilikum servieren."
    ],
    "stepTimers": [
      null,
      null,
      20,
      null,
      null,
      null
    ],
    "tip": "Kochwasser nur schrittweise zugeben, bis die Sauce die Nudeln cremig umhüllt."
  },
  {
    "id": "ko-0189",
    "name": "Gemüse-Couscous-Pfanne",
    "emoji": "🌾",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "couscous",
      "paprika",
      "karotten",
      "kichererbsen",
      "bruehe",
      "zucchini",
      "olivenoel"
    ],
    "amounts": {
      "couscous": [
        300,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "bruehe": [
        350,
        "ml"
      ],
      "zucchini": [
        1,
        "Stück"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Couscous mit kochender Brühe übergießen und 8 Minuten zugedeckt quellen lassen.",
      "Kichererbsen abspülen und Gemüse klein schneiden.",
      "Karotten und Paprika im Öl 6 Minuten braten.",
      "Zucchini und Kichererbsen zufügen und weitere 5 Minuten garen.",
      "Couscous auflockern, unterheben und alles kräftig abschmecken."
    ],
    "stepTimers": [
      8,
      null,
      6,
      5,
      null
    ],
    "tip": "Couscous erst am Ende unterheben, damit er locker bleibt und nicht am Pfannenboden klebt."
  },
  {
    "id": "ko-0190",
    "name": "Kartoffel-Ei-Pfanne",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "eier",
      "zwiebeln",
      "paprika",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "kartoffeln": [
        800,
        "g"
      ],
      "eier": [
        6,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Kartoffeln in kleine Würfel schneiden und 8 Minuten vorkochen, dann gut abtropfen lassen.",
      "Zwiebel und Paprika schneiden und im Öl 5 Minuten braten.",
      "Kartoffeln zugeben und 8 Minuten goldbraun braten.",
      "Eier verquirlen, würzen und über die Pfanne gießen.",
      "Zugedeckt vollständig stocken lassen.",
      "Mit Petersilie bestreuen und direkt servieren."
    ],
    "stepTimers": [
      8,
      5,
      8,
      null,
      null,
      null
    ],
    "tip": "Vorgekochte Kartoffeln gut ausdampfen lassen, damit sie in der Pfanne bräunen."
  },
  {
    "id": "ko-0191",
    "name": "Quark-Pancakes",
    "emoji": "🥞",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "quark",
      "eier",
      "mehl",
      "milch",
      "backpulver",
      "zucker",
      "butter"
    ],
    "amounts": {
      "quark": [
        300,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "mehl": [
        140,
        "g"
      ],
      "milch": [
        120,
        "ml"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zucker": [
        30,
        "g"
      ],
      "butter": [
        25,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 28,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Quark, Eier, Milch und Zucker glatt rühren.",
      "Mehl und Backpulver mischen und nur kurz unterheben.",
      "Teig 5 Minuten quellen lassen.",
      "Butter portionsweise in einer beschichteten Pfanne erhitzen und kleine Pancakes einsetzen.",
      "Bei mittlerer Hitze je Seite 2 bis 3 Minuten vollständig ausbacken."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      3
    ],
    "tip": "Kleine Pancakes lassen sich leichter wenden und garen bis zur Mitte gleichmäßig."
  },
  {
    "id": "ko-0192",
    "name": "Apfel-Hafer-Crumble",
    "emoji": "🍎",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "apfel",
      "haferflocken",
      "mehl",
      "butter",
      "zucker",
      "zimt"
    ],
    "amounts": {
      "apfel": [
        5,
        "Stück"
      ],
      "haferflocken": [
        180,
        "g"
      ],
      "mehl": [
        80,
        "g"
      ],
      "butter": [
        110,
        "g"
      ],
      "zucker": [
        80,
        "g"
      ],
      "zimt": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen und eine Form leicht fetten.",
      "Äpfel schälen, würfeln und mit Zimt sowie 20 g Zucker mischen.",
      "Haferflocken, Mehl, restlichen Zucker und kalte Butter zu Streuseln verkneten.",
      "Äpfel in die Form geben und Streusel locker darüber verteilen.",
      "25 bis 30 Minuten goldbraun backen und vor dem Servieren 10 Minuten abkühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      30
    ],
    "tip": "Kalte Butter und kurzes Kneten ergeben besonders knusprige Streusel."
  },
  {
    "id": "ko-0193",
    "name": "Teriyaki-Lachs-Bowl",
    "emoji": "🍣",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lachs",
      "reis",
      "brokkoli",
      "sojasauce",
      "honig",
      "ingwer",
      "sesam"
    ],
    "amounts": {
      "lachs": [
        650,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "fisch",
      "sesam"
    ],
    "steps": [
      "Reis garen und Brokkoli 6 Minuten bissfest dämpfen.",
      "Lachs trocken tupfen, auf Gräten prüfen und portionieren.",
      "Sojasauce, Honig und geriebenen Ingwer verrühren.",
      "Lachs anbraten, Sauce angießen und 4 Minuten glasieren.",
      "Vollständigen Gargrad prüfen.",
      "Reis, Brokkoli und Lachs auf Schalen verteilen und mit Sesam servieren."
    ],
    "stepTimers": [
      6,
      null,
      null,
      4,
      null,
      null
    ],
    "tip": "Nach Zugabe der Teriyaki-Sauce die Hitze reduzieren, damit der Honig nicht verbrennt."
  },
  {
    "id": "ko-0194",
    "name": "Sesam-Tofu-Bowl",
    "emoji": "🥢",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "reis",
      "brokkoli",
      "karotten",
      "sojasauce",
      "sesam",
      "ingwer"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "brokkoli": [
        450,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis garen; Tofu pressen und würfeln, Gemüse vorbereiten.",
      "Tofu in einer großen Pfanne rundherum knusprig braten und herausnehmen.",
      "Karotten und Brokkoli 6 bis 8 Minuten bissfest braten.",
      "Tofu, Sojasauce und Ingwer zugeben und 3 Minuten glasieren.",
      "Mit Reis anrichten und mit Sesam bestreuen."
    ],
    "stepTimers": [
      null,
      null,
      8,
      3,
      null
    ],
    "tip": "Tofu vor dem Braten gründlich auspressen, damit seine Oberfläche knusprig wird."
  },
  {
    "id": "ko-0195",
    "name": "Marokkanischer Linseneintopf",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "dosentomaten",
      "karotten",
      "zwiebeln",
      "kreuzkuemmel",
      "bruehe",
      "kichererbsen",
      "zitrone"
    ],
    "amounts": {
      "linsen": [
        280,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "karotten": [
        300,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "bruehe": [
        900,
        "ml"
      ],
      "kichererbsen": [
        240,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen und Kichererbsen abspülen.",
      "Zwiebel und Karotten klein schneiden.",
      "Zwiebel und Karotten 6 Minuten anbraten, Kreuzkümmel kurz mitrösten.",
      "Linsen, Tomaten und Brühe zugeben und 25 Minuten sanft köcheln.",
      "Kichererbsen einrühren und weitere 8 Minuten vollständig erhitzen.",
      "Gargrad prüfen und mit Zitronensaft, Salz und Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      25,
      8,
      null
    ],
    "tip": "Zitronensaft erst nach dem Garen zugeben, damit die Linsen zuverlässig weich werden."
  },
  {
    "id": "ko-0196",
    "name": "Zitronen-Hähnchen aus dem Ofen",
    "emoji": "🍋",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "kartoffeln",
      "zitrone",
      "knoblauch",
      "rosmarin",
      "olivenoel"
    ],
    "amounts": {
      "haehnchen": [
        800,
        "g"
      ],
      "kartoffeln": [
        900,
        "g"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "rosmarin": [
        10,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Backofen auf 200 °C vorheizen und Kartoffeln in gleichmäßige Spalten schneiden.",
      "Kartoffeln mit Öl, Knoblauch, Rosmarin, Salz und Pfeffer mischen und 15 Minuten vorbacken.",
      "Hähnchen trocken tupfen, würzen und zwischen die Kartoffeln legen.",
      "Zitronensaft darübergeben und weitere 28 bis 32 Minuten backen.",
      "Vollständigen Gargrad des Hähnchens und weiche Kartoffeln prüfen, dann 5 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      15,
      null,
      32,
      5
    ],
    "tip": "Ähnlich große Hähnchenstücke und Kartoffelspalten garen gleichmäßiger."
  },
  {
    "id": "ko-0197",
    "name": "Gefüllte Paprika mit Couscous",
    "emoji": "🫑",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "paprika",
      "couscous",
      "feta",
      "dosentomaten",
      "zwiebeln",
      "bruehe",
      "petersilie"
    ],
    "amounts": {
      "paprika": [
        4,
        "Stück"
      ],
      "couscous": [
        250,
        "g"
      ],
      "feta": [
        200,
        "g"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        300,
        "ml"
      ],
      "petersilie": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen.",
      "Paprika längs halbieren und entkernen.",
      "Couscous mit kochender Brühe übergießen und 8 Minuten quellen lassen.",
      "Zwiebel anschwitzen und mit Couscous, Feta und Petersilie mischen.",
      "Tomaten in eine Form geben, Paprika daraufsetzen und mit Couscous füllen.",
      "30 bis 35 Minuten backen, bis die Paprika weich und die Füllung goldbraun ist."
    ],
    "stepTimers": [
      null,
      null,
      8,
      null,
      null,
      35
    ],
    "tip": "Paprikahälften eng in die Form setzen, damit sie beim Backen nicht umkippen."
  },
  {
    "id": "ko-0198",
    "name": "Schoko-Bananen-Baked-Oats",
    "emoji": "🍫",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "haferflocken",
      "banane",
      "milch",
      "kakao",
      "backpulver",
      "schokolade",
      "eier"
    ],
    "amounts": {
      "haferflocken": [
        220,
        "g"
      ],
      "banane": [
        3,
        "Stück"
      ],
      "milch": [
        320,
        "ml"
      ],
      "kakao": [
        30,
        "g"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "schokolade": [
        100,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 180 °C vorheizen und eine Form leicht fetten.",
      "Bananen zerdrücken und mit Milch sowie Eiern verrühren.",
      "Haferflocken, Kakao und Backpulver einrühren.",
      "Zwei Drittel der Schokolade unterheben, Masse einfüllen und übrige Schokolade aufstreuen.",
      "22 bis 25 Minuten backen, bis die Mitte gestockt ist, und kurz abkühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      25
    ],
    "tip": "Baked Oats nicht überbacken; eine gerade gestockte Mitte bleibt saftiger."
  },
  {
    "id": "ko-0199",
    "name": "Gnocchi-Spinat-Auflauf",
    "emoji": "🥘",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "gnocchi",
      "spinat",
      "frischkaese",
      "reibekaese",
      "knoblauch",
      "bruehe"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "spinat": [
        500,
        "g"
      ],
      "frischkaese": [
        220,
        "g"
      ],
      "reibekaese": [
        180,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        150,
        "ml"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen und eine Auflaufform bereitstellen.",
      "Knoblauch anschwitzen und Spinat portionsweise zusammenfallen lassen.",
      "Frischkäse und Brühe einrühren und die Sauce abschmecken.",
      "Gnocchi mit Sauce in der Form mischen und Käse darüber verteilen.",
      "25 bis 30 Minuten backen, bis der Auflauf blubbert und goldbraun ist."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      30
    ],
    "tip": "Bei tiefgekühltem Spinat überschüssige Flüssigkeit vor der Sauce abgießen."
  },
  {
    "id": "ko-0200",
    "name": "Burrito-Auflauf",
    "emoji": "🌯",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "hackfleisch",
      "bohnen",
      "mais",
      "dosentomaten",
      "reibekaese",
      "paprika"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "hackfleisch": [
        500,
        "g"
      ],
      "bohnen": [
        400,
        "g"
      ],
      "mais": [
        200,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "reibekaese": [
        200,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C vorheizen.",
      "Paprika schneiden und Bohnen sowie Mais abspülen.",
      "Hackfleisch vollständig krümelig braten, Paprika 5 Minuten mitgaren.",
      "Bohnen, Mais und zwei Drittel der Tomaten einrühren und 8 Minuten einkochen.",
      "Tortillas und Füllung abwechselnd in eine Form schichten.",
      "Übrige Tomaten und Käse darübergeben und 25 bis 30 Minuten backen."
    ],
    "stepTimers": [
      null,
      null,
      5,
      8,
      null,
      30
    ],
    "tip": "Die Füllung vor dem Schichten etwas einkochen, damit der Auflauf schnittfest bleibt."
  },
  {
    "id": "ko-0201",
    "name": "Hähnchen-Caesar-Wraps",
    "emoji": "🌯",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "haehnchen",
      "salat",
      "parmesan",
      "joghurt",
      "zitrone"
    ],
    "amounts": {
      "tortilla": [
        4,
        "Stück"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "salat": [
        180,
        "g"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 13,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen trocken tupfen, in Streifen schneiden und mit Salz sowie Pfeffer würzen.",
      "Die Streifen in einer heißen Pfanne rundherum 7 bis 9 Minuten vollständig durchgaren.",
      "Joghurt mit Zitronensaft, der Hälfte des Parmesans, Salz und Pfeffer zu einem Dressing verrühren.",
      "Tortillas kurz erwärmen und mit Salat, Hähnchen, Dressing und restlichem Parmesan belegen.",
      "Die Seiten einschlagen, Wraps straff aufrollen und sofort servieren."
    ],
    "stepTimers": [
      null,
      9,
      null,
      null,
      null
    ],
    "tip": "Das Hähnchen vor dem Anschneiden kurz ruhen lassen, damit es saftig bleibt."
  },
  {
    "id": "ko-0202",
    "name": "Thunfisch-Zitronen-Pasta",
    "emoji": "🍋",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "thunfisch",
      "zitrone",
      "sahne",
      "knoblauch",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "thunfisch": [
        2,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 17,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Nudeln in reichlich Salzwasser bissfest kochen und 150 ml Kochwasser auffangen.",
      "Thunfisch abtropfen lassen, Knoblauch fein hacken und die Zitrone auspressen.",
      "Knoblauch kurz anschwitzen, Sahne und zunächst die Hälfte des Zitronensafts zugeben.",
      "Nudeln, Thunfisch und etwas Kochwasser unterheben und zwei Minuten sanft erhitzen.",
      "Mit restlichem Zitronensaft, Salz und Pfeffer abschmecken und mit Petersilie servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Den Thunfisch erst am Ende unterheben, damit er saftig bleibt und nicht zerfällt."
  },
  {
    "id": "ko-0203",
    "name": "Protein-Pancakes mit Banane",
    "emoji": "🥞",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "haferflocken",
      "quark",
      "eier",
      "banane",
      "backpulver",
      "zimt"
    ],
    "amounts": {
      "haferflocken": [
        160,
        "g"
      ],
      "quark": [
        250,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "banane": [
        2,
        "Stück"
      ],
      "backpulver": [
        1,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Eine Banane fein zerdrücken und mit Quark sowie Eiern glatt rühren.",
      "Haferflocken, Backpulver und Zimt einrühren und den Teig fünf Minuten quellen lassen.",
      "Eine beschichtete Pfanne auf mittlere Hitze bringen und kleine Teigportionen hineingeben.",
      "Pancakes wenden, sobald die Oberfläche Bläschen zeigt, und die zweite Seite goldbraun backen.",
      "Die zweite Banane in Scheiben schneiden und zu den warmen Pancakes servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Kleine Pancakes lassen sich leichter wenden und bleiben durch die niedrigere Hitze innen saftig."
  },
  {
    "id": "ko-0204",
    "name": "Schoko-Quark-Mousse",
    "emoji": "🍫",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "quark",
      "joghurt",
      "schokolade",
      "kakao",
      "honig"
    ],
    "amounts": {
      "quark": [
        500,
        "g"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "schokolade": [
        100,
        "g"
      ],
      "kakao": [
        2,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Schokolade über einem Wasserbad langsam schmelzen und anschließend leicht abkühlen lassen.",
      "Quark, Joghurt, Kakao und Honig in einer Schüssel cremig rühren.",
      "Zwei Löffel der Quarkmasse in die Schokolade rühren, um die Temperaturen anzugleichen.",
      "Die Schokolade zügig unter die übrige Creme heben, bis keine Streifen mehr sichtbar sind.",
      "Auf vier Gläser verteilen und bis zum Servieren kalt stellen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Schokolade nur lauwarm einarbeiten, sonst kann die Quarkcreme körnig werden."
  },
  {
    "id": "ko-0205",
    "name": "Kidneybohnen-Tomaten-Pfanne",
    "emoji": "🍅",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "bohnen",
      "dosentomaten",
      "paprika",
      "spinat",
      "zwiebeln",
      "knoblauch"
    ],
    "amounts": {
      "bohnen": [
        400,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "spinat": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 17,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen abspülen, Paprika würfeln und Zwiebel sowie Knoblauch fein schneiden.",
      "Zwiebel und Paprika in einer großen Pfanne fünf Minuten kräftig anbraten.",
      "Knoblauch, Bohnen und Dosentomaten zugeben und zehn Minuten offen köcheln lassen.",
      "Spinat portionsweise unterheben und zusammenfallen lassen.",
      "Mit Salz, Pfeffer und Paprikapulver abschmecken und heiß servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Ein Spritzer Zitronensaft am Ende macht die Tomatensauce deutlich frischer."
  },
  {
    "id": "ko-0206",
    "name": "Cremige Paprika-Gnocchi",
    "emoji": "🫑",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "gnocchi",
      "paprika",
      "frischkaese",
      "bruehe",
      "parmesan",
      "knoblauch"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "frischkaese": [
        200,
        "g"
      ],
      "bruehe": [
        250,
        "ml"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Paprika in schmale Streifen schneiden und Knoblauch fein hacken.",
      "Gnocchi in einer großen Pfanne mit wenig Öl rundherum goldbraun anbraten und herausnehmen.",
      "Paprika in derselben Pfanne sechs Minuten braten und den Knoblauch kurz mitrösten.",
      "Brühe und Frischkäse einrühren, Gnocchi zurückgeben und fünf Minuten sanft köcheln lassen.",
      "Parmesan unterheben, abschmecken und die Sauce kurz eindicken lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Gnocchi zuerst separat anbraten – so bleiben sie außen knusprig und werden nicht weich."
  },
  {
    "id": "ko-0207",
    "name": "Linsen-Dal mit Spinat",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "spinat",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "currypulver",
      "bruehe"
    ],
    "amounts": {
      "linsen": [
        280,
        "g"
      ],
      "spinat": [
        300,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "bruehe": [
        700,
        "ml"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen gründlich abspülen, Zwiebel würfeln und Knoblauch fein hacken.",
      "Zwiebel in einem Topf glasig braten, Knoblauch und Currypulver eine Minute mitrösten.",
      "Linsen, Tomaten und Brühe zugeben und bei kleiner Hitze 22 bis 25 Minuten köcheln lassen.",
      "Spinat unterheben und weitere drei Minuten garen, bis er zusammengefallen ist.",
      "Konsistenz mit etwas Wasser einstellen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      25,
      null,
      null
    ],
    "tip": "Das Dal nach dem Kochen fünf Minuten ruhen lassen; dabei wird es von selbst cremiger."
  },
  {
    "id": "ko-0208",
    "name": "Pilz-Stroganoff mit Nudeln",
    "emoji": "🍄",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "champignons",
      "sahne",
      "senf",
      "zwiebeln",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "champignons": [
        500,
        "g"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "senf": [
        2,
        "EL"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 23,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Nudeln bissfest kochen und etwas Kochwasser aufheben.",
      "Champignons in Scheiben und die Zwiebel in feine Würfel schneiden.",
      "Pilze portionsweise bei hoher Hitze kräftig anbraten, damit sie Farbe bekommen.",
      "Zwiebel zugeben, anschließend Sahne und Senf einrühren und fünf Minuten köcheln lassen.",
      "Nudeln unterheben, mit Kochwasser cremig einstellen und mit Petersilie servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Pilze nicht gleichzeitig in die Pfanne geben, sonst ziehen sie Wasser und bräunen kaum."
  },
  {
    "id": "ko-0209",
    "name": "Ofen-Feta mit Kichererbsen",
    "emoji": "🧀",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kichererbsen",
      "feta",
      "tomaten",
      "paprika",
      "olivenoel",
      "zitrone"
    ],
    "amounts": {
      "kichererbsen": [
        400,
        "g"
      ],
      "feta": [
        200,
        "g"
      ],
      "tomaten": [
        5,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen und Kichererbsen abspülen.",
      "Tomaten und Paprika schneiden und mit Kichererbsen sowie Öl in einer Form vermengen.",
      "Feta mittig auf das Gemüse setzen und alles mit Salz, Pfeffer und Paprikapulver würzen.",
      "Etwa 25 bis 30 Minuten backen, bis das Gemüse weich und der Feta gebräunt ist.",
      "Feta leicht zerdrücken, alles vermengen und mit Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      30,
      null
    ],
    "tip": "Kichererbsen vor dem Backen gut trocknen, damit sie am Rand leicht knusprig werden."
  },
  {
    "id": "ko-0210",
    "name": "Koreanische Rindfleisch-Bowl",
    "emoji": "🥢",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "rindfleisch",
      "karotten",
      "gurke",
      "sojasauce",
      "ingwer",
      "honig",
      "knoblauch",
      "sesam"
    ],
    "amounts": {
      "reis": [
        300,
        "g"
      ],
      "rindfleisch": [
        500,
        "g"
      ],
      "karotten": [
        3,
        "Stück"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "honig": [
        1,
        "EL"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis garen; währenddessen Rindfleisch in dünne Streifen, Karotten fein und Gurke in Scheiben schneiden.",
      "Sojasauce mit fein geriebenem Ingwer, Honig, gehacktem Knoblauch und zwei Esslöffeln Wasser verrühren.",
      "Rindfleisch portionsweise in einer sehr heißen Pfanne kurz und kräftig anbraten.",
      "Karotten zugeben, zwei Minuten mitbraten und anschließend die Sauce kurz einkochen lassen.",
      "Reis auf Schalen verteilen, Fleisch, Karotten und Gurke darauf anrichten und mit Sesam bestreuen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Das Fleisch quer zur Faser schneiden und nur kurz braten, damit es zart bleibt."
  },
  {
    "id": "ko-0211",
    "name": "Lachs in Honig-Senf-Sauce",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lachs",
      "kartoffeln",
      "senf",
      "honig",
      "sahne",
      "brokkoli"
    ],
    "amounts": {
      "lachs": [
        600,
        "g"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "senf": [
        3,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "brokkoli": [
        400,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 28,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose",
      "fisch",
      "senf"
    ],
    "steps": [
      "Kartoffeln in Stücke schneiden und in Salzwasser etwa 18 Minuten garen.",
      "Brokkoli in Röschen teilen und in den letzten sechs Minuten zu den Kartoffeln geben.",
      "Lachs trocken tupfen, würzen und in einer Pfanne zuerst auf der Hautseite anbraten.",
      "Lachs wenden, herausnehmen und Senf, Honig sowie Sahne in der Pfanne verrühren.",
      "Lachs in der Sauce bei kleiner Hitze fertig garen und mit Kartoffeln sowie Brokkoli servieren."
    ],
    "stepTimers": [
      18,
      null,
      null,
      null,
      null
    ],
    "tip": "Der Lachs bleibt saftig, wenn er in der Mitte gerade noch leicht glasig ist."
  },
  {
    "id": "ko-0212",
    "name": "Brokkoli-Cheddar-Suppe",
    "emoji": "🥦",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "brokkoli",
      "cheddar",
      "kartoffeln",
      "bruehe",
      "milch",
      "zwiebeln"
    ],
    "amounts": {
      "brokkoli": [
        600,
        "g"
      ],
      "cheddar": [
        180,
        "g"
      ],
      "kartoffeln": [
        350,
        "g"
      ],
      "bruehe": [
        800,
        "ml"
      ],
      "milch": [
        250,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Brokkoli in Röschen teilen, den geschälten Strunk und die Kartoffeln klein würfeln.",
      "Zwiebel in einem Topf glasig braten, Kartoffeln und Brokkolistrunk kurz mitbraten.",
      "Brühe angießen und alles 15 Minuten weich kochen.",
      "Dann die Brokkoliröschen fünf Minuten mitgaren.",
      "Etwa die Hälfte der Suppe pürieren und zusammen mit der Milch wieder erhitzen.",
      "Cheddar bei niedriger Hitze portionsweise einrühren und die Suppe abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      15,
      null,
      null,
      null
    ],
    "tip": "Nach Zugabe des Käses nicht mehr stark kochen, damit die Suppe glatt bleibt."
  },
  {
    "id": "ko-0213",
    "name": "Kartoffel-Erbsen-Curry",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "erbsen",
      "dosentomaten",
      "spinat",
      "currypulver",
      "bruehe",
      "zwiebeln"
    ],
    "amounts": {
      "kartoffeln": [
        800,
        "g"
      ],
      "erbsen": [
        300,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "spinat": [
        200,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 33,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kartoffeln schälen und würfeln, Zwiebel fein schneiden.",
      "Zwiebel in einem Topf anbraten und Currypulver kurz mitrösten.",
      "Kartoffeln, Tomaten und Brühe zugeben und zugedeckt etwa 22 Minuten köcheln lassen.",
      "Erbsen und Spinat einrühren und weitere fünf Minuten garen.",
      "Deckel abnehmen, Curry leicht einkochen lassen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      22,
      null,
      null
    ],
    "tip": "Einige Kartoffelstücke am Topfrand zerdrücken – das bindet die Sauce ganz ohne Sahne oder Kokosmilch."
  },
  {
    "id": "ko-0214",
    "name": "Tex-Mex-Süßkartoffeln",
    "emoji": "🍠",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "suesskartoffel",
      "bohnen",
      "mais",
      "avocado",
      "reibekaese",
      "joghurt"
    ],
    "amounts": {
      "suesskartoffel": [
        1000,
        "g"
      ],
      "bohnen": [
        400,
        "g"
      ],
      "mais": [
        285,
        "g"
      ],
      "avocado": [
        1,
        "Stück"
      ],
      "reibekaese": [
        120,
        "g"
      ],
      "joghurt": [
        150,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen und Süßkartoffeln mehrmals einstechen.",
      "Süßkartoffeln auf einem Blech je nach Größe 35 bis 45 Minuten weich backen.",
      "Bohnen und Mais abspülen, würzen und in einer Pfanne fünf Minuten erhitzen.",
      "Süßkartoffeln längs öffnen, das Innere auflockern und mit der Bohnenmischung sowie Käse füllen.",
      "Kurz überbacken und anschließend mit Avocado und Joghurt servieren."
    ],
    "stepTimers": [
      null,
      45,
      null,
      null,
      null
    ],
    "tip": "Ähnlich große Süßkartoffeln wählen, damit alle gleichzeitig gar werden."
  },
  {
    "id": "ko-0215",
    "name": "Hähnchen-Parmesan-Pasta",
    "emoji": "🍝",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "haehnchen",
      "sahne",
      "parmesan",
      "spinat",
      "knoblauch"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "spinat": [
        250,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 23,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Nudeln bissfest kochen und 200 ml Kochwasser auffangen.",
      "Hähnchen in Streifen schneiden, würzen und in einer großen Pfanne vollständig durchbraten.",
      "Knoblauch kurz mitbraten, Sahne und etwas Kochwasser angießen.",
      "Spinat unterheben, zusammenfallen lassen und anschließend Parmesan einrühren.",
      "Nudeln in der Sauce schwenken, Konsistenz mit Kochwasser einstellen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Parmesan bei niedriger Hitze einrühren, damit die Sauce cremig bleibt und nicht verklumpt."
  },
  {
    "id": "ko-0216",
    "name": "Auberginen-Linsen-Lasagne",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lasagneplatten",
      "aubergine",
      "linsen",
      "dosentomaten",
      "mozzarella",
      "zwiebeln"
    ],
    "amounts": {
      "lasagneplatten": [
        250,
        "g"
      ],
      "aubergine": [
        2,
        "Stück"
      ],
      "linsen": [
        220,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "mozzarella": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Linsen vorgaren, Auberginen längs in dünne Scheiben schneiden und Zwiebel würfeln.",
      "Auberginenscheiben portionsweise in einer Pfanne bräunen und leicht salzen.",
      "Zwiebel anbraten, Tomaten und Linsen zugeben und die Sauce 15 Minuten einkochen lassen.",
      "Sauce, Lasagneplatten und Auberginen abwechselnd in eine Form schichten.",
      "Mit Mozzarella abschließen.",
      "Bei 190 °C Ober-/Unterhitze etwa 35 bis 40 Minuten backen und vor dem Anschneiden zehn Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      15,
      null,
      null,
      40
    ],
    "tip": "Die Tomatensauce kräftig einkochen lassen, damit die Lasagne später nicht wässrig wird."
  },
  {
    "id": "ko-0217",
    "name": "Spinat-Ricotta-Lasagneröllchen",
    "emoji": "🥬",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lasagneplatten",
      "spinat",
      "ricotta",
      "dosentomaten",
      "parmesan",
      "knoblauch"
    ],
    "amounts": {
      "lasagneplatten": [
        250,
        "g"
      ],
      "spinat": [
        500,
        "g"
      ],
      "ricotta": [
        500,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "parmesan": [
        80,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Lasagneplatten portionsweise vorkochen, bis sie biegsam sind, und auf einem Tuch auslegen.",
      "Spinat mit Knoblauch zusammenfallen lassen, gut ausdrücken und mit Ricotta sowie der Hälfte des Parmesans mischen.",
      "Füllung auf den Platten verteilen, diese aufrollen und mit der Naht nach unten in eine Form setzen.",
      "Dosentomaten würzen, um die Röllchen verteilen und mit restlichem Parmesan bestreuen.",
      "Bei 190 °C Ober-/Unterhitze etwa 30 Minuten backen und vor dem Servieren kurz ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      30
    ],
    "tip": "Den Spinat wirklich gut ausdrücken, sonst wird die Füllung zu flüssig."
  },
  {
    "id": "ko-0218",
    "name": "Chicken Pot Pie",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "butter",
      "haehnchen",
      "karotten",
      "erbsen",
      "bruehe",
      "milch"
    ],
    "amounts": {
      "mehl": [
        320,
        "g"
      ],
      "butter": [
        180,
        "g"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "karotten": [
        300,
        "g"
      ],
      "erbsen": [
        250,
        "g"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "milch": [
        150,
        "ml"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Anspruchsvoll",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Aus 250 g Mehl, 150 g kalter Butter, einer Prise Salz und etwas kaltem Wasser rasch einen Teig kneten und kalt stellen.",
      "Hähnchen würfeln und vollständig anbraten.",
      "Karotten zugeben und fünf Minuten mitgaren.",
      "Restliche Butter und Mehl einrühren, dann Brühe und Milch nach und nach zugießen und cremig kochen.",
      "Erbsen und Hähnchen unterheben, Füllung in eine Form geben und mit dem ausgerollten Teig abdecken.",
      "Teig einschneiden und bei 200 °C Ober-/Unterhitze 30 bis 35 Minuten goldbraun backen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      35
    ],
    "tip": "Teig und Butter möglichst kalt verarbeiten – dadurch wird die Decke mürbe statt zäh."
  },
  {
    "id": "ko-0219",
    "name": "Beeren-Cheesecake im Glas",
    "emoji": "🍓",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "quark",
      "joghurt",
      "beeren",
      "butterkekse",
      "honig",
      "vanille"
    ],
    "amounts": {
      "quark": [
        500,
        "g"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "beeren": [
        400,
        "g"
      ],
      "butterkekse": [
        150,
        "g"
      ],
      "honig": [
        3,
        "EL"
      ],
      "vanille": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 120,
    "restMinutes": 0,
    "minutes": 140,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Butterkekse grob zerbröseln und auf vier große Gläser verteilen.",
      "Quark, Joghurt, zwei Esslöffel Honig und Vanille cremig rühren.",
      "Die Hälfte der Beeren leicht zerdrücken und mit dem restlichen Honig vermengen.",
      "Quarkcreme und Beeren abwechselnd auf die Keksböden schichten.",
      "Mit den übrigen Beeren garnieren und mindestens zwei Stunden kalt stellen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Keksbrösel erst kurz vor dem Kühlen einschichten, wenn sie etwas knusprig bleiben sollen."
  },
  {
    "id": "ko-0220",
    "name": "Birnen-Schoko-Crumble",
    "emoji": "🍐",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "birne",
      "schokolade",
      "haferflocken",
      "butter",
      "zimt",
      "zucker"
    ],
    "amounts": {
      "birne": [
        4,
        "Stück"
      ],
      "schokolade": [
        100,
        "g"
      ],
      "haferflocken": [
        180,
        "g"
      ],
      "butter": [
        100,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "zucker": [
        60,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform einfetten.",
      "Birnen entkernen, würfeln und mit Zimt in der Form verteilen.",
      "Schokolade grob hacken und über die Birnen streuen.",
      "Haferflocken, Butter und Zucker mit den Fingern zu groben Streuseln verkneten und darübergeben.",
      "Etwa 25 bis 30 Minuten backen, bis die Streusel goldbraun sind, und kurz abkühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      30
    ],
    "tip": "Reife, aber noch feste Birnen behalten beim Backen ihre Struktur und werden nicht matschig."
  },
  {
    "id": "ko-0221",
    "name": "Schoko-Bananen-Creme",
    "emoji": "🍌",
    "time": "schnell",
    "diet": "vegan",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "banane",
      "kakao",
      "kokosmilch",
      "vanille"
    ],
    "amounts": {
      "banane": [
        4,
        "Stück"
      ],
      "kakao": [
        3,
        "EL"
      ],
      "kokosmilch": [
        120,
        "ml"
      ],
      "vanille": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 15,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Sehr reife Bananen schälen, in Stücke schneiden und zehn Minuten ins Gefrierfach legen.",
      "Kokosmilch vor dem Abmessen gut verrühren.",
      "Bananen, Kakao, Kokosmilch und Vanille in einen hohen Mixbecher geben.",
      "Alles ein bis zwei Minuten sehr fein und cremig pürieren.",
      "Auf vier Schalen verteilen und direkt servieren oder kurz kalt stellen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Je reifer die Bananen sind, desto süßer wird die Creme ganz ohne zusätzlichen Zucker."
  },
  {
    "id": "ko-0222",
    "name": "Kokos-Milchreis",
    "emoji": "🥥",
    "time": "normal",
    "diet": "vegan",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "reis",
      "kokosmilch",
      "zucker",
      "zimt"
    ],
    "amounts": {
      "reis": [
        250,
        "g"
      ],
      "kokosmilch": [
        800,
        "ml"
      ],
      "zucker": [
        50,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Reis in einem Sieb kurz abspülen und abtropfen lassen.",
      "Kokosmilch mit 300 ml Wasser in einem großen Topf langsam erhitzen.",
      "Reis einrühren und bei kleiner Hitze 25 bis 30 Minuten sanft garen.",
      "Regelmäßig vom Topfboden lösen.",
      "Zucker und die Hälfte des Zimts unterrühren und die Konsistenz mit etwas Wasser einstellen.",
      "Fünf Minuten zugedeckt ruhen lassen, auf Schalen verteilen und mit restlichem Zimt servieren."
    ],
    "stepTimers": [
      null,
      null,
      30,
      null,
      null,
      null
    ],
    "tip": "Kleine Hitze und häufiges Rühren verhindern, dass die Kokosmilch am Topfboden ansetzt."
  },
  {
    "id": "ko-0223",
    "name": "Gefüllte Auberginen mit Linsen",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "aubergine",
      "linsen",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "olivenoel"
    ],
    "amounts": {
      "aubergine": [
        2,
        "Stück"
      ],
      "linsen": [
        220,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Auberginen längs halbieren und das Fruchtfleisch kreuzweise einschneiden.",
      "Schnittflächen mit einem Esslöffel Öl bestreichen und die Hälften 25 Minuten mit der Schnittseite nach oben vorbacken.",
      "Linsen nach Packungsangabe knapp gar kochen.",
      "Zwiebel und Knoblauch fein schneiden.",
      "Zwiebel und Knoblauch im restlichen Öl anbraten, Tomaten und Linsen zugeben und 12 Minuten dicklich einkochen.",
      "Auberginen leicht aushöhlen, Fruchtfleisch unter die Linsen mischen, Hälften füllen und weitere 15 Minuten backen."
    ],
    "stepTimers": [
      null,
      null,
      25,
      null,
      null,
      12,
      15
    ],
    "tip": "Die Linsenfüllung muss vor dem Füllen sämig sein, damit die Auberginen später nicht wässrig werden."
  },
  {
    "id": "ko-0224",
    "name": "Veganer Apfel-Hafer-Crumble",
    "emoji": "🍎",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "apfel",
      "haferflocken",
      "zucker",
      "zimt",
      "olivenoel"
    ],
    "amounts": {
      "apfel": [
        6,
        "Stück"
      ],
      "haferflocken": [
        220,
        "g"
      ],
      "zucker": [
        80,
        "g"
      ],
      "zimt": [
        2,
        "TL"
      ],
      "olivenoel": [
        5,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine mittelgroße Form dünn einölen.",
      "Äpfel entkernen, würfeln und mit der Hälfte von Zucker und Zimt in der Form vermengen.",
      "Haferflocken mit restlichem Zucker, Zimt, Olivenöl und zwei Esslöffeln Wasser zu groben Streuseln mischen.",
      "Streusel gleichmäßig über den Äpfeln verteilen, ohne sie festzudrücken.",
      "35 bis 40 Minuten backen, bis die Äpfel weich und die Streusel goldbraun sind.",
      "Vor dem Servieren zehn Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      40,
      null
    ],
    "tip": "Ein mildes Olivenöl verwenden; säuerliche Äpfel sorgen für einen guten Ausgleich zur süßen Kruste."
  },
  {
    "id": "ko-0225",
    "name": "Zitronen-Knoblauch-Pasta",
    "emoji": "🍋",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "knoblauch",
      "zitrone",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Nudeln in reichlich Salzwasser bissfest kochen und etwa 150 ml Kochwasser auffangen.",
      "Knoblauch fein hacken, Zitronenschale abreiben und die Zitrone auspressen.",
      "Olivenöl in einer großen Pfanne sanft erhitzen und den Knoblauch 1 bis 2 Minuten glasig ziehen lassen, ohne ihn zu bräunen.",
      "Nudeln, Zitronensaft, Zitronenabrieb und zunächst 80 ml Kochwasser zugeben und kräftig durchschwenken.",
      "Mit Salz und Pfeffer abschmecken, gehackte Petersilie unterheben und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      2,
      null,
      null
    ],
    "tip": "Die Pfanne nur mäßig erhitzen; gebräunter Knoblauch schmeckt bitter."
  },
  {
    "id": "ko-0226",
    "name": "Cremige Tomaten-Linsen-Suppe",
    "emoji": "🍅",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "linsen",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "olivenoel",
      "paprikapulver"
    ],
    "amounts": {
      "linsen": [
        220,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        800,
        "ml"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen in einem Sieb gründlich abspülen.",
      "Zwiebel und Knoblauch fein würfeln.",
      "Olivenöl im Topf erhitzen und Zwiebel 4 Minuten glasig dünsten, anschließend Knoblauch und Paprikapulver kurz mitrösten.",
      "Linsen, Dosentomaten und Brühe einrühren und alles aufkochen.",
      "Bei kleiner bis mittlerer Hitze 22 bis 25 Minuten köcheln lassen, bis die Linsen weich sind.",
      "Etwa ein Drittel der Suppe pürieren, wieder unterrühren und mit Salz, Pfeffer sowie etwas Säure abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      4,
      null,
      25,
      null
    ],
    "tip": "Wird die Suppe zu dick, schluckweise heißes Wasser ergänzen."
  },
  {
    "id": "ko-0227",
    "name": "Kichererbsen-Paprika-Pfanne",
    "emoji": "🫑",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kichererbsen",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "dosentomaten",
      "olivenoel",
      "paprikapulver"
    ],
    "amounts": {
      "kichererbsen": [
        480,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kichererbsen abspülen und gut abtropfen lassen.",
      "Paprika und Zwiebel in mundgerechte Stücke schneiden.",
      "Olivenöl in einer großen Pfanne erhitzen und die Zwiebel 3 Minuten anbraten.",
      "Paprika zugeben und 5 Minuten unter gelegentlichem Rühren braten.",
      "Knoblauch, Paprikapulver, Kichererbsen und Dosentomaten einrühren und 7 Minuten offen köcheln lassen.",
      "Mit Salz, Pfeffer und nach Wunsch etwas Chili abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      3,
      5,
      7,
      null
    ],
    "tip": "Die Kichererbsen vor dem Braten trocken tupfen, damit sie mehr Röstaromen entwickeln."
  },
  {
    "id": "ko-0228",
    "name": "Brokkoli-Käse-Taler",
    "emoji": "🥦",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "brokkoli",
      "kartoffeln",
      "eier",
      "mehl",
      "reibekaese",
      "joghurt",
      "zitrone",
      "olivenoel"
    ],
    "amounts": {
      "brokkoli": [
        600,
        "g"
      ],
      "kartoffeln": [
        500,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "mehl": [
        70,
        "g"
      ],
      "reibekaese": [
        120,
        "g"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Kartoffeln schälen, würfeln und 12 Minuten in Salzwasser garen.",
      "Brokkoli nach 7 Minuten zugeben.",
      "Gemüse sehr gut abgießen, ausdampfen lassen und mit einem Stampfer grob zerdrücken.",
      "Eier, Mehl und Käse einarbeiten, kräftig würzen und aus der Masse zwölf flache Taler formen.",
      "Öl in einer beschichteten Pfanne erhitzen und die Taler portionsweise je Seite 4 bis 5 Minuten goldbraun braten.",
      "Joghurt mit Zitronensaft, Salz und Pfeffer verrühren und zu den heißen Talern servieren."
    ],
    "stepTimers": [
      12,
      7,
      null,
      null,
      5,
      null
    ],
    "tip": "Die Gemüsemasse vor dem Formen vollständig ausdampfen lassen, damit die Taler gut zusammenhalten."
  },
  {
    "id": "ko-0229",
    "name": "Frühstücks-Couscous mit Beeren",
    "emoji": "🫐",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "couscous",
      "milch",
      "beeren",
      "mandeln",
      "honig",
      "zimt",
      "zitrone"
    ],
    "amounts": {
      "couscous": [
        240,
        "g"
      ],
      "milch": [
        500,
        "ml"
      ],
      "beeren": [
        300,
        "g"
      ],
      "mandeln": [
        50,
        "g"
      ],
      "honig": [
        2,
        "EL"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Mandeln in einer trockenen Pfanne goldbraun rösten und auf einem Teller abkühlen lassen.",
      "Milch mit Zimt und fein abgeriebener Zitronenschale aufkochen.",
      "Couscous einrühren, Topf vom Herd nehmen und zugedeckt 7 Minuten quellen lassen.",
      "Couscous mit einer Gabel auflockern und Honig sowie zwei Drittel der Beeren unterheben.",
      "Auf vier Schalen verteilen und mit übrigen Beeren und gerösteten Mandeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      7,
      null,
      null
    ],
    "tip": "Tiefgekühlte Beeren vorher auftauen und abtropfen lassen, damit der Couscous locker bleibt."
  },
  {
    "id": "ko-0230",
    "name": "Quarkwaffeln",
    "emoji": "🧇",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "mehl",
      "quark",
      "eier",
      "milch",
      "zucker",
      "butter",
      "backpulver"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "quark": [
        250,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "milch": [
        180,
        "ml"
      ],
      "zucker": [
        50,
        "g"
      ],
      "butter": [
        50,
        "g"
      ],
      "backpulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Butter schmelzen und etwas abkühlen lassen.",
      "Waffeleisen vorheizen.",
      "Eier und Zucker 2 Minuten verrühren, anschließend Quark, Milch und Butter einarbeiten.",
      "Mehl und Backpulver mischen und nur so lange unterrühren, bis ein glatter, dickflüssiger Teig entsteht.",
      "Waffeleisen dünn fetten und den Teig portionsweise goldbraun ausbacken.",
      "Fertige Waffeln kurz auf einem Gitter ausdampfen lassen und warm servieren."
    ],
    "stepTimers": [
      null,
      null,
      2,
      null,
      null,
      null
    ],
    "tip": "Nicht zu viel Teig einfüllen; durch den Quark geht er beim Backen etwas auf."
  },
  {
    "id": "ko-0231",
    "name": "Ofen-Süßkartoffeln mit Kräuterquark",
    "emoji": "🍠",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "suesskartoffel",
      "quark",
      "gurke",
      "zitrone",
      "petersilie",
      "olivenoel"
    ],
    "amounts": {
      "suesskartoffel": [
        1000,
        "g"
      ],
      "quark": [
        400,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "petersilie": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen und ein Blech mit Backpapier belegen.",
      "Süßkartoffeln gründlich waschen, längs halbieren, Schnittflächen mit Olivenöl bestreichen und salzen.",
      "Mit der Schnittfläche nach unten 35 bis 40 Minuten backen, bis sie sich leicht einstechen lassen.",
      "Gurke fein raspeln, ausdrücken und mit Quark, Zitronensaft und gehackter Petersilie verrühren.",
      "Quark mit Salz und Pfeffer abschmecken und zu den heißen Süßkartoffeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      40,
      null,
      null
    ],
    "tip": "Sehr große Süßkartoffeln vierteln, damit alle Stücke gleichzeitig gar werden."
  },
  {
    "id": "ko-0232",
    "name": "Paprika-Feta-Couscous",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "couscous",
      "paprika",
      "feta",
      "bruehe",
      "zitrone",
      "petersilie",
      "olivenoel"
    ],
    "amounts": {
      "couscous": [
        280,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "feta": [
        200,
        "g"
      ],
      "bruehe": [
        350,
        "ml"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "petersilie": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 10,
    "restMinutes": 0,
    "minutes": 22,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Couscous in eine große Schüssel geben, mit kochender Brühe übergießen und abgedeckt 8 Minuten quellen lassen.",
      "Paprika klein würfeln, Petersilie hacken und Feta zerbröseln.",
      "Couscous mit einer Gabel gründlich auflockern und 2 Minuten ausdampfen lassen.",
      "Paprika, Petersilie, Zitronensaft und Olivenöl unterheben.",
      "Feta vorsichtig einarbeiten und den Couscous mit Salz und Pfeffer abschmecken."
    ],
    "stepTimers": [
      8,
      null,
      2,
      null,
      null
    ],
    "tip": "Den Feta erst am Ende unterheben, damit erkennbare Stücke erhalten bleiben."
  },
  {
    "id": "ko-0233",
    "name": "Hähnchen-Brokkoli-Reis-Pfanne",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "haehnchen",
      "reis",
      "brokkoli",
      "zwiebeln",
      "sojasauce",
      "knoblauch",
      "sesam"
    ],
    "amounts": {
      "haehnchen": [
        500,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Brokkoli in kleine Röschen teilen.",
      "Hähnchen in gleichmäßige Stücke schneiden und getrennte Bretter sowie Messer für rohes Fleisch verwenden.",
      "Hähnchen in einer heißen großen Pfanne rundherum anbraten und vollständig durchgaren, anschließend kurz herausnehmen.",
      "Zwiebel, Knoblauch und Brokkoli in derselben Pfanne mit einem Schuss Wasser 6 bis 8 Minuten bissfest garen.",
      "Reis und Hähnchen wieder zugeben, mit Sojasauce durchschwenken, vollständig erhitzen und mit Sesam servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      8,
      null
    ],
    "tip": "Das Hähnchen muss innen vollständig weiß und durchgegart sein; rohes Fleisch darf andere Zutaten nicht berühren."
  },
  {
    "id": "ko-0234",
    "name": "Kartoffel-Lauch-Suppe",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "lauch",
      "zwiebeln",
      "bruehe",
      "sahne",
      "butter"
    ],
    "amounts": {
      "kartoffeln": [
        800,
        "g"
      ],
      "lauch": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "butter": [
        25,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Kartoffeln schälen und würfeln.",
      "Lauch längs aufschneiden, gründlich waschen und in Ringe schneiden.",
      "Butter in einem großen Topf erhitzen und Zwiebel sowie Lauch 5 Minuten ohne starke Bräunung dünsten.",
      "Kartoffeln und Brühe zugeben, aufkochen und 20 Minuten sanft köcheln lassen.",
      "Etwa die Hälfte der Suppe fein pürieren und wieder mit dem stückigen Anteil vermischen.",
      "Sahne einrühren, nochmals erhitzen und mit Salz, Pfeffer und etwas Muskat abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      5,
      20,
      null,
      null
    ],
    "tip": "Nach Zugabe der Sahne nur noch sanft erhitzen, damit die Suppe nicht ausflockt."
  },
  {
    "id": "ko-0235",
    "name": "Tomaten-Bohnen-Eintopf",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "bohnen",
      "dosentomaten",
      "karotten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "paprikapulver"
    ],
    "amounts": {
      "bohnen": [
        480,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen abspülen und abtropfen lassen.",
      "Karotten, Zwiebel und Knoblauch klein schneiden.",
      "Zwiebel und Karotten in einem großen Topf mit wenig Öl 6 Minuten anschwitzen.",
      "Knoblauch und Paprikapulver 30 Sekunden mitrösten, anschließend Tomaten und Brühe angießen.",
      "Den Eintopf 18 Minuten sanft köcheln lassen, dann die Bohnen zugeben und weitere 7 Minuten erhitzen.",
      "Mit Salz, Pfeffer und einem kleinen Schuss Essig abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      18,
      null
    ],
    "tip": "Bohnen aus der Dose immer abspülen; dadurch schmeckt der Eintopf sauberer und wird weniger salzig."
  },
  {
    "id": "ko-0236",
    "name": "Spinat-Omelett mit Feta",
    "emoji": "🍳",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "eier",
      "spinat",
      "feta",
      "zwiebeln",
      "olivenoel"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "spinat": [
        250,
        "g"
      ],
      "feta": [
        150,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 22,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Eier mit einer Prise Salz und Pfeffer gründlich verquirlen; Feta zerbröseln.",
      "Zwiebel fein würfeln und in einer großen beschichteten Pfanne im Olivenöl 3 Minuten dünsten.",
      "Spinat portionsweise zugeben und zusammenfallen lassen.",
      "Überschüssige Flüssigkeit kurz verdampfen lassen.",
      "Eimasse angießen, Feta darüberstreuen und bei kleiner bis mittlerer Hitze stocken lassen.",
      "Omelett zusammenklappen oder vierteln und servieren, sobald die Eimasse vollständig gestockt ist."
    ],
    "stepTimers": [
      null,
      3,
      null,
      null,
      null,
      null
    ],
    "tip": "Niedrige Hitze sorgt für ein saftiges Omelett und verhindert, dass die Unterseite zu dunkel wird."
  },
  {
    "id": "ko-0237",
    "name": "Thunfisch-Mais-Nudelsalat",
    "emoji": "🥗",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "nudeln",
      "thunfisch",
      "mais",
      "gurke",
      "joghurt",
      "zitrone",
      "petersilie"
    ],
    "amounts": {
      "nudeln": [
        350,
        "g"
      ],
      "thunfisch": [
        2,
        "Dosen"
      ],
      "mais": [
        280,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Nudeln in Salzwasser bissfest kochen, abgießen, kalt abschrecken und gut abtropfen lassen.",
      "Thunfisch und Mais abtropfen lassen.",
      "Gurke klein würfeln und Petersilie hacken.",
      "Joghurt mit Zitronensaft, Salz und Pfeffer zu einem glatten Dressing verrühren.",
      "Nudeln, Thunfisch, Mais und Gurke mit dem Dressing gründlich vermengen.",
      "Petersilie unterheben und den Salat bis zum Servieren kalt stellen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Den Salat höchstens zwei Stunden ungekühlt stehen lassen und Reste rasch wieder kühlen."
  },
  {
    "id": "ko-0238",
    "name": "Gnocchi mit Tomaten und Spinat",
    "emoji": "🍅",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "gnocchi",
      "tomaten",
      "spinat",
      "knoblauch",
      "mozzarella",
      "olivenoel"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "tomaten": [
        5,
        "Stück"
      ],
      "spinat": [
        250,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "mozzarella": [
        250,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Tomaten würfeln, Knoblauch fein hacken und Mozzarella abtropfen lassen sowie zerzupfen.",
      "Gnocchi im Olivenöl in einer großen Pfanne 6 bis 8 Minuten goldbraun braten.",
      "Knoblauch und Tomaten zugeben und 4 Minuten köcheln lassen.",
      "Spinat portionsweise unterheben und zusammenfallen lassen.",
      "Mozzarella auf der Pfanne verteilen, kurz anschmelzen lassen und mit Salz sowie Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      8,
      4,
      null,
      null
    ],
    "tip": "Sehr feuchte Tomaten zunächst offen einkochen lassen, damit die Gnocchi knusprig bleiben."
  },
  {
    "id": "ko-0239",
    "name": "Karotten-Linsen-Curry",
    "emoji": "🥕",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "linsen",
      "karotten",
      "kokosmilch",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "currypulver"
    ],
    "amounts": {
      "linsen": [
        240,
        "g"
      ],
      "karotten": [
        500,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "currypulver": [
        3,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen abspülen; Karotten in dünne Scheiben schneiden und Zwiebel sowie Knoblauch fein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch und Currypulver kurz mitrösten.",
      "Karotten, Linsen, Kokosmilch und Dosentomaten einrühren und aufkochen.",
      "Bei kleiner Hitze 22 bis 25 Minuten köcheln lassen und regelmäßig umrühren.",
      "Gargrad der Linsen prüfen und das Curry mit Salz sowie Zitronen- oder Limettensaft abschmecken."
    ],
    "stepTimers": [
      null,
      4,
      null,
      25,
      null
    ],
    "tip": "Je nach Linsensorte kann etwas zusätzliches Wasser notwendig sein; immer erst schluckweise ergänzen."
  },
  {
    "id": "ko-0240",
    "name": "Bananen-Hafer-Pancakes",
    "emoji": "🥞",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "banane",
      "haferflocken",
      "eier",
      "joghurt",
      "milch",
      "backpulver",
      "zimt"
    ],
    "amounts": {
      "banane": [
        3,
        "Stück"
      ],
      "haferflocken": [
        200,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "joghurt": [
        150,
        "g"
      ],
      "milch": [
        100,
        "ml"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 10,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 25,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Bananen mit einer Gabel sehr fein zerdrücken.",
      "Haferflocken fein mahlen oder direkt mit Eiern, Joghurt, Milch, Backpulver und Zimt zur Banane geben.",
      "Alles zu einem gleichmäßigen Teig verrühren und 5 Minuten quellen lassen.",
      "Eine beschichtete Pfanne leicht fetten und kleine Pancakes bei mittlerer Hitze portionsweise ausbacken.",
      "Wenden, sobald die Oberfläche Bläschen zeigt, und die zweite Seite goldbraun backen."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      null
    ],
    "tip": "Kleine Pancakes lassen sich leichter wenden und garen gleichmäßiger durch."
  },
  {
    "id": "ko-0241",
    "name": "Gemüse-Reis-Suppe",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "karotten",
      "lauch",
      "sellerie",
      "erbsen",
      "bruehe",
      "petersilie"
    ],
    "amounts": {
      "reis": [
        180,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "lauch": [
        1,
        "Stück"
      ],
      "sellerie": [
        1,
        "Stück"
      ],
      "erbsen": [
        200,
        "g"
      ],
      "bruehe": [
        1400,
        "ml"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Reis abspülen; Karotten, Lauch und Sellerie in kleine gleichmäßige Stücke schneiden.",
      "Gemüse in einem großen Topf mit wenig Öl 5 Minuten anschwitzen.",
      "Brühe und Reis zugeben, aufkochen und 18 Minuten sanft köcheln lassen.",
      "Erbsen einrühren und weitere 5 Minuten garen, bis Reis und Gemüse weich sind.",
      "Mit Salz und Pfeffer abschmecken und gehackte Petersilie unterheben."
    ],
    "stepTimers": [
      null,
      5,
      18,
      5,
      null
    ],
    "tip": "Die Suppe dickt beim Abkühlen nach; beim Aufwärmen etwas Brühe oder Wasser ergänzen."
  },
  {
    "id": "ko-0242",
    "name": "Hähnchen-Paprika-Wraps",
    "emoji": "🌯",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "tortilla",
      "haehnchen",
      "paprika",
      "zwiebeln",
      "joghurt",
      "salat",
      "paprikapulver"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "haehnchen": [
        500,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "salat": [
        120,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen in dünne Streifen schneiden.",
      "Paprika und Zwiebel ebenfalls in Streifen schneiden.",
      "Hähnchen in einer heißen Pfanne mit wenig Öl rundherum anbraten und vollständig durchgaren.",
      "Paprika, Zwiebel und Paprikapulver zugeben und weitere 5 Minuten braten.",
      "Tortillas nach Packungsangabe erwärmen und mit Joghurt bestreichen.",
      "Salat und Hähnchen-Gemüse-Mischung verteilen, Seiten einschlagen und Wraps fest aufrollen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      null,
      null
    ],
    "tip": "Füllung kurz ausdampfen lassen, damit die Tortillas nicht durchweichen."
  },
  {
    "id": "ko-0243",
    "name": "Kartoffel-Brokkoli-Auflauf",
    "emoji": "🥦",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kartoffeln",
      "brokkoli",
      "sahne",
      "milch",
      "reibekaese",
      "knoblauch"
    ],
    "amounts": {
      "kartoffeln": [
        900,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "sahne": [
        250,
        "ml"
      ],
      "milch": [
        200,
        "ml"
      ],
      "reibekaese": [
        180,
        "g"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform einfetten.",
      "Kartoffeln schälen, in dünne Scheiben schneiden und 8 Minuten in Salzwasser vorgaren.",
      "Brokkoli in Röschen teilen, für die letzten 3 Minuten zu den Kartoffeln geben und anschließend alles abgießen.",
      "Sahne, Milch und fein geriebenen Knoblauch mit Salz und Pfeffer verrühren.",
      "Gemüse in die Form geben und übergießen.",
      "Käse darüberstreuen und 30 bis 35 Minuten backen, bis die Kartoffeln weich und die Oberfläche goldbraun ist."
    ],
    "stepTimers": [
      null,
      8,
      3,
      null,
      null,
      35
    ],
    "tip": "Den Auflauf vor dem Portionieren 5 Minuten ruhen lassen, damit sich die Sauce setzt."
  },
  {
    "id": "ko-0244",
    "name": "Kichererbsen-Salat mit Avocado",
    "emoji": "🥑",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "kichererbsen",
      "avocado",
      "tomaten",
      "gurke",
      "zitrone",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "kichererbsen": [
        480,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "tomaten": [
        4,
        "Stück"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kichererbsen abspülen, gründlich abtropfen lassen und in eine große Schüssel geben.",
      "Tomaten und Gurke würfeln, Petersilie hacken und alles zu den Kichererbsen geben.",
      "Zitronensaft mit Olivenöl, Salz und Pfeffer zu einem Dressing verrühren.",
      "Avocados halbieren, entkernen, würfeln und unmittelbar mit dem Dressing vermengen.",
      "Alle Zutaten vorsichtig mischen, 5 Minuten durchziehen lassen und frisch servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      5
    ],
    "tip": "Avocado erst kurz vor dem Essen schneiden; Zitronensaft verlangsamt das Braunwerden."
  },
  {
    "id": "ko-0245",
    "name": "Apfel-Quark-Auflauf",
    "emoji": "🍎",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "quark",
      "apfel",
      "eier",
      "zucker",
      "speisestaerke",
      "zimt",
      "butter"
    ],
    "amounts": {
      "quark": [
        500,
        "g"
      ],
      "apfel": [
        3,
        "Stück"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "zucker": [
        60,
        "g"
      ],
      "speisestaerke": [
        35,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "butter": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und eine Auflaufform mit Butter einfetten.",
      "Äpfel schälen, entkernen und in dünne Spalten schneiden.",
      "Eier trennen; Eigelb mit Quark, Zucker, Speisestärke und Zimt glatt rühren.",
      "Eiweiß steif schlagen, vorsichtig unterheben und anschließend die Apfelspalten einarbeiten.",
      "Masse in die Form geben und 30 bis 35 Minuten backen.",
      "Vor dem Servieren 10 Minuten abkühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      35,
      10
    ],
    "tip": "Die Ofentür während der ersten 25 Minuten geschlossen halten, damit der Auflauf nicht zusammenfällt."
  },
  {
    "id": "ko-0246",
    "name": "Tomaten-Mozzarella-Reis",
    "emoji": "🍅",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "reis",
      "dosentomaten",
      "mozzarella",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "basilikum"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "mozzarella": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "basilikum": [
        15,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 28,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Zwiebel und Knoblauch fein würfeln.",
      "Mozzarella abtropfen lassen und zerzupfen.",
      "Zwiebel in einem breiten Topf mit wenig Olivenöl 3 Minuten anschwitzen, Knoblauch kurz zugeben.",
      "Reis einrühren, 1 Minute mitrösten und anschließend Tomaten sowie Brühe angießen.",
      "Abgedeckt bei kleiner Hitze 18 bis 20 Minuten garen und zwischendurch umrühren.",
      "Topf vom Herd nehmen, Mozzarella und Basilikum unterheben und mit Salz sowie Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      3,
      1,
      20,
      null
    ],
    "tip": "Falls der Reis noch fest ist, aber die Flüssigkeit aufgenommen wurde, etwas heiße Brühe ergänzen."
  },
  {
    "id": "ko-0247",
    "name": "Linsen-Kartoffel-Topf",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "linsen",
      "kartoffeln",
      "karotten",
      "zwiebeln",
      "bruehe",
      "paprikapulver",
      "petersilie"
    ],
    "amounts": {
      "linsen": [
        240,
        "g"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen abspülen; Kartoffeln und Karotten schälen und in etwa 2 cm große Würfel schneiden.",
      "Zwiebel fein würfeln und in einem großen Topf mit wenig Öl 4 Minuten anschwitzen.",
      "Paprikapulver kurz mitrösten, dann Linsen, Kartoffeln, Karotten und Brühe zugeben.",
      "Aufkochen und bei kleiner Hitze 28 bis 32 Minuten köcheln lassen, bis alles weich ist.",
      "Mit Salz, Pfeffer und etwas Essig abschmecken und Petersilie unterheben."
    ],
    "stepTimers": [
      null,
      4,
      null,
      32,
      null
    ],
    "tip": "Kartoffelwürfel gleich groß schneiden, damit sie gleichzeitig gar werden."
  },
  {
    "id": "ko-0248",
    "name": "Ofenfisch mit Tomaten und Kichererbsen",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": false,
    "ingredients": [
      "fisch",
      "kichererbsen",
      "tomaten",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "zitrone",
      "olivenoel",
      "paprikapulver"
    ],
    "amounts": {
      "fisch": [
        650,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "tomaten": [
        500,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "fisch"
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Kichererbsen abspülen und gut abtropfen lassen.",
      "Tomaten, Paprika und Zwiebel grob schneiden und mit Kichererbsen, Knoblauch, Öl und Paprikapulver mischen.",
      "Gemüsemischung in einer großen Form 18 Minuten vorbacken.",
      "Fisch trocken tupfen, auf Gräten prüfen, würzen und auf das Gemüse legen.",
      "Mit Zitronensaft beträufeln.",
      "Weitere 10 bis 12 Minuten backen, bis der Fisch im Kern nicht mehr glasig ist und leicht zerfällt."
    ],
    "stepTimers": [
      null,
      null,
      null,
      18,
      null,
      null,
      12
    ],
    "tip": "Dünne Fischfilets erst einige Minuten später auflegen, damit sie nicht trocken werden."
  },
  {
    "id": "ko-0249",
    "name": "Beeren-Joghurt-Crumble",
    "emoji": "🫐",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": false,
    "ingredients": [
      "beeren",
      "haferflocken",
      "mehl",
      "butter",
      "zucker",
      "joghurt",
      "zimt"
    ],
    "amounts": {
      "beeren": [
        600,
        "g"
      ],
      "haferflocken": [
        160,
        "g"
      ],
      "mehl": [
        80,
        "g"
      ],
      "butter": [
        100,
        "g"
      ],
      "zucker": [
        70,
        "g"
      ],
      "joghurt": [
        400,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform leicht einfetten.",
      "Beeren in der Form verteilen und mit 20 g Zucker bestreuen.",
      "Haferflocken, Mehl, übrigen Zucker und Zimt vermischen.",
      "Kalte Butter in Stücken einkneten, bis grobe Streusel entstehen.",
      "Streusel gleichmäßig auf den Beeren verteilen und 25 bis 30 Minuten goldbraun backen.",
      "Crumble 10 Minuten abkühlen lassen und mit kaltem Joghurt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      30,
      10
    ],
    "tip": "Tiefgekühlte Beeren direkt gefroren verwenden und die Backzeit bei Bedarf um 5 Minuten verlängern."
  },
  {
    "id": "ko-0250",
    "name": "Pasta e Ceci",
    "emoji": "🍝",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "kichererbsen",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "rosmarin",
      "olivenoel"
    ],
    "amounts": {
      "nudeln": [
        320,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        600,
        "ml"
      ],
      "rosmarin": [
        5,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 28,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Kichererbsen abspülen.",
      "Zwiebel und Knoblauch fein würfeln und Rosmarin hacken.",
      "Zwiebel im Olivenöl 4 Minuten anschwitzen, Knoblauch und Rosmarin kurz mitrösten.",
      "Tomaten, Brühe und Kichererbsen zugeben, aufkochen und 10 Minuten sanft köcheln lassen.",
      "Etwa ein Viertel der Kichererbsen im Topf zerdrücken, Nudeln einrühren und nach Packungszeit bissfest garen.",
      "Regelmäßig umrühren.",
      "Konsistenz mit heißem Wasser anpassen und kräftig mit Salz sowie Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      4,
      10,
      null,
      null,
      null
    ],
    "tip": "Kurze Nudelformen verwenden und während des Garens häufig rühren, damit nichts am Topfboden ansetzt."
  },
  {
    "id": "ko-0251",
    "name": "Pasta alla Norma",
    "emoji": "🍆",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "aubergine",
      "dosentomaten",
      "ricotta",
      "knoblauch",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "aubergine": [
        2,
        "Stück"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "ricotta": [
        180,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Auberginen in 2 cm große Würfel schneiden, salzen und 10 Minuten ziehen lassen.",
      "Anschließend trocken tupfen.",
      "Auberginen portionsweise im Olivenöl rundherum kräftig bräunen und auf einem Teller bereitstellen.",
      "Knoblauch kurz im verbliebenen Öl anschwitzen, Tomaten zugeben und 15 Minuten offen einkochen.",
      "Nudeln bissfest kochen, mit Sauce und Auberginen vermengen und bei Bedarf etwas Kochwasser ergänzen.",
      "Mit Basilikum und zerbröseltem Ricotta anrichten und sofort servieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      15,
      null,
      null
    ],
    "tip": "Auberginen portionsweise braten; eine überfüllte Pfanne lässt sie eher dämpfen als bräunen."
  },
  {
    "id": "ko-0252",
    "name": "Cacio e Pepe",
    "emoji": "🧀",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "parmesan",
      "butter"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "parmesan": [
        140,
        "g"
      ],
      "butter": [
        25,
        "g"
      ]
    },
    "prepMinutes": 8,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 23,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Parmesan sehr fein reiben und reichlich schwarzen Pfeffer grob mahlen.",
      "Nudeln in nur leicht gesalzenem Wasser bissfest kochen und 250 ml stärkehaltiges Kochwasser auffangen.",
      "Pfeffer in einer großen Pfanne ohne Fett 30 Sekunden rösten, Butter und etwa 100 ml Kochwasser zugeben.",
      "Nudeln in die Pfanne geben, vom Herd ziehen und kurz abkühlen lassen.",
      "Parmesan portionsweise unter kräftigem Schwenken einarbeiten, bis eine glatte Sauce entsteht.",
      "Nicht erneut stark erhitzen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Käse und Pasta nicht auf hoher Hitze vermengen, sonst verklumpt der Parmesan."
  },
  {
    "id": "ko-0253",
    "name": "Gnocchi alla Sorrentina",
    "emoji": "🍅",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "gnocchi",
      "dosentomaten",
      "mozzarella",
      "parmesan",
      "knoblauch",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "gnocchi": [
        800,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "mozzarella": [
        250,
        "g"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 28,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen und eine Auflaufform bereitstellen.",
      "Knoblauch im Olivenöl sanft anschwitzen, Tomaten zugeben und 12 Minuten einkochen.",
      "Mit Salz und Pfeffer abschmecken.",
      "Gnocchi nach Packungsangabe garen, sobald sie aufsteigen abgießen und mit der Tomatensauce vermengen.",
      "Gnocchi in die Form geben, Mozzarella und Parmesan gleichmäßig darüber verteilen.",
      "10 bis 12 Minuten überbacken und anschließend mit frischem Basilikum servieren."
    ],
    "stepTimers": [
      null,
      12,
      null,
      null,
      null,
      12
    ],
    "tip": "Mozzarella gut abtropfen lassen, damit der Auflauf nicht wässrig wird."
  },
  {
    "id": "ko-0254",
    "name": "Auberginen-Parmigiana",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "dosentomaten",
      "mozzarella",
      "parmesan",
      "knoblauch",
      "basilikum",
      "olivenoel"
    ],
    "amounts": {
      "aubergine": [
        3,
        "Stück"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "mozzarella": [
        300,
        "g"
      ],
      "parmesan": [
        100,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Auberginen längs in 7 mm dicke Scheiben schneiden, salzen, 15 Minuten ziehen lassen und gründlich trocken tupfen.",
      "Scheiben dünn mit Olivenöl bestreichen und auf Blechen bei 220 °C etwa 18 Minuten vorbacken, einmal wenden.",
      "Knoblauch anschwitzen, Tomaten zugeben und 15 Minuten zu einer dicken Sauce einkochen.",
      "Basilikum unterrühren.",
      "Sauce, Auberginen, Mozzarella und Parmesan abwechselnd in eine Form schichten und mit Käse abschließen.",
      "Bei 190 °C 30 bis 35 Minuten backen und vor dem Anschneiden 10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      15,
      18,
      15,
      null,
      null,
      35
    ],
    "tip": "Die Tomatensauce muss kräftig eingekocht sein, damit die Parmigiana schnittfest wird."
  },
  {
    "id": "ko-0255",
    "name": "Lachs-Spinat-Pasta",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "lachs",
      "spinat",
      "sahne",
      "zitrone",
      "knoblauch",
      "parmesan"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "lachs": [
        500,
        "g"
      ],
      "spinat": [
        300,
        "g"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "parmesan": [
        50,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 23,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Nudeln in Salzwasser bissfest kochen und 150 ml Kochwasser auffangen.",
      "Lachs trocken tupfen, in große Würfel schneiden und in einer Pfanne rundherum anbraten.",
      "Anschließend herausnehmen.",
      "Knoblauch kurz anschwitzen, Sahne angießen und 3 Minuten sanft köcheln lassen.",
      "Spinat zusammenfallen lassen, Nudeln und etwas Kochwasser einrühren und die Sauce mit Zitronensaft abschmecken.",
      "Lachs vorsichtig unterheben, vollständig erhitzen und mit Parmesan servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      3,
      null,
      null
    ],
    "tip": "Lachswürfel nur vorsichtig wenden, damit sie nicht zerfallen; für Risikogruppen vollständig durchgaren."
  },
  {
    "id": "ko-0256",
    "name": "Garnelen-Risotto",
    "emoji": "🍤",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "garnelen",
      "bruehe",
      "weisswein",
      "zwiebeln",
      "knoblauch",
      "parmesan",
      "butter",
      "zitrone"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "garnelen": [
        400,
        "g"
      ],
      "bruehe": [
        1100,
        "ml"
      ],
      "weisswein": [
        150,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "parmesan": [
        70,
        "g"
      ],
      "butter": [
        40,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose",
      "schalentiere"
    ],
    "steps": [
      "Brühe in einem separaten Topf heiß halten.",
      "Garnelen trocken tupfen.",
      "Garnelen in wenig Butter 2 bis 3 Minuten anbraten, bis sie gerade eben gar sind, dann herausnehmen.",
      "Zwiebel und Knoblauch in derselben Pfanne anschwitzen, Reis zugeben und 1 Minute glasig rühren.",
      "Mit Weißwein ablöschen und anschließend heiße Brühe portionsweise unter regelmäßigem Rühren zugeben, bis der Reis cremig und bissfest ist.",
      "Garnelen, restliche Butter, Parmesan und Zitronensaft unterheben, abschmecken und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      3,
      1,
      null,
      null
    ],
    "tip": "Garnelen erst am Ende zurückgeben, damit sie saftig bleiben und nicht zäh werden."
  },
  {
    "id": "ko-0257",
    "name": "Hähnchen-Piccata",
    "emoji": "🍋",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "mehl",
      "butter",
      "olivenoel",
      "zitrone",
      "kapern",
      "bruehe",
      "petersilie"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "mehl": [
        60,
        "g"
      ],
      "butter": [
        50,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "kapern": [
        30,
        "g"
      ],
      "bruehe": [
        250,
        "ml"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 22,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchenbrust waagerecht halbieren, zwischen Folie gleichmäßig flach klopfen und mit Salz sowie Pfeffer würzen.",
      "Fleisch dünn in Mehl wenden und überschüssiges Mehl abklopfen.",
      "Olivenöl und die Hälfte der Butter erhitzen, Hähnchen portionsweise goldbraun braten und vollständig durchgaren; warm stellen.",
      "Brühe, Zitronensaft und Kapern in die Pfanne geben, Bratensatz lösen und 4 Minuten einkochen.",
      "Restliche kalte Butter einrühren, Hähnchen kurz in der Sauce erwärmen und mit Petersilie servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      4,
      null
    ],
    "tip": "Dünne, gleichmäßige Fleischstücke garen schneller und bleiben saftiger."
  },
  {
    "id": "ko-0258",
    "name": "Polenta mit Pilzragout",
    "emoji": "🍄",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "polenta",
      "champignons",
      "bruehe",
      "zwiebeln",
      "knoblauch",
      "sahne",
      "parmesan",
      "butter"
    ],
    "amounts": {
      "polenta": [
        300,
        "g"
      ],
      "champignons": [
        600,
        "g"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "parmesan": [
        70,
        "g"
      ],
      "butter": [
        30,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Champignons putzen und in Scheiben schneiden.",
      "Zwiebel und Knoblauch fein würfeln.",
      "Pilze portionsweise in einer sehr heißen Pfanne kräftig bräunen und anschließend salzen.",
      "Zwiebel und Knoblauch anschwitzen, Pilze zurückgeben, Sahne angießen und 8 Minuten sanft einkochen.",
      "Brühe aufkochen, Polenta unter Rühren einrieseln lassen und nach Packungsangabe cremig garen.",
      "Butter und Parmesan in die Polenta rühren, abschmecken und mit dem Pilzragout anrichten."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      null,
      null
    ],
    "tip": "Pilze erst nach dem Bräunen salzen, damit sie weniger Wasser ziehen."
  },
  {
    "id": "ko-0259",
    "name": "Kartoffel-Spinat-Frittata",
    "emoji": "🍳",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "eier",
      "spinat",
      "zwiebeln",
      "feta",
      "olivenoel"
    ],
    "amounts": {
      "kartoffeln": [
        600,
        "g"
      ],
      "eier": [
        8,
        "Stück"
      ],
      "spinat": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "feta": [
        150,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Kartoffeln schälen, in 5 mm dünne Scheiben schneiden und 8 Minuten in Salzwasser vorgaren; abgießen.",
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und Eier mit Salz sowie Pfeffer verquirlen.",
      "Zwiebel in einer ofenfesten Pfanne anschwitzen, Spinat zugeben und zusammenfallen lassen.",
      "Kartoffeln verteilen, Eimasse angießen und Feta darüberbröseln.",
      "4 Minuten auf dem Herd anstocken lassen.",
      "Pfanne 12 bis 15 Minuten in den Ofen stellen, bis die Eimasse vollständig gestockt ist."
    ],
    "stepTimers": [
      8,
      null,
      null,
      null,
      4,
      15
    ],
    "tip": "Eine ofenfeste Pfanne verwenden und den heißen Griff nach dem Backen kennzeichnen oder mit einem Tuch schützen."
  },
  {
    "id": "ko-0260",
    "name": "Ricotta-Tomaten-Crostini",
    "emoji": "🍞",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "baguette",
      "ricotta",
      "tomaten",
      "basilikum",
      "knoblauch",
      "olivenoel",
      "zitrone"
    ],
    "amounts": {
      "baguette": [
        1,
        "Stück"
      ],
      "ricotta": [
        250,
        "g"
      ],
      "tomaten": [
        4,
        "Stück"
      ],
      "basilikum": [
        15,
        "g"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 8,
    "restMinutes": 0,
    "minutes": 23,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen und Baguette schräg in 12 Scheiben schneiden.",
      "Brotscheiben mit einem Esslöffel Olivenöl bestreichen und 6 bis 8 Minuten knusprig rösten.",
      "Tomaten entkernen, klein würfeln und mit restlichem Olivenöl, Salz und Pfeffer vermengen.",
      "Ricotta mit etwas Zitronenabrieb und einer Prise Salz glatt rühren.",
      "Geröstetes Brot mit Knoblauch abreiben, Ricotta und Tomaten daraufgeben und mit Basilikum servieren."
    ],
    "stepTimers": [
      null,
      8,
      null,
      null,
      null
    ],
    "tip": "Crostini erst unmittelbar vor dem Servieren belegen, damit sie knusprig bleiben."
  },
  {
    "id": "ko-0261",
    "name": "Sizilianische Caponata",
    "emoji": "🍆",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "sellerie",
      "tomaten",
      "zwiebeln",
      "oliven",
      "kapern",
      "essig",
      "zucker",
      "olivenoel"
    ],
    "amounts": {
      "aubergine": [
        2,
        "Stück"
      ],
      "sellerie": [
        1,
        "Stück"
      ],
      "tomaten": [
        5,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "oliven": [
        100,
        "g"
      ],
      "kapern": [
        25,
        "g"
      ],
      "essig": [
        3,
        "EL"
      ],
      "zucker": [
        1,
        "EL"
      ],
      "olivenoel": [
        4,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Auberginen würfeln, salzen, 10 Minuten ziehen lassen und trocken tupfen.",
      "Sellerie, Tomaten und Zwiebel klein schneiden.",
      "Auberginen portionsweise im Olivenöl kräftig bräunen und herausnehmen.",
      "Zwiebel und Sellerie 6 Minuten anschwitzen, dann Tomaten, Oliven und Kapern zugeben.",
      "Essig und Zucker einrühren, Auberginen zurückgeben und 15 Minuten offen sanft schmoren.",
      "Mit Salz und Pfeffer ausbalancieren und lauwarm oder vollständig abgekühlt servieren."
    ],
    "stepTimers": [
      10,
      null,
      null,
      6,
      15,
      null
    ],
    "tip": "Caponata schmeckt nach einigen Stunden Ruhezeit aromatischer; gekühlt lagern und rechtzeitig temperieren."
  },
  {
    "id": "ko-0262",
    "name": "Hähnchen-Souvlaki mit Reis",
    "emoji": "🍢",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "reis",
      "paprika",
      "zwiebeln",
      "zitrone",
      "knoblauch",
      "joghurt",
      "rosmarin",
      "olivenoel"
    ],
    "amounts": {
      "haehnchen": [
        700,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "rosmarin": [
        8,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen in 3 cm große Würfel schneiden und mit Öl, Saft einer Zitrone, Rosmarin und zwei gehackten Knoblauchzehen mischen.",
      "Paprika und Zwiebeln in gleich große Stücke schneiden.",
      "Reis nach Packungsangabe garen.",
      "Hähnchen, Paprika und Zwiebeln abwechselnd auf Spieße stecken.",
      "Spieße in einer Grillpfanne rundherum 12 bis 15 Minuten braten, bis das Hähnchen vollständig durchgegart ist.",
      "Joghurt mit restlichem Knoblauch und Zitronensaft verrühren und mit Reis und heißen Spießen servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      15,
      null
    ],
    "tip": "Holzspieße vorab 20 Minuten wässern, damit sie in der heißen Pfanne weniger stark bräunen."
  },
  {
    "id": "ko-0263",
    "name": "Spanakopita",
    "emoji": "🥧",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "filoteig",
      "spinat",
      "feta",
      "eier",
      "zwiebeln",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "filoteig": [
        300,
        "g"
      ],
      "spinat": [
        700,
        "g"
      ],
      "feta": [
        300,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        5,
        "EL"
      ],
      "petersilie": [
        20,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Spinat gründlich waschen, zusammenfallen lassen, abkühlen und sehr gut ausdrücken.",
      "Zwiebel fein würfeln und in einem Esslöffel Olivenöl glasig dünsten.",
      "Spinat hacken und mit Zwiebel, zerbröseltem Feta, Eiern und Petersilie vermengen.",
      "Zurückhaltend salzen.",
      "Eine Form ölen, die Hälfte der Filoteigblätter einzeln einlegen und jeweils dünn ölen.",
      "Füllung verteilen und restliche Blätter ebenso auflegen.",
      "Bei 190 °C Ober-/Unterhitze 35 bis 40 Minuten goldbraun backen und vor dem Schneiden 10 Minuten ruhen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null,
      40
    ],
    "tip": "Filoteig während der Arbeit mit einem leicht feuchten Tuch abdecken, damit er nicht austrocknet."
  },
  {
    "id": "ko-0264",
    "name": "Griechische gefüllte Tomaten",
    "emoji": "🍅",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tomaten",
      "reis",
      "zwiebeln",
      "knoblauch",
      "petersilie",
      "olivenoel",
      "kartoffeln"
    ],
    "amounts": {
      "tomaten": [
        8,
        "Stück"
      ],
      "reis": [
        240,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "petersilie": [
        25,
        "g"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "kartoffeln": [
        500,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 60,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen.",
      "Von den Tomaten Deckel abschneiden und Fruchtfleisch vorsichtig herauslösen.",
      "Tomateninneres hacken.",
      "Zwiebel und Knoblauch in der Hälfte des Olivenöls anschwitzen, Reis und Tomateninneres zugeben und 8 Minuten vorgaren.",
      "Petersilie unterrühren und die Mischung mit Salz sowie Pfeffer kräftig abschmecken.",
      "Tomaten locker füllen, Deckel aufsetzen und mit Kartoffelspalten in eine Form setzen.",
      "Übriges Olivenöl darübergeben.",
      "Etwa 50 bis 60 Minuten backen, bis Reis und Kartoffeln vollständig gar sind."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      null,
      null,
      null,
      60
    ],
    "tip": "Tomaten nicht zu fest füllen, weil der Reis beim Garen noch quillt."
  },
  {
    "id": "ko-0265",
    "name": "Vegetarische Linsen-Moussaka",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "linsen",
      "kartoffeln",
      "dosentomaten",
      "zwiebeln",
      "milch",
      "butter",
      "mehl",
      "reibekaese"
    ],
    "amounts": {
      "aubergine": [
        3,
        "Stück"
      ],
      "linsen": [
        250,
        "g"
      ],
      "kartoffeln": [
        600,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "milch": [
        500,
        "ml"
      ],
      "butter": [
        50,
        "g"
      ],
      "mehl": [
        50,
        "g"
      ],
      "reibekaese": [
        150,
        "g"
      ]
    },
    "prepMinutes": 30,
    "cookMinutes": 60,
    "restMinutes": 0,
    "minutes": 90,
    "difficulty": "Anspruchsvoll",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Linsen nach Packungsangabe bissfest garen.",
      "Kartoffeln in Scheiben 8 Minuten vorkochen und Auberginen in Scheiben schneiden.",
      "Auberginen mit wenig Öl bei 220 °C 18 Minuten vorbacken und einmal wenden.",
      "Zwiebel anschwitzen, Linsen und Tomaten zugeben und 15 Minuten zu einer dicken Sauce einkochen.",
      "Butter schmelzen, Mehl einrühren, Milch portionsweise einarbeiten und 5 Minuten köcheln.",
      "Die Hälfte des Käses einrühren.",
      "Kartoffeln, Linsensauce und Auberginen schichten, Béchamel und restlichen Käse daraufgeben und bei 190 °C 35 Minuten backen."
    ],
    "stepTimers": [
      null,
      8,
      18,
      15,
      5,
      null,
      35
    ],
    "tip": "Die fertige Moussaka mindestens 15 Minuten ruhen lassen, damit sie sich sauber schneiden lässt."
  },
  {
    "id": "ko-0266",
    "name": "Kichererbsen-Shakshuka",
    "emoji": "🍳",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kichererbsen",
      "eier",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "kreuzkuemmel",
      "paprikapulver"
    ],
    "amounts": {
      "kichererbsen": [
        400,
        "g"
      ],
      "eier": [
        6,
        "Stück"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "eier"
    ],
    "steps": [
      "Kichererbsen abspülen.",
      "Paprika und Zwiebel würfeln, Knoblauch fein hacken.",
      "Zwiebel und Paprika in einer großen Pfanne 7 Minuten anbraten.",
      "Knoblauch, Kreuzkümmel und Paprikapulver kurz mitrösten, Tomaten und Kichererbsen einrühren und 12 Minuten einkochen.",
      "Sechs Mulden formen, Eier hineinschlagen und die Pfanne abdecken.",
      "Bei kleiner Hitze 6 bis 9 Minuten garen, bis das Eiweiß vollständig gestockt ist.",
      "Eigelb nach gewünschtem Gargrad weitergaren."
    ],
    "stepTimers": [
      null,
      null,
      7,
      12,
      null,
      9,
      null
    ],
    "tip": "Die Sauce vor den Eiern kräftig abschmecken; danach lässt sie sich schlechter umrühren."
  },
  {
    "id": "ko-0267",
    "name": "Marokkanische Harira",
    "emoji": "🍲",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "kichererbsen",
      "dosentomaten",
      "sellerie",
      "zwiebeln",
      "bruehe",
      "kreuzkuemmel",
      "koriander",
      "zitrone"
    ],
    "amounts": {
      "linsen": [
        180,
        "g"
      ],
      "kichererbsen": [
        400,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "sellerie": [
        1,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "koriander": [
        15,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Mittel",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Linsen abspülen, Kichererbsen abtropfen lassen und Sellerie sowie Zwiebel fein schneiden.",
      "Zwiebel und Sellerie in wenig Öl 6 Minuten anschwitzen, Kreuzkümmel kurz mitrösten.",
      "Tomaten, Brühe und Linsen zugeben und 30 Minuten sanft köcheln lassen.",
      "Kichererbsen einrühren und weitere 10 Minuten garen.",
      "Bei Bedarf etwas Wasser ergänzen.",
      "Mit Salz, Pfeffer, Zitronensaft und gehacktem Koriander abschmecken."
    ],
    "stepTimers": [
      null,
      6,
      30,
      10,
      null,
      null
    ],
    "tip": "Die Säure erst am Ende zugeben, damit die Linsen zuverlässig weich werden."
  },
  {
    "id": "ko-0268",
    "name": "Mujadara mit Röstzwiebeln",
    "emoji": "🍚",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "reis",
      "zwiebeln",
      "olivenoel",
      "kreuzkuemmel"
    ],
    "amounts": {
      "linsen": [
        220,
        "g"
      ],
      "reis": [
        260,
        "g"
      ],
      "zwiebeln": [
        4,
        "Stück"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Linsen abspülen und in reichlich Wasser 15 Minuten vorgaren, anschließend abgießen.",
      "Zwiebeln halbieren, in dünne Streifen schneiden und im Olivenöl bei mittlerer Hitze langsam dunkelgolden rösten.",
      "Die Hälfte herausnehmen.",
      "Reis, Linsen und Kreuzkümmel zu den übrigen Zwiebeln geben und 1 Minute mitrösten.",
      "650 ml heißes Wasser und Salz zugeben, abdecken und bei kleiner Hitze 18 Minuten garen.",
      "Topf 10 Minuten ruhen lassen, Reis auflockern und mit den zurückgelegten Röstzwiebeln servieren."
    ],
    "stepTimers": [
      15,
      null,
      null,
      1,
      18,
      10
    ],
    "tip": "Zwiebeln geduldig bei mittlerer Hitze rösten; zu hohe Hitze macht sie außen bitter und innen roh."
  },
  {
    "id": "ko-0269",
    "name": "Falafel-Couscous-Bowl",
    "emoji": "🧆",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kichererbsen",
      "couscous",
      "gurke",
      "tomaten",
      "petersilie",
      "knoblauch",
      "zitrone",
      "kreuzkuemmel",
      "bruehe",
      "mehl"
    ],
    "amounts": {
      "kichererbsen": [
        480,
        "g"
      ],
      "couscous": [
        260,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "tomaten": [
        4,
        "Stück"
      ],
      "petersilie": [
        30,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "bruehe": [
        320,
        "ml"
      ],
      "mehl": [
        40,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Couscous mit kochender Brühe übergießen, 8 Minuten abgedeckt quellen lassen und auflockern.",
      "Kichererbsen sehr gut abtropfen und mit Knoblauch, Mehl, der Hälfte der Petersilie und Kreuzkümmel grob zerkleinern.",
      "Masse kräftig würzen, zu kleinen Talern formen und in wenig Öl bei mittlerer Hitze je Seite 4 bis 5 Minuten braten.",
      "Gurke und Tomaten würfeln und mit Couscous, Zitronensaft sowie übriger Petersilie vermengen.",
      "Couscous auf Schalen verteilen und die heißen Kichererbsentaler darauf anrichten."
    ],
    "stepTimers": [
      8,
      null,
      5,
      null,
      null
    ],
    "tip": "Kichererbsenmasse nur grob zerkleinern; eine völlig glatte Masse wird beim Braten weich."
  },
  {
    "id": "ko-0270",
    "name": "Hummus-Teller mit Ofengemüse",
    "emoji": "🫓",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kichererbsen",
      "aubergine",
      "paprika",
      "karotten",
      "sesam",
      "zitrone",
      "knoblauch",
      "olivenoel",
      "fladenbrot"
    ],
    "amounts": {
      "kichererbsen": [
        480,
        "g"
      ],
      "aubergine": [
        1,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "karotten": [
        300,
        "g"
      ],
      "sesam": [
        3,
        "EL"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "olivenoel": [
        4,
        "EL"
      ],
      "fladenbrot": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sesam"
    ],
    "steps": [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen.",
      "Aubergine, Paprika und Karotten gleichmäßig schneiden.",
      "Gemüse mit zwei Esslöffeln Olivenöl und Salz mischen und 25 bis 30 Minuten rösten, nach der Hälfte wenden.",
      "Kichererbsen abspülen und mit Sesam, Zitronensaft, Knoblauch, restlichem Olivenöl und 4 bis 6 Esslöffeln Wasser fein pürieren.",
      "Hummus mit Salz abschmecken und auf einer großen Platte verstreichen.",
      "Ofengemüse darauf verteilen und mit erwärmtem Fladenbrot servieren."
    ],
    "stepTimers": [
      null,
      null,
      30,
      null,
      null,
      null
    ],
    "tip": "Wasser beim Pürieren nur esslöffelweise ergänzen, bis der Hummus cremig, aber nicht dünn ist."
  },
  {
    "id": "ko-0271",
    "name": "Türkische Linsensuppe",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "karotten",
      "kartoffeln",
      "zwiebeln",
      "dosentomaten",
      "bruehe",
      "paprikapulver",
      "zitrone"
    ],
    "amounts": {
      "linsen": [
        260,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "kartoffeln": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "dosentomaten": [
        200,
        "g"
      ],
      "bruehe": [
        1200,
        "ml"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen abspülen; Karotten, Kartoffeln und Zwiebel klein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen und Paprikapulver kurz mitrösten.",
      "Gemüse, Linsen, Tomaten und Brühe zugeben und aufkochen.",
      "Bei kleiner Hitze 25 bis 30 Minuten köcheln lassen, bis alle Zutaten weich sind.",
      "Suppe fein pürieren, Konsistenz anpassen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      4,
      null,
      30,
      null
    ],
    "tip": "Für eine besonders glatte Suppe nach dem Pürieren durch ein grobes Sieb streichen."
  },
  {
    "id": "ko-0272",
    "name": "Imam Bayildi",
    "emoji": "🍆",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "aubergine",
      "zwiebeln",
      "tomaten",
      "knoblauch",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "aubergine": [
        4,
        "Stück"
      ],
      "zwiebeln": [
        3,
        "Stück"
      ],
      "tomaten": [
        5,
        "Stück"
      ],
      "knoblauch": [
        4,
        "Zehen"
      ],
      "olivenoel": [
        6,
        "EL"
      ],
      "petersilie": [
        20,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen.",
      "Auberginen längs einschneiden, ohne sie durchzutrennen.",
      "Auberginen mit zwei Esslöffeln Olivenöl bestreichen und 25 Minuten vorbacken, bis sie weich werden.",
      "Zwiebeln in dünne Streifen schneiden und im übrigen Öl 10 Minuten weich dünsten.",
      "Knoblauch und gewürfelte Tomaten zugeben.",
      "Füllung 12 Minuten einkochen, würzen, Petersilie unterheben und großzügig in die geöffneten Auberginen geben.",
      "Weitere 25 bis 30 Minuten backen und lauwarm servieren."
    ],
    "stepTimers": [
      null,
      null,
      25,
      10,
      null,
      12,
      30
    ],
    "tip": "Die Zwiebeln langsam weich dünsten; ihre Süße ist entscheidend für das Gericht."
  },
  {
    "id": "ko-0273",
    "name": "Menemen mit Feta",
    "emoji": "🍳",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "eier",
      "tomaten",
      "paprika",
      "zwiebeln",
      "feta",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "eier": [
        8,
        "Stück"
      ],
      "tomaten": [
        6,
        "Stück"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "feta": [
        150,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Tomaten grob reiben oder klein würfeln.",
      "Paprika und Zwiebel fein schneiden.",
      "Zwiebel und Paprika im Olivenöl 6 Minuten weich braten.",
      "Tomaten zugeben und 5 Minuten offen einkochen, bis die Masse nicht mehr wässrig ist.",
      "Eier verquirlen, in die Pfanne geben und bei kleiner Hitze unter sanftem Rühren vollständig stocken lassen.",
      "Feta und Petersilie darübergeben, mit Pfeffer abschmecken und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      5,
      null,
      null
    ],
    "tip": "Feta ist bereits salzig; das Gericht erst ganz am Ende zusätzlich salzen."
  },
  {
    "id": "ko-0274",
    "name": "Spinat-Feta-Pide",
    "emoji": "🥙",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "mehl",
      "hefe",
      "spinat",
      "feta",
      "zwiebeln",
      "olivenoel",
      "eier"
    ],
    "amounts": {
      "mehl": [
        500,
        "g"
      ],
      "hefe": [
        1,
        "Päckchen"
      ],
      "spinat": [
        500,
        "g"
      ],
      "feta": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "eier": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 80,
    "restMinutes": 0,
    "minutes": 105,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Hefe, 300 ml lauwarmes Wasser, einen Esslöffel Olivenöl und 1 TL Salz 8 Minuten zu einem glatten Teig kneten.",
      "60 Minuten gehen lassen.",
      "Spinat zusammenfallen lassen, abkühlen, gründlich ausdrücken und hacken.",
      "Zwiebel anschwitzen und mit Spinat sowie zerbröseltem Feta vermengen.",
      "Mit Pfeffer abschmecken.",
      "Teig in vier Teile teilen, oval ausrollen, Füllung mittig verteilen und die langen Ränder zu Schiffchen einklappen.",
      "Mit verquirltem Ei bestreichen und bei 220 °C Ober-/Unterhitze 15 bis 18 Minuten goldbraun backen."
    ],
    "stepTimers": [
      8,
      60,
      null,
      null,
      null,
      null,
      18
    ],
    "tip": "Die Füllung muss möglichst trocken sein, damit der Teigboden knusprig bleibt."
  },
  {
    "id": "ko-0275",
    "name": "Kichererbsen-Biryani",
    "emoji": "🍚",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "kichererbsen",
      "zwiebeln",
      "karotten",
      "erbsen",
      "dosentomaten",
      "currypulver",
      "bruehe",
      "mandeln"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "kichererbsen": [
        480,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "erbsen": [
        200,
        "g"
      ],
      "dosentomaten": [
        300,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "bruehe": [
        650,
        "ml"
      ],
      "mandeln": [
        40,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "nuesse"
    ],
    "steps": [
      "Reis gründlich waschen, bis das Wasser fast klar bleibt.",
      "Kichererbsen abspülen und Gemüse vorbereiten.",
      "Zwiebeln in wenig Öl 8 Minuten goldbraun braten, Currypulver kurz mitrösten.",
      "Karotten, Tomaten und Kichererbsen zugeben und 5 Minuten schmoren.",
      "Reis und heiße Brühe einrühren, abdecken und bei kleinster Hitze 18 Minuten garen.",
      "Erbsen nach 12 Minuten auflegen.",
      "Topf 10 Minuten geschlossen ruhen lassen, Reis vorsichtig auflockern und mit Mandeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      8,
      5,
      18,
      12,
      10
    ],
    "tip": "Während des Garens den Deckel geschlossen lassen, damit das Verhältnis von Reis und Flüssigkeit stimmt."
  },
  {
    "id": "ko-0276",
    "name": "Palak Tofu",
    "emoji": "🥬",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "spinat",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "dosentomaten",
      "currypulver",
      "kokosmilch"
    ],
    "amounts": {
      "tofu": [
        450,
        "g"
      ],
      "spinat": [
        700,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        25,
        "g"
      ],
      "dosentomaten": [
        250,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "kokosmilch": [
        200,
        "ml"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 27,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "soja"
    ],
    "steps": [
      "Tofu trocken pressen, würfeln und in einer beschichteten Pfanne rundherum goldbraun braten; beiseitestellen.",
      "Zwiebel 5 Minuten anschwitzen, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Tomaten einrühren und 5 Minuten einkochen, anschließend Spinat portionsweise zusammenfallen lassen.",
      "Kokosmilch zugeben, die Sauce fein oder grob pürieren und 5 Minuten sanft köcheln.",
      "Tofu unterheben, vollständig erhitzen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      5,
      5,
      5,
      null
    ],
    "tip": "Den Tofu vor dem Braten gut trocknen; dadurch bräunt er besser und bleibt formstabil."
  },
  {
    "id": "ko-0277",
    "name": "Linsen-Kokos-Curry",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "kokosmilch",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "currypulver",
      "limette"
    ],
    "amounts": {
      "linsen": [
        260,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "currypulver": [
        3,
        "TL"
      ],
      "limette": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 42,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Linsen in einem Sieb abspülen.",
      "Zwiebel, Knoblauch und Ingwer fein schneiden.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch, Ingwer und Currypulver 30 Sekunden mitrösten.",
      "Linsen, Kokosmilch, Tomaten und 300 ml Wasser zugeben und aufkochen.",
      "Bei kleiner Hitze 22 bis 25 Minuten köcheln lassen und regelmäßig umrühren.",
      "Mit Salz und Limettensaft abschmecken.",
      "Bei Bedarf mit heißem Wasser cremiger einstellen."
    ],
    "stepTimers": [
      null,
      null,
      4,
      null,
      25,
      null,
      null
    ],
    "tip": "Säure erst zugeben, wenn die Linsen weich sind, da sie die Garzeit verlängern kann."
  },
  {
    "id": "ko-0278",
    "name": "Kartoffel-Spinat-Curry",
    "emoji": "🥔",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "spinat",
      "dosentomaten",
      "kokosmilch",
      "zwiebeln",
      "knoblauch",
      "currypulver"
    ],
    "amounts": {
      "kartoffeln": [
        900,
        "g"
      ],
      "spinat": [
        400,
        "g"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "kokosmilch": [
        300,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "currypulver": [
        3,
        "TL"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 53,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kartoffeln schälen und in 2 cm große Würfel schneiden.",
      "Zwiebel und Knoblauch fein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch und Currypulver kurz mitrösten.",
      "Kartoffeln, Tomaten, Kokosmilch und 250 ml Wasser zugeben und aufkochen.",
      "Abgedeckt 22 bis 25 Minuten sanft köcheln, bis die Kartoffeln weich sind.",
      "Spinat portionsweise unterheben, 3 Minuten garen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      4,
      null,
      25,
      3
    ],
    "tip": "Kartoffelwürfel gleich groß schneiden und nur sanft rühren, damit sie nicht zerfallen."
  },
  {
    "id": "ko-0279",
    "name": "Gemüse-Korma mit Mandeln",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "brokkoli",
      "karotten",
      "erbsen",
      "kokosmilch",
      "mandeln",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "currypulver"
    ],
    "amounts": {
      "brokkoli": [
        350,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "kokosmilch": [
        400,
        "ml"
      ],
      "mandeln": [
        80,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "currypulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "nuesse"
    ],
    "steps": [
      "Brokkoli in Röschen teilen, Karotten in dünne Scheiben schneiden und Mandeln fein mahlen.",
      "Zwiebel 5 Minuten weich dünsten, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Kokosmilch, gemahlene Mandeln und 150 ml Wasser einrühren und 5 Minuten sanft köcheln.",
      "Karotten zugeben, nach 5 Minuten Brokkoli ergänzen und weitere 8 Minuten bissfest garen.",
      "Erbsen 3 Minuten mitgaren und das Korma mit Salz sowie Zitronensaft abschmecken."
    ],
    "stepTimers": [
      null,
      5,
      5,
      8,
      3
    ],
    "tip": "Die Sauce nach Zugabe der Mandeln häufig umrühren, weil sie schneller am Topfboden ansetzt."
  },
  {
    "id": "ko-0280",
    "name": "Tofu Tikka Masala",
    "emoji": "🍛",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "dosentomaten",
      "kokosmilch",
      "zwiebeln",
      "knoblauch",
      "ingwer",
      "currypulver",
      "limette"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "kokosmilch": [
        300,
        "ml"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "ingwer": [
        25,
        "g"
      ],
      "currypulver": [
        4,
        "TL"
      ],
      "limette": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "soja"
    ],
    "steps": [
      "Tofu pressen, in Würfel schneiden und mit einem Teelöffel Currypulver sowie Salz vermengen.",
      "Tofu in einer großen Pfanne rundherum kräftig bräunen und herausnehmen.",
      "Zwiebel 5 Minuten anschwitzen, Knoblauch, Ingwer und übriges Currypulver kurz mitrösten.",
      "Tomaten zugeben und 12 Minuten offen einkochen, anschließend Kokosmilch einrühren.",
      "Tofu in der Sauce 5 Minuten erhitzen und mit Salz sowie Limettensaft abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      5,
      12,
      5
    ],
    "tip": "Eine dick eingekochte Tomatensauce nimmt die Kokosmilch besser auf und schmeckt weniger wässrig."
  },
  {
    "id": "ko-0281",
    "name": "Erdnuss-Nudel-Bowl",
    "emoji": "🥜",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "tofu",
      "karotten",
      "gurke",
      "erdnuesse",
      "sojasauce",
      "limette",
      "ingwer"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "tofu": [
        350,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "erdnuesse": [
        100,
        "g"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "ingwer": [
        15,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "erdnuesse",
      "soja"
    ],
    "steps": [
      "Nudeln nach Packungsangabe garen, kalt abschrecken und gut abtropfen lassen.",
      "Tofu trocken tupfen, würfeln und in einer Pfanne rundherum knusprig braten.",
      "Karotten in feine Streifen schneiden, Gurke halbieren und in Scheiben schneiden.",
      "Die Hälfte der Erdnüsse fein mahlen und mit Sojasauce, Limettensaft, geriebenem Ingwer und 4 Esslöffeln Wasser verrühren.",
      "Nudeln und Gemüse mit der Sauce mischen, Tofu daraufgeben und mit übrigen Erdnüssen bestreuen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Sauce zunächst dick anrühren und nur so viel Wasser ergänzen, dass sie an den Nudeln haftet."
  },
  {
    "id": "ko-0282",
    "name": "Thai-Basilikum-Tofu",
    "emoji": "🌿",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "chili",
      "sojasauce",
      "basilikum",
      "reis"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "basilikum": [
        30,
        "g"
      ],
      "reis": [
        300,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Tofu trocken pressen und grob zerbröseln.",
      "Paprika und Zwiebel in dünne Streifen schneiden, Knoblauch und Chili fein hacken.",
      "Tofu in einer sehr heißen Pfanne mit wenig Öl 6 Minuten bräunen.",
      "Paprika und Zwiebel zugeben und 4 Minuten braten, dann Knoblauch, Chili und Sojasauce einrühren.",
      "Pfanne vom Herd ziehen, Basilikum unterheben und mit dem heißen Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      4,
      null
    ],
    "tip": "Basilikum erst nach dem Braten zugeben, damit es sein Aroma behält."
  },
  {
    "id": "ko-0283",
    "name": "Kokos-Limetten-Suppe mit Tofu",
    "emoji": "🍲",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "kokosmilch",
      "bruehe",
      "champignons",
      "paprika",
      "ingwer",
      "limette",
      "sojasauce",
      "koriander"
    ],
    "amounts": {
      "tofu": [
        400,
        "g"
      ],
      "kokosmilch": [
        500,
        "ml"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "champignons": [
        300,
        "g"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "ingwer": [
        25,
        "g"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "sojasauce": [
        3,
        "EL"
      ],
      "koriander": [
        15,
        "g"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 43,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja"
    ],
    "steps": [
      "Tofu würfeln, Champignons in Scheiben und Paprika in feine Streifen schneiden; Ingwer reiben.",
      "Brühe, Kokosmilch und Ingwer aufkochen und 5 Minuten sanft ziehen lassen.",
      "Champignons und Paprika zugeben und 8 Minuten köcheln.",
      "Tofu und Sojasauce einrühren und weitere 5 Minuten vollständig erhitzen.",
      "Topf vom Herd nehmen, Limettensaft und Koriander zugeben und final abschmecken."
    ],
    "stepTimers": [
      null,
      5,
      8,
      5,
      null
    ],
    "tip": "Limettensaft nicht lange mitkochen, sonst verliert er sein frisches Aroma."
  },
  {
    "id": "ko-0284",
    "name": "Gebratener Reis mit Garnelen",
    "emoji": "🍤",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "garnelen",
      "eier",
      "erbsen",
      "karotten",
      "zwiebeln",
      "sojasauce",
      "sesam"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "garnelen": [
        400,
        "g"
      ],
      "eier": [
        3,
        "Stück"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "karotten": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "schalentiere",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen und vollständig ausdampfen lassen.",
      "Ideal ist gut gekühlter Reis vom Vortag.",
      "Garnelen trocken tupfen und in einer sehr heißen Pfanne 2 bis 3 Minuten gar braten; herausnehmen.",
      "Zwiebel und klein gewürfelte Karotten 5 Minuten braten, Erbsen zugeben.",
      "Gemüse an den Rand schieben, Eier in der Mitte vollständig stocken lassen und anschließend den Reis unterrühren.",
      "Garnelen zurückgeben, mit Sojasauce durchschwenken, vollständig erhitzen und mit Sesam servieren."
    ],
    "stepTimers": [
      null,
      null,
      3,
      5,
      null,
      null
    ],
    "tip": "Gekochten Reis schnell abkühlen und gekühlt lagern; beim Braten vollständig durcherhitzen."
  },
  {
    "id": "ko-0285",
    "name": "Teriyaki-Tofu mit Brokkoli",
    "emoji": "🥦",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "brokkoli",
      "reis",
      "sojasauce",
      "zucker",
      "ingwer",
      "knoblauch",
      "sesam"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "brokkoli": [
        600,
        "g"
      ],
      "reis": [
        300,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "zucker": [
        30,
        "g"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Tofu pressen, würfeln und Brokkoli in Röschen teilen.",
      "Tofu in einer großen Pfanne rundherum knusprig braten und herausnehmen.",
      "Brokkoli mit 80 ml Wasser in die Pfanne geben, abdecken und 5 bis 6 Minuten bissfest dämpfen.",
      "Sojasauce, Zucker, geriebenen Ingwer und Knoblauch verrühren, mit Tofu zum Brokkoli geben und 3 Minuten glasieren.",
      "Mit Sesam bestreuen und zusammen mit dem Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      3,
      null
    ],
    "tip": "Die Sauce nach dem Eindicken nur noch sanft erhitzen, damit sie nicht am Pfannenboden ansetzt."
  },
  {
    "id": "ko-0286",
    "name": "Sesam-Hähnchen mit Reis",
    "emoji": "🍗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "reis",
      "paprika",
      "sojasauce",
      "honig",
      "knoblauch",
      "ingwer",
      "sesam"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "honig": [
        2,
        "EL"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "sesam": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Hähnchen und Paprika in gleichmäßige Stücke schneiden.",
      "Hähnchen in einer heißen Pfanne rundherum anbraten und vollständig durchgaren.",
      "Paprika zugeben und 5 Minuten bissfest braten.",
      "Sojasauce, Honig, Knoblauch und Ingwer verrühren, angießen und 3 bis 4 Minuten sirupartig einkochen.",
      "Sesam unterheben und das glasierte Hähnchen mit Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      4,
      null
    ],
    "tip": "Die Sauce enthält Zucker und kann schnell anbrennen; nach dem Angießen die Hitze reduzieren."
  },
  {
    "id": "ko-0287",
    "name": "Rindfleisch mit Brokkoli",
    "emoji": "🥩",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "brokkoli",
      "reis",
      "sojasauce",
      "knoblauch",
      "ingwer",
      "speisestaerke",
      "sesam"
    ],
    "amounts": {
      "rindfleisch": [
        600,
        "g"
      ],
      "brokkoli": [
        600,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "ingwer": [
        20,
        "g"
      ],
      "speisestaerke": [
        20,
        "g"
      ],
      "sesam": [
        1,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Rindfleisch quer zur Faser in sehr dünne Streifen schneiden.",
      "Fleisch mit zwei Esslöffeln Sojasauce und Speisestärke vermengen und 10 Minuten ziehen lassen.",
      "Brokkoli in einer heißen Pfanne mit wenig Wasser 5 Minuten bissfest dämpfen und herausnehmen.",
      "Fleisch portionsweise bei hoher Hitze kurz braten, anschließend Knoblauch und Ingwer zugeben.",
      "Brokkoli und übrige Sojasauce einrühren, 2 Minuten erhitzen und mit Sesam sowie Reis servieren."
    ],
    "stepTimers": [
      null,
      null,
      10,
      5,
      null,
      2
    ],
    "tip": "Fleisch portionsweise braten, damit die Pfanne heiß bleibt und es nicht im eigenen Saft kocht."
  },
  {
    "id": "ko-0288",
    "name": "Gemüse-Yakisoba",
    "emoji": "🍜",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "brokkoli",
      "karotten",
      "paprika",
      "zwiebeln",
      "sojasauce",
      "ingwer",
      "sesam"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "brokkoli": [
        300,
        "g"
      ],
      "karotten": [
        250,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "ingwer": [
        15,
        "g"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Nudeln knapp bissfest garen, kalt abschrecken und gut abtropfen lassen.",
      "Brokkoli klein teilen, Karotten und Paprika in dünne Streifen sowie Zwiebel in Spalten schneiden.",
      "Gemüse in einer großen heißen Pfanne in der Reihenfolge Brokkoli, Karotten, Paprika und Zwiebel insgesamt 8 Minuten braten.",
      "Nudeln, Sojasauce und geriebenen Ingwer zugeben und 4 Minuten kräftig durchschwenken.",
      "Mit Sesam bestreuen und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      8,
      4,
      null
    ],
    "tip": "Nudeln nur knapp vorgaren, da sie in der Pfanne noch weitergaren."
  },
  {
    "id": "ko-0289",
    "name": "Lachs-Sushi-Bowl",
    "emoji": "🍣",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "lachs",
      "avocado",
      "gurke",
      "karotten",
      "sojasauce",
      "essig",
      "sesam"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "lachs": [
        600,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "karotten": [
        200,
        "g"
      ],
      "sojasauce": [
        4,
        "EL"
      ],
      "essig": [
        3,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "soja",
      "fisch",
      "sesam"
    ],
    "steps": [
      "Reis gründlich waschen und nach Packungsangabe garen.",
      "Anschließend mit Essig und einer Prise Zucker würzen.",
      "Lachs trocken tupfen, in vier Portionen teilen und in einer beschichteten Pfanne vollständig beziehungsweise bis zum gewünschten sicheren Gargrad braten.",
      "Gurke, Karotten und Avocado in dünne Streifen oder Scheiben schneiden.",
      "Warmen Reis auf vier Schalen verteilen und das Gemüse darauf anordnen.",
      "Lachs auflegen, mit Sojasauce beträufeln und mit Sesam bestreuen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Dieses Rezept verwendet gegarten Lachs und ist dadurch für zu Hause einfacher und sicherer als roher Fisch."
  },
  {
    "id": "ko-0290",
    "name": "Bibimbap mit Rindfleisch",
    "emoji": "🍚",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "rindfleisch",
      "eier",
      "karotten",
      "spinat",
      "champignons",
      "sojasauce",
      "sesam"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "rindfleisch": [
        450,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "spinat": [
        300,
        "g"
      ],
      "champignons": [
        250,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "sesam": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "eier",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Rindfleisch in dünne Streifen und Gemüse getrennt vorbereiten.",
      "Fleisch mit zwei Esslöffeln Sojasauce marinieren und in einer sehr heißen Pfanne kurz kräftig braten.",
      "Karotten, Champignons und Spinat nacheinander in derselben Pfanne jeweils bissfest garen und getrennt halten.",
      "Vier Spiegeleier braten, bis das Eiweiß vollständig gestockt ist.",
      "Reis auf Schalen verteilen, Fleisch, Gemüse und Eier darauf anrichten und mit übriger Sojasauce sowie Sesam servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Die Komponenten einzeln garen; dadurch behalten sie Geschmack, Farbe und unterschiedliche Texturen."
  },
  {
    "id": "ko-0291",
    "name": "Koreanische Tofu-Bowl",
    "emoji": "🥢",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tofu",
      "reis",
      "gurke",
      "karotten",
      "spinat",
      "sojasauce",
      "chili",
      "sesam",
      "knoblauch"
    ],
    "amounts": {
      "tofu": [
        500,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "karotten": [
        250,
        "g"
      ],
      "spinat": [
        250,
        "g"
      ],
      "sojasauce": [
        5,
        "EL"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "sesam": [
        2,
        "EL"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "soja",
      "sesam"
    ],
    "steps": [
      "Reis nach Packungsangabe garen.",
      "Tofu pressen, würfeln und Gemüse vorbereiten.",
      "Tofu in einer heißen Pfanne rundherum knusprig braten.",
      "Sojasauce, fein gehackten Knoblauch, Chili und drei Esslöffel Wasser verrühren, zum Tofu geben und kurz glasieren.",
      "Spinat in der Pfanne zusammenfallen lassen.",
      "Gurke und Karotten roh in feine Streifen schneiden.",
      "Reis auf Schalen verteilen, alle Komponenten anrichten und mit Sesam bestreuen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Chili zunächst sparsam dosieren und die Schärfe am Ende anpassen."
  },
  {
    "id": "ko-0292",
    "name": "Bohnen-Tacos mit Avocado",
    "emoji": "🌮",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "bohnen",
      "avocado",
      "tomaten",
      "mais",
      "zwiebeln",
      "limette",
      "koriander",
      "paprikapulver"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "bohnen": [
        480,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "tomaten": [
        4,
        "Stück"
      ],
      "mais": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "koriander": [
        15,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 18,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 30,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Bohnen und Mais abspülen.",
      "Zwiebel und Tomaten klein würfeln.",
      "Zwiebel in wenig Öl anschwitzen, Bohnen, Mais und Paprikapulver zugeben und 6 Minuten erhitzen.",
      "Avocado mit dem Saft einer Limette, Salz und Pfeffer grob zerdrücken.",
      "Tortillas in einer trockenen Pfanne nacheinander erwärmen.",
      "Mit Bohnenmischung, Tomaten und Avocadocreme füllen und mit Koriander sowie übriger Limette servieren."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      null,
      null
    ],
    "tip": "Tortillas warm in ein sauberes Tuch einschlagen, damit sie weich und faltbar bleiben."
  },
  {
    "id": "ko-0293",
    "name": "Chicken Fajitas",
    "emoji": "🌯",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "haehnchen",
      "paprika",
      "zwiebeln",
      "limette",
      "joghurt",
      "paprikapulver",
      "kreuzkuemmel"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "haehnchen": [
        600,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "kreuzkuemmel": [
        1,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 18,
    "restMinutes": 0,
    "minutes": 38,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen, Paprika und Zwiebeln in gleichmäßige Streifen schneiden.",
      "Hähnchen mit Paprikapulver, Kreuzkümmel, Salz und dem Saft einer Limette vermengen.",
      "Fleisch in einer sehr heißen Pfanne portionsweise kräftig anbraten und vollständig durchgaren.",
      "Paprika und Zwiebeln in derselben Pfanne 6 bis 8 Minuten bissfest braten, dann das Fleisch untermischen.",
      "Tortillas erwärmen und mit Fajita-Mischung, Joghurt und Limettenspalten servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      null
    ],
    "tip": "Fleisch und Gemüse getrennt braten, damit beides Röstaromen bekommt und das Gemüse bissfest bleibt."
  },
  {
    "id": "ko-0294",
    "name": "Hähnchen-Quesadillas",
    "emoji": "🫓",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "haehnchen",
      "reibekaese",
      "paprika",
      "zwiebeln",
      "mais",
      "paprikapulver"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "haehnchen": [
        450,
        "g"
      ],
      "reibekaese": [
        250,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "mais": [
        180,
        "g"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 20,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Hähnchen, Paprika und Zwiebel klein würfeln.",
      "Mais abtropfen lassen.",
      "Hähnchen in einer Pfanne vollständig durchgaren, dann Gemüse und Paprikapulver zugeben und 5 Minuten braten.",
      "Vier Tortillas mit der Hälfte des Käses, der Füllung und dem übrigen Käse belegen.",
      "Restliche Tortillas auflegen.",
      "Quesadillas nacheinander in einer trockenen Pfanne bei mittlerer Hitze je Seite 3 bis 4 Minuten braten.",
      "Kurz ruhen lassen, in Stücke schneiden und heiß servieren."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      null,
      4,
      null
    ],
    "tip": "Mittlere Hitze verwenden, damit der Käse schmilzt, bevor die Tortilla zu dunkel wird."
  },
  {
    "id": "ko-0295",
    "name": "Bohnen-Enchiladas",
    "emoji": "🌯",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "bohnen",
      "mais",
      "dosentomaten",
      "reibekaese",
      "zwiebeln",
      "paprika",
      "paprikapulver"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "bohnen": [
        480,
        "g"
      ],
      "mais": [
        220,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "reibekaese": [
        250,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "paprika": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen.",
      "Bohnen und Mais abspülen und abtropfen lassen.",
      "Zwiebel und Paprika 6 Minuten anbraten, Bohnen, Mais und die Hälfte der Tomaten einrühren und würzen.",
      "Füllung auf Tortillas verteilen, eng aufrollen und mit der Naht nach unten in eine Form legen.",
      "Übrige Tomaten darübergeben und Käse gleichmäßig verteilen.",
      "25 bis 30 Minuten backen, bis die Sauce blubbert und der Käse goldbraun ist."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      null,
      30
    ],
    "tip": "Tortillas vor dem Rollen kurz erwärmen, damit sie nicht reißen."
  },
  {
    "id": "ko-0296",
    "name": "Mexikanische Reispfanne",
    "emoji": "🌶️",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "bohnen",
      "mais",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "bruehe",
      "paprikapulver",
      "chili"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "bohnen": [
        400,
        "g"
      ],
      "mais": [
        220,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "chili": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen und Mais abspülen.",
      "Paprika, Zwiebel und Chili klein schneiden.",
      "Zwiebel und Paprika in einer großen Pfanne 6 Minuten anbraten, Chili und Paprikapulver kurz mitrösten.",
      "Reis, Tomaten und Brühe einrühren und aufkochen.",
      "Abgedeckt bei kleiner Hitze 18 Minuten garen, dann Bohnen und Mais unterheben.",
      "Weitere 5 Minuten vollständig erhitzen, Reisgargrad prüfen und abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      18,
      5
    ],
    "tip": "Während der Reis gart nur selten umrühren, damit er nicht klebrig wird."
  },
  {
    "id": "ko-0297",
    "name": "Chili con Carne",
    "emoji": "🌶️",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "bohnen",
      "mais",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "chili",
      "kreuzkuemmel",
      "paprikapulver"
    ],
    "amounts": {
      "hackfleisch": [
        600,
        "g"
      ],
      "bohnen": [
        480,
        "g"
      ],
      "mais": [
        220,
        "g"
      ],
      "dosentomaten": [
        800,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "kreuzkuemmel": [
        2,
        "TL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 45,
    "restMinutes": 0,
    "minutes": 65,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Bohnen und Mais abspülen.",
      "Paprika, Zwiebeln, Knoblauch und Chili vorbereiten.",
      "Hackfleisch in einem großen Topf krümelig braten, bis es vollständig gebräunt ist.",
      "Zwiebeln und Paprika zugeben und 6 Minuten mitbraten.",
      "Knoblauch, Chili und Gewürze kurz einrühren.",
      "Tomaten und 250 ml Wasser zugeben und 25 Minuten offen sanft köcheln lassen.",
      "Bohnen und Mais einrühren, weitere 10 Minuten erhitzen und kräftig abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      null,
      25,
      10
    ],
    "tip": "Das Hackfleisch vollständig durchgaren und das Chili am nächsten Tag beim Aufwärmen einmal komplett durcherhitzen."
  },
  {
    "id": "ko-0298",
    "name": "Taco-Salat mit Hackfleisch",
    "emoji": "🥗",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "hackfleisch",
      "salat",
      "tomaten",
      "gurke",
      "mais",
      "bohnen",
      "avocado",
      "joghurt",
      "limette",
      "paprikapulver"
    ],
    "amounts": {
      "hackfleisch": [
        500,
        "g"
      ],
      "salat": [
        250,
        "g"
      ],
      "tomaten": [
        5,
        "Stück"
      ],
      "gurke": [
        1,
        "Stück"
      ],
      "mais": [
        200,
        "g"
      ],
      "bohnen": [
        300,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "limette": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Salat waschen und trocknen.",
      "Tomaten, Gurke und Avocado in mundgerechte Stücke schneiden.",
      "Bohnen und Mais abspülen und abtropfen lassen.",
      "Hackfleisch krümelig anbraten, mit Paprikapulver würzen und vollständig durchgaren.",
      "Joghurt mit Limettensaft, Salz und Pfeffer zu einem Dressing verrühren.",
      "Salat und Gemüse auf Schalen verteilen, heißes Hackfleisch daraufgeben und mit Dressing servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Dressing und heißes Fleisch erst unmittelbar vor dem Essen auf den Salat geben."
  },
  {
    "id": "ko-0299",
    "name": "Süßkartoffel-Bohnen-Tacos",
    "emoji": "🌮",
    "time": "normal",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "tortilla",
      "suesskartoffel",
      "bohnen",
      "avocado",
      "rotkohl",
      "limette",
      "paprikapulver",
      "olivenoel"
    ],
    "amounts": {
      "tortilla": [
        8,
        "Stück"
      ],
      "suesskartoffel": [
        700,
        "g"
      ],
      "bohnen": [
        400,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "rotkohl": [
        250,
        "g"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen.",
      "Süßkartoffeln in 2 cm große Würfel schneiden.",
      "Würfel mit Olivenöl, Paprikapulver und Salz mischen und 25 bis 30 Minuten rösten.",
      "Bohnen abspülen und in einem kleinen Topf vollständig erhitzen.",
      "Rotkohl fein schneiden.",
      "Avocado mit dem Saft einer Limette, Salz und Pfeffer grob zerdrücken.",
      "Tortillas erwärmen und mit Süßkartoffeln, Bohnen, Rotkohl und Avocadocreme füllen."
    ],
    "stepTimers": [
      null,
      null,
      30,
      null,
      null,
      null,
      null
    ],
    "tip": "Rotkohl kurz mit Limettensaft und Salz durchkneten; dadurch wird er zarter."
  },
  {
    "id": "ko-0300",
    "name": "Avocado-Limetten-Pasta",
    "emoji": "🥑",
    "time": "schnell",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "avocado",
      "limette",
      "knoblauch",
      "basilikum",
      "olivenoel",
      "tomaten"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "knoblauch": [
        1,
        "Zehe"
      ],
      "basilikum": [
        20,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "tomaten": [
        3,
        "Stück"
      ]
    },
    "prepMinutes": 12,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 24,
    "difficulty": "Einfach",
    "allergens": [
      "gluten"
    ],
    "steps": [
      "Nudeln bissfest kochen und 150 ml Kochwasser auffangen.",
      "Avocado, Limettensaft, Knoblauch, Basilikum und Olivenöl fein pürieren.",
      "Sauce mit Salz, Pfeffer und zunächst 60 ml Kochwasser cremig rühren.",
      "Nudeln vom Herd direkt mit der Avocadosauce vermengen.",
      "Die Sauce nur mit der heißen Pasta vermengen und nicht weiterkochen, damit die Avocado frisch und cremig bleibt.",
      "Tomaten würfeln, darübergeben und sofort servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Avocadosauce nicht erhitzen; dadurch bleibt sie frisch und verfärbt sich langsamer."
  },
  {
    "id": "ko-0301",
    "name": "Hähnchen-Jambalaya",
    "emoji": "🍗",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "reis",
      "paprika",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "chili",
      "paprikapulver",
      "olivenoel"
    ],
    "amounts": {
      "haehnchen": [
        500,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        700,
        "ml"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [],
    "steps": [
      "Hähnchen trocken tupfen, in 3 cm große Stücke schneiden und getrennt vom Gemüse bereithalten.",
      "Öl in einem weiten Topf erhitzen und das Hähnchen rundherum anbraten.",
      "Anschließend herausnehmen.",
      "Zwiebeln und Paprika 5 Minuten braten, dann Knoblauch, Chili und Paprikapulver kurz mitrösten.",
      "Reis, Tomaten und Brühe einrühren, aufkochen und zugedeckt 18 Minuten sanft garen.",
      "Hähnchen zurückgeben und weitere 8 bis 10 Minuten garen, bis Fleisch und Reis vollständig durch sind."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      18,
      10
    ],
    "tip": "Für gleichmäßig gegarten Reis während der Garzeit nur einmal vorsichtig umrühren."
  },
  {
    "id": "ko-0302",
    "name": "Garnelen-Paprika-Reis",
    "emoji": "🍤",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "garnelen",
      "reis",
      "paprika",
      "erbsen",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "zitrone",
      "olivenoel",
      "paprikapulver"
    ],
    "amounts": {
      "garnelen": [
        500,
        "g"
      ],
      "reis": [
        320,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "erbsen": [
        180,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        650,
        "ml"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "schalentiere"
    ],
    "steps": [
      "Zwiebel und Paprika würfeln.",
      "Garnelen trocken tupfen und bis zur Verwendung kalt stellen.",
      "Öl in einer großen Pfanne erhitzen, Zwiebel und Paprika darin 5 Minuten anbraten.",
      "Reis, Knoblauch und Paprikapulver kurz mitrösten, dann Brühe angießen.",
      "Zugedeckt 15 Minuten sanft garen, anschließend Erbsen unterheben.",
      "Garnelen auflegen und 4 bis 5 Minuten garen, bis sie vollständig rosa und im Kern nicht mehr glasig sind.",
      "Mit Zitrone abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      5,
      null,
      15,
      5,
      null
    ],
    "tip": "Aufgetaute Garnelen gut abtrocknen, damit das Gericht nicht verwässert."
  },
  {
    "id": "ko-0303",
    "name": "Pulled-Chicken-Wraps",
    "emoji": "🌯",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "tortilla",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "salat",
      "joghurt",
      "limette",
      "paprikapulver"
    ],
    "amounts": {
      "haehnchen": [
        600,
        "g"
      ],
      "tortilla": [
        8,
        "Stück"
      ],
      "dosentomaten": [
        400,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "salat": [
        180,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "limette": [
        1,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose"
    ],
    "steps": [
      "Zwiebel und Paprika in Streifen schneiden.",
      "Hähnchen trocken tupfen.",
      "Hähnchen in einem breiten Topf von beiden Seiten anbraten und kurz herausnehmen.",
      "Zwiebel und Paprika anbraten, Tomaten und Paprikapulver zugeben und das Hähnchen hineinlegen.",
      "Zugedeckt 25 Minuten sanft garen, bis das Hähnchen vollständig durch ist.",
      "Anschließend mit zwei Gabeln zerzupfen.",
      "Tortillas erwärmen, mit Salat, Pulled Chicken und dem mit Limette verrührten Joghurt füllen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      25,
      null,
      null
    ],
    "tip": "Die Füllung vor dem Einrollen kurz abtropfen lassen, damit die Wraps stabil bleiben."
  },
  {
    "id": "ko-0304",
    "name": "Hähnchen-Nudel-Suppe",
    "emoji": "🍜",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "haehnchen",
      "nudeln",
      "karotten",
      "sellerie",
      "lauch",
      "zwiebeln",
      "bruehe",
      "petersilie"
    ],
    "amounts": {
      "haehnchen": [
        500,
        "g"
      ],
      "nudeln": [
        250,
        "g"
      ],
      "karotten": [
        4,
        "Stück"
      ],
      "sellerie": [
        250,
        "g"
      ],
      "lauch": [
        1,
        "Stange"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "bruehe": [
        1500,
        "ml"
      ],
      "petersilie": [
        20,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "sellerie"
    ],
    "steps": [
      "Karotten, Sellerie, Lauch und Zwiebel putzen und in gleichmäßige kleine Stücke schneiden.",
      "Brühe aufkochen, Hähnchen hineinlegen und bei kleiner Hitze 18 bis 20 Minuten vollständig gar ziehen lassen.",
      "Hähnchen herausnehmen.",
      "Gemüse in die Brühe geben und 12 Minuten köcheln.",
      "Nudeln zugeben und nach Packungsangabe bissfest garen.",
      "Das Hähnchen währenddessen zerpflücken.",
      "Fleisch zurück in die Suppe geben, vollständig erhitzen und mit Petersilie, Salz und Pfeffer abschmecken."
    ],
    "stepTimers": [
      null,
      20,
      null,
      12,
      null,
      null,
      null
    ],
    "tip": "Nudeln für Reste separat kochen und erst beim Servieren zugeben; so quellen sie nicht auf."
  },
  {
    "id": "ko-0305",
    "name": "Rindfleisch-Gemüse-Eintopf",
    "emoji": "🥘",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "rindfleisch",
      "kartoffeln",
      "karotten",
      "sellerie",
      "zwiebeln",
      "tomatenmark",
      "bruehe",
      "thymian",
      "olivenoel"
    ],
    "amounts": {
      "rindfleisch": [
        700,
        "g"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "karotten": [
        4,
        "Stück"
      ],
      "sellerie": [
        250,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "tomatenmark": [
        2,
        "EL"
      ],
      "bruehe": [
        1000,
        "ml"
      ],
      "thymian": [
        2,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 100,
    "restMinutes": 0,
    "minutes": 125,
    "difficulty": "Mittel",
    "allergens": [
      "sellerie"
    ],
    "steps": [
      "Rindfleisch trocken tupfen und in 3 cm große Würfel schneiden.",
      "Gemüse ebenfalls würfeln.",
      "Öl in einem schweren Topf erhitzen und das Fleisch portionsweise kräftig anbraten.",
      "Zwiebeln, Karotten und Sellerie 6 Minuten braten.",
      "Tomatenmark kurz mitrösten.",
      "Fleisch, Brühe und Thymian zugeben und zugedeckt 70 Minuten leise schmoren.",
      "Kartoffeln einrühren und weitere 25 bis 30 Minuten garen, bis Fleisch und Kartoffeln weich sind."
    ],
    "stepTimers": [
      null,
      null,
      null,
      6,
      null,
      70,
      30
    ],
    "tip": "Das Fleisch wirklich portionsweise braten; bei zu voller Pfanne kocht es statt zu rösten."
  },
  {
    "id": "ko-0306",
    "name": "Veganes Kartoffelgulasch",
    "emoji": "🥔",
    "time": "aufwendig",
    "diet": "vegan",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "kartoffeln",
      "paprika",
      "dosentomaten",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "paprikapulver",
      "kuemmel",
      "olivenoel"
    ],
    "amounts": {
      "kartoffeln": [
        1000,
        "g"
      ],
      "paprika": [
        3,
        "Stück"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "zwiebeln": [
        2,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "bruehe": [
        600,
        "ml"
      ],
      "paprikapulver": [
        3,
        "TL"
      ],
      "kuemmel": [
        1,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 40,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Einfach",
    "allergens": [],
    "steps": [
      "Kartoffeln schälen und in 2 cm große Würfel schneiden.",
      "Paprika und Zwiebeln würfeln.",
      "Öl in einem Topf erhitzen und Zwiebeln sowie Paprika 6 Minuten anbraten.",
      "Knoblauch, Paprikapulver und Kümmel kurz einrühren, ohne das Paprikapulver zu verbrennen.",
      "Kartoffeln, Tomaten und Brühe zugeben und zugedeckt 30 Minuten sanft köcheln.",
      "Einige Kartoffelstücke am Topfrand zerdrücken, noch 5 Minuten offen einkochen und abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      6,
      null,
      30,
      5
    ],
    "tip": "Geräuchertes Paprikapulver gibt dem Gulasch auch ohne Fleisch eine kräftige Tiefe."
  },
  {
    "id": "ko-0307",
    "name": "Brokkoli-Pilz-Reis-Pfanne",
    "emoji": "🍄",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "reis",
      "brokkoli",
      "champignons",
      "zwiebeln",
      "knoblauch",
      "sahne",
      "bruehe",
      "parmesan",
      "olivenoel"
    ],
    "amounts": {
      "reis": [
        320,
        "g"
      ],
      "brokkoli": [
        500,
        "g"
      ],
      "champignons": [
        400,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ],
      "sahne": [
        200,
        "ml"
      ],
      "bruehe": [
        650,
        "ml"
      ],
      "parmesan": [
        60,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose"
    ],
    "steps": [
      "Brokkoli in kleine Röschen teilen, Pilze in Scheiben und Zwiebel in feine Würfel schneiden.",
      "Pilze in einer großen Pfanne mit einem Esslöffel Öl kräftig braten und herausnehmen.",
      "Restliches Öl, Zwiebel, Knoblauch und Reis in die Pfanne geben und 2 Minuten anschwitzen.",
      "Brühe angießen und 12 Minuten zugedeckt garen.",
      "Brokkoli zufügen und weitere 7 Minuten garen.",
      "Pilze, Sahne und Parmesan unterheben, vollständig erhitzen und cremig abschmecken."
    ],
    "stepTimers": [
      null,
      null,
      2,
      12,
      7,
      null
    ],
    "tip": "Pilze erst am Ende zurückgeben, damit sie gebräunt und bissfest bleiben."
  },
  {
    "id": "ko-0308",
    "name": "Schweinefleisch in Senfrahm",
    "emoji": "🍖",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "schweinefleisch",
      "champignons",
      "zwiebeln",
      "sahne",
      "bruehe",
      "senf",
      "nudeln",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "schweinefleisch": [
        650,
        "g"
      ],
      "champignons": [
        350,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "sahne": [
        250,
        "ml"
      ],
      "bruehe": [
        250,
        "ml"
      ],
      "senf": [
        3,
        "EL"
      ],
      "nudeln": [
        350,
        "g"
      ],
      "olivenoel": [
        2,
        "EL"
      ],
      "petersilie": [
        15,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "senf"
    ],
    "steps": [
      "Fleisch in 1 cm dicke Streifen, Pilze in Scheiben und Zwiebel in Würfel schneiden.",
      "Nudeln nach Packungsangabe bissfest kochen und abgießen.",
      "Fleisch portionsweise in heißem Öl braten, bis es vollständig durchgegart ist; herausnehmen.",
      "Zwiebel und Pilze kräftig braten, mit Brühe ablöschen und Sahne sowie Senf einrühren.",
      "Sauce 5 Minuten einkochen, Fleisch darin nochmals vollständig erhitzen und mit Nudeln und Petersilie servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      5
    ],
    "tip": "Senf erst nach der Brühe einrühren; bei sehr starker Hitze kann er bitter werden."
  },
  {
    "id": "ko-0309",
    "name": "Mediterraner Fischeintopf",
    "emoji": "🐟",
    "time": "aufwendig",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "fisch",
      "kartoffeln",
      "dosentomaten",
      "paprika",
      "zwiebeln",
      "knoblauch",
      "bruehe",
      "zitrone",
      "olivenoel",
      "petersilie"
    ],
    "amounts": {
      "fisch": [
        700,
        "g"
      ],
      "kartoffeln": [
        600,
        "g"
      ],
      "dosentomaten": [
        600,
        "g"
      ],
      "paprika": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        3,
        "Zehen"
      ],
      "bruehe": [
        500,
        "ml"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "olivenoel": [
        3,
        "EL"
      ],
      "petersilie": [
        20,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 35,
    "restMinutes": 0,
    "minutes": 60,
    "difficulty": "Mittel",
    "allergens": [
      "fisch"
    ],
    "steps": [
      "Fisch trocken tupfen, auf Gräten prüfen und in große Stücke schneiden.",
      "Bis zur Verwendung kalt stellen.",
      "Kartoffeln, Paprika und Zwiebel würfeln.",
      "Zwiebel und Paprika im Öl 5 Minuten anschwitzen.",
      "Knoblauch, Kartoffeln, Tomaten und Brühe zugeben und 22 Minuten sanft köcheln.",
      "Fischstücke vorsichtig einlegen und je nach Dicke 6 bis 8 Minuten gar ziehen lassen, bis sie innen nicht mehr glasig sind.",
      "Mit Zitronensaft, Petersilie, Salz und Pfeffer abschmecken und behutsam servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      22,
      8,
      null
    ],
    "tip": "Nach Zugabe des Fisches nicht kräftig rühren, damit die Stücke nicht zerfallen."
  },
  {
    "id": "ko-0310",
    "name": "Thunfisch-Nudel-Auflauf",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "nudeln",
      "thunfisch",
      "erbsen",
      "dosentomaten",
      "sahne",
      "mozzarella",
      "zwiebeln",
      "knoblauch"
    ],
    "amounts": {
      "nudeln": [
        400,
        "g"
      ],
      "thunfisch": [
        300,
        "g"
      ],
      "erbsen": [
        200,
        "g"
      ],
      "dosentomaten": [
        500,
        "g"
      ],
      "sahne": [
        150,
        "ml"
      ],
      "mozzarella": [
        200,
        "g"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "knoblauch": [
        2,
        "Zehen"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen und eine Auflaufform bereitstellen.",
      "Nudeln 3 Minuten kürzer als auf der Packung angegeben kochen und abgießen.",
      "Zwiebel und Knoblauch anschwitzen, Tomaten und Sahne zugeben und 5 Minuten köcheln.",
      "Nudeln, abgetropften Thunfisch und Erbsen mit der Sauce mischen und in die Form geben.",
      "Mit Mozzarella belegen und 20 bis 25 Minuten backen, bis der Auflauf blubbert und goldbraun ist."
    ],
    "stepTimers": [
      null,
      3,
      5,
      null,
      25
    ],
    "tip": "Die Nudeln bewusst knapp vorgaren, weil sie im Ofen noch Flüssigkeit aufnehmen."
  },
  {
    "id": "ko-0311",
    "name": "Fisch-Tacos mit Avocado",
    "emoji": "🌮",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "fisch",
      "tortilla",
      "avocado",
      "rotkohl",
      "joghurt",
      "limette",
      "paprikapulver",
      "olivenoel"
    ],
    "amounts": {
      "fisch": [
        600,
        "g"
      ],
      "tortilla": [
        8,
        "Stück"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "rotkohl": [
        250,
        "g"
      ],
      "joghurt": [
        180,
        "g"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "paprikapulver": [
        2,
        "TL"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 15,
    "restMinutes": 0,
    "minutes": 35,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "fisch"
    ],
    "steps": [
      "Fisch trocken tupfen, auf Gräten prüfen und in breite Streifen schneiden.",
      "Rotkohl fein schneiden und mit Saft einer Limette und einer Prise Salz 2 Minuten durchkneten.",
      "Fisch mit Paprikapulver würzen und im heißen Öl je Seite 2 bis 3 Minuten vollständig garen.",
      "Avocado in Scheiben schneiden und Joghurt mit dem Saft der zweiten Limette verrühren.",
      "Tortillas erwärmen und mit Rotkohl, Fisch, Avocado und Limettenjoghurt füllen."
    ],
    "stepTimers": [
      null,
      2,
      3,
      null,
      null
    ],
    "tip": "Den Fisch erst direkt vor dem Braten salzen, damit er saftig bleibt."
  },
  {
    "id": "ko-0312",
    "name": "Garnelen-Tacos mit Limette",
    "emoji": "🌮",
    "time": "schnell",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "garnelen",
      "tortilla",
      "rotkohl",
      "avocado",
      "tomaten",
      "limette",
      "joghurt",
      "chili",
      "olivenoel"
    ],
    "amounts": {
      "garnelen": [
        500,
        "g"
      ],
      "tortilla": [
        8,
        "Stück"
      ],
      "rotkohl": [
        220,
        "g"
      ],
      "avocado": [
        2,
        "Stück"
      ],
      "tomaten": [
        3,
        "Stück"
      ],
      "limette": [
        2,
        "Stück"
      ],
      "joghurt": [
        150,
        "g"
      ],
      "chili": [
        1,
        "Stück"
      ],
      "olivenoel": [
        2,
        "EL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "schalentiere"
    ],
    "steps": [
      "Garnelen trocken tupfen.",
      "Rotkohl fein schneiden und Tomaten sowie Avocado würfeln.",
      "Rotkohl mit etwas Limettensaft und Salz kräftig durchkneten.",
      "Garnelen mit Chili im heißen Öl 4 bis 5 Minuten braten, bis sie vollständig rosa und nicht mehr glasig sind.",
      "Joghurt mit restlichem Limettensaft, Salz und Pfeffer verrühren.",
      "Tortillas kurz erwärmen.",
      "Tortillas mit Kohl, Tomaten, Avocado und Garnelen füllen und mit Limettenjoghurt beträufeln."
    ],
    "stepTimers": [
      null,
      null,
      null,
      5,
      null,
      null,
      null
    ],
    "tip": "Garnelen nur so lange wie nötig garen; zu lange gebraten werden sie zäh."
  },
  {
    "id": "ko-0313",
    "name": "Lachs-Kartoffel-Taler",
    "emoji": "🐟",
    "time": "normal",
    "diet": "alles",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "lachs",
      "kartoffeln",
      "eier",
      "paniermehl",
      "fruehlingszwiebeln",
      "zitrone",
      "joghurt",
      "dill",
      "olivenoel"
    ],
    "amounts": {
      "lachs": [
        450,
        "g"
      ],
      "kartoffeln": [
        700,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "paniermehl": [
        100,
        "g"
      ],
      "fruehlingszwiebeln": [
        3,
        "Stück"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "dill": [
        15,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "fisch"
    ],
    "steps": [
      "Kartoffeln schälen, würfeln und in Salzwasser weich kochen.",
      "Abgießen und ausdampfen lassen.",
      "Lachs im Dampf oder in einer Pfanne vollständig garen, abkühlen lassen und sorgfältig zerpflücken.",
      "Kartoffeln stampfen und mit Lachs, Ei, Frühlingszwiebeln und der Hälfte der Brösel mischen.",
      "Acht Taler formen, in restlichen Bröseln wenden und im Öl je Seite 4 bis 5 Minuten goldbraun braten.",
      "Joghurt mit Dill und Zitronensaft verrühren und zu den heißen Talern servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      5,
      null
    ],
    "tip": "Die Masse vor dem Formen 10 Minuten abkühlen lassen; dann hält sie besser zusammen."
  },
  {
    "id": "ko-0314",
    "name": "Linsenbratlinge mit Joghurt-Dip",
    "emoji": "🫘",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "herzhaft",
    "premium": true,
    "ingredients": [
      "linsen",
      "karotten",
      "zwiebeln",
      "eier",
      "paniermehl",
      "joghurt",
      "zitrone",
      "petersilie",
      "olivenoel"
    ],
    "amounts": {
      "linsen": [
        250,
        "g"
      ],
      "karotten": [
        2,
        "Stück"
      ],
      "zwiebeln": [
        1,
        "Stück"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "paniermehl": [
        100,
        "g"
      ],
      "joghurt": [
        250,
        "g"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "petersilie": [
        20,
        "g"
      ],
      "olivenoel": [
        3,
        "EL"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 30,
    "restMinutes": 0,
    "minutes": 55,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Linsen nach Packungsangabe weich garen, sehr gut abtropfen und vollständig ausdampfen lassen.",
      "Karotten fein raspeln, Zwiebel würfeln und beides 5 Minuten in wenig Öl anschwitzen.",
      "Linsen grob zerdrücken und mit Gemüse, Eiern, Bröseln und der Hälfte der Petersilie mischen.",
      "Acht Bratlinge formen und im restlichen Öl je Seite etwa 4 Minuten goldbraun braten.",
      "Joghurt mit Zitronensaft und übriger Petersilie verrühren, würzen und dazu servieren."
    ],
    "stepTimers": [
      null,
      5,
      null,
      4,
      null
    ],
    "tip": "Ist die Masse zu weich, esslöffelweise zusätzliche Brösel einarbeiten."
  },
  {
    "id": "ko-0315",
    "name": "Zitronen-Ricotta-Kuchen",
    "emoji": "🍋",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "ricotta",
      "zucker",
      "eier",
      "butter",
      "zitrone",
      "backpulver",
      "vanillezucker"
    ],
    "amounts": {
      "mehl": [
        250,
        "g"
      ],
      "ricotta": [
        500,
        "g"
      ],
      "zucker": [
        180,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "butter": [
        120,
        "g"
      ],
      "zitrone": [
        2,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Butter und Zucker cremig rühren, Eier einzeln gründlich einarbeiten.",
      "Ricotta, fein abgeriebene Zitronenschale und 3 Esslöffel Zitronensaft glatt unterrühren.",
      "Mehl, Backpulver und Vanillezucker kurz unterheben und den Teig in die Form füllen.",
      "50 bis 55 Minuten backen.",
      "Stäbchenprobe machen und den Kuchen vor dem Anschneiden vollständig auskühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      55,
      null
    ],
    "tip": "Zutaten auf Zimmertemperatur verarbeiten, damit die Ricottamasse gleichmäßig wird."
  },
  {
    "id": "ko-0316",
    "name": "Schoko-Birnen-Kuchen",
    "emoji": "🍐",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "birne",
      "schokolade",
      "butter",
      "zucker",
      "eier",
      "kakao",
      "backpulver",
      "milch"
    ],
    "amounts": {
      "mehl": [
        260,
        "g"
      ],
      "birne": [
        4,
        "Stück"
      ],
      "schokolade": [
        180,
        "g"
      ],
      "butter": [
        160,
        "g"
      ],
      "zucker": [
        160,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "kakao": [
        35,
        "g"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "milch": [
        100,
        "ml"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 75,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Birnen schälen, entkernen und in schmale Spalten schneiden.",
      "Schokolade grob hacken.",
      "Butter und Zucker cremig rühren, Eier nacheinander einarbeiten und Milch unterrühren.",
      "Mehl, Kakao und Backpulver kurz unterheben.",
      "Schokolade einarbeiten und Teig in die Form geben.",
      "Birnen auflegen, 45 bis 50 Minuten backen und nach einer Stäbchenprobe auskühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null,
      50
    ],
    "tip": "Sehr saftige Birnen kurz trocken tupfen, damit der Teig in ihrer Nähe nicht klitschig bleibt."
  },
  {
    "id": "ko-0317",
    "name": "Apfel-Zimt-Muffins",
    "emoji": "🧁",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "apfel",
      "zucker",
      "eier",
      "butter",
      "milch",
      "backpulver",
      "zimt"
    ],
    "amounts": {
      "mehl": [
        300,
        "g"
      ],
      "apfel": [
        3,
        "Stück"
      ],
      "zucker": [
        130,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "butter": [
        120,
        "g"
      ],
      "milch": [
        180,
        "ml"
      ],
      "backpulver": [
        3,
        "TL"
      ],
      "zimt": [
        2,
        "TL"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 45,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und zwölf Muffinförmchen bereitstellen.",
      "Äpfel schälen, entkernen und in kleine Würfel schneiden.",
      "Mehl, Backpulver, Zucker und Zimt in einer Schüssel gründlich mischen.",
      "Eier, geschmolzene Butter und Milch verrühren und nur kurz unter die trockenen Zutaten ziehen; Äpfel unterheben.",
      "Teig verteilen und 22 bis 25 Minuten backen.",
      "Mit einem Holzstäbchen prüfen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      25,
      null
    ],
    "tip": "Muffinteig nur so lange rühren, bis kein trockenes Mehl mehr sichtbar ist."
  },
  {
    "id": "ko-0318",
    "name": "Bananen-Schoko-Muffins",
    "emoji": "🍌",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "banane",
      "schokolade",
      "zucker",
      "eier",
      "butter",
      "milch",
      "backpulver"
    ],
    "amounts": {
      "mehl": [
        280,
        "g"
      ],
      "banane": [
        3,
        "Stück"
      ],
      "schokolade": [
        150,
        "g"
      ],
      "zucker": [
        100,
        "g"
      ],
      "eier": [
        2,
        "Stück"
      ],
      "butter": [
        100,
        "g"
      ],
      "milch": [
        120,
        "ml"
      ],
      "backpulver": [
        3,
        "TL"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 24,
    "restMinutes": 0,
    "minutes": 39,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und zwölf Muffinförmchen bereitstellen.",
      "Bananen fein zerdrücken und Schokolade grob hacken.",
      "Eier, Zucker, geschmolzene Butter, Milch und Bananenpüree verrühren.",
      "Mehl und Backpulver kurz unterheben, anschließend zwei Drittel der Schokolade einarbeiten.",
      "Teig verteilen, übrige Schokolade aufstreuen und 21 bis 24 Minuten backen.",
      "Stäbchenprobe machen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      24,
      null
    ],
    "tip": "Sehr reife Bananen liefern mehr Süße und ein kräftigeres Aroma."
  },
  {
    "id": "ko-0319",
    "name": "Ofenpfannkuchen mit Beeren",
    "emoji": "🫐",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "milch",
      "eier",
      "butter",
      "beeren",
      "zucker",
      "vanillezucker",
      "zitrone"
    ],
    "amounts": {
      "mehl": [
        180,
        "g"
      ],
      "milch": [
        350,
        "ml"
      ],
      "eier": [
        5,
        "Stück"
      ],
      "butter": [
        40,
        "g"
      ],
      "beeren": [
        300,
        "g"
      ],
      "zucker": [
        50,
        "g"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 40,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen mit einer großen ofenfesten Form auf 220 °C Ober-/Unterhitze vorheizen.",
      "Eier, Milch, Mehl, Zucker, Vanillezucker und fein abgeriebene Zitronenschale glatt verrühren.",
      "Heiße Form vorsichtig herausnehmen, Butter darin schmelzen und durch Schwenken verteilen.",
      "Teig eingießen, Beeren darauf verteilen und die Form sofort zurück in den Ofen stellen.",
      "20 bis 25 Minuten backen, bis der Rand hoch aufgegangen und goldbraun ist; direkt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      25
    ],
    "tip": "Während der ersten 18 Minuten die Ofentür geschlossen lassen, damit der Pfannkuchen aufgeht."
  },
  {
    "id": "ko-0320",
    "name": "Quarkauflauf mit Beeren",
    "emoji": "🍓",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "quark",
      "beeren",
      "eier",
      "zucker",
      "speisestaerke",
      "vanillezucker",
      "zitrone",
      "butter"
    ],
    "amounts": {
      "quark": [
        750,
        "g"
      ],
      "beeren": [
        350,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "zucker": [
        120,
        "g"
      ],
      "speisestaerke": [
        50,
        "g"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "butter": [
        15,
        "g"
      ]
    },
    "prepMinutes": 20,
    "cookMinutes": 50,
    "restMinutes": 0,
    "minutes": 70,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Auflaufform mit Butter fetten.",
      "Eier trennen und Eiweiß mit einer kleinen Prise Salz steif schlagen.",
      "Quark, Eigelb, Zucker, Stärke, Vanillezucker und Zitronenschale glatt rühren.",
      "Eischnee vorsichtig unterheben, Masse in die Form geben und Beeren darauf verteilen.",
      "45 bis 50 Minuten backen, anschließend 15 Minuten ruhen lassen und warm oder kalt servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      50
    ],
    "tip": "Tiefgekühlte Beeren unaufgetaut verwenden, damit sie weniger Saft abgeben."
  },
  {
    "id": "ko-0321",
    "name": "Mango-Joghurt-Creme",
    "emoji": "🥭",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mango",
      "joghurt",
      "quark",
      "honig",
      "limette",
      "mandeln",
      "vanillezucker"
    ],
    "amounts": {
      "mango": [
        2,
        "Stück"
      ],
      "joghurt": [
        500,
        "g"
      ],
      "quark": [
        250,
        "g"
      ],
      "honig": [
        3,
        "EL"
      ],
      "limette": [
        1,
        "Stück"
      ],
      "mandeln": [
        60,
        "g"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 5,
    "restMinutes": 0,
    "minutes": 20,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Mandeln in einer trockenen Pfanne goldbraun rösten und auf einem Teller abkühlen lassen.",
      "Mangos schälen, Fruchtfleisch vom Stein schneiden und die Hälfte fein pürieren.",
      "Joghurt, Quark, Honig, Vanillezucker und Limettensaft glatt verrühren.",
      "Mango-Püree nur grob unterziehen, sodass eine Marmorierung entsteht.",
      "Übrige Mango würfeln.",
      "Creme auf vier Gläser verteilen und mit Mangowürfeln sowie Mandeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "tip": "Für eine festere Creme den Joghurt zehn Minuten in einem feinen Sieb abtropfen lassen."
  },
  {
    "id": "ko-0322",
    "name": "Mandel-Apfel-Kuchen",
    "emoji": "🍎",
    "time": "aufwendig",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "apfel",
      "mandeln",
      "mehl",
      "butter",
      "zucker",
      "eier",
      "backpulver",
      "zimt",
      "zitrone"
    ],
    "amounts": {
      "apfel": [
        5,
        "Stück"
      ],
      "mandeln": [
        180,
        "g"
      ],
      "mehl": [
        220,
        "g"
      ],
      "butter": [
        160,
        "g"
      ],
      "zucker": [
        150,
        "g"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "backpulver": [
        2,
        "TL"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "zitrone": [
        1,
        "Stück"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 55,
    "restMinutes": 0,
    "minutes": 80,
    "difficulty": "Einfach",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier",
      "nuesse"
    ],
    "steps": [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Äpfel schälen, vierteln, entkernen und auf der gewölbten Seite mehrfach einschneiden.",
      "Butter und Zucker cremig rühren, Eier einzeln einarbeiten und Zitronenschale zugeben.",
      "Mehl, Backpulver, Zimt und 120 g Mandeln kurz unterheben.",
      "Teig in die Form geben und Äpfel auflegen.",
      "Übrige Mandeln aufstreuen und 50 bis 55 Minuten backen.",
      "Stäbchenprobe machen und auskühlen lassen."
    ],
    "stepTimers": [
      null,
      null,
      null,
      null,
      null,
      55,
      null
    ],
    "tip": "Die Apfelviertel nur leicht in den Teig drücken, damit der Kuchen gut aufgehen kann."
  },
  {
    "id": "ko-0323",
    "name": "Schoko-Crêpe-Röllchen",
    "emoji": "🍫",
    "time": "normal",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "mehl",
      "milch",
      "eier",
      "kakao",
      "zucker",
      "butter",
      "quark",
      "schokolade",
      "beeren"
    ],
    "amounts": {
      "mehl": [
        220,
        "g"
      ],
      "milch": [
        500,
        "ml"
      ],
      "eier": [
        4,
        "Stück"
      ],
      "kakao": [
        25,
        "g"
      ],
      "zucker": [
        50,
        "g"
      ],
      "butter": [
        40,
        "g"
      ],
      "quark": [
        300,
        "g"
      ],
      "schokolade": [
        100,
        "g"
      ],
      "beeren": [
        200,
        "g"
      ]
    },
    "prepMinutes": 25,
    "cookMinutes": 25,
    "restMinutes": 0,
    "minutes": 50,
    "difficulty": "Mittel",
    "allergens": [
      "gluten",
      "milch",
      "laktose",
      "eier"
    ],
    "steps": [
      "Mehl, Kakao, Zucker und eine Prise Salz mischen.",
      "Eier und Milch nach und nach glatt einrühren.",
      "Teig 10 Minuten ruhen lassen und die Schokolade währenddessen fein hacken.",
      "Aus dem Teig in wenig Butter acht dünne Crêpes backen und kurz abkühlen lassen.",
      "Quark mit der Hälfte der Schokolade verrühren und dünn auf den Crêpes verteilen.",
      "Beeren auflegen, Crêpes eng einrollen und mit der übrigen Schokolade bestreut servieren."
    ],
    "stepTimers": [
      null,
      null,
      10,
      null,
      null,
      null
    ],
    "tip": "Die Crêpes nur lauwarm füllen, damit die Quarkcreme nicht flüssig wird."
  },
  {
    "id": "ko-0324",
    "name": "Karamellisierte Äpfel mit Vanillequark",
    "emoji": "🍏",
    "time": "schnell",
    "diet": "vegetarisch",
    "type": "süß",
    "premium": true,
    "ingredients": [
      "apfel",
      "quark",
      "joghurt",
      "zucker",
      "butter",
      "zimt",
      "vanillezucker",
      "zitrone",
      "mandeln"
    ],
    "amounts": {
      "apfel": [
        4,
        "Stück"
      ],
      "quark": [
        500,
        "g"
      ],
      "joghurt": [
        200,
        "g"
      ],
      "zucker": [
        70,
        "g"
      ],
      "butter": [
        30,
        "g"
      ],
      "zimt": [
        1,
        "TL"
      ],
      "vanillezucker": [
        1,
        "Päckchen"
      ],
      "zitrone": [
        1,
        "Stück"
      ],
      "mandeln": [
        50,
        "g"
      ]
    },
    "prepMinutes": 15,
    "cookMinutes": 12,
    "restMinutes": 0,
    "minutes": 27,
    "difficulty": "Einfach",
    "allergens": [
      "milch",
      "laktose",
      "nuesse"
    ],
    "steps": [
      "Äpfel vierteln, entkernen und in schmale Spalten schneiden.",
      "Mandeln grob hacken.",
      "Mandeln in einer trockenen Pfanne rösten und auf einem Teller abkühlen lassen.",
      "Butter und 40 g Zucker in der Pfanne schmelzen, Äpfel zugeben und 6 bis 8 Minuten karamellisieren.",
      "Quark, Joghurt, restlichen Zucker, Vanillezucker und Zitronensaft glatt rühren.",
      "Vanillequark auf Schalen verteilen und mit warmen Zimtäpfeln sowie Mandeln servieren."
    ],
    "stepTimers": [
      null,
      null,
      null,
      8,
      null,
      null
    ],
    "tip": "Die Äpfel nicht zu dünn schneiden, damit sie beim Karamellisieren ihre Form behalten."
  }
];

export const dishes = [...baseDishes, ...additionalRecipes025];
