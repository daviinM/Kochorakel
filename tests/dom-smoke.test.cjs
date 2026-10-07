const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "index.html");
const expectedVersion = "0.2.4";
const html = fs.readFileSync(file, "utf8");
const recipesModule = fs.readFileSync(path.join(root, "src/data/recipes.js"), "utf8");
const mainModule = fs.readFileSync(path.join(root, "src/main.js"), "utf8");
const source = recipesModule.replace(/^export\s+/gm, "") + "\n" + mainModule.replace(/^import .*$/gm, "");

class ClassList {
  constructor() { this.values = new Set(); }
  add(...names) { names.forEach((name) => this.values.add(name)); }
  remove(...names) { names.forEach((name) => this.values.delete(name)); }
  toggle(name, force) {
    if (force === true) { this.values.add(name); return true; }
    if (force === false) { this.values.delete(name); return false; }
    if (this.values.has(name)) { this.values.delete(name); return false; }
    this.values.add(name); return true;
  }
  contains(name) { return this.values.has(name); }
}

class ElementStub {
  constructor(id) {
    this.id = id || "";
    this.style = {};
    this.dataset = {};
    this.classList = new ClassList();
    this.attributes = new Map();
    this.listeners = new Map();
    this.children = [];
    this.textContent = "";
    this.innerHTML = "";
    this.value = "";
    this.disabled = false;
    this.checked = false;
    this.tabIndex = 0;
    this.offsetParent = {};
    this.firstElementChild = null;
  }
  addEventListener(type, handler) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(handler);
  }
  dispatch(type, extra) {
    const event = Object.assign({ target: this, preventDefault(){}, stopPropagation(){}, key:"" }, extra || {});
    (this.listeners.get(type) || []).forEach((handler) => handler.call(this, event));
  }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  removeAttribute(name) { this.attributes.delete(name); }
  getAttribute(name) { return this.attributes.get(name) || null; }
  appendChild(child) { this.children.push(child); return child; }
  querySelectorAll() { return []; }
  querySelector() { return null; }
  contains() { return true; }
  closest() { return null; }
  focus() {}
  scrollIntoView() {}
  setPointerCapture() {}
  getBoundingClientRect() {
    return {
      left: Number.parseFloat(this.style.left) || 0,
      top: Number.parseFloat(this.style.top) || 140,
      width: Number.parseFloat(this.style.width) || 76,
      height: Number.parseFloat(this.style.height) || 86
    };
  }
  remove() {}
  replaceWith() {}
}

const elements = new Map();
for (const match of html.matchAll(/\bid="([^"]+)"/g)) elements.set(match[1], new ElementStub(match[1]));
function element(id) {
  if (!elements.has(id)) elements.set(id, new ElementStub(id));
  return elements.get(id);
}

const storage = new Map();
const documentStub = {
  body: new ElementStub("body"),
  documentElement: new ElementStub("html"),
  activeElement: null,
  getElementById: element,
  querySelectorAll() { return []; },
  querySelector(selector) { return selector === ".app" ? element("app") : null; },
  elementFromPoint() { return null; },
  createElement() { return new ElementStub(""); },
  contains() { return true; }
};
documentStub.documentElement.style.setProperty = function(name, value){ this[name] = value; };

const context = {
  console,
  document: documentStub,
  localStorage: {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); }
  },
  navigator: { onLine: true, vibrate() {}, serviceWorker: undefined },
  location: { protocol: "file:", hostname: "", origin: "null", pathname: "/" },
  requestAnimationFrame(callback) { callback(); return 1; },
  setTimeout(callback, delay) { if (delay <= 100) callback(); return 1; },
  clearTimeout() {},
  setInterval() { return 1; },
  clearInterval() {},
  confirm() { return true; },
  Image: function(){},
  FileReader: function(){},
  Date,
  Math,
  JSON,
  Map,
  Set,
  WeakMap,
  Promise,
  URL,
  encodeURIComponent,
  decodeURIComponent
};
context.createClient = function(){ return null; };
context.window = {
  supabase: undefined,
  storage: undefined,
  matchMedia() { return { matches: false }; },
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {},
  scrollY: 0,
  pageYOffset: 0,
  confirm() { return true; },
  location: context.location
};
vm.createContext(context);

