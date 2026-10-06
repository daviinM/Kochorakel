const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const styles = fs.readFileSync(path.join(root, "src/styles.css"), "utf8");
const recipesModule = fs.readFileSync(path.join(root, "src/data/recipes.js"), "utf8");
const mainModule = fs.readFileSync(path.join(root, "src/main.js"), "utf8");
const serviceWorker = fs.readFileSync(path.join(root, "public/service-worker.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const failures = [];
let checks = 0;

function check(condition, message) {
  checks++;
  if (!condition) failures.push(message);
}

const dataContext = {};
vm.createContext(dataContext);
vm.runInContext(recipesModule.replace(/^export\s+/gm, ""), dataContext, { timeout: 5000 });
vm.runInContext("__data = { dishes, ingredientVocab };", dataContext);
const { dishes, ingredientVocab } = dataContext.__data;

try {
  new vm.Script(recipesModule.replace(/^export\s+/gm, "") + "\n" + mainModule.replace(/^import .*$/gm, ""));
  check(true, "JavaScript syntaktisch gültig");
} catch (error) {
  check(false, "JavaScript-Syntax: " + error.message);
}

check(pkg.version === "0.2.3", "Paketversion 0.2.3");
check(indexHtml.includes("Kochorakel · Version 0.2.3"), "sichtbare Version 0.2.3");
check(serviceWorker.includes('kochorakel-v0.2.3'), "Cache-Version 0.2.3");
check(/prebuild/.test(JSON.stringify(pkg.scripts)) && /sync-version/.test(JSON.stringify(pkg.scripts)), "Versionsabgleich vor dem Build");
check(/<script type="module" src="\.\/src\/main\.js"><\/script>/.test(indexHtml), "Vite-Einstieg vorhanden");
check(/import \{ dishes, ingredientVocab \} from "\.\/data\/recipes\.js";/.test(mainModule), "einzige Rezeptquelle eingebunden");
const legacyRecipeFiles = ["new-recipes-0.2.1.js", "curated-recipes-0.2.2.js"].map(name => fs.readFileSync(path.join(root, "src/data", name), "utf8"));
check(legacyRecipeFiles.every(text => text.length < 250 && /= \[\];/.test(text)), "alte Rezeptdateien zu leeren Kompatibilitätsdateien reduziert");

check(dishes.length === 324, "324 Gerichte vorhanden");
check(Object.keys(ingredientVocab).length === 139, "139 Zutaten vorhanden");
check(dishes.filter(d => !d.premium).length === 100, "100 Free-Gerichte");
check(dishes.filter(d => d.premium).length === 224, "224 Premium-Gerichte");
check(new Set(dishes.map(d => d.id)).size === dishes.length, "Rezept-IDs eindeutig");
check(new Set(dishes.map(d => d.name)).size === dishes.length, "Rezeptnamen eindeutig");
check(dishes.some(d => d.steps.length !== 5), "variable, logisch gegliederte Schrittzahlen");

const allowedTimes = new Set(["schnell", "normal", "aufwendig"]);
const allowedDiets = new Set(["alles", "vegetarisch", "vegan"]);
const allowedTypes = new Set(["herzhaft", "süß"]);
const allowedAllergens = new Set(["gluten", "milch", "laktose", "eier", "nuesse", "erdnuesse", "soja", "fisch", "schalentiere", "sesam", "sellerie", "senf"]);
const animalProducts = new Set(["eier","milch","butter","sahne","joghurt","quark","mozzarella","feta","reibekaese","parmesan","gorgonzola","mascarpone","ricotta","halloumi","cheddar","honig","gelatine","speck","schinken","wurst","hackfleisch","haehnchen","schweinefleisch","rindfleisch","kalbfleisch","lamm","fisch","lachs","raeucherlachs","garnelen","fischsauce","paneer"]);
const meatOrFish = new Set(["speck","schinken","wurst","hackfleisch","haehnchen","schweinefleisch","rindfleisch","kalbfleisch","lamm","fisch","lachs","raeucherlachs","garnelen","fischsauce","gelatine"]);

function explicitTimerMinutes(text) {
  const normalized = text.toLowerCase();
  const values = [];
  const factors = { minute:1, minuten:1, stunde:60, stunden:60, tag:1440, tage:1440, tagen:1440 };
  let match;
  const range = /(\d+)\s*(?:bis|–|-)\s*(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  const single = /(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  while ((match = range.exec(normalized))) values.push(Number(match[2]) * (factors[match[3].replace(/n$/, "")] || factors[match[3]] || 1));
  while ((match = single.exec(normalized))) values.push(Number(match[1]) * (factors[match[2].replace(/n$/, "")] || factors[match[2]] || 1));
  if (/über nacht/.test(normalized)) values.push(480);
  return values.length ? Math.max(...values) : null;
}

for (const dish of dishes) {
  check(/^ko-\d{4}$/.test(dish.id), "stabile ID: " + dish.name);
  check(typeof dish.name === "string" && dish.name.trim().length > 0, "Name: " + dish.id);
  check(allowedTimes.has(dish.time), "Zeitklasse: " + dish.name);
  check(allowedDiets.has(dish.diet), "Ernährungsart: " + dish.name);
  check(allowedTypes.has(dish.type), "Typ: " + dish.name);
  check(Array.isArray(dish.ingredients) && dish.ingredients.length >= 2, "Zutaten: " + dish.name);
  check(Object.keys(dish.amounts || {}).length === dish.ingredients.length, "Mengen vollständig: " + dish.name);
  for (const id of dish.ingredients) {
    check(Boolean(ingredientVocab[id]), "Zutat bekannt: " + dish.name + " / " + id);
    const amount = dish.amounts[id];
    check(Array.isArray(amount) && Number.isFinite(amount[0]) && amount[0] > 0 && typeof amount[1] === "string" && amount[1], "Menge gültig: " + dish.name + " / " + id);
  }
  check(Number.isFinite(dish.prepMinutes) && dish.prepMinutes > 0, "Arbeitszeit: " + dish.name);
  check(Number.isFinite(dish.cookMinutes) && dish.cookMinutes > 0, "Garzeit: " + dish.name);
  check(Number.isFinite(dish.restMinutes) && dish.restMinutes >= 0, "Ruhezeit: " + dish.name);
  check(dish.minutes === dish.prepMinutes + dish.cookMinutes + dish.restMinutes, "Gesamtzeit: " + dish.name);
  const expectedClass = dish.minutes <= 30 ? "schnell" : dish.minutes >= 60 ? "aufwendig" : "normal";
  check(dish.time === expectedClass, "Zeitklasse passt: " + dish.name);
  check(Array.isArray(dish.steps) && dish.steps.length >= 4 && dish.steps.length <= 8, "4–8 Schritte: " + dish.name);
  check(dish.steps.every(step => typeof step === "string" && step.trim().length >= 20), "ausführliche Schritte: " + dish.name);
  check(typeof dish.tip === "string" && dish.tip.trim().length >= 20, "Praxistipp: " + dish.name);
  check(Array.isArray(dish.stepTimers) && dish.stepTimers.length === dish.steps.length, "Timerzahl passt: " + dish.name);
  dish.steps.forEach((step, index) => check(dish.stepTimers[index] === explicitTimerMinutes(step), "logischer Timer: " + dish.name + " / Schritt " + (index + 1)));
  check(Array.isArray(dish.allergens) && new Set(dish.allergens).size === dish.allergens.length && dish.allergens.every(a => allowedAllergens.has(a)), "Allergene gültig: " + dish.name);
  if (dish.diet === "vegan") check(!dish.ingredients.some(id => animalProducts.has(id)), "vegan korrekt: " + dish.name);
  if (dish.diet === "vegetarisch") check(!dish.ingredients.some(id => meatOrFish.has(id)), "vegetarisch korrekt: " + dish.name);
}

for (const tier of ["free", "premium"]) {
  for (const time of allowedTimes) for (const diet of allowedDiets) for (const type of allowedTypes) {
    const pool = dishes.filter(dish => dish.time === time && (diet === "vegan" ? dish.diet === "vegan" : diet === "vegetarisch" ? ["vegetarisch", "vegan"].includes(dish.diet) : true) && dish.type === type && (tier === "premium" || !dish.premium));
    check(pool.length > 0, "Filter: " + [tier,time,diet,type].join(" / "));
  }
}

const ids = Array.from(indexHtml.matchAll(/\bid="([^"]+)"/g), match => match[1]);
check(new Set(ids).size === ids.length, "keine doppelten HTML-IDs");
const buttonsWithoutType = Array.from(indexHtml.matchAll(/<button\b([^>]*)>/gi), match => match[1]).filter(attributes => !/\btype\s*=/.test(attributes));
check(buttonsWithoutType.length === 0, "alle statischen Buttons haben einen eindeutigen Typ");
const idSet = new Set(ids);
const startupModule = mainModule.slice(0, mainModule.indexOf("function defaultProfile"));
const referencedIds = Array.from(startupModule.matchAll(/const\s+\w+\s*=\s*document\.getElementById\("([^"]+)"\)/g), match => match[1]);
check(referencedIds.every(id => idSet.has(id)), "alle JS-Elemente existieren");
check(!/sb_secret_/i.test(indexHtml + mainModule + recipesModule), "kein Supabase-Secret im Client");
check(/dishIndexById/.test(mainModule) && /uniqueDishIds/.test(mainModule), "stabile IDs im Profilmodell");
check(/normalizeCartSource/.test(mainModule), "alte Warenkorbquellen werden migriert");
check(/ACTIVE_TIMERS_STORAGE_KEY/.test(mainModule) && /restoreDetachedCookingTimers/.test(mainModule), "Timer bleiben nach Neuladen erhalten");
check(/openDetachedCookingTimer/.test(mainModule) && /pointerdown/.test(mainModule) && /finishTimerBubbleDrag/.test(mainModule) && /TIMER_DOCK_POSITION_KEY/.test(mainModule), "Timer-Kugeln öffnen, verschieben und Position speichern");
check(/cookingTimerBlock\.hidden\s*=\s*!timerSeconds/.test(mainModule), "Timerfeld wird bei Schritten ohne Timer ausgeblendet");
check(!/Kein Timer nötig/.test(mainModule), "kein unnötiger Timerhinweis in Schritten");
check(/dish\.stepTimers/.test(mainModule) && !/dish\.stepMinutes/.test(mainModule), "Kochmodus nutzt logische Timer");
check(/Woche wird erstellt/.test(mainModule) && /aria-busy/.test(mainModule), "Wochenplan zeigt Ladezustand");
check(/recipe-allergens/.test(mainModule + styles), "Allergenhinweis sichtbar");
check(/safe-area-inset-top/.test(styles) && /safe-area-inset-bottom/.test(styles) && /100dvh/.test(styles), "iPhone-Safe-Areas berücksichtigt");
check(/overscroll-behavior/.test(styles), "Overlay-Scrollen begrenzt");
check(/content-visibility:\s*auto/.test(styles), "lange Listen werden verzögert gerendert");
check(fs.existsSync(path.join(root, ".github/workflows/deploy.yml")), "GitHub-Actions-Deployment vorhanden");

if (failures.length) {
  console.error(`FEHLER: ${failures.length} von ${checks} Prüfungen`);
  failures.slice(0, 100).forEach(failure => console.error("- " + failure));
  process.exit(1);
}
console.log(JSON.stringify({ status: "ok", checks, dishes: dishes.length, ingredients: Object.keys(ingredientVocab).length, timerSteps: dishes.reduce((sum, d) => sum + d.stepTimers.filter(Boolean).length, 0) }, null, 2));
