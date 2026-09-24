const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "index.html");
const indexHtml = fs.readFileSync(file, "utf8");
const styles = fs.readFileSync(path.join(root, "src/styles.css"), "utf8");
const recipesModule = fs.readFileSync(path.join(root, "src/data/recipes.js"), "utf8");
const newRecipesModule = fs.readFileSync(path.join(root, "src/data/new-recipes-0.2.1.js"), "utf8");
const curatedRecipesModule = fs.readFileSync(path.join(root, "src/data/curated-recipes-0.2.2.js"), "utf8");
const mainModule = fs.readFileSync(path.join(root, "src/main.js"), "utf8");
const html = indexHtml + "\n<style>" + styles + "</style>\n<script>" + mainModule + "</script>";
const failures = [];
const checks = [];

function check(condition, message) {
  if (condition) checks.push(message);
  else failures.push(message);
}

check(/<script type="module" src="\.\/src\/main\.js"><\/script>/.test(indexHtml), "Vite-Modul als App-Einstieg");
check(/import \{ dishes, ingredientVocab \} from "\.\/data\/recipes\.js";/.test(mainModule), "Rezeptdaten als eigenes Modul eingebunden");
const source = newRecipesModule.replace(/^export\s+/gm, "") + "\n" + curatedRecipesModule.replace(/^export\s+/gm, "") + "\n" + recipesModule
  .replace(/^import .*$/gm, "")
  .replace(/^export\s+/gm, "") + "\n" + mainModule.replace(/^import .*$/gm, "");
try {
  new vm.Script(source, { filename: file });
  checks.push("JavaScript syntaktisch gültig");
} catch (error) {
  failures.push("JavaScript-Syntax: " + error.message);
}

const dataStart = source.indexOf("function recipe(");
const dataEnd = source.indexOf("const REST_DAY", dataStart);
check(dataStart >= 0 && dataEnd > dataStart, "Rezeptdatenblock auffindbar");

let dishes = [];
let ingredientVocab = {};
let dataContext = null;
if (dataStart >= 0 && dataEnd > dataStart) {
  const context = { createClient: function(){ return null; } };
  vm.createContext(context);
  try {
    vm.runInContext(source.slice(dataStart, dataEnd), context, { timeout: 3000 });
    vm.runInContext("__result = { dishes, ingredientVocab };", context);
    dishes = context.__result.dishes;
    ingredientVocab = context.__result.ingredientVocab;
    dataContext = context;
  } catch (error) {
    failures.push("Rezeptdaten ausführen: " + error.message);
  }
}

check(dishes.length === 324, "324 Gerichte vorhanden");
check(Object.keys(ingredientVocab).length === 139, "139 Zutaten im Verzeichnis vorhanden");
check(new Set(dishes.map((dish) => dish.name)).size === dishes.length, "Gerichtenamen eindeutig");
check(dishes.filter((dish) => !dish.premium).length === 100, "100 Free-Gerichte vorhanden");
check(dishes.filter((dish) => dish.premium).length === 224, "224 Premium-Gerichte vorhanden");
check(dishes.filter((dish) => dish.recipeIsGenerated).length === 0, "keine automatisch erzeugten Basisrezepte mehr vorhanden");
check(dishes.every((dish) => !dish.recipeIsGenerated && dish.steps.length === 5), "alle 324 Rezepte redaktionell mit fünf Schritten");

const release021Recipes = dishes.filter((dish) => dish.release === "0.2.1");
check(release021Recipes.length === 100, "100 neue Rezepte in Version 0.2.1");
check(release021Recipes.filter((dish) => !dish.premium).length === 25, "25 neue Free-Rezepte in Version 0.2.1");
check(release021Recipes.filter((dish) => dish.premium).length === 75, "75 neue Premium-Rezepte in Version 0.2.1");
check(release021Recipes.every((dish) => !dish.recipeIsGenerated && dish.steps.length === 5), "alle neuen Rezepte redaktionell mit fünf Schritten");
check(release021Recipes.every((dish) => typeof dish.tip === "string" && dish.tip.trim().length > 0), "alle neuen Rezepte mit Praxistipp");

const release022Recipes = dishes.filter((dish) => dish.release === "0.2.2");
check(release022Recipes.length === 194, "194 ältere Rezepte in Version 0.2.2 vereinheitlicht");
check(release022Recipes.every((dish) => dish.steps.length === 5 && !dish.recipeIsGenerated), "alle 0.2.2-Rezepte vollständig redaktionell");