(async function(){
  vm.runInContext(source, context, { filename: file, timeout: 5000 });
  await Promise.resolve();
  await new Promise((resolve) => setImmediate(resolve));
  vm.runInContext(`
    const recipeLibraryDeferredAtStart = document.getElementById("recipeLibraryGrid").innerHTML === "";
    const galleryDeferredAtStart = document.getElementById("galleryBody").innerHTML === "";
    switchTab("rezepte");
    const recipeLibraryRenderedOnDemand = document.getElementById("recipeLibraryGrid").innerHTML.length > 0;
    const timerDish = dishes.find(dish => dish.stepTimers.some((value, index) => value && index < dish.steps.length - 1));
    openRecipe(timerDish, document.getElementById("tabRezepte"));
    openCookingMode();
    const noTimerStepIndex = cookingDish.stepTimers.findIndex(value => !value);
    cookingStepIndex = noTimerStepIndex;
    renderCookingMode(true);
    const noTimerStepHidesField = noTimerStepIndex >= 0 && document.getElementById("cookingTimerBlock").hidden === true;
    cookingStepIndex = cookingDish.stepTimers.findIndex((value, index) => value && index < cookingDish.steps.length - 1);
    renderCookingMode(true);
    toggleCookingTimer();
    const timerEndBeforeStepChange = cookingTimerEnd;
    const timerStepBeforeChange = cookingStepIndex;
    document.getElementById("cookingNext").dispatch("click");
    const timerContinuesAcrossSteps = !cookingTimerRunning && detachedCookingTimers.length === 1 && detachedCookingTimers[0].end === timerEndBeforeStepChange && cookingStepIndex === timerStepBeforeChange + 1 && cookingTimerRemaining === cookingStepSeconds();
    const timerRow = { dataset:{ timerId:detachedCookingTimers[0].id } };
    const timerCancel = { closest(selector){ return selector === ".cooking-active-timer-cancel" ? this : (selector === ".cooking-active-timer" ? timerRow : null); } };
    document.getElementById("cookingActiveTimers").dispatch("click", { target:timerCancel });
    const detachedTimerCanBeCancelled = detachedCookingTimers.length === 0;
    detachedCookingTimers = [
      { id:"finished", recipeId:timerDish.id, recipeName:timerDish.name, emoji:timerDish.emoji, stepIndex:0, end:Date.now() - 1, initialSeconds:60 },
      { id:"active", recipeId:timerDish.id, recipeName:timerDish.name, emoji:timerDish.emoji, stepIndex:1, end:Date.now() + 60000, initialSeconds:60 }
    ];
    updateDetachedCookingTimers();
    const finishedTimerRemovedIndependently = detachedCookingTimers.length === 1 && detachedCookingTimers[0].id === "active";
    const timerDock = document.getElementById("cookingActiveTimers");
    const dragBubble = document.createElement("div");
    dragBubble.dataset.timerId = "active";
    dragBubble.closest = function(selector){ return selector === ".cooking-active-timer" ? this : null; };
    timerDock.dispatch("pointerdown", { target:dragBubble, pointerId:7, clientX:20, clientY:150 });
    timerDock.dispatch("pointermove", { target:dragBubble, pointerId:7, clientX:80, clientY:180 });
    const timerDockCanBeDragged = Number.parseFloat(timerDock.style.left) > 8 && Number.parseFloat(timerDock.style.top) > 140;
    timerDock.dispatch("pointerup", { target:dragBubble, pointerId:7, clientX:80, clientY:180 });
    const timerDockPositionPersisted = Boolean(localStorage.getItem(TIMER_DOCK_POSITION_KEY));
    openDetachedCookingTimer("active");
    const detachedTimerReturnsToStep = cookingDish.id === timerDish.id && cookingStepIndex === 1 && cookingTimerRunning && detachedCookingTimers.length === 0;
    closeCookingMode(false);
    openCookingMode();
    cookingStepIndex = cookingDish.steps.length - 1;
    const cookedBefore = profile.cookLog.length;
    document.getElementById("cookingNext").dispatch("click");
    const cookingFinishRecorded = profile.cookLog.length === cookedBefore + 1 && profile.cookLog[profile.cookLog.length - 1].mode === "recipe";
    closeRecipe();
    const sequenceDish = dishes.find(dish => dish.stepTimers.some((value, index) => value && index < dish.steps.length - 1));
    const sequenceTimerIndex = sequenceDish.stepTimers.findIndex((value, index) => value && index < sequenceDish.steps.length - 1);
    openRecipe(sequenceDish, document.getElementById("tabRezepte"));
    openCookingMode();
    cookingStepIndex = sequenceTimerIndex;
    renderCookingMode(true);
    toggleCookingTimer();
    cookingTimerEnd = Date.now() + 45000;
    cookingTimerRemaining = 45;
    const sequenceRunningEnd = cookingTimerEnd;
    document.getElementById("cookingNext").dispatch("click");
    const runningTimerDetachedOnNext = !cookingTimerRunning && detachedCookingTimers.some(timer => timer.recipeId === sequenceDish.id && timer.stepIndex === sequenceTimerIndex && timer.end === sequenceRunningEnd);
    document.getElementById("cookingPrev").dispatch("click");
    const runningTimerRestoredOnBack = cookingTimerRunning && cookingTimerStepIndex === sequenceTimerIndex && cookingTimerEnd === sequenceRunningEnd && !detachedCookingTimers.some(timer => timer.recipeId === sequenceDish.id && timer.stepIndex === sequenceTimerIndex);
    toggleCookingTimer();
    const pausedRemainingBeforeNavigation = cookingTimerRemaining;
    document.getElementById("cookingNext").dispatch("click");
    const pausedTimerStoredOnNext = pausedCookingTimers.has(cookingTimerStateKey(sequenceDish, sequenceTimerIndex));
    document.getElementById("cookingPrev").dispatch("click");
    const pausedTimerRestoredOnBack = !cookingTimerRunning && cookingTimerHasStarted && cookingTimerRemaining === pausedRemainingBeforeNavigation && document.getElementById("cookingTimerToggle").textContent === "Fortsetzen";
    toggleCookingTimer();
    const resumedTimerRuns = cookingTimerRunning && cookingTimerHasStarted;
    document.getElementById("cookingNext").dispatch("click");
    document.getElementById("cookingPrev").dispatch("click");
    const repeatedNavigationHasNoDuplicate = cookingTimerRunning && detachedCookingTimers.filter(timer => timer.recipeId === sequenceDish.id && timer.stepIndex === sequenceTimerIndex).length === 0;
    resetCookingTimer();
    closeCookingMode(false);
    closeRecipe();
    addToCart(dishes[0].ingredients.slice(0, 2), { dish:dishes[0], portions:4, source:"smoke", defer:true });
    syncCartToProfile();
    restoreCartFromProfile();
    renderCart();
    const cartDetailsDeferredWhileClosed = document.getElementById("cartList").innerHTML === "";
    openCartOverlay();
    const cartDetailsRenderedOnOpen = document.getElementById("cartList").innerHTML.length > 0;
    const checkedIngredient = dishes[0].ingredients[0];
    const delegatedCheckbox = { dataset:{ item:checkedIngredient }, checked:true, closest(selector){ return selector === ".cart-item-check" ? this : null; } };
    document.getElementById("cartList").dispatch("change", { target:delegatedCheckbox });
    const delegatedCartChangeWorks = cartMap.get(checkedIngredient).checked === true;
    closeCartOverlay();
    profile.favorites = [dishes[0].id];
    openFavoritesOverlay();
    const delegatedFavoriteRemove = document.createElement("button");
    delegatedFavoriteRemove.dataset.name = dishes[0].id;
    delegatedFavoriteRemove.classList.add("fav-remove");
    delegatedFavoriteRemove.closest = function(selector){ return selector === ".fav-name, .fav-remove" ? this : null; };
    document.getElementById("favoritesList").dispatch("click", { target:delegatedFavoriteRemove });
    const delegatedFavoriteRemoveWorks = profile.favorites.length === 0 && document.getElementById("favoritesList").innerHTML === "";
    closeFavoritesOverlay();
    const mergedAfterFavoriteRemoval = mergeProfiles({ favorites:[dishes[0].id], dishesSeen:[dishes[1].id] }, { favorites:[], dishesSeen:[dishes[2].id] });
    const cloudMergeKeepsFavoriteRemoval = mergedAfterFavoriteRemoval.favorites.length === 0 && mergedAfterFavoriteRemoval.dishesSeen.includes(dishes[1].id) && mergedAfterFavoriteRemoval.dishesSeen.includes(dishes[2].id);
    currentDish = dishes[0];
    profile.favorites = [dishes[0].id];
    renderFavoriteBtn(currentDish);
    document.getElementById("favoriteBtn").dispatch("click");
    const resultFavoriteRemoveWorks = profile.favorites.length === 0 && document.getElementById("favoriteBtn").getAttribute("aria-pressed") === "false";
    profile.favorites = [dishes[0].id];
    openRecipe(dishes[0], document.getElementById("favoriteBtn"));
    document.getElementById("recipeFavoriteBtn").dispatch("click");
    const recipeFavoriteRemoveWorks = profile.favorites.length === 0 && document.getElementById("recipeFavoriteBtn").getAttribute("aria-pressed") === "false";
    closeRecipe();
    profile.favorites = [dishes[0].id];
    renderFavoritesSheet();
    const delegatedFavorite = document.createElement("button");
    delegatedFavorite.dataset.name = dishes[0].id;
    delegatedFavorite.classList.add("fav-name");
    delegatedFavorite.closest = function(selector){ return selector === ".fav-name, .fav-remove" ? this : null; };
    document.getElementById("favoritesList").dispatch("click", { target:delegatedFavorite });
    const delegatedFavoriteOpenWorks = currentRecipeDish && currentRecipeDish.name === dishes[0].name;
    closeRecipe();
    tier = "premium";
    profile.photos = [{ id:"smoke-photo", name:dishes[0].name, ts:new Date().toISOString(), dataUrl:"data:image/jpeg;base64,AAAA" }];
    renderPhotoGallery(true);
    const delegatedPhotoDelete = document.createElement("button");
    delegatedPhotoDelete.dataset.photoId = "smoke-photo";
    delegatedPhotoDelete.classList.add("gallery-delete");
    delegatedPhotoDelete.closest = function(selector){ return selector === ".gallery-delete" ? this : null; };
    document.getElementById("galleryBody").dispatch("click", { target:delegatedPhotoDelete });
    const delegatedGalleryDeleteWorks = profile.photos.length === 0;
    selectedDays.add("Mo");
    profile.weekSelectedDays = ["Mo"];
    profile.weekPlan.Mo = dishes[1].id;
    const delegatedWeekClear = document.createElement("button");
    delegatedWeekClear.classList.add("week-clear-btn");
    delegatedWeekClear.dataset.day = "Mo";
    const delegatedWeekRow = { dataset:{ day:"Mo" } };
    delegatedWeekClear.closest = function(selector){ return selector.indexOf(".week-clear-btn") !== -1 ? this : (selector === ".week-row" ? delegatedWeekRow : null); };
    document.getElementById("weekDayRows").dispatch("click", { target:delegatedWeekClear });
    const delegatedWeekActionWorks = profile.weekPlan.Mo === null;
    const migratedLegacyProfile = normalizeProfile({ favorites:[dishes[0].name], dishesSeen:[dishes[1].name], weekPlan:{ Mo:dishes[2].name }, recentPicks:[dishes[3].name] });
    const legacyProfileUsesStableIds = migratedLegacyProfile.favorites[0] === dishes[0].id && migratedLegacyProfile.dishesSeen[0] === dishes[1].id && migratedLegacyProfile.weekPlan.Mo === dishes[2].id && migratedLegacyProfile.recentPicks[0] === dishes[3].id;
    profile.dietPreference = "vegan";
    profile.excludedAllergens = [];
    profile.avoidedIngredients = [];
    const veganPoolOnlyContainsVeganDishes = getPool(true).length > 0 && getPool(true).every(dish => dish.diet === "vegan");
    const weekPoolUsesFoodProfile = getWeekPool(true).length > 0 && getWeekPool(true).every(dish => dish.diet === "vegan");
    const veganLibraryOnlyContainsVeganDishes = getRecipeLibraryPool().length > 0 && getRecipeLibraryPool().every(dish => dish.diet === "vegan");
    const hiddenAnimalIngredient = Object.keys(ingredientVocab).find(id => animalProductIngredients.has(id));
    const veganHidesAnimalIngredients = hiddenAnimalIngredient && !ingredientAllowedByDiet(hiddenAnimalIngredient, profile.dietPreference);
    const allergenDish = dishes.find(dish => dish.allergens.length > 0);
    profile.dietPreference = "alles";
    profile.excludedAllergens = [allergenDish.allergens[0]];
    profile.avoidedIngredients = [];
    const allergenFilterWorks = !getPool(true).includes(allergenDish) && getPool(true).every(dish => !dish.allergens.includes(allergenDish.allergens[0]));
    const avoidedIngredientDish = dishes.find(dish => !dish.allergens.includes(allergenDish.allergens[0]));
    profile.excludedAllergens = [];
    profile.avoidedIngredients = [avoidedIngredientDish.ingredients[0]];
    const avoidedIngredientFilterWorks = !getPool(true).includes(avoidedIngredientDish) && getPool(true).every(dish => !dish.ingredients.includes(avoidedIngredientDish.ingredients[0]));
    const preservedAvoidance = avoidedIngredientDish.ingredients[0];
    profile.dietPreference = "vegan";
    applyFoodProfileChange("Test");
    const hiddenAvoidanceSurvivesDietChange = profile.avoidedIngredients.includes(preservedAvoidance);
    const normalizedFoodProfile = normalizeProfile({ dietPreference:"vegetarisch", excludedAllergens:["gluten","ungueltig"], avoidedIngredients:[dishes[0].ingredients[0],"ungueltig"] });
    const foodProfileNormalizationWorks = normalizedFoodProfile.dietPreference === "vegetarisch" && normalizedFoodProfile.excludedAllergens.length === 1 && normalizedFoodProfile.avoidedIngredients.length === 1;
    const mergedFoodProfile = mergeProfiles({ dietPreference:"alles", excludedAllergens:["milch"] }, { dietPreference:"vegan", excludedAllergens:["gluten"], avoidedIngredients:[dishes[0].ingredients[0]] });
    const cloudMergeKeepsLocalFoodProfile = mergedFoodProfile.dietPreference === "vegan" && mergedFoodProfile.excludedAllergens[0] === "gluten" && mergedFoodProfile.avoidedIngredients[0] === dishes[0].ingredients[0];
    profile = normalizeProfile(defaultProfile());
    renderRecipeLibrary();
    renderWeekTab();
    __smokeResult = {
      profileLoaded,
      dishCount:dishes.length,
      cartCount:cartMap.size,
      recipeLibraryDeferredAtStart,
      recipeLibraryRenderedOnDemand,
      galleryDeferredAtStart,
      cartDetailsDeferredWhileClosed,
      cartDetailsRenderedOnOpen,
      recipeTitle:document.getElementById("recipeSheetTitle").textContent,
      timerContinuesAcrossSteps,
      noTimerStepHidesField,
      detachedTimerCanBeCancelled,
      finishedTimerRemovedIndependently,
      timerDockCanBeDragged,
      timerDockPositionPersisted,
      detachedTimerReturnsToStep,
      cookingFinishRecorded,
      runningTimerDetachedOnNext,
      runningTimerRestoredOnBack,
      pausedTimerStoredOnNext,
      pausedTimerRestoredOnBack,
      resumedTimerRuns,
      repeatedNavigationHasNoDuplicate,
      delegatedCartChangeWorks,
      delegatedFavoriteRemoveWorks,
      cloudMergeKeepsFavoriteRemoval,
      resultFavoriteRemoveWorks,
      recipeFavoriteRemoveWorks,
      delegatedFavoriteOpenWorks,
      delegatedGalleryDeleteWorks,
      delegatedWeekActionWorks,
      legacyProfileUsesStableIds,
      veganPoolOnlyContainsVeganDishes,
      weekPoolUsesFoodProfile,
      veganLibraryOnlyContainsVeganDishes,
      veganHidesAnimalIngredients,
      allergenFilterWorks,
      avoidedIngredientFilterWorks,
      hiddenAvoidanceSurvivesDietChange,
      foodProfileNormalizationWorks,
      cloudMergeKeepsLocalFoodProfile,
      versionPresent:${JSON.stringify(html.includes("Version " + expectedVersion))}
    };
  `, context, { timeout: 5000 });
  const result = context.__smokeResult;
  if (!result.profileLoaded || result.dishCount !== 324 || result.cartCount !== 2 || !result.recipeLibraryDeferredAtStart || !result.recipeLibraryRenderedOnDemand || !result.galleryDeferredAtStart || !result.cartDetailsDeferredWhileClosed || !result.cartDetailsRenderedOnOpen || !result.timerContinuesAcrossSteps || !result.noTimerStepHidesField || !result.detachedTimerCanBeCancelled || !result.finishedTimerRemovedIndependently || !result.timerDockCanBeDragged || !result.timerDockPositionPersisted || !result.detachedTimerReturnsToStep || !result.cookingFinishRecorded || !result.runningTimerDetachedOnNext || !result.runningTimerRestoredOnBack || !result.pausedTimerStoredOnNext || !result.pausedTimerRestoredOnBack || !result.resumedTimerRuns || !result.repeatedNavigationHasNoDuplicate || !result.delegatedCartChangeWorks || !result.delegatedFavoriteRemoveWorks || !result.cloudMergeKeepsFavoriteRemoval || !result.resultFavoriteRemoveWorks || !result.recipeFavoriteRemoveWorks || !result.delegatedFavoriteOpenWorks || !result.delegatedGalleryDeleteWorks || !result.delegatedWeekActionWorks || !result.legacyProfileUsesStableIds || !result.veganPoolOnlyContainsVeganDishes || !result.weekPoolUsesFoodProfile || !result.veganLibraryOnlyContainsVeganDishes || !result.veganHidesAnimalIngredients || !result.allergenFilterWorks || !result.avoidedIngredientFilterWorks || !result.hiddenAvoidanceSurvivesDietChange || !result.foodProfileNormalizationWorks || !result.cloudMergeKeepsLocalFoodProfile || !result.versionPresent) {
    throw new Error("Smoke-Test fehlgeschlagen: " + JSON.stringify(result));
  }
  console.log(JSON.stringify({ file, status:"ok", ...result }, null, 2));
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
