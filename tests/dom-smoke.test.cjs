const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "index.html");
const expectedVersion = "0.2.0";
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
    const event = Object.assign({ target: this, preventDefault(){}, key:"" }, extra || {});
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
    openRecipe(dishes[0], document.getElementById("tabRezepte"));
    openCookingMode();
    toggleCookingTimer();
    const timerEndBeforeStepChange = cookingTimerEnd;
    document.getElementById("cookingNext").dispatch("click");
    const timerContinuesAcrossSteps = !cookingTimerRunning && detachedCookingTimers.length === 1 && detachedCookingTimers[0].end === timerEndBeforeStepChange && cookingStepIndex === 1 && cookingTimerRemaining === cookingStepSeconds();
    const timerRow = { dataset:{ timerId:detachedCookingTimers[0].id } };
    const timerCancel = { closest(selector){ return selector === ".cooking-active-timer-cancel" ? this : (selector === "[data-timer-id]" ? timerRow : null); } };
    document.getElementById("cookingActiveTimers").dispatch("click", { target:timerCancel });
    const detachedTimerCanBeCancelled = detachedCookingTimers.length === 0;
    detachedCookingTimers = [
      { id:"finished", stepIndex:0, end:Date.now() - 1 },
      { id:"active", stepIndex:1, end:Date.now() + 60000 }
    ];
    updateDetachedCookingTimers();
    const finishedTimerRemovedIndependently = detachedCookingTimers.length === 1 && detachedCookingTimers[0].id === "active";
    closeCookingMode(false);
    openCookingMode();
    cookingStepIndex = cookingDish.steps.length - 1;
    const cookedBefore = profile.cookLog.length;
    document.getElementById("cookingNext").dispatch("click");
    const cookingFinishRecorded = profile.cookLog.length === cookedBefore + 1 && profile.cookLog[profile.cookLog.length - 1].mode === "recipe";
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
    profile.favorites = [dishes[0].name];
    renderFavoritesSheet();
    const delegatedFavorite = document.createElement("button");
    delegatedFavorite.dataset.name = dishes[0].name;
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
    profile.weekPlan.Mo = dishes[1].name;
    const delegatedWeekClear = document.createElement("button");
    delegatedWeekClear.classList.add("week-clear-btn");
    delegatedWeekClear.dataset.day = "Mo";
    const delegatedWeekRow = { dataset:{ day:"Mo" } };
    delegatedWeekClear.closest = function(selector){ return selector.indexOf(".week-clear-btn") !== -1 ? this : (selector === ".week-row" ? delegatedWeekRow : null); };
    document.getElementById("weekDayRows").dispatch("click", { target:delegatedWeekClear });
    const delegatedWeekActionWorks = profile.weekPlan.Mo === null;
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
      detachedTimerCanBeCancelled,
      finishedTimerRemovedIndependently,
      cookingFinishRecorded,
      delegatedCartChangeWorks,
      delegatedFavoriteOpenWorks,
      delegatedGalleryDeleteWorks,
      delegatedWeekActionWorks,
      versionPresent:${JSON.stringify(html.includes("Version " + expectedVersion))}
    };
  `, context, { timeout: 5000 });
  const result = context.__smokeResult;
  if (!result.profileLoaded || result.dishCount !== 224 || result.cartCount !== 2 || !result.recipeLibraryDeferredAtStart || !result.recipeLibraryRenderedOnDemand || !result.galleryDeferredAtStart || !result.cartDetailsDeferredWhileClosed || !result.cartDetailsRenderedOnOpen || !result.timerContinuesAcrossSteps || !result.detachedTimerCanBeCancelled || !result.finishedTimerRemovedIndependently || !result.cookingFinishRecorded || !result.delegatedCartChangeWorks || !result.delegatedFavoriteOpenWorks || !result.delegatedGalleryDeleteWorks || !result.delegatedWeekActionWorks || !result.versionPresent) {
    throw new Error("Smoke-Test fehlgeschlagen: " + JSON.stringify(result));
  }
  console.log(JSON.stringify({ file, status:"ok", ...result }, null, 2));
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