const allowedTimes = new Set(["schnell", "normal", "aufwendig"]);
const allowedDiets = new Set(["alles", "vegetarisch", "vegan"]);
const allowedTypes = new Set(["herzhaft", "süß"]);
const animalProducts = new Set([
  "eier", "milch", "butter", "sahne", "joghurt", "quark", "mozzarella", "feta", "reibekaese",
  "parmesan", "gorgonzola", "mascarpone", "ricotta", "halloumi", "cheddar", "honig", "gelatine",
  "speck", "schinken", "wurst", "hackfleisch", "haehnchen", "schweinefleisch", "rindfleisch",
  "kalbfleisch", "lamm", "fisch", "lachs", "raeucherlachs", "garnelen", "fischsauce", "paneer"
]);
const meatOrFish = new Set([
  "speck", "schinken", "wurst", "hackfleisch", "haehnchen", "schweinefleisch", "rindfleisch",
  "kalbfleisch", "lamm", "fisch", "lachs", "raeucherlachs", "garnelen", "fischsauce", "gelatine"
]);

for (const dish of dishes) {
  check(typeof dish.name === "string" && dish.name.trim().length > 0, "Name: " + dish.name);
  check(allowedTimes.has(dish.time), "Zeitklasse: " + dish.name);
  check(allowedDiets.has(dish.diet), "Ernährungsart: " + dish.name);
  check(allowedTypes.has(dish.type), "Gerichtstyp: " + dish.name);
  check(Array.isArray(dish.ingredients) && dish.ingredients.length >= 2, "Zutatenliste: " + dish.name);
  for (const id of dish.ingredients || []) {
    check(Boolean(ingredientVocab[id]), "Zutat bekannt: " + dish.name + " / " + id);
    const amount = dish.amounts && dish.amounts[id];
    check(Array.isArray(amount) && Number.isFinite(amount[0]) && amount[0] > 0 && typeof amount[1] === "string" && amount[1], "Menge: " + dish.name + " / " + id);
  }
  check(Number.isFinite(dish.prepMinutes) && dish.prepMinutes > 0, "Vorbereitungszeit: " + dish.name);
  check(Number.isFinite(dish.cookMinutes) && dish.cookMinutes > 0, "Garzeit: " + dish.name);
  check(dish.minutes === dish.prepMinutes + dish.cookMinutes, "Gesamtzeit: " + dish.name);
  const expectedTimeClass = dish.minutes <= 30 ? "schnell" : dish.minutes >= 60 ? "aufwendig" : "normal";
  check(dish.time === expectedTimeClass, "Zeitklasse passt zur Gesamtzeit: " + dish.name);
  check(Object.keys(dish.amounts || {}).length === dish.ingredients.length, "Mengenliste entspricht Zutatenliste: " + dish.name);
  check(Array.isArray(dish.steps) && dish.steps.length === 5 && dish.steps.every((step) => typeof step === "string" && step.trim().length >= 25), "fünf ausführliche Rezeptschritte: " + dish.name);
  check(typeof dish.tip === "string" && dish.tip.trim().length >= 25, "ausführlicher Praxistipp: " + dish.name);
  check(Array.isArray(dish.stepMinutes) && dish.stepMinutes.length === dish.steps.length && dish.stepMinutes.reduce((a, b) => a + b, 0) === dish.minutes, "Schrittzeiten: " + dish.name);
  if (dish.diet === "vegan") check(!dish.ingredients.some((id) => animalProducts.has(id)), "Vegan-Kennzeichnung: " + dish.name);
  if (dish.diet === "vegetarisch") check(!dish.ingredients.some((id) => meatOrFish.has(id)), "Vegetarisch-Kennzeichnung: " + dish.name);
}

for (const tier of ["free", "premium"]) {
  for (const time of allowedTimes) {
    for (const diet of allowedDiets) {
      for (const type of allowedTypes) {
        const pool = dishes.filter((dish) =>
          dish.time === time &&
          (diet === "vegan" ? dish.diet === "vegan" : diet === "vegetarisch" ? ["vegetarisch", "vegan"].includes(dish.diet) : true) &&
          dish.type === type &&
          (tier === "premium" || !dish.premium)
        );
        check(pool.length > 0, "Filterkombination " + [tier, time, diet, type].join(" / "));
      }
    }
  }
}

const expectedNewRecipes = [
  "Schoko-Bananen-Creme",
  "Kokos-Milchreis",
  "Gefüllte Auberginen mit Linsen",
  "Veganer Apfel-Hafer-Crumble"
];
for (const name of expectedNewRecipes) {
  const dish = dishes.find((item) => item.name === name);
  check(Boolean(dish) && dish.diet === "vegan" && !dish.premium && dish.steps.length >= 4, "neues vollständiges Free-Rezept: " + name);
}

const pannaCotta = dishes.find((dish) => dish.name === "Panna Cotta");
check(Boolean(pannaCotta) && pannaCotta.diet === "alles" && pannaCotta.ingredients.includes("gelatine"), "Panna Cotta korrekt eingestuft");
const ceviche = dishes.find((dish) => dish.name === "Ceviche");
check(Boolean(ceviche) && ceviche.diet === "alles" && (ceviche.ingredients.includes("fisch") || ceviche.ingredients.includes("lachs") || ceviche.ingredients.includes("garnelen")), "Ceviche korrekt eingestuft");
const correctedRecipes = [
  ["Tiramisu", /pasteurisiert/i],
  ["Crème brûlée", /Wasser.*Förmchen|Förmchen.*Wasser/i],
  ["Currywurst mit Pommes", /Kartoffelstifte/i],
  ["Pho", /Brühe.*Sieb|Sieb.*Brühe/i]
];
for (const [name, pattern] of correctedRecipes) {
  const dish = dishes.find((item) => item.name === name);
  check(Boolean(dish) && !dish.recipeIsGenerated && pattern.test(dish.steps.join(" ")), "kritisches Rezept korrigiert: " + name);
}

