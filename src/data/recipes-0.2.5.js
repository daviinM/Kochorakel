// 100 neue Premium-Rezepte für Kochorakel 0.2.5.
// Das kompakte Datenformat wird beim Laden in das vollständige Rezeptmodell übersetzt.

const allergenIngredients = {
  gluten: ["nudeln", "mehl", "toast", "couscous", "tortilla", "gnocchi", "bulgur", "bagel", "filoteig", "gyozateig", "fruehlingsrollenteig", "baguette", "lasagneplatten", "loeffelbiskuits", "butterkekse", "burgerbroetchen", "udonnudeln", "sojasauce"],
  milch: ["milch", "sahne", "butter", "reibekaese", "joghurt", "mozzarella", "feta", "quark", "parmesan", "frischkaese", "mascarpone", "ricotta", "halloumi", "cheddar", "paneer", "gorgonzola"],
  laktose: ["milch", "sahne", "butter", "reibekaese", "joghurt", "mozzarella", "feta", "quark", "parmesan", "frischkaese", "mascarpone", "ricotta", "halloumi", "cheddar", "paneer", "gorgonzola"],
  eier: ["eier"],
  nuesse: ["mandeln", "pesto"],
  erdnuesse: ["erdnuesse"],
  soja: ["tofu", "sojasauce", "miso"],
  fisch: ["fisch", "lachs", "raeucherlachs", "thunfisch", "fischsauce"],
  schalentiere: ["garnelen"],
  sesam: ["sesam"],
  sellerie: ["sellerie", "bruehe"],
  senf: ["senf"]
};

