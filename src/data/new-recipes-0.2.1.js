function recipe(name, emoji, time, diet, type, premium, prepMinutes, cookMinutes, difficulty, amounts, steps, tip) {
  return {
    name,
    emoji,
    time,
    diet,
    type,
    premium,
    prepMinutes,
    cookMinutes,
    difficulty,
    ingredients: Object.keys(amounts),
    amounts,
    steps,
    tip,
    release: "0.2.1"
  };
}

// Sämtliche Mengen beziehen sich auf vier Portionen.
export const newRecipes021 = [
  recipe("Zitronen-Knoblauch-Pasta", "🍋", "schnell", "vegan", "herzhaft", false, 10, 15, "Einfach",
    { nudeln:[400,"g"], knoblauch:[3,"Zehen"], zitrone:[1,"Stück"], olivenoel:[4,"EL"], petersilie:[15,"g"] },
    [
      "Nudeln in reichlich Salzwasser bissfest kochen und etwa 150 ml Kochwasser auffangen.",
      "Knoblauch fein hacken, Zitronenschale abreiben und die Zitrone auspressen.",
      "Olivenöl in einer großen Pfanne sanft erhitzen und den Knoblauch 1 bis 2 Minuten glasig ziehen lassen, ohne ihn zu bräunen.",
      "Nudeln, Zitronensaft, Zitronenabrieb und zunächst 80 ml Kochwasser zugeben und kräftig durchschwenken.",
      "Mit Salz und Pfeffer abschmecken, gehackte Petersilie unterheben und sofort servieren."
    ],
    "Die Pfanne nur mäßig erhitzen; gebräunter Knoblauch schmeckt bitter."),

  recipe("Cremige Tomaten-Linsen-Suppe", "🍅", "normal", "vegan", "herzhaft", false, 15, 30, "Einfach",
    { linsen:[220,"g"], dosentomaten:[800,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[800,"ml"], olivenoel:[2,"EL"], paprikapulver:[2,"TL"] },
    [
      "Linsen in einem Sieb gründlich abspülen; Zwiebel und Knoblauch fein würfeln.",
      "Olivenöl im Topf erhitzen und Zwiebel 4 Minuten glasig dünsten, anschließend Knoblauch und Paprikapulver kurz mitrösten.",
      "Linsen, Dosentomaten und Brühe einrühren und alles aufkochen.",
      "Bei kleiner bis mittlerer Hitze 22 bis 25 Minuten köcheln lassen, bis die Linsen weich sind.",
      "Etwa ein Drittel der Suppe pürieren, wieder unterrühren und mit Salz, Pfeffer sowie etwas Säure abschmecken."
    ],
    "Wird die Suppe zu dick, schluckweise heißes Wasser ergänzen."),

  recipe("Kichererbsen-Paprika-Pfanne", "🫑", "schnell", "vegan", "herzhaft", false, 10, 15, "Einfach",
    { kichererbsen:[480,"g"], paprika:[3,"Stück"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], dosentomaten:[400,"g"], olivenoel:[2,"EL"], paprikapulver:[2,"TL"] },
    [
      "Kichererbsen abspülen und gut abtropfen lassen; Paprika und Zwiebel in mundgerechte Stücke schneiden.",
      "Olivenöl in einer großen Pfanne erhitzen und die Zwiebel 3 Minuten anbraten.",
      "Paprika zugeben und 5 Minuten unter gelegentlichem Rühren braten.",
      "Knoblauch, Paprikapulver, Kichererbsen und Dosentomaten einrühren und 7 Minuten offen köcheln lassen.",
      "Mit Salz, Pfeffer und nach Wunsch etwas Chili abschmecken."
    ],
    "Die Kichererbsen vor dem Braten trocken tupfen, damit sie mehr Röstaromen entwickeln."),

  recipe("Brokkoli-Käse-Taler", "🥦", "normal", "vegetarisch", "herzhaft", false, 20, 25, "Einfach",
    { brokkoli:[600,"g"], kartoffeln:[500,"g"], eier:[2,"Stück"], mehl:[70,"g"], reibekaese:[120,"g"], joghurt:[200,"g"], zitrone:[1,"Stück"], olivenoel:[3,"EL"] },
    [
      "Kartoffeln schälen, würfeln und 12 Minuten in Salzwasser garen; Brokkoli nach 7 Minuten zugeben.",
      "Gemüse sehr gut abgießen, ausdampfen lassen und mit einem Stampfer grob zerdrücken.",
      "Eier, Mehl und Käse einarbeiten, kräftig würzen und aus der Masse zwölf flache Taler formen.",
      "Öl in einer beschichteten Pfanne erhitzen und die Taler portionsweise je Seite 4 bis 5 Minuten goldbraun braten.",
      "Joghurt mit Zitronensaft, Salz und Pfeffer verrühren und zu den heißen Talern servieren."
    ],
    "Die Gemüsemasse vor dem Formen vollständig ausdampfen lassen, damit die Taler gut zusammenhalten."),

  recipe("Frühstücks-Couscous mit Beeren", "🫐", "schnell", "vegetarisch", "süß", false, 10, 10, "Einfach",
    { couscous:[240,"g"], milch:[500,"ml"], beeren:[300,"g"], mandeln:[50,"g"], honig:[2,"EL"], zimt:[1,"TL"], zitrone:[1,"Stück"] },
    [
      "Mandeln in einer trockenen Pfanne goldbraun rösten und auf einem Teller abkühlen lassen.",
      "Milch mit Zimt und fein abgeriebener Zitronenschale aufkochen.",
      "Couscous einrühren, Topf vom Herd nehmen und zugedeckt 7 Minuten quellen lassen.",
      "Couscous mit einer Gabel auflockern und Honig sowie zwei Drittel der Beeren unterheben.",
      "Auf vier Schalen verteilen und mit übrigen Beeren und gerösteten Mandeln servieren."
    ],
    "Tiefgekühlte Beeren vorher auftauen und abtropfen lassen, damit der Couscous locker bleibt."),

  recipe("Quarkwaffeln", "🧇", "normal", "vegetarisch", "süß", false, 15, 25, "Einfach",
    { mehl:[250,"g"], quark:[250,"g"], eier:[3,"Stück"], milch:[180,"ml"], zucker:[50,"g"], butter:[50,"g"], backpulver:[2,"TL"] },
    [
      "Butter schmelzen und etwas abkühlen lassen; Waffeleisen vorheizen.",
      "Eier und Zucker 2 Minuten verrühren, anschließend Quark, Milch und Butter einarbeiten.",
      "Mehl und Backpulver mischen und nur so lange unterrühren, bis ein glatter, dickflüssiger Teig entsteht.",
      "Waffeleisen dünn fetten und den Teig portionsweise goldbraun ausbacken.",
      "Fertige Waffeln kurz auf einem Gitter ausdampfen lassen und warm servieren."
    ],
    "Nicht zu viel Teig einfüllen; durch den Quark geht er beim Backen etwas auf."),

  recipe("Ofen-Süßkartoffeln mit Kräuterquark", "🍠", "normal", "vegetarisch", "herzhaft", false, 15, 40, "Einfach",
    { suesskartoffel:[1000,"g"], quark:[400,"g"], gurke:[1,"Stück"], zitrone:[1,"Stück"], petersilie:[20,"g"], olivenoel:[2,"EL"] },
    [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen und ein Blech mit Backpapier belegen.",
      "Süßkartoffeln gründlich waschen, längs halbieren, Schnittflächen mit Olivenöl bestreichen und salzen.",
      "Mit der Schnittfläche nach unten 35 bis 40 Minuten backen, bis sie sich leicht einstechen lassen.",
      "Gurke fein raspeln, ausdrücken und mit Quark, Zitronensaft und gehackter Petersilie verrühren.",
      "Quark mit Salz und Pfeffer abschmecken und zu den heißen Süßkartoffeln servieren."
    ],
    "Sehr große Süßkartoffeln vierteln, damit alle Stücke gleichzeitig gar werden."),

  recipe("Paprika-Feta-Couscous", "🥗", "schnell", "vegetarisch", "herzhaft", false, 12, 10, "Einfach",
    { couscous:[280,"g"], paprika:[2,"Stück"], feta:[200,"g"], bruehe:[350,"ml"], zitrone:[1,"Stück"], petersilie:[20,"g"], olivenoel:[2,"EL"] },
    [
      "Couscous in eine große Schüssel geben, mit kochender Brühe übergießen und abgedeckt 8 Minuten quellen lassen.",
      "Paprika klein würfeln, Petersilie hacken und Feta zerbröseln.",
      "Couscous mit einer Gabel gründlich auflockern und 2 Minuten ausdampfen lassen.",
      "Paprika, Petersilie, Zitronensaft und Olivenöl unterheben.",
      "Feta vorsichtig einarbeiten und den Couscous mit Salz und Pfeffer abschmecken."
    ],
    "Den Feta erst am Ende unterheben, damit erkennbare Stücke erhalten bleiben."),

  recipe("Hähnchen-Brokkoli-Reis-Pfanne", "🍗", "normal", "alles", "herzhaft", false, 15, 25, "Einfach",
    { haehnchen:[500,"g"], reis:[300,"g"], brokkoli:[500,"g"], zwiebeln:[1,"Stück"], sojasauce:[4,"EL"], knoblauch:[2,"Zehen"], sesam:[1,"EL"] },
    [
      "Reis nach Packungsangabe garen; Brokkoli in kleine Röschen teilen.",
      "Hähnchen in gleichmäßige Stücke schneiden und getrennte Bretter sowie Messer für rohes Fleisch verwenden.",
      "Hähnchen in einer heißen großen Pfanne rundherum anbraten und vollständig durchgaren, anschließend kurz herausnehmen.",
      "Zwiebel, Knoblauch und Brokkoli in derselben Pfanne mit einem Schuss Wasser 6 bis 8 Minuten bissfest garen.",
      "Reis und Hähnchen wieder zugeben, mit Sojasauce durchschwenken, vollständig erhitzen und mit Sesam servieren."
    ],
    "Das Hähnchen muss innen vollständig weiß und durchgegart sein; rohes Fleisch darf andere Zutaten nicht berühren."),

  recipe("Kartoffel-Lauch-Suppe", "🥔", "normal", "vegetarisch", "herzhaft", false, 15, 30, "Einfach",
    { kartoffeln:[800,"g"], lauch:[2,"Stück"], zwiebeln:[1,"Stück"], bruehe:[1000,"ml"], sahne:[150,"ml"], butter:[25,"g"] },
    [
      "Kartoffeln schälen und würfeln; Lauch längs aufschneiden, gründlich waschen und in Ringe schneiden.",
      "Butter in einem großen Topf erhitzen und Zwiebel sowie Lauch 5 Minuten ohne starke Bräunung dünsten.",
      "Kartoffeln und Brühe zugeben, aufkochen und 20 Minuten sanft köcheln lassen.",
      "Etwa die Hälfte der Suppe fein pürieren und wieder mit dem stückigen Anteil vermischen.",
      "Sahne einrühren, nochmals erhitzen und mit Salz, Pfeffer und etwas Muskat abschmecken."
    ],
    "Nach Zugabe der Sahne nur noch sanft erhitzen, damit die Suppe nicht ausflockt."),

  recipe("Tomaten-Bohnen-Eintopf", "🍲", "normal", "vegan", "herzhaft", false, 15, 30, "Einfach",
    { bohnen:[480,"g"], dosentomaten:[800,"g"], karotten:[250,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[500,"ml"], paprikapulver:[2,"TL"] },
    [
      "Bohnen abspülen und abtropfen lassen; Karotten, Zwiebel und Knoblauch klein schneiden.",
      "Zwiebel und Karotten in einem großen Topf mit wenig Öl 6 Minuten anschwitzen.",
      "Knoblauch und Paprikapulver 30 Sekunden mitrösten, anschließend Tomaten und Brühe angießen.",
      "Den Eintopf 18 Minuten sanft köcheln lassen, dann die Bohnen zugeben und weitere 7 Minuten erhitzen.",
      "Mit Salz, Pfeffer und einem kleinen Schuss Essig abschmecken."
    ],
    "Bohnen aus der Dose immer abspülen; dadurch schmeckt der Eintopf sauberer und wird weniger salzig."),

  recipe("Spinat-Omelett mit Feta", "🍳", "schnell", "vegetarisch", "herzhaft", false, 10, 12, "Einfach",
    { eier:[8,"Stück"], spinat:[250,"g"], feta:[150,"g"], zwiebeln:[1,"Stück"], olivenoel:[1,"EL"] },
    [
      "Eier mit einer Prise Salz und Pfeffer gründlich verquirlen; Feta zerbröseln.",
      "Zwiebel fein würfeln und in einer großen beschichteten Pfanne im Olivenöl 3 Minuten dünsten.",
      "Spinat portionsweise zugeben und zusammenfallen lassen; überschüssige Flüssigkeit kurz verdampfen lassen.",
      "Eimasse angießen, Feta darüberstreuen und bei kleiner bis mittlerer Hitze stocken lassen.",
      "Omelett zusammenklappen oder vierteln und servieren, sobald die Eimasse vollständig gestockt ist."
    ],
    "Niedrige Hitze sorgt für ein saftiges Omelett und verhindert, dass die Unterseite zu dunkel wird."),

  recipe("Thunfisch-Mais-Nudelsalat", "🥗", "schnell", "alles", "herzhaft", false, 15, 12, "Einfach",
    { nudeln:[350,"g"], thunfisch:[2,"Dosen"], mais:[280,"g"], gurke:[1,"Stück"], joghurt:[200,"g"], zitrone:[1,"Stück"], petersilie:[15,"g"] },
    [
      "Nudeln in Salzwasser bissfest kochen, abgießen, kalt abschrecken und gut abtropfen lassen.",
      "Thunfisch und Mais abtropfen lassen; Gurke klein würfeln und Petersilie hacken.",
      "Joghurt mit Zitronensaft, Salz und Pfeffer zu einem glatten Dressing verrühren.",
      "Nudeln, Thunfisch, Mais und Gurke mit dem Dressing gründlich vermengen.",
      "Petersilie unterheben und den Salat bis zum Servieren kalt stellen."
    ],
    "Den Salat höchstens zwei Stunden ungekühlt stehen lassen und Reste rasch wieder kühlen."),

  recipe("Gnocchi mit Tomaten und Spinat", "🍅", "schnell", "vegetarisch", "herzhaft", false, 10, 15, "Einfach",
    { gnocchi:[800,"g"], tomaten:[5,"Stück"], spinat:[250,"g"], knoblauch:[2,"Zehen"], mozzarella:[250,"g"], olivenoel:[2,"EL"] },
    [
      "Tomaten würfeln, Knoblauch fein hacken und Mozzarella abtropfen lassen sowie zerzupfen.",
      "Gnocchi im Olivenöl in einer großen Pfanne 6 bis 8 Minuten goldbraun braten.",
      "Knoblauch und Tomaten zugeben und 4 Minuten köcheln lassen.",
      "Spinat portionsweise unterheben und zusammenfallen lassen.",
      "Mozzarella auf der Pfanne verteilen, kurz anschmelzen lassen und mit Salz sowie Pfeffer abschmecken."
    ],
    "Sehr feuchte Tomaten zunächst offen einkochen lassen, damit die Gnocchi knusprig bleiben."),

  recipe("Karotten-Linsen-Curry", "🥕", "normal", "vegan", "herzhaft", false, 15, 30, "Einfach",
    { linsen:[240,"g"], karotten:[500,"g"], kokosmilch:[400,"ml"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], currypulver:[3,"TL"] },
    [
      "Linsen abspülen; Karotten in dünne Scheiben schneiden und Zwiebel sowie Knoblauch fein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch und Currypulver kurz mitrösten.",
      "Karotten, Linsen, Kokosmilch und Dosentomaten einrühren und aufkochen.",
      "Bei kleiner Hitze 22 bis 25 Minuten köcheln lassen und regelmäßig umrühren.",
      "Gargrad der Linsen prüfen und das Curry mit Salz sowie Zitronen- oder Limettensaft abschmecken."
    ],
    "Je nach Linsensorte kann etwas zusätzliches Wasser notwendig sein; immer erst schluckweise ergänzen."),

  recipe("Bananen-Hafer-Pancakes", "🥞", "schnell", "vegetarisch", "süß", false, 10, 15, "Einfach",
    { banane:[3,"Stück"], haferflocken:[200,"g"], eier:[4,"Stück"], joghurt:[150,"g"], milch:[100,"ml"], backpulver:[2,"TL"], zimt:[1,"TL"] },
    [
      "Bananen mit einer Gabel sehr fein zerdrücken.",
      "Haferflocken fein mahlen oder direkt mit Eiern, Joghurt, Milch, Backpulver und Zimt zur Banane geben.",
      "Alles zu einem gleichmäßigen Teig verrühren und 5 Minuten quellen lassen.",
      "Eine beschichtete Pfanne leicht fetten und kleine Pancakes bei mittlerer Hitze portionsweise ausbacken.",
      "Wenden, sobald die Oberfläche Bläschen zeigt, und die zweite Seite goldbraun backen."
    ],
    "Kleine Pancakes lassen sich leichter wenden und garen gleichmäßiger durch."),

  recipe("Gemüse-Reis-Suppe", "🍲", "normal", "vegan", "herzhaft", false, 15, 30, "Einfach",
    { reis:[180,"g"], karotten:[250,"g"], lauch:[1,"Stück"], sellerie:[1,"Stück"], erbsen:[200,"g"], bruehe:[1400,"ml"], petersilie:[15,"g"] },
    [
      "Reis abspülen; Karotten, Lauch und Sellerie in kleine gleichmäßige Stücke schneiden.",
      "Gemüse in einem großen Topf mit wenig Öl 5 Minuten anschwitzen.",
      "Brühe und Reis zugeben, aufkochen und 18 Minuten sanft köcheln lassen.",
      "Erbsen einrühren und weitere 5 Minuten garen, bis Reis und Gemüse weich sind.",
      "Mit Salz und Pfeffer abschmecken und gehackte Petersilie unterheben."
    ],
    "Die Suppe dickt beim Abkühlen nach; beim Aufwärmen etwas Brühe oder Wasser ergänzen."),

  recipe("Hähnchen-Paprika-Wraps", "🌯", "schnell", "alles", "herzhaft", false, 15, 15, "Einfach",
    { tortilla:[8,"Stück"], haehnchen:[500,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], joghurt:[180,"g"], salat:[120,"g"], paprikapulver:[2,"TL"] },
    [
      "Hähnchen in dünne Streifen schneiden; Paprika und Zwiebel ebenfalls in Streifen schneiden.",
      "Hähnchen in einer heißen Pfanne mit wenig Öl rundherum anbraten und vollständig durchgaren.",
      "Paprika, Zwiebel und Paprikapulver zugeben und weitere 5 Minuten braten.",
      "Tortillas nach Packungsangabe erwärmen und mit Joghurt bestreichen.",
      "Salat und Hähnchen-Gemüse-Mischung verteilen, Seiten einschlagen und Wraps fest aufrollen."
    ],
    "Füllung kurz ausdampfen lassen, damit die Tortillas nicht durchweichen."),

  recipe("Kartoffel-Brokkoli-Auflauf", "🥦", "aufwendig", "vegetarisch", "herzhaft", false, 20, 45, "Einfach",
    { kartoffeln:[900,"g"], brokkoli:[500,"g"], sahne:[250,"ml"], milch:[200,"ml"], reibekaese:[180,"g"], knoblauch:[1,"Zehe"] },
    [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform einfetten.",
      "Kartoffeln schälen, in dünne Scheiben schneiden und 8 Minuten in Salzwasser vorgaren.",
      "Brokkoli in Röschen teilen, für die letzten 3 Minuten zu den Kartoffeln geben und anschließend alles abgießen.",
      "Sahne, Milch und fein geriebenen Knoblauch mit Salz und Pfeffer verrühren; Gemüse in die Form geben und übergießen.",
      "Käse darüberstreuen und 30 bis 35 Minuten backen, bis die Kartoffeln weich und die Oberfläche goldbraun ist."
    ],
    "Den Auflauf vor dem Portionieren 5 Minuten ruhen lassen, damit sich die Sauce setzt."),

  recipe("Kichererbsen-Salat mit Avocado", "🥑", "schnell", "vegan", "herzhaft", false, 15, 5, "Einfach",
    { kichererbsen:[480,"g"], avocado:[2,"Stück"], tomaten:[4,"Stück"], gurke:[1,"Stück"], zitrone:[1,"Stück"], olivenoel:[2,"EL"], petersilie:[15,"g"] },
    [
      "Kichererbsen abspülen, gründlich abtropfen lassen und in eine große Schüssel geben.",
      "Tomaten und Gurke würfeln, Petersilie hacken und alles zu den Kichererbsen geben.",
      "Zitronensaft mit Olivenöl, Salz und Pfeffer zu einem Dressing verrühren.",
      "Avocados halbieren, entkernen, würfeln und unmittelbar mit dem Dressing vermengen.",
      "Alle Zutaten vorsichtig mischen, 5 Minuten durchziehen lassen und frisch servieren."
    ],
    "Avocado erst kurz vor dem Essen schneiden; Zitronensaft verlangsamt das Braunwerden."),

  recipe("Apfel-Quark-Auflauf", "🍎", "normal", "vegetarisch", "süß", false, 15, 35, "Einfach",
    { quark:[500,"g"], apfel:[3,"Stück"], eier:[3,"Stück"], zucker:[60,"g"], speisestaerke:[35,"g"], zimt:[1,"TL"], butter:[15,"g"] },
    [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und eine Auflaufform mit Butter einfetten.",
      "Äpfel schälen, entkernen und in dünne Spalten schneiden.",
      "Eier trennen; Eigelb mit Quark, Zucker, Speisestärke und Zimt glatt rühren.",
      "Eiweiß steif schlagen, vorsichtig unterheben und anschließend die Apfelspalten einarbeiten.",
      "Masse in die Form geben und 30 bis 35 Minuten backen; vor dem Servieren 10 Minuten abkühlen lassen."
    ],
    "Die Ofentür während der ersten 25 Minuten geschlossen halten, damit der Auflauf nicht zusammenfällt."),

  recipe("Tomaten-Mozzarella-Reis", "🍅", "normal", "vegetarisch", "herzhaft", false, 12, 28, "Einfach",
    { reis:[320,"g"], dosentomaten:[600,"g"], mozzarella:[250,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[500,"ml"], basilikum:[15,"g"] },
    [
      "Zwiebel und Knoblauch fein würfeln; Mozzarella abtropfen lassen und zerzupfen.",
      "Zwiebel in einem breiten Topf mit wenig Olivenöl 3 Minuten anschwitzen, Knoblauch kurz zugeben.",
      "Reis einrühren, 1 Minute mitrösten und anschließend Tomaten sowie Brühe angießen.",
      "Abgedeckt bei kleiner Hitze 18 bis 20 Minuten garen und zwischendurch umrühren.",
      "Topf vom Herd nehmen, Mozzarella und Basilikum unterheben und mit Salz sowie Pfeffer abschmecken."
    ],
    "Falls der Reis noch fest ist, aber die Flüssigkeit aufgenommen wurde, etwas heiße Brühe ergänzen."),

  recipe("Linsen-Kartoffel-Topf", "🥔", "normal", "vegan", "herzhaft", false, 15, 35, "Einfach",
    { linsen:[240,"g"], kartoffeln:[700,"g"], karotten:[250,"g"], zwiebeln:[1,"Stück"], bruehe:[1200,"ml"], paprikapulver:[2,"TL"], petersilie:[15,"g"] },
    [
      "Linsen abspülen; Kartoffeln und Karotten schälen und in etwa 2 cm große Würfel schneiden.",
      "Zwiebel fein würfeln und in einem großen Topf mit wenig Öl 4 Minuten anschwitzen.",
      "Paprikapulver kurz mitrösten, dann Linsen, Kartoffeln, Karotten und Brühe zugeben.",
      "Aufkochen und bei kleiner Hitze 28 bis 32 Minuten köcheln lassen, bis alles weich ist.",
      "Mit Salz, Pfeffer und etwas Essig abschmecken und Petersilie unterheben."
    ],
    "Kartoffelwürfel gleich groß schneiden, damit sie gleichzeitig gar werden."),

  recipe("Ofenfisch mit Tomaten und Kichererbsen", "🐟", "normal", "alles", "herzhaft", false, 20, 30, "Einfach",
    { fisch:[650,"g"], kichererbsen:[480,"g"], tomaten:[500,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], zitrone:[1,"Stück"], olivenoel:[3,"EL"], paprikapulver:[2,"TL"] },
    [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen; Kichererbsen abspülen und gut abtropfen lassen.",
      "Tomaten, Paprika und Zwiebel grob schneiden und mit Kichererbsen, Knoblauch, Öl und Paprikapulver mischen.",
      "Gemüsemischung in einer großen Form 18 Minuten vorbacken.",
      "Fisch trocken tupfen, auf Gräten prüfen, würzen und auf das Gemüse legen; mit Zitronensaft beträufeln.",
      "Weitere 10 bis 12 Minuten backen, bis der Fisch im Kern nicht mehr glasig ist und leicht zerfällt."
    ],
    "Dünne Fischfilets erst einige Minuten später auflegen, damit sie nicht trocken werden."),

  recipe("Beeren-Joghurt-Crumble", "🫐", "normal", "vegetarisch", "süß", false, 15, 30, "Einfach",
    { beeren:[600,"g"], haferflocken:[160,"g"], mehl:[80,"g"], butter:[100,"g"], zucker:[70,"g"], joghurt:[400,"g"], zimt:[1,"TL"] },
    [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und eine Auflaufform leicht einfetten.",
      "Beeren in der Form verteilen und mit 20 g Zucker bestreuen.",
      "Haferflocken, Mehl, übrigen Zucker und Zimt vermischen; kalte Butter in Stücken einkneten, bis grobe Streusel entstehen.",
      "Streusel gleichmäßig auf den Beeren verteilen und 25 bis 30 Minuten goldbraun backen.",
      "Crumble 10 Minuten abkühlen lassen und mit kaltem Joghurt servieren."
    ],
    "Tiefgekühlte Beeren direkt gefroren verwenden und die Backzeit bei Bedarf um 5 Minuten verlängern."),

  recipe("Pasta e Ceci", "🍝", "normal", "vegan", "herzhaft", true, 12, 28, "Einfach",
    { nudeln:[320,"g"], kichererbsen:[480,"g"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[600,"ml"], rosmarin:[5,"g"], olivenoel:[2,"EL"] },
    [
      "Kichererbsen abspülen; Zwiebel und Knoblauch fein würfeln und Rosmarin hacken.",
      "Zwiebel im Olivenöl 4 Minuten anschwitzen, Knoblauch und Rosmarin kurz mitrösten.",
      "Tomaten, Brühe und Kichererbsen zugeben, aufkochen und 10 Minuten sanft köcheln lassen.",
      "Etwa ein Viertel der Kichererbsen im Topf zerdrücken, Nudeln einrühren und nach Packungszeit bissfest garen; regelmäßig umrühren.",
      "Konsistenz mit heißem Wasser anpassen und kräftig mit Salz sowie Pfeffer abschmecken."
    ],
    "Kurze Nudelformen verwenden und während des Garens häufig rühren, damit nichts am Topfboden ansetzt."),

  recipe("Pasta alla Norma", "🍆", "normal", "vegetarisch", "herzhaft", true, 15, 30, "Mittel",
    { nudeln:[400,"g"], aubergine:[2,"Stück"], dosentomaten:[600,"g"], ricotta:[180,"g"], knoblauch:[2,"Zehen"], basilikum:[20,"g"], olivenoel:[4,"EL"] },
    [
      "Auberginen in 2 cm große Würfel schneiden, salzen und 10 Minuten ziehen lassen; anschließend trocken tupfen.",
      "Auberginen portionsweise im Olivenöl rundherum kräftig bräunen und auf einem Teller bereitstellen.",
      "Knoblauch kurz im verbliebenen Öl anschwitzen, Tomaten zugeben und 15 Minuten offen einkochen.",
      "Nudeln bissfest kochen, mit Sauce und Auberginen vermengen und bei Bedarf etwas Kochwasser ergänzen.",
      "Mit Basilikum und zerbröseltem Ricotta anrichten und sofort servieren."
    ],
    "Auberginen portionsweise braten; eine überfüllte Pfanne lässt sie eher dämpfen als bräunen."),

  recipe("Cacio e Pepe", "🧀", "schnell", "vegetarisch", "herzhaft", true, 8, 15, "Mittel",
    { nudeln:[400,"g"], parmesan:[140,"g"], butter:[25,"g"] },
    [
      "Parmesan sehr fein reiben und reichlich schwarzen Pfeffer grob mahlen.",
      "Nudeln in nur leicht gesalzenem Wasser bissfest kochen und 250 ml stärkehaltiges Kochwasser auffangen.",
      "Pfeffer in einer großen Pfanne ohne Fett 30 Sekunden rösten, Butter und etwa 100 ml Kochwasser zugeben.",
      "Nudeln in die Pfanne geben, vom Herd ziehen und kurz abkühlen lassen.",
      "Parmesan portionsweise unter kräftigem Schwenken einarbeiten, bis eine glatte Sauce entsteht; nicht erneut stark erhitzen."
    ],
    "Käse und Pasta nicht auf hoher Hitze vermengen, sonst verklumpt der Parmesan."),

  recipe("Gnocchi alla Sorrentina", "🍅", "normal", "vegetarisch", "herzhaft", true, 12, 28, "Einfach",
    { gnocchi:[800,"g"], dosentomaten:[600,"g"], mozzarella:[250,"g"], parmesan:[60,"g"], knoblauch:[2,"Zehen"], basilikum:[20,"g"], olivenoel:[2,"EL"] },
    [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen und eine Auflaufform bereitstellen.",
      "Knoblauch im Olivenöl sanft anschwitzen, Tomaten zugeben und 12 Minuten einkochen; mit Salz und Pfeffer abschmecken.",
      "Gnocchi nach Packungsangabe garen, sobald sie aufsteigen abgießen und mit der Tomatensauce vermengen.",
      "Gnocchi in die Form geben, Mozzarella und Parmesan gleichmäßig darüber verteilen.",
      "10 bis 12 Minuten überbacken und anschließend mit frischem Basilikum servieren."
    ],
    "Mozzarella gut abtropfen lassen, damit der Auflauf nicht wässrig wird."),

  recipe("Auberginen-Parmigiana", "🍆", "aufwendig", "vegetarisch", "herzhaft", true, 25, 55, "Mittel",
    { aubergine:[3,"Stück"], dosentomaten:[800,"g"], mozzarella:[300,"g"], parmesan:[100,"g"], knoblauch:[2,"Zehen"], basilikum:[20,"g"], olivenoel:[4,"EL"] },
    [
      "Auberginen längs in 7 mm dicke Scheiben schneiden, salzen, 15 Minuten ziehen lassen und gründlich trocken tupfen.",
      "Scheiben dünn mit Olivenöl bestreichen und auf Blechen bei 220 °C etwa 18 Minuten vorbacken, einmal wenden.",
      "Knoblauch anschwitzen, Tomaten zugeben und 15 Minuten zu einer dicken Sauce einkochen; Basilikum unterrühren.",
      "Sauce, Auberginen, Mozzarella und Parmesan abwechselnd in eine Form schichten und mit Käse abschließen.",
      "Bei 190 °C 30 bis 35 Minuten backen und vor dem Anschneiden 10 Minuten ruhen lassen."
    ],
    "Die Tomatensauce muss kräftig eingekocht sein, damit die Parmigiana schnittfest wird."),

  recipe("Lachs-Spinat-Pasta", "🐟", "normal", "alles", "herzhaft", true, 12, 23, "Einfach",
    { nudeln:[400,"g"], lachs:[500,"g"], spinat:[300,"g"], sahne:[200,"ml"], zitrone:[1,"Stück"], knoblauch:[1,"Zehe"], parmesan:[50,"g"] },
    [
      "Nudeln in Salzwasser bissfest kochen und 150 ml Kochwasser auffangen.",
      "Lachs trocken tupfen, in große Würfel schneiden und in einer Pfanne rundherum anbraten; anschließend herausnehmen.",
      "Knoblauch kurz anschwitzen, Sahne angießen und 3 Minuten sanft köcheln lassen.",
      "Spinat zusammenfallen lassen, Nudeln und etwas Kochwasser einrühren und die Sauce mit Zitronensaft abschmecken.",
      "Lachs vorsichtig unterheben, vollständig erhitzen und mit Parmesan servieren."
    ],
    "Lachswürfel nur vorsichtig wenden, damit sie nicht zerfallen; für Risikogruppen vollständig durchgaren."),

  recipe("Garnelen-Risotto", "🍤", "normal", "alles", "herzhaft", true, 15, 35, "Mittel",
    { reis:[320,"g"], garnelen:[400,"g"], bruehe:[1100,"ml"], weisswein:[150,"ml"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], parmesan:[70,"g"], butter:[40,"g"], zitrone:[1,"Stück"] },
    [
      "Brühe in einem separaten Topf heiß halten; Garnelen trocken tupfen.",
      "Garnelen in wenig Butter 2 bis 3 Minuten anbraten, bis sie gerade eben gar sind, dann herausnehmen.",
      "Zwiebel und Knoblauch in derselben Pfanne anschwitzen, Reis zugeben und 1 Minute glasig rühren.",
      "Mit Weißwein ablöschen und anschließend heiße Brühe portionsweise unter regelmäßigem Rühren zugeben, bis der Reis cremig und bissfest ist.",
      "Garnelen, restliche Butter, Parmesan und Zitronensaft unterheben, abschmecken und sofort servieren."
    ],
    "Garnelen erst am Ende zurückgeben, damit sie saftig bleiben und nicht zäh werden."),

  recipe("Hähnchen-Piccata", "🍋", "normal", "alles", "herzhaft", true, 18, 22, "Mittel",
    { haehnchen:[600,"g"], mehl:[60,"g"], butter:[50,"g"], olivenoel:[2,"EL"], zitrone:[2,"Stück"], kapern:[30,"g"], bruehe:[250,"ml"], petersilie:[15,"g"] },
    [
      "Hähnchenbrust waagerecht halbieren, zwischen Folie gleichmäßig flach klopfen und mit Salz sowie Pfeffer würzen.",
      "Fleisch dünn in Mehl wenden und überschüssiges Mehl abklopfen.",
      "Olivenöl und die Hälfte der Butter erhitzen, Hähnchen portionsweise goldbraun braten und vollständig durchgaren; warm stellen.",
      "Brühe, Zitronensaft und Kapern in die Pfanne geben, Bratensatz lösen und 4 Minuten einkochen.",
      "Restliche kalte Butter einrühren, Hähnchen kurz in der Sauce erwärmen und mit Petersilie servieren."
    ],
    "Dünne, gleichmäßige Fleischstücke garen schneller und bleiben saftiger."),

  recipe("Polenta mit Pilzragout", "🍄", "normal", "vegetarisch", "herzhaft", true, 15, 35, "Mittel",
    { polenta:[300,"g"], champignons:[600,"g"], bruehe:[1000,"ml"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], sahne:[150,"ml"], parmesan:[70,"g"], butter:[30,"g"] },
    [
      "Champignons putzen und in Scheiben schneiden; Zwiebel und Knoblauch fein würfeln.",
      "Pilze portionsweise in einer sehr heißen Pfanne kräftig bräunen und anschließend salzen.",
      "Zwiebel und Knoblauch anschwitzen, Pilze zurückgeben, Sahne angießen und 8 Minuten sanft einkochen.",
      "Brühe aufkochen, Polenta unter Rühren einrieseln lassen und nach Packungsangabe cremig garen.",
      "Butter und Parmesan in die Polenta rühren, abschmecken und mit dem Pilzragout anrichten."
    ],
    "Pilze erst nach dem Bräunen salzen, damit sie weniger Wasser ziehen."),

  recipe("Kartoffel-Spinat-Frittata", "🍳", "normal", "vegetarisch", "herzhaft", true, 15, 30, "Einfach",
    { kartoffeln:[600,"g"], eier:[8,"Stück"], spinat:[250,"g"], zwiebeln:[1,"Stück"], feta:[150,"g"], olivenoel:[2,"EL"] },
    [
      "Kartoffeln schälen, in 5 mm dünne Scheiben schneiden und 8 Minuten in Salzwasser vorgaren; abgießen.",
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen und Eier mit Salz sowie Pfeffer verquirlen.",
      "Zwiebel in einer ofenfesten Pfanne anschwitzen, Spinat zugeben und zusammenfallen lassen.",
      "Kartoffeln verteilen, Eimasse angießen und Feta darüberbröseln; 4 Minuten auf dem Herd anstocken lassen.",
      "Pfanne 12 bis 15 Minuten in den Ofen stellen, bis die Eimasse vollständig gestockt ist."
    ],
    "Eine ofenfeste Pfanne verwenden und den heißen Griff nach dem Backen kennzeichnen oder mit einem Tuch schützen."),

  recipe("Ricotta-Tomaten-Crostini", "🍞", "schnell", "vegetarisch", "herzhaft", true, 15, 8, "Einfach",
    { baguette:[1,"Stück"], ricotta:[250,"g"], tomaten:[4,"Stück"], basilikum:[15,"g"], knoblauch:[1,"Zehe"], olivenoel:[3,"EL"], zitrone:[1,"Stück"] },
    [
      "Backofen auf 220 °C Ober-/Unterhitze vorheizen und Baguette schräg in 12 Scheiben schneiden.",
      "Brotscheiben mit einem Esslöffel Olivenöl bestreichen und 6 bis 8 Minuten knusprig rösten.",
      "Tomaten entkernen, klein würfeln und mit restlichem Olivenöl, Salz und Pfeffer vermengen.",
      "Ricotta mit etwas Zitronenabrieb und einer Prise Salz glatt rühren.",
      "Geröstetes Brot mit Knoblauch abreiben, Ricotta und Tomaten daraufgeben und mit Basilikum servieren."
    ],
    "Crostini erst unmittelbar vor dem Servieren belegen, damit sie knusprig bleiben."),

  recipe("Sizilianische Caponata", "🍆", "normal", "vegan", "herzhaft", true, 20, 35, "Mittel",
    { aubergine:[2,"Stück"], sellerie:[1,"Stück"], tomaten:[5,"Stück"], zwiebeln:[1,"Stück"], oliven:[100,"g"], kapern:[25,"g"], essig:[3,"EL"], zucker:[1,"EL"], olivenoel:[4,"EL"] },
    [
      "Auberginen würfeln, salzen, 10 Minuten ziehen lassen und trocken tupfen; Sellerie, Tomaten und Zwiebel klein schneiden.",
      "Auberginen portionsweise im Olivenöl kräftig bräunen und herausnehmen.",
      "Zwiebel und Sellerie 6 Minuten anschwitzen, dann Tomaten, Oliven und Kapern zugeben.",
      "Essig und Zucker einrühren, Auberginen zurückgeben und 15 Minuten offen sanft schmoren.",
      "Mit Salz und Pfeffer ausbalancieren und lauwarm oder vollständig abgekühlt servieren."
    ],
    "Caponata schmeckt nach einigen Stunden Ruhezeit aromatischer; gekühlt lagern und rechtzeitig temperieren."),

  recipe("Hähnchen-Souvlaki mit Reis", "🍢", "normal", "alles", "herzhaft", true, 25, 30, "Mittel",
    { haehnchen:[700,"g"], reis:[320,"g"], paprika:[2,"Stück"], zwiebeln:[2,"Stück"], zitrone:[2,"Stück"], knoblauch:[3,"Zehen"], joghurt:[250,"g"], rosmarin:[8,"g"], olivenoel:[3,"EL"] },
    [
      "Hähnchen in 3 cm große Würfel schneiden und mit Öl, Saft einer Zitrone, Rosmarin und zwei gehackten Knoblauchzehen mischen.",
      "Paprika und Zwiebeln in gleich große Stücke schneiden; Reis nach Packungsangabe garen.",
      "Hähnchen, Paprika und Zwiebeln abwechselnd auf Spieße stecken.",
      "Spieße in einer Grillpfanne rundherum 12 bis 15 Minuten braten, bis das Hähnchen vollständig durchgegart ist.",
      "Joghurt mit restlichem Knoblauch und Zitronensaft verrühren und mit Reis und heißen Spießen servieren."
    ],
    "Holzspieße vorab 20 Minuten wässern, damit sie in der heißen Pfanne weniger stark bräunen."),

  recipe("Spanakopita", "🥧", "aufwendig", "vegetarisch", "herzhaft", true, 30, 45, "Mittel",
    { filoteig:[300,"g"], spinat:[700,"g"], feta:[300,"g"], eier:[2,"Stück"], zwiebeln:[1,"Stück"], olivenoel:[5,"EL"], petersilie:[20,"g"] },
    [
      "Spinat gründlich waschen, zusammenfallen lassen, abkühlen und sehr gut ausdrücken.",
      "Zwiebel fein würfeln und in einem Esslöffel Olivenöl glasig dünsten.",
      "Spinat hacken und mit Zwiebel, zerbröseltem Feta, Eiern und Petersilie vermengen; zurückhaltend salzen.",
      "Eine Form ölen, die Hälfte der Filoteigblätter einzeln einlegen und jeweils dünn ölen; Füllung verteilen und restliche Blätter ebenso auflegen.",
      "Bei 190 °C Ober-/Unterhitze 35 bis 40 Minuten goldbraun backen und vor dem Schneiden 10 Minuten ruhen lassen."
    ],
    "Filoteig während der Arbeit mit einem leicht feuchten Tuch abdecken, damit er nicht austrocknet."),

  recipe("Griechische gefüllte Tomaten", "🍅", "aufwendig", "vegan", "herzhaft", true, 30, 60, "Mittel",
    { tomaten:[8,"Stück"], reis:[240,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], petersilie:[25,"g"], olivenoel:[4,"EL"], kartoffeln:[500,"g"] },
    [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen; von den Tomaten Deckel abschneiden und Fruchtfleisch vorsichtig herauslösen.",
      "Tomateninneres hacken; Zwiebel und Knoblauch in der Hälfte des Olivenöls anschwitzen, Reis und Tomateninneres zugeben und 8 Minuten vorgaren.",
      "Petersilie unterrühren und die Mischung mit Salz sowie Pfeffer kräftig abschmecken.",
      "Tomaten locker füllen, Deckel aufsetzen und mit Kartoffelspalten in eine Form setzen; übriges Olivenöl darübergeben.",
      "Etwa 50 bis 60 Minuten backen, bis Reis und Kartoffeln vollständig gar sind; bei Bedarf wenig heißes Wasser angießen."
    ],
    "Tomaten nicht zu fest füllen, weil der Reis beim Garen noch quillt."),

  recipe("Vegetarische Linsen-Moussaka", "🍆", "aufwendig", "vegetarisch", "herzhaft", true, 30, 60, "Anspruchsvoll",
    { aubergine:[3,"Stück"], linsen:[250,"g"], kartoffeln:[600,"g"], dosentomaten:[600,"g"], zwiebeln:[1,"Stück"], milch:[500,"ml"], butter:[50,"g"], mehl:[50,"g"], reibekaese:[150,"g"] },
    [
      "Linsen nach Packungsangabe bissfest garen; Kartoffeln in Scheiben 8 Minuten vorkochen und Auberginen in Scheiben schneiden.",
      "Auberginen mit wenig Öl bei 220 °C 18 Minuten vorbacken und einmal wenden.",
      "Zwiebel anschwitzen, Linsen und Tomaten zugeben und 15 Minuten zu einer dicken Sauce einkochen.",
      "Butter schmelzen, Mehl einrühren, Milch portionsweise einarbeiten und 5 Minuten köcheln; die Hälfte des Käses einrühren.",
      "Kartoffeln, Linsensauce und Auberginen schichten, Béchamel und restlichen Käse daraufgeben und bei 190 °C 35 Minuten backen."
    ],
    "Die fertige Moussaka mindestens 15 Minuten ruhen lassen, damit sie sich sauber schneiden lässt."),

  recipe("Kichererbsen-Shakshuka", "🍳", "normal", "vegetarisch", "herzhaft", true, 15, 30, "Einfach",
    { kichererbsen:[400,"g"], eier:[6,"Stück"], dosentomaten:[800,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], kreuzkuemmel:[2,"TL"], paprikapulver:[2,"TL"] },
    [
      "Kichererbsen abspülen; Paprika und Zwiebel würfeln, Knoblauch fein hacken.",
      "Zwiebel und Paprika in einer großen Pfanne 7 Minuten anbraten.",
      "Knoblauch, Kreuzkümmel und Paprikapulver kurz mitrösten, Tomaten und Kichererbsen einrühren und 12 Minuten einkochen.",
      "Sechs Mulden formen, Eier hineinschlagen und die Pfanne abdecken.",
      "Bei kleiner Hitze 6 bis 9 Minuten garen, bis das Eiweiß vollständig gestockt ist; Eigelb nach gewünschtem Gargrad weitergaren."
    ],
    "Die Sauce vor den Eiern kräftig abschmecken; danach lässt sie sich schlechter umrühren."),

  recipe("Marokkanische Harira", "🍲", "aufwendig", "vegan", "herzhaft", true, 20, 45, "Mittel",
    { linsen:[180,"g"], kichererbsen:[400,"g"], dosentomaten:[800,"g"], sellerie:[1,"Stück"], zwiebeln:[1,"Stück"], bruehe:[1200,"ml"], kreuzkuemmel:[2,"TL"], koriander:[15,"g"], zitrone:[1,"Stück"] },
    [
      "Linsen abspülen, Kichererbsen abtropfen lassen und Sellerie sowie Zwiebel fein schneiden.",
      "Zwiebel und Sellerie in wenig Öl 6 Minuten anschwitzen, Kreuzkümmel kurz mitrösten.",
      "Tomaten, Brühe und Linsen zugeben und 30 Minuten sanft köcheln lassen.",
      "Kichererbsen einrühren und weitere 10 Minuten garen; bei Bedarf etwas Wasser ergänzen.",
      "Mit Salz, Pfeffer, Zitronensaft und gehacktem Koriander abschmecken."
    ],
    "Die Säure erst am Ende zugeben, damit die Linsen zuverlässig weich werden."),

  recipe("Mujadara mit Röstzwiebeln", "🍚", "normal", "vegan", "herzhaft", true, 15, 40, "Mittel",
    { linsen:[220,"g"], reis:[260,"g"], zwiebeln:[4,"Stück"], olivenoel:[4,"EL"], kreuzkuemmel:[2,"TL"] },
    [
      "Linsen abspülen und in reichlich Wasser 15 Minuten vorgaren, anschließend abgießen.",
      "Zwiebeln halbieren, in dünne Streifen schneiden und im Olivenöl bei mittlerer Hitze langsam dunkelgolden rösten; die Hälfte herausnehmen.",
      "Reis, Linsen und Kreuzkümmel zu den übrigen Zwiebeln geben und 1 Minute mitrösten.",
      "650 ml heißes Wasser und Salz zugeben, abdecken und bei kleiner Hitze 18 Minuten garen.",
      "Topf 10 Minuten ruhen lassen, Reis auflockern und mit den zurückgelegten Röstzwiebeln servieren."
    ],
    "Zwiebeln geduldig bei mittlerer Hitze rösten; zu hohe Hitze macht sie außen bitter und innen roh."),

  recipe("Falafel-Couscous-Bowl", "🧆", "normal", "vegan", "herzhaft", true, 20, 25, "Mittel",
    { kichererbsen:[480,"g"], couscous:[260,"g"], gurke:[1,"Stück"], tomaten:[4,"Stück"], petersilie:[30,"g"], knoblauch:[2,"Zehen"], zitrone:[1,"Stück"], kreuzkuemmel:[2,"TL"], bruehe:[320,"ml"], mehl:[40,"g"] },
    [
      "Couscous mit kochender Brühe übergießen, 8 Minuten abgedeckt quellen lassen und auflockern.",
      "Kichererbsen sehr gut abtropfen und mit Knoblauch, Mehl, der Hälfte der Petersilie und Kreuzkümmel grob zerkleinern.",
      "Masse kräftig würzen, zu kleinen Talern formen und in wenig Öl bei mittlerer Hitze je Seite 4 bis 5 Minuten braten.",
      "Gurke und Tomaten würfeln und mit Couscous, Zitronensaft sowie übriger Petersilie vermengen.",
      "Couscous auf Schalen verteilen und die heißen Kichererbsentaler darauf anrichten."
    ],
    "Kichererbsenmasse nur grob zerkleinern; eine völlig glatte Masse wird beim Braten weich."),

  recipe("Hummus-Teller mit Ofengemüse", "🫓", "normal", "vegan", "herzhaft", true, 20, 30, "Einfach",
    { kichererbsen:[480,"g"], aubergine:[1,"Stück"], paprika:[2,"Stück"], karotten:[300,"g"], sesam:[3,"EL"], zitrone:[1,"Stück"], knoblauch:[1,"Zehe"], olivenoel:[4,"EL"], fladenbrot:[1,"Stück"] },
    [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen; Aubergine, Paprika und Karotten gleichmäßig schneiden.",
      "Gemüse mit zwei Esslöffeln Olivenöl und Salz mischen und 25 bis 30 Minuten rösten, nach der Hälfte wenden.",
      "Kichererbsen abspülen und mit Sesam, Zitronensaft, Knoblauch, restlichem Olivenöl und 4 bis 6 Esslöffeln Wasser fein pürieren.",
      "Hummus mit Salz abschmecken und auf einer großen Platte verstreichen.",
      "Ofengemüse darauf verteilen und mit erwärmtem Fladenbrot servieren."
    ],
    "Wasser beim Pürieren nur esslöffelweise ergänzen, bis der Hummus cremig, aber nicht dünn ist."),

  recipe("Türkische Linsensuppe", "🍲", "normal", "vegan", "herzhaft", true, 15, 35, "Einfach",
    { linsen:[260,"g"], karotten:[250,"g"], kartoffeln:[250,"g"], zwiebeln:[1,"Stück"], dosentomaten:[200,"g"], bruehe:[1200,"ml"], paprikapulver:[2,"TL"], zitrone:[1,"Stück"] },
    [
      "Linsen abspülen; Karotten, Kartoffeln und Zwiebel klein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen und Paprikapulver kurz mitrösten.",
      "Gemüse, Linsen, Tomaten und Brühe zugeben und aufkochen.",
      "Bei kleiner Hitze 25 bis 30 Minuten köcheln lassen, bis alle Zutaten weich sind.",
      "Suppe fein pürieren, Konsistenz anpassen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "Für eine besonders glatte Suppe nach dem Pürieren durch ein grobes Sieb streichen."),

  recipe("Imam Bayildi", "🍆", "aufwendig", "vegan", "herzhaft", true, 25, 55, "Mittel",
    { aubergine:[4,"Stück"], zwiebeln:[3,"Stück"], tomaten:[5,"Stück"], knoblauch:[4,"Zehen"], olivenoel:[6,"EL"], petersilie:[20,"g"] },
    [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen; Auberginen längs einschneiden, ohne sie durchzutrennen.",
      "Auberginen mit zwei Esslöffeln Olivenöl bestreichen und 25 Minuten vorbacken, bis sie weich werden.",
      "Zwiebeln in dünne Streifen schneiden und im übrigen Öl 10 Minuten weich dünsten; Knoblauch und gewürfelte Tomaten zugeben.",
      "Füllung 12 Minuten einkochen, würzen, Petersilie unterheben und großzügig in die geöffneten Auberginen geben.",
      "Weitere 25 bis 30 Minuten backen und lauwarm servieren."
    ],
    "Die Zwiebeln langsam weich dünsten; ihre Süße ist entscheidend für das Gericht."),

  recipe("Menemen mit Feta", "🍳", "schnell", "vegetarisch", "herzhaft", true, 12, 15, "Einfach",
    { eier:[8,"Stück"], tomaten:[6,"Stück"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], feta:[150,"g"], olivenoel:[2,"EL"], petersilie:[15,"g"] },
    [
      "Tomaten grob reiben oder klein würfeln; Paprika und Zwiebel fein schneiden.",
      "Zwiebel und Paprika im Olivenöl 6 Minuten weich braten.",
      "Tomaten zugeben und 5 Minuten offen einkochen, bis die Masse nicht mehr wässrig ist.",
      "Eier verquirlen, in die Pfanne geben und bei kleiner Hitze unter sanftem Rühren vollständig stocken lassen.",
      "Feta und Petersilie darübergeben, mit Pfeffer abschmecken und sofort servieren."
    ],
    "Feta ist bereits salzig; das Gericht erst ganz am Ende zusätzlich salzen."),

  recipe("Spinat-Feta-Pide", "🥙", "aufwendig", "vegetarisch", "herzhaft", true, 25, 80, "Mittel",
    { mehl:[500,"g"], hefe:[1,"Päckchen"], spinat:[500,"g"], feta:[250,"g"], zwiebeln:[1,"Stück"], olivenoel:[3,"EL"], eier:[1,"Stück"] },
    [
      "Mehl, Hefe, 300 ml lauwarmes Wasser, einen Esslöffel Olivenöl und 1 TL Salz 8 Minuten zu einem glatten Teig kneten; 60 Minuten gehen lassen.",
      "Spinat zusammenfallen lassen, abkühlen, gründlich ausdrücken und hacken.",
      "Zwiebel anschwitzen und mit Spinat sowie zerbröseltem Feta vermengen; mit Pfeffer abschmecken.",
      "Teig in vier Teile teilen, oval ausrollen, Füllung mittig verteilen und die langen Ränder zu Schiffchen einklappen.",
      "Mit verquirltem Ei bestreichen und bei 220 °C Ober-/Unterhitze 15 bis 18 Minuten goldbraun backen."
    ],
    "Die Füllung muss möglichst trocken sein, damit der Teigboden knusprig bleibt."),

  recipe("Kichererbsen-Biryani", "🍚", "aufwendig", "vegan", "herzhaft", true, 20, 40, "Mittel",
    { reis:[320,"g"], kichererbsen:[480,"g"], zwiebeln:[2,"Stück"], karotten:[250,"g"], erbsen:[200,"g"], dosentomaten:[300,"g"], currypulver:[3,"TL"], bruehe:[650,"ml"], mandeln:[40,"g"] },
    [
      "Reis gründlich waschen, bis das Wasser fast klar bleibt; Kichererbsen abspülen und Gemüse vorbereiten.",
      "Zwiebeln in wenig Öl 8 Minuten goldbraun braten, Currypulver kurz mitrösten.",
      "Karotten, Tomaten und Kichererbsen zugeben und 5 Minuten schmoren.",
      "Reis und heiße Brühe einrühren, abdecken und bei kleinster Hitze 18 Minuten garen; Erbsen nach 12 Minuten auflegen.",
      "Topf 10 Minuten geschlossen ruhen lassen, Reis vorsichtig auflockern und mit Mandeln servieren."
    ],
    "Während des Garens den Deckel geschlossen lassen, damit das Verhältnis von Reis und Flüssigkeit stimmt."),

  recipe("Palak Tofu", "🥬", "normal", "vegan", "herzhaft", true, 18, 27, "Mittel",
    { tofu:[450,"g"], spinat:[700,"g"], zwiebeln:[1,"Stück"], knoblauch:[3,"Zehen"], ingwer:[25,"g"], dosentomaten:[250,"g"], currypulver:[3,"TL"], kokosmilch:[200,"ml"] },
    [
      "Tofu trocken pressen, würfeln und in einer beschichteten Pfanne rundherum goldbraun braten; beiseitestellen.",
      "Zwiebel 5 Minuten anschwitzen, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Tomaten einrühren und 5 Minuten einkochen, anschließend Spinat portionsweise zusammenfallen lassen.",
      "Kokosmilch zugeben, die Sauce fein oder grob pürieren und 5 Minuten sanft köcheln.",
      "Tofu unterheben, vollständig erhitzen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "Den Tofu vor dem Braten gut trocknen; dadurch bräunt er besser und bleibt formstabil."),

  recipe("Linsen-Kokos-Curry", "🍛", "normal", "vegan", "herzhaft", true, 12, 30, "Einfach",
    { linsen:[260,"g"], kokosmilch:[400,"ml"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], ingwer:[20,"g"], currypulver:[3,"TL"], limette:[1,"Stück"] },
    [
      "Linsen in einem Sieb abspülen; Zwiebel, Knoblauch und Ingwer fein schneiden.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch, Ingwer und Currypulver 30 Sekunden mitrösten.",
      "Linsen, Kokosmilch, Tomaten und 300 ml Wasser zugeben und aufkochen.",
      "Bei kleiner Hitze 22 bis 25 Minuten köcheln lassen und regelmäßig umrühren.",
      "Mit Salz und Limettensaft abschmecken; bei Bedarf mit heißem Wasser cremiger einstellen."
    ],
    "Säure erst zugeben, wenn die Linsen weich sind, da sie die Garzeit verlängern kann."),

  recipe("Kartoffel-Spinat-Curry", "🥔", "normal", "vegan", "herzhaft", true, 18, 35, "Einfach",
    { kartoffeln:[900,"g"], spinat:[400,"g"], dosentomaten:[400,"g"], kokosmilch:[300,"ml"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], currypulver:[3,"TL"] },
    [
      "Kartoffeln schälen und in 2 cm große Würfel schneiden; Zwiebel und Knoblauch fein würfeln.",
      "Zwiebel in wenig Öl 4 Minuten anschwitzen, Knoblauch und Currypulver kurz mitrösten.",
      "Kartoffeln, Tomaten, Kokosmilch und 250 ml Wasser zugeben und aufkochen.",
      "Abgedeckt 22 bis 25 Minuten sanft köcheln, bis die Kartoffeln weich sind.",
      "Spinat portionsweise unterheben, 3 Minuten garen und mit Salz sowie Zitronensaft abschmecken."
    ],
    "Kartoffelwürfel gleich groß schneiden und nur sanft rühren, damit sie nicht zerfallen."),

  recipe("Gemüse-Korma mit Mandeln", "🍛", "normal", "vegan", "herzhaft", true, 20, 30, "Mittel",
    { brokkoli:[350,"g"], karotten:[250,"g"], erbsen:[180,"g"], kokosmilch:[400,"ml"], mandeln:[80,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], ingwer:[20,"g"], currypulver:[2,"TL"] },
    [
      "Brokkoli in Röschen teilen, Karotten in dünne Scheiben schneiden und Mandeln fein mahlen.",
      "Zwiebel 5 Minuten weich dünsten, Knoblauch, Ingwer und Currypulver kurz mitrösten.",
      "Kokosmilch, gemahlene Mandeln und 150 ml Wasser einrühren und 5 Minuten sanft köcheln.",
      "Karotten zugeben, nach 5 Minuten Brokkoli ergänzen und weitere 8 Minuten bissfest garen.",
      "Erbsen 3 Minuten mitgaren und das Korma mit Salz sowie Zitronensaft abschmecken."
    ],
    "Die Sauce nach Zugabe der Mandeln häufig umrühren, weil sie schneller am Topfboden ansetzt."),

  recipe("Tofu Tikka Masala", "🍛", "normal", "vegan", "herzhaft", true, 20, 30, "Mittel",
    { tofu:[500,"g"], dosentomaten:[800,"g"], kokosmilch:[300,"ml"], zwiebeln:[1,"Stück"], knoblauch:[3,"Zehen"], ingwer:[25,"g"], currypulver:[4,"TL"], limette:[1,"Stück"] },
    [
      "Tofu pressen, in Würfel schneiden und mit einem Teelöffel Currypulver sowie Salz vermengen.",
      "Tofu in einer großen Pfanne rundherum kräftig bräunen und herausnehmen.",
      "Zwiebel 5 Minuten anschwitzen, Knoblauch, Ingwer und übriges Currypulver kurz mitrösten.",
      "Tomaten zugeben und 12 Minuten offen einkochen, anschließend Kokosmilch einrühren.",
      "Tofu in der Sauce 5 Minuten erhitzen und mit Salz sowie Limettensaft abschmecken."
    ],
    "Eine dick eingekochte Tomatensauce nimmt die Kokosmilch besser auf und schmeckt weniger wässrig."),

  recipe("Erdnuss-Nudel-Bowl", "🥜", "schnell", "vegan", "herzhaft", true, 15, 15, "Einfach",
    { nudeln:[400,"g"], tofu:[350,"g"], karotten:[250,"g"], gurke:[1,"Stück"], erdnuesse:[100,"g"], sojasauce:[4,"EL"], limette:[2,"Stück"], ingwer:[15,"g"] },
    [
      "Nudeln nach Packungsangabe garen, kalt abschrecken und gut abtropfen lassen.",
      "Tofu trocken tupfen, würfeln und in einer Pfanne rundherum knusprig braten.",
      "Karotten in feine Streifen schneiden, Gurke halbieren und in Scheiben schneiden.",
      "Die Hälfte der Erdnüsse fein mahlen und mit Sojasauce, Limettensaft, geriebenem Ingwer und 4 Esslöffeln Wasser verrühren.",
      "Nudeln und Gemüse mit der Sauce mischen, Tofu daraufgeben und mit übrigen Erdnüssen bestreuen."
    ],
    "Die Sauce zunächst dick anrühren und nur so viel Wasser ergänzen, dass sie an den Nudeln haftet."),

  recipe("Thai-Basilikum-Tofu", "🌿", "schnell", "vegan", "herzhaft", true, 15, 15, "Einfach",
    { tofu:[500,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], knoblauch:[3,"Zehen"], chili:[1,"Stück"], sojasauce:[4,"EL"], basilikum:[30,"g"], reis:[300,"g"] },
    [
      "Reis nach Packungsangabe garen; Tofu trocken pressen und grob zerbröseln.",
      "Paprika und Zwiebel in dünne Streifen schneiden, Knoblauch und Chili fein hacken.",
      "Tofu in einer sehr heißen Pfanne mit wenig Öl 6 Minuten bräunen.",
      "Paprika und Zwiebel zugeben und 4 Minuten braten, dann Knoblauch, Chili und Sojasauce einrühren.",
      "Pfanne vom Herd ziehen, Basilikum unterheben und mit dem heißen Reis servieren."
    ],
    "Basilikum erst nach dem Braten zugeben, damit es sein Aroma behält."),

  recipe("Kokos-Limetten-Suppe mit Tofu", "🍲", "normal", "vegan", "herzhaft", true, 18, 25, "Einfach",
    { tofu:[400,"g"], kokosmilch:[500,"ml"], bruehe:[700,"ml"], champignons:[300,"g"], paprika:[1,"Stück"], ingwer:[25,"g"], limette:[2,"Stück"], sojasauce:[3,"EL"], koriander:[15,"g"] },
    [
      "Tofu würfeln, Champignons in Scheiben und Paprika in feine Streifen schneiden; Ingwer reiben.",
      "Brühe, Kokosmilch und Ingwer aufkochen und 5 Minuten sanft ziehen lassen.",
      "Champignons und Paprika zugeben und 8 Minuten köcheln.",
      "Tofu und Sojasauce einrühren und weitere 5 Minuten vollständig erhitzen.",
      "Topf vom Herd nehmen, Limettensaft und Koriander zugeben und final abschmecken."
    ],
    "Limettensaft nicht lange mitkochen, sonst verliert er sein frisches Aroma."),

  recipe("Gebratener Reis mit Garnelen", "🍤", "normal", "alles", "herzhaft", true, 15, 20, "Einfach",
    { reis:[320,"g"], garnelen:[400,"g"], eier:[3,"Stück"], erbsen:[180,"g"], karotten:[200,"g"], zwiebeln:[1,"Stück"], sojasauce:[4,"EL"], sesam:[1,"EL"] },
    [
      "Reis nach Packungsangabe garen und vollständig ausdampfen lassen; ideal ist gut gekühlter Reis vom Vortag.",
      "Garnelen trocken tupfen und in einer sehr heißen Pfanne 2 bis 3 Minuten gar braten; herausnehmen.",
      "Zwiebel und klein gewürfelte Karotten 5 Minuten braten, Erbsen zugeben.",
      "Gemüse an den Rand schieben, Eier in der Mitte vollständig stocken lassen und anschließend den Reis unterrühren.",
      "Garnelen zurückgeben, mit Sojasauce durchschwenken, vollständig erhitzen und mit Sesam servieren."
    ],
    "Gekochten Reis schnell abkühlen und gekühlt lagern; beim Braten vollständig durcherhitzen."),

  recipe("Teriyaki-Tofu mit Brokkoli", "🥦", "normal", "vegan", "herzhaft", true, 15, 25, "Einfach",
    { tofu:[500,"g"], brokkoli:[600,"g"], reis:[300,"g"], sojasauce:[5,"EL"], zucker:[30,"g"], ingwer:[20,"g"], knoblauch:[2,"Zehen"], sesam:[2,"EL"] },
    [
      "Reis nach Packungsangabe garen; Tofu pressen, würfeln und Brokkoli in Röschen teilen.",
      "Tofu in einer großen Pfanne rundherum knusprig braten und herausnehmen.",
      "Brokkoli mit 80 ml Wasser in die Pfanne geben, abdecken und 5 bis 6 Minuten bissfest dämpfen.",
      "Sojasauce, Zucker, geriebenen Ingwer und Knoblauch verrühren, mit Tofu zum Brokkoli geben und 3 Minuten glasieren.",
      "Mit Sesam bestreuen und zusammen mit dem Reis servieren."
    ],
    "Die Sauce nach dem Eindicken nur noch sanft erhitzen, damit sie nicht am Pfannenboden ansetzt."),

  recipe("Sesam-Hähnchen mit Reis", "🍗", "normal", "alles", "herzhaft", true, 15, 25, "Einfach",
    { haehnchen:[600,"g"], reis:[320,"g"], paprika:[2,"Stück"], sojasauce:[5,"EL"], honig:[2,"EL"], knoblauch:[2,"Zehen"], ingwer:[20,"g"], sesam:[3,"EL"] },
    [
      "Reis nach Packungsangabe garen; Hähnchen und Paprika in gleichmäßige Stücke schneiden.",
      "Hähnchen in einer heißen Pfanne rundherum anbraten und vollständig durchgaren.",
      "Paprika zugeben und 5 Minuten bissfest braten.",
      "Sojasauce, Honig, Knoblauch und Ingwer verrühren, angießen und 3 bis 4 Minuten sirupartig einkochen.",
      "Sesam unterheben und das glasierte Hähnchen mit Reis servieren."
    ],
    "Die Sauce enthält Zucker und kann schnell anbrennen; nach dem Angießen die Hitze reduzieren."),

  recipe("Rindfleisch mit Brokkoli", "🥩", "normal", "alles", "herzhaft", true, 20, 18, "Mittel",
    { rindfleisch:[600,"g"], brokkoli:[600,"g"], reis:[320,"g"], sojasauce:[5,"EL"], knoblauch:[2,"Zehen"], ingwer:[20,"g"], speisestaerke:[20,"g"], sesam:[1,"EL"] },
    [
      "Reis nach Packungsangabe garen; Rindfleisch quer zur Faser in sehr dünne Streifen schneiden.",
      "Fleisch mit zwei Esslöffeln Sojasauce und Speisestärke vermengen und 10 Minuten ziehen lassen.",
      "Brokkoli in einer heißen Pfanne mit wenig Wasser 5 Minuten bissfest dämpfen und herausnehmen.",
      "Fleisch portionsweise bei hoher Hitze kurz braten, anschließend Knoblauch und Ingwer zugeben.",
      "Brokkoli und übrige Sojasauce einrühren, 2 Minuten erhitzen und mit Sesam sowie Reis servieren."
    ],
    "Fleisch portionsweise braten, damit die Pfanne heiß bleibt und es nicht im eigenen Saft kocht."),

  recipe("Gemüse-Yakisoba", "🍜", "normal", "vegan", "herzhaft", true, 20, 18, "Einfach",
    { nudeln:[400,"g"], brokkoli:[300,"g"], karotten:[250,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], sojasauce:[5,"EL"], ingwer:[15,"g"], sesam:[2,"EL"] },
    [
      "Nudeln knapp bissfest garen, kalt abschrecken und gut abtropfen lassen.",
      "Brokkoli klein teilen, Karotten und Paprika in dünne Streifen sowie Zwiebel in Spalten schneiden.",
      "Gemüse in einer großen heißen Pfanne in der Reihenfolge Brokkoli, Karotten, Paprika und Zwiebel insgesamt 8 Minuten braten.",
      "Nudeln, Sojasauce und geriebenen Ingwer zugeben und 4 Minuten kräftig durchschwenken.",
      "Mit Sesam bestreuen und sofort servieren."
    ],
    "Nudeln nur knapp vorgaren, da sie in der Pfanne noch weitergaren."),

  recipe("Lachs-Sushi-Bowl", "🍣", "normal", "alles", "herzhaft", true, 20, 25, "Mittel",
    { reis:[320,"g"], lachs:[600,"g"], avocado:[2,"Stück"], gurke:[1,"Stück"], karotten:[200,"g"], sojasauce:[4,"EL"], essig:[3,"EL"], sesam:[2,"EL"] },
    [
      "Reis gründlich waschen und nach Packungsangabe garen; anschließend mit Essig und einer Prise Zucker würzen.",
      "Lachs trocken tupfen, in vier Portionen teilen und in einer beschichteten Pfanne vollständig beziehungsweise bis zum gewünschten sicheren Gargrad braten.",
      "Gurke, Karotten und Avocado in dünne Streifen oder Scheiben schneiden.",
      "Warmen Reis auf vier Schalen verteilen und das Gemüse darauf anordnen.",
      "Lachs auflegen, mit Sojasauce beträufeln und mit Sesam bestreuen."
    ],
    "Dieses Rezept verwendet gegarten Lachs und ist dadurch für zu Hause einfacher und sicherer als roher Fisch."),

  recipe("Bibimbap mit Rindfleisch", "🍚", "normal", "alles", "herzhaft", true, 25, 25, "Mittel",
    { reis:[320,"g"], rindfleisch:[450,"g"], eier:[4,"Stück"], karotten:[250,"g"], spinat:[300,"g"], champignons:[250,"g"], sojasauce:[5,"EL"], sesam:[2,"EL"] },
    [
      "Reis nach Packungsangabe garen; Rindfleisch in dünne Streifen und Gemüse getrennt vorbereiten.",
      "Fleisch mit zwei Esslöffeln Sojasauce marinieren und in einer sehr heißen Pfanne kurz kräftig braten.",
      "Karotten, Champignons und Spinat nacheinander in derselben Pfanne jeweils bissfest garen und getrennt halten.",
      "Vier Spiegeleier braten, bis das Eiweiß vollständig gestockt ist.",
      "Reis auf Schalen verteilen, Fleisch, Gemüse und Eier darauf anrichten und mit übriger Sojasauce sowie Sesam servieren."
    ],
    "Die Komponenten einzeln garen; dadurch behalten sie Geschmack, Farbe und unterschiedliche Texturen."),

  recipe("Koreanische Tofu-Bowl", "🥢", "normal", "vegan", "herzhaft", true, 20, 20, "Einfach",
    { tofu:[500,"g"], reis:[320,"g"], gurke:[1,"Stück"], karotten:[250,"g"], spinat:[250,"g"], sojasauce:[5,"EL"], chili:[1,"Stück"], sesam:[2,"EL"], knoblauch:[2,"Zehen"] },
    [
      "Reis nach Packungsangabe garen; Tofu pressen, würfeln und Gemüse vorbereiten.",
      "Tofu in einer heißen Pfanne rundherum knusprig braten.",
      "Sojasauce, fein gehackten Knoblauch, Chili und drei Esslöffel Wasser verrühren, zum Tofu geben und kurz glasieren.",
      "Spinat in der Pfanne zusammenfallen lassen; Gurke und Karotten roh in feine Streifen schneiden.",
      "Reis auf Schalen verteilen, alle Komponenten anrichten und mit Sesam bestreuen."
    ],
    "Chili zunächst sparsam dosieren und die Schärfe am Ende anpassen."),

  recipe("Bohnen-Tacos mit Avocado", "🌮", "schnell", "vegan", "herzhaft", true, 18, 12, "Einfach",
    { tortilla:[8,"Stück"], bohnen:[480,"g"], avocado:[2,"Stück"], tomaten:[4,"Stück"], mais:[200,"g"], zwiebeln:[1,"Stück"], limette:[2,"Stück"], koriander:[15,"g"], paprikapulver:[2,"TL"] },
    [
      "Bohnen und Mais abspülen; Zwiebel und Tomaten klein würfeln.",
      "Zwiebel in wenig Öl anschwitzen, Bohnen, Mais und Paprikapulver zugeben und 6 Minuten erhitzen.",
      "Avocado mit dem Saft einer Limette, Salz und Pfeffer grob zerdrücken.",
      "Tortillas in einer trockenen Pfanne nacheinander erwärmen.",
      "Mit Bohnenmischung, Tomaten und Avocadocreme füllen und mit Koriander sowie übriger Limette servieren."
    ],
    "Tortillas warm in ein sauberes Tuch einschlagen, damit sie weich und faltbar bleiben."),

  recipe("Chicken Fajitas", "🌯", "normal", "alles", "herzhaft", true, 20, 18, "Einfach",
    { tortilla:[8,"Stück"], haehnchen:[600,"g"], paprika:[3,"Stück"], zwiebeln:[2,"Stück"], limette:[2,"Stück"], joghurt:[180,"g"], paprikapulver:[2,"TL"], kreuzkuemmel:[1,"TL"] },
    [
      "Hähnchen, Paprika und Zwiebeln in gleichmäßige Streifen schneiden.",
      "Hähnchen mit Paprikapulver, Kreuzkümmel, Salz und dem Saft einer Limette vermengen.",
      "Fleisch in einer sehr heißen Pfanne portionsweise kräftig anbraten und vollständig durchgaren.",
      "Paprika und Zwiebeln in derselben Pfanne 6 bis 8 Minuten bissfest braten, dann das Fleisch untermischen.",
      "Tortillas erwärmen und mit Fajita-Mischung, Joghurt und Limettenspalten servieren."
    ],
    "Fleisch und Gemüse getrennt braten, damit beides Röstaromen bekommt und das Gemüse bissfest bleibt."),

  recipe("Hähnchen-Quesadillas", "🫓", "normal", "alles", "herzhaft", true, 20, 20, "Einfach",
    { tortilla:[8,"Stück"], haehnchen:[450,"g"], reibekaese:[250,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], mais:[180,"g"], paprikapulver:[2,"TL"] },
    [
      "Hähnchen, Paprika und Zwiebel klein würfeln; Mais abtropfen lassen.",
      "Hähnchen in einer Pfanne vollständig durchgaren, dann Gemüse und Paprikapulver zugeben und 5 Minuten braten.",
      "Vier Tortillas mit der Hälfte des Käses, der Füllung und dem übrigen Käse belegen; restliche Tortillas auflegen.",
      "Quesadillas nacheinander in einer trockenen Pfanne bei mittlerer Hitze je Seite 3 bis 4 Minuten braten.",
      "Kurz ruhen lassen, in Stücke schneiden und heiß servieren."
    ],
    "Mittlere Hitze verwenden, damit der Käse schmilzt, bevor die Tortilla zu dunkel wird."),

  recipe("Bohnen-Enchiladas", "🌯", "aufwendig", "vegetarisch", "herzhaft", true, 25, 35, "Mittel",
    { tortilla:[8,"Stück"], bohnen:[480,"g"], mais:[220,"g"], dosentomaten:[800,"g"], reibekaese:[250,"g"], zwiebeln:[1,"Stück"], paprika:[1,"Stück"], paprikapulver:[2,"TL"] },
    [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen; Bohnen und Mais abspülen und abtropfen lassen.",
      "Zwiebel und Paprika 6 Minuten anbraten, Bohnen, Mais und die Hälfte der Tomaten einrühren und würzen.",
      "Füllung auf Tortillas verteilen, eng aufrollen und mit der Naht nach unten in eine Form legen.",
      "Übrige Tomaten darübergeben und Käse gleichmäßig verteilen.",
      "25 bis 30 Minuten backen, bis die Sauce blubbert und der Käse goldbraun ist."
    ],
    "Tortillas vor dem Rollen kurz erwärmen, damit sie nicht reißen."),

  recipe("Mexikanische Reispfanne", "🌶️", "normal", "vegan", "herzhaft", true, 15, 30, "Einfach",
    { reis:[320,"g"], bohnen:[400,"g"], mais:[220,"g"], dosentomaten:[600,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], bruehe:[500,"ml"], paprikapulver:[2,"TL"], chili:[1,"Stück"] },
    [
      "Bohnen und Mais abspülen; Paprika, Zwiebel und Chili klein schneiden.",
      "Zwiebel und Paprika in einer großen Pfanne 6 Minuten anbraten, Chili und Paprikapulver kurz mitrösten.",
      "Reis, Tomaten und Brühe einrühren und aufkochen.",
      "Abgedeckt bei kleiner Hitze 18 Minuten garen, dann Bohnen und Mais unterheben.",
      "Weitere 5 Minuten vollständig erhitzen, Reisgargrad prüfen und abschmecken."
    ],
    "Während der Reis gart nur selten umrühren, damit er nicht klebrig wird."),

  recipe("Chili con Carne", "🌶️", "aufwendig", "alles", "herzhaft", true, 20, 45, "Einfach",
    { hackfleisch:[600,"g"], bohnen:[480,"g"], mais:[220,"g"], dosentomaten:[800,"g"], paprika:[2,"Stück"], zwiebeln:[2,"Stück"], knoblauch:[3,"Zehen"], chili:[1,"Stück"], kreuzkuemmel:[2,"TL"], paprikapulver:[2,"TL"] },
    [
      "Bohnen und Mais abspülen; Paprika, Zwiebeln, Knoblauch und Chili vorbereiten.",
      "Hackfleisch in einem großen Topf krümelig braten, bis es vollständig gebräunt ist.",
      "Zwiebeln und Paprika zugeben und 6 Minuten mitbraten; Knoblauch, Chili und Gewürze kurz einrühren.",
      "Tomaten und 250 ml Wasser zugeben und 25 Minuten offen sanft köcheln lassen.",
      "Bohnen und Mais einrühren, weitere 10 Minuten erhitzen und kräftig abschmecken."
    ],
    "Das Hackfleisch vollständig durchgaren und das Chili am nächsten Tag beim Aufwärmen einmal komplett durcherhitzen."),

  recipe("Taco-Salat mit Hackfleisch", "🥗", "normal", "alles", "herzhaft", true, 20, 15, "Einfach",
    { hackfleisch:[500,"g"], salat:[250,"g"], tomaten:[5,"Stück"], gurke:[1,"Stück"], mais:[200,"g"], bohnen:[300,"g"], avocado:[2,"Stück"], joghurt:[200,"g"], limette:[1,"Stück"], paprikapulver:[2,"TL"] },
    [
      "Salat waschen und trocknen; Tomaten, Gurke und Avocado in mundgerechte Stücke schneiden.",
      "Bohnen und Mais abspülen und abtropfen lassen.",
      "Hackfleisch krümelig anbraten, mit Paprikapulver würzen und vollständig durchgaren.",
      "Joghurt mit Limettensaft, Salz und Pfeffer zu einem Dressing verrühren.",
      "Salat und Gemüse auf Schalen verteilen, heißes Hackfleisch daraufgeben und mit Dressing servieren."
    ],
    "Dressing und heißes Fleisch erst unmittelbar vor dem Essen auf den Salat geben."),

  recipe("Süßkartoffel-Bohnen-Tacos", "🌮", "normal", "vegan", "herzhaft", true, 20, 30, "Einfach",
    { tortilla:[8,"Stück"], suesskartoffel:[700,"g"], bohnen:[400,"g"], avocado:[2,"Stück"], rotkohl:[250,"g"], limette:[2,"Stück"], paprikapulver:[2,"TL"], olivenoel:[2,"EL"] },
    [
      "Backofen auf 210 °C Ober-/Unterhitze vorheizen; Süßkartoffeln in 2 cm große Würfel schneiden.",
      "Würfel mit Olivenöl, Paprikapulver und Salz mischen und 25 bis 30 Minuten rösten.",
      "Bohnen abspülen und in einem kleinen Topf vollständig erhitzen; Rotkohl fein schneiden.",
      "Avocado mit dem Saft einer Limette, Salz und Pfeffer grob zerdrücken.",
      "Tortillas erwärmen und mit Süßkartoffeln, Bohnen, Rotkohl und Avocadocreme füllen."
    ],
    "Rotkohl kurz mit Limettensaft und Salz durchkneten; dadurch wird er zarter."),

  recipe("Avocado-Limetten-Pasta", "🥑", "schnell", "vegan", "herzhaft", true, 12, 12, "Einfach",
    { nudeln:[400,"g"], avocado:[2,"Stück"], limette:[2,"Stück"], knoblauch:[1,"Zehe"], basilikum:[20,"g"], olivenoel:[2,"EL"], tomaten:[3,"Stück"] },
    [
      "Nudeln bissfest kochen und 150 ml Kochwasser auffangen.",
      "Avocado, Limettensaft, Knoblauch, Basilikum und Olivenöl fein pürieren.",
      "Sauce mit Salz, Pfeffer und zunächst 60 ml Kochwasser cremig rühren.",
      "Nudeln vom Herd direkt mit der Avocadosauce vermengen; nicht weiterkochen.",
      "Tomaten würfeln, darübergeben und sofort servieren."
    ],
    "Avocadosauce nicht erhitzen; dadurch bleibt sie frisch und verfärbt sich langsamer."),

  recipe("Hähnchen-Jambalaya", "🍗", "aufwendig", "alles", "herzhaft", true, 20, 40, "Mittel",
    { haehnchen:[500,"g"], reis:[320,"g"], paprika:[2,"Stück"], dosentomaten:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[700,"ml"], chili:[1,"Stück"], paprikapulver:[2,"TL"], olivenoel:[2,"EL"] },
    [
      "Hähnchen trocken tupfen, in 3 cm große Stücke schneiden und getrennt vom Gemüse bereithalten.",
      "Öl in einem weiten Topf erhitzen und das Hähnchen rundherum anbraten; anschließend herausnehmen.",
      "Zwiebeln und Paprika 5 Minuten braten, dann Knoblauch, Chili und Paprikapulver kurz mitrösten.",
      "Reis, Tomaten und Brühe einrühren, aufkochen und zugedeckt 18 Minuten sanft garen.",
      "Hähnchen zurückgeben und weitere 8 bis 10 Minuten garen, bis Fleisch und Reis vollständig durch sind."
    ],
    "Für gleichmäßig gegarten Reis während der Garzeit nur einmal vorsichtig umrühren."),

  recipe("Garnelen-Paprika-Reis", "🍤", "normal", "alles", "herzhaft", true, 15, 25, "Einfach",
    { garnelen:[500,"g"], reis:[320,"g"], paprika:[3,"Stück"], erbsen:[180,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], bruehe:[650,"ml"], zitrone:[1,"Stück"], olivenoel:[2,"EL"], paprikapulver:[2,"TL"] },
    [
      "Zwiebel und Paprika würfeln; Garnelen trocken tupfen und bis zur Verwendung kalt stellen.",
      "Öl in einer großen Pfanne erhitzen, Zwiebel und Paprika darin 5 Minuten anbraten.",
      "Reis, Knoblauch und Paprikapulver kurz mitrösten, dann Brühe angießen.",
      "Zugedeckt 15 Minuten sanft garen, anschließend Erbsen unterheben.",
      "Garnelen auflegen und 4 bis 5 Minuten garen, bis sie vollständig rosa und im Kern nicht mehr glasig sind; mit Zitrone abschmecken."
    ],
    "Aufgetaute Garnelen gut abtrocknen, damit das Gericht nicht verwässert."),

  recipe("Pulled-Chicken-Wraps", "🌯", "normal", "alles", "herzhaft", true, 20, 35, "Einfach",
    { haehnchen:[600,"g"], tortilla:[8,"Stück"], dosentomaten:[400,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], salat:[180,"g"], joghurt:[180,"g"], limette:[1,"Stück"], paprikapulver:[2,"TL"] },
    [
      "Zwiebel und Paprika in Streifen schneiden; Hähnchen trocken tupfen.",
      "Hähnchen in einem breiten Topf von beiden Seiten anbraten und kurz herausnehmen.",
      "Zwiebel und Paprika anbraten, Tomaten und Paprikapulver zugeben und das Hähnchen hineinlegen.",
      "Zugedeckt 25 Minuten sanft garen, bis das Hähnchen vollständig durch ist; anschließend mit zwei Gabeln zerzupfen.",
      "Tortillas erwärmen, mit Salat, Pulled Chicken und dem mit Limette verrührten Joghurt füllen."
    ],
    "Die Füllung vor dem Einrollen kurz abtropfen lassen, damit die Wraps stabil bleiben."),

  recipe("Hähnchen-Nudel-Suppe", "🍜", "aufwendig", "alles", "herzhaft", true, 20, 40, "Einfach",
    { haehnchen:[500,"g"], nudeln:[250,"g"], karotten:[4,"Stück"], sellerie:[250,"g"], lauch:[1,"Stange"], zwiebeln:[1,"Stück"], bruehe:[1500,"ml"], petersilie:[20,"g"] },
    [
      "Karotten, Sellerie, Lauch und Zwiebel putzen und in gleichmäßige kleine Stücke schneiden.",
      "Brühe aufkochen, Hähnchen hineinlegen und bei kleiner Hitze 18 bis 20 Minuten vollständig gar ziehen lassen.",
      "Hähnchen herausnehmen; Gemüse in die Brühe geben und 12 Minuten köcheln.",
      "Nudeln zugeben und nach Packungsangabe bissfest garen; das Hähnchen währenddessen zerpflücken.",
      "Fleisch zurück in die Suppe geben, vollständig erhitzen und mit Petersilie, Salz und Pfeffer abschmecken."
    ],
    "Nudeln für Reste separat kochen und erst beim Servieren zugeben; so quellen sie nicht auf."),

  recipe("Rindfleisch-Gemüse-Eintopf", "🥘", "aufwendig", "alles", "herzhaft", true, 25, 100, "Mittel",
    { rindfleisch:[700,"g"], kartoffeln:[700,"g"], karotten:[4,"Stück"], sellerie:[250,"g"], zwiebeln:[2,"Stück"], tomatenmark:[2,"EL"], bruehe:[1000,"ml"], thymian:[2,"TL"], olivenoel:[2,"EL"] },
    [
      "Rindfleisch trocken tupfen und in 3 cm große Würfel schneiden; Gemüse ebenfalls würfeln.",
      "Öl in einem schweren Topf erhitzen und das Fleisch portionsweise kräftig anbraten.",
      "Zwiebeln, Karotten und Sellerie 6 Minuten braten; Tomatenmark kurz mitrösten.",
      "Fleisch, Brühe und Thymian zugeben und zugedeckt 70 Minuten leise schmoren.",
      "Kartoffeln einrühren und weitere 25 bis 30 Minuten garen, bis Fleisch und Kartoffeln weich sind."
    ],
    "Das Fleisch wirklich portionsweise braten; bei zu voller Pfanne kocht es statt zu rösten."),

  recipe("Veganes Kartoffelgulasch", "🥔", "aufwendig", "vegan", "herzhaft", true, 20, 40, "Einfach",
    { kartoffeln:[1000,"g"], paprika:[3,"Stück"], dosentomaten:[500,"g"], zwiebeln:[2,"Stück"], knoblauch:[2,"Zehen"], bruehe:[600,"ml"], paprikapulver:[3,"TL"], kuemmel:[1,"TL"], olivenoel:[2,"EL"] },
    [
      "Kartoffeln schälen und in 2 cm große Würfel schneiden; Paprika und Zwiebeln würfeln.",
      "Öl in einem Topf erhitzen und Zwiebeln sowie Paprika 6 Minuten anbraten.",
      "Knoblauch, Paprikapulver und Kümmel kurz einrühren, ohne das Paprikapulver zu verbrennen.",
      "Kartoffeln, Tomaten und Brühe zugeben und zugedeckt 30 Minuten sanft köcheln.",
      "Einige Kartoffelstücke am Topfrand zerdrücken, noch 5 Minuten offen einkochen und abschmecken."
    ],
    "Geräuchertes Paprikapulver gibt dem Gulasch auch ohne Fleisch eine kräftige Tiefe."),

  recipe("Brokkoli-Pilz-Reis-Pfanne", "🍄", "normal", "vegetarisch", "herzhaft", true, 15, 30, "Einfach",
    { reis:[320,"g"], brokkoli:[500,"g"], champignons:[400,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"], sahne:[200,"ml"], bruehe:[650,"ml"], parmesan:[60,"g"], olivenoel:[2,"EL"] },
    [
      "Brokkoli in kleine Röschen teilen, Pilze in Scheiben und Zwiebel in feine Würfel schneiden.",
      "Pilze in einer großen Pfanne mit einem Esslöffel Öl kräftig braten und herausnehmen.",
      "Restliches Öl, Zwiebel, Knoblauch und Reis in die Pfanne geben und 2 Minuten anschwitzen.",
      "Brühe angießen und 12 Minuten zugedeckt garen; Brokkoli zufügen und weitere 7 Minuten garen.",
      "Pilze, Sahne und Parmesan unterheben, vollständig erhitzen und cremig abschmecken."
    ],
    "Pilze erst am Ende zurückgeben, damit sie gebräunt und bissfest bleiben."),

  recipe("Schweinefleisch in Senfrahm", "🍖", "normal", "alles", "herzhaft", true, 20, 30, "Mittel",
    { schweinefleisch:[650,"g"], champignons:[350,"g"], zwiebeln:[1,"Stück"], sahne:[250,"ml"], bruehe:[250,"ml"], senf:[3,"EL"], nudeln:[350,"g"], olivenoel:[2,"EL"], petersilie:[15,"g"] },
    [
      "Fleisch in 1 cm dicke Streifen, Pilze in Scheiben und Zwiebel in Würfel schneiden.",
      "Nudeln nach Packungsangabe bissfest kochen und abgießen.",
      "Fleisch portionsweise in heißem Öl braten, bis es vollständig durchgegart ist; herausnehmen.",
      "Zwiebel und Pilze kräftig braten, mit Brühe ablöschen und Sahne sowie Senf einrühren.",
      "Sauce 5 Minuten einkochen, Fleisch darin nochmals vollständig erhitzen und mit Nudeln und Petersilie servieren."
    ],
    "Senf erst nach der Brühe einrühren; bei sehr starker Hitze kann er bitter werden."),

  recipe("Mediterraner Fischeintopf", "🐟", "aufwendig", "alles", "herzhaft", true, 25, 35, "Mittel",
    { fisch:[700,"g"], kartoffeln:[600,"g"], dosentomaten:[600,"g"], paprika:[2,"Stück"], zwiebeln:[1,"Stück"], knoblauch:[3,"Zehen"], bruehe:[500,"ml"], zitrone:[1,"Stück"], olivenoel:[3,"EL"], petersilie:[20,"g"] },
    [
      "Fisch trocken tupfen, auf Gräten prüfen und in große Stücke schneiden; bis zur Verwendung kalt stellen.",
      "Kartoffeln, Paprika und Zwiebel würfeln; Zwiebel und Paprika im Öl 5 Minuten anschwitzen.",
      "Knoblauch, Kartoffeln, Tomaten und Brühe zugeben und 22 Minuten sanft köcheln.",
      "Fischstücke vorsichtig einlegen und je nach Dicke 6 bis 8 Minuten gar ziehen lassen, bis sie innen nicht mehr glasig sind.",
      "Mit Zitronensaft, Petersilie, Salz und Pfeffer abschmecken und behutsam servieren."
    ],
    "Nach Zugabe des Fisches nicht kräftig rühren, damit die Stücke nicht zerfallen."),

  recipe("Thunfisch-Nudel-Auflauf", "🐟", "normal", "alles", "herzhaft", true, 20, 30, "Einfach",
    { nudeln:[400,"g"], thunfisch:[300,"g"], erbsen:[200,"g"], dosentomaten:[500,"g"], sahne:[150,"ml"], mozzarella:[200,"g"], zwiebeln:[1,"Stück"], knoblauch:[2,"Zehen"] },
    [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen und eine Auflaufform bereitstellen.",
      "Nudeln 3 Minuten kürzer als auf der Packung angegeben kochen und abgießen.",
      "Zwiebel und Knoblauch anschwitzen, Tomaten und Sahne zugeben und 5 Minuten köcheln.",
      "Nudeln, abgetropften Thunfisch und Erbsen mit der Sauce mischen und in die Form geben.",
      "Mit Mozzarella belegen und 20 bis 25 Minuten backen, bis der Auflauf blubbert und goldbraun ist."
    ],
    "Die Nudeln bewusst knapp vorgaren, weil sie im Ofen noch Flüssigkeit aufnehmen."),

  recipe("Fisch-Tacos mit Avocado", "🌮", "normal", "alles", "herzhaft", true, 20, 15, "Einfach",
    { fisch:[600,"g"], tortilla:[8,"Stück"], avocado:[2,"Stück"], rotkohl:[250,"g"], joghurt:[180,"g"], limette:[2,"Stück"], paprikapulver:[2,"TL"], olivenoel:[2,"EL"] },
    [
      "Fisch trocken tupfen, auf Gräten prüfen und in breite Streifen schneiden.",
      "Rotkohl fein schneiden und mit Saft einer Limette und einer Prise Salz 2 Minuten durchkneten.",
      "Fisch mit Paprikapulver würzen und im heißen Öl je Seite 2 bis 3 Minuten vollständig garen.",
      "Avocado in Scheiben schneiden und Joghurt mit dem Saft der zweiten Limette verrühren.",
      "Tortillas erwärmen und mit Rotkohl, Fisch, Avocado und Limettenjoghurt füllen."
    ],
    "Den Fisch erst direkt vor dem Braten salzen, damit er saftig bleibt."),

  recipe("Garnelen-Tacos mit Limette", "🌮", "schnell", "alles", "herzhaft", true, 15, 12, "Einfach",
    { garnelen:[500,"g"], tortilla:[8,"Stück"], rotkohl:[220,"g"], avocado:[2,"Stück"], tomaten:[3,"Stück"], limette:[2,"Stück"], joghurt:[150,"g"], chili:[1,"Stück"], olivenoel:[2,"EL"] },
    [
      "Garnelen trocken tupfen; Rotkohl fein schneiden und Tomaten sowie Avocado würfeln.",
      "Rotkohl mit etwas Limettensaft und Salz kräftig durchkneten.",
      "Garnelen mit Chili im heißen Öl 4 bis 5 Minuten braten, bis sie vollständig rosa und nicht mehr glasig sind.",
      "Joghurt mit restlichem Limettensaft, Salz und Pfeffer verrühren; Tortillas kurz erwärmen.",
      "Tortillas mit Kohl, Tomaten, Avocado und Garnelen füllen und mit Limettenjoghurt beträufeln."
    ],
    "Garnelen nur so lange wie nötig garen; zu lange gebraten werden sie zäh."),

  recipe("Lachs-Kartoffel-Taler", "🐟", "normal", "alles", "herzhaft", true, 25, 30, "Mittel",
    { lachs:[450,"g"], kartoffeln:[700,"g"], eier:[2,"Stück"], paniermehl:[100,"g"], fruehlingszwiebeln:[3,"Stück"], zitrone:[1,"Stück"], joghurt:[200,"g"], dill:[15,"g"], olivenoel:[3,"EL"] },
    [
      "Kartoffeln schälen, würfeln und in Salzwasser weich kochen; abgießen und ausdampfen lassen.",
      "Lachs im Dampf oder in einer Pfanne vollständig garen, abkühlen lassen und sorgfältig zerpflücken.",
      "Kartoffeln stampfen und mit Lachs, Ei, Frühlingszwiebeln und der Hälfte der Brösel mischen.",
      "Acht Taler formen, in restlichen Bröseln wenden und im Öl je Seite 4 bis 5 Minuten goldbraun braten.",
      "Joghurt mit Dill und Zitronensaft verrühren und zu den heißen Talern servieren."
    ],
    "Die Masse vor dem Formen 10 Minuten abkühlen lassen; dann hält sie besser zusammen."),

  recipe("Linsenbratlinge mit Joghurt-Dip", "🫘", "normal", "vegetarisch", "herzhaft", true, 25, 30, "Mittel",
    { linsen:[250,"g"], karotten:[2,"Stück"], zwiebeln:[1,"Stück"], eier:[2,"Stück"], paniermehl:[100,"g"], joghurt:[250,"g"], zitrone:[1,"Stück"], petersilie:[20,"g"], olivenoel:[3,"EL"] },
    [
      "Linsen nach Packungsangabe weich garen, sehr gut abtropfen und vollständig ausdampfen lassen.",
      "Karotten fein raspeln, Zwiebel würfeln und beides 5 Minuten in wenig Öl anschwitzen.",
      "Linsen grob zerdrücken und mit Gemüse, Eiern, Bröseln und der Hälfte der Petersilie mischen.",
      "Acht Bratlinge formen und im restlichen Öl je Seite etwa 4 Minuten goldbraun braten.",
      "Joghurt mit Zitronensaft und übriger Petersilie verrühren, würzen und dazu servieren."
    ],
    "Ist die Masse zu weich, esslöffelweise zusätzliche Brösel einarbeiten."),

  recipe("Zitronen-Ricotta-Kuchen", "🍋", "aufwendig", "vegetarisch", "süß", true, 25, 55, "Mittel",
    { mehl:[250,"g"], ricotta:[500,"g"], zucker:[180,"g"], eier:[4,"Stück"], butter:[120,"g"], zitrone:[2,"Stück"], backpulver:[2,"TL"], vanillezucker:[1,"Päckchen"] },
    [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Butter und Zucker cremig rühren, Eier einzeln gründlich einarbeiten.",
      "Ricotta, fein abgeriebene Zitronenschale und 3 Esslöffel Zitronensaft glatt unterrühren.",
      "Mehl, Backpulver und Vanillezucker kurz unterheben und den Teig in die Form füllen.",
      "50 bis 55 Minuten backen; Stäbchenprobe machen und den Kuchen vor dem Anschneiden vollständig auskühlen lassen."
    ],
    "Zutaten auf Zimmertemperatur verarbeiten, damit die Ricottamasse gleichmäßig wird."),

  recipe("Schoko-Birnen-Kuchen", "🍐", "aufwendig", "vegetarisch", "süß", true, 25, 50, "Einfach",
    { mehl:[260,"g"], birne:[4,"Stück"], schokolade:[180,"g"], butter:[160,"g"], zucker:[160,"g"], eier:[4,"Stück"], kakao:[35,"g"], backpulver:[2,"TL"], milch:[100,"ml"] },
    [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Birnen schälen, entkernen und in schmale Spalten schneiden; Schokolade grob hacken.",
      "Butter und Zucker cremig rühren, Eier nacheinander einarbeiten und Milch unterrühren.",
      "Mehl, Kakao und Backpulver kurz unterheben; Schokolade einarbeiten und Teig in die Form geben.",
      "Birnen auflegen, 45 bis 50 Minuten backen und nach einer Stäbchenprobe auskühlen lassen."
    ],
    "Sehr saftige Birnen kurz trocken tupfen, damit der Teig in ihrer Nähe nicht klitschig bleibt."),

  recipe("Apfel-Zimt-Muffins", "🧁", "normal", "vegetarisch", "süß", true, 20, 25, "Einfach",
    { mehl:[300,"g"], apfel:[3,"Stück"], zucker:[130,"g"], eier:[2,"Stück"], butter:[120,"g"], milch:[180,"ml"], backpulver:[3,"TL"], zimt:[2,"TL"] },
    [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und zwölf Muffinförmchen bereitstellen.",
      "Äpfel schälen, entkernen und in kleine Würfel schneiden.",
      "Mehl, Backpulver, Zucker und Zimt in einer Schüssel gründlich mischen.",
      "Eier, geschmolzene Butter und Milch verrühren und nur kurz unter die trockenen Zutaten ziehen; Äpfel unterheben.",
      "Teig verteilen und 22 bis 25 Minuten backen; mit einem Holzstäbchen prüfen."
    ],
    "Muffinteig nur so lange rühren, bis kein trockenes Mehl mehr sichtbar ist."),

  recipe("Bananen-Schoko-Muffins", "🍌", "normal", "vegetarisch", "süß", true, 15, 24, "Einfach",
    { mehl:[280,"g"], banane:[3,"Stück"], schokolade:[150,"g"], zucker:[100,"g"], eier:[2,"Stück"], butter:[100,"g"], milch:[120,"ml"], backpulver:[3,"TL"] },
    [
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen und zwölf Muffinförmchen bereitstellen.",
      "Bananen fein zerdrücken und Schokolade grob hacken.",
      "Eier, Zucker, geschmolzene Butter, Milch und Bananenpüree verrühren.",
      "Mehl und Backpulver kurz unterheben, anschließend zwei Drittel der Schokolade einarbeiten.",
      "Teig verteilen, übrige Schokolade aufstreuen und 21 bis 24 Minuten backen; Stäbchenprobe machen."
    ],
    "Sehr reife Bananen liefern mehr Süße und ein kräftigeres Aroma."),

  recipe("Ofenpfannkuchen mit Beeren", "🫐", "normal", "vegetarisch", "süß", true, 15, 25, "Einfach",
    { mehl:[180,"g"], milch:[350,"ml"], eier:[5,"Stück"], butter:[40,"g"], beeren:[300,"g"], zucker:[50,"g"], vanillezucker:[1,"Päckchen"], zitrone:[1,"Stück"] },
    [
      "Backofen mit einer großen ofenfesten Form auf 220 °C Ober-/Unterhitze vorheizen.",
      "Eier, Milch, Mehl, Zucker, Vanillezucker und fein abgeriebene Zitronenschale glatt verrühren.",
      "Heiße Form vorsichtig herausnehmen, Butter darin schmelzen und durch Schwenken verteilen.",
      "Teig eingießen, Beeren darauf verteilen und die Form sofort zurück in den Ofen stellen.",
      "20 bis 25 Minuten backen, bis der Rand hoch aufgegangen und goldbraun ist; direkt servieren."
    ],
    "Während der ersten 18 Minuten die Ofentür geschlossen lassen, damit der Pfannkuchen aufgeht."),

  recipe("Quarkauflauf mit Beeren", "🍓", "aufwendig", "vegetarisch", "süß", true, 20, 50, "Einfach",
    { quark:[750,"g"], beeren:[350,"g"], eier:[4,"Stück"], zucker:[120,"g"], speisestaerke:[50,"g"], vanillezucker:[1,"Päckchen"], zitrone:[1,"Stück"], butter:[15,"g"] },
    [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Auflaufform mit Butter fetten.",
      "Eier trennen und Eiweiß mit einer kleinen Prise Salz steif schlagen.",
      "Quark, Eigelb, Zucker, Stärke, Vanillezucker und Zitronenschale glatt rühren.",
      "Eischnee vorsichtig unterheben, Masse in die Form geben und Beeren darauf verteilen.",
      "45 bis 50 Minuten backen, anschließend 15 Minuten ruhen lassen und warm oder kalt servieren."
    ],
    "Tiefgekühlte Beeren unaufgetaut verwenden, damit sie weniger Saft abgeben."),

  recipe("Mango-Joghurt-Creme", "🥭", "schnell", "vegetarisch", "süß", true, 15, 5, "Einfach",
    { mango:[2,"Stück"], joghurt:[500,"g"], quark:[250,"g"], honig:[3,"EL"], limette:[1,"Stück"], mandeln:[60,"g"], vanillezucker:[1,"Päckchen"] },
    [
      "Mandeln in einer trockenen Pfanne goldbraun rösten und auf einem Teller abkühlen lassen.",
      "Mangos schälen, Fruchtfleisch vom Stein schneiden und die Hälfte fein pürieren.",
      "Joghurt, Quark, Honig, Vanillezucker und Limettensaft glatt verrühren.",
      "Mango-Püree nur grob unterziehen, sodass eine Marmorierung entsteht; übrige Mango würfeln.",
      "Creme auf vier Gläser verteilen und mit Mangowürfeln sowie Mandeln servieren."
    ],
    "Für eine festere Creme den Joghurt zehn Minuten in einem feinen Sieb abtropfen lassen."),

  recipe("Mandel-Apfel-Kuchen", "🍎", "aufwendig", "vegetarisch", "süß", true, 25, 55, "Einfach",
    { apfel:[5,"Stück"], mandeln:[180,"g"], mehl:[220,"g"], butter:[160,"g"], zucker:[150,"g"], eier:[4,"Stück"], backpulver:[2,"TL"], zimt:[1,"TL"], zitrone:[1,"Stück"] },
    [
      "Backofen auf 175 °C Ober-/Unterhitze vorheizen und eine Springform fetten.",
      "Äpfel schälen, vierteln, entkernen und auf der gewölbten Seite mehrfach einschneiden.",
      "Butter und Zucker cremig rühren, Eier einzeln einarbeiten und Zitronenschale zugeben.",
      "Mehl, Backpulver, Zimt und 120 g Mandeln kurz unterheben; Teig in die Form geben und Äpfel auflegen.",
      "Übrige Mandeln aufstreuen und 50 bis 55 Minuten backen; Stäbchenprobe machen und auskühlen lassen."
    ],
    "Die Apfelviertel nur leicht in den Teig drücken, damit der Kuchen gut aufgehen kann."),

  recipe("Schoko-Crêpe-Röllchen", "🍫", "normal", "vegetarisch", "süß", true, 25, 25, "Mittel",
    { mehl:[220,"g"], milch:[500,"ml"], eier:[4,"Stück"], kakao:[25,"g"], zucker:[50,"g"], butter:[40,"g"], quark:[300,"g"], schokolade:[100,"g"], beeren:[200,"g"] },
    [
      "Mehl, Kakao, Zucker und eine Prise Salz mischen; Eier und Milch nach und nach glatt einrühren.",
      "Teig 10 Minuten ruhen lassen und die Schokolade währenddessen fein hacken.",
      "Aus dem Teig in wenig Butter acht dünne Crêpes backen und kurz abkühlen lassen.",
      "Quark mit der Hälfte der Schokolade verrühren und dünn auf den Crêpes verteilen.",
      "Beeren auflegen, Crêpes eng einrollen und mit der übrigen Schokolade bestreut servieren."
    ],
    "Die Crêpes nur lauwarm füllen, damit die Quarkcreme nicht flüssig wird."),

  recipe("Karamellisierte Äpfel mit Vanillequark", "🍏", "schnell", "vegetarisch", "süß", true, 15, 12, "Einfach",
    { apfel:[4,"Stück"], quark:[500,"g"], joghurt:[200,"g"], zucker:[70,"g"], butter:[30,"g"], zimt:[1,"TL"], vanillezucker:[1,"Päckchen"], zitrone:[1,"Stück"], mandeln:[50,"g"] },
    [
      "Äpfel vierteln, entkernen und in schmale Spalten schneiden; Mandeln grob hacken.",
      "Mandeln in einer trockenen Pfanne rösten und auf einem Teller abkühlen lassen.",
      "Butter und 40 g Zucker in der Pfanne schmelzen, Äpfel zugeben und 6 bis 8 Minuten karamellisieren.",
      "Quark, Joghurt, restlichen Zucker, Vanillezucker und Zitronensaft glatt rühren.",
      "Vanillequark auf Schalen verteilen und mit warmen Zimtäpfeln sowie Mandeln servieren."
    ],
    "Die Äpfel nicht zu dünn schneiden, damit sie beim Karamellisieren ihre Form behalten.")
];