const idMatches = Array.from(html.matchAll(/\bid="([^"]+)"/g), (match) => match[1]);
const duplicateIds = Array.from(new Set(idMatches.filter((id, index) => idMatches.indexOf(id) !== index)));
check(duplicateIds.length === 0, "keine doppelten HTML-IDs");
const idSet = new Set(idMatches);
const referencedElementIds = Array.from(source.matchAll(/getElementById\("([^"]+)"\)/g), (match) => match[1]);
check(referencedElementIds.every((id) => idSet.has(id)), "alle JavaScript-Elementreferenzen existieren im HTML");
const ariaTargets = Array.from(html.matchAll(/aria-(?:controls|labelledby)="([^"]+)"/g), (match) => match[1]).flatMap((value) => value.split(/\s+/));
check(ariaTargets.every((id) => idSet.has(id)), "alle ARIA-Ziele existieren");
check(/Kochorakel\s*·\s*Version 0\.2\.2/.test(html), "Versionsnummer 0.2.2 sichtbar");
check(!/Version 0\.1\.[0-4]/.test(html), "keine alte sichtbare Versionsnummer");
check(/id="accountBtn"/.test(html) && /id="accountOverlay"/.test(html) && /id="authForm"/.test(html), "Konto und Anmeldung vorhanden");
check(/import \{ createClient \} from "@supabase\/supabase-js";/.test(mainModule) && /createClient\(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY\)/.test(mainModule), "Supabase wird als gebündeltes Modul geladen");
check(!/sb_secret_/i.test(html + source), "kein Supabase-Secret im Client");
check(/kochorakel-account-cache/.test(source), "Offline-Kontocache vorhanden");
check(/mergeProfiles\(/.test(source), "Profilzusammenführung vorhanden");
check(/weekConfirmations/.test(source) && /function undoWeekDay/.test(source), "gekocht rückgängig vorhanden");
check(/function getWeekShoppingEntries/.test(source) && /function rebuildWeekCart/.test(source), "dynamische Wochen-Einkaufsliste vorhanden");
check(/function cartSourceNeedsUpdate/.test(source) && /function updateRecipePortions/.test(source), "Warenkorbmengen reagieren auf Portionen");
check(/saveDevicePhotos/.test(source) && /loadDevicePhotos/.test(source), "Kochfotos lokal gespeichert");
check(/signInWithPassword/.test(source) && /\.signUp\(/.test(source) && /resetPasswordForEmail/.test(source) && /updateUser/.test(source), "Anmeldung, Registrierung und Passwortfunktionen vorhanden");
check(/\.from\("profiles"\)/.test(source) && /\.from\("user_app_data"\)/.test(source), "Profil- und App-Datentabellen angebunden");
check(/admin_set_user_access/.test(source) && /currentProfileRow\.role === "admin"/.test(source), "Adminbereich ist rollenbasiert geschützt");
check(/function compressImage/.test(source) && /accept="image\/\*"/.test(html), "Kochfoto-Aufnahme und Komprimierung vorhanden");
check(/id="panelRezepte"/.test(html) && /id="recipeSearch"/.test(html) && /function renderRecipeLibrary/.test(source), "Rezeptübersicht und Suche vorhanden");
check(/id="cookingOverlay"/.test(html) && /function openCookingMode/.test(source) && /function toggleCookingTimer/.test(source), "Kochmodus und Timer vorhanden");
check(/id="cookingActiveTimers"/.test(html) && /function detachRunningCookingTimer/.test(source) && /detachRunningCookingTimer\(\);/.test(source), "laufender Timer wird beim Schrittwechsel kompakt weitergeführt");
check(/function recordCookingCompletion/.test(source) && /mode:\s*"recipe"/.test(source), "Kochmodus-Abschluss wird im Fortschritt gespeichert");
check(html.indexOf('id="tabWoche"') < html.indexOf('id="tabRezepte"'), "Navigation zeigt Woche vor Rezepte");
check(html.indexOf('id="ingredientLine"') < html.indexOf('id="recipeLink"') && html.indexOf('id="recipeLink"') < html.indexOf('id="cartAction"') && />Rezept anzeigen<\/a>/.test(html), "Rezeptlink steht mit kurzem Text direkt unter den Zutaten");
check(/data-value="reste"/.test(html) && /ingredientMode === "reste"/.test(source), "Restemodus vorhanden");
check(/recentPicks/.test(source) && /function recordRecentPick/.test(source), "Wiederholungsvermeidung vorhanden");
check(/id="cartRemoveChecked"/.test(html) && /cartStatusEl/.test(source), "Warenkorb-Komfort vorhanden");
check(/viewport-fit=cover/.test(html) && /safe-area-inset-top/.test(html) && /safe-area-inset-bottom/.test(html) && /100dvh/.test(html), "iPhone-Safe-Areas und dynamische Höhe berücksichtigt");
check(/overlay-scroll-locked/.test(html) && /overscroll-behavior:\s*(?:none|contain)/.test(html), "Overlay- und Hintergrundscrollen begrenzt");
check(/content-visibility:\s*auto/.test(html) && /contain-intrinsic-size/.test(html), "lange Rezept- und Dex-Listen werden nur sichtbar gerendert");
check(/recipeSearchDebounceTimer\s*=\s*setTimeout/.test(source) && /recipeLibraryRenderKey/.test(source) && /_searchText/.test(source) && /_pricePerPortion/.test(source) && /loading="lazy"\s+decoding="async"/.test(source), "Rezeptsuche, Rezeptliste, Preise und Fotos nutzen Debounce oder Caches");
check(/id="dexDetails"/.test(html) && /function renderDex\(force\)/.test(source) && /dexDetailsEl\.open/.test(source), "Gerichte-Dex wird erst beim Öffnen vollständig aufgebaut");
check(/setInterval\(updateDetachedCookingTimers,\s*1000\)/.test(source) && /cookingActiveTimers\.addEventListener\("click"/.test(source), "abgelöste Timer aktualisieren sparsam mit Ereignisdelegation");
check(/budgetSaveTimer\s*=\s*setTimeout/.test(source) && /function flushBudgetSave\(\)/.test(source) && /function spinDayRow\(day, pool, onComplete\)/.test(source) && /if \(progressChanged\) afterProgressUpdate\(\)/.test(source), "Budgetspeicherung und Wochenfortschritt werden gebündelt");
check(/const dishIndex = new Map/.test(source) && /return dishIndex\.get\(name\)/.test(source), "Gerichte werden über einen schnellen Namensindex gefunden");
check(/function refreshRecipeLibrary\(\)/.test(source) && /panelRezepteEl\.classList\.contains\("active"\)/.test(source) && /function renderPhotoGallery\(force\)/.test(source) && /function renderCart\(forceDetails\)/.test(source), "schwere Rezept-, Foto- und Warenkorbansichten werden nur bei Sichtbarkeit aufgebaut");
check(/favoritesListEl\.addEventListener\("click"/.test(source) && /cartListEl\.addEventListener\("change"/.test(source) && /galleryBodyEl\.addEventListener\("click"/.test(source) && /weekDayRowsEl\.addEventListener\("click"/.test(source), "dynamische Listen verwenden gemeinsame Ereignis-Handler");
check(/setInterval\(updateCookingTimerDisplay,\s*1000\)/.test(source) && /setInterval\(updateDetachedCookingTimers,\s*1000\)/.test(source), "alle sichtbaren Koch-Timer aktualisieren im Sekundentakt");
check(/weekShoppingCacheKey/.test(source) && /if \(weekShoppingCache && weekShoppingCacheKey === nextKey\)/.test(source) && /function changePeopleCount\(delta\)/.test(source), "Wochenberechnungen werden wiederverwendet und Personensteuerung ist zusammengeführt");
check(/Object\.assign\(\{\}, source, \{ photos: \[\] \}\)/.test(source) && /savedPhotoKeys\.get\(key\) === nextPhotoKey/.test(source) && /if \(revision !== saveRevision\) return true;/.test(source), "Profilspeicherung kopiert oder schreibt Bilddaten nicht unnötig und überspringt veraltete Cloudstände");

function functionSource(name) {
  const start = source.indexOf("function " + name + "(");
  if (start < 0) throw new Error("Funktion fehlt: " + name);
  const brace = source.indexOf("{", start);
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let i = brace; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") { quote = char; continue; }
    if (char === "{") depth++;
    else if (char === "}" && --depth === 0) return source.slice(start, i + 1);
  }
  throw new Error("Funktionsende fehlt: " + name);
}

if (dataContext) {
  try {
    const functionNames = [
      "recipeBaseQuantity", "roundedRecipeQuantity", "scaledRecipeQuantity", "formatQuantity",
      "cartHasSource", "cartSourceNeedsUpdate", "cartQuantityText", "addToCart", "dishByName",
      "getWeekShoppingEntries", "computePool", "pickFinal", "recordRecentPick", "formatCookingTimer",
      "normalizeRecipeSearchText", "getRecipeLibraryPool", "dishPricePerPortion", "formatEuro", "chefkochUrl", "syncCartToProfile", "restoreCartFromProfile",
      "claimProfileReward", "addXp", "localDateKey", "isoWeekKey", "markDishSeen", "rewardCook", "getLevelInfo",
      "checkCartCompletion", "rebuildWeekCart", "hasWeekCartContributions", "removeWeekCartContributions",
      "getWeekMissingIngredients", "pickDayCandidate"
    ];
    vm.runInContext(
      "const weekDays = ['Mo','Di','Mi','Do','Fr','Sa','So'];\n" +
      "const REST_DAY = '__rest__';\n" +
      "const have = new Set();\n" +
      "const cartMap = new Map();\n" +
      "const selectedDays = new Set();\n" +
      "const dishIndex = new Map(dishes.map(dish => [dish.name, dish]));\n" +
      "const dishNameSet = new Set(dishIndex.keys());\n" +
      "let weekShoppingCacheKey = ''; let weekShoppingCache = null;\n" +
      "let peopleCount = 4;\n" +
      "let profile = { weekPlan: {}, cartItems: [], recentPicks: [] };\n" +
      "let tier = 'premium';\n" +
      "let lastPick = null;\n" +
      "const state = { time:'egal', diet:'egal', type:'egal', ingredientMode:'egal' };\n" +
      "const recipeLibraryState = { query: '', diet: 'egal', time: 'egal', type: 'egal' };\n" +
      "const levels = [{title:'Kochlehrling',min:0},{title:'Beikoch',min:50},{title:'Sous-Chef',min:150},{title:'Küchenchef',min:350},{title:'Chefkoch',min:700},{title:'Sternekoch',min:1200}];\n" +
      "let cartWasComplete = false;\n" +
      "function renderCart(){} function saveProfile(){} function showToast(){}\n" +
      functionNames.map(functionSource).join("\n") +
      "\n__logic = { weekDays, have, cartMap, selectedDays, state, recipeLibraryState, setPeopleCount: n => peopleCount = n, setProfile: p => profile = p, getProfile: () => profile, setTier: v => tier = v, setLastPick: v => lastPick = v, setCartComplete: v => cartWasComplete = v, getCartComplete: () => cartWasComplete, recipeBaseQuantity, scaledRecipeQuantity, dishPricePerPortion, formatEuro, chefkochUrl, cartHasSource, cartSourceNeedsUpdate, cartQuantityText, addToCart, syncCartToProfile, restoreCartFromProfile, claimProfileReward, addXp, localDateKey, isoWeekKey, markDishSeen, rewardCook, getLevelInfo, checkCartCompletion, getWeekShoppingEntries, getWeekMissingIngredients, rebuildWeekCart, hasWeekCartContributions, removeWeekCartContributions, pickDayCandidate, dishByName, computePool, pickFinal, recordRecentPick, formatCookingTimer, normalizeRecipeSearchText, getRecipeLibraryPool };",
      dataContext,
      { timeout: 3000 }
    );
    const logic = dataContext.__logic;
    const pasta = dishes.find((dish) => dish.name === "Spaghetti Aglio e Olio");
    check(dishes.every((dish) => Number.isFinite(logic.dishPricePerPortion(dish)) && logic.dishPricePerPortion(dish) > 0), "alle Gerichte haben einen positiven Portionspreis");
    check(logic.formatEuro(1.5) === "1,50 €", "Eurobeträge werden deutsch formatiert");
    check(logic.chefkochUrl("Crème brûlée").includes("Cr%C3%A8me%20br%C3%BBl%C3%A9e"), "externe Rezeptsuche kodiert Sonderzeichen sicher");
    const sourceKey = "recipe:" + pasta.name;
    logic.addToCart(pasta.ingredients, { dish: pasta, portions: 4, source: sourceKey, defer: true });
    check(logic.cartMap.size === pasta.ingredients.length, "Warenkorb nimmt Rezeptzutaten auf");
    check(Array.from(logic.cartMap.values()).every((item) => item.contributions.length === 1), "keine doppelten Rezeptbeiträge");
    const originalAmount = logic.cartMap.get("nudeln").contributions[0].amount;
    check(logic.cartSourceNeedsUpdate("nudeln", sourceKey, pasta, 6), "Portionsänderung als Warenkorb-Update erkannt");
    logic.addToCart(pasta.ingredients, { dish: pasta, portions: 6, source: sourceKey, defer: true });
    check(logic.cartMap.get("nudeln").contributions.length === 1, "Portionsupdate dupliziert Warenkorbeintrag nicht");
    check(logic.cartMap.get("nudeln").contributions[0].amount > originalAmount, "Portionsupdate erhöht Menge");
    check(!logic.cartSourceNeedsUpdate("nudeln", sourceKey, pasta, 6), "aktualisierte Warenkorbmenge erkannt");
    logic.addToCart(["nudeln"], { dish: pasta, portions: 2, source: "recipe:zweites", defer: true });
    check(logic.cartMap.get("nudeln").contributions.length === 2, "gleiche Zutat aus zwei Quellen gruppiert");
    check(!logic.cartQuantityText("nudeln", logic.cartMap.get("nudeln")).includes(" + "), "gleiche Einheit als Gesamtsumme dargestellt");
    check(logic.cartQuantityText("nudeln", { contributions: [{ source:"a", amount:100, unit:"g" }, { source:"b", amount:1, unit:"Stück" }] }).includes(" + "), "unterschiedliche Einheiten bleiben getrennt lesbar");

    logic.setProfile({ cartItems: [] });
    logic.syncCartToProfile();
    const savedCart = JSON.parse(JSON.stringify(logic.getProfile().cartItems));
    logic.cartMap.clear();
    logic.setProfile({ cartItems: savedCart });
    logic.restoreCartFromProfile();
    check(logic.cartMap.size === pasta.ingredients.length && logic.cartMap.get("nudeln").contributions.length === 2, "Warenkorb wird vollständig gespeichert und wiederhergestellt");

    logic.cartMap.clear();
    logic.cartMap.set("nudeln", { checked: true, manual: true, contributions: [] });
    logic.setProfile({ xp: 0, cartCompletions: 0, rewardedCartCompletions: [] });
    logic.setCartComplete(false);
    logic.checkCartCompletion();
    check(logic.getProfile().xp === 10 && logic.getProfile().cartCompletions === 1, "vollständiger Warenkorb vergibt einmalig XP");
    logic.cartMap.get("nudeln").checked = false;
    logic.checkCartCompletion();
    logic.cartMap.get("nudeln").checked = true;
    logic.checkCartCompletion();
    check(logic.getProfile().xp === 10 && logic.getProfile().cartCompletions === 1, "Warenkorb-XP wird in derselben Woche nicht doppelt vergeben");

    logic.setProfile({ xp: 0, dishesSeen: [], rewardedCookEvents: [] });
    check(logic.markDishSeen(pasta, false) && logic.getProfile().xp === 15, "neues Gericht vergibt Entdeckungs-XP");
    check(!logic.markDishSeen(pasta, false) && logic.getProfile().xp === 15, "Entdeckungs-XP wird nicht doppelt vergeben");
    check(logic.rewardCook(pasta, null) === 10 && logic.rewardCook(pasta, null) === 0 && logic.getProfile().xp === 25, "Koch-XP wird pro Gericht und Tag nur einmal vergeben");
    check(logic.getLevelInfo(0).current.title === "Kochlehrling" && logic.getLevelInfo(1200).current.title === "Sternekoch", "Levelgrenzen funktionieren");

    logic.cartMap.clear();
    logic.have.clear();
    logic.selectedDays.clear();
    logic.selectedDays.add("Mo");
    logic.selectedDays.add("Di");
    logic.setPeopleCount(4);
    logic.setProfile({ weekPlan: { Mo: pasta.name, Di: pasta.name } });
    const twoDayEntries = logic.getWeekShoppingEntries();
    const noodles = twoDayEntries.find((entry) => entry.id === "nudeln");
    check(Boolean(noodles) && noodles.quantities.g === logic.scaledRecipeQuantity(pasta, "nudeln", 4).amount * 2, "Wochenliste summiert gleiche Zutaten");
    check(logic.getWeekShoppingEntries() === twoDayEntries, "unveränderte Wochenliste wird aus dem Cache wiederverwendet");
    logic.have.add("nudeln");
    const withoutNoodles = logic.getWeekShoppingEntries();
    check(withoutNoodles !== twoDayEntries && !withoutNoodles.some((entry) => entry.id === "nudeln"), "Vorratsänderung erneuert den Wochenlisten-Cache");
    logic.setProfile({ weekPlan: { Mo: "__rest__", Di: pasta.name } });
    check(logic.getWeekShoppingEntries().length > 0, "Restetag lässt andere Tage unverändert");

    logic.cartMap.clear();
    logic.have.clear();
    logic.selectedDays.clear();
    logic.selectedDays.add("Mo");
    logic.setPeopleCount(4);
    logic.setProfile({ weekPlan: { Mo: pasta.name }, cartItems: [] });
    logic.cartMap.set("zucker", { checked: false, manual: true, contributions: [] });
    logic.rebuildWeekCart(true);
    check(logic.hasWeekCartContributions() && logic.getWeekMissingIngredients().length === pasta.ingredients.length, "Wochenplan erzeugt eindeutige Warenkorbbeiträge");
    const weekNoodlesFour = logic.cartMap.get("nudeln").contributions[0].amount;
    logic.setPeopleCount(8);
    logic.rebuildWeekCart(true);
    check(logic.cartMap.get("nudeln").contributions.length === 1 && logic.cartMap.get("nudeln").contributions[0].amount > weekNoodlesFour, "Wochenwarenkorb aktualisiert Mengen bei Personenänderung");
    logic.have.add("nudeln");
    logic.rebuildWeekCart(true);
    check(!logic.cartMap.has("nudeln"), "Wochenwarenkorb entfernt inzwischen vorhandene Zutaten");
    logic.removeWeekCartContributions();
    check(logic.cartMap.size === 1 && logic.cartMap.has("zucker"), "Entfernen der Wochenliste erhält manuelle Warenkorbeinträge");
    logic.setProfile({ weekPlan: { Mo: dishes[0].name } });
    check(logic.pickDayCandidate([dishes[0], dishes[1]]).name === dishes[1].name, "Wochenplan vermeidet vorhandene Gerichte solange Alternativen existieren");

    logic.have.clear();
    check(logic.computePool({ time: "egal", diet: "egal", type: "egal", ingredientMode: "reste" }, false).length === 0, "Restemodus verlangt ausgewählte Vorräte");
    logic.have.add("nudeln");
    logic.have.add("knoblauch");
    const restPool = logic.computePool({ time: "egal", diet: "egal", type: "egal", ingredientMode: "reste" }, false);
    check(restPool.length > 0 && restPool.every((dish) => dish.ingredients.some((id) => logic.have.has(id)) && dish.ingredients.filter((id) => !logic.have.has(id)).length <= 2), "Restemodus liefert passende Gerichte mit höchstens zwei Fehlzutaten");
    check(restPool.every((dish, index) => index === 0 || (dish.ingredients.filter((id) => logic.have.has(id)).length / dish.ingredients.length) <= (restPool[index - 1].ingredients.filter((id) => logic.have.has(id)).length / restPool[index - 1].ingredients.length)), "Restemodus sortiert nach Vorratsanteil");
    logic.state.ingredientMode = "reste";
    logic.setProfile({ weekPlan: {}, cartItems: [], recentPicks: [] });
    const restPick = logic.pickFinal(restPool);
    const bestRestRatio = restPool[0].ingredients.filter((id) => logic.have.has(id)).length / restPool[0].ingredients.length;
    check((restPick.ingredients.filter((id) => logic.have.has(id)).length / restPick.ingredients.length) === bestRestRatio, "Restemodus lost aus den bestpassenden Gerichten");
    logic.state.ingredientMode = "egal";

    const recentPool = dishes.slice(0, 9);
    logic.setProfile({ weekPlan: {}, cartItems: [], recentPicks: recentPool.slice(0, 8).map((dish) => dish.name) });
    check(logic.pickFinal(recentPool).name === recentPool[8].name, "Auslosung vermeidet die letzten acht Gerichte");
    logic.recordRecentPick(recentPool[8]);
    check(logic.getProfile().recentPicks.length === 8 && logic.getProfile().recentPicks[7] === recentPool[8].name, "neue Auslosung wird auf acht Einträge begrenzt gespeichert");
    check(logic.formatCookingTimer(65) === "01:05" && logic.formatCookingTimer(0) === "00:00", "Koch-Timer formatiert korrekt");

    logic.setProfile({ favorites: [] });
    logic.recipeLibraryState.query = "creme brulee";
    logic.recipeLibraryState.diet = "egal";
    logic.recipeLibraryState.time = "egal";
    logic.recipeLibraryState.type = "egal";
    check(logic.getRecipeLibraryPool().some((dish) => dish.name === "Crème brûlée"), "Rezeptsuche ignoriert Akzente");
    logic.recipeLibraryState.query = "Knoblauch";
    const garlicResults = logic.getRecipeLibraryPool();
    check(garlicResults.length > 0 && garlicResults.every((dish) => dish.ingredients.some((id) => ingredientVocab[id].label === "Knoblauch") || dish.name.toLowerCase().includes("knoblauch")), "Rezeptsuche durchsucht Zutaten");
    logic.recipeLibraryState.query = "";
    logic.recipeLibraryState.diet = "vegan";
    logic.recipeLibraryState.time = "schnell";
    logic.recipeLibraryState.type = "süß";
    const filteredLibrary = logic.getRecipeLibraryPool();
    check(filteredLibrary.length > 0 && filteredLibrary.every((dish) => dish.diet === "vegan" && dish.time === "schnell" && dish.type === "süß"), "Rezeptübersicht kombiniert alle Filter korrekt");
  } catch (error) {
    failures.push("Kombinationstests: " + error.message);
  }
}

if (dataStart >= 0 && dataEnd > dataStart) {
  try {
    const profileContext = { createClient: function(){ return null; } };
    const storageMap = new Map();
    let photoStorageWrites = 0;
    profileContext.localStorage = {
      getItem: (key) => storageMap.has(key) ? storageMap.get(key) : null,
      setItem: (key, value) => { if (String(key).startsWith("kochorakel-device-photos:")) photoStorageWrites++; storageMap.set(key, String(value)); },
      removeItem: (key) => storageMap.delete(key)
    };
    vm.createContext(profileContext);
    vm.runInContext(source.slice(dataStart, dataEnd), profileContext, { timeout: 3000 });
    vm.runInContext(
      "const REST_DAY = '__rest__';\n" +
      "const weekDays = ['Mo','Di','Mi','Do','Fr','Sa','So'];\n" +
      "const dishIndex = new Map(dishes.map(dish => [dish.name, dish]));\n" +
      "const dishNameSet = new Set(dishIndex.keys());\n" +
      "const accentColors = { blue:'#007AFF', purple:'#AF52DE', pink:'#FF375F', indigo:'#5856D6', teal:'#30B0C7', yellow:'#FFCC00' };\n" +
      "const badgeDefs = [];\n" +
      "const savedPhotoKeys = new Map();\n" +
      ["isoWeekKey", "defaultProfile", "normalizeProfile", "mergeUnique", "mergeProfiles", "photoStorageKey", "accountCacheKey", "photoListKey", "profileWithoutPhotos", "loadDevicePhotos", "saveDevicePhotos", "readAccountCache", "writeAccountCache", "hasMeaningfulProgress"].map(functionSource).join("\n") +
      "\n__profiles = { defaultProfile, normalizeProfile, mergeProfiles, profileWithoutPhotos, loadDevicePhotos, saveDevicePhotos, readAccountCache, writeAccountCache, hasMeaningfulProgress };",
      profileContext,
      { timeout: 3000 }
    );
    const profiles = profileContext.__profiles;
    const firstNames = dishes.slice(0, 10).map((dish) => dish.name);
    const migrated = profiles.normalizeProfile({
      xp: 42,
      recentPicks: ["Unbekannt"].concat(firstNames).concat(firstNames[9]),
      cookLog: [{ id: "rest-1", name: firstNames[0], ts: new Date().toISOString(), mode: "reste", hasPhoto: false }],
      weekKey: "2026-W99"
    });
    check(migrated.xp === 42 && migrated.recentPicks.length === 8 && migrated.recentPicks[7] === firstNames[9], "älteres Profil begrenzt und bereinigt letzte Auslosungen");
    check(migrated.cookLog.length === 1 && migrated.cookLog[0].mode === "reste", "Restemodus bleibt im Kochprotokoll erhalten");
    check(migrated.weekKey !== "2026-W99", "ungültige Kalenderwoche wird repariert");
    const merged = profiles.mergeProfiles({ xp: 100, recentPicks: firstNames.slice(0, 5) }, { xp: 80, recentPicks: firstNames.slice(5, 10) });
    check(merged.xp === 100 && merged.recentPicks.length === 8 && merged.recentPicks[7] === firstNames[9], "Profilabgleich erhält Fortschritt und aktuelle Auslosungen");
    const localPhoto = { id:"photo-1", name:firstNames[0], ts:new Date().toISOString(), dataUrl:"data:image/jpeg;base64,AAAA" };
    check(profiles.saveDevicePhotos("test-user", [localPhoto]) && profiles.loadDevicePhotos("test-user").length === 1, "Kochfotos werden gerätelokal gespeichert und geladen");
    profiles.saveDevicePhotos("test-user", [localPhoto]);
    check(photoStorageWrites === 1, "unveränderte Kochfotos werden nicht erneut in den Gerätespeicher geschrieben");
    const withoutPhotos = profiles.profileWithoutPhotos({ xp: 5, photos:[localPhoto] });
    check(withoutPhotos.xp === 5 && Array.isArray(withoutPhotos.photos) && withoutPhotos.photos.length === 0, "Cloudprofil enthält keine lokalen Bilddaten");
    check(profiles.writeAccountCache("test-user", { xp:7, photos:[localPhoto] }, { role:"user" }, "2026-09-17T00:00:00.000Z", true), "Offline-Kontocache kann geschrieben werden");
    const cached = profiles.readAccountCache("test-user");
    check(cached && cached.profile.xp === 7 && cached.profile.photos.length === 0 && cached.dirty === true, "Offline-Kontocache wird vollständig gelesen");
    check(!profiles.hasMeaningfulProgress(profiles.defaultProfile()) && profiles.hasMeaningfulProgress({ ...profiles.defaultProfile(), favorites:[firstNames[0]] }), "Gastfortschritt wird nur bei echten Änderungen übernommen");
  } catch (error) {
    failures.push("Profiltests: " + error.message);
  }
}

const isoStart = source.indexOf("function isoWeekKey");
const isoEnd = source.indexOf("function claimProfileReward", isoStart);
if (isoStart >= 0 && isoEnd > isoStart) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(source.slice(isoStart, isoEnd) + "\n__isoWeekKey = isoWeekKey;", context);
  const isoWeekKey = context.__isoWeekKey;
  const cases = [
    [new Date(2020, 11, 31), "2020-W53"],
    [new Date(2021, 0, 1), "2020-W53"],
    [new Date(2021, 0, 4), "2021-W01"],
    [new Date(2024, 11, 30), "2025-W01"],
    [new Date(2025, 0, 1), "2025-W01"]
  ];
  for (const [date, expected] of cases) check(isoWeekKey(date) === expected, "ISO-Woche " + date.toISOString().slice(0, 10));
}

const report = {
  file,
  checks: checks.length,
  failures: failures.length,
  dishes: dishes.length,
  free: dishes.filter((dish) => !dish.premium).length,
  premium: dishes.filter((dish) => dish.premium).length,
  ingredients: Object.keys(ingredientVocab).length
};
console.log(JSON.stringify(report, null, 2));
if (failures.length) {
  console.error("\nFEHLER:");
  failures.forEach((failure) => console.error("- " + failure));
  process.exit(1);
}