function timerFromStep(step) {
  const text = step.toLowerCase();
  const values = [];
  const factors = { minute: 1, minuten: 1, stunde: 60, stunden: 60, tag: 1440, tage: 1440, tagen: 1440 };
  let match;
  const range = /(\d+)\s*(?:bis|–|-)\s*(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  const single = /(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  while ((match = range.exec(text))) values.push(Number(match[2]) * (factors[match[3].replace(/n$/, "")] || factors[match[3]] || 1));
  while ((match = single.exec(text))) values.push(Number(match[1]) * (factors[match[2].replace(/n$/, "")] || factors[match[2]] || 1));
  if (/über nacht/.test(text)) values.push(480);
  return values.length ? Math.max(...values) : null;
}

function buildRecipe(spec, index) {
  const ingredientIds = Object.keys(spec.amounts);
  const allergens = Object.entries(allergenIngredients)
    .filter(([, ids]) => ids.some(id => ingredientIds.includes(id)))
    .map(([allergen]) => allergen);
  const minutes = spec.prep + spec.cook + (spec.rest || 0);
  return {
    id: `ko-${String(325 + index).padStart(4, "0")}`,
    name: spec.name,
    emoji: spec.emoji,
    time: minutes <= 30 ? "schnell" : minutes >= 60 ? "aufwendig" : "normal",
    diet: spec.diet,
    type: spec.type || "herzhaft",
    premium: true,
    ingredients: ingredientIds,
    amounts: spec.amounts,
    prepMinutes: spec.prep,
    cookMinutes: spec.cook,
    restMinutes: spec.rest || 0,
    minutes,
    difficulty: spec.difficulty,
    allergens,
    steps: spec.steps,
    stepTimers: spec.steps.map(timerFromStep),
    tip: spec.tip
  };
}

const recipeSpecs = [
  {
    name: "Linguine al Limone", emoji: "🍋", diet: "vegetarisch", prep: 10, cook: 15, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], zitrone: [2, "Stück"], sahne: [180, "ml"], parmesan: [80, "g"], butter: [25, "g"], petersilie: [15, "g"] },
    steps: [
      "Nudeln in reichlich Salzwasser nach Packungsangabe bissfest kochen und dabei eine Tasse Kochwasser auffangen.",
      "Zitronen heiß abwaschen, die Schale fein abreiben und den Saft getrennt auspressen.",
      "Butter und Sahne in einer großen Pfanne 3 Minuten sanft erwärmen, ohne die Mischung stark kochen zu lassen.",
      "Nudeln, Zitronenschale und die Hälfte des Safts in die Pfanne geben und mit etwas Kochwasser cremig schwenken.",
      "Parmesan bei ausgeschalteter Hitze einrühren, mit restlichem Zitronensaft abschmecken und mit Petersilie servieren."
    ],
    tip: "Den Parmesan erst abseits der direkten Hitze einrühren, damit die Sauce glatt bleibt und nicht verklumpt."
  },
  {
    name: "Rigatoni mit Pilz-Sahne", emoji: "🍄", diet: "vegetarisch", prep: 12, cook: 20, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], champignons: [450, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], sahne: [220, "ml"], parmesan: [60, "g"], olivenoel: [2, "EL"], thymian: [1, "TL"] },
    steps: [
      "Champignons trocken säubern und in Scheiben schneiden, Zwiebel und Knoblauch fein würfeln.",
      "Nudeln in Salzwasser bissfest kochen und ungefähr 150 ml Kochwasser zurückbehalten.",
      "Champignons im heißen Öl portionsweise 6 bis 8 Minuten kräftig braten, bis sie gebräunt sind.",
      "Zwiebel, Knoblauch und Thymian zugeben, 3 Minuten mitbraten und anschließend die Sahne angießen.",
      "Nudeln und Parmesan unterheben, mit Kochwasser auf die gewünschte Cremigkeit bringen und sofort servieren."
    ],
    tip: "Die Pilze portionsweise braten; eine überfüllte Pfanne lässt sie Wasser ziehen statt aromatisch zu rösten."
  },
  {
    name: "Spaghetti Puttanesca", emoji: "🍝", diet: "vegan", prep: 10, cook: 22, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], dosentomaten: [500, "g"], oliven: [100, "g"], kapern: [35, "g"], knoblauch: [3, "Zehen"], chili: [1, "Stück"], olivenoel: [2, "EL"], petersilie: [15, "g"] },
    steps: [
      "Knoblauch in dünne Scheiben schneiden, Chili fein hacken sowie Oliven und Kapern grob zerkleinern.",
      "Knoblauch und Chili im Olivenöl 2 Minuten bei mittlerer Hitze duftend anschwitzen.",
      "Dosentomaten, Oliven und Kapern zugeben und die Sauce offen 15 Minuten sanft einkochen lassen.",
      "Spaghetti parallel in Salzwasser bissfest kochen und etwas Kochwasser aufbewahren.",
      "Spaghetti mit der Sauce vermengen, bei Bedarf Kochwasser ergänzen und mit gehackter Petersilie abschließen."
    ],
    tip: "Kapern und Oliven bringen bereits viel Salz mit; die Sauce deshalb erst unmittelbar vor dem Servieren salzen."
  },
  {
    name: "Penne mit Brokkoli und Zitrone", emoji: "🥦", diet: "vegetarisch", prep: 12, cook: 18, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], brokkoli: [500, "g"], zitrone: [1, "Stück"], knoblauch: [2, "Zehen"], parmesan: [70, "g"], olivenoel: [3, "EL"], chili: [1, "Stück"] },
    steps: [
      "Brokkoli in kleine Röschen teilen, den geschälten Strunk würfeln und Knoblauch sowie Chili fein schneiden.",
      "Nudeln in Salzwasser kochen und den Brokkoli während der letzten 5 Minuten direkt im Nudelwasser mitgaren.",
      "Knoblauch und Chili im Olivenöl 2 Minuten anschwitzen, ohne den Knoblauch zu bräunen.",
      "Nudeln und Brokkoli abgießen, etwas Kochwasser auffangen und alles in der Pfanne kräftig vermengen.",
      "Zitronenabrieb, Zitronensaft und Parmesan unterheben und die Pasta saftig abschmecken."
    ],
    tip: "Einige Brokkoliröschen beim Schwenken leicht zerdrücken; dadurch bindet das Gemüse die Sauce besonders gut."
  },
  {
    name: "Tagliatelle mit Lachs und Dill", emoji: "🐟", diet: "alles", prep: 12, cook: 18, difficulty: "Mittel",
    amounts: { nudeln: [400, "g"], lachs: [400, "g"], sahne: [200, "ml"], zitrone: [1, "Stück"], dill: [18, "g"], zwiebeln: [1, "Stück"], butter: [20, "g"] },
    steps: [
      "Lachs trocken tupfen, in große Würfel schneiden und Zwiebel sowie Dill fein hacken.",
      "Nudeln nach Packungsangabe bissfest kochen und 150 ml Nudelwasser auffangen.",
      "Lachswürfel in der Butter rundherum 4 Minuten anbraten, vorsichtig herausheben und beiseitestellen.",
      "Zwiebel im Bratensatz glasig dünsten, Sahne angießen und beides zusammen 8 Minuten sanft garen.",
      "Nudeln, Lachs, Dill und Zitronensaft vorsichtig unterheben, kurz erwärmen und direkt servieren."
    ],
    tip: "Den Lachs nur kurz in der fertigen Sauce erwärmen, damit die Würfel saftig bleiben und nicht zerfallen."
  },
  {
    name: "Pasta mit gerösteter Paprikacreme", emoji: "🌶️", diet: "vegetarisch", prep: 15, cook: 28, difficulty: "Mittel",
    amounts: { nudeln: [400, "g"], paprika: [4, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], frischkaese: [150, "g"], parmesan: [50, "g"], olivenoel: [2, "EL"], basilikum: [15, "g"] },
    steps: [
      "Paprika vierteln, entkernen und mit der Hautseite nach oben auf ein Backblech legen.",
      "Paprika im vorgeheizten Ofen bei 230 Grad 18 Minuten rösten, bis die Haut dunkle Blasen zeigt.",
      "Zwiebel und Knoblauch fein würfeln und im Olivenöl 4 Minuten weich anschwitzen.",
      "Paprika kurz abkühlen lassen, häuten und mit Zwiebel, Knoblauch sowie Frischkäse fein pürieren.",
      "Nudeln bissfest kochen, mit der Paprikacreme und Parmesan vermengen und mit Basilikum servieren."
    ],
    tip: "Die geröstete Paprika direkt nach dem Ofen kurz abdecken; im entstehenden Dampf lässt sich die Haut leichter lösen."
  },
  {
    name: "Nudeln mit Kürbis-Salbei-Sauce", emoji: "🎃", diet: "vegetarisch", prep: 15, cook: 25, difficulty: "Mittel",
    amounts: { nudeln: [400, "g"], kuerbis: [600, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [250, "ml"], sahne: [120, "ml"], salbei: [12, "g"], parmesan: [60, "g"], olivenoel: [2, "EL"] },
    steps: [
      "Kürbis in kleine Würfel schneiden, Zwiebel und Knoblauch fein hacken sowie Salbeiblätter abzupfen.",
      "Kürbis und Zwiebel im Öl 6 Minuten anrösten, Knoblauch kurz vor Ende hinzufügen.",
      "Brühe angießen und den Kürbis zugedeckt 12 Minuten weich köcheln lassen.",
      "Sahne zugeben, alles fein pürieren und mit der Hälfte des Salbeis abschmecken.",
      "Nudeln bissfest kochen, mit der Sauce vermengen und mit Parmesan sowie restlichem Salbei anrichten."
    ],
    tip: "Hokkaido kann mit Schale verarbeitet werden; dadurch bleibt mehr Farbe und nussiger Geschmack in der Sauce."
  },
  {
    name: "Cremige Erbsen-Pasta", emoji: "🫛", diet: "vegetarisch", prep: 10, cook: 17, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], erbsen: [350, "g"], frischkaese: [160, "g"], zitrone: [1, "Stück"], knoblauch: [1, "Zehe"], parmesan: [60, "g"], olivenoel: [1, "EL"], basilikum: [15, "g"] },
    steps: [
      "Nudeln in Salzwasser bissfest garen und zwei Schöpfkellen Kochwasser zurückbehalten.",
      "Erbsen in einem kleinen Topf 5 Minuten garen und etwa ein Drittel für die Einlage beiseitestellen.",
      "Übrige Erbsen mit Frischkäse, Knoblauch, Zitronensaft und etwas Kochwasser fein pürieren.",
      "Erbsencreme in einer Pfanne 3 Minuten erwärmen und mit Parmesan glatt rühren.",
      "Nudeln und ganze Erbsen unterheben, mit Zitronenabrieb sowie Basilikum vollenden und sofort servieren."
    ],
    tip: "Die Sauce nur sanft erwärmen, damit sie ihre frische grüne Farbe und den süßlichen Erbsengeschmack behält."
  },
  {
    name: "Kürbis-Spinat-Lasagne", emoji: "🧀", diet: "vegetarisch", prep: 25, cook: 53, rest: 8, difficulty: "Aufwendig",
    amounts: { lasagneplatten: [250, "g"], kuerbis: [650, "g"], spinat: [300, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], dosentomaten: [400, "g"], ricotta: [300, "g"], mozzarella: [180, "g"], olivenoel: [2, "EL"], thymian: [1, "TL"] },
    steps: [
      "Kürbis klein würfeln, Zwiebel und Knoblauch hacken und den Spinat gründlich waschen.",
      "Kürbis mit Zwiebel im Öl 10 Minuten anbraten, bis die Würfel an den Rändern leicht gebräunt sind.",
      "Knoblauch, Tomaten und Thymian zum Kürbis geben und die Sauce 8 Minuten offen köcheln lassen.",
      "Spinat in einer separaten Pfanne 3 Minuten zusammenfallen lassen und anschließend mit Ricotta verrühren.",
      "Tomaten-Kürbis-Sauce, Lasagneplatten und Spinat-Ricotta abwechselnd in eine Form schichten.",
      "Mit Mozzarella bedecken und bei 190 Grad 32 Minuten backen, bis die Oberfläche goldbraun ist.",
      "Lasagne vor dem Anschneiden 8 Minuten ruhen lassen, damit die Schichten stabil bleiben."
    ],
    tip: "Die Kürbiswürfel klein und gleichmäßig schneiden, damit sie gleichzeitig gar werden und die Lasagne gut portionierbar bleibt."
  },
  {
    name: "Nudelauflauf mit Schinken und Erbsen", emoji: "🥘", diet: "alles", prep: 15, cook: 35, rest: 5, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], schinken: [220, "g"], erbsen: [250, "g"], sahne: [250, "ml"], milch: [150, "ml"], reibekaese: [180, "g"], eier: [2, "Stück"], zwiebeln: [1, "Stück"] },
    steps: [
      "Nudeln in Salzwasser 3 Minuten kürzer als auf der Packung angegeben vorkochen und abgießen.",
      "Schinken würfeln, Zwiebel fein hacken und beides mit den Erbsen unter die Nudeln mischen.",
      "Sahne, Milch und Eier verquirlen, kräftig würzen und die Hälfte des Käses einrühren.",
      "Nudelmischung in eine gefettete Form geben, Guss darüber verteilen und übrigen Käse aufstreuen.",
      "Auflauf bei 190 Grad 27 Minuten goldbraun backen und aus dem Ofen nehmen.",
      "Den fertigen Auflauf vor dem Portionieren 5 Minuten ruhen lassen, damit sich der Guss setzt."
    ],
    tip: "Die Nudeln bewusst sehr bissfest vorkochen, da sie im cremigen Guss weitergaren und sonst zu weich werden."
  },
  {
    name: "Pilz-Parmesan-Risotto", emoji: "🍚", diet: "vegetarisch", prep: 12, cook: 28, difficulty: "Mittel",
    amounts: { reis: [320, "g"], champignons: [400, "g"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], bruehe: [900, "ml"], weisswein: [120, "ml"], parmesan: [80, "g"], butter: [35, "g"], thymian: [1, "TL"] },
    steps: [
      "Brühe in einem Topf erhitzen und warm halten, Champignons in Scheiben sowie Zwiebel und Knoblauch fein schneiden.",
      "Champignons in der Hälfte der Butter 7 Minuten kräftig braten und anschließend beiseitestellen.",
      "Zwiebel und Knoblauch im Bratensatz anschwitzen, Reis zugeben und 2 Minuten glasig rösten.",
      "Mit Weißwein ablöschen und nach und nach heiße Brühe einrühren, insgesamt 20 Minuten sanft garen.",
      "Pilze, restliche Butter, Parmesan und Thymian unterheben und das Risotto cremig fließend servieren."
    ],
    tip: "Die Brühe immer heiß zugeben und das Risotto nicht trocken kochen; auf dem Teller soll es leicht auseinanderlaufen."
  },
  {
    name: "Tomaten-Basilikum-Risotto", emoji: "🍅", diet: "vegetarisch", prep: 10, cook: 27, difficulty: "Mittel",
    amounts: { reis: [320, "g"], tomaten: [5, "Stück"], dosentomaten: [250, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [750, "ml"], parmesan: [70, "g"], butter: [30, "g"], basilikum: [20, "g"] },
    steps: [
      "Frische Tomaten würfeln, Zwiebel und Knoblauch fein hacken und die Brühe in einem Topf warm halten.",
      "Zwiebel und Knoblauch in der Hälfte der Butter 3 Minuten glasig dünsten.",
      "Reis zugeben, 2 Minuten mitrösten und anschließend die Dosentomaten einrühren.",
      "Warme Brühe portionsweise zufügen und den Reis unter regelmäßigem Rühren 19 Minuten garen.",
      "Tomatenwürfel, Parmesan, übrige Butter und gezupftes Basilikum unterheben und saftig servieren."
    ],
    tip: "Die frischen Tomaten erst am Ende zugeben, damit sie Struktur behalten und das Risotto nicht wässrig wird."
  },
  {
    name: "Zitronen-Erbsen-Risotto", emoji: "🍋", diet: "vegetarisch", prep: 10, cook: 26, difficulty: "Mittel",
    amounts: { reis: [320, "g"], erbsen: [300, "g"], zitrone: [1, "Stück"], zwiebeln: [1, "Stück"], bruehe: [900, "ml"], parmesan: [75, "g"], butter: [35, "g"], petersilie: [15, "g"] },
    steps: [
      "Brühe erhitzen und warm halten, Zwiebel fein würfeln sowie die Zitronenschale dünn abreiben.",
      "Zwiebel in der Hälfte der Butter 3 Minuten glasig dünsten, Reis zugeben und kurz mitrösten.",
      "Brühe portionsweise einrühren und den Reis 16 Minuten bei mittlerer Hitze garen.",
      "Erbsen zugeben und weitere 4 Minuten garen, bis Reis und Erbsen bissfest sind.",
      "Parmesan, übrige Butter, Zitronenabrieb, etwas Saft und Petersilie einrühren und sofort servieren."
    ],
    tip: "Zitronensaft vorsichtig dosieren und schrittweise abschmecken, damit die frische Säure das Risotto nicht überdeckt."
  },
  {
    name: "Rote-Bete-Risotto mit Feta", emoji: "🩷", diet: "vegetarisch", prep: 15, cook: 30, difficulty: "Mittel",
    amounts: { reis: [320, "g"], rotebete: [450, "g"], feta: [180, "g"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], bruehe: [850, "ml"], weisswein: [100, "ml"], butter: [30, "g"], petersilie: [15, "g"] },
    steps: [
      "Rote Bete in kleine Würfel schneiden, Zwiebel und Knoblauch fein hacken und die Brühe warm halten.",
      "Zwiebel, Knoblauch und Rote Bete in der Hälfte der Butter 6 Minuten anschwitzen.",
      "Reis zugeben, 2 Minuten rösten, mit Weißwein ablöschen und die Flüssigkeit einkochen lassen.",
      "Brühe portionsweise einarbeiten und das Risotto unter Rühren 20 Minuten cremig garen.",
      "Übrige Butter einrühren, Feta darüberbröseln und mit gehackter Petersilie servieren."
    ],
    tip: "Beim Schneiden der Roten Bete Handschuhe tragen; kleine Würfel garen schneller und färben das Risotto gleichmäßig."
  },
  {
    name: "Kürbis-Couscous-Bowl", emoji: "🥣", diet: "vegetarisch", prep: 15, cook: 25, difficulty: "Einfach",
    amounts: { couscous: [280, "g"], kuerbis: [650, "g"], kichererbsen: [350, "g"], feta: [180, "g"], bruehe: [330, "ml"], olivenoel: [3, "EL"], kreuzkuemmel: [1, "TL"], petersilie: [20, "g"], zitrone: [1, "Stück"] },
    steps: [
      "Kürbis würfeln, Kichererbsen abspülen und beides mit Öl sowie Kreuzkümmel vermengen.",
      "Kürbis und Kichererbsen bei 210 Grad 25 Minuten rösten und nach der Hälfte der Zeit wenden.",
      "Couscous mit heißer Brühe übergießen, abdecken und 8 Minuten quellen lassen.",
      "Couscous mit einer Gabel lockern und mit Zitronensaft sowie gehackter Petersilie abschmecken.",
      "Couscous auf Schalen verteilen, Ofengemüse daraufgeben und Feta grob darüberbröseln."
    ],
    tip: "Das Backblech nicht zu dicht belegen, damit Kürbis und Kichererbsen rösten und nicht im eigenen Dampf weich werden."
  },
  {
    name: "Mediterrane Bulgurpfanne", emoji: "🫑", diet: "vegan", prep: 15, cook: 24, difficulty: "Einfach",
    amounts: { bulgur: [300, "g"], paprika: [2, "Stück"], aubergine: [1, "Stück"], tomaten: [4, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [600, "ml"], oliven: [80, "g"], olivenoel: [3, "EL"], petersilie: [20, "g"] },
    steps: [
      "Paprika, Aubergine und Tomaten gleichmäßig würfeln, Zwiebel und Knoblauch fein hacken.",
      "Aubergine und Paprika im Öl 8 Minuten kräftig anbraten, anschließend Zwiebel und Knoblauch zugeben.",
      "Bulgur einrühren, Brühe angießen und alles zugedeckt 12 Minuten sanft garen.",
      "Tomaten und Oliven unterheben und die Pfanne weitere 4 Minuten offen ziehen lassen.",
      "Mit gehackter Petersilie, Pfeffer und einem Spritzer Zitronensaft frisch abschmecken."
    ],
    tip: "Den Bulgur nach dem Garen kurz ohne Deckel stehen lassen und dann auflockern, damit die Körner getrennt bleiben."
  },
  {
    name: "Gemüse-Paella mit Kichererbsen", emoji: "🥘", diet: "vegan", prep: 18, cook: 32, rest: 5, difficulty: "Mittel",
    amounts: { reis: [340, "g"], kichererbsen: [350, "g"], paprika: [2, "Stück"], tomaten: [4, "Stück"], erbsen: [200, "g"], zwiebeln: [1, "Stück"], knoblauch: [3, "Zehen"], bruehe: [850, "ml"], safran: [1, "Päckchen"], olivenoel: [3, "EL"], zitrone: [1, "Stück"] },
    steps: [
      "Paprika und Tomaten würfeln, Zwiebel und Knoblauch fein hacken und Kichererbsen abspülen.",
      "Zwiebel und Paprika im Öl 7 Minuten anbraten, dann Knoblauch und Tomaten hinzufügen.",
      "Reis einstreuen, 2 Minuten mitrösten und Brühe sowie Safran gleichmäßig angießen.",
      "Paella ohne Rühren zunächst 10 Minuten sanft garen und dabei nicht am Pfannenboden kratzen.",
      "Kichererbsen und Erbsen gleichmäßig verteilen und den Reis weitere 8 Minuten ohne Rühren garen.",
      "Hitze kurz erhöhen, bis sich am Boden eine leichte Kruste bildet, dann 5 Minuten ruhen lassen.",
      "Mit Zitronenspalten servieren und erst am Tisch vorsichtig vom Rand zur Mitte mischen."
    ],
    tip: "Nach dem Angießen nicht mehr rühren; so bleibt der Reis locker und am Boden entsteht die typische leichte Kruste."
  },
  {
    name: "Reisauflauf mit Brokkoli", emoji: "🥦", diet: "vegetarisch", prep: 18, cook: 35, rest: 5, difficulty: "Einfach",
    amounts: { reis: [300, "g"], brokkoli: [550, "g"], eier: [3, "Stück"], milch: [300, "ml"], sahne: [150, "ml"], reibekaese: [180, "g"], zwiebeln: [1, "Stück"], senf: [1, "EL"] },
    steps: [
      "Reis in Salzwasser 12 Minuten vorgaren, abgießen und kurz ausdampfen lassen.",
      "Brokkoli in kleine Röschen teilen und 4 Minuten in kochendem Wasser blanchieren.",
      "Zwiebel fein würfeln und Reis, Brokkoli sowie Zwiebel in einer Auflaufform verteilen.",
      "Eier, Milch, Sahne, Senf und die Hälfte des Käses verquirlen und gleichmäßig darübergeben.",
      "Restlichen Käse aufstreuen und den Auflauf bei 190 Grad 30 Minuten goldbraun backen.",
      "Vor dem Portionieren 5 Minuten stehen lassen, damit der Guss leicht fest wird."
    ],
    tip: "Brokkoli nur kurz blanchieren und kalt abschrecken, damit er im Auflauf grün und noch leicht bissfest bleibt."
  },
  {
    name: "Linsen-Reis-Pilaw", emoji: "🍚", diet: "vegan", prep: 12, cook: 35, rest: 5, difficulty: "Einfach",
    amounts: { reis: [260, "g"], linsen: [220, "g"], zwiebeln: [2, "Stück"], knoblauch: [2, "Zehen"], bruehe: [900, "ml"], kreuzkuemmel: [1, "TL"], zimt: [1, "TL"], olivenoel: [3, "EL"], petersilie: [20, "g"] },
    steps: [
      "Linsen abspülen, Zwiebeln in feine Streifen schneiden und Knoblauch hacken.",
      "Eine Zwiebel im Öl 8 Minuten goldbraun braten und als knusprige Garnitur herausnehmen.",
      "Übrige Zwiebel, Knoblauch, Kreuzkümmel und Zimt 3 Minuten im Topf anschwitzen.",
      "Reis und Linsen zugeben, Brühe angießen und zugedeckt 24 Minuten sanft garen.",
      "Pilaw 5 Minuten ruhen lassen, mit einer Gabel lockern und mit Röstzwiebel sowie Petersilie servieren."
    ],
    tip: "Die Flüssigkeitsmenge kann je nach Linsensorte leicht variieren; gegen Ende nur bei Bedarf etwas Brühe nachgießen."
  },
  {
    name: "Mango-Curry-Reis mit Tofu", emoji: "🥭", diet: "vegan", prep: 18, cook: 25, difficulty: "Mittel",
    amounts: { reis: [300, "g"], tofu: [400, "g"], mango: [2, "Stück"], paprika: [2, "Stück"], kokosmilch: [400, "ml"], currypaste: [2, "EL"], sojasauce: [2, "EL"], limette: [1, "Stück"], olivenoel: [2, "EL"], koriander: [15, "g"] },
    steps: [
      "Reis nach Packungsangabe garen, Tofu trocken pressen und in zwei Zentimeter große Würfel schneiden.",
      "Tofu im heißen Öl 8 Minuten rundherum goldbraun braten und mit Sojasauce ablöschen.",
      "Paprika in Streifen schneiden, zum Tofu geben und 4 Minuten mitbraten.",
      "Currypaste einrühren, Kokosmilch angießen und alles 8 Minuten sanft köcheln lassen.",
      "Mango würfeln, kurz unterheben und das Curry mit Limettensaft sowie Koriander zum Reis servieren."
    ],
    tip: "Die Mango erst ganz zum Schluss hinzufügen, damit sie ihre Form und ihren frischen süß-säuerlichen Geschmack behält."
  },
  {
    name: "Rosmarin-Kartoffelspalten mit Feta-Dip", emoji: "🥔", diet: "vegetarisch", prep: 15, cook: 35, difficulty: "Einfach",
    amounts: { kartoffeln: [900, "g"], feta: [180, "g"], joghurt: [220, "g"], knoblauch: [1, "Zehe"], rosmarin: [12, "g"], olivenoel: [3, "EL"], zitrone: [1, "Stück"], petersilie: [12, "g"] },
    steps: [
      "Kartoffeln gründlich waschen, längs in gleichmäßige Spalten schneiden und sorgfältig trocken tupfen.",
      "Kartoffelspalten mit Olivenöl, gehacktem Rosmarin, Salz und Pfeffer auf einem Blech vermengen.",
      "Kartoffeln bei 210 Grad zunächst 20 Minuten backen, ohne das Blech zwischendurch zu öffnen.",
      "Kartoffelspalten vorsichtig wenden und weitere 15 Minuten goldbraun sowie knusprig backen.",
      "Feta mit Joghurt, fein geriebenem Knoblauch und Zitronensaft zu einem groben Dip verrühren.",
      "Knusprige Kartoffelspalten mit Petersilie bestreuen und zusammen mit dem Feta-Dip servieren."
    ],
    tip: "Die Spalten vor dem Würzen gut trocknen und mit Abstand verteilen, damit sie außen wirklich knusprig werden."
  },
  {
    name: "Kartoffel-Lauch-Gratin", emoji: "🥔", diet: "vegetarisch", prep: 20, cook: 45, rest: 5, difficulty: "Mittel",
    amounts: { kartoffeln: [900, "g"], lauch: [2, "Stück"], sahne: [300, "ml"], milch: [200, "ml"], knoblauch: [1, "Zehe"], reibekaese: [180, "g"], butter: [20, "g"], thymian: [1, "TL"] },
    steps: [
      "Kartoffeln schälen und in sehr dünne Scheiben hobeln, Lauch längs waschen und in Ringe schneiden.",
      "Lauch in der Butter 5 Minuten weich dünsten und mit Thymian würzen.",
      "Sahne, Milch und fein geriebenen Knoblauch verrühren und kräftig mit Salz sowie Pfeffer abschmecken.",
      "Kartoffeln und Lauch dachziegelartig in eine Form schichten und den Sahneguss gleichmäßig darübergeben.",
      "Mit Käse bestreuen und bei 185 Grad 45 Minuten backen, bis die Kartoffeln weich sind.",
      "Gratin vor dem Anschneiden 5 Minuten ruhen lassen, damit sich die Flüssigkeit verteilt."
    ],
    tip: "Gleichmäßig dünne Kartoffelscheiben sind entscheidend; mit einem Hobel garen alle Schichten zur selben Zeit."
  },
  {
    name: "Süßkartoffel-Kichererbsen-Blech", emoji: "🍠", diet: "vegan", prep: 15, cook: 32, difficulty: "Einfach",
    amounts: { suesskartoffel: [800, "g"], kichererbsen: [400, "g"], paprika: [2, "Stück"], zwiebeln: [2, "Stück"], olivenoel: [3, "EL"], paprikapulver: [2, "TL"], kreuzkuemmel: [1, "TL"], zitrone: [1, "Stück"], petersilie: [18, "g"] },
    steps: [
      "Süßkartoffeln in zwei Zentimeter große Würfel, Paprika in Stücke und Zwiebeln in Spalten schneiden.",
      "Kichererbsen gründlich abspülen und mit dem geschnittenen Gemüse auf einem Blech verteilen.",
      "Alles mit Öl, Paprikapulver, Kreuzkümmel, Salz und Pfeffer sorgfältig vermengen.",
      "Gemüse bei 210 Grad zunächst 18 Minuten rösten, damit die Unterseite Farbe annimmt.",
      "Alles mit einem Pfannenwender wenden und weitere 14 Minuten knusprig backen.",
      "Mit Zitronensaft beträufeln, gehackte Petersilie unterheben und direkt vom Blech servieren."
    ],
    tip: "Die Kichererbsen vor dem Backen gut trocken tupfen; dadurch werden sie außen deutlich knuspriger."
  },
  {
    name: "Kartoffel-Pilz-Gulasch", emoji: "🍲", diet: "vegan", prep: 18, cook: 35, difficulty: "Einfach",
    amounts: { kartoffeln: [800, "g"], champignons: [450, "g"], paprika: [2, "Stück"], zwiebeln: [2, "Stück"], knoblauch: [2, "Zehen"], dosentomaten: [400, "g"], bruehe: [450, "ml"], tomatenmark: [2, "EL"], paprikapulver: [2, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Kartoffeln würfeln, Pilze vierteln, Paprika in Stücke schneiden und Zwiebeln sowie Knoblauch hacken.",
      "Pilze im heißen Öl 6 Minuten kräftig anbraten und anschließend kurz aus dem Topf nehmen.",
      "Zwiebeln, Paprika und Tomatenmark 5 Minuten rösten, dann Knoblauch und Paprikapulver einrühren.",
      "Kartoffeln, Dosentomaten und Brühe zugeben und das Gulasch zugedeckt 24 Minuten köcheln lassen.",
      "Pilze wieder einlegen, 5 Minuten offen ziehen lassen und das Gulasch kräftig abschmecken."
    ],
    tip: "Paprikapulver nur kurz mitrösten und sofort Flüssigkeit zugeben, da es bei zu hoher Hitze bitter werden kann."
  },
  {
    name: "Gefüllte Ofenkartoffeln mit Brokkoli", emoji: "🥦", diet: "vegetarisch", prep: 15, cook: 55, difficulty: "Einfach",
    amounts: { kartoffeln: [4, "Stück"], brokkoli: [400, "g"], cheddar: [160, "g"], joghurt: [180, "g"], fruehlingszwiebeln: [3, "Stück"], olivenoel: [1, "EL"], senf: [1, "EL"] },
    steps: [
      "Große Kartoffeln waschen, rundherum einstechen, mit Öl einreiben und auf ein Backblech legen.",
      "Kartoffeln bei 200 Grad 45 Minuten backen, bis sie sich leicht eindrücken lassen.",
      "Brokkoli fein teilen, 5 Minuten in Salzwasser garen und gut abtropfen lassen.",
      "Kartoffeln längs öffnen, etwas Inneres herauslösen und mit Brokkoli, Joghurt, Senf und Käse vermengen.",
      "Füllung zurückgeben und die Kartoffeln weitere 10 Minuten überbacken.",
      "Mit fein geschnittenen Frühlingszwiebeln bestreuen und heiß servieren."
    ],
    tip: "Kartoffeln ähnlicher Größe auswählen, damit sie gleichzeitig weich sind und keine Füllung trocken wird."
  },
  {
    name: "Kartoffel-Feta-Taler", emoji: "🧆", diet: "vegetarisch", prep: 22, cook: 20, difficulty: "Mittel",
    amounts: { kartoffeln: [750, "g"], feta: [180, "g"], eier: [2, "Stück"], paniermehl: [100, "g"], petersilie: [20, "g"], zwiebeln: [1, "Stück"], olivenoel: [3, "EL"], joghurt: [200, "g"], zitrone: [1, "Stück"] },
    steps: [
      "Kartoffeln schälen, würfeln und in Salzwasser 15 Minuten weich kochen, danach gut ausdampfen lassen.",
      "Kartoffeln grob stampfen und mit zerbröseltem Feta, Ei, Paniermehl, Zwiebel und Petersilie vermengen.",
      "Masse kräftig würzen, mit feuchten Händen zwölf flache Taler formen und kurz beiseitestellen.",
      "Taler im Öl portionsweise je Seite 4 Minuten goldbraun und knusprig braten.",
      "Joghurt mit Zitronensaft verrühren und als frischen Dip zu den Talern servieren."
    ],
    tip: "Die gekochten Kartoffeln gründlich ausdampfen lassen; eine trockene Masse lässt sich leichter formen und braten."
  },
  {
    name: "Spanische Kartoffelpfanne", emoji: "🥘", diet: "vegetarisch", prep: 15, cook: 28, difficulty: "Einfach",
    amounts: { kartoffeln: [750, "g"], paprika: [2, "Stück"], zwiebeln: [1, "Stück"], eier: [4, "Stück"], dosentomaten: [300, "g"], knoblauch: [2, "Zehen"], olivenoel: [3, "EL"], paprikapulver: [2, "TL"], petersilie: [15, "g"] },
    steps: [
      "Kartoffeln in kleine Würfel, Paprika in Streifen und Zwiebel sowie Knoblauch fein schneiden.",
      "Kartoffeln im Öl zugedeckt 12 Minuten braten und dabei mehrfach wenden.",
      "Paprika und Zwiebel zugeben und alles weitere 7 Minuten offen kräftig anbraten.",
      "Knoblauch, Paprikapulver und Tomaten einrühren und die Sauce 5 Minuten einkochen lassen.",
      "Vier Mulden formen, Eier hineinschlagen und zugedeckt 6 Minuten stocken lassen.",
      "Die Kartoffelpfanne mit gehackter Petersilie bestreuen und direkt aus der Pfanne servieren."
    ],
    tip: "Für gleichmäßige Garzeiten die Kartoffeln höchstens anderthalb Zentimeter groß würfeln und häufig wenden."
  },
  {
    name: "Kartoffel-Erbsen-Suppe mit Minzjoghurt", emoji: "🥣", diet: "vegetarisch", prep: 12, cook: 25, difficulty: "Einfach",
    amounts: { kartoffeln: [600, "g"], erbsen: [350, "g"], zwiebeln: [1, "Stück"], lauch: [1, "Stück"], bruehe: [850, "ml"], sahne: [120, "ml"], joghurt: [180, "g"], petersilie: [20, "g"], butter: [20, "g"] },
    steps: [
      "Kartoffeln schälen und würfeln, Lauch gründlich waschen und mit der Zwiebel fein schneiden.",
      "Zwiebel und Lauch in Butter 5 Minuten weich dünsten, ohne Farbe annehmen zu lassen.",
      "Kartoffeln und Brühe zugeben und zugedeckt 15 Minuten weich kochen.",
      "Erbsen hinzufügen, weitere 5 Minuten garen und die Suppe mit Sahne fein pürieren.",
      "Joghurt mit gehackter Petersilie verrühren und als frischen Klecks auf der heißen Suppe servieren."
    ],
    tip: "Die Erbsen erst spät zugeben und nur kurz garen, damit die Suppe frisch schmeckt und leuchtend grün bleibt."
  },
  {
    name: "Kartoffel-Wedges mit Avocado-Dip", emoji: "🥑", diet: "vegan", prep: 15, cook: 38, difficulty: "Einfach",
    amounts: { kartoffeln: [900, "g"], avocado: [2, "Stück"], limette: [1, "Stück"], knoblauch: [1, "Zehe"], olivenoel: [3, "EL"], paprikapulver: [2, "TL"], chili: [1, "Stück"], koriander: [15, "g"] },
    steps: [
      "Kartoffeln waschen, in gleichmäßige Spalten schneiden und in einer Schüssel mit kaltem Wasser spülen.",
      "Spalten gründlich trocknen und mit Öl, Paprikapulver, Salz und Pfeffer vermengen.",
      "Kartoffeln bei 215 Grad zunächst 22 Minuten backen, bis die Unterseite gebräunt ist.",
      "Wedges vorsichtig wenden und weitere 16 Minuten knusprig zu Ende backen.",
      "Avocado mit Limettensaft, Knoblauch und fein gehackter Chili grob zerdrücken.",
      "Dip mit Koriander abschmecken und unmittelbar zu den heißen Kartoffel-Wedges servieren."
    ],
    tip: "Das Abspülen entfernt überschüssige Stärke; anschließend sehr gut trocknen, damit die Wedges knusprig backen."
  },
  {
    name: "Kartoffel-Linsen-Auflauf", emoji: "🥘", diet: "vegan", prep: 22, cook: 63, rest: 8, difficulty: "Mittel",
    amounts: { kartoffeln: [850, "g"], linsen: [250, "g"], dosentomaten: [400, "g"], karotten: [250, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [450, "ml"], tomatenmark: [2, "EL"], olivenoel: [2, "EL"], thymian: [1, "TL"] },
    steps: [
      "Kartoffeln schälen und dünn hobeln, Karotten würfeln sowie Zwiebel und Knoblauch fein hacken.",
      "Zwiebel und Karotten im Öl 6 Minuten anschwitzen, Tomatenmark und Knoblauch kurz mitrösten.",
      "Linsen, Dosentomaten, Brühe und Thymian zugeben und die Füllung 15 Minuten köcheln lassen.",
      "Linsenfüllung und Kartoffelscheiben abwechselnd in eine Auflaufform schichten und gut abdecken.",
      "Auflauf zugedeckt bei 190 Grad 35 Minuten backen, damit die Kartoffeln gleichmäßig weich werden.",
      "Abdeckung entfernen und den Auflauf weitere 7 Minuten offen bräunen lassen.",
      "Auflauf 8 Minuten ruhen lassen und erst dann in feste Portionen schneiden."
    ],
    tip: "Die Kartoffeln wirklich dünn hobeln; dicke Scheiben bleiben im tomatenhaltigen Auflauf leicht zu fest."
  },
  {
    name: "Hähnchen in Paprika-Sahne", emoji: "🍗", diet: "alles", prep: 15, cook: 25, difficulty: "Einfach",
    amounts: { haehnchen: [600, "g"], paprika: [3, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], sahne: [250, "ml"], bruehe: [180, "ml"], tomatenmark: [2, "EL"], paprikapulver: [2, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Hähnchen trocken tupfen und in mundgerechte Stücke, Paprika in Streifen und Zwiebel in Würfel schneiden.",
      "Hähnchen im heißen Öl portionsweise 6 Minuten goldbraun anbraten und kurz beiseitestellen.",
      "Paprika und Zwiebel im Bratensatz 7 Minuten anbraten, Knoblauch und Tomatenmark kurz mitrösten.",
      "Brühe und Sahne angießen, Paprikapulver einrühren und die Sauce 6 Minuten sanft köcheln.",
      "Hähnchen zurückgeben und 5 Minuten in der Sauce vollständig gar ziehen lassen."
    ],
    tip: "Das Fleisch portionsweise braten, damit es bräunt; austretender Saft würde die Pfanne sonst zu stark abkühlen."
  },
  {
    name: "Hähnchen mit Tomate und Mozzarella", emoji: "🍅", diet: "alles", prep: 15, cook: 28, difficulty: "Einfach",
    amounts: { haehnchen: [600, "g"], tomaten: [5, "Stück"], mozzarella: [250, "g"], dosentomaten: [300, "g"], knoblauch: [2, "Zehen"], olivenoel: [2, "EL"], basilikum: [20, "g"], thymian: [1, "TL"] },
    steps: [
      "Hähnchenbrust in vier gleich dicke Stücke teilen, Tomaten und Mozzarella in Scheiben schneiden.",
      "Hähnchen im Öl von jeder Seite 3 Minuten anbraten und anschließend in eine Auflaufform legen.",
      "Knoblauch kurz im Bratensatz anschwitzen, Dosentomaten und Thymian zugeben und 5 Minuten köcheln.",
      "Sauce über das Hähnchen geben und jedes Stück mit Tomaten sowie Mozzarella belegen.",
      "Bei 200 Grad 18 Minuten backen, bis das Hähnchen durchgegart und der Käse gebräunt ist.",
      "Vor dem Servieren frisches Basilikum darüberzupfen und kurz ruhen lassen."
    ],
    tip: "Sehr dicke Hähnchenbrüste waagerecht halbieren, damit sie gleichmäßig gar werden und saftig bleiben."
  },
  {
    name: "Hähnchen-Kokos-Suppe", emoji: "🥥", diet: "alles", prep: 15, cook: 24, difficulty: "Einfach",
    amounts: { haehnchen: [450, "g"], kokosmilch: [400, "ml"], bruehe: [600, "ml"], champignons: [250, "g"], paprika: [1, "Stück"], ingwer: [25, "g"], currypaste: [2, "EL"], limette: [2, "Stück"], fischsauce: [1, "EL"], koriander: [15, "g"] },
    steps: [
      "Hähnchen in dünne Streifen, Pilze in Scheiben und Paprika in feine Stücke schneiden.",
      "Ingwer fein reiben und zusammen mit der Currypaste 2 Minuten in einem Topf anrösten.",
      "Brühe und Kokosmilch angießen, Pilze sowie Paprika zugeben und 8 Minuten köcheln lassen.",
      "Hähnchenstreifen einlegen und bei geringer Hitze 8 Minuten vollständig gar ziehen lassen.",
      "Suppe mit Limettensaft und Fischsauce abschmecken und mit Koriander bestreut servieren."
    ],
    tip: "Nach dem Einlegen des Hähnchens nur sanft köcheln; starkes Kochen macht die dünnen Fleischstreifen trocken."
  },
  {
    name: "Zitronen-Hähnchen-Reis-Suppe", emoji: "🍋", diet: "alles", prep: 15, cook: 32, difficulty: "Mittel",
    amounts: { haehnchen: [450, "g"], reis: [180, "g"], bruehe: [1200, "ml"], karotten: [250, "g"], sellerie: [2, "Stück"], zwiebeln: [1, "Stück"], zitrone: [2, "Stück"], eier: [2, "Stück"], petersilie: [18, "g"] },
    steps: [
      "Karotten, Sellerie und Zwiebel fein würfeln, Hähnchen in mundgerechte Stücke schneiden.",
      "Gemüse in einem großen Topf 5 Minuten anschwitzen, Brühe und Reis hinzufügen.",
      "Suppe mit dem Reis zugedeckt 15 Minuten sanft köcheln lassen.",
      "Hähnchenstücke zugeben und die Suppe weitere 8 Minuten garen, bis das Fleisch durch ist.",
      "Eier in einer Schüssel verquirlen und langsam Zitronensaft sowie zwei Kellen heiße Brühe einrühren.",
      "Eiermischung bei ausgeschalteter Hitze in die Suppe rühren, ohne sie danach erneut aufzukochen.",
      "Mit Zitronenabrieb, Petersilie, Salz und Pfeffer abschmecken und direkt servieren."
    ],
    tip: "Die Eiermischung behutsam mit heißer Brühe temperieren; so bindet sie die Suppe cremig, ohne zu stocken."
  },
  {
    name: "Hähnchen-Spinat-Curry", emoji: "🍛", diet: "alles", prep: 15, cook: 26, difficulty: "Einfach",
    amounts: { haehnchen: [550, "g"], spinat: [350, "g"], kokosmilch: [400, "ml"], dosentomaten: [300, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], ingwer: [20, "g"], currypulver: [2, "TL"], olivenoel: [2, "EL"], reis: [300, "g"] },
    steps: [
      "Reis nach Packungsangabe garen, Hähnchen würfeln sowie Zwiebel, Knoblauch und Ingwer fein hacken.",
      "Hähnchen im Öl 6 Minuten rundherum anbraten und anschließend kurz aus der Pfanne nehmen.",
      "Zwiebel, Knoblauch, Ingwer und Currypulver 3 Minuten im Bratensatz anschwitzen.",
      "Tomaten und Kokosmilch angießen und die Sauce 8 Minuten sanft einkochen lassen.",
      "Hähnchen und Spinat zugeben, weitere 6 Minuten garen und das Curry mit Reis servieren."
    ],
    tip: "Frischen Spinat portionsweise unterheben; er fällt schnell zusammen und lässt sich so gleichmäßig verteilen."
  },
  {
    name: "Hähnchen-Bulgur-Pfanne", emoji: "🍗", diet: "alles", prep: 15, cook: 25, difficulty: "Einfach",
    amounts: { haehnchen: [550, "g"], bulgur: [280, "g"], paprika: [2, "Stück"], tomaten: [3, "Stück"], zwiebeln: [1, "Stück"], bruehe: [600, "ml"], tomatenmark: [1, "EL"], olivenoel: [2, "EL"], paprikapulver: [2, "TL"], petersilie: [18, "g"] },
    steps: [
      "Hähnchen in Stücke, Paprika und Tomaten in Würfel sowie Zwiebel in feine Streifen schneiden.",
      "Hähnchen im Öl 6 Minuten goldbraun braten und mit Paprikapulver würzen.",
      "Zwiebel und Paprika zugeben und alles weitere 5 Minuten kräftig anbraten.",
      "Tomatenmark und Bulgur einrühren, Brühe angießen und zugedeckt 12 Minuten sanft garen.",
      "Tomatenwürfel und Petersilie unterheben, kurz durchziehen lassen und locker aufschaufeln."
    ],
    tip: "Nach dem Garen den Bulgur zwei Minuten ruhen lassen und erst dann auflockern, damit er nicht matschig wird."
  },
  {
    name: "Hähnchen mit Pilzrahm", emoji: "🍄", diet: "alles", prep: 15, cook: 24, difficulty: "Einfach",
    amounts: { haehnchen: [600, "g"], champignons: [450, "g"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], sahne: [250, "ml"], bruehe: [150, "ml"], senf: [1, "EL"], butter: [25, "g"], thymian: [1, "TL"] },
    steps: [
      "Hähnchen in flache Stücke schneiden, Pilze in Scheiben und Zwiebel sowie Knoblauch fein würfeln.",
      "Hähnchen in der Hälfte der Butter pro Seite 3 Minuten anbraten und warm beiseitestellen.",
      "Pilze in der übrigen Butter 7 Minuten kräftig bräunen, danach Zwiebel und Knoblauch zugeben.",
      "Brühe, Sahne, Senf und Thymian einrühren und die Sauce 6 Minuten reduzieren lassen.",
      "Hähnchen zurück in die Pfanne legen und 5 Minuten in der Sauce fertig garen."
    ],
    tip: "Pilze erst salzen, wenn sie gebräunt sind; frühes Salzen zieht Wasser und verhindert kräftige Röstaromen."
  },
  {
    name: "Hähnchen-Süßkartoffel-Blech", emoji: "🍠", diet: "alles", prep: 15, cook: 38, difficulty: "Einfach",
    amounts: { haehnchen: [600, "g"], suesskartoffel: [750, "g"], paprika: [2, "Stück"], zwiebeln: [2, "Stück"], olivenoel: [3, "EL"], paprikapulver: [2, "TL"], thymian: [1, "TL"], zitrone: [1, "Stück"] },
    steps: [
      "Süßkartoffeln würfeln, Paprika in Stücke und Zwiebeln in Spalten schneiden.",
      "Gemüse mit zwei Dritteln des Öls, Paprikapulver, Thymian, Salz und Pfeffer vermengen.",
      "Gemüse bei 210 Grad zunächst 15 Minuten allein auf einem großen Blech rösten.",
      "Hähnchen in große Stücke schneiden, mit restlichem Öl würzen und zwischen dem Gemüse verteilen.",
      "Alles weitere 23 Minuten backen, einmal wenden und vor dem Servieren mit Zitronensaft beträufeln."
    ],
    tip: "Das Hähnchen erst später aufs Blech geben; so wird die Süßkartoffel weich, ohne dass das Fleisch austrocknet."
  },
  {
    name: "Hähnchenbrust mit Kräuterkruste", emoji: "🌿", diet: "alles", prep: 18, cook: 24, rest: 5, difficulty: "Mittel",
    amounts: { haehnchen: [600, "g"], paniermehl: [100, "g"], parmesan: [70, "g"], petersilie: [20, "g"], basilikum: [15, "g"], knoblauch: [1, "Zehe"], senf: [2, "EL"], olivenoel: [2, "EL"], zitrone: [1, "Stück"] },
    steps: [
      "Hähnchenbrüste trocken tupfen, auf gleichmäßige Dicke klopfen und in eine geölte Form legen.",
      "Paniermehl, Parmesan, gehackte Kräuter, Knoblauch, Öl und Zitronenabrieb krümelig vermengen.",
      "Hähnchen dünn mit Senf bestreichen und die Kräutermischung fest auf der Oberfläche andrücken.",
      "Im vorgeheizten Ofen bei 200 Grad 24 Minuten backen, bis die Kruste goldbraun ist.",
      "Fleisch vor dem Anschneiden 5 Minuten ruhen lassen und mit Zitronenspalten servieren."
    ],
    tip: "Die Kruste nur leicht andrücken und nicht zu dick auftragen, damit sie knusprig wird und gut haften bleibt."
  },
  {
    name: "Hähnchen-Mango-Wraps", emoji: "🌯", diet: "alles", prep: 20, cook: 12, difficulty: "Einfach",
    amounts: { tortilla: [6, "Stück"], haehnchen: [500, "g"], mango: [1, "Stück"], salat: [180, "g"], paprika: [1, "Stück"], joghurt: [180, "g"], limette: [1, "Stück"], currypulver: [1, "TL"], olivenoel: [2, "EL"], koriander: [12, "g"] },
    steps: [
      "Hähnchen in dünne Streifen schneiden, mit Currypulver, Salz und Pfeffer würzen.",
      "Fleisch im heißen Öl 7 Minuten rundherum braten, bis es vollständig durchgegart ist.",
      "Mango und Paprika in dünne Streifen schneiden, Salat waschen und gut trocknen.",
      "Joghurt mit Limettensaft und fein gehacktem Koriander zu einer frischen Sauce verrühren.",
      "Tortillas jeweils 30 Sekunden erwärmen, mit allen Zutaten belegen, seitlich einschlagen und fest aufrollen."
    ],
    tip: "Die Wraps nur mittig und nicht zu voll belegen; so lassen sie sich dicht rollen und bleiben beim Essen stabil."
  },
  {
    name: "Rindfleisch-Paprika-Pfanne", emoji: "🥩", diet: "alles", prep: 18, cook: 18, difficulty: "Mittel",
    amounts: { rindfleisch: [600, "g"], paprika: [3, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], sojasauce: [3, "EL"], bruehe: [150, "ml"], tomatenmark: [1, "EL"], paprikapulver: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Rindfleisch quer zur Faser in dünne Streifen, Paprika und Zwiebel ebenfalls in Streifen schneiden.",
      "Fleisch im sehr heißen Öl portionsweise jeweils 2 Minuten scharf anbraten und herausnehmen.",
      "Paprika und Zwiebel im Bratensatz 6 Minuten bissfest braten, Knoblauch kurz hinzufügen.",
      "Tomatenmark einrühren, mit Brühe und Sojasauce ablöschen und 4 Minuten einkochen lassen.",
      "Fleisch nur noch 2 Minuten in der Sauce erwärmen und mit Paprikapulver abschmecken."
    ],
    tip: "Das Fleisch unbedingt quer zur sichtbaren Faser schneiden; dadurch bleiben auch kurz gebratene Streifen zart."
  },
  {
    name: "Rinderhack-Lauch-Suppe", emoji: "🍲", diet: "alles", prep: 15, cook: 28, difficulty: "Einfach",
    amounts: { hackfleisch: [500, "g"], lauch: [3, "Stück"], kartoffeln: [450, "g"], zwiebeln: [1, "Stück"], bruehe: [900, "ml"], frischkaese: [220, "g"], olivenoel: [1, "EL"], senf: [1, "EL"] },
    steps: [
      "Lauch längs aufschneiden, gründlich waschen und in Ringe schneiden, Kartoffeln klein würfeln.",
      "Hackfleisch im Öl 7 Minuten krümelig und kräftig gebräunt anbraten.",
      "Zwiebel und Lauch hinzufügen und weitere 5 Minuten unter Rühren anschwitzen.",
      "Kartoffeln und Brühe zugeben und die Suppe zugedeckt 15 Minuten köcheln lassen.",
      "Frischkäse und Senf einrühren, 3 Minuten sanft ziehen lassen und pikant abschmecken."
    ],
    tip: "Den Lauch zwischen den einzelnen Schichten gründlich spülen, weil sich dort häufig feiner Sand versteckt."
  },
  {
    name: "Gefüllte Paprika mit Hack und Reis", emoji: "🫑", diet: "alles", prep: 22, cook: 45, rest: 5, difficulty: "Mittel",
    amounts: { paprika: [4, "Stück"], hackfleisch: [450, "g"], reis: [180, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], dosentomaten: [500, "g"], tomatenmark: [1, "EL"], reibekaese: [120, "g"], olivenoel: [2, "EL"] },
    steps: [
      "Reis 10 Minuten vorkochen und abgießen, Paprika längs halbieren und von Kernen befreien.",
      "Hackfleisch im Öl 6 Minuten krümelig und kräftig gebräunt anbraten.",
      "Zwiebel und Knoblauch zum Hackfleisch geben und weitere 3 Minuten glasig mitdünsten.",
      "Reis und Tomatenmark unter das Fleisch mischen, kräftig würzen und in die Paprikahälften füllen.",
      "Dosentomaten in eine Auflaufform geben, Paprika hineinsetzen und mit Käse bestreuen.",
      "Gefüllte Paprika bei 190 Grad 34 Minuten backen, bis die Schoten weich sind.",
      "Vor dem Servieren 5 Minuten ruhen lassen und zusammen mit der Tomatensauce anrichten."
    ],
    tip: "Paprikahälften statt ganzer Schoten verwenden; sie stehen sicher, garen gleichmäßig und lassen sich leichter portionieren."
  },
  {
    name: "Hackbällchen in Tomatensauce", emoji: "🍅", diet: "alles", prep: 20, cook: 25, difficulty: "Mittel",
    amounts: { hackfleisch: [600, "g"], eier: [1, "Stück"], paniermehl: [70, "g"], parmesan: [50, "g"], dosentomaten: [600, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], olivenoel: [2, "EL"], basilikum: [18, "g"] },
    steps: [
      "Hackfleisch mit Ei, Paniermehl, Parmesan, Salz und Pfeffer gleichmäßig vermengen.",
      "Mit feuchten Händen etwa zwanzig gleich große Bällchen formen und auf einem Teller bereitlegen.",
      "Bällchen im Öl rundherum 7 Minuten anbraten und anschließend vorsichtig herausheben.",
      "Zwiebel und Knoblauch im Bratensatz 4 Minuten dünsten, dann Dosentomaten angießen.",
      "Bällchen in die Sauce legen und zugedeckt 14 Minuten sanft fertig garen.",
      "Sauce abschmecken und die Hackbällchen mit frisch gezupftem Basilikum servieren."
    ],
    tip: "Die Hackmasse nur so lange vermengen, bis alles verbunden ist; zu starkes Kneten macht die Bällchen kompakt."
  },
  {
    name: "Rindfleisch-Couscous-Bowl", emoji: "🥣", diet: "alles", prep: 20, cook: 15, difficulty: "Einfach",
    amounts: { rindfleisch: [500, "g"], couscous: [280, "g"], bruehe: [330, "ml"], gurke: [1, "Stück"], tomaten: [4, "Stück"], feta: [160, "g"], olivenoel: [2, "EL"], zitrone: [1, "Stück"], kreuzkuemmel: [1, "TL"], petersilie: [18, "g"] },
    steps: [
      "Couscous mit heißer Brühe übergießen, abdecken und 8 Minuten quellen lassen.",
      "Rindfleisch in dünne Streifen schneiden und mit Kreuzkümmel, Salz und Pfeffer würzen.",
      "Fleisch im sehr heißen Öl portionsweise insgesamt 5 Minuten kräftig anbraten.",
      "Gurke und Tomaten würfeln, Petersilie hacken und den Couscous mit einer Gabel auflockern.",
      "Alle Bestandteile in Schalen anrichten, Feta darüberbröseln und mit Zitronensaft beträufeln."
    ],
    tip: "Couscous und Fleisch nebeneinander statt übereinander anrichten, damit Salat und Käse frisch und kühl bleiben."
  },
  {
    name: "Schweinegeschnetzeltes mit Pilzen", emoji: "🍄", diet: "alles", prep: 18, cook: 22, difficulty: "Einfach",
    amounts: { schweinefleisch: [600, "g"], champignons: [400, "g"], zwiebeln: [1, "Stück"], sahne: [250, "ml"], bruehe: [150, "ml"], senf: [1, "EL"], butter: [25, "g"], petersilie: [15, "g"] },
    steps: [
      "Schweinefleisch quer zur Faser in feine Streifen schneiden, Pilze und Zwiebel in Scheiben schneiden.",
      "Fleisch in der Hälfte der Butter portionsweise 4 Minuten scharf anbraten und herausnehmen.",
      "Pilze in der übrigen Butter 7 Minuten bräunen, bis die austretende Flüssigkeit verdampft ist.",
      "Zwiebel zu den gebräunten Pilzen geben und weitere 3 Minuten glasig mitdünsten.",
      "Mit Brühe und Sahne ablöschen, Senf einrühren und die Sauce 5 Minuten reduzieren.",
      "Fleisch zurückgeben, 3 Minuten fertig garen und mit gehackter Petersilie servieren."
    ],
    tip: "Das dünn geschnittene Fleisch nur kurz fertig garen; langes Köcheln in der Sauce macht es unnötig trocken."
  },
  {
    name: "Paprika-Schweine-Pfanne", emoji: "🫑", diet: "alles", prep: 15, cook: 20, difficulty: "Einfach",
    amounts: { schweinefleisch: [600, "g"], paprika: [3, "Stück"], zwiebeln: [2, "Stück"], knoblauch: [2, "Zehen"], dosentomaten: [300, "g"], tomatenmark: [1, "EL"], paprikapulver: [2, "TL"], olivenoel: [2, "EL"], petersilie: [15, "g"] },
    steps: [
      "Schweinefleisch in Streifen, Paprika in mundgerechte Stücke und Zwiebeln in Spalten schneiden.",
      "Fleisch im heißen Öl 5 Minuten kräftig anbraten und anschließend aus der Pfanne nehmen.",
      "Paprika und Zwiebeln im Bratensatz 7 Minuten braten, dann Knoblauch und Tomatenmark zugeben.",
      "Dosentomaten sowie Paprikapulver einrühren und die Sauce 5 Minuten offen einkochen.",
      "Fleisch nochmals 3 Minuten in der Sauce erwärmen und mit Petersilie abschließen."
    ],
    tip: "Für eine leichte Rauchnote Paprikapulver verwenden, es aber nur sehr kurz mit dem Tomatenmark anrösten."
  },
  {
    name: "Lamm-Kichererbsen-Topf", emoji: "🍲", diet: "alles", prep: 20, cook: 55, difficulty: "Mittel",
    amounts: { lamm: [650, "g"], kichererbsen: [400, "g"], dosentomaten: [500, "g"], karotten: [250, "g"], zwiebeln: [2, "Stück"], knoblauch: [3, "Zehen"], bruehe: [400, "ml"], kreuzkuemmel: [2, "TL"], zimt: [1, "TL"], olivenoel: [2, "EL"], petersilie: [18, "g"] },
    steps: [
      "Lammfleisch würfeln, Karotten in Scheiben schneiden sowie Zwiebeln und Knoblauch fein hacken.",
      "Lamm im heißen Öl portionsweise 8 Minuten rundherum kräftig anbraten.",
      "Zwiebeln und Karotten 6 Minuten mitbraten, dann Knoblauch, Kreuzkümmel und Zimt einrühren.",
      "Tomaten und Brühe angießen und den Topf zugedeckt 35 Minuten sanft schmoren lassen.",
      "Kichererbsen hinzufügen und weitere 10 Minuten offen köcheln, bis die Sauce sämig ist.",
      "Mit gehackter Petersilie bestreuen und vor dem Servieren kräftig abschmecken."
    ],
    tip: "Fleisch in kleinen Portionen anbraten; so entstehen Röstaromen, die dem gesamten Schmorgericht Tiefe geben."
  },
  {
    name: "Lamm-Bulgur-Bowl", emoji: "🥣", diet: "alles", prep: 20, cook: 24, difficulty: "Mittel",
    amounts: { lamm: [500, "g"], bulgur: [280, "g"], bruehe: [600, "ml"], gurke: [1, "Stück"], tomaten: [4, "Stück"], joghurt: [220, "g"], knoblauch: [1, "Zehe"], kreuzkuemmel: [1, "TL"], olivenoel: [2, "EL"], zitrone: [1, "Stück"] },
    steps: [
      "Bulgur mit Brühe aufkochen, zugedeckt 12 Minuten sanft garen und anschließend auflockern.",
      "Lamm in schmale Streifen schneiden und mit Kreuzkümmel, Salz sowie Pfeffer würzen.",
      "Lamm im sehr heißen Öl portionsweise 6 Minuten braten und kurz ruhen lassen.",
      "Gurke und Tomaten würfeln, Joghurt mit Knoblauch und etwas Zitronensaft verrühren.",
      "Bulgur, Gemüse und Lamm in Schalen verteilen und den Knoblauchjoghurt darübergeben."
    ],
    tip: "Das gebratene Lamm vor dem Aufschneiden kurz ruhen lassen, damit der Fleischsaft nicht in die Bowl ausläuft."
  },
  {
    name: "Rindfleisch-Kartoffel-Curry", emoji: "🍛", diet: "alles", prep: 20, cook: 50, difficulty: "Mittel",
    amounts: { rindfleisch: [650, "g"], kartoffeln: [600, "g"], dosentomaten: [400, "g"], kokosmilch: [350, "ml"], zwiebeln: [2, "Stück"], knoblauch: [2, "Zehen"], ingwer: [20, "g"], currypulver: [2, "TL"], olivenoel: [2, "EL"], koriander: [15, "g"] },
    steps: [
      "Rindfleisch und Kartoffeln in zwei Zentimeter große Würfel schneiden, Zwiebeln, Knoblauch und Ingwer hacken.",
      "Fleisch im Öl portionsweise 8 Minuten kräftig anbraten und vorübergehend herausnehmen.",
      "Zwiebeln 5 Minuten bräunen, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Tomaten, Kokosmilch und Fleisch zugeben und das Curry zugedeckt 25 Minuten köcheln.",
      "Kartoffeln einlegen und weitere 20 Minuten garen, bis Fleisch und Kartoffeln weich sind.",
      "Curry mit Salz abschmecken und mit frisch gehacktem Koriander bestreuen."
    ],
    tip: "Kartoffeln erst später hinzufügen als das Fleisch, damit sie weich werden, aber beim längeren Schmoren nicht zerfallen."
  },
  {
    name: "Ofenlachs mit Zitronen-Dill", emoji: "🐟", diet: "alles", prep: 12, cook: 20, rest: 3, difficulty: "Einfach",
    amounts: { lachs: [650, "g"], zitrone: [2, "Stück"], dill: [20, "g"], knoblauch: [2, "Zehen"], olivenoel: [2, "EL"], honig: [1, "EL"], senf: [1, "EL"] },
    steps: [
      "Lachs trocken tupfen, auf Backpapier legen und auf eventuell verbliebene Gräten prüfen.",
      "Zitronenschale, Zitronensaft, Öl, Honig, Senf und fein gehackten Knoblauch verrühren.",
      "Marinade auf dem Lachs verteilen und die Hälfte des gehackten Dills darüberstreuen.",
      "Lachs bei 190 Grad 18 bis 20 Minuten backen, bis er innen gerade eben glasig ist.",
      "Fisch 3 Minuten ruhen lassen, mit übrigem Dill bestreuen und in Portionen teilen."
    ],
    tip: "Den Lachs lieber etwas früher prüfen; er gart während der kurzen Ruhezeit noch nach und bleibt dadurch saftig."
  },
  {
    name: "Lachs mit Kräuterkruste", emoji: "🌿", diet: "alles", prep: 16, cook: 18, difficulty: "Mittel",
    amounts: { lachs: [650, "g"], paniermehl: [90, "g"], parmesan: [60, "g"], petersilie: [20, "g"], dill: [15, "g"], zitrone: [1, "Stück"], senf: [1, "EL"], butter: [30, "g"] },
    steps: [
      "Lachsfilet trocken tupfen, portionieren und auf ein mit Backpapier belegtes Blech setzen.",
      "Paniermehl, Parmesan, gehackte Kräuter, Zitronenabrieb und weiche Butter krümelig vermengen.",
      "Lachs dünn mit Senf bestreichen und die Kräutermischung gleichmäßig darauf andrücken.",
      "Bei 200 Grad 16 bis 18 Minuten backen, bis die Kruste goldbraun und der Fisch saftig ist.",
      "Mit etwas Zitronensaft beträufeln und unmittelbar aus dem Ofen servieren."
    ],
    tip: "Die Krustenmischung nicht zu fest pressen; locker aufgelegt wird sie gleichmäßiger braun und bleibt knusprig."
  },
  {
    name: "Lachs-Couscous-Päckchen", emoji: "🎁", diet: "alles", prep: 18, cook: 24, difficulty: "Mittel",
    amounts: { lachs: [600, "g"], couscous: [260, "g"], bruehe: [310, "ml"], zucchini: [1, "Stück"], tomaten: [4, "Stück"], zitrone: [1, "Stück"], olivenoel: [2, "EL"], dill: [15, "g"] },
    steps: [
      "Couscous mit heißer Brühe übergießen, abdecken und 8 Minuten quellen lassen.",
      "Zucchini und Tomaten klein würfeln, Dill hacken und den Couscous mit einer Gabel lockern.",
      "Vier große Bögen Backpapier auslegen und Couscous sowie Gemüse mittig darauf verteilen.",
      "Je ein Lachsfilet auflegen, mit Öl, Zitronensaft, Dill, Salz und Pfeffer würzen.",
      "Papier dicht zu Päckchen falten und bei 200 Grad 16 Minuten im Ofen garen.",
      "Päckchen vorsichtig am Tisch öffnen, da beim Öffnen heißer Dampf entweicht."
    ],
    tip: "Die Papierkanten mehrfach eng umschlagen, damit kein Dampf entweicht und der Lachs schonend gart."
  },
  {
    name: "Fisch in Senf-Dill-Sauce", emoji: "🐟", diet: "alles", prep: 12, cook: 20, difficulty: "Einfach",
    amounts: { fisch: [650, "g"], sahne: [220, "ml"], bruehe: [180, "ml"], senf: [2, "EL"], dill: [20, "g"], zitrone: [1, "Stück"], zwiebeln: [1, "Stück"], butter: [25, "g"] },
    steps: [
      "Fischfilets trocken tupfen, auf Gräten prüfen und von beiden Seiten leicht salzen.",
      "Zwiebel fein würfeln und in Butter 4 Minuten glasig dünsten.",
      "Brühe und Sahne angießen, Senf einrühren und die Sauce 6 Minuten sanft reduzieren.",
      "Fischfilets in die Sauce legen und zugedeckt 8 Minuten bei kleiner Hitze gar ziehen lassen.",
      "Gehackten Dill und Zitronensaft einrühren und den Fisch direkt in der Sauce servieren."
    ],
    tip: "Die Sauce darf mit dem Fisch nur leise ziehen; kräftiges Kochen lässt empfindliche Filets leicht auseinanderfallen."
  },
  {
    name: "Fisch-Reis-Pfanne mit Erbsen", emoji: "🍚", diet: "alles", prep: 15, cook: 28, difficulty: "Einfach",
    amounts: { fisch: [550, "g"], reis: [300, "g"], erbsen: [250, "g"], paprika: [1, "Stück"], zwiebeln: [1, "Stück"], bruehe: [700, "ml"], dosentomaten: [250, "g"], paprikapulver: [1, "TL"], olivenoel: [2, "EL"], zitrone: [1, "Stück"] },
    steps: [
      "Fisch in große Würfel schneiden, Paprika und Zwiebel klein würfeln.",
      "Zwiebel und Paprika im Öl 6 Minuten anbraten, Reis und Paprikapulver kurz mitrösten.",
      "Brühe und Tomaten angießen und den Reis zugedeckt 15 Minuten sanft garen.",
      "Erbsen und Fischwürfel vorsichtig auf dem Reis verteilen und weitere 7 Minuten gar ziehen lassen.",
      "Pfanne mit Zitronensaft abschmecken und vor dem Servieren vorsichtig auflockern."
    ],
    tip: "Den Fisch nicht unterrühren, sondern nur auf den fast fertigen Reis legen, damit die Würfel ihre Form behalten."
  },
  {
    name: "Garnelen-Knoblauch-Pasta", emoji: "🍤", diet: "alles", prep: 14, cook: 16, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], garnelen: [450, "g"], knoblauch: [4, "Zehen"], chili: [1, "Stück"], zitrone: [1, "Stück"], olivenoel: [3, "EL"], butter: [25, "g"], petersilie: [20, "g"] },
    steps: [
      "Nudeln in Salzwasser bissfest kochen und etwa 150 ml Kochwasser auffangen.",
      "Garnelen trocken tupfen, Knoblauch in dünne Scheiben und Chili in feine Ringe schneiden.",
      "Garnelen im heißen Öl je Seite 2 Minuten braten und anschließend kurz herausnehmen.",
      "Knoblauch und Chili in Butter 2 Minuten sanft anschwitzen, ohne sie zu bräunen.",
      "Nudeln, Garnelen, Zitronensaft und Kochwasser in der Pfanne schwenken und mit Petersilie servieren."
    ],
    tip: "Garnelen nur so lange braten, bis sie gerade rosa und fest sind; längeres Garen macht sie schnell zäh."
  },
  {
    name: "Mediterraner Garnelen-Bohnen-Salat", emoji: "🍤", diet: "alles", prep: 20, cook: 8, difficulty: "Einfach",
    amounts: { garnelen: [400, "g"], bohnen: [350, "g"], gurke: [1, "Stück"], tomaten: [4, "Stück"], paprika: [1, "Stück"], oliven: [70, "g"], zitrone: [1, "Stück"], olivenoel: [3, "EL"], petersilie: [20, "g"], knoblauch: [1, "Zehe"] },
    steps: [
      "Bohnen abspülen und gründlich abtropfen lassen, Gurke, Tomaten und Paprika klein würfeln.",
      "Petersilie und Knoblauch fein hacken, Oliven halbieren und alles mit den Bohnen vermengen.",
      "Garnelen trocken tupfen und in einem Esslöffel Öl insgesamt 4 Minuten braten.",
      "Zitronensaft, restliches Olivenöl, Knoblauch, Salz und Pfeffer zu einem Dressing verrühren.",
      "Dressing unter den Bohnensalat heben, Garnelen darauf verteilen und alles lauwarm servieren."
    ],
    tip: "Die Bohnen sehr gut abtropfen lassen, damit das zitronige Dressing konzentriert bleibt und nicht verwässert."
  },
  {
    name: "Thunfisch-Kartoffel-Salat", emoji: "🥗", diet: "alles", prep: 18, cook: 22, rest: 10, difficulty: "Einfach",
    amounts: { thunfisch: [2, "Stück"], kartoffeln: [800, "g"], erbsen: [200, "g"], gewuerzgurken: [4, "Stück"], zwiebeln: [1, "Stück"], joghurt: [200, "g"], senf: [1, "EL"], zitrone: [1, "Stück"], dill: [15, "g"] },
    steps: [
      "Kartoffeln mit Schale in Salzwasser 20 Minuten garen, anschließend abgießen und kurz ausdampfen lassen.",
      "Erbsen 4 Minuten blanchieren, Gewürzgurken und Zwiebel fein würfeln.",
      "Joghurt, Senf, Zitronensaft und gehackten Dill zu einem cremigen Dressing verrühren.",
      "Kartoffeln pellen, in Scheiben schneiden und noch warm vorsichtig mit dem Dressing vermengen.",
      "Erbsen, Gurken und abgetropften Thunfisch unterheben und den Salat 10 Minuten ziehen lassen."
    ],
    tip: "Die Kartoffeln warm mit dem Dressing mischen; dann nehmen sie den Geschmack deutlich besser auf."
  },
  {
    name: "Thunfisch-Tomaten-Wraps", emoji: "🌯", diet: "alles", prep: 18, cook: 2, difficulty: "Einfach",
    amounts: { tortilla: [6, "Stück"], thunfisch: [2, "Stück"], tomaten: [4, "Stück"], salat: [180, "g"], mais: [180, "g"], frischkaese: [180, "g"], zitrone: [1, "Stück"], fruehlingszwiebeln: [3, "Stück"] },
    steps: [
      "Thunfisch und Mais gründlich abtropfen lassen, Tomaten würfeln und Salat in Streifen schneiden.",
      "Frühlingszwiebeln fein schneiden und mit Frischkäse, Zitronensaft, Salz und Pfeffer verrühren.",
      "Thunfisch und Mais vorsichtig unter die Frischkäsecreme heben, ohne den Fisch völlig zu zerdrücken.",
      "Tortillas in einer trockenen Pfanne je Seite 1 Minute erwärmen und flach auslegen.",
      "Mit Salat, Tomaten und Thunfischcreme belegen, Seiten einklappen und die Wraps eng aufrollen."
    ],
    tip: "Wässrige Tomaten entkernen, damit die Wraps auch nach einigen Minuten stabil bleiben und nicht durchweichen."
  },
  {
    name: "Lachs-Frischkäse-Gnocchi", emoji: "🐟", diet: "alles", prep: 12, cook: 18, difficulty: "Einfach",
    amounts: { gnocchi: [700, "g"], lachs: [400, "g"], frischkaese: [200, "g"], spinat: [250, "g"], zwiebeln: [1, "Stück"], zitrone: [1, "Stück"], butter: [20, "g"], dill: [15, "g"] },
    steps: [
      "Lachs in große Würfel schneiden, Zwiebel fein hacken und den Spinat gründlich waschen.",
      "Gnocchi in Butter 7 Minuten rundherum goldbraun braten und aus der Pfanne nehmen.",
      "Lachs im Bratensatz 4 Minuten vorsichtig anbraten und ebenfalls kurz beiseitestellen.",
      "Zwiebel 3 Minuten dünsten, Frischkäse mit etwas Wasser glatt rühren und Spinat zusammenfallen lassen.",
      "Gnocchi und Lachs unterheben, 3 Minuten sanft erwärmen und mit Zitrone sowie Dill abschmecken."
    ],
    tip: "Die Lachswürfel beim letzten Vermengen nur vorsichtig wenden, damit sie saftig bleiben und nicht zerfallen."
  },
  {
    name: "Tofu-Süßkartoffel-Pfanne mit Spinat", emoji: "🍠", diet: "vegan", prep: 18, cook: 28, difficulty: "Einfach",
    amounts: { tofu: [450, "g"], suesskartoffel: [600, "g"], spinat: [300, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [250, "ml"], sojasauce: [2, "EL"], sesam: [2, "EL"], paprikapulver: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Tofu trocken pressen und würfeln, Süßkartoffeln klein schneiden sowie Zwiebel und Knoblauch hacken.",
      "Tofu im heißen Öl 7 Minuten rundherum knusprig braten und anschließend herausnehmen.",
      "Zwiebel und Süßkartoffel 6 Minuten anrösten, Knoblauch und Paprikapulver kurz zugeben.",
      "Brühe angießen und die Süßkartoffel zugedeckt 12 Minuten bissfest garen.",
      "Tofu und Spinat unterheben, 3 Minuten erwärmen und mit Sojasauce sowie Sesam abschmecken."
    ],
    tip: "Die Süßkartoffel klein und gleichmäßig würfeln, damit sie gar wird, ohne beim abschließenden Wenden zu zerfallen."
  },
  {
    name: "Knuspriger Sesam-Tofu", emoji: "🥢", diet: "vegan", prep: 18, cook: 18, difficulty: "Mittel",
    amounts: { tofu: [500, "g"], speisestaerke: [60, "g"], sesam: [3, "EL"], sojasauce: [4, "EL"], zucker: [2, "EL"], ingwer: [20, "g"], knoblauch: [2, "Zehen"], reis: [300, "g"], fruehlingszwiebeln: [3, "Stück"], olivenoel: [3, "EL"] },
    steps: [
      "Reis nach Packungsangabe garen und den Zucker für die spätere Glasur bereitstellen.",
      "Tofu trocken pressen, würfeln und gleichmäßig in Speisestärke wenden.",
      "Tofu im Öl rundherum 9 Minuten knusprig braten und aus der Pfanne nehmen.",
      "Sojasauce, Zucker, geriebenen Ingwer, Knoblauch und zwei Esslöffel Wasser 3 Minuten einkochen.",
      "Tofu und Sesam in der Sauce schwenken, mit Frühlingszwiebeln bestreuen und zum Reis servieren."
    ],
    tip: "Die Tofuwürfel erst unmittelbar vor dem Braten in Stärke wenden, damit die Hülle trocken und knusprig bleibt."
  },
  {
    name: "Tofu-Erdnuss-Curry", emoji: "🥜", diet: "vegan", prep: 18, cook: 25, difficulty: "Einfach",
    amounts: { tofu: [450, "g"], erdnuesse: [90, "g"], kokosmilch: [400, "ml"], paprika: [2, "Stück"], brokkoli: [350, "g"], currypaste: [2, "EL"], sojasauce: [2, "EL"], limette: [1, "Stück"], olivenoel: [2, "EL"], reis: [300, "g"] },
    steps: [
      "Reis nach Packungsangabe garen, Tofu würfeln und Brokkoli sowie Paprika mundgerecht schneiden.",
      "Tofu im heißen Öl 7 Minuten rundherum goldbraun braten und kurz beiseitestellen.",
      "Currypaste 1 Minute anrösten, Kokosmilch angießen und fein gemahlene Erdnüsse einrühren.",
      "Brokkoli und Paprika in der Sauce 8 Minuten bissfest köcheln lassen.",
      "Tofu zugeben, 3 Minuten erwärmen und das Curry mit Sojasauce sowie Limettensaft zum Reis servieren."
    ],
    tip: "Einen Teil der Erdnüsse fein mahlen und einen Teil grob hacken; so wird die Sauce cremig und bleibt zugleich knackig."
  },
  {
    name: "Tofu-Gemüse-Wraps", emoji: "🌯", diet: "vegan", prep: 22, cook: 12, difficulty: "Einfach",
    amounts: { tortilla: [6, "Stück"], tofu: [400, "g"], paprika: [2, "Stück"], gurke: [1, "Stück"], salat: [180, "g"], avocado: [2, "Stück"], sojasauce: [2, "EL"], limette: [1, "Stück"], olivenoel: [2, "EL"], sesam: [2, "EL"] },
    steps: [
      "Tofu trocken pressen, in schmale Streifen schneiden und mit Sojasauce vermengen.",
      "Tofu im Öl 7 Minuten knusprig braten und am Ende mit Sesam bestreuen.",
      "Paprika und Gurke in feine Stifte schneiden, Salat waschen und sorgfältig trocknen.",
      "Avocado mit Limettensaft, Salz und Pfeffer zu einer groben Creme zerdrücken.",
      "Tortillas je Seite 30 Sekunden erwärmen, mit Avocadocreme und allen Zutaten belegen und fest aufrollen."
    ],
    tip: "Alle Füllungen länglich in der Mitte anordnen; dann zuerst die Seiten einklappen und den Wrap eng aufrollen."
  },
  {
    name: "Kichererbsen-Spinat-Topf mit Zitrone", emoji: "🍋", diet: "vegan", prep: 12, cook: 22, difficulty: "Einfach",
    amounts: { kichererbsen: [500, "g"], spinat: [350, "g"], dosentomaten: [400, "g"], zwiebeln: [1, "Stück"], knoblauch: [3, "Zehen"], zitrone: [1, "Stück"], kreuzkuemmel: [1, "TL"], olivenoel: [2, "EL"], bruehe: [200, "ml"] },
    steps: [
      "Kichererbsen abspülen, Zwiebel und Knoblauch fein hacken und den Spinat gründlich waschen.",
      "Zwiebel im Öl 5 Minuten weich dünsten, Knoblauch und Kreuzkümmel kurz mitrösten.",
      "Tomaten, Brühe und Kichererbsen zugeben und den Topf 12 Minuten offen köcheln lassen.",
      "Spinat portionsweise unterheben und 3 Minuten zusammenfallen lassen.",
      "Mit Zitronenabrieb, Zitronensaft, Salz und Pfeffer frisch abschmecken und heiß servieren."
    ],
    tip: "Zitronenabrieb erst am Ende einrühren, damit sein ätherisches Aroma nicht beim langen Kochen verloren geht."
  },
  {
    name: "Linsen-Pilz-Bratlinge", emoji: "🧆", diet: "vegan", prep: 22, cook: 30, rest: 10, difficulty: "Mittel",
    amounts: { linsen: [280, "g"], champignons: [350, "g"], haferflocken: [120, "g"], karotten: [150, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], senf: [1, "EL"], petersilie: [18, "g"], paprikapulver: [1, "TL"], olivenoel: [3, "EL"] },
    steps: [
      "Linsen in Wasser 20 Minuten weich kochen, gut abtropfen und leicht ausdampfen lassen.",
      "Pilze, Karotte, Zwiebel und Knoblauch sehr fein hacken und im Öl 8 Minuten trocken braten.",
      "Linsen grob zerdrücken und mit Pilzmischung, Haferflocken, Senf, Petersilie und Paprikapulver vermengen.",
      "Masse 10 Minuten quellen lassen und anschließend mit feuchten Händen zwölf flache Bratlinge formen.",
      "Bratlinge im übrigen Öl portionsweise je Seite 5 Minuten goldbraun und stabil braten."
    ],
    tip: "Die Pilzmischung so lange braten, bis keine Flüssigkeit mehr austritt; nur dann halten die Bratlinge zuverlässig."
  },
  {
    name: "Bohnen-Kürbis-Chili", emoji: "🎃", diet: "vegan", prep: 15, cook: 32, difficulty: "Einfach",
    amounts: { bohnen: [500, "g"], kuerbis: [600, "g"], dosentomaten: [600, "g"], mais: [250, "g"], paprika: [2, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], chili: [1, "Stück"], kreuzkuemmel: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Kürbis und Paprika würfeln, Zwiebel, Knoblauch und Chili fein hacken.",
      "Zwiebel, Paprika und Kürbis im Öl 8 Minuten anrösten.",
      "Knoblauch, Chili und Kreuzkümmel kurz mitbraten, anschließend die Tomaten angießen.",
      "Chili zugedeckt 15 Minuten köcheln lassen, bis der Kürbis fast weich ist.",
      "Bohnen und Mais einrühren, weitere 7 Minuten offen garen und kräftig abschmecken."
    ],
    tip: "Einige Bohnen am Topfrand zerdrücken; ihre Stärke bindet das Chili ohne zusätzliches Mehl oder langes Einkochen."
  },
  {
    name: "Brokkoli-Kichererbsen-Curry", emoji: "🥦", diet: "vegan", prep: 15, cook: 22, difficulty: "Einfach",
    amounts: { brokkoli: [550, "g"], kichererbsen: [450, "g"], kokosmilch: [400, "ml"], dosentomaten: [250, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], ingwer: [20, "g"], currypulver: [2, "TL"], olivenoel: [2, "EL"], limette: [1, "Stück"] },
    steps: [
      "Brokkoli in kleine Röschen teilen, Zwiebel, Knoblauch und Ingwer fein hacken.",
      "Zwiebel im Öl 4 Minuten anschwitzen, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Tomaten und Kokosmilch angießen und die Sauce 7 Minuten sanft köcheln lassen.",
      "Kichererbsen und Brokkoli zugeben und zugedeckt 9 Minuten bissfest garen.",
      "Curry mit Limettensaft und Salz abschmecken und den Brokkoli vorsichtig unterheben."
    ],
    tip: "Brokkolistrunk schälen, klein würfeln und mit der Zwiebel anbraten; so wird das gesamte Gemüse genutzt."
  },
  {
    name: "Auberginen-Kichererbsen-Pfanne", emoji: "🍆", diet: "vegan", prep: 15, cook: 27, difficulty: "Einfach",
    amounts: { aubergine: [2, "Stück"], kichererbsen: [450, "g"], tomaten: [5, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [3, "Zehen"], olivenoel: [3, "EL"], kreuzkuemmel: [1, "TL"], zitrone: [1, "Stück"], petersilie: [18, "g"] },
    steps: [
      "Auberginen würfeln, Tomaten grob schneiden sowie Zwiebel und Knoblauch fein hacken.",
      "Auberginen im heißen Öl 10 Minuten rundherum goldbraun anbraten.",
      "Zwiebel, Knoblauch und Kreuzkümmel hinzufügen und weitere 4 Minuten braten.",
      "Tomaten und Kichererbsen einrühren und die Pfanne 10 Minuten offen schmoren lassen.",
      "Mit Zitronensaft, Salz, Pfeffer und gehackter Petersilie abschmecken."
    ],
    tip: "Auberginen erst wenden, wenn eine Seite gebräunt ist; häufiges Rühren verhindert Röstaromen und macht sie weich."
  },
  {
    name: "Vegane Pilz-Gnocchi", emoji: "🍄", diet: "vegan", prep: 12, cook: 20, difficulty: "Einfach",
    amounts: { gnocchi: [700, "g"], champignons: [450, "g"], spinat: [250, "g"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [200, "ml"], kokosmilch: [220, "ml"], olivenoel: [2, "EL"], thymian: [1, "TL"] },
    steps: [
      "Pilze in Scheiben, Zwiebel und Knoblauch fein schneiden und Spinat gründlich waschen.",
      "Gnocchi in der Hälfte des Öls 7 Minuten goldbraun braten und kurz herausnehmen.",
      "Pilze im übrigen Öl 7 Minuten kräftig bräunen, dann Zwiebel und Knoblauch zugeben.",
      "Brühe, Kokosmilch und Thymian einrühren und die Sauce 4 Minuten einkochen lassen.",
      "Gnocchi und Spinat unterheben, 3 Minuten erwärmen und cremig abschmecken."
    ],
    tip: "Eine milde Kokosmilch verwenden und kräftig mit Thymian sowie Pfeffer würzen, damit die Pilze im Vordergrund bleiben."
  },
  {
    name: "Cremige Brokkolisuppe", emoji: "🥦", diet: "vegetarisch", prep: 12, cook: 23, difficulty: "Einfach",
    amounts: { brokkoli: [700, "g"], kartoffeln: [350, "g"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], bruehe: [850, "ml"], sahne: [150, "ml"], butter: [20, "g"], cheddar: [100, "g"] },
    steps: [
      "Brokkoli samt geschältem Strunk klein schneiden, Kartoffeln würfeln und Zwiebel sowie Knoblauch hacken.",
      "Zwiebel und Knoblauch in Butter 4 Minuten glasig anschwitzen.",
      "Kartoffeln, Brokkolistrunk und Brühe zugeben und zugedeckt 12 Minuten kochen.",
      "Brokkoliröschen ergänzen und weitere 6 Minuten garen, bis alles weich ist.",
      "Suppe mit Sahne fein pürieren, Cheddar einrühren und nur noch sanft erwärmen."
    ],
    tip: "Einige kleine Brokkoliröschen vor dem Pürieren herausnehmen und später als bissfeste Einlage zurückgeben."
  },
  {
    name: "Paprika-Tomaten-Suppe", emoji: "🍅", diet: "vegan", prep: 15, cook: 30, difficulty: "Einfach",
    amounts: { paprika: [4, "Stück"], dosentomaten: [500, "g"], zwiebeln: [1, "Stück"], knoblauch: [3, "Zehen"], bruehe: [500, "ml"], tomatenmark: [2, "EL"], olivenoel: [3, "EL"], paprikapulver: [1, "TL"], basilikum: [15, "g"] },
    steps: [
      "Paprika vierteln und entkernen, Zwiebel grob schneiden und Knoblauch schälen.",
      "Paprika, Zwiebel und Knoblauch mit Öl bei 220 Grad 20 Minuten im Ofen rösten.",
      "Geröstetes Gemüse mit Tomaten, Brühe, Tomatenmark und Paprikapulver in einen Topf geben.",
      "Suppe 8 Minuten sanft köcheln lassen und anschließend sorgfältig fein pürieren.",
      "Mit Salz und Pfeffer abschmecken und mit frischem Basilikum servieren."
    ],
    tip: "Dunkle Stellen an der Paprikahaut sind erwünscht; sie geben der pürierten Suppe ein leicht rauchiges Aroma."
  },
  {
    name: "Kürbis-Apfel-Suppe", emoji: "🎃", diet: "vegan", prep: 15, cook: 27, difficulty: "Einfach",
    amounts: { kuerbis: [750, "g"], apfel: [2, "Stück"], kartoffeln: [250, "g"], zwiebeln: [1, "Stück"], ingwer: [20, "g"], bruehe: [900, "ml"], kokosmilch: [180, "ml"], currypulver: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Kürbis, Äpfel und Kartoffeln würfeln, Zwiebel sowie Ingwer fein hacken.",
      "Zwiebel und Ingwer im Öl 4 Minuten anschwitzen, Currypulver kurz mitrösten.",
      "Kürbis, Kartoffeln und Äpfel zugeben und alles 4 Minuten unter Rühren anrösten.",
      "Brühe angießen und die Suppe zugedeckt 18 Minuten weich kochen.",
      "Kokosmilch zugeben, fein pürieren und mit Salz sowie Pfeffer ausgewogen abschmecken."
    ],
    tip: "Einen säuerlichen Apfel wählen; er hebt die natürliche Süße des Kürbisses auf, ohne die Suppe süß wirken zu lassen."
  },
  {
    name: "Linsen-Gemüse-Suppe", emoji: "🍲", diet: "vegan", prep: 18, cook: 35, difficulty: "Einfach",
    amounts: { linsen: [280, "g"], karotten: [250, "g"], sellerie: [2, "Stück"], lauch: [1, "Stück"], kartoffeln: [350, "g"], dosentomaten: [300, "g"], bruehe: [1100, "ml"], zwiebeln: [1, "Stück"], thymian: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Karotten, Sellerie, Lauch, Kartoffeln und Zwiebel in möglichst gleich große Würfel schneiden.",
      "Zwiebel, Karotten und Sellerie im Öl 7 Minuten langsam anschwitzen.",
      "Linsen, Kartoffeln, Lauch, Tomaten, Brühe und Thymian in den Topf geben.",
      "Suppe zugedeckt 25 Minuten köcheln lassen, bis Linsen und Kartoffeln weich sind.",
      "Einen kleinen Teil der Suppe zerdrücken, wieder einrühren und kräftig abschmecken."
    ],
    tip: "Einige Linsen und Kartoffeln im Topf zerdrücken; das bindet die Suppe natürlich und macht sie schön sämig."
  },
  {
    name: "Kartoffel-Sauerkraut-Eintopf", emoji: "🥔", diet: "vegan", prep: 15, cook: 32, difficulty: "Einfach",
    amounts: { kartoffeln: [750, "g"], sauerkraut: [500, "g"], karotten: [250, "g"], zwiebeln: [1, "Stück"], bruehe: [900, "ml"], tomatenmark: [1, "EL"], paprikapulver: [1, "TL"], kuemmel: [1, "TL"], olivenoel: [2, "EL"] },
    steps: [
      "Kartoffeln und Karotten würfeln, Zwiebel fein hacken und Sauerkraut leicht ausdrücken.",
      "Zwiebel und Karotten im Öl 5 Minuten anschwitzen, Tomatenmark kurz mitrösten.",
      "Kartoffeln, Brühe, Paprikapulver und Kümmel zugeben und 18 Minuten zugedeckt kochen.",
      "Sauerkraut einrühren und den Eintopf weitere 10 Minuten sanft köcheln lassen.",
      "Mit Pfeffer und bei Bedarf wenig Salz abschmecken und heiß servieren."
    ],
    tip: "Sauerkraut erst gegen Ende zugeben; so bleibt seine angenehme Säure erhalten und die Kartoffeln werden sicher weich."
  },
  {
    name: "Rote-Bete-Kartoffel-Suppe", emoji: "🩷", diet: "vegan", prep: 18, cook: 30, difficulty: "Einfach",
    amounts: { rotebete: [600, "g"], kartoffeln: [400, "g"], apfel: [1, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], bruehe: [900, "ml"], essig: [2, "EL"], olivenoel: [2, "EL"], dill: [15, "g"] },
    steps: [
      "Rote Bete und Kartoffeln schälen und würfeln, Apfel entkernen und Zwiebel sowie Knoblauch hacken.",
      "Zwiebel und Knoblauch im Öl 4 Minuten glasig anschwitzen.",
      "Rote Bete, Kartoffeln, Apfel und Brühe zugeben und zugedeckt 24 Minuten weich kochen.",
      "Suppe sorgfältig fein pürieren und mit Essig, Salz sowie Pfeffer abschmecken.",
      "Mit gehacktem Dill bestreuen und nach Wunsch mit zusätzlichem Apfel garnieren."
    ],
    tip: "Etwas Essig erst nach dem Pürieren einrühren; die Säure bringt die erdige Rote Bete besser ins Gleichgewicht."
  },
  {
    name: "Karotten-Ingwer-Suppe", emoji: "🥕", diet: "vegan", prep: 12, cook: 25, difficulty: "Einfach",
    amounts: { karotten: [800, "g"], kartoffeln: [250, "g"], zwiebeln: [1, "Stück"], ingwer: [30, "g"], bruehe: [900, "ml"], kokosmilch: [200, "ml"], limette: [1, "Stück"], olivenoel: [2, "EL"], currypulver: [1, "TL"] },
    steps: [
      "Karotten und Kartoffeln würfeln, Zwiebel sowie Ingwer fein hacken.",
      "Zwiebel und Ingwer im Öl 4 Minuten anschwitzen, Currypulver kurz mitrösten.",
      "Karotten, Kartoffeln und Brühe zugeben und zugedeckt 18 Minuten weich kochen.",
      "Kokosmilch angießen und die Suppe sehr fein und cremig pürieren.",
      "Mit Limettensaft, Salz und Pfeffer abschmecken und heiß in Schalen füllen."
    ],
    tip: "Ingwer zunächst sparsam verwenden und nach dem Pürieren nachschärfen, da seine Wirkung beim Kochen milder wird."
  },
  {
    name: "Pilz-Cremesuppe", emoji: "🍄", diet: "vegetarisch", prep: 12, cook: 25, difficulty: "Einfach",
    amounts: { champignons: [700, "g"], kartoffeln: [250, "g"], zwiebeln: [1, "Stück"], knoblauch: [1, "Zehe"], bruehe: [750, "ml"], sahne: [180, "ml"], butter: [30, "g"], thymian: [1, "TL"], petersilie: [15, "g"] },
    steps: [
      "Pilze in Scheiben, Kartoffeln in kleine Würfel und Zwiebel sowie Knoblauch fein schneiden.",
      "Ein Viertel der Pilze in Butter 6 Minuten goldbraun braten und als Einlage beiseitestellen.",
      "Übrige Pilze, Zwiebel und Knoblauch 6 Minuten im Topf kräftig anbraten.",
      "Kartoffeln, Brühe und Thymian zugeben und alles 14 Minuten weich kochen.",
      "Sahne einrühren, Suppe fein pürieren und mit gebratenen Pilzen sowie Petersilie servieren."
    ],
    tip: "Pilze für die Einlage dunkel anrösten; sie liefern einen aromatischen Kontrast zur milden cremigen Suppe."
  },
  {
    name: "Fischsuppe mit Safran", emoji: "🐟", diet: "alles", prep: 20, cook: 28, difficulty: "Mittel",
    amounts: { fisch: [500, "g"], garnelen: [250, "g"], dosentomaten: [400, "g"], kartoffeln: [350, "g"], lauch: [1, "Stück"], zwiebeln: [1, "Stück"], knoblauch: [2, "Zehen"], bruehe: [900, "ml"], safran: [1, "Päckchen"], olivenoel: [2, "EL"], zitrone: [1, "Stück"] },
    steps: [
      "Fisch in große Stücke, Kartoffeln in kleine Würfel und Lauch in feine Ringe schneiden.",
      "Zwiebel, Lauch und Knoblauch im Öl 6 Minuten langsam anschwitzen.",
      "Tomaten, Kartoffeln, Brühe und Safran zugeben und zugedeckt 15 Minuten köcheln.",
      "Fischstücke einlegen und 5 Minuten sanft gar ziehen lassen.",
      "Garnelen ergänzen, weitere 3 Minuten garen und die Suppe mit Zitronensaft abschmecken."
    ],
    tip: "Fisch und Garnelen erst ganz zum Schluss einlegen und die Suppe dann nicht mehr sprudelnd kochen lassen."
  },
  {
    name: "Hähnchen-Lauch-Suppe", emoji: "🍲", diet: "alles", prep: 15, cook: 28, difficulty: "Einfach",
    amounts: { haehnchen: [500, "g"], lauch: [2, "Stück"], kartoffeln: [450, "g"], karotten: [250, "g"], zwiebeln: [1, "Stück"], bruehe: [1000, "ml"], sahne: [150, "ml"], butter: [20, "g"], petersilie: [15, "g"] },
    steps: [
      "Hähnchen in Stücke, Lauch in Ringe, Kartoffeln und Karotten in kleine Würfel schneiden.",
      "Zwiebel und Lauch in Butter 5 Minuten weich anschwitzen.",
      "Kartoffeln, Karotten und Brühe zugeben und zugedeckt 14 Minuten köcheln lassen.",
      "Hähnchen einlegen und weitere 8 Minuten sanft gar ziehen lassen.",
      "Sahne einrühren, die Suppe 2 Minuten erwärmen und mit Petersilie abschmecken."
    ],
    tip: "Das Hähnchen in gleich große Stücke schneiden, damit alle Stücke gleichzeitig gar und dennoch saftig sind."
  },
  {
    name: "Bauernsalat mit Kartoffeln", emoji: "🥗", diet: "vegetarisch", prep: 18, cook: 22, rest: 10, difficulty: "Einfach",
    amounts: { kartoffeln: [700, "g"], gurke: [1, "Stück"], tomaten: [5, "Stück"], paprika: [1, "Stück"], feta: [180, "g"], oliven: [90, "g"], zwiebeln: [1, "Stück"], olivenoel: [3, "EL"], essig: [2, "EL"], petersilie: [18, "g"] },
    steps: [
      "Kartoffeln mit Schale in Salzwasser 20 Minuten garen, abgießen und kurz ausdampfen lassen.",
      "Gurke, Tomaten und Paprika grob würfeln, Zwiebel in sehr feine Ringe schneiden.",
      "Öl, Essig, Salz, Pfeffer und gehackte Petersilie zu einem kräftigen Dressing verrühren.",
      "Kartoffeln pellen, in Scheiben schneiden und noch warm mit der Hälfte des Dressings vermengen.",
      "Gemüse und Oliven unterheben, Feta darüberbröseln und den Salat 10 Minuten ziehen lassen."
    ],
    tip: "Die warmen Kartoffeln zuerst separat marinieren; so saugen sie Dressing auf, ohne dass das Gemüse weich wird."
  },
  {
    name: "Mango-Kichererbsen-Salat", emoji: "🥭", diet: "vegan", prep: 18, cook: 5, rest: 10, difficulty: "Einfach",
    amounts: { mango: [2, "Stück"], kichererbsen: [400, "g"], gurke: [1, "Stück"], paprika: [1, "Stück"], avocado: [1, "Stück"], limette: [2, "Stück"], olivenoel: [3, "EL"], koriander: [18, "g"], chili: [1, "Stück"], sesam: [2, "EL"] },
    steps: [
      "Kichererbsen abspülen, gut trocknen und in einer Pfanne 5 Minuten mit Sesam anrösten.",
      "Mango, Gurke und Paprika klein würfeln, Avocado grob schneiden und Chili fein hacken.",
      "Geröstete Kichererbsen 10 Minuten offen abkühlen lassen, damit das Gemüse knackig bleibt.",
      "Limettensaft, Olivenöl, Chili, Salz und Pfeffer zu einem Dressing verrühren.",
      "Alle Zutaten vorsichtig mit dem Dressing vermengen und den Salat mit Koriander servieren."
    ],
    tip: "Eine feste, aber reife Mango verwenden und die Avocado zuletzt unterheben, damit beides seine Form behält."
  },
  {
    name: "Bulgur-Salat mit Ofengemüse", emoji: "🥗", diet: "vegan", prep: 18, cook: 28, rest: 5, difficulty: "Einfach",
    amounts: { bulgur: [280, "g"], bruehe: [580, "ml"], paprika: [2, "Stück"], aubergine: [1, "Stück"], zucchini: [1, "Stück"], zwiebeln: [1, "Stück"], olivenoel: [4, "EL"], zitrone: [1, "Stück"], petersilie: [20, "g"], knoblauch: [1, "Zehe"] },
    steps: [
      "Paprika, Aubergine, Zucchini und Zwiebel in gleichmäßig große Stücke schneiden.",
      "Gemüse mit der Hälfte des Öls mischen und bei 210 Grad 25 Minuten rösten.",
      "Bulgur in Brühe zugedeckt 12 Minuten garen und anschließend mit einer Gabel lockern.",
      "Restliches Öl mit Zitronensaft, geriebenem Knoblauch, Salz und Pfeffer verrühren.",
      "Bulgur und Ofengemüse mit dem Dressing mischen, 5 Minuten ziehen lassen und mit Petersilie servieren."
    ],
    tip: "Das Gemüse noch warm mit dem Dressing vermengen; dann nimmt es Zitronen- und Knoblaucharoma besonders gut auf."
  },
  {
    name: "Brokkoli-Apfel-Salat", emoji: "🥦", diet: "vegetarisch", prep: 20, cook: 4, rest: 10, difficulty: "Einfach",
    amounts: { brokkoli: [600, "g"], apfel: [2, "Stück"], joghurt: [220, "g"], mandeln: [70, "g"], zitrone: [1, "Stück"], honig: [1, "EL"], senf: [1, "EL"], fruehlingszwiebeln: [3, "Stück"] },
    steps: [
      "Brokkoli in sehr kleine Röschen teilen und den geschälten Strunk fein würfeln.",
      "Brokkoli 3 bis 4 Minuten in Salzwasser blanchieren, kalt abschrecken und gründlich abtropfen lassen.",
      "Äpfel entkernen und würfeln, Frühlingszwiebeln in feine Ringe schneiden.",
      "Joghurt, Zitronensaft, Honig und Senf zu einem cremigen Dressing verrühren.",
      "Alles mit grob gehackten Mandeln mischen und den Salat 10 Minuten ziehen lassen."
    ],
    tip: "Den Brokkoli nach dem Abschrecken gut trocknen, damit das Joghurt-Dressing nicht wässrig wird."
  },
  {
    name: "Linsensalat mit Roter Bete", emoji: "🩷", diet: "vegetarisch", prep: 18, cook: 25, rest: 10, difficulty: "Einfach",
    amounts: { linsen: [300, "g"], rotebete: [450, "g"], feta: [180, "g"], apfel: [1, "Stück"], zwiebeln: [1, "Stück"], petersilie: [20, "g"], essig: [3, "EL"], olivenoel: [3, "EL"], senf: [1, "EL"] },
    steps: [
      "Linsen in reichlich Wasser 22 bis 25 Minuten bissfest kochen und anschließend gut abtropfen lassen.",
      "Rote Bete und Apfel würfeln, Zwiebel sehr fein schneiden und Petersilie hacken.",
      "Essig, Öl, Senf, Salz und Pfeffer zu einer kräftigen Vinaigrette verrühren.",
      "Warme Linsen mit Roter Bete, Apfel, Zwiebel und Dressing vorsichtig vermengen.",
      "Salat 10 Minuten ziehen lassen, Feta darüberbröseln und mit Petersilie servieren."
    ],
    tip: "Linsen nur bissfest garen und erst danach salzen; so behalten sie im Salat ihre Form und angenehme Struktur."
  },
  {
    name: "Kichererbsen-Salat mit Feta", emoji: "🥗", diet: "vegetarisch", prep: 18, cook: 5, rest: 10, difficulty: "Einfach",
    amounts: { kichererbsen: [500, "g"], feta: [200, "g"], gurke: [1, "Stück"], tomaten: [5, "Stück"], paprika: [1, "Stück"], oliven: [80, "g"], zitrone: [1, "Stück"], olivenoel: [3, "EL"], petersilie: [20, "g"], kreuzkuemmel: [1, "TL"] },
    steps: [
      "Kichererbsen abspülen, gut abtropfen lassen und in einer Pfanne 5 Minuten trocken erwärmen.",
      "Gurke, Tomaten und Paprika würfeln, Oliven halbieren und Petersilie fein hacken.",
      "Zitronensaft, Olivenöl, Kreuzkümmel, Salz und Pfeffer zu einem Dressing verrühren.",
      "Warme Kichererbsen mit Gemüse, Oliven, Petersilie und Dressing mischen.",
      "Feta grob darüberbröseln und den Salat vor dem Servieren 10 Minuten ziehen lassen."
    ],
    tip: "Die Kichererbsen lauwarm marinieren; dadurch nehmen sie das Dressing besser auf als direkt aus der Dose."
  },
  {
    name: "Warmer Kartoffel-Lachs-Salat", emoji: "🐟", diet: "alles", prep: 18, cook: 25, rest: 5, difficulty: "Mittel",
    amounts: { kartoffeln: [750, "g"], lachs: [400, "g"], gurke: [1, "Stück"], fruehlingszwiebeln: [3, "Stück"], joghurt: [200, "g"], senf: [1, "EL"], zitrone: [1, "Stück"], dill: [18, "g"], butter: [20, "g"] },
    steps: [
      "Kartoffeln in Salzwasser 20 Minuten garen, abgießen, pellen und in dicke Scheiben schneiden.",
      "Lachs würfeln und in Butter rundherum 5 Minuten vorsichtig braten.",
      "Gurke halbieren und in Scheiben, Frühlingszwiebeln in feine Ringe schneiden.",
      "Joghurt, Senf, Zitronensaft und gehackten Dill zu einem Dressing verrühren.",
      "Warme Kartoffeln mit Dressing mischen, Gurke und Zwiebeln unterheben und Lachs daraufsetzen.",
      "Den Salat 5 Minuten durchziehen lassen und noch lauwarm servieren."
    ],
    tip: "Den gebratenen Lachs erst ganz am Ende auflegen und kaum mischen, damit die saftigen Würfel nicht zerfallen."
  },
  {
    name: "Tofu-Gurken-Bowl", emoji: "🥒", diet: "vegan", prep: 20, cook: 18, difficulty: "Einfach",
    amounts: { tofu: [450, "g"], reis: [300, "g"], gurke: [1, "Stück"], karotten: [200, "g"], avocado: [1, "Stück"], sojasauce: [3, "EL"], sesam: [2, "EL"], limette: [1, "Stück"], olivenoel: [2, "EL"], fruehlingszwiebeln: [3, "Stück"] },
    steps: [
      "Reis nach Packungsangabe garen und anschließend kurz offen ausdampfen lassen.",
      "Tofu trocken pressen, würfeln und im Öl 8 Minuten rundherum knusprig braten.",
      "Sojasauce und Sesam zum Tofu geben und alles weitere 2 Minuten glasieren.",
      "Gurke, Karotten und Avocado in feine Scheiben schneiden, Frühlingszwiebeln in Ringe teilen.",
      "Reis auf Schalen verteilen, Gemüse und Tofu darauf anrichten und mit Limettensaft beträufeln."
    ],
    tip: "Das Gemüse erst unmittelbar vor dem Essen schneiden, damit Gurke und Karotte frisch und knackig bleiben."
  },
  {
    name: "Caesar-Nudelsalat", emoji: "🥗", diet: "vegetarisch", prep: 20, cook: 12, rest: 10, difficulty: "Einfach",
    amounts: { nudeln: [400, "g"], salat: [250, "g"], tomaten: [4, "Stück"], parmesan: [80, "g"], joghurt: [220, "g"], senf: [1, "EL"], zitrone: [1, "Stück"], knoblauch: [1, "Zehe"], toast: [4, "Scheiben"], olivenoel: [2, "EL"] },
    steps: [
      "Nudeln bissfest kochen, kalt abschrecken und gründlich abtropfen lassen.",
      "Toast würfeln, mit einem Esslöffel Öl mischen und in der Pfanne 6 Minuten knusprig rösten.",
      "Joghurt, Senf, Zitronensaft, fein geriebenen Knoblauch und die Hälfte des Parmesans verrühren.",
      "Salat in Streifen und Tomaten in Stücke schneiden und mit Nudeln sowie Dressing vermengen.",
      "Salat 10 Minuten ziehen lassen und erst dann Croûtons sowie restlichen Parmesan darübergeben."
    ],
    tip: "Croûtons wirklich erst beim Servieren aufstreuen, sonst verlieren sie durch das cremige Dressing ihre Knusprigkeit."
  },
  {
    name: "Mexikanischer Reissalat", emoji: "🌽", diet: "vegan", prep: 20, cook: 18, rest: 10, difficulty: "Einfach",
    amounts: { reis: [300, "g"], bohnen: [350, "g"], mais: [250, "g"], paprika: [2, "Stück"], tomaten: [4, "Stück"], avocado: [2, "Stück"], limette: [2, "Stück"], olivenoel: [3, "EL"], koriander: [18, "g"], chili: [1, "Stück"] },
    steps: [
      "Reis in Salzwasser 16 bis 18 Minuten garen, abgießen und vollständig ausdampfen lassen.",
      "Bohnen und Mais abspülen, Paprika sowie Tomaten würfeln und Chili fein hacken.",
      "Limettensaft, Öl, Chili, Salz und Pfeffer zu einem würzigen Dressing verrühren.",
      "Reis, Bohnen, Mais, Paprika, Tomaten und gehackten Koriander mit dem Dressing mischen.",
      "Salat 10 Minuten ziehen lassen, Avocado würfeln und erst unmittelbar vor dem Servieren unterheben."
    ],
    tip: "Die Avocado zuletzt und sehr vorsichtig unterheben, damit sie ihre Form behält und nicht braun wird."
  },
  {
    name: "Apfel-Zimt-Porridge aus dem Ofen", emoji: "🍎", diet: "vegetarisch", type: "süß", prep: 12, cook: 28, rest: 5, difficulty: "Einfach",
    amounts: { haferflocken: [300, "g"], apfel: [3, "Stück"], milch: [650, "ml"], eier: [2, "Stück"], honig: [3, "EL"], zimt: [2, "TL"], mandeln: [60, "g"], butter: [15, "g"] },
    steps: [
      "Äpfel entkernen, zwei davon würfeln und den dritten in dünne Spalten schneiden.",
      "Haferflocken, Apfelwürfel, Zimt und grob gehackte Mandeln in einer gefetteten Form mischen.",
      "Milch, Eier und Honig verquirlen und gleichmäßig über die Haferflocken gießen.",
      "Apfelspalten auflegen und das Porridge bei 185 Grad 28 Minuten backen.",
      "Vor dem Portionieren 5 Minuten ruhen lassen und nach Wunsch mit etwas Zimt servieren."
    ],
    tip: "Die Flüssigkeit vor dem Backen fünf Minuten einziehen lassen, wenn besonders weiche Haferflocken gewünscht sind."
  },
  {
    name: "Beeriger Quarkschmarrn", emoji: "🫐", diet: "vegetarisch", type: "süß", prep: 15, cook: 18, difficulty: "Mittel",
    amounts: { quark: [400, "g"], eier: [4, "Stück"], mehl: [130, "g"], milch: [120, "ml"], zucker: [60, "g"], beeren: [250, "g"], butter: [30, "g"], vanillezucker: [1, "Päckchen"] },
    steps: [
      "Eier trennen und Eigelb mit Quark, Milch, Mehl, Zucker und Vanillezucker glatt rühren.",
      "Eiweiß steif schlagen und behutsam unter den Quarkteig heben, anschließend Beeren darauf verteilen.",
      "Butter in einer ofenfesten Pfanne schmelzen und den Teig darin 5 Minuten bei mittlerer Hitze anbacken.",
      "Pfanne bei 190 Grad 10 Minuten in den Ofen stellen, bis der Teig vollständig gestockt ist.",
      "Schmarrn mit zwei Gabeln zerreißen und weitere 3 Minuten in der Pfanne goldbraun wenden."
    ],
    tip: "Den Eischnee nur locker unterheben und nicht glatt rühren; die eingeschlossene Luft macht den Schmarrn fluffig."
  },
  {
    name: "Schoko-Bananen-Waffeln", emoji: "🧇", diet: "vegetarisch", type: "süß", prep: 15, cook: 20, rest: 5, difficulty: "Einfach",
    amounts: { mehl: [280, "g"], banane: [2, "Stück"], eier: [3, "Stück"], milch: [300, "ml"], butter: [100, "g"], zucker: [60, "g"], kakao: [3, "EL"], backpulver: [2, "TL"], schokolade: [80, "g"] },
    steps: [
      "Bananen fein zerdrücken, Schokolade hacken und Butter vorsichtig schmelzen.",
      "Mehl, Kakao, Backpulver und Zucker in einer großen Schüssel gleichmäßig mischen.",
      "Eier, Milch, Banane und Butter verquirlen und nur kurz unter die trockenen Zutaten rühren.",
      "Gehackte Schokolade unterheben und den Teig 5 Minuten quellen lassen.",
      "Waffeleisen leicht fetten und aus dem Teig portionsweise je 4 Minuten knusprige Waffeln backen."
    ],
    tip: "Den Teig nur kurz verrühren; kleine Mehlspuren verschwinden beim Quellen und die Waffeln bleiben locker."
  },
  {
    name: "Mango-Kokos-Pudding", emoji: "🥭", diet: "vegan", type: "süß", prep: 12, cook: 8, rest: 120, difficulty: "Einfach",
    amounts: { mango: [2, "Stück"], kokosmilch: [500, "ml"], speisestaerke: [45, "g"], zucker: [60, "g"], limette: [1, "Stück"], vanillezucker: [1, "Päckchen"], mandeln: [40, "g"] },
    steps: [
      "Mango schälen, Fruchtfleisch vom Kern schneiden und etwa zwei Drittel davon fein pürieren.",
      "Speisestärke mit 80 ml kalter Kokosmilch klümpchenfrei verrühren.",
      "Übrige Kokosmilch mit Zucker und Vanillezucker aufkochen, Stärkemischung einrühren und 2 Minuten kochen.",
      "Mangopüree und Limettensaft unter den warmen Pudding rühren und in Gläser füllen.",
      "Pudding mindestens 2 Stunden kühlen und mit Mangowürfeln sowie gehackten Mandeln servieren."
    ],
    tip: "Das Mangopüree erst nach dem Kochen einrühren; so bleibt die fruchtige Farbe frisch und das Aroma intensiv."
  },
  {
    name: "Zitronen-Mandel-Muffins", emoji: "🧁", diet: "vegetarisch", type: "süß", prep: 18, cook: 22, rest: 15, difficulty: "Einfach",
    amounts: { mehl: [260, "g"], mandeln: [100, "g"], zitrone: [2, "Stück"], eier: [3, "Stück"], butter: [120, "g"], milch: [160, "ml"], zucker: [140, "g"], backpulver: [2, "TL"] },
    steps: [
      "Butter schmelzen, Zitronenschale fein abreiben und den Saft auspressen.",
      "Mehl, gemahlene Mandeln, Backpulver und Zucker in einer Schüssel vermischen.",
      "Eier, Milch, Butter, Zitronenabrieb und drei Esslöffel Saft miteinander verquirlen.",
      "Flüssige Mischung kurz unter die trockenen Zutaten rühren und auf zwölf Förmchen verteilen.",
      "Muffins bei 180 Grad 20 bis 22 Minuten backen und aus dem Ofen nehmen.",
      "Die Muffins 15 Minuten in der Form abkühlen lassen und anschließend vorsichtig herausheben."
    ],
    tip: "Nur so lange rühren, bis kein trockenes Mehl sichtbar ist; überarbeiteter Muffinteig wird fest statt locker."
  },
  {
    name: "Birnen-Vanille-Auflauf", emoji: "🍐", diet: "vegetarisch", type: "süß", prep: 15, cook: 32, rest: 8, difficulty: "Einfach",
    amounts: { birne: [5, "Stück"], quark: [500, "g"], eier: [4, "Stück"], milch: [150, "ml"], speisestaerke: [45, "g"], zucker: [90, "g"], vanillezucker: [1, "Päckchen"], mandeln: [50, "g"], butter: [15, "g"] },
    steps: [
      "Birnen vierteln, entkernen und in dünne Spalten schneiden, eine Auflaufform mit Butter fetten.",
      "Quark, Eier, Milch, Speisestärke, Zucker und Vanillezucker glatt verrühren.",
      "Birnenspalten in der Form verteilen und die Quarkmasse gleichmäßig darübergeben.",
      "Mit grob gehackten Mandeln bestreuen und bei 180 Grad 32 Minuten backen.",
      "Auflauf 8 Minuten ruhen lassen und anschließend warm oder kalt portionieren."
    ],
    tip: "Reife, aber noch feste Birnen verwenden; sehr weiche Früchte geben beim Backen zu viel Flüssigkeit ab."
  },
  {
    name: "Knusprige Apfelringe", emoji: "🍎", diet: "vegetarisch", type: "süß", prep: 18, cook: 20, difficulty: "Mittel",
    amounts: { apfel: [4, "Stück"], mehl: [180, "g"], eier: [2, "Stück"], milch: [220, "ml"], zucker: [50, "g"], zimt: [2, "TL"], butter: [50, "g"], zitrone: [1, "Stück"] },
    steps: [
      "Äpfel schälen, Kerngehäuse ausstechen, in einen Zentimeter dicke Ringe schneiden und mit Zitrone beträufeln.",
      "Mehl, Eier, Milch, die Hälfte des Zuckers und einen Teelöffel Zimt zu einem glatten Teig verrühren.",
      "Butter portionsweise in einer großen Pfanne bei mittlerer Hitze schmelzen.",
      "Apfelringe durch den Teig ziehen und pro Seite 3 Minuten goldbraun ausbacken.",
      "Übrigen Zucker mit Zimt mischen und die heißen Apfelringe darin wenden."
    ],
    tip: "Die Pfanne nicht zu heiß werden lassen; bei mittlerer Hitze wird der Apfel weich, bevor der Teig dunkel wird."
  },
  {
    name: "Beeren-Mascarpone-Dessert", emoji: "🫐", diet: "vegetarisch", type: "süß", prep: 18, cook: 5, rest: 60, difficulty: "Einfach",
    amounts: { beeren: [450, "g"], mascarpone: [300, "g"], quark: [300, "g"], zucker: [80, "g"], vanillezucker: [1, "Päckchen"], butterkekse: [180, "g"], zitrone: [1, "Stück"], mandeln: [40, "g"] },
    steps: [
      "Die Hälfte der Beeren mit 30 g Zucker in einem Topf 5 Minuten zu einer groben Sauce kochen.",
      "Mascarpone, Quark, übrigen Zucker, Vanillezucker und Zitronenabrieb glatt rühren.",
      "Butterkekse grob zerbrechen und Mandeln hacken.",
      "Keksstücke, Creme, Beerensauce und übrige frische Beeren abwechselnd in Gläser schichten.",
      "Dessert mindestens 1 Stunde kalt stellen und erst vor dem Servieren mit Mandeln bestreuen."
    ],
    tip: "Einige Keksstücke für die Garnitur trocken aufbewahren; sie sorgen beim Servieren für einen knusprigen Kontrast."
  },
  {
    name: "Schoko-Hafer-Kekse", emoji: "🍪", diet: "vegetarisch", type: "süß", prep: 15, cook: 14, rest: 15, difficulty: "Einfach",
    amounts: { haferflocken: [220, "g"], mehl: [120, "g"], schokolade: [140, "g"], butter: [130, "g"], eier: [1, "Stück"], zucker: [110, "g"], backpulver: [1, "TL"], kakao: [2, "EL"] },
    steps: [
      "Schokolade grob hacken und weiche Butter mit Zucker cremig rühren.",
      "Ei unterrühren, anschließend Haferflocken, Mehl, Kakao und Backpulver kurz einarbeiten.",
      "Gehackte Schokolade unterheben und aus dem Teig etwa zwanzig kleine Kugeln formen.",
      "Kugeln mit Abstand auf ein Blech setzen, leicht flach drücken und bei 180 Grad 12 bis 14 Minuten backen.",
      "Kekse 15 Minuten auf dem Blech abkühlen lassen, bevor sie vorsichtig umgesetzt werden."
    ],
    tip: "Die Kekse aus dem Ofen nehmen, solange die Mitte noch weich wirkt; beim Abkühlen werden sie außen knusprig."
  },
  {
    name: "Bananen-Karamell-Quark", emoji: "🍌", diet: "vegetarisch", type: "süß", prep: 12, cook: 8, rest: 10, difficulty: "Einfach",
    amounts: { banane: [4, "Stück"], quark: [500, "g"], joghurt: [200, "g"], zucker: [80, "g"], butter: [30, "g"], zimt: [1, "TL"], vanillezucker: [1, "Päckchen"], mandeln: [50, "g"] },
    steps: [
      "Bananen schräg in dicke Scheiben schneiden und Mandeln grob hacken.",
      "Mandeln in einer trockenen Pfanne 3 Minuten rösten und beiseitestellen.",
      "Butter und 50 g Zucker in der Pfanne schmelzen, Bananen einlegen und 4 Minuten karamellisieren.",
      "Quark, Joghurt, übrigen Zucker, Vanillezucker und Zimt glatt rühren.",
      "Karamellbananen 10 Minuten abkühlen lassen, auf dem Quark verteilen und mit Mandeln bestreuen."
    ],
    tip: "Feste Bananen verwenden und nur einmal wenden, damit die Scheiben im heißen Karamell ihre Form behalten."
  }
];

export const additionalRecipes025 = recipeSpecs.map(buildRecipe);
