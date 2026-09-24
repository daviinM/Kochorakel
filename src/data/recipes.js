import { newRecipes021 } from "./new-recipes-0.2.1.js";
import { curatedRecipes022 } from "./curated-recipes-0.2.2.js";

export const dishes = [
  { name: "Spaghetti Aglio e Olio", emoji: "🍝", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["nudeln","knoblauch","olivenoel","chili"] },
  { name: "Rührei mit Speck", emoji: "🍳", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["eier","speck","butter"] },
  { name: "Caprese-Salat", emoji: "🍅", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["tomaten","mozzarella","basilikum","olivenoel"] },
  { name: "Toast Hawaii", emoji: "🍍", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["toast","schinken","ananas","reibekaese"] },
  { name: "Pfannkuchen", emoji: "🥞", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["mehl","eier","milch","zucker"] },
  { name: "Quesadillas", emoji: "🫓", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["tortilla","reibekaese","paprika","zwiebeln"] },
  { name: "Gemüse-Omelett", emoji: "🥚", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["eier","paprika","zwiebeln","champignons"] },
  { name: "Couscous-Salat", emoji: "🌾", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["couscous","tomaten","gurke","zitrone","olivenoel"] },
  { name: "Avocado-Toast", emoji: "🥑", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["toast","avocado","zitrone","chili"] },
  { name: "Nudeln mit Pesto", emoji: "🍝", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["nudeln","pesto","reibekaese"] },
  { name: "Waffeln", emoji: "🧇", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["mehl","eier","milch","butter","zucker"] },
  { name: "Schokopudding", emoji: "🍫", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["milch","schokolade","zucker"] },
  { name: "Bruschetta", emoji: "🍞", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["toast","tomaten","knoblauch","basilikum","olivenoel"] },
  { name: "Griechischer Salat", emoji: "🥗", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["tomaten","gurke","feta","olivenoel"] },
  { name: "Tomatensuppe", emoji: "🍅", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["dosentomaten","zwiebeln","sahne","basilikum"] },
  { name: "Burrito Bowl", emoji: "🌯", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["reis","kichererbsen","avocado","paprika","zitrone"] },
  { name: "Pancakes (fluffig)", emoji: "🥞", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["mehl","eier","milch","honig"] },
  { name: "Kartoffelsuppe", emoji: "🥔", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["kartoffeln","zwiebeln","bruehe","sahne"] },
  { name: "Chili sin Carne", emoji: "🌶️", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["dosentomaten","kichererbsen","paprika","zwiebeln","chili"] },
  { name: "Currywurst mit Pommes", emoji: "🌭", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["wurst","dosentomaten","currypulver","kartoffeln"] },
  { name: "Gemüsecurry mit Reis", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["reis","kokosmilch","currypulver","paprika","zucchini"] },
  { name: "Spaghetti Bolognese", emoji: "🍝", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["nudeln","hackfleisch","dosentomaten","zwiebeln","knoblauch"] },
  { name: "Falafel mit Hummus", emoji: "🧆", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["kichererbsen","knoblauch","zitrone","petersilie"] },
  { name: "Hähnchen-Gemüse-Pfanne", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","paprika","zucchini","zwiebeln"] },
  { name: "Kürbissuppe", emoji: "🎃", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["kuerbis","zwiebeln","bruehe","kokosmilch"] },
  { name: "Risotto mit Pilzen", emoji: "🍚", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","champignons","zwiebeln","reibekaese","bruehe"] },
  { name: "Flammkuchen", emoji: "🫓", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["mehl","sahne","zwiebeln","speck"] },
  { name: "Shakshuka", emoji: "🍳", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["eier","dosentomaten","paprika","zwiebeln","chili"] },
  { name: "Linsensuppe", emoji: "🍲", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["linsen","karotten","zwiebeln","bruehe"] },
  { name: "Käsespätzle", emoji: "🧀", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","eier","reibekaese","zwiebeln"] },
  { name: "Fischstäbchen mit Kartoffelsalat", emoji: "🐟", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["fisch","kartoffeln","essig","zwiebeln"] },
  { name: "Milchreis", emoji: "🍚", time: "normal", diet: "vegetarisch", type: "süß", ingredients: ["reis","milch","zucker","zimt"] },
  { name: "Caesar Salad", emoji: "🥗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["salat","haehnchen","reibekaese","toast"] },
  { name: "Thai-Curry mit Tofu", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["tofu","kokosmilch","currypulver","paprika","zucchini"] },
  { name: "Kartoffelgratin", emoji: "🥔", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["kartoffeln","sahne","reibekaese","knoblauch"] },
  { name: "Gebackene Süßkartoffel", emoji: "🍠", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["suesskartoffel","kichererbsen","avocado","zitrone"] },
  { name: "Chicken Tikka Masala", emoji: "🍛", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","dosentomaten","sahne","currypulver","zwiebeln"] },
  { name: "Bibimbap", emoji: "🍚", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","eier","karotten","spinat","sojasauce"] },
  { name: "Minestrone", emoji: "🍲", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["dosentomaten","karotten","zucchini","nudeln","bruehe"] },
  { name: "Ofengemüse mit Feta", emoji: "🍆", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["aubergine","zucchini","paprika","feta","olivenoel"] },
  { name: "Döner-Bowl", emoji: "🥙", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","salat","tomaten","gurke","joghurt"] },
  { name: "Kürbis-Gnocchi-Pfanne", emoji: "🎃", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["gnocchi","kuerbis","butter","reibekaese"] },
  { name: "Vegane Bolognese", emoji: "🍝", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["nudeln","linsen","dosentomaten","zwiebeln","knoblauch"] },
  { name: "Rinderbraten mit Klößen", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","kartoffeln","karotten","zwiebeln"] },
  { name: "Lasagne", emoji: "🥘", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["nudeln","hackfleisch","dosentomaten","reibekaese","sahne"] },
  { name: "Schweinebraten", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","kartoffeln","zwiebeln","bruehe"] },
  { name: "Paella", emoji: "🥘", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["reis","haehnchen","fisch","paprika","zwiebeln"] },
  { name: "Selbstgemachte Pizza", emoji: "🍕", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","tomaten","reibekaese","basilikum","olivenoel"] },
  { name: "Gulasch", emoji: "🍲", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","zwiebeln","paprikapulver","bruehe"] },
  { name: "Ramen from scratch", emoji: "🍜", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["nudeln","eier","sojasauce","champignons","zwiebeln"] },
  { name: "Kürbisrisotto mit Salbeibutter", emoji: "🎃", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","kuerbis","butter","reibekaese"] },
  { name: "Apfelkuchen", emoji: "🥧", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","apfel","zucker","butter","zimt"] },
  { name: "Bananenbrot", emoji: "🍌", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","banane","zucker","butter","eier"] },
  { name: "Zimtschnecken", emoji: "🌀", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","zimt","butter","zucker","milch"] },
  { name: "Enchiladas", emoji: "🌯", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["tortilla","hackfleisch","dosentomaten","reibekaese","zwiebeln"] },
  { name: "Pad Thai", emoji: "🍜", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["nudeln","tofu","karotten","erdnuesse","sojasauce"], premium: true },
  { name: "Katsu Curry", emoji: "🍛", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","currypulver","reis","karotten"], premium: true },
  { name: "Butter Chicken", emoji: "🍛", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","dosentomaten","sahne","currypulver","knoblauch"], premium: true },
  { name: "Miso-Suppe", emoji: "🍲", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["tofu","champignons","sojasauce","ingwer"], premium: true },
  { name: "Gyoza", emoji: "🥟", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","knoblauch","ingwer","sojasauce","zwiebeln"], premium: true },
  { name: "Ratatouille", emoji: "🍆", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["aubergine","zucchini","paprika","tomaten","knoblauch"], premium: true },
  { name: "Moussaka", emoji: "🍆", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["aubergine","hackfleisch","kartoffeln","sahne","tomaten"], premium: true },
  { name: "Okonomiyaki", emoji: "🥞", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["mehl","eier","karotten","speck","sojasauce"], premium: true },
  { name: "Tacos al Pastor", emoji: "🌮", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","ananas","tortilla","zwiebeln","chili"], premium: true },
  { name: "Croque Monsieur", emoji: "🥪", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["toast","schinken","reibekaese","butter"], premium: true },
  { name: "Boeuf Bourguignon", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","karotten","champignons","zwiebeln","bruehe"], premium: true },
  { name: "Baba Ganoush mit Fladenbrot", emoji: "🫓", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["aubergine","knoblauch","zitrone","olivenoel","toast"], premium: true },
  { name: "Shepherd's Pie", emoji: "🥧", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","kartoffeln","karotten","zwiebeln","bruehe"], premium: true },
  { name: "Churros mit Schokosoße", emoji: "🍩", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","zucker","zimt","schokolade","butter"], premium: true },
  { name: "Tiramisu", emoji: "🍰", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["eier","zucker","sahne","schokolade"], premium: true },
  { name: "Crème brûlée", emoji: "🍮", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["eier","sahne","zucker"], premium: true },
  { name: "Pho", emoji: "🍜", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["nudeln","haehnchen","bruehe","ingwer","zwiebeln"], premium: true },
  { name: "Poke Bowl", emoji: "🥗", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["reis","avocado","gurke","karotten","sojasauce"], premium: true },
  { name: "Spinat-Kichererbsen-Curry", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["spinat","kichererbsen","currypulver","kokosmilch","knoblauch"], premium: true },
  { name: "Baklava", emoji: "🍯", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","honig","butter","zimt"], premium: true },
  { name: "Käsefondue", emoji: "🧀", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["reibekaese","toast","knoblauch","essig"], premium: true },
  { name: "Wiener Schnitzel", emoji: "🍖", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","mehl","eier","zitrone"], premium: true },
  { name: "Rouladen", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","speck","zwiebeln","gurke"], premium: true },
  { name: "Kartoffelpuffer", emoji: "🥔", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["kartoffeln","eier","mehl","zwiebeln"], premium: true },
  { name: "Rotkohl mit Knödeln", emoji: "🥬", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["rotkohl","apfel","zwiebeln","kartoffeln"], premium: true },
  { name: "Königsberger Klopse", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","eier","zitrone","kapern"], premium: true },
  { name: "Maultaschen", emoji: "🥟", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","eier","spinat","zwiebeln"], premium: true },
  { name: "Sauerbraten", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","zwiebeln","honig","essig"], premium: true },
  { name: "Labskaus", emoji: "🥔", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["kartoffeln","rindfleisch","zwiebeln","essig"], premium: true },
  { name: "Penne Arrabbiata", emoji: "🍝", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["nudeln","dosentomaten","knoblauch","chili"], premium: true },
  { name: "Risotto alla Milanese", emoji: "🍚", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","bruehe","butter","parmesan"], premium: true },
  { name: "Saltimbocca", emoji: "🍖", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","schinken","basilikum","butter"], premium: true },
  { name: "Panzanella", emoji: "🥗", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["toast","tomaten","gurke","olivenoel"], premium: true },
  { name: "Orecchiette mit Spinat und Parmesan", emoji: "🍝", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["nudeln","spinat","knoblauch","parmesan"], premium: true },
  { name: "Vitello Tonnato", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","fisch","kapern","zitrone"], premium: true },
  {
    name: "Panna Cotta", emoji: "🍮", time: "aufwendig", diet: "alles", type: "süß", premium: true,
    ingredients: ["sahne","zucker","vanille","gelatine","beeren"], prepMinutes: 15, cookMinutes: 240, difficulty: "Einfach",
    amounts: { sahne:[500,"ml"], zucker:[70,"g"], vanille:[1,"Päckchen"], gelatine:[4,"Blätter"], beeren:[200,"g"] },
    steps: ["Gelatineblätter einzeln in kaltes Wasser legen und 5 bis 10 Minuten einweichen.","Sahne, Zucker und Vanille in einem Topf unter Rühren erhitzen und etwa fünf Minuten sanft ziehen lassen, aber nicht sprudelnd kochen.","Topf vom Herd nehmen, Gelatine gut ausdrücken und vollständig in der heißen Sahne auflösen.","Masse in vier Gläser oder Förmchen füllen, abkühlen lassen und anschließend mindestens vier Stunden im Kühlschrank fest werden lassen.","Beeren kurz vor dem Servieren vorbereiten und auf der gut gekühlten Panna Cotta verteilen."],
    tip: "Gelatine nie mitkochen; die Creme erst in den Kühlschrank stellen, wenn sie nicht mehr heiß ist."
  },
  { name: "Cannoli", emoji: "🍩", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","zucker","quark","schokolade"], premium: true },
  { name: "Focaccia", emoji: "🍞", time: "aufwendig", diet: "vegan", type: "herzhaft", ingredients: ["mehl","olivenoel","rosmarin","knoblauch"], premium: true },
  { name: "Osso Buco", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","polenta","sellerie","tomaten"], premium: true },
  { name: "Quiche Lorraine", emoji: "🥧", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["mehl","eier","speck","sahne"], premium: true },
  { name: "Coq au Vin", emoji: "🍗", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","champignons","zwiebeln","bruehe"], premium: true },
  { name: "Crêpes", emoji: "🥞", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["mehl","eier","milch","zucker"], premium: true },
  { name: "Bouillabaisse", emoji: "🍲", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["fisch","tomaten","knoblauch","paprikapulver"], premium: true },
  { name: "Croissant", emoji: "🥐", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","butter","zucker","milch"], premium: true },
  { name: "Französische Zwiebelsuppe", emoji: "🍲", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["zwiebeln","lauch","bruehe","reibekaese"], premium: true },
  { name: "Niçoise-Salat", emoji: "🥗", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["salat","fisch","eier","oliven"], premium: true },
  { name: "Tortilla Española", emoji: "🍳", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["kartoffeln","eier","zwiebeln","olivenoel"], premium: true },
  { name: "Gazpacho", emoji: "🍅", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["tomaten","gurke","paprika","olivenoel"], premium: true },
  { name: "Patatas Bravas", emoji: "🥔", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["kartoffeln","dosentomaten","paprikapulver","olivenoel"], premium: true },
  { name: "Crema Catalana", emoji: "🍮", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["eier","milch","zucker","zimt"], premium: true },
  { name: "Empanadas", emoji: "🥟", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["mehl","hackfleisch","zwiebeln","paprika"], premium: true },
  { name: "Souvlaki", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","zitrone","olivenoel","joghurt"], premium: true },
  { name: "Tzatziki mit Fladenbrot", emoji: "🥙", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["joghurt","gurke","knoblauch","toast"], premium: true },
  { name: "Fattoush", emoji: "🥗", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["salat","gurke","tomaten","zitrone"], premium: true },
  { name: "Kibbeh", emoji: "🧆", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","bulgur","zwiebeln","mandeln"], premium: true },
  { name: "Shawarma-Bowl", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","joghurt","salat","tomaten"], premium: true },
  { name: "Tabouleh", emoji: "🥗", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["bulgur","petersilie","tomaten","zitrone"], premium: true },
  { name: "Halloumi vom Grill", emoji: "🧀", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["feta","zucchini","paprika","olivenoel"], premium: true },
  { name: "Palak Paneer", emoji: "🍛", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["spinat","feta","sahne","currypulver"], premium: true },
  { name: "Dal Tarka", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["linsen","knoblauch","zwiebeln","currypulver"], premium: true },
  { name: "Biryani", emoji: "🍚", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["reis","haehnchen","currypulver","zwiebeln"], premium: true },
  { name: "Samosas", emoji: "🥟", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","kartoffeln","karotten","currypulver"], premium: true },
  { name: "Chana Masala", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["kichererbsen","dosentomaten","zwiebeln","kreuzkuemmel"], premium: true },
  { name: "Tandoori-Hähnchen", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","joghurt","currypulver","zitrone"], premium: true },
  { name: "Gulab Jamun", emoji: "🍯", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","milch","zucker","honig"], premium: true },
  { name: "Rotes Thai-Curry mit Hähnchen", emoji: "🍛", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","kokosmilch","currypulver","zucchini"], premium: true },
  { name: "Frühlingsrollen", emoji: "🥟", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","karotten","spinat","sojasauce"], premium: true },
  { name: "Massaman Curry", emoji: "🍛", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","kokosmilch","kartoffeln","currypulver"], premium: true },
  { name: "Bún Chả", emoji: "🍜", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["nudeln","hackfleisch","karotten","sojasauce"], premium: true },
  { name: "Laksa", emoji: "🍜", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["nudeln","kokosmilch","haehnchen","limette"], premium: true },
  { name: "Mango Sticky Rice", emoji: "🍚", time: "normal", diet: "vegan", type: "süß", ingredients: ["reis","kokosmilch","zucker","banane"], premium: true },
  { name: "Kung Pao Chicken", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","erdnuesse","paprika","sojasauce"], premium: true },
  { name: "Mapo Tofu", emoji: "🍲", time: "normal", diet: "vegan", type: "herzhaft", ingredients: ["tofu","sojasauce","knoblauch","chili"], premium: true },
  { name: "Süß-saure Suppe", emoji: "🍲", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["eier","tofu","essig","zucker"], premium: true },
  { name: "Chow Mein", emoji: "🍜", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["nudeln","hackfleisch","karotten","sojasauce"], premium: true },
  { name: "Teriyaki-Lachs", emoji: "🐟", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["fisch","sojasauce","honig","ingwer"], premium: true },
  { name: "Kimchi-Pfanne", emoji: "🍚", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","sauerkraut","eier","sesam"], premium: true },
  { name: "Bulgogi", emoji: "🍖", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","sojasauce","knoblauch","sesam"], premium: true },
  { name: "Onigiri", emoji: "🍙", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["reis","sojasauce","sesam"], premium: true },
  { name: "Tempura-Gemüse", emoji: "🍢", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["zucchini","paprika","mehl","sojasauce"], premium: true },
  { name: "Guacamole mit Nachos", emoji: "🥑", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["avocado","zitrone","tomaten","tortilla"], premium: true },
  { name: "Chilaquiles", emoji: "🌶️", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["tortilla","dosentomaten","eier","feta"], premium: true },
  {
    name: "Ceviche", emoji: "🍤", time: "schnell", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["garnelen","zitrone","tomaten","zwiebeln","koriander","chili"], prepMinutes: 15, cookMinutes: 10, difficulty: "Einfach",
    amounts: { garnelen:[400,"g"], zitrone:[3,"Stück"], tomaten:[3,"Stück"], zwiebeln:[1,"Stück"], koriander:[15,"g"], chili:[1,"Stück"] },
    steps: ["Rohe Garnelen schälen, entdarmen und in leicht siedendem Salzwasser vollständig garen, bis sie durchgehend rosa und fest sind; vorgegarte Garnelen nur abspülen und gut abtropfen lassen.","Gegarte Garnelen sofort kurz in Eiswasser abkühlen, anschließend gründlich abtropfen lassen und in mundgerechte Stücke schneiden.","Tomaten würfeln, Zwiebel sehr fein schneiden, Koriander hacken und Chili nach gewünschter Schärfe vorbereiten.","Zitronen auspressen und den Saft mit Garnelen, Tomaten, Zwiebel, Koriander und Chili vermengen.","Abgedeckt 15 Minuten im Kühlschrank ziehen lassen, abschmecken und gut gekühlt servieren."],
    tip: "Nur vollständig gegarte Garnelen verwenden; Zitronensaft ersetzt kein sicheres Durchgaren."
  },
  { name: "Churrasco", emoji: "🍖", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["rindfleisch","knoblauch","petersilie","zitrone"], premium: true },
  { name: "Feijoada", emoji: "🍲", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","wurst","linsen","zwiebeln"], premium: true },
  { name: "Klassischer Cheeseburger", emoji: "🍔", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","toast","reibekaese","gurke"], premium: true },
  { name: "Mac and Cheese", emoji: "🧀", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["nudeln","reibekaese","milch","butter"], premium: true },
  { name: "Fish and Chips", emoji: "🐟", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["fisch","kartoffeln","mehl","zitrone"], premium: true },
  { name: "BBQ Pulled Pork", emoji: "🍖", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["schweinefleisch","honig","paprikapulver","zwiebeln"], premium: true },
  { name: "Carrot Cake", emoji: "🥕", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["karotten","mehl","zucker","zimt"], premium: true },
  { name: "French Toast (Armer Ritter)", emoji: "🍞", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["toast","eier","milch","zimt"], premium: true },
  { name: "Granola-Bowl mit Joghurt", emoji: "🥣", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["joghurt","honig","banane","mandeln"], premium: true },
  { name: "Bagel mit Lachs und Quark", emoji: "🥯", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["toast","quark","fisch","gurke"], premium: true },
  { name: "Porridge mit Apfel", emoji: "🥣", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["milch","honig","apfel","zimt"], premium: true },
  { name: "Rührtofu", emoji: "🍳", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["tofu","currypulver","paprika","zwiebeln"], premium: true },
  { name: "Eggs Benedict", emoji: "🍳", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["eier","toast","schinken","butter"], premium: true },
  { name: "Zitronenkuchen", emoji: "🍋", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","zitrone","zucker","butter"], premium: true },
  { name: "Schokoladenkuchen", emoji: "🍫", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","schokolade","eier","zucker"], premium: true },
  { name: "Vanillepudding", emoji: "🍮", time: "schnell", diet: "vegetarisch", type: "süß", ingredients: ["milch","zucker","zimt"], premium: true },
  { name: "Käsekuchen", emoji: "🍰", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["quark","eier","zucker","mehl"], premium: true },
  { name: "Mandelkekse", emoji: "🍪", time: "normal", diet: "vegetarisch", type: "süß", ingredients: ["mandeln","mehl","zucker","honig"], premium: true },
  { name: "Rote Grütze", emoji: "🍮", time: "normal", diet: "vegan", type: "süß", ingredients: ["apfel","zucker","zimt"], premium: true },
  { name: "Poutine", emoji: "🍟", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["kartoffeln","reibekaese","bruehe"], premium: true },
  { name: "Piroggen", emoji: "🥟", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", ingredients: ["mehl","kartoffeln","zwiebeln","quark"], premium: true },
  { name: "Borschtsch", emoji: "🍲", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["rotkohl","karotten","kartoffeln","zwiebeln"], premium: true },
  { name: "Apfelstrudel", emoji: "🥧", time: "aufwendig", diet: "vegetarisch", type: "süß", ingredients: ["mehl","apfel","zimt","butter"], premium: true },
  { name: "Falscher Hase", emoji: "🍖", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["hackfleisch","eier","zwiebeln","toast"], premium: true },
  { name: "Paprikahähnchen", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","paprikapulver","sahne","zwiebeln"], premium: true },
  { name: "Chicken Wings BBQ", emoji: "🍗", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["haehnchen","honig","paprikapulver","zitrone"], premium: true },
  { name: "Süßkartoffel-Pommes", emoji: "🍠", time: "schnell", diet: "vegan", type: "herzhaft", ingredients: ["suesskartoffel","olivenoel","paprikapulver"], premium: true },
  { name: "Club Sandwich", emoji: "🥪", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["toast","haehnchen","speck","salat"], premium: true },
  { name: "Reuben Sandwich", emoji: "🥪", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["toast","rindfleisch","sauerkraut","reibekaese"], premium: true },
  { name: "Gemüse-Frittata", emoji: "🍳", time: "normal", diet: "vegetarisch", type: "herzhaft", ingredients: ["eier","zucchini","paprika","feta"], premium: true },
  { name: "Räucherlachs-Salat", emoji: "🥗", time: "schnell", diet: "alles", type: "herzhaft", ingredients: ["salat","fisch","gurke","zitrone"], premium: true },
  { name: "Waldorf-Salat", emoji: "🥗", time: "schnell", diet: "vegetarisch", type: "herzhaft", ingredients: ["apfel","salat","mandeln","joghurt"], premium: true },
  { name: "Tajine", emoji: "🍲", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["lamm","aubergine","zitrone","honig"], premium: true },
  { name: "Grünkohl-Eintopf", emoji: "🥬", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["spinat","kartoffeln","wurst","zwiebeln"], premium: true },
  { name: "Zwiebelkuchen", emoji: "🥧", time: "aufwendig", diet: "alles", type: "herzhaft", ingredients: ["mehl","zwiebeln","speck","sahne"], premium: true },
  { name: "Yaki Udon", emoji: "🍜", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["nudeln","haehnchen","karotten","sojasauce"], premium: true },
  { name: "Katsudon", emoji: "🍚", time: "normal", diet: "alles", type: "herzhaft", ingredients: ["reis","schweinefleisch","eier","sojasauce"], premium: true },
  { name: "Zabaione", emoji: "🍮", time: "normal", diet: "vegetarisch", type: "süß", ingredients: ["eier","zucker","honig"], premium: true },
  {"name":"One-Pot Tomaten-Mozzarella-Gnocchi","emoji":"🍅","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["gnocchi","dosentomaten","sahne","mozzarella","zwiebeln","knoblauch"],"minutes":30,"amounts":{"gnocchi":[800,"g"],"dosentomaten":[400,"g"],"sahne":[150,"ml"],"mozzarella":[250,"g"],"zwiebeln":[1,"Stück"],"knoblauch":[2,"Zehen"]},"steps":["Zwiebel und Knoblauch fein schneiden, Mozzarella würfeln.","Zwiebel und Knoblauch in einer großen Pfanne kurz anschwitzen.","Gnocchi, Dosentomaten und Sahne zugeben und etwa 12 Minuten sanft köcheln lassen.","Mozzarella unterheben, schmelzen lassen und abschmecken."]},
  {"name":"Linsen-Fusilli-Bolognese","emoji":"🍝","time":"normal","diet":"vegan","type":"herzhaft","ingredients":["nudeln","linsen","dosentomaten","karotten","zwiebeln","knoblauch"],"minutes":35,"amounts":{"nudeln":[400,"g"],"linsen":[200,"g"],"dosentomaten":[400,"g"],"karotten":[2,"Stück"],"zwiebeln":[1,"Stück"],"knoblauch":[2,"Zehen"]},"steps":["Linsen nach Packungsangabe vorgaren und das Gemüse klein schneiden.","Nudeln in Salzwasser bissfest kochen.","Zwiebel, Knoblauch und Karotten anbraten, dann Tomaten und Linsen zugeben.","15 Minuten köcheln lassen, abschmecken und mit den Nudeln servieren."]},
  {"name":"Hähnchen-Reis-One-Pot","emoji":"🍗","time":"normal","diet":"alles","type":"herzhaft","ingredients":["reis","haehnchen","paprika","zwiebeln","bruehe"],"minutes":35,"amounts":{"reis":[300,"g"],"haehnchen":[500,"g"],"paprika":[2,"Stück"],"zwiebeln":[1,"Stück"],"bruehe":[700,"ml"]},"steps":["Hähnchen und Gemüse in mundgerechte Stücke schneiden.","Hähnchen kräftig anbraten, Zwiebel und Paprika kurz mitbraten.","Reis und Brühe zugeben und zugedeckt etwa 18 Minuten sanft garen.","Zwischendurch umrühren, anschließend abschmecken und kurz ruhen lassen."]},
  {"name":"Baked Oats mit Banane","emoji":"🍌","time":"normal","diet":"vegetarisch","type":"süß","ingredients":["haferflocken","banane","milch","eier","backpulver","zimt"],"minutes":30,"amounts":{"haferflocken":[200,"g"],"banane":[2,"Stück"],"milch":[300,"ml"],"eier":[2,"Stück"],"backpulver":[2,"TL"],"zimt":[1,"TL"]},"steps":["Backofen auf 180 °C Ober-/Unterhitze vorheizen.","Bananen zerdrücken und mit Eiern sowie Milch verrühren.","Haferflocken, Backpulver und Zimt unterheben und in eine Form geben.","Etwa 22 bis 25 Minuten backen und kurz abkühlen lassen."]},
  {"name":"Thunfisch-Reis-Bowl","emoji":"🥗","time":"schnell","diet":"alles","type":"herzhaft","ingredients":["reis","thunfisch","gurke","mais","joghurt","zitrone"],"minutes":20,"amounts":{"reis":[300,"g"],"thunfisch":[2,"Stück"],"gurke":[1,"Stück"],"mais":[285,"g"],"joghurt":[150,"g"],"zitrone":[1,"Stück"]},"steps":["Reis garen und leicht abkühlen lassen.","Thunfisch und Mais abtropfen, Gurke klein schneiden.","Joghurt mit Zitronensaft, Salz und Pfeffer verrühren.","Alles in Schalen anrichten und mit dem Dressing servieren."]},
  {"name":"Ofenkartoffeln mit Kräuterquark","emoji":"🥔","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["kartoffeln","quark","joghurt","petersilie","zitrone","olivenoel"],"minutes":45,"amounts":{"kartoffeln":[800,"g"],"quark":[500,"g"],"joghurt":[100,"g"],"petersilie":[20,"g"],"zitrone":[1,"Stück"],"olivenoel":[2,"EL"]},"steps":["Backofen auf 200 °C Ober-/Unterhitze vorheizen.","Kartoffeln in Spalten schneiden, mit Öl und Gewürzen mischen und 35 Minuten backen.","Quark, Joghurt, gehackte Petersilie und Zitronensaft verrühren.","Kartoffeln goldbraun aus dem Ofen nehmen und mit Kräuterquark servieren."]},
  {"name":"Brokkoli-Käse-Nudeln","emoji":"🥦","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["nudeln","brokkoli","sahne","reibekaese","knoblauch"],"minutes":25,"amounts":{"nudeln":[400,"g"],"brokkoli":[500,"g"],"sahne":[200,"ml"],"reibekaese":[150,"g"],"knoblauch":[2,"Zehen"]},"steps":["Nudeln kochen und den Brokkoli in den letzten 5 Minuten mitgaren.","Knoblauch kurz anschwitzen und Sahne zugeben.","Käse einrühren und die Sauce sanft eindicken lassen.","Nudeln und Brokkoli unterheben und abschmecken."]},
  {"name":"Bohnen-Mais-Chili","emoji":"🌶️","time":"normal","diet":"vegan","type":"herzhaft","ingredients":["bohnen","mais","dosentomaten","paprika","zwiebeln","chili"],"minutes":30,"amounts":{"bohnen":[400,"g"],"mais":[285,"g"],"dosentomaten":[400,"g"],"paprika":[2,"Stück"],"zwiebeln":[1,"Stück"],"chili":[1,"Stück"]},"steps":["Bohnen und Mais abspülen, Gemüse klein schneiden.","Zwiebel, Paprika und Chili einige Minuten anbraten.","Tomaten, Bohnen und Mais zugeben und etwa 20 Minuten köcheln lassen.","Mit Salz, Pfeffer und Paprikapulver abschmecken."]},
  {"name":"Spinat-Frischkäse-Pasta","emoji":"🍝","time":"schnell","diet":"vegetarisch","type":"herzhaft","ingredients":["nudeln","spinat","frischkaese","knoblauch","parmesan"],"minutes":20,"amounts":{"nudeln":[400,"g"],"spinat":[400,"g"],"frischkaese":[200,"g"],"knoblauch":[2,"Zehen"],"parmesan":[50,"g"]},"steps":["Nudeln bissfest kochen und etwas Kochwasser auffangen.","Knoblauch kurz anbraten und den Spinat zusammenfallen lassen.","Frischkäse und etwas Kochwasser zu einer cremigen Sauce verrühren.","Nudeln unterheben und mit Parmesan servieren."]},
  {"name":"Eier-Reis-Pfanne","emoji":"🍳","time":"schnell","diet":"vegetarisch","type":"herzhaft","ingredients":["reis","eier","karotten","zwiebeln","sojasauce"],"minutes":20,"amounts":{"reis":[300,"g"],"eier":[4,"Stück"],"karotten":[2,"Stück"],"zwiebeln":[1,"Stück"],"sojasauce":[4,"EL"]},"steps":["Reis möglichst vorab kochen und abkühlen lassen.","Zwiebel und Karotten klein schneiden und kräftig anbraten.","Eier in die Pfanne geben und unter Rühren stocken lassen.","Reis und Sojasauce zugeben und alles heiß durchschwenken."]},
  {"name":"Honig-Senf-Hähnchen","emoji":"🍯","time":"normal","diet":"alles","type":"herzhaft","ingredients":["haehnchen","senf","honig","sahne","kartoffeln"],"minutes":40,"amounts":{"haehnchen":[600,"g"],"senf":[3,"EL"],"honig":[2,"EL"],"sahne":[150,"ml"],"kartoffeln":[700,"g"]},"steps":["Kartoffeln würfeln und in Salzwasser garen.","Hähnchen portionieren und von beiden Seiten anbraten.","Senf, Honig und Sahne verrühren, zum Hähnchen geben und 10 Minuten sanft garen.","Sauce abschmecken und zusammen mit den Kartoffeln servieren."]},
  {"name":"Tomaten-Feta-Nudeln","emoji":"🍅","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["nudeln","tomaten","feta","knoblauch","olivenoel"],"minutes":35,"amounts":{"nudeln":[400,"g"],"tomaten":[500,"g"],"feta":[200,"g"],"knoblauch":[2,"Zehen"],"olivenoel":[2,"EL"]},"steps":["Backofen auf 200 °C Ober-/Unterhitze vorheizen und Nudeln kochen.","Tomaten, Feta, Knoblauch und Öl in eine Form geben.","Etwa 20 Minuten backen und anschließend zu einer Sauce verrühren.","Nudeln unterheben, abschmecken und sofort servieren."]},
  {"name":"Gemüse-Couscous-Pfanne","emoji":"🌾","time":"schnell","diet":"vegan","type":"herzhaft","ingredients":["couscous","paprika","karotten","kichererbsen","bruehe"],"minutes":20,"amounts":{"couscous":[300,"g"],"paprika":[2,"Stück"],"karotten":[2,"Stück"],"kichererbsen":[400,"g"],"bruehe":[350,"ml"]},"steps":["Couscous mit heißer Brühe übergießen und quellen lassen.","Gemüse schneiden, Kichererbsen abspülen und alles anbraten.","Couscous mit einer Gabel auflockern und in die Pfanne geben.","Gut vermengen, würzen und kurz weiterbraten."]},
  {"name":"Kartoffel-Ei-Pfanne","emoji":"🥔","time":"schnell","diet":"vegetarisch","type":"herzhaft","ingredients":["kartoffeln","eier","zwiebeln","paprika","olivenoel"],"minutes":25,"amounts":{"kartoffeln":[700,"g"],"eier":[4,"Stück"],"zwiebeln":[1,"Stück"],"paprika":[2,"Stück"],"olivenoel":[2,"EL"]},"steps":["Kartoffeln klein würfeln und etwa 8 Minuten vorkochen.","Zwiebel, Paprika und Kartoffeln in Öl goldbraun braten.","Eier verquirlen, würzen und über die Kartoffeln geben.","Bei niedriger Hitze stocken lassen und servieren."]},
  {"name":"Quark-Pancakes","emoji":"🥞","time":"schnell","diet":"vegetarisch","type":"süß","ingredients":["quark","eier","mehl","milch","backpulver"],"minutes":20,"amounts":{"quark":[250,"g"],"eier":[3,"Stück"],"mehl":[100,"g"],"milch":[100,"ml"],"backpulver":[1,"TL"]},"steps":["Quark, Eier und Milch glatt rühren.","Mehl und Backpulver kurz unterheben.","Kleine Portionen in einer beschichteten Pfanne bei mittlerer Hitze ausbacken.","Wenden, sobald sich Bläschen bilden, und warm servieren."]},
  {"name":"Apfel-Hafer-Crumble","emoji":"🍎","time":"normal","diet":"vegetarisch","type":"süß","ingredients":["apfel","haferflocken","butter","zucker","zimt"],"minutes":40,"amounts":{"apfel":[4,"Stück"],"haferflocken":[200,"g"],"butter":[100,"g"],"zucker":[60,"g"],"zimt":[1,"TL"]},"steps":["Backofen auf 190 °C Ober-/Unterhitze vorheizen.","Äpfel würfeln, mit Zimt mischen und in eine Form geben.","Haferflocken, Butter und Zucker zu Streuseln verkneten und darauf verteilen.","Etwa 25 Minuten goldbraun backen."]},
  {"name":"Teriyaki-Lachs-Bowl","emoji":"🍣","time":"normal","diet":"alles","type":"herzhaft","ingredients":["lachs","reis","brokkoli","sojasauce","honig","sesam"],"minutes":30,"premium":true,"amounts":{"lachs":[600,"g"],"reis":[300,"g"],"brokkoli":[400,"g"],"sojasauce":[4,"EL"],"honig":[2,"EL"],"sesam":[2,"EL"]},"steps":["Reis garen und Brokkoli bissfest dämpfen.","Sojasauce und Honig verrühren.","Lachs anbraten, mit der Sauce ablöschen und kurz glasieren.","Reis, Brokkoli und Lachs anrichten und mit Sesam bestreuen."]},
  {"name":"Sesam-Tofu-Bowl","emoji":"🥢","time":"normal","diet":"vegan","type":"herzhaft","ingredients":["tofu","reis","brokkoli","karotten","sojasauce","sesam"],"minutes":30,"premium":true,"amounts":{"tofu":[400,"g"],"reis":[300,"g"],"brokkoli":[400,"g"],"karotten":[2,"Stück"],"sojasauce":[4,"EL"],"sesam":[2,"EL"]},"steps":["Reis garen und das Gemüse vorbereiten.","Tofu trocken tupfen, würfeln und rundherum knusprig anbraten.","Gemüse mitbraten, dann Sojasauce zugeben.","Mit Reis anrichten und mit Sesam bestreuen."]},
  {"name":"Marokkanischer Linseneintopf","emoji":"🍲","time":"normal","diet":"vegan","type":"herzhaft","ingredients":["linsen","dosentomaten","karotten","zwiebeln","kreuzkuemmel","bruehe"],"minutes":40,"premium":true,"amounts":{"linsen":[250,"g"],"dosentomaten":[400,"g"],"karotten":[3,"Stück"],"zwiebeln":[1,"Stück"],"kreuzkuemmel":[2,"TL"],"bruehe":[800,"ml"]},"steps":["Zwiebel und Karotten klein schneiden und anbraten.","Kreuzkümmel kurz mitrösten.","Linsen, Tomaten und Brühe zugeben und etwa 30 Minuten köcheln lassen.","Sobald die Linsen weich sind, kräftig abschmecken."]},
  {"name":"Zitronen-Hähnchen aus dem Ofen","emoji":"🍋","time":"normal","diet":"alles","type":"herzhaft","ingredients":["haehnchen","kartoffeln","zitrone","knoblauch","rosmarin"],"minutes":50,"premium":true,"amounts":{"haehnchen":[600,"g"],"kartoffeln":[800,"g"],"zitrone":[2,"Stück"],"knoblauch":[3,"Zehen"],"rosmarin":[10,"g"]},"steps":["Backofen auf 200 °C Ober-/Unterhitze vorheizen.","Kartoffeln schneiden und mit Hähnchen, Knoblauch und Rosmarin in eine Form geben.","Zitronensaft darübergeben, würzen und gut vermengen.","Etwa 40 Minuten garen, bis Hähnchen und Kartoffeln durchgegart sind."]},
  {"name":"Gefüllte Paprika mit Couscous","emoji":"🫑","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["paprika","couscous","feta","dosentomaten","zwiebeln"],"minutes":45,"premium":true,"amounts":{"paprika":[4,"Stück"],"couscous":[250,"g"],"feta":[200,"g"],"dosentomaten":[400,"g"],"zwiebeln":[1,"Stück"]},"steps":["Backofen auf 190 °C vorheizen und Paprika halbieren.","Couscous quellen lassen, mit Zwiebel und zerbröseltem Feta mischen.","Paprika füllen, auf die Tomaten in eine Form setzen und würzen.","Etwa 30 Minuten im Ofen garen."]},
  {"name":"Schoko-Bananen-Baked-Oats","emoji":"🍫","time":"normal","diet":"vegetarisch","type":"süß","ingredients":["haferflocken","banane","milch","kakao","backpulver","schokolade"],"minutes":30,"premium":true,"amounts":{"haferflocken":[200,"g"],"banane":[2,"Stück"],"milch":[300,"ml"],"kakao":[3,"EL"],"backpulver":[2,"TL"],"schokolade":[80,"g"]},"steps":["Backofen auf 180 °C Ober-/Unterhitze vorheizen.","Bananen zerdrücken und mit Milch verrühren.","Haferflocken, Kakao und Backpulver einrühren, dann Schokolade unterheben.","In eine Form geben und etwa 22 bis 25 Minuten backen."]},
  {"name":"Gnocchi-Spinat-Auflauf","emoji":"🥘","time":"normal","diet":"vegetarisch","type":"herzhaft","ingredients":["gnocchi","spinat","frischkaese","reibekaese","knoblauch"],"minutes":40,"premium":true,"amounts":{"gnocchi":[800,"g"],"spinat":[400,"g"],"frischkaese":[200,"g"],"reibekaese":[150,"g"],"knoblauch":[2,"Zehen"]},"steps":["Backofen auf 190 °C Ober-/Unterhitze vorheizen.","Spinat mit Knoblauch zusammenfallen lassen und Frischkäse einrühren.","Gnocchi und Sauce in eine Form geben und mit Käse bestreuen.","Etwa 25 Minuten goldbraun backen."]},
  {"name":"Burrito-Auflauf","emoji":"🌯","time":"normal","diet":"alles","type":"herzhaft","ingredients":["tortilla","hackfleisch","bohnen","mais","dosentomaten","reibekaese"],"minutes":45,"premium":true,"amounts":{"tortilla":[6,"Stück"],"hackfleisch":[500,"g"],"bohnen":[400,"g"],"mais":[285,"g"],"dosentomaten":[400,"g"],"reibekaese":[150,"g"]},"steps":["Backofen auf 190 °C Ober-/Unterhitze vorheizen.","Hackfleisch anbraten, Bohnen, Mais und Tomaten zugeben und würzen.","Tortillas und Füllung abwechselnd in eine Form schichten.","Mit Käse bestreuen und etwa 25 Minuten backen."]},
  {
    name: "Hähnchen-Caesar-Wraps", emoji: "🌯", time: "schnell", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["tortilla","haehnchen","salat","parmesan","joghurt","zitrone"], prepMinutes: 12, cookMinutes: 13, difficulty: "Einfach",
    amounts: { tortilla:[4,"Stück"], haehnchen:[450,"g"], salat:[180,"g"], parmesan:[60,"g"], joghurt:[180,"g"], zitrone:[1,"Stück"] },
    steps: ["Hähnchen trocken tupfen, in Streifen schneiden und mit Salz sowie Pfeffer würzen.","Die Streifen in einer heißen Pfanne rundherum 7 bis 9 Minuten vollständig durchgaren.","Joghurt mit Zitronensaft, der Hälfte des Parmesans, Salz und Pfeffer zu einem Dressing verrühren.","Tortillas kurz erwärmen und mit Salat, Hähnchen, Dressing und restlichem Parmesan belegen.","Die Seiten einschlagen, Wraps straff aufrollen und sofort servieren."],
    tip: "Das Hähnchen vor dem Anschneiden kurz ruhen lassen, damit es saftig bleibt."
  },
  {
    name: "Thunfisch-Zitronen-Pasta", emoji: "🍋", time: "schnell", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["nudeln","thunfisch","zitrone","sahne","knoblauch","petersilie"], prepMinutes: 8, cookMinutes: 17, difficulty: "Einfach",
    amounts: { nudeln:[400,"g"], thunfisch:[2,"Stück"], zitrone:[1,"Stück"], sahne:[150,"ml"], knoblauch:[2,"Zehen"], petersilie:[15,"g"] },
    steps: ["Nudeln in reichlich Salzwasser bissfest kochen und 150 ml Kochwasser auffangen.","Thunfisch abtropfen lassen, Knoblauch fein hacken und die Zitrone auspressen.","Knoblauch kurz anschwitzen, Sahne und zunächst die Hälfte des Zitronensafts zugeben.","Nudeln, Thunfisch und etwas Kochwasser unterheben und zwei Minuten sanft erhitzen.","Mit restlichem Zitronensaft, Salz und Pfeffer abschmecken und mit Petersilie servieren."],
    tip: "Den Thunfisch erst am Ende unterheben, damit er saftig bleibt und nicht zerfällt."
  },
  {
    name: "Protein-Pancakes mit Banane", emoji: "🥞", time: "schnell", diet: "vegetarisch", type: "süß", premium: true,
    ingredients: ["haferflocken","quark","eier","banane","backpulver","zimt"], prepMinutes: 8, cookMinutes: 12, difficulty: "Einfach",
    amounts: { haferflocken:[160,"g"], quark:[250,"g"], eier:[3,"Stück"], banane:[2,"Stück"], backpulver:[1,"TL"], zimt:[1,"TL"] },
    steps: ["Eine Banane fein zerdrücken und mit Quark sowie Eiern glatt rühren.","Haferflocken, Backpulver und Zimt einrühren und den Teig fünf Minuten quellen lassen.","Eine beschichtete Pfanne auf mittlere Hitze bringen und kleine Teigportionen hineingeben.","Pancakes wenden, sobald die Oberfläche Bläschen zeigt, und die zweite Seite goldbraun backen.","Die zweite Banane in Scheiben schneiden und zu den warmen Pancakes servieren."],
    tip: "Kleine Pancakes lassen sich leichter wenden und bleiben durch die niedrigere Hitze innen saftig."
  },
  {
    name: "Schoko-Quark-Mousse", emoji: "🍫", time: "schnell", diet: "vegetarisch", type: "süß", premium: true,
    ingredients: ["quark","joghurt","schokolade","kakao","honig"], prepMinutes: 10, cookMinutes: 10, difficulty: "Einfach",
    amounts: { quark:[500,"g"], joghurt:[200,"g"], schokolade:[100,"g"], kakao:[2,"EL"], honig:[2,"EL"] },
    steps: ["Schokolade über einem Wasserbad langsam schmelzen und anschließend leicht abkühlen lassen.","Quark, Joghurt, Kakao und Honig in einer Schüssel cremig rühren.","Zwei Löffel der Quarkmasse in die Schokolade rühren, um die Temperaturen anzugleichen.","Die Schokolade zügig unter die übrige Creme heben, bis keine Streifen mehr sichtbar sind.","Auf vier Gläser verteilen und bis zum Servieren kalt stellen."],
    tip: "Die Schokolade nur lauwarm einarbeiten, sonst kann die Quarkcreme körnig werden."
  },
  {
    name: "Kidneybohnen-Tomaten-Pfanne", emoji: "🍅", time: "schnell", diet: "vegan", type: "herzhaft", premium: true,
    ingredients: ["bohnen","dosentomaten","paprika","spinat","zwiebeln","knoblauch"], prepMinutes: 8, cookMinutes: 17, difficulty: "Einfach",
    amounts: { bohnen:[400,"g"], dosentomaten:[400,"g"], paprika:[2,"Stück"], spinat:[200,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"] },
    steps: ["Bohnen abspülen, Paprika würfeln und Zwiebel sowie Knoblauch fein schneiden.","Zwiebel und Paprika in einer großen Pfanne fünf Minuten kräftig anbraten.","Knoblauch, Bohnen und Dosentomaten zugeben und zehn Minuten offen köcheln lassen.","Spinat portionsweise unterheben und zusammenfallen lassen.","Mit Salz, Pfeffer und Paprikapulver abschmecken und heiß servieren."],
    tip: "Ein Spritzer Zitronensaft am Ende macht die Tomatensauce deutlich frischer."
  },
  {
    name: "Cremige Paprika-Gnocchi", emoji: "🫑", time: "schnell", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["gnocchi","paprika","frischkaese","bruehe","parmesan","knoblauch"], prepMinutes: 10, cookMinutes: 20, difficulty: "Einfach",
    amounts: { gnocchi:[800,"g"], paprika:[3,"Stück"], frischkaese:[200,"g"], bruehe:[250,"ml"], parmesan:[60,"g"], knoblauch:[2,"Zehen"] },
    steps: ["Paprika in schmale Streifen schneiden und Knoblauch fein hacken.","Gnocchi in einer großen Pfanne mit wenig Öl rundherum goldbraun anbraten und herausnehmen.","Paprika in derselben Pfanne sechs Minuten braten und den Knoblauch kurz mitrösten.","Brühe und Frischkäse einrühren, Gnocchi zurückgeben und fünf Minuten sanft köcheln lassen.","Parmesan unterheben, abschmecken und die Sauce kurz eindicken lassen."],
    tip: "Die Gnocchi zuerst separat anbraten – so bleiben sie außen knusprig und werden nicht weich."
  },
  {
    name: "Linsen-Dal mit Spinat", emoji: "🍛", time: "normal", diet: "vegan", type: "herzhaft", premium: true,
    ingredients: ["linsen","spinat","dosentomaten","zwiebeln","knoblauch","currypulver","bruehe"], prepMinutes: 10, cookMinutes: 30, difficulty: "Einfach",
    amounts: { linsen:[280,"g"], spinat:[300,"g"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], currypulver:[3,"TL"], bruehe:[700,"ml"] },
    steps: ["Linsen gründlich abspülen, Zwiebel würfeln und Knoblauch fein hacken.","Zwiebel in einem Topf glasig braten, Knoblauch und Currypulver eine Minute mitrösten.","Linsen, Tomaten und Brühe zugeben und bei kleiner Hitze 22 bis 25 Minuten köcheln lassen.","Spinat unterheben und weitere drei Minuten garen, bis er zusammengefallen ist.","Konsistenz mit etwas Wasser einstellen und mit Salz sowie Zitronensaft abschmecken."],
    tip: "Das Dal nach dem Kochen fünf Minuten ruhen lassen; dabei wird es von selbst cremiger."
  },
  {
    name: "Pilz-Stroganoff mit Nudeln", emoji: "🍄", time: "normal", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["nudeln","champignons","sahne","senf","zwiebeln","petersilie"], prepMinutes: 12, cookMinutes: 23, difficulty: "Einfach",
    amounts: { nudeln:[400,"g"], champignons:[500,"g"], sahne:[200,"ml"], senf:[2,"EL"], zwiebeln:[1,"Stück"], petersilie:[15,"g"] },
    steps: ["Nudeln bissfest kochen und etwas Kochwasser aufheben.","Champignons in Scheiben und die Zwiebel in feine Würfel schneiden.","Pilze portionsweise bei hoher Hitze kräftig anbraten, damit sie Farbe bekommen.","Zwiebel zugeben, anschließend Sahne und Senf einrühren und fünf Minuten köcheln lassen.","Nudeln unterheben, mit Kochwasser cremig einstellen und mit Petersilie servieren."],
    tip: "Die Pilze nicht gleichzeitig in die Pfanne geben, sonst ziehen sie Wasser und bräunen kaum."
  },
  {
    name: "Ofen-Feta mit Kichererbsen", emoji: "🧀", time: "normal", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["kichererbsen","feta","tomaten","paprika","olivenoel","zitrone"], prepMinutes: 10, cookMinutes: 30, difficulty: "Einfach",
    amounts: { kichererbsen:[400,"g"], feta:[200,"g"], tomaten:[5,"Stück"], paprika:[2,"Stück"], olivenoel:[3,"EL"], zitrone:[1,"Stück"] },
    steps: ["Backofen auf 200 °C Ober-/Unterhitze vorheizen und Kichererbsen abspülen.","Tomaten und Paprika schneiden und mit Kichererbsen sowie Öl in einer Form vermengen.","Feta mittig auf das Gemüse setzen und alles mit Salz, Pfeffer und Paprikapulver würzen.","Etwa 25 bis 30 Minuten backen, bis das Gemüse weich und der Feta gebräunt ist.","Feta leicht zerdrücken, alles vermengen und mit Zitronensaft abschmecken."],
    tip: "Kichererbsen vor dem Backen gut trocknen, damit sie am Rand leicht knusprig werden."
  },
  {
    name: "Koreanische Rindfleisch-Bowl", emoji: "🥢", time: "normal", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["reis","rindfleisch","karotten","gurke","sojasauce","ingwer","honig","knoblauch","sesam"], prepMinutes: 15, cookMinutes: 20, difficulty: "Mittel",
    amounts: { reis:[300,"g"], rindfleisch:[500,"g"], karotten:[3,"Stück"], gurke:[1,"Stück"], sojasauce:[5,"EL"], ingwer:[20,"g"], honig:[1,"EL"], knoblauch:[2,"Zehen"], sesam:[2,"EL"] },
    steps: ["Reis garen; währenddessen Rindfleisch in dünne Streifen, Karotten fein und Gurke in Scheiben schneiden.","Sojasauce mit fein geriebenem Ingwer, Honig, gehacktem Knoblauch und zwei Esslöffeln Wasser verrühren.","Rindfleisch portionsweise in einer sehr heißen Pfanne kurz und kräftig anbraten.","Karotten zugeben, zwei Minuten mitbraten und anschließend die Sauce kurz einkochen lassen.","Reis auf Schalen verteilen, Fleisch, Karotten und Gurke darauf anrichten und mit Sesam bestreuen."],
    tip: "Das Fleisch quer zur Faser schneiden und nur kurz braten, damit es zart bleibt."
  },
  {
    name: "Lachs in Honig-Senf-Sauce", emoji: "🐟", time: "normal", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["lachs","kartoffeln","senf","honig","sahne","brokkoli"], prepMinutes: 12, cookMinutes: 28, difficulty: "Mittel",
    amounts: { lachs:[600,"g"], kartoffeln:[700,"g"], senf:[3,"EL"], honig:[2,"EL"], sahne:[150,"ml"], brokkoli:[400,"g"] },
    steps: ["Kartoffeln in Stücke schneiden und in Salzwasser etwa 18 Minuten garen.","Brokkoli in Röschen teilen und in den letzten sechs Minuten zu den Kartoffeln geben.","Lachs trocken tupfen, würzen und in einer Pfanne zuerst auf der Hautseite anbraten.","Lachs wenden, herausnehmen und Senf, Honig sowie Sahne in der Pfanne verrühren.","Lachs in der Sauce bei kleiner Hitze fertig garen und mit Kartoffeln sowie Brokkoli servieren."],
    tip: "Der Lachs bleibt saftig, wenn er in der Mitte gerade noch leicht glasig ist."
  },
  {
    name: "Brokkoli-Cheddar-Suppe", emoji: "🥦", time: "normal", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["brokkoli","cheddar","kartoffeln","bruehe","milch","zwiebeln"], prepMinutes: 10, cookMinutes: 30, difficulty: "Einfach",
    amounts: { brokkoli:[600,"g"], cheddar:[180,"g"], kartoffeln:[350,"g"], bruehe:[800,"ml"], milch:[250,"ml"], zwiebeln:[1,"Stück"] },
    steps: ["Brokkoli in Röschen teilen, den geschälten Strunk und die Kartoffeln klein würfeln.","Zwiebel in einem Topf glasig braten, Kartoffeln und Brokkolistrunk kurz mitbraten.","Brühe angießen und alles 15 Minuten weich kochen; dann die Brokkoliröschen fünf Minuten mitgaren.","Etwa die Hälfte der Suppe pürieren und zusammen mit der Milch wieder erhitzen.","Cheddar bei niedriger Hitze portionsweise einrühren und die Suppe abschmecken."],
    tip: "Nach Zugabe des Käses nicht mehr stark kochen, damit die Suppe glatt bleibt."
  },
  {
    name: "Kartoffel-Erbsen-Curry", emoji: "🥔", time: "normal", diet: "vegan", type: "herzhaft", premium: true,
    ingredients: ["kartoffeln","erbsen","dosentomaten","spinat","currypulver","bruehe","zwiebeln"], prepMinutes: 12, cookMinutes: 33, difficulty: "Einfach",
    amounts: { kartoffeln:[800,"g"], erbsen:[300,"g"], dosentomaten:[400,"g"], spinat:[200,"g"], currypulver:[3,"TL"], bruehe:[500,"ml"], zwiebeln:[1,"Stück"] },
    steps: ["Kartoffeln schälen und würfeln, Zwiebel fein schneiden.","Zwiebel in einem Topf anbraten und Currypulver kurz mitrösten.","Kartoffeln, Tomaten und Brühe zugeben und zugedeckt etwa 22 Minuten köcheln lassen.","Erbsen und Spinat einrühren und weitere fünf Minuten garen.","Deckel abnehmen, Curry leicht einkochen lassen und mit Salz sowie Zitronensaft abschmecken."],
    tip: "Einige Kartoffelstücke am Topfrand zerdrücken – das bindet die Sauce ganz ohne Sahne oder Kokosmilch."
  },
  {
    name: "Tex-Mex-Süßkartoffeln", emoji: "🍠", time: "normal", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["suesskartoffel","bohnen","mais","avocado","reibekaese","joghurt"], prepMinutes: 15, cookMinutes: 40, difficulty: "Einfach",
    amounts: { suesskartoffel:[1000,"g"], bohnen:[400,"g"], mais:[285,"g"], avocado:[1,"Stück"], reibekaese:[120,"g"], joghurt:[150,"g"] },
    steps: ["Backofen auf 200 °C Ober-/Unterhitze vorheizen und Süßkartoffeln mehrmals einstechen.","Süßkartoffeln auf einem Blech je nach Größe 35 bis 45 Minuten weich backen.","Bohnen und Mais abspülen, würzen und in einer Pfanne fünf Minuten erhitzen.","Süßkartoffeln längs öffnen, das Innere auflockern und mit der Bohnenmischung sowie Käse füllen.","Kurz überbacken und anschließend mit Avocado und Joghurt servieren."],
    tip: "Ähnlich große Süßkartoffeln wählen, damit alle gleichzeitig gar werden."
  },
  {
    name: "Hähnchen-Parmesan-Pasta", emoji: "🍝", time: "normal", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["nudeln","haehnchen","sahne","parmesan","spinat","knoblauch"], prepMinutes: 12, cookMinutes: 23, difficulty: "Einfach",
    amounts: { nudeln:[400,"g"], haehnchen:[500,"g"], sahne:[200,"ml"], parmesan:[80,"g"], spinat:[250,"g"], knoblauch:[2,"Zehen"] },
    steps: ["Nudeln bissfest kochen und 200 ml Kochwasser auffangen.","Hähnchen in Streifen schneiden, würzen und in einer großen Pfanne vollständig durchbraten.","Knoblauch kurz mitbraten, Sahne und etwas Kochwasser angießen.","Spinat unterheben, zusammenfallen lassen und anschließend Parmesan einrühren.","Nudeln in der Sauce schwenken, Konsistenz mit Kochwasser einstellen und sofort servieren."],
    tip: "Parmesan bei niedriger Hitze einrühren, damit die Sauce cremig bleibt und nicht verklumpt."
  },
  {
    name: "Auberginen-Linsen-Lasagne", emoji: "🍆", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["lasagneplatten","aubergine","linsen","dosentomaten","mozzarella","zwiebeln"], prepMinutes: 25, cookMinutes: 50, difficulty: "Mittel",
    amounts: { lasagneplatten:[250,"g"], aubergine:[2,"Stück"], linsen:[220,"g"], dosentomaten:[800,"g"], mozzarella:[250,"g"], zwiebeln:[1,"Stück"] },
    steps: ["Linsen vorgaren, Auberginen längs in dünne Scheiben schneiden und Zwiebel würfeln.","Auberginenscheiben portionsweise in einer Pfanne bräunen und leicht salzen.","Zwiebel anbraten, Tomaten und Linsen zugeben und die Sauce 15 Minuten einkochen lassen.","Sauce, Lasagneplatten und Auberginen abwechselnd in eine Form schichten; mit Mozzarella abschließen.","Bei 190 °C Ober-/Unterhitze etwa 35 bis 40 Minuten backen und vor dem Anschneiden zehn Minuten ruhen lassen."],
    tip: "Die Tomatensauce kräftig einkochen lassen, damit die Lasagne später nicht wässrig wird."
  },
  {
    name: "Spinat-Ricotta-Lasagneröllchen", emoji: "🥬", time: "aufwendig", diet: "vegetarisch", type: "herzhaft", premium: true,
    ingredients: ["lasagneplatten","spinat","ricotta","dosentomaten","parmesan","knoblauch"], prepMinutes: 30, cookMinutes: 40, difficulty: "Mittel",
    amounts: { lasagneplatten:[250,"g"], spinat:[500,"g"], ricotta:[500,"g"], dosentomaten:[600,"g"], parmesan:[80,"g"], knoblauch:[2,"Zehen"] },
    steps: ["Lasagneplatten portionsweise vorkochen, bis sie biegsam sind, und auf einem Tuch auslegen.","Spinat mit Knoblauch zusammenfallen lassen, gut ausdrücken und mit Ricotta sowie der Hälfte des Parmesans mischen.","Füllung auf den Platten verteilen, diese aufrollen und mit der Naht nach unten in eine Form setzen.","Dosentomaten würzen, um die Röllchen verteilen und mit restlichem Parmesan bestreuen.","Bei 190 °C Ober-/Unterhitze etwa 30 Minuten backen und vor dem Servieren kurz ruhen lassen."],
    tip: "Den Spinat wirklich gut ausdrücken, sonst wird die Füllung zu flüssig."
  },
  {
    name: "Chicken Pot Pie", emoji: "🥧", time: "aufwendig", diet: "alles", type: "herzhaft", premium: true,
    ingredients: ["mehl","butter","haehnchen","karotten","erbsen","bruehe","milch"], prepMinutes: 30, cookMinutes: 45, difficulty: "Anspruchsvoll",
    amounts: { mehl:[320,"g"], butter:[180,"g"], haehnchen:[500,"g"], karotten:[300,"g"], erbsen:[250,"g"], bruehe:[500,"ml"], milch:[150,"ml"] },
    steps: ["Aus 250 g Mehl, 150 g kalter Butter, einer Prise Salz und etwas kaltem Wasser rasch einen Teig kneten und kalt stellen.","Hähnchen würfeln und vollständig anbraten; Karotten zugeben und fünf Minuten mitgaren.","Restliche Butter und Mehl einrühren, dann Brühe und Milch nach und nach zugießen und cremig kochen.","Erbsen und Hähnchen unterheben, Füllung in eine Form geben und mit dem ausgerollten Teig abdecken.","Teig einschneiden und bei 200 °C Ober-/Unterhitze 30 bis 35 Minuten goldbraun backen."],
    tip: "Teig und Butter möglichst kalt verarbeiten – dadurch wird die Decke mürbe statt zäh."
  },
  {
    name: "Beeren-Cheesecake im Glas", emoji: "🍓", time: "aufwendig", diet: "vegetarisch", type: "süß", premium: true,
    ingredients: ["quark","joghurt","beeren","butterkekse","honig","vanille"], prepMinutes: 20, cookMinutes: 120, difficulty: "Einfach",
    amounts: { quark:[500,"g"], joghurt:[250,"g"], beeren:[400,"g"], butterkekse:[150,"g"], honig:[3,"EL"], vanille:[1,"Päckchen"] },
    steps: ["Butterkekse grob zerbröseln und auf vier große Gläser verteilen.","Quark, Joghurt, zwei Esslöffel Honig und Vanille cremig rühren.","Die Hälfte der Beeren leicht zerdrücken und mit dem restlichen Honig vermengen.","Quarkcreme und Beeren abwechselnd auf die Keksböden schichten.","Mit den übrigen Beeren garnieren und mindestens zwei Stunden kalt stellen."],
    tip: "Die Keksbrösel erst kurz vor dem Kühlen einschichten, wenn sie etwas knusprig bleiben sollen."
  },
  {
    name: "Birnen-Schoko-Crumble", emoji: "🍐", time: "normal", diet: "vegetarisch", type: "süß", premium: true,
    ingredients: ["birne","schokolade","haferflocken","butter","zimt","zucker"], prepMinutes: 15, cookMinutes: 30, difficulty: "Einfach",
    amounts: { birne:[4,"Stück"], schokolade:[100,"g"], haferflocken:[180,"g"], butter:[100,"g"], zimt:[1,"TL"], zucker:[60,"g"] },
    steps: ["Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform einfetten.","Birnen entkernen, würfeln und mit Zimt in der Form verteilen.","Schokolade grob hacken und über die Birnen streuen.","Haferflocken, Butter und Zucker mit den Fingern zu groben Streuseln verkneten und darübergeben.","Etwa 25 bis 30 Minuten backen, bis die Streusel goldbraun sind, und kurz abkühlen lassen."],
    tip: "Reife, aber noch feste Birnen behalten beim Backen ihre Struktur und werden nicht matschig."
  },
  {
    name: "Schoko-Bananen-Creme", emoji: "🍌", time: "schnell", diet: "vegan", type: "süß",
    ingredients: ["banane","kakao","kokosmilch","vanille"], prepMinutes: 10, cookMinutes: 5, difficulty: "Einfach",
    amounts: { banane:[4,"Stück"], kakao:[3,"EL"], kokosmilch:[120,"ml"], vanille:[1,"Päckchen"] },
    steps: ["Sehr reife Bananen schälen, in Stücke schneiden und zehn Minuten ins Gefrierfach legen.","Kokosmilch vor dem Abmessen gut verrühren.","Bananen, Kakao, Kokosmilch und Vanille in einen hohen Mixbecher geben.","Alles ein bis zwei Minuten sehr fein und cremig pürieren.","Auf vier Schalen verteilen und direkt servieren oder kurz kalt stellen."],
    tip: "Je reifer die Bananen sind, desto süßer wird die Creme ganz ohne zusätzlichen Zucker."
  },
  {
    name: "Kokos-Milchreis", emoji: "🥥", time: "normal", diet: "vegan", type: "süß",
    ingredients: ["reis","kokosmilch","zucker","zimt"], prepMinutes: 10, cookMinutes: 35, difficulty: "Einfach",
    amounts: { reis:[250,"g"], kokosmilch:[800,"ml"], zucker:[50,"g"], zimt:[1,"TL"] },
    steps: ["Reis in einem Sieb kurz abspülen und abtropfen lassen.","Kokosmilch mit 300 ml Wasser in einem großen Topf langsam erhitzen.","Reis einrühren und bei kleiner Hitze 25 bis 30 Minuten sanft garen; regelmäßig vom Topfboden lösen.","Zucker und die Hälfte des Zimts unterrühren und die Konsistenz mit etwas Wasser einstellen.","Fünf Minuten zugedeckt ruhen lassen, auf Schalen verteilen und mit restlichem Zimt servieren."],
    tip: "Kleine Hitze und häufiges Rühren verhindern, dass die Kokosmilch am Topfboden ansetzt."
  },
  {
    name: "Gefüllte Auberginen mit Linsen", emoji: "🍆", time: "aufwendig", diet: "vegan", type: "herzhaft",
    ingredients: ["aubergine","linsen","dosentomaten","zwiebeln","knoblauch","olivenoel"], prepMinutes: 25, cookMinutes: 50, difficulty: "Mittel",
    amounts: { aubergine:[2,"Stück"], linsen:[220,"g"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], olivenoel:[3,"EL"] },
    steps: ["Backofen auf 200 °C Ober-/Unterhitze vorheizen; Auberginen längs halbieren und das Fruchtfleisch kreuzweise einschneiden.","Schnittflächen mit einem Esslöffel Öl bestreichen und die Hälften 25 Minuten mit der Schnittseite nach oben vorbacken.","Linsen nach Packungsangabe knapp gar kochen; Zwiebel und Knoblauch fein schneiden.","Zwiebel und Knoblauch im restlichen Öl anbraten, Tomaten und Linsen zugeben und 12 Minuten dicklich einkochen.","Auberginen leicht aushöhlen, Fruchtfleisch unter die Linsen mischen, Hälften füllen und weitere 15 Minuten backen."],
    tip: "Die Linsenfüllung muss vor dem Füllen sämig sein, damit die Auberginen später nicht wässrig werden."
  },
  {
    name: "Veganer Apfel-Hafer-Crumble", emoji: "🍎", time: "aufwendig", diet: "vegan", type: "süß",
    ingredients: ["apfel","haferflocken","zucker","zimt","olivenoel"], prepMinutes: 20, cookMinutes: 40, difficulty: "Einfach",
    amounts: { apfel:[6,"Stück"], haferflocken:[220,"g"], zucker:[80,"g"], zimt:[2,"TL"], olivenoel:[5,"EL"] },
    steps: ["Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine mittelgroße Form dünn einölen.","Äpfel entkernen, würfeln und mit der Hälfte von Zucker und Zimt in der Form vermengen.","Haferflocken mit restlichem Zucker, Zimt, Olivenöl und zwei Esslöffeln Wasser zu groben Streuseln mischen.","Streusel gleichmäßig über den Äpfeln verteilen, ohne sie festzudrücken.","35 bis 40 Minuten backen, bis die Äpfel weich und die Streusel goldbraun sind; vor dem Servieren zehn Minuten ruhen lassen."],
    tip: "Ein mildes Olivenöl verwenden; säuerliche Äpfel sorgen für einen guten Ausgleich zur süßen Kruste."
  }
];

export const ingredientVocab = {
  nudeln: { label: "Nudeln", cat: "grund", buyPrice: 1.2, usePrice: 0.6, amount: 400, unit: "g" },
  reis: { label: "Reis", cat: "grund", buyPrice: 2.2, usePrice: 0.6, amount: 300, unit: "g" },
  kartoffeln: { label: "Kartoffeln", cat: "grund", buyPrice: 2.5, usePrice: 1, amount: 600, unit: "g" },
  mehl: { label: "Mehl", cat: "grund", buyPrice: 0.89, usePrice: 0.3, amount: 250, unit: "g" },
  zucker: { label: "Zucker", cat: "grund", buyPrice: 1, usePrice: 0.2, amount: 100, unit: "g" },
  toast: { label: "Brot/Toast", cat: "grund", buyPrice: 1.79, usePrice: 0.6, amount: 6, unit: "Scheiben" },
  couscous: { label: "Couscous", cat: "grund", buyPrice: 1.99, usePrice: 0.7, amount: 250, unit: "g" },
  tortilla: { label: "Tortilla-Fladen", cat: "grund", buyPrice: 2.29, usePrice: 1.2, amount: 6, unit: "Stück" },
  gnocchi: { label: "Gnocchi", cat: "grund", buyPrice: 1.99, usePrice: 1.5, amount: 500, unit: "g" },
  zwiebeln: { label: "Zwiebeln", cat: "vorrat", buyPrice: 1.29, usePrice: 0.25, amount: 2, unit: "Stück" },
  knoblauch: { label: "Knoblauch", cat: "vorrat", buyPrice: 0.79, usePrice: 0.15, amount: 2, unit: "Zehen" },
  olivenoel: { label: "Olivenöl", cat: "vorrat", buyPrice: 4.99, usePrice: 0.3, amount: 3, unit: "EL" },
  bruehe: { label: "Brühe", cat: "vorrat", buyPrice: 1.49, usePrice: 0.4, amount: 500, unit: "ml" },
  dosentomaten: { label: "Dosentomaten", cat: "vorrat", buyPrice: 0.99, usePrice: 0.9, amount: 400, unit: "g" },
  kokosmilch: { label: "Kokosmilch", cat: "vorrat", buyPrice: 1.49, usePrice: 1.3, amount: 400, unit: "ml" },
  sojasauce: { label: "Sojasoße", cat: "vorrat", buyPrice: 2.49, usePrice: 0.25, amount: 3, unit: "EL" },
  pesto: { label: "Pesto", cat: "vorrat", buyPrice: 2.29, usePrice: 1.5, amount: 100, unit: "g" },
  essig: { label: "Essig", cat: "vorrat", buyPrice: 1.29, usePrice: 0.15, amount: 2, unit: "EL" },
  honig: { label: "Honig", cat: "vorrat", buyPrice: 3.49, usePrice: 0.4, amount: 2, unit: "EL" },
  linsen: { label: "Linsen", cat: "vorrat", buyPrice: 1.79, usePrice: 0.9, amount: 200, unit: "g" },
  kichererbsen: { label: "Kichererbsen", cat: "vorrat", buyPrice: 0.99, usePrice: 0.9, amount: 400, unit: "g" },
  eier: { label: "Eier", cat: "milchprodukte", buyPrice: 3.29, usePrice: 0.7, amount: 3, unit: "Stück" },
  milch: { label: "Milch", cat: "milchprodukte", buyPrice: 1.19, usePrice: 0.5, amount: 250, unit: "ml" },
  sahne: { label: "Sahne", cat: "milchprodukte", buyPrice: 1.19, usePrice: 1, amount: 200, unit: "ml" },
  butter: { label: "Butter", cat: "milchprodukte", buyPrice: 2.29, usePrice: 0.5, amount: 30, unit: "g" },
  reibekaese: { label: "Reibekäse", cat: "milchprodukte", buyPrice: 2.49, usePrice: 1.8, amount: 100, unit: "g" },
  joghurt: { label: "Joghurt", cat: "milchprodukte", buyPrice: 1.29, usePrice: 0.6, amount: 200, unit: "g" },
  mozzarella: { label: "Mozzarella", cat: "milchprodukte", buyPrice: 1.19, usePrice: 1.19, amount: 125, unit: "g" },
  feta: { label: "Feta", cat: "milchprodukte", buyPrice: 2.49, usePrice: 2, amount: 150, unit: "g" },
  speck: { label: "Speck", cat: "fleisch", buyPrice: 2.29, usePrice: 1.8, amount: 100, unit: "g" },
  hackfleisch: { label: "Hackfleisch", cat: "fleisch", buyPrice: 4.49, usePrice: 4, amount: 400, unit: "g" },
  haehnchen: { label: "Hähnchenbrust", cat: "fleisch", buyPrice: 5.99, usePrice: 5.5, amount: 400, unit: "g" },
  rindfleisch: { label: "Rindfleisch", cat: "fleisch", buyPrice: 8.99, usePrice: 8, amount: 500, unit: "g" },
  schweinefleisch: { label: "Schweinefleisch", cat: "fleisch", buyPrice: 5.99, usePrice: 5.5, amount: 400, unit: "g" },
  schinken: { label: "Schinken", cat: "fleisch", buyPrice: 2.29, usePrice: 1.8, amount: 100, unit: "g" },
  wurst: { label: "Wurst", cat: "fleisch", buyPrice: 2.99, usePrice: 2.5, amount: 300, unit: "g" },
  fisch: { label: "Fisch", cat: "fleisch", buyPrice: 6.99, usePrice: 6.5, amount: 400, unit: "g" },
  tofu: { label: "Tofu", cat: "fleisch", buyPrice: 1.99, usePrice: 1.8, amount: 300, unit: "g" },
  tomaten: { label: "Tomaten", cat: "gemuese", buyPrice: 2.49, usePrice: 1.5, amount: 4, unit: "Stück" },
  paprika: { label: "Paprika", cat: "gemuese", buyPrice: 1.99, usePrice: 1.3, amount: 2, unit: "Stück" },
  zucchini: { label: "Zucchini", cat: "gemuese", buyPrice: 1.29, usePrice: 1.1, amount: 1, unit: "Stück" },
  karotten: { label: "Karotten", cat: "gemuese", buyPrice: 1.19, usePrice: 0.5, amount: 300, unit: "g" },
  champignons: { label: "Champignons", cat: "gemuese", buyPrice: 1.79, usePrice: 1.5, amount: 250, unit: "g" },
  spinat: { label: "Spinat", cat: "gemuese", buyPrice: 1.99, usePrice: 1.7, amount: 300, unit: "g" },
  salat: { label: "Salat", cat: "gemuese", buyPrice: 1.49, usePrice: 1.2, amount: 150, unit: "g" },
  gurke: { label: "Gurke", cat: "gemuese", buyPrice: 0.99, usePrice: 0.8, amount: 1, unit: "Stück" },
  kuerbis: { label: "Kürbis", cat: "gemuese", buyPrice: 2.99, usePrice: 2, amount: 500, unit: "g" },
  suesskartoffel: { label: "Süßkartoffel", cat: "gemuese", buyPrice: 2.29, usePrice: 1.8, amount: 400, unit: "g" },
  aubergine: { label: "Aubergine", cat: "gemuese", buyPrice: 1.49, usePrice: 1.3, amount: 1, unit: "Stück" },
  avocado: { label: "Avocado", cat: "obst", buyPrice: 1.29, usePrice: 1.1, amount: 1, unit: "Stück" },
  zitrone: { label: "Zitrone", cat: "obst", buyPrice: 0.59, usePrice: 0.35, amount: 1, unit: "Stück" },
  apfel: { label: "Apfel", cat: "obst", buyPrice: 2.49, usePrice: 0.6, amount: 2, unit: "Stück" },
  banane: { label: "Banane", cat: "obst", buyPrice: 1.79, usePrice: 0.4, amount: 2, unit: "Stück" },
  ananas: { label: "Ananas", cat: "obst", buyPrice: 2.49, usePrice: 1.2, amount: 300, unit: "g" },
  basilikum: { label: "Basilikum", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.9, amount: 15, unit: "g" },
  petersilie: { label: "Petersilie", cat: "gewuerze", buyPrice: 0.99, usePrice: 0.6, amount: 15, unit: "g" },
  chili: { label: "Chili", cat: "gewuerze", buyPrice: 1.29, usePrice: 0.2, amount: 1, unit: "Stück" },
  currypulver: { label: "Currypulver", cat: "gewuerze", buyPrice: 1.79, usePrice: 0.3, amount: 2, unit: "TL" },
  paprikapulver: { label: "Paprikapulver", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.2, amount: 2, unit: "TL" },
  zimt: { label: "Zimt", cat: "gewuerze", buyPrice: 1.99, usePrice: 0.2, amount: 1, unit: "TL" },
  schokolade: { label: "Schokolade", cat: "gewuerze", buyPrice: 1.49, usePrice: 1.3, amount: 100, unit: "g" },
  ingwer: { label: "Ingwer", cat: "gewuerze", buyPrice: 0.99, usePrice: 0.4, amount: 20, unit: "g" },
  erdnuesse: { label: "Erdnüsse", cat: "gewuerze", buyPrice: 1.99, usePrice: 0.8, amount: 50, unit: "g" },
  lamm: { label: "Lamm", cat: "fleisch", buyPrice: 9.99, usePrice: 8.5, amount: 500, unit: "g" },
  garnelen: { label: "Garnelen", cat: "fleisch", buyPrice: 6.99, usePrice: 6, amount: 300, unit: "g" },
  sellerie: { label: "Sellerie", cat: "gemuese", buyPrice: 1.29, usePrice: 0.6, amount: 1, unit: "Stück" },
  lauch: { label: "Lauch", cat: "gemuese", buyPrice: 1.19, usePrice: 0.6, amount: 1, unit: "Stück" },
  rotkohl: { label: "Rotkohl", cat: "gemuese", buyPrice: 1.49, usePrice: 1, amount: 400, unit: "g" },
  sauerkraut: { label: "Sauerkraut", cat: "gemuese", buyPrice: 1.29, usePrice: 0.9, amount: 300, unit: "g" },
  oliven: { label: "Oliven", cat: "gewuerze", buyPrice: 2.29, usePrice: 0.8, amount: 80, unit: "g" },
  kapern: { label: "Kapern", cat: "gewuerze", buyPrice: 2.49, usePrice: 0.3, amount: 20, unit: "g" },
  rosmarin: { label: "Rosmarin", cat: "gewuerze", buyPrice: 1.29, usePrice: 0.2, amount: 5, unit: "g" },
  kreuzkuemmel: { label: "Kreuzkümmel", cat: "gewuerze", buyPrice: 1.79, usePrice: 0.2, amount: 1, unit: "TL" },
  sesam: { label: "Sesam", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.3, amount: 1, unit: "EL" },
  limette: { label: "Limette", cat: "obst", buyPrice: 0.59, usePrice: 0.35, amount: 1, unit: "Stück" },
  koriander: { label: "Koriander", cat: "gewuerze", buyPrice: 0.99, usePrice: 0.6, amount: 10, unit: "g" },
  mandeln: { label: "Mandeln", cat: "gewuerze", buyPrice: 2.99, usePrice: 1, amount: 50, unit: "g" },
  quark: { label: "Quark", cat: "milchprodukte", buyPrice: 1.29, usePrice: 0.9, amount: 250, unit: "g" },
  parmesan: { label: "Parmesan", cat: "milchprodukte", buyPrice: 2.99, usePrice: 1.5, amount: 60, unit: "g" },
  polenta: { label: "Polenta", cat: "grund", buyPrice: 1.99, usePrice: 1.2, amount: 250, unit: "g" },
  bulgur: { label: "Bulgur", cat: "grund", buyPrice: 1.79, usePrice: 0.8, amount: 200, unit: "g" },
  haferflocken: { label: "Haferflocken", cat: "grund", buyPrice: 1.29, usePrice: 0.55, amount: 200, unit: "g" },
  bohnen: { label: "Kidneybohnen", cat: "vorrat", buyPrice: 0.99, usePrice: 0.99, amount: 400, unit: "g" },
  mais: { label: "Mais", cat: "vorrat", buyPrice: 0.99, usePrice: 0.99, amount: 285, unit: "g" },
  brokkoli: { label: "Brokkoli", cat: "gemuese", buyPrice: 2.29, usePrice: 2.29, amount: 500, unit: "g" },
  thunfisch: { label: "Thunfisch", cat: "fleisch", buyPrice: 2.79, usePrice: 2.79, amount: 2, unit: "Stück" },
  frischkaese: { label: "Frischkäse", cat: "milchprodukte", buyPrice: 1.49, usePrice: 1.49, amount: 200, unit: "g" },
  senf: { label: "Senf", cat: "vorrat", buyPrice: 1.19, usePrice: 0.2, amount: 3, unit: "EL" },
  backpulver: { label: "Backpulver", cat: "gewuerze", buyPrice: 0.69, usePrice: 0.15, amount: 2, unit: "TL" },
  kakao: { label: "Backkakao", cat: "gewuerze", buyPrice: 2.49, usePrice: 0.4, amount: 3, unit: "EL" },
  lachs: { label: "Lachs", cat: "fleisch", buyPrice: 8.99, usePrice: 8.99, amount: 600, unit: "g" }
};

Object.assign(ingredientVocab, {
  hefe: { label: "Hefe", cat: "grund", buyPrice: 0.49, usePrice: 0.35, amount: 1, unit: "Päckchen" },
  mascarpone: { label: "Mascarpone", cat: "milchprodukte", buyPrice: 2.49, usePrice: 2.49, amount: 500, unit: "g" },
  loeffelbiskuits: { label: "Löffelbiskuits", cat: "grund", buyPrice: 1.79, usePrice: 1.79, amount: 250, unit: "g" },
  kaffee: { label: "Starker Kaffee", cat: "vorrat", buyPrice: 3.99, usePrice: 0.35, amount: 250, unit: "ml" },
  speisestaerke: { label: "Speisestärke", cat: "grund", buyPrice: 1.19, usePrice: 0.2, amount: 40, unit: "g" },
  vanille: { label: "Vanille", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.75, amount: 1, unit: "Päckchen" },
  gelatine: { label: "Gelatine", cat: "gewuerze", buyPrice: 1.29, usePrice: 0.65, amount: 4, unit: "Blätter" },
  paniermehl: { label: "Paniermehl", cat: "grund", buyPrice: 1.29, usePrice: 0.45, amount: 150, unit: "g" },
  rotebete: { label: "Rote Bete", cat: "gemuese", buyPrice: 1.49, usePrice: 1.2, amount: 500, unit: "g" },
  beeren: { label: "Beerenmischung", cat: "obst", buyPrice: 3.49, usePrice: 3.49, amount: 500, unit: "g" },
  mango: { label: "Mango", cat: "obst", buyPrice: 1.49, usePrice: 1.49, amount: 2, unit: "Stück" },
  halloumi: { label: "Halloumi", cat: "milchprodukte", buyPrice: 3.29, usePrice: 3.29, amount: 250, unit: "g" },
  bagel: { label: "Bagels", cat: "grund", buyPrice: 2.49, usePrice: 2.49, amount: 4, unit: "Stück" },
  filoteig: { label: "Filoteig", cat: "grund", buyPrice: 2.29, usePrice: 2.29, amount: 250, unit: "g" },
  ricotta: { label: "Ricotta", cat: "milchprodukte", buyPrice: 2.19, usePrice: 2.19, amount: 250, unit: "g" },
  kalbfleisch: { label: "Kalbfleisch", cat: "fleisch", buyPrice: 11.99, usePrice: 10.5, amount: 600, unit: "g" },
  gewuerzgurken: { label: "Gewürzgurken", cat: "gemuese", buyPrice: 1.69, usePrice: 0.8, amount: 4, unit: "Stück" },
  fladenbrot: { label: "Fladenbrot", cat: "grund", buyPrice: 1.99, usePrice: 1.99, amount: 1, unit: "Stück" },
  gyozateig: { label: "Gyoza-Teigblätter", cat: "grund", buyPrice: 2.99, usePrice: 2.99, amount: 24, unit: "Stück" },
  fruehlingsrollenteig: { label: "Frühlingsrollenteig", cat: "grund", buyPrice: 2.49, usePrice: 2.49, amount: 12, unit: "Blätter" },
  baguette: { label: "Baguette", cat: "grund", buyPrice: 1.49, usePrice: 1.49, amount: 1, unit: "Stück" },
  lasagneplatten: { label: "Lasagneplatten", cat: "grund", buyPrice: 1.59, usePrice: 1.3, amount: 250, unit: "g" },
  weisswein: { label: "Trockener Weißwein", cat: "vorrat", buyPrice: 4.49, usePrice: 1.2, amount: 250, unit: "ml" }
});

Object.assign(ingredientVocab, {
  cheddar: { label: "Cheddar", cat: "milchprodukte", buyPrice: 2.79, usePrice: 2.2, amount: 150, unit: "g" },
  erbsen: { label: "Erbsen", cat: "gemuese", buyPrice: 1.79, usePrice: 1.2, amount: 300, unit: "g" },
  butterkekse: { label: "Butterkekse", cat: "grund", buyPrice: 1.49, usePrice: 0.9, amount: 150, unit: "g" },
  birne: { label: "Birnen", cat: "obst", buyPrice: 2.49, usePrice: 1.2, amount: 4, unit: "Stück" },
  tomatenmark: { label: "Tomatenmark", cat: "vorrat", buyPrice: 1.29, usePrice: 0.35, amount: 2, unit: "EL" },
  thymian: { label: "Thymian", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.2, amount: 2, unit: "TL" },
  kuemmel: { label: "Kümmel", cat: "gewuerze", buyPrice: 1.49, usePrice: 0.1, amount: 1, unit: "TL" },
  fruehlingszwiebeln: { label: "Frühlingszwiebeln", cat: "gemuese", buyPrice: 1.19, usePrice: 0.9, amount: 3, unit: "Stück" },
  dill: { label: "Dill", cat: "gewuerze", buyPrice: 1.29, usePrice: 0.9, amount: 15, unit: "g" },
  vanillezucker: { label: "Vanillezucker", cat: "grund", buyPrice: 0.79, usePrice: 0.15, amount: 1, unit: "Päckchen" }
});

Object.assign(ingredientVocab, {
  currypaste: { label: "Currypaste", cat: "gewuerze", buyPrice: 2.49, usePrice: 0.75, amount: 3, unit: "EL" },
  rotwein: { label: "Trockener Rotwein", cat: "vorrat", buyPrice: 4.99, usePrice: 1.8, amount: 300, unit: "ml" },
  safran: { label: "Safran", cat: "gewuerze", buyPrice: 2.49, usePrice: 2.49, amount: 1, unit: "Päckchen" },
  salbei: { label: "Salbei", cat: "gewuerze", buyPrice: 1.49, usePrice: 1.0, amount: 15, unit: "g" },
  reisnudeln: { label: "Reisnudeln", cat: "grund", buyPrice: 2.29, usePrice: 2.29, amount: 400, unit: "g" },
  miso: { label: "Misopaste", cat: "vorrat", buyPrice: 3.49, usePrice: 1.4, amount: 80, unit: "g" },
  weisskohl: { label: "Weißkohl", cat: "gemuese", buyPrice: 1.99, usePrice: 1.2, amount: 500, unit: "g" },
  paneer: { label: "Paneer", cat: "milchprodukte", buyPrice: 3.49, usePrice: 3.49, amount: 400, unit: "g" },
  fischsauce: { label: "Fischsauce", cat: "vorrat", buyPrice: 2.49, usePrice: 0.35, amount: 2, unit: "EL" },
  kimchi: { label: "Kimchi", cat: "gemuese", buyPrice: 3.49, usePrice: 3.49, amount: 350, unit: "g" },
  nori: { label: "Nori-Blätter", cat: "vorrat", buyPrice: 2.49, usePrice: 1.0, amount: 4, unit: "Blätter" },
  burgerbroetchen: { label: "Burgerbrötchen", cat: "grund", buyPrice: 2.49, usePrice: 2.49, amount: 4, unit: "Stück" },
  gruenkohl: { label: "Grünkohl", cat: "gemuese", buyPrice: 2.49, usePrice: 2.49, amount: 800, unit: "g" },
  udonnudeln: { label: "Udon-Nudeln", cat: "grund", buyPrice: 2.49, usePrice: 2.49, amount: 400, unit: "g" },
  raeucherlachs: { label: "Räucherlachs", cat: "fleisch", buyPrice: 5.99, usePrice: 5.99, amount: 350, unit: "g" }
});

dishes.push(...newRecipes021);

const recipeIngredientCorrections = {
  "Mango Sticky Rice": ["reis","kokosmilch","zucker","mango"],
  "Halloumi vom Grill": ["halloumi","zucchini","paprika","olivenoel","zitrone"],
  "Tiramisu": ["mascarpone","loeffelbiskuits","kaffee","eier","zucker","kakao"],
  "Panna Cotta": ["sahne","zucker","vanille","gelatine","beeren"],
  "Crème brûlée": ["sahne","eier","zucker","vanille"],
  "Schokopudding": ["milch","zucker","kakao","speisestaerke","schokolade"],
  "Vanillepudding": ["milch","zucker","vanille","speisestaerke"],
  "Selbstgemachte Pizza": ["mehl","hefe","dosentomaten","mozzarella","basilikum","olivenoel"],
  "Focaccia": ["mehl","hefe","olivenoel","rosmarin"],
  "Croissant": ["mehl","hefe","butter","milch","zucker"],
  "Zimtschnecken": ["mehl","hefe","milch","butter","zucker","zimt"],
  "Baklava": ["filoteig","butter","mandeln","zucker","honig"],
  "Cannoli": ["mehl","ricotta","zucker","schokolade"],
  "Wiener Schnitzel": ["kalbfleisch","mehl","eier","paniermehl","zitrone"],
  "Rouladen": ["rindfleisch","senf","speck","zwiebeln","gewuerzgurken"],
  "Labskaus": ["kartoffeln","rindfleisch","rotebete","gewuerzgurken","eier","zwiebeln"],
  "Borschtsch": ["rotebete","rotkohl","kartoffeln","karotten","rindfleisch","bruehe"],
  "Rote Grütze": ["beeren","zucker","speisestaerke"],
  "Bagel mit Lachs und Quark": ["bagel","lachs","quark","gurke"],
  "Baba Ganoush mit Fladenbrot": ["aubergine","fladenbrot","sesam","zitrone","knoblauch","olivenoel"],
  "Tzatziki mit Fladenbrot": ["joghurt","gurke","knoblauch","zitrone","fladenbrot"],
  "Käsefondue": ["reibekaese","weisswein","knoblauch","baguette","speisestaerke"],
  "Frühlingsrollen": ["fruehlingsrollenteig","karotten","rotkohl","sojasauce"],
  "Gyoza": ["gyozateig","hackfleisch","rotkohl","ingwer","sojasauce"],
  "Lasagne": ["lasagneplatten","hackfleisch","dosentomaten","zwiebeln","milch","butter","mehl","reibekaese"]
};

function defaultRecipeAmount(dish, id) {
  const meta = ingredientVocab[id];
  let amount = meta.amount;
  const name = dish.name.toLowerCase();
  if (id === "eier" && /omelett|frittata|shakshuka/.test(name)) amount = 6;
  if (id === "eier" && /kuchen|torte|brownie|tiramisu|crème brûlée/.test(name)) amount = 4;
  if (id === "kartoffeln" && /kartoffel|pommes|rösti|gnocchi|labskaus/.test(name)) amount = 800;
  if (id === "nudeln") amount = 400;
  if (id === "reis" && /risotto|paella|biryani|reis|bowl|jambalaya/.test(name)) amount = 320;
  if (id === "mehl" && /pizza|focaccia|brot|croissant|zimtschnecken/.test(name)) amount = 500;
  if (id === "mehl" && /kuchen|tarte|muffin|brownie|cookie/.test(name)) amount = 250;
  if (id === "hackfleisch" || id === "haehnchen" || id === "schweinefleisch" || id === "fisch" || id === "tofu") amount = 500;
  if (id === "rindfleisch" || id === "kalbfleisch" || id === "lamm") amount = 600;
  if (id === "lachs") amount = 600;
  if (id === "garnelen") amount = 400;
  if (id === "dosentomaten" && /suppe|eintopf|curry|chili|bolognese|lasagne|gulasch/.test(name)) amount = 800;
  if (id === "bruehe" && /suppe|eintopf|risotto|borschtsch|pho|ramen/.test(name)) amount = 1000;
  if (id === "reibekaese" && /fondue/.test(name)) amount = 600;
  return [amount, meta.unit];
}

function recipeTiming(dish) {
  if (typeof dish.prepMinutes === "number" && typeof dish.cookMinutes === "number" && dish.prepMinutes > 0 && dish.cookMinutes > 0) {
    return { prep: dish.prepMinutes, cook: dish.cookMinutes };
  }
  const name = dish.name.toLowerCase();
  const special = [
    [/tiramisu|panna cotta|mousse|\beis\b/, [30, 240]],
    [/croissant/, [45, 150]],
    [/rouladen|gulasch|cassoulet|braten|ragout/, [30, 120]],
    [/bananenbrot|focaccia|pizza|zimtschnecken/, [30, 75]],
    [/eintopf|borschtsch|pho|biryani|lasagne|moussaka/, [25, 60]]
  ].find(function(entry){ return entry[0].test(name); });
  if (special) return { prep: special[1][0], cook: special[1][1] };
  const total = typeof dish.minutes === "number" ? dish.minutes : ({ schnell: 20, normal: 40, aufwendig: 75 }[dish.time] || 40);
  const prep = Math.max(8, Math.round((total * (dish.type === "süß" ? .38 : .3)) / 5) * 5);
  return { prep: prep, cook: Math.max(5, total - prep) };
}

function recipeDifficulty(dish) {
  const name = dish.name.toLowerCase();
  if (/croissant|soufflé|rouladen|risotto|ravioli|gyoza|baklava|beef wellington|crème brûlée/.test(name)) return "Anspruchsvoll";
  if (dish.time === "aufwendig" || /lasagne|braten|biryani|paella|torte|quiche/.test(name)) return "Mittel";
  return "Einfach";
}

function recipeTip(dish) {
  const name = dish.name.toLowerCase();
  if (dish.ingredients.indexOf("haehnchen") !== -1 || dish.ingredients.indexOf("hackfleisch") !== -1) return "Fleisch vollständig durchgaren; es darf innen nicht mehr roh oder rosa sein.";
  if (dish.ingredients.indexOf("fisch") !== -1 || dish.ingredients.indexOf("lachs") !== -1) return "Fisch bis zum gewünschten Gargrad erhitzen und besonders bei Risikogruppen vollständig durchgaren.";
  if (/salat|caprese|bruschetta|ceviche/.test(name)) return "Dressing und empfindliche Zutaten erst kurz vor dem Servieren mischen.";
  if (/reis|risotto|paella|biryani/.test(name)) return "Die Flüssigkeit nach und nach kontrollieren, damit der Reis gar, aber nicht matschig wird.";
  if (/nudel|pasta|spaghetti|carbonara|lasagne/.test(name)) return "Etwas Kochwasser aufheben: Es bindet die Sauce besser als zusätzliche Sahne.";
  if (/kuchen|muffin|brownie|cookie|tarte|crumble/.test(name)) return "Trockene Zutaten nur kurz unterheben, damit das Gebäck locker bleibt.";
  if (/schnitzel|nugget|puffer|rösti|pommes|fritt/.test(name)) return "In kleinen Portionen arbeiten, damit die Temperatur in Pfanne oder Ofen stabil bleibt.";
  if (/suppe|eintopf|curry|gulasch|borschtsch/.test(name)) return "Nach dem Köcheln erneut abschmecken; Gewürze wirken mit der Zeit kräftiger.";
  return "Garzeit gegen Ende prüfen und Salz, Pfeffer sowie Säure erst final ausbalancieren.";
}

function generatedRecipeSteps(dish) {
  const name = dish.name.toLowerCase();
  const labels = dish.ingredients.map(function(id){ return ingredientVocab[id].label; });
  const ingredientText = labels.join(", ");
  const protein = dish.ingredients.filter(function(id){ return ingredientVocab[id].cat === "fleisch"; }).map(function(id){ return ingredientVocab[id].label; }).join(" und ");
  const vegetables = dish.ingredients.filter(function(id){ return ingredientVocab[id].cat === "gemuese"; }).map(function(id){ return ingredientVocab[id].label; }).join(", ");
  const base = dish.ingredients.filter(function(id){ return ingredientVocab[id].cat === "grund"; }).map(function(id){ return ingredientVocab[id].label; }).join(" und ");

  if (dish.type === "süß" && /tiramisu|panna cotta|mousse|pudding|grütze|eis/.test(name)) return [
    "Alle Zutaten abwiegen und " + ingredientText + " griffbereit stellen.",
    "Die Grundmasse bei niedriger bis mittlerer Hitze glatt rühren; dabei ständig am Topfboden entlangarbeiten.",
    "Aromen und empfindliche Zutaten erst einarbeiten, wenn die Masse nicht mehr stark kocht.",
    "In Portionsgefäße füllen und zunächst auf Raumtemperatur abkühlen lassen.",
    "Abgedeckt vollständig kühlen und erst direkt vor dem Servieren garnieren."
  ];
  if (dish.type === "süß" && /kuchen|muffin|brownie|cookie|tarte|strudel|crumble|baklava|croissant|zimtschnecken/.test(name)) return [
    "Backofen passend zum Gebäck auf 180 °C Ober-/Unterhitze vorheizen und die Form vorbereiten.",
    "Die trockenen Zutaten aus " + ingredientText + " gleichmäßig vermischen.",
    "Flüssige Zutaten separat verrühren und nur so lange unterheben, bis ein gleichmäßiger Teig entsteht.",
    "Teig formen beziehungsweise in die Form geben und Oberfläche oder Füllung gleichmäßig verteilen.",
    "Goldbraun backen, die Garprobe machen und vor dem Anschneiden ausreichend abkühlen lassen."
  ];
  if (/salat|caprese|bruschetta|ceviche|tartar|tzatziki|baba ganoush/.test(name)) return [
    "Alle Zutaten waschen, trocken tupfen und in mundgerechte Stücke schneiden.",
    (vegetables || ingredientText) + " in einer großen Schüssel locker vermengen.",
    "Aus Öl, Säure und den Würzzutaten ein ausgewogenes Dressing beziehungsweise eine Creme rühren.",
    "Dressing unterheben und das Gericht 5 bis 10 Minuten durchziehen lassen.",
    "Noch einmal abschmecken und frisch mit den übrigen Zutaten servieren."
  ];
  if (/suppe|eintopf|curry|gulasch|borschtsch|cassoulet|ragout|chili|dal|harira|pho|ramen|tom kha|laksa/.test(name)) return [
    "Zutaten vorbereiten: " + ingredientText + "; feste Zutaten möglichst gleich groß schneiden.",
    "Zwiebeln, Gewürze und gegebenenfalls " + (protein || "Gemüse") + " in einem großen Topf aromatisch anrösten.",
    "Brühe, Tomaten oder Kokosmilch angießen und den Topfansatz vollständig lösen.",
    (vegetables || "Die übrigen Zutaten") + " zugeben und bei sanfter Hitze gar köcheln lassen.",
    "Konsistenz einstellen, kräftig abschmecken und vor dem Servieren kurz ruhen lassen."
  ];
  if (/pizza|auflauf|lasagne|gratin|quiche|pie|braten|ofengemüse|gebacken|moussaka|parmigiana/.test(name)) return [
    "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine passende Form vorbereiten.",
    "Alle Zutaten vorbereiten: " + ingredientText + ".",
    (protein || vegetables || "Die Hauptzutaten") + " je nach Garzeit kurz anbraten oder vorgaren.",
    "Alles gleichmäßig schichten beziehungsweise in der Form verteilen und Sauce oder Belag darübergeben.",
    "Im heißen Ofen vollständig garen, kurz ruhen lassen und erst dann portionieren."
  ];
  if (/pasta|spaghetti|nudel|carbonara|cacio|tagliatelle|ravioli|tortellini|gnocchi/.test(name)) return [
    (base || "Nudeln") + " in reichlich Salzwasser bissfest garen; eine Tasse Kochwasser zurückbehalten.",
    "Währenddessen " + (vegetables || protein || "die Saucenzutaten") + " vorbereiten und in einer großen Pfanne garen.",
    "Sauce mit den übrigen Zutaten aufbauen und bei mittlerer Hitze sämig werden lassen.",
    "Die abgetropfte Pasta direkt in die Pfanne geben und mit etwas Kochwasser gründlich durchschwenken.",
    "Final abschmecken, kurz ziehen lassen und sofort servieren."
  ];
  if (/reis|risotto|paella|biryani|jambalaya|pilaw|bowl/.test(name)) return [
    "Reis abspülen beziehungsweise Risottoreis trocken bereitstellen und alle Zutaten schneiden.",
    (protein || vegetables || "Die Aromaten") + " in einem breiten Topf oder einer Pfanne anrösten.",
    "Reis zugeben, kurz mitrösten und die vorgesehene Flüssigkeit angießen.",
    "Bei kontrollierter Hitze garen; dabei Flüssigkeit und Biss regelmäßig prüfen.",
    "Mit den restlichen Zutaten vollenden, abschmecken und locker angerichtet servieren."
  ];
  if (/schnitzel|nugget|puffer|rösti|pommes|fritt|falafel|frühlingsrolle|gyoza/.test(name)) return [
    "Alle Zutaten vorbereiten: " + ingredientText + "; feuchte Zutaten sorgfältig trocken tupfen.",
    "Masse formen beziehungsweise die Zutaten nacheinander panieren oder füllen.",
    "Pfanne oder Ofen auf die passende Temperatur bringen und nur wenig auf einmal hineingeben.",
    "Rundherum goldbraun und vollständig garen; einmal kontrolliert wenden.",
    "Kurz abtropfen beziehungsweise ruhen lassen, abschmecken und knusprig servieren."
  ];
  return [
    "Alle Zutaten vorbereiten und abmessen: " + ingredientText + ".",
    (base ? base + " nach Packungsangabe beziehungsweise bis zur gewünschten Garstufe zubereiten." : "Pfanne oder Topf auf mittlere Hitze bringen und die Aromaten anschwitzen."),
    (protein || vegetables || "Die Hauptzutaten") + " gleichmäßig anbraten beziehungsweise garen.",
    "Die übrigen Zutaten zugeben, sorgfältig vermengen und die Konsistenz bei Bedarf anpassen.",
    "Gargrad prüfen, final abschmecken und das Gericht heiß anrichten."
  ];
}

const curatedRecipeCorrections = {
  "Tiramisu": {
    steps: [
      "Starken Kaffee brühen, in eine flache Schale geben und vollständig abkühlen lassen.",
      "Für eine sichere Zubereitung pasteurisierte Eier verwenden. Eier trennen und Eigelb mit Zucker mehrere Minuten dickcremig aufschlagen; Mascarpone nur kurz glatt unterrühren.",
      "Eiweiß in einer sauberen Schüssel steif schlagen und vorsichtig unter die Mascarponecreme heben.",
      "Löffelbiskuits jeweils nur kurz im kalten Kaffee wenden und abwechselnd mit der Creme in eine Form schichten.",
      "Mindestens 4 Stunden vollständig durchkühlen lassen und erst direkt vor dem Servieren mit Backkakao bestäuben."
    ],
    tip: "Pasteurisierte Eier verwenden und das Tiramisu durchgehend gekühlt aufbewahren."
  },
  "Crème brûlée": {
    steps: [
      "Backofen auf 150 °C Ober-/Unterhitze vorheizen und vier ofenfeste Förmchen in eine tiefe Form stellen.",
      "Sahne mit Vanille langsam erhitzen, aber nicht kochen lassen; anschließend einige Minuten ziehen lassen.",
      "Eier trennen. Eigelb mit einem Teil des Zuckers verrühren, ohne zu viel Luft einzuschlagen, und die warme Sahne langsam unterrühren.",
      "Creme durch ein feines Sieb in die Förmchen gießen. Heißes Wasser bis etwa zur halben Höhe der Förmchen angießen und 35 bis 45 Minuten stocken lassen.",
      "Vollständig abkühlen und mindestens 2 Stunden kühlen. Restlichen Zucker dünn aufstreuen und unmittelbar vor dem Servieren karamellisieren."
    ],
    tip: "Die Creme ist fertig, wenn der Rand fest ist und die Mitte beim Bewegen noch leicht wackelt."
  },
  "Currywurst mit Pommes": {
    steps: [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen. Kartoffeln in gleichmäßige Stifte schneiden, gründlich abspülen und sehr gut trocknen.",
      "Kartoffelstifte mit wenig Öl mischen, auf einem Blech verteilen und 30 bis 35 Minuten backen; nach der Hälfte der Zeit wenden.",
      "Dosentomaten in einem kleinen Topf einkochen, mit Currypulver, Salz und einer Prise Zucker abschmecken und fein pürieren.",
      "Würste in einer Pfanne rundherum vollständig erhitzen und kräftig anbräunen, anschließend in Stücke schneiden.",
      "Pommes salzen, Currywurst mit der heißen Sauce überziehen und mit zusätzlichem Currypulver servieren."
    ],
    tip: "Die Kartoffeln werden knuspriger, wenn sie vor dem Backen vollständig trocken sind und nicht übereinanderliegen."
  },
  "Pho": {
    steps: [
      "Zwiebeln halbieren und mit den Schnittflächen in einem großen Topf kräftig anrösten; Ingwer in Scheiben schneiden und kurz mitrösten.",
      "Brühe angießen, Hähnchenbrust einlegen und bei kleiner Hitze vollständig gar ziehen lassen; anschließend herausnehmen und in feine Stücke schneiden.",
      "Brühe durch ein Sieb gießen, erneut erhitzen und mit Salz sowie nach Wunsch etwas Säure sorgfältig abschmecken.",
      "Nudeln nach Packungsangabe separat garen, abgießen und auf vorgewärmte Schalen verteilen.",
      "Hähnchen auf die Nudeln geben, mit der kochend heißen Brühe übergießen und sofort servieren."
    ],
    tip: "Das Hähnchen vollständig durchgaren; die klare Brühe nur sanft köcheln lassen."
  }
};

dishes.forEach(function(dish) {
  const detailedRecipe = curatedRecipes022[dish.name];
  if (detailedRecipe) Object.assign(dish, detailedRecipe, { amounts: Object.assign({}, detailedRecipe.amounts), ingredients: detailedRecipe.ingredients.slice(), steps: detailedRecipe.steps.slice() });
  const correction = curatedRecipeCorrections[dish.name];
  if (correction) {
    dish.steps = correction.steps.slice();
    dish.tip = correction.tip;
  }
  dish.recipeIsGenerated = !(Array.isArray(dish.steps) && dish.steps.length >= 4);
  if (!detailedRecipe && recipeIngredientCorrections[dish.name]) dish.ingredients = recipeIngredientCorrections[dish.name].slice();
  const timing = recipeTiming(dish);
  dish.prepMinutes = timing.prep;
  dish.cookMinutes = timing.cook;
  dish.minutes = timing.prep + timing.cook;
  dish.difficulty = dish.difficulty || recipeDifficulty(dish);
  dish.tip = dish.tip || recipeTip(dish);
  dish.amounts = dish.amounts || {};
  dish.ingredients.forEach(function(id) {
    if (!dish.amounts[id] || !ingredientVocab[id]) dish.amounts[id] = defaultRecipeAmount(dish, id);
  });
  dish.steps = dish.steps && dish.steps.length >= 4 ? dish.steps : generatedRecipeSteps(dish);
  const stepCount = Math.max(1, dish.steps.length);
  const totalMinutes = Math.max(stepCount, dish.minutes);
  const firstStepMinutes = Math.max(1, Math.min(dish.prepMinutes, totalMinutes - (stepCount - 1)));
  const remainingMinutes = totalMinutes - firstStepMinutes;
  const remainingSteps = Math.max(1, stepCount - 1);
  const baseStepMinutes = Math.floor(remainingMinutes / remainingSteps);
  const extraMinutes = remainingMinutes % remainingSteps;
  dish.stepMinutes = dish.steps.map(function(_, index) {
    if (index === 0) return firstStepMinutes;
    return baseStepMinutes + (index <= extraMinutes ? 1 : 0);
  });
});
