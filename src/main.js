import { createClient } from "@supabase/supabase-js";
import { dishes, ingredientVocab } from "./data/recipes.js";

const SUPABASE_URL = "https://ylhulzbbvbeutghljsyi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_44JxuRidBM7uiSNDliEWNA_uBVT_DGS";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const REST_DAY = "__rest__";
const weekDays = ["Mo","Di","Mi","Do","Fr","Sa","So"];

const levels = [
  { title: "Kochlehrling", min: 0 },
  { title: "Beikoch", min: 50 },
  { title: "Sous-Chef", min: 150 },
  { title: "Küchenchef", min: 350 },
  { title: "Chefkoch", min: 700 },
  { title: "Sternekoch", min: 1200 }
];

const accentColors = { blue: "#007AFF", purple: "#AF52DE", pink: "#FF375F", indigo: "#5856D6", teal: "#30B0C7", yellow: "#FFCC00" };

const badgeDefs = [
  { id: "kochlehrling-debuet", icon: "🎓", color: "#007AFF", name: "Kochlehrling-Debüt", desc: "Erstes bestätigtes Gericht", premium: false, progress: function(){ return { current: Math.min(distinctCookedNames().size, 1), target: 1 }; } },
  { id: "alles-esser", icon: "🍽️", color: "#FF9500", name: "Alles-Esser", desc: "Alle 3 Ernährungsarten gekocht", premium: false, progress: function(){ return { current: dietsCooked().size, target: 3 }; } },
  { id: "suesser-zahn", icon: "🍰", color: "#FF2D55", name: "Süßer Zahn", desc: "5 süße Gerichte gekocht", premium: false, progress: function(){ return { current: sweetDistinctCount(), target: 5 }; } },
  { id: "sparfuchs", icon: "🦊", color: "#A2845E", name: "Sparfuchs", desc: "5x nur mit vorhandenen Zutaten gekocht", premium: false, progress: function(){ return { current: strictCookCount(), target: 5 }; } },
  { id: "restekoenig", icon: "🧺", color: "#34C759", name: "Restekönig", desc: "5x den Warenkorb komplett abgehakt", premium: false, progress: function(){ return { current: profile.cartCompletions || 0, target: 5 }; } },
  { id: "vielfalt-fan", icon: "🌈", color: "#AF52DE", name: "Vielfalt-Fan", desc: "15 verschiedene Gerichte gekocht", premium: false, progress: function(){ return { current: distinctCookedNames().size, target: 15 }; } },
  { id: "wiederholungstaeter", icon: "🔁", color: "#5AC8FA", name: "Wiederholungstäter", desc: "Ein Gericht 3x gekocht", premium: false, progress: function(){ const counts = cookCountsMap(); const best = Object.values(counts).reduce(function(m,c){ return Math.max(m,c); }, 0); return { current: Math.min(best,3), target: 3 }; } },
  { id: "nachteule", icon: "🦉", color: "#5856D6", name: "Nachteule", desc: "Nach Mitternacht gekocht", premium: false, progress: function(){ return { current: nightCookExists() ? 1 : 0, target: 1 }; } },
  { id: "kompletter-dex", icon: "📖", color: "#00C7BE", name: "Kompletter Dex", desc: "Alle Gerichte entdeckt", premium: true, progress: function(){ return { current: profile.dishesSeen.length, target: dishes.length }; } },
  { id: "meisterkoch", icon: "👑", color: "#FFCC00", name: "Meisterkoch", desc: "Alle Gerichte gekocht", premium: true, progress: function(){ return { current: distinctCookedNames().size, target: dishes.length }; } },
  { id: "foodie-fotograf", icon: "📸", color: "#FF3B30", name: "Foodie-Fotograf", desc: "10 Fotos im Kochtagebuch", premium: true, progress: function(){ return { current: Math.min((profile.photos || []).length, 10), target: 10 }; } }
];

const state = { time: "egal", diet: "egal", type: "egal", ingredientMode: "egal" };
const weekFilterState = { time: "egal", diet: "egal", type: "egal" };
const have = new Set();
const cartMap = new Map();
const selectedDays = new Set();
const lockedDays = new Set();
let lastPick = null;
let currentDish = null;
let currentRecipeDish = null;
let spinning = false;
let weekSpinning = false;
let tier = "free";
let profile = null;
let profileLoaded = false;
let authMode = "login";
let currentSession = null;
let currentProfileRow = null;
let saveChain = Promise.resolve();
let saveRevision = 0;
let lastCloudUpdatedAt = null;
let accountLoadedFromCache = false;
let passwordRecoveryActive = false;
let pendingConfirmContext = null;
let confirmedForCurrentResult = false;
let cartWasComplete = false;
let peopleCount = 4;
let recipePeopleCountValue = 4;
let recipeReturnFocus = null;
const recipeLibraryState = { query: "", diet: "egal", time: "egal", type: "egal" };
let recipeLibraryRenderKey = "";
let recipeSearchDebounceTimer = null;
let budgetSaveTimer = null;
let dexRenderDirty = true;
let galleryRenderKey = "";
let galleryRenderDirty = true;
let weekShoppingCacheKey = "";
let weekShoppingCache = null;
const savedPhotoKeys = new Map();
let cookingDish = null;
let cookingStepIndex = 0;
let cookingTimerRemaining = 0;
let cookingTimerEnd = 0;
let cookingTimerRunning = false;
let cookingTimerInterval = null;
let cookingTimerStepIndex = 0;
let cookingSessionRecorded = false;
let detachedCookingTimers = [];
let detachedCookingTimerInterval = null;
let timerDragState = null;
let suppressTimerBubbleClickUntil = 0;
const ACTIVE_TIMERS_STORAGE_KEY = "kochorakel-active-timers-v1";
const TIMER_DOCK_POSITION_KEY = "kochorakel-timer-dock-position-v1";
let timerDockPosition = null;
const prefersReducedMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

const reelInner = document.getElementById("reelInner");
const reelEmoji = document.getElementById("reelEmoji");
const reelName = document.getElementById("reelName");
const reelTags = document.getElementById("reelTags");
const portionPriceEl = document.getElementById("portionPrice");
const ingredientLineEl = document.getElementById("ingredientLine");
const cartActionEl = document.getElementById("cartAction");
const recipeLink = document.getElementById("recipeLink");
const recipeOverlay = document.getElementById("recipeOverlay");
const recipeClose = document.getElementById("recipeClose");
const recipeEmoji = document.getElementById("recipeEmoji");
const recipeSheetTitle = document.getElementById("recipeSheetTitle");
const recipeFavoriteBtn = document.getElementById("recipeFavoriteBtn");
const recipeGrabber = document.getElementById("recipeGrabber");
const recipeMeta = document.getElementById("recipeMeta");
const recipePeopleMinus = document.getElementById("recipePeopleMinus");
const recipePeoplePlus = document.getElementById("recipePeoplePlus");
const recipePeopleCount = document.getElementById("recipePeopleCount");
const recipeIngredientList = document.getElementById("recipeIngredientList");
const recipeIngredientSummary = document.getElementById("recipeIngredientSummary");
const recipeSteps = document.getElementById("recipeSteps");
const recipeNote = document.getElementById("recipeNote");
const recipeAddMissing = document.getElementById("recipeAddMissing");
const recipeExternalLink = document.getElementById("recipeExternalLink");
const recipeStartCooking = document.getElementById("recipeStartCooking");
const cookingOverlay = document.getElementById("cookingOverlay");
const cookingClose = document.getElementById("cookingClose");
const cookingTitle = document.getElementById("cookingTitle");
const cookingProgressLabel = document.getElementById("cookingProgressLabel");
const cookingProgressFill = document.getElementById("cookingProgressFill");
const cookingActiveTimers = document.getElementById("cookingActiveTimers");
const cookingStepNumber = document.getElementById("cookingStepNumber");
const cookingStepText = document.getElementById("cookingStepText");
const cookingTimerBlock = document.getElementById("cookingTimerBlock");
const cookingTimerDisplay = document.getElementById("cookingTimerDisplay");
const cookingTimerContext = document.getElementById("cookingTimerContext");
const cookingTimerToggle = document.getElementById("cookingTimerToggle");
const cookingTimerReset = document.getElementById("cookingTimerReset");
const cookingPrev = document.getElementById("cookingPrev");
const cookingNext = document.getElementById("cookingNext");
const recipeSearchEl = document.getElementById("recipeSearch");
const recipeSearchClearEl = document.getElementById("recipeSearchClear");
const recipeLibraryDietEl = document.getElementById("recipeLibraryDiet");
const recipeLibraryTimeEl = document.getElementById("recipeLibraryTime");
const recipeLibraryTypeEl = document.getElementById("recipeLibraryType");
const recipeLibrarySummaryEl = document.getElementById("recipeLibrarySummary");
const recipeLibraryGridEl = document.getElementById("recipeLibraryGrid");
const recipeLibraryEmptyEl = document.getElementById("recipeLibraryEmpty");
const helperText = document.getElementById("helperText");
const rollBtn = document.getElementById("rollBtn");
const poolCountEl = document.getElementById("poolCount");
const emptyMsgEl = document.getElementById("emptyMsg");
const cartListEl = document.getElementById("cartList");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartCountEl = document.getElementById("cartCount");
const cartClearBtn = document.getElementById("cartClear");
const cartRemoveCheckedBtn = document.getElementById("cartRemoveChecked");
const cartStatusEl = document.getElementById("cartStatus");
const confirmRowEl = document.getElementById("confirmRow");
const photoInputEl = document.getElementById("photoInput");
const toastContainerEl = document.getElementById("toastContainer");
const xpLevelEl = document.getElementById("xpLevel");
const xpLabelEl = document.getElementById("xpLabel");
const xpFillEl = document.getElementById("xpFill");
const xpStripEl = document.getElementById("xpStrip");
const xpStripLabelEl = document.getElementById("xpStripLabel");
const xpStripFillEl = document.getElementById("xpStripFill");
const dexStatsEl = document.getElementById("dexStats");
const dexGridEl = document.getElementById("dexGrid");
const dexDetailsEl = document.getElementById("dexDetails");
const panelRezepteEl = document.getElementById("panelRezepte");
const panelFortschrittEl = document.getElementById("panelFortschritt");
const badgeGridEl = document.getElementById("badgeGrid");
const tabBadgeCountEl = document.getElementById("tabBadgeCount");
const galleryBodyEl = document.getElementById("galleryBody");
const resetProgressBtn = document.getElementById("resetProgress");
const weekLockedEl = document.getElementById("weekLocked");
const weekContentEl = document.getElementById("weekContent");
const weekDayRowsEl = document.getElementById("weekDayRows");
const budgetInputEl = document.getElementById("budgetInput");
const budgetSummaryEl = document.getElementById("budgetSummary");
const addWeekToCartBtn = document.getElementById("addWeekToCartBtn");
const rollWeekBtn = document.getElementById("rollWeekBtn");
const addRestDayBtn = document.getElementById("addRestDayBtn");
const newWeekBtn = document.getElementById("newWeekBtn");
const weekShoppingPreviewEl = document.getElementById("weekShoppingPreview");
const weekPeriodLabelEl = document.getElementById("weekPeriodLabel");
const peopleMinusBtn = document.getElementById("peopleMinus");
const peoplePlusBtn = document.getElementById("peoplePlus");
const peopleCountDisplayEl = document.getElementById("peopleCountDisplay");
const cartIconBtn = document.getElementById("cartIconBtn");
const cartIconBadge = document.getElementById("cartIconBadge");
const cartOverlay = document.getElementById("cartOverlay");
const favoriteBtnEl = document.getElementById("favoriteBtn");
const favoritesBtn = document.getElementById("favoritesBtn");
const favoritesBadgeEl = document.getElementById("favoritesBadge");
const favoritesOverlay = document.getElementById("favoritesOverlay");
const favoritesClose = document.getElementById("favoritesClose");
const favoritesCountEl = document.getElementById("favoritesCount");
const favoritesEmptyEl = document.getElementById("favoritesEmpty");
const favoritesListEl = document.getElementById("favoritesList");
const cartClose = document.getElementById("cartClose");
const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");
const colorRowEl = document.getElementById("colorRow");
const iconRowEl = document.getElementById("iconRow");
const appIconTileEl = document.getElementById("appIconTile");
const themeToggleEl = document.getElementById("themeToggle");
const tierToggleEl = document.getElementById("tierToggle");
const subscriptionHintEl = document.getElementById("subscriptionHint");
const accountBtn = document.getElementById("accountBtn");
const accountDot = document.getElementById("accountDot");
const accountOverlay = document.getElementById("accountOverlay");
const accountClose = document.getElementById("accountClose");
const authLoggedOut = document.getElementById("authLoggedOut");
const authLoggedIn = document.getElementById("authLoggedIn");
const authForm = document.getElementById("authForm");
const authDisplayName = document.getElementById("authDisplayName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authPasswordRepeat = document.getElementById("authPasswordRepeat");
const displayNameField = document.getElementById("displayNameField");
const passwordRepeatField = document.getElementById("passwordRepeatField");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const authMessage = document.getElementById("authMessage");
const continueGuestBtn = document.getElementById("continueGuestBtn");
const accountDisplayName = document.getElementById("accountDisplayName");
const accountEmail = document.getElementById("accountEmail");
const accountRoleBadge = document.getElementById("accountRoleBadge");
const accountTierBadge = document.getElementById("accountTierBadge");
const syncStateEl = document.getElementById("syncState");
const profileForm = document.getElementById("profileForm");
const profileDisplayName = document.getElementById("profileDisplayName");
const openAdminBtn = document.getElementById("openAdminBtn");
const signOutBtn = document.getElementById("signOutBtn");
const adminOverlay = document.getElementById("adminOverlay");
const adminClose = document.getElementById("adminClose");
const adminUserList = document.getElementById("adminUserList");
const passwordRecoveryBox = document.getElementById("passwordRecoveryBox");
const passwordRecoveryForm = document.getElementById("passwordRecoveryForm");
const newPassword = document.getElementById("newPassword");
const newPasswordRepeat = document.getElementById("newPasswordRepeat");

const dishIndexByName = new Map(dishes.map(function(dish){ return [dish.name, dish]; }));
const dishIndexById = new Map(dishes.map(function(dish){ return [dish.id, dish]; }));
const dishNameSet = new Set(dishIndexByName.keys());
const dishIdSet = new Set(dishIndexById.keys());

function dishByRef(ref) { return dishIndexById.get(ref) || dishIndexByName.get(ref) || null; }
function dishIdFromRef(ref) { const dish = dishByRef(ref); return dish ? dish.id : null; }
function uniqueDishIds(value) {
  return Array.from(new Set((Array.isArray(value) ? value : []).map(dishIdFromRef).filter(Boolean)));
}

function normalizeCartSource(source) {
  if (typeof source !== "string") return "";
  if (source.indexOf("recipe:") === 0) {
    const dishId = dishIdFromRef(source.slice(7));
    return dishId ? "recipe:" + dishId : source.slice(0, 120);
  }
  const weekMatch = /^week:([^:]+):(.+)$/.exec(source);
  if (weekMatch) {
    const dishId = dishIdFromRef(weekMatch[2]);
    return dishId ? "week:" + weekMatch[1] + ":" + dishId : source.slice(0, 120);
  }
  return source.slice(0, 120);
}

function defaultProfile() {
  return { xp: 0, dishesSeen: [], cookLog: [], recentPicks: [], cartCompletions: 0, cartItems: [], pantryItems: [], rewardedCartChecks: [], rewardedCartCompletions: [], rewardedCookEvents: [], badgesUnlocked: [], photos: [], weekPlan: {}, weekSelectedDays: [], weekLockedDays: [], weekConfirmed: {}, weekConfirmations: {}, weekKey: isoWeekKey(new Date()), weekBudget: null, peopleCount: 4, accentColor: "blue", appIcon: "🍳", theme: "light", favorites: [], localTier: "free" };
}
function normalizeProfile(p) {
  const d = defaultProfile();
  p = p && typeof p === "object" && !Array.isArray(p) ? p : {};
  const cookLog = (Array.isArray(p.cookLog) ? p.cookLog : []).filter(function(entry){
    return entry && dishByRef(entry.dishId || entry.name) && typeof entry.ts === "string" && !isNaN(Date.parse(entry.ts));
  }).map(function(entry){
    const dish = dishByRef(entry.dishId || entry.name);
    return { id: typeof entry.id === "string" ? entry.id.slice(0, 120) : "", dishId: dish.id, name: dish.name, ts: entry.ts, mode: ["egal","strict","buy2","reste","week","recipe"].indexOf(entry.mode) !== -1 ? entry.mode : "egal", hasPhoto: !!entry.hasPhoto };
  });
  const dishesSeen = uniqueDishIds((Array.isArray(p.dishesSeen) ? p.dishesSeen : []).concat(cookLog.map(function(entry){ return entry.dishId; })));
  const weekPlan = {};
  const rawWeekPlan = p.weekPlan && typeof p.weekPlan === "object" && !Array.isArray(p.weekPlan) ? p.weekPlan : {};
  weekDays.forEach(function(day){
    const ref = rawWeekPlan[day];
    const dishId = dishIdFromRef(ref);
    if (ref === REST_DAY || dishId) weekPlan[day] = ref === REST_DAY ? REST_DAY : dishId;
  });
  const weekConfirmed = {};
  const rawWeekConfirmed = p.weekConfirmed && typeof p.weekConfirmed === "object" && !Array.isArray(p.weekConfirmed) ? p.weekConfirmed : {};
  weekDays.forEach(function(day){ if (rawWeekConfirmed[day] === true && weekPlan[day] && weekPlan[day] !== REST_DAY) weekConfirmed[day] = true; });
  const weekConfirmations = {};
  const rawWeekConfirmations = p.weekConfirmations && typeof p.weekConfirmations === "object" && !Array.isArray(p.weekConfirmations) ? p.weekConfirmations : {};
  weekDays.forEach(function(day){
    const item = rawWeekConfirmations[day];
    if (!weekConfirmed[day] || !item || typeof item !== "object") return;
    weekConfirmations[day] = {
      dishId: dishIdFromRef(item.dishId || item.dishName || weekPlan[day]) || weekPlan[day],
      dishName: (dishByRef(item.dishId || item.dishName || weekPlan[day]) || {}).name || "",
      logId: typeof item.logId === "string" ? item.logId.slice(0, 120) : "",
      photoId: typeof item.photoId === "string" ? item.photoId.slice(0, 120) : "",
      rewardKey: typeof item.rewardKey === "string" ? item.rewardKey.slice(0, 160) : "",
      earnedXp: typeof item.earnedXp === "number" && isFinite(item.earnedXp) ? Math.max(0, Math.min(30, Math.floor(item.earnedXp))) : 0
    };
  });
  const safeStringList = function(value, limit) {
    return Array.from(new Set((Array.isArray(value) ? value : []).filter(function(item){ return typeof item === "string" && item.length <= 120; }))).slice(-limit);
  };
  return {
    xp: typeof p.xp === "number" && isFinite(p.xp) && p.xp >= 0 ? Math.floor(p.xp) : d.xp,
    dishesSeen: dishesSeen,
    cookLog: cookLog,
    recentPicks: uniqueDishIds(p.recentPicks).slice(-8),
    cartCompletions: typeof p.cartCompletions === "number" && isFinite(p.cartCompletions) && p.cartCompletions >= 0 ? Math.floor(p.cartCompletions) : d.cartCompletions,
    cartItems: Array.isArray(p.cartItems) ? p.cartItems.filter(function(item){ return item && typeof item.id === "string" && ingredientVocab[item.id]; }).map(function(item){
      const contributions = Array.isArray(item.contributions) ? item.contributions.filter(function(part){
        return part && typeof part.source === "string" && typeof part.amount === "number" && isFinite(part.amount) && part.amount >= 0 && typeof part.unit === "string";
      }).map(function(part){ return { source: normalizeCartSource(part.source), amount: part.amount, unit: part.unit }; }) : [];
      return { id: item.id, checked: !!item.checked, manual: typeof item.manual === "boolean" ? item.manual : contributions.length === 0, contributions: contributions };
    }) : d.cartItems,
    pantryItems: safeStringList(p.pantryItems, Object.keys(ingredientVocab).length).filter(function(id){ return !!ingredientVocab[id]; }),
    rewardedCartChecks: safeStringList(p.rewardedCartChecks, 1000),
    rewardedCartCompletions: safeStringList(p.rewardedCartCompletions, 104),
    rewardedCookEvents: safeStringList(p.rewardedCookEvents, 1000),
    badgesUnlocked: safeStringList(p.badgesUnlocked, badgeDefs.length).filter(function(id){ return badgeDefs.some(function(badge){ return badge.id === id; }); }),
    photos: (Array.isArray(p.photos) ? p.photos : []).filter(function(photo){ return photo && typeof photo.dataUrl === "string" && /^data:image\/(?:jpeg|png|webp);base64,/.test(photo.dataUrl) && dishByRef(photo.dishId || photo.name); }).map(function(photo){ const dish = dishByRef(photo.dishId || photo.name); return { id: typeof photo.id === "string" ? photo.id : String(Date.now()) + "-" + Math.random().toString(36).slice(2), dishId: dish.id, name: dish.name, ts: typeof photo.ts === "string" ? photo.ts : new Date().toISOString(), dataUrl: photo.dataUrl }; }).slice(0, 20),
    weekPlan: weekPlan,
    weekSelectedDays: safeStringList(p.weekSelectedDays, weekDays.length).filter(function(day){ return weekDays.indexOf(day) !== -1; }),
    weekLockedDays: safeStringList(p.weekLockedDays, weekDays.length).filter(function(day){ return weekDays.indexOf(day) !== -1 && weekPlan[day] && !weekConfirmed[day]; }),
    weekConfirmed: weekConfirmed,
    weekConfirmations: weekConfirmations,
    weekKey: typeof p.weekKey === "string" && /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/.test(p.weekKey) ? p.weekKey : isoWeekKey(new Date()),
    weekBudget: typeof p.weekBudget === "number" && isFinite(p.weekBudget) && p.weekBudget >= 0 ? p.weekBudget : d.weekBudget,
    peopleCount: typeof p.peopleCount === "number" && isFinite(p.peopleCount) ? Math.max(1, Math.min(12, Math.round(p.peopleCount))) : d.peopleCount,
    accentColor: Object.prototype.hasOwnProperty.call(accentColors, p.accentColor) ? p.accentColor : d.accentColor,
    appIcon: ["🍳","🍲","🎲","🥘","🍜","🧑‍🍳"].indexOf(p.appIcon) !== -1 ? p.appIcon : d.appIcon,
    theme: p.theme === "dark" ? "dark" : d.theme,
    favorites: uniqueDishIds(p.favorites),
    localTier: p.localTier === "premium" ? "premium" : d.localTier
  };
}

function dishByName(name) { return dishByRef(name); }
function distinctCookedNames() { return new Set(profile.cookLog.map(function(e){ return e.dishId || dishIdFromRef(e.name); }).filter(Boolean)); }
function cookCountsMap() { const m = {}; profile.cookLog.forEach(function(e){ const key = e.dishId || dishIdFromRef(e.name); if (key) m[key] = (m[key] || 0) + 1; }); return m; }
function dietsCooked() { const s = new Set(); profile.cookLog.forEach(function(e){ const dish = dishByRef(e.dishId || e.name); if (dish) s.add(dish.diet); }); return s; }
function sweetDistinctCount() { const s = new Set(); profile.cookLog.forEach(function(e){ const dish = dishByRef(e.dishId || e.name); if (dish && dish.type === "süß") s.add(dish.id); }); return s.size; }
function nightCookExists() { return profile.cookLog.some(function(e){ return new Date(e.ts).getHours() < 5; }); }
function strictCookCount() { return profile.cookLog.filter(function(e){ return e.mode === "strict"; }).length; }
function recipeBaseQuantity(dish, id) {
  const meta = ingredientVocab[id];
  const detail = dish.amounts && dish.amounts[id];
  return { amount: detail ? detail[0] : meta.amount, unit: detail ? detail[1] : meta.unit };
}
function dishPricePerPortion(dish) {
  if (typeof dish._pricePerPortion === "number") return dish._pricePerPortion;
  const totalForFour = dish.ingredients.reduce(function(sum, id){
    const meta = ingredientVocab[id];
    const quantity = recipeBaseQuantity(dish, id);
    const ratio = meta.amount > 0 && quantity.unit === meta.unit ? quantity.amount / meta.amount : 1;
    return sum + (meta.usePrice || 0) * ratio;
  }, 0);
  const price = totalForFour / 4;
  Object.defineProperty(dish, "_pricePerPortion", { value: price, writable: true, configurable: true });
  return price;
}
function formatEuro(n) { return n.toFixed(2).replace(".", ",") + " €"; }
function formatAmount(id) {
  const ing = ingredientVocab[id];
  if (!ing || typeof ing.amount !== "number") return "";
  const scaled = ing.amount * (peopleCount / 4);
  const unit = ing.unit;
  let val;
  if (unit === "Stück" || unit === "Zehen" || unit === "Scheiben") {
    val = Math.max(1, Math.round(scaled));
  } else if (unit === "g" || unit === "ml") {
    val = scaled < 10 ? Math.round(scaled) : Math.round(scaled / 10) * 10;
  } else {
    val = Math.round(scaled * 2) / 2;
  }
  const noSpace = (unit === "g" || unit === "ml");
  return val + (noSpace ? unit : " " + unit);
}
function chefkochUrl(name) { return "https://www.chefkoch.de/rs/s0/" + encodeURIComponent(name) + "/Rezepte.html"; }
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16);
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}
function applyAccentColor(key) {
  const hex = accentColors[key] || accentColors.blue;
  document.documentElement.style.setProperty("--blue", hex);
  document.documentElement.style.setProperty("--blue-bg", hexToRgba(hex, 0.12));
  colorRowEl.querySelectorAll(".color-swatch").forEach(function(btn){ btn.classList.toggle("selected", btn.dataset.color === key); });
}
function applyTheme(choice) {
  const themeChoice = choice === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", themeChoice);
  themeToggleEl.querySelectorAll(".tier-btn").forEach(function(btn){ btn.classList.toggle("active", btn.dataset.themeChoice === themeChoice); });
}

function updateFavoritesBadge() {
  const n = (profile.favorites || []).length;
  favoritesBadgeEl.textContent = n;
  favoritesBadgeEl.style.display = n ? "flex" : "none";
}

function renderFavoriteBtn(dish) {
  const isFav = profile.favorites.indexOf(dish.id) !== -1;
  favoriteBtnEl.textContent = isFav ? "❤️" : "🤍";
  favoriteBtnEl.classList.toggle("active", isFav);
  favoriteBtnEl.setAttribute("aria-pressed", isFav ? "true" : "false");
  favoriteBtnEl.setAttribute("aria-label", isFav ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen");
  favoriteBtnEl.style.display = "flex";
}

function toggleFavorite(ref) {
  const dish = dishByRef(ref);
  if (!dish) return;
  const idx = profile.favorites.indexOf(dish.id);
  if (idx === -1) { profile.favorites.push(dish.id); showToast("❤️ Zu Favoriten hinzugefügt"); }
  else { profile.favorites.splice(idx, 1); showToast("Favorit entfernt"); }
  saveProfile();
  updateFavoritesBadge();
  if (currentDish && currentDish.id === dish.id) renderFavoriteBtn(currentDish);
  if (favoritesOverlay.style.display === "flex") renderFavoritesSheet();
  refreshRecipeLibrary();
}

function normalizeRecipeSearchText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function getRecipeLibraryPool() {
  const query = normalizeRecipeSearchText(recipeLibraryState.query);
  const favoriteSet = new Set(profile.favorites || []);
  return dishes.filter(function(dish){
    if (recipeLibraryState.diet === "vegan" && dish.diet !== "vegan") return false;
    if (recipeLibraryState.diet === "vegetarisch" && dish.diet !== "vegetarisch" && dish.diet !== "vegan") return false;
    if (recipeLibraryState.time !== "egal" && dish.time !== recipeLibraryState.time) return false;
    if (recipeLibraryState.type !== "egal" && dish.type !== recipeLibraryState.type) return false;
    if (!query) return true;
    let searchable = dish._searchText;
    if (typeof searchable !== "string") {
      searchable = normalizeRecipeSearchText([dish.name].concat(dish.ingredients.map(function(id){ return ingredientVocab[id] ? ingredientVocab[id].label : id; })).join(" "));
      Object.defineProperty(dish, "_searchText", { value: searchable, writable: true, configurable: true });
    }
    return searchable.indexOf(query) !== -1;
  }).sort(function(a, b){
    const favoriteDifference = Number(favoriteSet.has(b.id)) - Number(favoriteSet.has(a.id));
    return favoriteDifference || a.name.localeCompare(b.name, "de");
  });
}

function renderRecipeLibrary() {
  if (!recipeLibraryGridEl || !profile) return;
  const renderKey = [recipeLibraryState.query, recipeLibraryState.diet, recipeLibraryState.time, recipeLibraryState.type, tier, (profile.favorites || []).join("\u0001")].join("\u0002");
  if (renderKey === recipeLibraryRenderKey && recipeLibraryGridEl.dataset.ready === "true") return;
  recipeLibraryRenderKey = renderKey;
  const pool = getRecipeLibraryPool();
  const accessibleCount = pool.filter(function(dish){ return !dish.premium || tier === "premium"; }).length;
  const favoriteSet = new Set(profile.favorites || []);
  recipeLibrarySummaryEl.textContent = pool.length + " Rezept" + (pool.length === 1 ? "" : "e") + " gefunden" +
    (tier === "free" && pool.length > accessibleCount ? " · " + (pool.length - accessibleCount) + " Premium" : "");
  recipeLibraryEmptyEl.style.display = pool.length ? "none" : "block";
  recipeLibraryGridEl.innerHTML = pool.map(function(dish){
    const locked = dish.premium && tier !== "premium";
    const favorite = favoriteSet.has(dish.id);
    const dietText = { alles: "Alles", vegetarisch: "Vegetarisch", vegan: "Vegan" }[dish.diet];
    const timeText = { schnell: "Schnell", normal: "Normal", aufwendig: "Aufwendig" }[dish.time];
    return '<button class="recipe-library-card' + (locked ? " locked" : "") + '" type="button" data-recipe-id="' + escapeHtml(dish.id) + '" aria-label="' + escapeHtml(dish.name + (locked ? ", Premium-Rezept" : ", Rezept öffnen")) + '">' +
      '<span class="recipe-library-fav" aria-hidden="true">' + (favorite ? "❤️" : "") + '</span>' +
      '<span class="recipe-library-emoji" aria-hidden="true">' + dish.emoji + '</span>' +
      '<span class="recipe-library-name">' + escapeHtml(dish.name) + '</span>' +
      '<span class="recipe-library-tags"><span class="recipe-library-tag">' + timeText + '</span><span class="recipe-library-tag">' + dietText + '</span>' +
      (dish.premium ? '<span class="recipe-library-tag premium">' + (locked ? "🔒 Premium" : "✨ Premium") + '</span>' : "") + '</span>' +
      '<span class="recipe-library-meta">' + escapeHtml(formatDuration(dish.minutes)) + ' · ca. ' + formatEuro(dishPricePerPortion(dish)) + '/Portion</span></button>';
  }).join("");
  recipeLibraryGridEl.dataset.ready = "true";
}

function refreshRecipeLibrary() {
  recipeLibraryRenderKey = "";
  if (panelRezepteEl && panelRezepteEl.classList.contains("active")) renderRecipeLibrary();
}

function renderFavoritesSheet() {
  const favs = profile.favorites || [];
  favoritesCountEl.textContent = favs.length;
  favoritesCountEl.style.display = favs.length ? "inline-block" : "none";
  if (favs.length === 0) {
    favoritesEmptyEl.style.display = "block";
    favoritesListEl.innerHTML = "";
    return;
  }
  favoritesEmptyEl.style.display = "none";
  favoritesListEl.innerHTML = favs.map(function(ref){
    const dish = dishByRef(ref);
    if (!dish) return "";
    return '<li class="favorite-item"><span class="fav-emoji">' + dish.emoji + '</span><button type="button" class="fav-name" data-name="' + escapeHtml(dish.id) + '">' + escapeHtml(dish.name) + '</button><button type="button" class="fav-remove" data-name="' + escapeHtml(dish.id) + '" aria-label="' + escapeHtml(dish.name) + ' aus Favoriten entfernen">✕</button></li>';
  }).join("");
}

favoritesListEl.addEventListener("click", function(event){
  const button = event.target.closest(".fav-name, .fav-remove");
  if (!button || !favoritesListEl.contains(button)) return;
  if (button.classList.contains("fav-remove")) {
    toggleFavorite(button.dataset.name);
    return;
  }
  closeAppSheet(favoritesOverlay, favoritesBtn, false);
  openRecipe(dishByRef(button.dataset.name), favoritesBtn);
});

function photoStorageKey(ownerId) { return "kochorakel-device-photos:" + (ownerId || "guest"); }
function accountCacheKey(userId) { return "kochorakel-account-cache:" + userId; }
function photoListKey(photos) {
  return (photos || []).slice(0, 20).map(function(photo){
    return [photo.id, photo.ts, (photo.dataUrl || "").length].join(":");
  }).join("|");
}
function profileWithoutPhotos(value) {
  const source = value || defaultProfile();
  return JSON.parse(JSON.stringify(Object.assign({}, source, { photos: [] })));
}
function loadDevicePhotos(ownerId) {
  try {
    const key = photoStorageKey(ownerId);
    const saved = localStorage.getItem(key);
    const photos = saved ? JSON.parse(saved) : [];
    savedPhotoKeys.set(key, photoListKey(photos));
    return photos;
  } catch (error) { return []; }
}
function saveDevicePhotos(ownerId, photos) {
  try {
    const key = photoStorageKey(ownerId);
    const limitedPhotos = (photos || []).slice(0, 20);
    const nextPhotoKey = photoListKey(limitedPhotos);
    if (savedPhotoKeys.get(key) === nextPhotoKey) return true;
    localStorage.setItem(key, JSON.stringify(limitedPhotos));
    savedPhotoKeys.set(key, nextPhotoKey);
    return true;
  } catch (error) { return false; }
}
function readAccountCache(userId) {
  try {
    const saved = localStorage.getItem(accountCacheKey(userId));
    return saved ? JSON.parse(saved) : null;
  } catch (error) { return null; }
}
function writeAccountCache(userId, snapshot, row, cloudUpdatedAt, dirty) {
  try {
    localStorage.setItem(accountCacheKey(userId), JSON.stringify({
      profile: profileWithoutPhotos(snapshot),
      profileRow: row || null,
      cloudUpdatedAt: cloudUpdatedAt || null,
      savedAt: new Date().toISOString(),
      dirty: !!dirty
    }));
    return true;
  } catch (error) { return false; }
}
function mergeUnique(left, right, keyFn) {
  const result = [], seen = new Set();
  (left || []).concat(right || []).forEach(function(item){
    const key = keyFn ? keyFn(item) : String(item);
    if (!seen.has(key)) { seen.add(key); result.push(item); }
  });
  return result;
}
function mergeProfiles(remoteValue, localValue) {
  const remote = normalizeProfile(remoteValue);
  const local = normalizeProfile(localValue);
  const merged = Object.assign({}, remote, local);
  merged.xp = Math.max(remote.xp, local.xp);
  merged.dishesSeen = mergeUnique(remote.dishesSeen, local.dishesSeen);
  merged.favorites = mergeUnique(remote.favorites, local.favorites);
  merged.pantryItems = mergeUnique(remote.pantryItems, local.pantryItems);
  merged.cookLog = mergeUnique(remote.cookLog, local.cookLog, function(entry){ return entry.id || (entry.ts + "|" + entry.name + "|" + entry.mode); });
  merged.recentPicks = mergeUnique(remote.recentPicks, local.recentPicks).slice(-8);
  merged.rewardedCartChecks = mergeUnique(remote.rewardedCartChecks, local.rewardedCartChecks);
  merged.rewardedCartCompletions = mergeUnique(remote.rewardedCartCompletions, local.rewardedCartCompletions);
  merged.rewardedCookEvents = mergeUnique(remote.rewardedCookEvents, local.rewardedCookEvents);
  merged.badgesUnlocked = mergeUnique(remote.badgesUnlocked, local.badgesUnlocked);
  merged.cartCompletions = Math.max(remote.cartCompletions, local.cartCompletions);
  merged.photos = local.photos;
  return normalizeProfile(merged);
}

async function loadGuestProfile() {
  let loaded = null;
  try {
    const saved = localStorage.getItem("kochorakel-guest-profile-v2") || localStorage.getItem("kochorakel-guest-profile") || localStorage.getItem("kochorakel-profile");
    if (saved) loaded = JSON.parse(saved);
  } catch (e) { loaded = null; }

  if (!loaded && window.storage && typeof window.storage.get === "function") {
    try {
      const legacy = await window.storage.get("kochorakel-profile", false);
      if (legacy && legacy.value) loaded = JSON.parse(legacy.value);
    } catch (e) {}
  }
  const legacyPhotos = loaded && Array.isArray(loaded.photos) ? loaded.photos : [];
  const devicePhotos = loadDevicePhotos("guest");
  if (loaded) loaded.photos = devicePhotos.length ? devicePhotos : legacyPhotos;
  const result = loaded ? normalizeProfile(loaded) : defaultProfile();
  if (!devicePhotos.length && result.photos.length) saveDevicePhotos("guest", result.photos);
  return result;
}

function hasMeaningfulProgress(candidate) {
  if (!candidate) return false;
  const defaults = defaultProfile();
  return candidate.xp > 0 ||
    (candidate.dishesSeen && candidate.dishesSeen.length > 0) ||
    (candidate.favorites && candidate.favorites.length > 0) ||
    (candidate.cookLog && candidate.cookLog.length > 0) ||
    (candidate.cartItems && candidate.cartItems.length > 0) ||
    (candidate.pantryItems && candidate.pantryItems.length > 0) ||
    (candidate.weekSelectedDays && candidate.weekSelectedDays.length > 0) ||
    typeof candidate.weekBudget === "number" ||
    candidate.peopleCount !== defaults.peopleCount ||
    candidate.accentColor !== defaults.accentColor ||
    candidate.appIcon !== defaults.appIcon ||
    candidate.theme !== defaults.theme ||
    Object.keys(candidate.weekPlan || {}).some(function(key){ return !!candidate.weekPlan[key]; });
}

async function loadCloudProfile(session) {
  const userId = session.user.id;
  accountLoadedFromCache = false;
  const profileResult = await supabaseClient
    .from("profiles")
    .select("id,email,display_name,role,is_premium,is_suspended")
    .eq("id", userId)
    .single();

  if (profileResult.error) throw profileResult.error;
  currentProfileRow = profileResult.data;

  if (currentProfileRow.is_suspended) {
    await supabaseClient.auth.signOut();
    currentSession = null;
    currentProfileRow = null;
    throw new Error("Dieses Konto wurde gesperrt.");
  }

  const dataResult = await supabaseClient
    .from("user_app_data")
    .select("data,updated_at")
    .eq("user_id", userId)
    .single();

  if (dataResult.error) throw dataResult.error;
  const cloudData = dataResult.data && dataResult.data.data;
  lastCloudUpdatedAt = dataResult.data && dataResult.data.updated_at || null;
  const cached = readAccountCache(userId);
  const devicePhotos = loadDevicePhotos(userId);
  const guestData = await loadGuestProfile();

  if (cached && cached.dirty && cached.profile) {
    profile = mergeProfiles(cloudData || defaultProfile(), cached.profile);
    accountLoadedFromCache = true;
  } else if (cloudData && Object.keys(cloudData).length > 0) {
    profile = normalizeProfile(cloudData);
  } else if (hasMeaningfulProgress(guestData)) {
    profile = normalizeProfile(guestData);
    await supabaseClient.from("user_app_data").upsert({
      user_id: userId,
      data: profileWithoutPhotos(profile),
      updated_at: new Date().toISOString()
    });
    showToast("Gastfortschritt ins Konto übernommen");
  } else {
    profile = defaultProfile();
  }

  const migratedPhotos = devicePhotos.length ? devicePhotos : profile.photos;
  profile.photos = normalizeProfile(Object.assign({}, profile, { photos: migratedPhotos })).photos;
  if (!devicePhotos.length && profile.photos.length) saveDevicePhotos(userId, profile.photos);
  writeAccountCache(userId, profile, currentProfileRow, lastCloudUpdatedAt, accountLoadedFromCache);

  tier = currentProfileRow.is_premium ? "premium" : "free";
}

async function loadProfile() {
  if (currentSession) {
    try {
      await loadCloudProfile(currentSession);
    } catch (error) {
      const cached = readAccountCache(currentSession.user.id);
      if (!cached || !cached.profile) throw error;
      currentProfileRow = cached.profileRow || { id: currentSession.user.id, email: currentSession.user.email || "", display_name: currentSession.user.email ? currentSession.user.email.split("@")[0] : "Kochorakel-Konto", role: "user", is_premium: false, is_suspended: false };
      profile = normalizeProfile(Object.assign({}, cached.profile, { photos: loadDevicePhotos(currentSession.user.id) }));
      lastCloudUpdatedAt = cached.cloudUpdatedAt || null;
      accountLoadedFromCache = true;
      tier = currentProfileRow.is_premium ? "premium" : "free";
      if (syncStateEl) syncStateEl.textContent = "Offline – Änderungen werden auf diesem Gerät gespeichert.";
    }
  } else {
    currentProfileRow = null;
    profile = await loadGuestProfile();
    tier = profile.localTier === "premium" ? "premium" : "free";
  }
}

async function saveProfile() {
  if (!profile) return;
  const snapshot = profileWithoutPhotos(profile);
  snapshot.photos = (profile.photos || []).slice();

  if (!currentSession) {
    try {
      if (!saveDevicePhotos("guest", snapshot.photos)) throw new Error("photo-storage");
      localStorage.setItem("kochorakel-guest-profile-v2", JSON.stringify(profileWithoutPhotos(snapshot)));
      return true;
    } catch (error) {
      if (helperText) helperText.textContent = "Lokales Speichern fehlgeschlagen – möglicherweise ist der Gerätespeicher voll.";
      return false;
    }
  }

  const userId = currentSession.user.id;
  const photosSaved = saveDevicePhotos(userId, snapshot.photos);
  const cacheSaved = writeAccountCache(userId, snapshot, currentProfileRow, lastCloudUpdatedAt, true);
  if (!photosSaved || !cacheSaved) {
    if (syncStateEl) syncStateEl.textContent = "Lokales Speichern fehlgeschlagen – Gerätespeicher prüfen.";
    return false;
  }
  const revision = ++saveRevision;
  if (!supabaseClient || navigator.onLine === false) {
    if (syncStateEl) syncStateEl.textContent = "Offline gespeichert – wird bei Internetverbindung synchronisiert.";
    return true;
  }
  if (syncStateEl) syncStateEl.textContent = "Speichert …";
  saveChain = saveChain.catch(function(){}).then(async function(){
    if (revision !== saveRevision) return true;
    let outgoing = profileWithoutPhotos(snapshot);
    const remoteResult = await supabaseClient.from("user_app_data").select("data,updated_at").eq("user_id", userId).maybeSingle();
    if (revision !== saveRevision) return true;
    if (!remoteResult.error && remoteResult.data && lastCloudUpdatedAt && remoteResult.data.updated_at !== lastCloudUpdatedAt) {
      outgoing = profileWithoutPhotos(mergeProfiles(remoteResult.data.data, snapshot));
      profile = mergeProfiles(remoteResult.data.data, profile);
    }
    const updatedAt = new Date().toISOString();
    const result = await supabaseClient.from("user_app_data").upsert({
      user_id: userId,
      data: outgoing,
      updated_at: updatedAt
    });
    if (result.error) {
      if (syncStateEl) syncStateEl.textContent = "Synchronisierung fehlgeschlagen.";
      throw result.error;
    }
    lastCloudUpdatedAt = updatedAt;
    accountLoadedFromCache = false;
    writeAccountCache(userId, profile, currentProfileRow, lastCloudUpdatedAt, revision !== saveRevision);
    if (syncStateEl) syncStateEl.textContent = "Mit der Cloud synchronisiert.";
    return true;
  }).catch(function(){
    if (syncStateEl) syncStateEl.textContent = "Synchronisierung fehlgeschlagen – Änderungen bleiben lokal gespeichert.";
    return false;
  });
  return saveChain;
}
function addXp(amount) { profile.xp += amount; }

function localDateKey(date) {
  const value = date || new Date();
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function isoWeekKey(date) {
  const value = date || new Date();
  const utc = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
  const dayNumber = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil((((utc - yearStart) / 86400000) + 1) / 7);
  return utc.getUTCFullYear() + "-W" + String(weekNumber).padStart(2, "0");
}

function claimProfileReward(listName, key, limit) {
  if (!Array.isArray(profile[listName])) profile[listName] = [];
  if (profile[listName].indexOf(key) !== -1) return false;
  profile[listName].push(key);
  if (profile[listName].length > limit) profile[listName] = profile[listName].slice(-limit);
  return true;
}

function markDishSeen(dish, notify) {
  if (!dish || profile.dishesSeen.indexOf(dish.id) !== -1) return false;
  profile.dishesSeen.push(dish.id);
  addXp(15);
  if (notify) showToast("+15 XP · Neu entdeckt: " + dish.name);
  return true;
}

function rewardCook(dish, photoDataUrl) {
  const dayKey = localDateKey(new Date());
  const rewardKey = dayKey + "|" + dish.id;
  const legacyRewardKey = dayKey + "|" + dish.name;
  if ((profile.rewardedCookEvents || []).indexOf(legacyRewardKey) !== -1) return 0;
  if (!claimProfileReward("rewardedCookEvents", rewardKey, 1000)) return 0;
  const amount = photoDataUrl ? 15 : 10;
  addXp(amount);
  return amount;
}

function getLevelInfo(xp) {
  let current = levels[0], idx = 0;
  for (let i = 0; i < levels.length; i++) { if (xp >= levels[i].min) { current = levels[i]; idx = i; } }
  const next = levels[idx + 1] || null;
  return { current: current, next: next, index: idx + 1 };
}

function renderXp() {
  const info = getLevelInfo(profile.xp);
  const levelText = "Lvl " + info.index + " · " + info.current.title;
  xpLevelEl.textContent = levelText;
  xpStripLabelEl.textContent = levelText;
  let pct, label;
  if (info.next) {
    const span = info.next.min - info.current.min;
    const progressed = profile.xp - info.current.min;
    pct = Math.max(0, Math.min(100, (progressed / span) * 100));
    label = profile.xp + " / " + info.next.min + " XP";
  } else { pct = 100; label = profile.xp + " XP · Max-Level"; }
  xpFillEl.style.width = pct + "%";
  xpStripFillEl.style.width = pct + "%";
  xpLabelEl.textContent = label;
}

function renderDex(force) {
  const cookedSet = distinctCookedNames();
  const seenSet = new Set(profile.dishesSeen);
  dexStatsEl.textContent = seenSet.size + "/" + dishes.length + " entdeckt · " + cookedSet.size + "/" + dishes.length + " gekocht";
  dexRenderDirty = true;
  if (!force && dexDetailsEl && !dexDetailsEl.open) return;
  dexGridEl.innerHTML = dishes.map(function(d){
    const seen = seenSet.has(d.id);
    const cooked = cookedSet.has(d.id);
    const locked = !seen && d.premium && tier !== "premium";
    const cls = cooked ? "cooked" : (seen ? "seen" : (locked ? "locked" : "unseen"));
    const content = (seen || cooked) ? d.emoji : (locked ? "🔒" : "?");
    const title = (seen || cooked) ? d.name : (locked ? d.name + " (Premium)" : "???");
    return '<div class="dex-cell ' + cls + '" title="' + title + '">' + content + "</div>";
  }).join("");
  dexRenderDirty = false;
}

function collectBadgeProgress() {
  const result = {};
  badgeDefs.forEach(function(badge){ result[badge.id] = badge.progress(); });
  return result;
}

function renderBadges(progressById) {
  tabBadgeCountEl.textContent = profile.badgesUnlocked.length + "/" + badgeDefs.length;
  badgeGridEl.innerHTML = badgeDefs.map(function(b){
    const unlocked = profile.badgesUnlocked.indexOf(b.id) !== -1;
    const premiumLocked = b.premium && tier !== "premium" && !unlocked;
    const cls = "badge-card" + (unlocked ? " unlocked" : "") + (premiumLocked ? " premium-locked" : "");
    const p = progressById ? progressById[b.id] : b.progress();
    let bottom;
    if (premiumLocked) {
      bottom = '<span class="badge-desc">🔒 Nur Premium</span>';
    } else if (unlocked) {
      bottom = '<span class="badge-desc">' + b.desc + "</span>";
    } else {
      const pct = p.target > 0 ? Math.max(0, Math.min(100, (p.current / p.target) * 100)) : 0;
      bottom = '<span class="badge-desc">' + b.desc + '</span><div class="badge-progress-track"><div class="badge-progress-fill" style="width:' + pct + '%;"></div></div><span class="badge-progress-label">' + p.current + "/" + p.target + "</span>";
    }
    return '<div class="' + cls + '"><span class="badge-icon" style="background:' + b.color + ';">' + b.icon + '</span><span class="badge-name">' + b.name + "</span>" + bottom + "</div>";
  }).join("");
}

function renderPhotoGallery(force) {
  if (!force && panelFortschrittEl && !panelFortschrittEl.classList.contains("active")) {
    galleryRenderDirty = true;
    return;
  }
  const photos = (profile && profile.photos) || [];
  const nextKey = tier + "|" + photos.map(function(photo){ return photo.id + ":" + photo.ts; }).join("|");
  if (!galleryRenderDirty && galleryRenderKey === nextKey) return;
  galleryRenderKey = nextKey;
  galleryRenderDirty = false;
  if (tier !== "premium") {
    galleryBodyEl.innerHTML = '<p class="locked-msg">🔒 Ab Premium verfügbar — öffne das Menü oben rechts, um Kochfotos zu sammeln.</p>';
    return;
  }
  if (photos.length === 0) { galleryBodyEl.innerHTML = '<p class="cart-empty">Noch keine Fotos. Bestätige ein Gericht mit Foto, dann erscheint es hier.</p>'; return; }
  galleryBodyEl.innerHTML = '<div class="gallery-grid">' + photos.map(function(p){
    return '<div class="gallery-item"><img src="' + p.dataUrl + '" alt="' + escapeHtml(p.name) + '" loading="lazy" decoding="async"><button class="gallery-delete" type="button" data-photo-id="' + escapeHtml(p.id) + '" aria-label="Foto von ' + escapeHtml(p.name) + ' löschen">✕</button><span>' + escapeHtml(p.name) + "</span></div>";
  }).join("") + '</div><p class="gallery-device-note">Fotos bleiben platzsparend auf diesem Gerät. Dein übriger Fortschritt wird mit dem Konto synchronisiert.</p>';
}

galleryBodyEl.addEventListener("click", function(event){
  const button = event.target.closest(".gallery-delete");
  if (!button || !galleryBodyEl.contains(button) || !window.confirm("Dieses Kochfoto löschen?")) return;
  profile.photos = profile.photos.filter(function(photo){ return photo.id !== button.dataset.photoId; });
  galleryRenderDirty = true;
  revokeInvalidBadges();
  afterProgressUpdate();
  showToast("Foto gelöscht");
});

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "xp-toast";
  t.textContent = msg;
  toastContainerEl.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add("show"); });
  setTimeout(function(){ t.classList.remove("show"); setTimeout(function(){ t.remove(); }, 300); }, 2600);
}

function checkBadges(progressById) {
  const newlyUnlocked = [];
  badgeDefs.forEach(function(b){
    const p = progressById ? progressById[b.id] : b.progress();
    if (profile.badgesUnlocked.indexOf(b.id) === -1 && p.current >= p.target) {
      profile.badgesUnlocked.push(b.id);
      newlyUnlocked.push(b);
    }
  });
  if (newlyUnlocked.length) {
    profile.xp += 25 * newlyUnlocked.length;
    newlyUnlocked.forEach(function(b){ showToast("🏅 Abzeichen freigeschaltet: " + b.name); });
  }
}

function revokeInvalidBadges() {
  const invalid = profile.badgesUnlocked.filter(function(id){
    const badge = badgeDefs.find(function(item){ return item.id === id; });
    if (!badge) return true;
    const progress = badge.progress();
    return progress.current < progress.target;
  });
  if (!invalid.length) return;
  profile.badgesUnlocked = profile.badgesUnlocked.filter(function(id){ return invalid.indexOf(id) === -1; });
  profile.xp = Math.max(0, profile.xp - invalid.length * 25);
}

function afterProgressUpdate() {
  const badgeProgress = collectBadgeProgress();
  checkBadges(badgeProgress);
  renderXp();
  renderDex();
  renderBadges(badgeProgress);
  renderPhotoGallery();
  saveProfile();
}

function computePool(filterState, ignoreTier) {
  const ingredientMode = filterState.ingredientMode || "egal";
  const pool = dishes.filter(function(d){
    if (filterState.time !== "egal" && d.time !== filterState.time) return false;
    if (filterState.diet === "vegan" && d.diet !== "vegan") return false;
    if (filterState.diet === "vegetarisch" && !(d.diet === "vegetarisch" || d.diet === "vegan")) return false;
    if (filterState.type !== "egal" && d.type !== filterState.type) return false;
    if (ingredientMode !== "egal") {
      const missing = d.ingredients.filter(function(id){ return !have.has(id); }).length;
      if (ingredientMode === "strict" && missing !== 0) return false;
      if (ingredientMode === "buy2" && missing > 2) return false;
      if (ingredientMode === "reste" && (have.size === 0 || missing > 2 || missing === d.ingredients.length)) return false;
    }
    if (!ignoreTier && d.premium && tier !== "premium") return false;
    return true;
  });
  if (ingredientMode === "reste") {
    pool.sort(function(a, b){
      const availableA = a.ingredients.filter(function(id){ return have.has(id); }).length;
      const availableB = b.ingredients.filter(function(id){ return have.has(id); }).length;
      const ratioDifference = (availableB / b.ingredients.length) - (availableA / a.ingredients.length);
      return ratioDifference || availableB - availableA || a.name.localeCompare(b.name, "de");
    });
  }
  return pool;
}
function getPool(ignoreTier) { return computePool(state, ignoreTier); }
function getWeekPool(ignoreTier) { return computePool(weekFilterState, ignoreTier); }

function updatePoolCount() {
  const fullPool = getPool(true);
  const pool = tier === "free" ? fullPool.filter(function(dish){ return !dish.premium; }) : fullPool;
  if (pool.length === 0) {
    poolCountEl.style.display = "none";
    if (tier === "free" && fullPool.length > 0) {
      emptyMsgEl.textContent = "Keine Treffer in Free – mit Premium gäbe es " + fullPool.length + " Treffer für diese Filter.";
    } else if (state.ingredientMode === "reste" && have.size === 0) {
      emptyMsgEl.textContent = "Markiere zuerst Zutaten, die du verwerten möchtest.";
    } else if (state.ingredientMode !== "egal" && have.size === 0) {
      emptyMsgEl.textContent = "Wähl erst ein paar Zutaten aus, die du zu Hause hast.";
    } else {
      emptyMsgEl.textContent = "Keine Treffer für diese Kombi – lockere die Filter ein bisschen.";
    }
    emptyMsgEl.style.display = "block";
    rollBtn.disabled = true;
  } else {
    emptyMsgEl.style.display = "none";
    poolCountEl.style.display = "block";
    let html = "<strong>" + pool.length + "</strong> Gericht" + (pool.length === 1 ? "" : "e") + " im Topf";
    if (tier === "free" && fullPool.length > pool.length) html += ' <span class="pool-extra">+' + (fullPool.length - pool.length) + " mit Premium</span>";
    poolCountEl.innerHTML = html;
    rollBtn.disabled = !profileLoaded;
  }
  return pool;
}

function updateWeekPoolCount() {
  const el = document.getElementById("weekPoolCount");
  if (!el) return;
  const fullPool = getWeekPool(true);
  const pool = tier === "free" ? fullPool.filter(function(dish){ return !dish.premium; }) : fullPool;
  if (pool.length === 0) {
    el.style.color = "var(--red)";
    el.textContent = (tier === "free" && fullPool.length > 0)
      ? "Keine Treffer in Free – mit Premium gäbe es " + fullPool.length + " Treffer für diese Filter."
      : "Keine Treffer für diese Kombi – lockere die Filter ein bisschen.";
  } else {
    el.style.color = "";
    let html = "<strong>" + pool.length + "</strong> Gericht" + (pool.length === 1 ? "" : "e") + " im Topf";
    if (tier === "free" && fullPool.length > pool.length) html += ' <span class="pool-extra">+' + (fullPool.length - pool.length) + " mit Premium</span>";
    el.innerHTML = html;
  }
}

function renderTags(dish) {
  const tagTime = { schnell: "Schnell", normal: "Normal", aufwendig: "Aufwendig" }[dish.time];
  const tagDiet = { alles: "Alles", vegetarisch: "Vegetarisch", vegan: "Vegan" }[dish.diet];
  const tagType = { herzhaft: "Herzhaft", "süß": "Süß" }[dish.type];
  let html = '<span class="tag">' + tagTime + "</span>" +
    '<span class="tag' + (dish.diet !== "alles" ? " veg" : "") + '">' + tagDiet + "</span>" +
    '<span class="tag">' + tagType + "</span>";
  if (dish.premium) html += '<span class="tag premium">✨ Premium</span>';
  reelTags.innerHTML = html;
}

function renderPortionPrice(dish) {
  portionPriceEl.textContent = "≈ " + formatEuro(dishPricePerPortion(dish)) + " pro Portion";
}

function formatDuration(minutes) {
  const value = Math.max(0, Math.round(Number(minutes) || 0));
  if (value >= 1440) {
    const days = Math.floor(value / 1440);
    const hours = Math.round((value % 1440) / 60);
    return days + " " + (days === 1 ? "Tag" : "Tage") + (hours ? " " + hours + " Std." : "");
  }
  if (value >= 60) {
    const hours = Math.floor(value / 60);
    const rest = value % 60;
    return hours + " Std." + (rest ? " " + rest + " Min." : "");
  }
  return value + " Min.";
}

function recipeTimeText(dish) {
  if (typeof dish.minutes === "number") return "ca. " + formatDuration(dish.minutes);
  return { schnell: "ca. 20 Min.", normal: "ca. 40 Min.", aufwendig: "ca. 75 Min." }[dish.time] || "Nach Aufwand";
}

function roundedRecipeQuantity(amount, unit) {
  if (unit === "Stück" || unit === "Zehen" || unit === "Scheiben" || unit === "Päckchen" || unit === "Blätter") return Math.max(1, Math.round(amount));
  if (unit === "EL" || unit === "TL") return Math.round(amount * 2) / 2;
  if (amount < 100) return Math.round(amount / 5) * 5;
  return Math.round(amount / 10) * 10;
}

function scaledRecipeQuantity(dish, id, portions) {
  const detail = recipeBaseQuantity(dish, id);
  return { amount: roundedRecipeQuantity(detail.amount * (portions / 4), detail.unit), unit: detail.unit };
}

function formatQuantity(amount, unit) {
  return String(Math.round(amount * 100) / 100).replace(".", ",") + (unit === "g" || unit === "ml" ? unit : " " + unit);
}

function formatRecipeQuantity(dish, id) {
  const quantity = scaledRecipeQuantity(dish, id, recipePeopleCountValue);
  return formatQuantity(quantity.amount, quantity.unit);
}

function naturalList(values) {
  if (values.length < 2) return values[0] || "";
  return values.slice(0, -1).join(", ") + " und " + values[values.length - 1];
}

function fallbackIngredientLabels(dish, pattern) {
  return dish.ingredients.filter(function(id){
    const meta = ingredientVocab[id];
    return pattern.test((id + " " + meta.label).toLowerCase());
  }).map(function(id){ return ingredientVocab[id].label; });
}

function fallbackRecipeSteps(dish) {
  const name = dish.name.toLowerCase();
  const ingredientNames = dish.ingredients.map(function(id){ return ingredientVocab[id].label; });
  const bases = fallbackIngredientLabels(dish, /nudel|spaghetti|reis|kartoffel|couscous|bulgur|brot|toast|tortilla|gnocchi|polenta|quinoa|mehl/);
  const proteins = fallbackIngredientLabels(dish, /hack|hähn|haehn|rind|schwein|lamm|fisch|lachs|thunfisch|garnele|tofu|ei(er)?\b|bohne|linse|kichererbse/);
  const vegetables = fallbackIngredientLabels(dish, /tomate|paprika|zucchini|aubergine|brokkoli|blumenkohl|karotte|möhre|spinat|pilz|gurke|kohl|mais|erbs|kürbis|kuerbis|lauch|sellerie|salat/);
  const baseText = naturalList(bases);
  const proteinText = naturalList(proteins);
  const vegetableText = naturalList(vegetables);

  if (/salat|bowl|tzatziki|tabouleh|panzanella|gazpacho/.test(name)) {
    const steps = ["Alle Zutaten waschen, abtropfen lassen und bereitstellen."];
    if (baseText) steps.push(baseText + " nach Packungsangabe garen und etwas abkühlen lassen.");
    if (proteinText) steps.push(proteinText + " vollständig garen beziehungsweise abtropfen lassen.");
    steps.push((vegetableText || "Gemüse und übrige Zutaten") + " mundgerecht schneiden, ein passendes Dressing anrühren und alles frisch anrichten.");
    return steps;
  }
  if (/toast|bruschetta|sandwich/.test(name)) {
    return [
      (baseText || "Brot") + " vorbereiten und leicht rösten.",
      naturalList(ingredientNames.filter(function(label){ return bases.indexOf(label) === -1; })) + " schneiden beziehungsweise abtropfen lassen.",
      "Brot belegen, würzen und je nach Gericht in Pfanne oder Ofen goldbraun fertig garen.",
      "Kurz abkühlen lassen und direkt servieren."
    ];
  }
  if (/suppe|eintopf|chili|curry|gulasch|ragout|pho|ramen|minestrone|tajine/.test(name)) {
    return [
      "Zutaten vorbereiten: " + naturalList(ingredientNames) + ".",
      (vegetableText || "Gemüse") + (proteinText ? " und " + proteinText : "") + " portionsweise anbraten.",
      "Flüssigkeit beziehungsweise Sauce zugeben und bei kleiner Hitze garen, bis alle Zutaten weich und vollständig durchgegart sind.",
      (baseText ? baseText + " passend dazu garen. " : "") + "Alles abschmecken, kurz ziehen lassen und heiß servieren."
    ];
  }
  if (dish.type === "süß") {
    if (/pfannkuchen|pancake|waffel|crêpe|crepe|churro|kaiserschmarrn|krapfen/.test(name)) {
      return [
        "Alle Zutaten abwiegen und zu einem glatten Teig verrühren.",
        "Teig kurz ruhen lassen und Pfanne, Waffeleisen oder Frittierfett passend zum Gericht erhitzen.",
        "Portionsweise goldbraun ausbacken und dabei vollständig durchgaren.",
        "Kurz abtropfen beziehungsweise ruhen lassen und servieren."
      ];
    }
    if (/tiramisu|mousse|panna cotta/.test(name)) {
      return [
        "Alle Zutaten abwiegen und die Form oder Dessertgläser bereitstellen.",
        "Creme beziehungsweise Masse glatt rühren und die übrigen Bestandteile vorbereiten.",
        "Schichtweise einfüllen oder portionieren.",
        "Mindestens zwei Stunden kalt stellen und gut gekühlt servieren."
      ];
    }
    if (/pudding|milchreis|zabaione|crème brûlée|creme brulee|crema catalana/.test(name)) {
      return [
        "Alle Zutaten abwiegen und einen passenden Topf bereitstellen.",
        "Flüssige Zutaten langsam erhitzen und die übrigen Zutaten klümpchenfrei einrühren.",
        "Unter regelmäßigem Rühren bis zur gewünschten Konsistenz garen.",
        "Portionieren, kurz ruhen oder vollständig kühlen lassen und servieren."
      ];
    }
    return [
      "Backofen passend zum Gericht vorheizen, alle Zutaten abwiegen und die Form vorbereiten.",
      "Trockene und flüssige Zutaten zunächst getrennt, dann zu einer gleichmäßigen Masse vermengen.",
      "In die Form geben und vollständig backen; gegen Ende die Garprobe machen.",
      "Vor dem Anschneiden ausreichend abkühlen lassen."
    ];
  }
  if (/auflauf|lasagne|gratin|pizza|quiche|pie|braten|ofengemüse|gebacken/.test(name)) {
    return [
      "Backofen auf etwa 190 °C Ober-/Unterhitze vorheizen und alle Zutaten vorbereiten.",
      (vegetableText || "Gemüse") + (proteinText ? " und " + proteinText : "") + " je nach Garzeit kurz vorgaren oder anbraten.",
      "Alles in eine geeignete Form geben, würzen und nach Rezept bedecken beziehungsweise belegen.",
      "Im Ofen vollständig garen und vor dem Servieren einige Minuten ruhen lassen."
    ];
  }

  const steps = ["Alle Zutaten vorbereiten: " + naturalList(ingredientNames) + "."];
  if (baseText) steps.push(baseText + " nach Packungsangabe beziehungsweise bis zur gewünschten Garstufe zubereiten.");
  if (vegetableText || proteinText) steps.push(naturalList([vegetableText, proteinText].filter(Boolean)) + " in Pfanne oder Topf vollständig garen.");
  steps.push("Alle Bestandteile zusammenführen, sorgfältig abschmecken und heiß servieren.");
  return steps;
}

function recipeSource(dish) {
  return "recipe:" + dish.id;
}

function renderRecipeSheet() {
  if (!currentRecipeDish) return;
  const dish = currentRecipeDish;
  const dietText = { alles: "Mit Fleisch/Fisch", vegetarisch: "Vegetarisch", vegan: "Vegan" }[dish.diet] || dish.diet;
  recipeSheetTitle.textContent = dish.name;
  recipeEmoji.textContent = dish.emoji;
  const isFavorite = profile.favorites.indexOf(dish.id) !== -1;
  recipeFavoriteBtn.textContent = isFavorite ? "♥" : "♡";
  recipeFavoriteBtn.classList.toggle("active", isFavorite);
  recipeFavoriteBtn.setAttribute("aria-pressed", isFavorite ? "true" : "false");
  recipeFavoriteBtn.setAttribute("aria-label", isFavorite ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen");
  recipeMeta.innerHTML = '<span class="recipe-meta-pill">⏱ ' + recipeTimeText(dish) + '</span>' +
    '<span class="recipe-meta-pill">↗ ' + escapeHtml(dish.difficulty) + '</span>' +
    '<span class="recipe-meta-pill">≈ ' + formatEuro(dishPricePerPortion(dish)) + '/Portion</span>' +
    '<span class="recipe-meta-secondary">' + formatDuration(dish.prepMinutes) + ' Arbeitszeit · ' + formatDuration(dish.cookMinutes) + ' Gar-/Wartezeit' + (dish.restMinutes ? ' · ' + formatDuration(dish.restMinutes) + ' Ruhezeit' : '') + ' · ' + escapeHtml(dietText) + (dish.premium ? ' · ✨ Premium' : '') + '</span>' +
    '<span class="recipe-meta-secondary recipe-allergens">' + (dish.allergens.length ? 'Enthält: ' + escapeHtml(dish.allergens.map(function(id){ return ({ gluten:"Gluten", milch:"Milch", laktose:"Laktose", eier:"Eier", nuesse:"Nüsse", erdnuesse:"Erdnüsse", soja:"Soja", fisch:"Fisch", schalentiere:"Schalentiere", sesam:"Sesam", sellerie:"Sellerie", senf:"Senf" })[id] || id; }).join(', ')) : 'Keine der hinterlegten Hauptallergene erkannt') + '</span>';
  recipePeopleCount.textContent = recipePeopleCountValue + (recipePeopleCountValue === 1 ? " Portion" : " Portionen");
  recipePeopleMinus.disabled = recipePeopleCountValue <= 1;
  recipePeoplePlus.disabled = recipePeopleCountValue >= 12;

  const availableCount = dish.ingredients.filter(function(id){ return have.has(id); }).length;
  recipeIngredientSummary.textContent = availableCount + " von " + dish.ingredients.length + " vorhanden";
  recipeIngredientList.innerHTML = dish.ingredients.map(function(id) {
    const available = have.has(id);
    return '<li class="recipe-ingredient-item' + (available ? " available" : "") + '">' +
      '<span class="recipe-ingredient-check" aria-label="' + (available ? "Vorhanden" : "Fehlt") + '">' + (available ? "✓" : "") + '</span>' +
      '<span class="recipe-ingredient-name">' + escapeHtml(ingredientVocab[id].label) + '</span>' +
      '<span class="recipe-ingredient-amount">' + escapeHtml(formatRecipeQuantity(dish, id)) + '</span></li>';
  }).join("");

  const steps = dish.steps || fallbackRecipeSteps(dish);
  recipeSteps.innerHTML = steps.map(function(step, index){
    const timerMinutes = dish.stepTimers && dish.stepTimers[index];
    const duration = timerMinutes ? '<span class="recipe-step-time">⏱ ' + escapeHtml(formatDuration(timerMinutes)) + '</span>' : '';
    return "<li>" + escapeHtml(step) + (duration ? "<br>" + duration : "") + "</li>";
  }).join("");
  recipeNote.textContent = "Tipp: " + dish.tip + " Mengen sind Richtwerte; Salz, Pfeffer und Wasser zählen zum Grundvorrat. Allergenangaben aus Produktverpackungen gehen immer vor.";

  const missing = dish.ingredients.filter(function(id){ return !have.has(id); });
  const source = recipeSource(dish);
  const toAdd = missing.filter(function(id){ return cartSourceNeedsUpdate(id, source, dish, recipePeopleCountValue); });
  const updatingCart = missing.some(function(id){ return cartHasSource(id, source); });
  recipeAddMissing.disabled = toAdd.length === 0;
  if (missing.length === 0) recipeAddMissing.textContent = "Alles vorhanden ✓";
  else if (toAdd.length === 0) recipeAddMissing.textContent = "Im Warenkorb ✓";
  else if (updatingCart) recipeAddMissing.textContent = "🛒 Warenkorb aktualisieren (" + toAdd.length + ")";
  else recipeAddMissing.textContent = "🛒 " + toAdd.length + (toAdd.length === 1 ? " Zutat hinzufügen" : " Zutaten hinzufügen");
  recipeExternalLink.href = chefkochUrl(dish.name);
}

let lockedPageScrollY = 0;
const sheetReturnFocus = new WeakMap();

function lockPageScroll() {
  if (document.body.classList.contains("overlay-scroll-locked")) return;
  lockedPageScrollY = window.scrollY || window.pageYOffset || 0;
  document.body.style.top = "-" + lockedPageScrollY + "px";
  document.body.classList.add("overlay-scroll-locked");
}

function unlockPageScroll() {
  if (!document.body.classList.contains("overlay-scroll-locked")) return;
  document.body.classList.remove("overlay-scroll-locked");
  document.body.style.top = "";
  window.scrollTo(0, lockedPageScrollY);
}

function setAppModalState(active) {
  const app = document.querySelector(".app");
  if (!app) return;
  if (active) {
    app.setAttribute("inert", "");
    app.setAttribute("aria-hidden", "true");
  } else {
    app.removeAttribute("inert");
    app.removeAttribute("aria-hidden");
  }
}

function openAppSheet(overlay, closeButton, trigger) {
  sheetReturnFocus.set(overlay, trigger || document.activeElement);
  setAppModalState(true);
  lockPageScroll();
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
  closeButton.focus({ preventScroll: true });
}

function closeAppSheet(overlay, fallback, restoreFocus) {
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
  setAppModalState(false);
  unlockPageScroll();
  const target = sheetReturnFocus.get(overlay) || fallback;
  sheetReturnFocus.delete(overlay);
  if (restoreFocus === false) return;
  if (target && document.contains(target) && target.offsetParent !== null) target.focus({ preventScroll: true });
}

function trapAppSheetFocus(event, overlay, closeHandler) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeHandler();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = Array.from(overlay.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter(function(el){
    return el.offsetParent !== null;
  });
  if (focusable.length === 0) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openRecipe(dish, trigger) {
  if (!dish) return;
  recipeReturnFocus = trigger || document.activeElement;
  recipePeopleCountValue = peopleCount;
  currentRecipeDish = dish;
  renderRecipeSheet();
  const app = document.querySelector(".app");
  if (app) {
    app.setAttribute("inert", "");
    app.setAttribute("aria-hidden", "true");
  }
  document.body.classList.add("recipe-modal-open");
  lockPageScroll();
  recipeOverlay.style.display = "flex";
  recipeOverlay.setAttribute("aria-hidden", "false");
  recipeClose.focus({ preventScroll: true });
  requestAnimationFrame(function(){ recipeClose.focus({ preventScroll: true }); });
}

function closeRecipe() {
  recipeOverlay.style.display = "none";
  recipeOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("recipe-modal-open");
  unlockPageScroll();
  const app = document.querySelector(".app");
  if (app) {
    app.removeAttribute("inert");
    app.removeAttribute("aria-hidden");
  }
  currentRecipeDish = null;
  const target = recipeReturnFocus;
  recipeReturnFocus = null;
  if (target && document.contains(target) && target.offsetParent !== null) target.focus();
  else if (recipeLink.offsetParent !== null) recipeLink.focus();
  else favoritesBtn.focus();
}

function updateRecipePortions(delta) {
  recipePeopleCountValue = Math.max(1, Math.min(12, recipePeopleCountValue + delta));
  renderRecipeSheet();
}

function formatCookingTimer(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const rest = safe % 60;
  if (hours > 0) return hours + ":" + String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
  return String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
}

function stopCookingTimer() {
  if (cookingTimerInterval) clearInterval(cookingTimerInterval);
  cookingTimerInterval = null;
  cookingTimerRunning = false;
  cookingTimerEnd = 0;
}

function stopDetachedCookingTimerLoop() {
  if (detachedCookingTimerInterval) clearInterval(detachedCookingTimerInterval);
  detachedCookingTimerInterval = null;
}

function saveDetachedCookingTimers() {
  try {
    localStorage.setItem(ACTIVE_TIMERS_STORAGE_KEY, JSON.stringify(detachedCookingTimers));
  } catch (error) {}
}

function loadTimerDockPosition() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TIMER_DOCK_POSITION_KEY) || "null");
    if (parsed && Number.isFinite(parsed.x) && Number.isFinite(parsed.y)) {
      timerDockPosition = { x: Math.max(0, Math.min(1, parsed.x)), y: Math.max(0, Math.min(1, parsed.y)) };
    }
  } catch (error) {
    timerDockPosition = null;
  }
}

function timerDockBounds() {
  const rect = cookingActiveTimers.getBoundingClientRect();
  const viewportWidth = window.innerWidth || 390;
  const viewportHeight = window.innerHeight || 844;
  const width = rect.width || Math.min(viewportWidth - 24, Math.max(76, detachedCookingTimers.length * 85));
  const height = rect.height || 86;
  const minLeft = 8;
  const maxLeft = Math.max(minLeft, viewportWidth - width - 8);
  const minTop = 72;
  const maxTop = Math.max(minTop, Math.floor(viewportHeight / 3) - height - 8);
  return { minLeft: minLeft, maxLeft: maxLeft, minTop: minTop, maxTop: maxTop };
}

function applyTimerDockPosition() {
  if (!timerDockPosition || !detachedCookingTimers.length) return;
  const bounds = timerDockBounds();
  cookingActiveTimers.style.left = (bounds.minLeft + timerDockPosition.x * (bounds.maxLeft - bounds.minLeft)) + "px";
  cookingActiveTimers.style.top = (bounds.minTop + timerDockPosition.y * (bounds.maxTop - bounds.minTop)) + "px";
  cookingActiveTimers.style.transform = "none";
}

function saveTimerDockPosition(left, top) {
  const bounds = timerDockBounds();
  timerDockPosition = {
    x: bounds.maxLeft === bounds.minLeft ? 0 : (left - bounds.minLeft) / (bounds.maxLeft - bounds.minLeft),
    y: bounds.maxTop === bounds.minTop ? 0 : (top - bounds.minTop) / (bounds.maxTop - bounds.minTop)
  };
  timerDockPosition.x = Math.max(0, Math.min(1, timerDockPosition.x));
  timerDockPosition.y = Math.max(0, Math.min(1, timerDockPosition.y));
  try { localStorage.setItem(TIMER_DOCK_POSITION_KEY, JSON.stringify(timerDockPosition)); } catch (error) {}
}

function restoreDetachedCookingTimers() {
  loadTimerDockPosition();
  try {
    const parsed = JSON.parse(localStorage.getItem(ACTIVE_TIMERS_STORAGE_KEY) || "[]");
    const now = Date.now();
    detachedCookingTimers = (Array.isArray(parsed) ? parsed : []).filter(function(timer){
      return timer && typeof timer.id === "string" && dishByRef(timer.recipeId) && Number.isFinite(timer.stepIndex) && Number.isFinite(timer.end) && timer.end > now;
    }).map(function(timer){
      const dish = dishByRef(timer.recipeId);
      return {
        id: timer.id.slice(0, 120),
        recipeId: dish.id,
        recipeName: dish.name,
        emoji: dish.emoji,
        stepIndex: Math.max(0, Math.min(dish.steps.length - 1, Math.floor(timer.stepIndex))),
        end: timer.end,
        initialSeconds: Math.max(1, Number(timer.initialSeconds) || Math.ceil((timer.end - now) / 1000))
      };
    });
  } catch (error) {
    detachedCookingTimers = [];
  }
  if (detachedCookingTimers.length && !detachedCookingTimerInterval) detachedCookingTimerInterval = setInterval(updateDetachedCookingTimers, 1000);
  renderDetachedCookingTimers();
}

function renderDetachedCookingTimers() {
  if (!cookingActiveTimers) return;
  if (!detachedCookingTimers.length) {
    cookingActiveTimers.style.display = "none";
    cookingActiveTimers.innerHTML = "";
    return;
  }
  if (timerDragState) return;
  const now = Date.now();
  cookingActiveTimers.style.display = "flex";
  cookingActiveTimers.innerHTML = detachedCookingTimers.map(function(timer){
    const remaining = Math.max(0, Math.ceil((timer.end - now) / 1000));
    const progress = Math.max(0, Math.min(100, (remaining / Math.max(1, timer.initialSeconds)) * 100));
    return '<div class="cooking-active-timer" data-timer-id="' + escapeHtml(timer.id) + '" style="--timer-progress:' + progress + '%" role="button" tabindex="0" aria-label="' + escapeHtml(timer.recipeName) + ', Schritt ' + (timer.stepIndex + 1) + ', noch ' + formatCookingTimer(remaining) + '. Antippen zum Öffnen oder ziehen zum Verschieben.">' +
      '<span class="cooking-active-timer-ring"><span class="cooking-active-timer-emoji" aria-hidden="true">' + timer.emoji + '</span><span class="cooking-active-timer-step">' + (timer.stepIndex + 1) + '</span></span>' +
      '<span class="cooking-active-timer-time">' + formatCookingTimer(remaining) + '</span>' +
      '<button class="cooking-active-timer-cancel" type="button" aria-label="Timer aus ' + escapeHtml(timer.recipeName) + ' beenden">✕</button></div>';
  }).join("");
  applyTimerDockPosition();
}

cookingActiveTimers.addEventListener("click", function(event){
  const button = event.target.closest(".cooking-active-timer-cancel");
  const bubble = event.target.closest(".cooking-active-timer");
  if (!bubble || !cookingActiveTimers.contains(bubble)) return;
  if (Date.now() < suppressTimerBubbleClickUntil) return;
  if (button) {
    event.stopPropagation();
    detachedCookingTimers = detachedCookingTimers.filter(function(timer){ return timer.id !== bubble.dataset.timerId; });
    if (!detachedCookingTimers.length) stopDetachedCookingTimerLoop();
    saveDetachedCookingTimers();
    renderDetachedCookingTimers();
    return;
  }
  openDetachedCookingTimer(bubble.dataset.timerId);
});

cookingActiveTimers.addEventListener("keydown", function(event){
  if (event.key !== "Enter" && event.key !== " ") return;
  const bubble = event.target.closest(".cooking-active-timer");
  if (!bubble || event.target.closest(".cooking-active-timer-cancel")) return;
  event.preventDefault();
  openDetachedCookingTimer(bubble.dataset.timerId);
});

cookingActiveTimers.addEventListener("pointerdown", function(event){
  const bubble = event.target.closest(".cooking-active-timer");
  if (!bubble || event.target.closest(".cooking-active-timer-cancel")) return;
  const dockRect = cookingActiveTimers.getBoundingClientRect();
  timerDragState = {
    bubble: bubble,
    pointerId: event.pointerId,
    pending: true,
    startX: event.clientX,
    startY: event.clientY,
    startLeft: dockRect.left,
    startTop: dockRect.top
  };
  try { bubble.setPointerCapture(event.pointerId); } catch (error) {}
});

cookingActiveTimers.addEventListener("pointermove", function(event){
  if (!timerDragState || timerDragState.pointerId !== event.pointerId) return;
  if (timerDragState.pending) {
    if (Math.hypot(event.clientX - timerDragState.startX, event.clientY - timerDragState.startY) <= 6) return;
    timerDragState.pending = false;
    timerDragState.bubble.classList.add("dragging");
    cookingActiveTimers.classList.add("dragging");
    suppressTimerBubbleClickUntil = Date.now() + 500;
    if (navigator.vibrate) navigator.vibrate(20);
  }
  event.preventDefault();
  const bounds = timerDockBounds();
  const left = Math.max(bounds.minLeft, Math.min(bounds.maxLeft, timerDragState.startLeft + event.clientX - timerDragState.startX));
  const top = Math.max(bounds.minTop, Math.min(bounds.maxTop, timerDragState.startTop + event.clientY - timerDragState.startY));
  cookingActiveTimers.style.left = left + "px";
  cookingActiveTimers.style.top = top + "px";
  cookingActiveTimers.style.transform = "none";
});

function finishTimerBubbleDrag(event) {
  if (!timerDragState || timerDragState.pointerId !== event.pointerId) return;
  if (!timerDragState.pending) {
    timerDragState.bubble.classList.remove("dragging");
    cookingActiveTimers.classList.remove("dragging");
    const rect = cookingActiveTimers.getBoundingClientRect();
    saveTimerDockPosition(rect.left, rect.top);
    suppressTimerBubbleClickUntil = Date.now() + 300;
  }
  timerDragState = null;
  renderDetachedCookingTimers();
}
cookingActiveTimers.addEventListener("pointerup", finishTimerBubbleDrag);
cookingActiveTimers.addEventListener("pointercancel", finishTimerBubbleDrag);

function updateDetachedCookingTimers() {
  const now = Date.now();
  const finished = detachedCookingTimers.filter(function(timer){ return timer.end <= now; });
  if (finished.length) {
    detachedCookingTimers = detachedCookingTimers.filter(function(timer){ return timer.end > now; });
    finished.forEach(function(timer){ showToast("⏱️ Timer aus Schritt " + (timer.stepIndex + 1) + " ist fertig"); });
    if (navigator.vibrate) navigator.vibrate([180, 100, 180]);
  }
  if (!detachedCookingTimers.length) stopDetachedCookingTimerLoop();
  saveDetachedCookingTimers();
  renderDetachedCookingTimers();
}

function detachRunningCookingTimer() {
  if (!cookingTimerRunning) return;
  const remaining = Math.max(0, Math.ceil((cookingTimerEnd - Date.now()) / 1000));
  if (remaining > 0) {
    detachedCookingTimers = detachedCookingTimers.filter(function(timer){ return timer.recipeId !== cookingDish.id || timer.stepIndex !== cookingTimerStepIndex; });
    detachedCookingTimers.push({
      id: "timer-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      recipeId: cookingDish.id,
      recipeName: cookingDish.name,
      emoji: cookingDish.emoji,
      stepIndex: cookingTimerStepIndex,
      end: cookingTimerEnd,
      initialSeconds: cookingStepSeconds(cookingTimerStepIndex)
    });
  }
  stopCookingTimer();
  cookingTimerRemaining = 0;
  if (detachedCookingTimers.length && !detachedCookingTimerInterval) {
    detachedCookingTimerInterval = setInterval(updateDetachedCookingTimers, 1000);
  }
  saveDetachedCookingTimers();
  renderDetachedCookingTimers();
}

function cookingStepSeconds(stepIndex) {
  if (!cookingDish) return 0;
  const index = Number.isInteger(stepIndex) ? stepIndex : cookingStepIndex;
  const minutes = cookingDish.stepTimers && cookingDish.stepTimers[index];
  return Number.isFinite(minutes) && minutes > 0 ? Math.round(minutes * 60) : 0;
}

function updateCookingTimerDisplay() {
  if (cookingTimerRunning) cookingTimerRemaining = Math.max(0, Math.ceil((cookingTimerEnd - Date.now()) / 1000));
  cookingTimerDisplay.textContent = formatCookingTimer(cookingTimerRemaining);
  cookingTimerToggle.textContent = cookingTimerRunning ? "Pause" : (cookingTimerRemaining === 0 ? "Neu starten" : "Timer starten");
  if (cookingTimerContext) {
    cookingTimerContext.textContent = "Timer für diesen Schritt";
  }
  if (cookingTimerRunning && cookingTimerRemaining === 0) {
    stopCookingTimer();
    cookingTimerDisplay.textContent = "00:00";
    cookingTimerToggle.textContent = "Neu starten";
    if (cookingTimerContext) cookingTimerContext.textContent = "Timer aus Schritt " + (cookingTimerStepIndex + 1) + " ist fertig";
    if (navigator.vibrate) navigator.vibrate([180, 100, 180]);
    showToast("⏱️ Schritt-Timer ist fertig");
  }
}

function resetCookingTimer() {
  stopCookingTimer();
  cookingTimerStepIndex = cookingStepIndex;
  cookingTimerRemaining = cookingStepSeconds();
  updateCookingTimerDisplay();
}

function renderCookingMode(resetTimer) {
  if (!cookingDish) return;
  const steps = cookingDish.steps || fallbackRecipeSteps(cookingDish);
  cookingStepIndex = Math.max(0, Math.min(steps.length - 1, cookingStepIndex));
  if (resetTimer) resetCookingTimer();
  cookingTitle.textContent = cookingDish.name;
  cookingProgressLabel.textContent = "Schritt " + (cookingStepIndex + 1) + " von " + steps.length;
  cookingProgressFill.style.width = (((cookingStepIndex + 1) / steps.length) * 100) + "%";
  const timerSeconds = cookingStepSeconds();
  cookingStepNumber.textContent = "Schritt " + (cookingStepIndex + 1) + (timerSeconds ? " · " + formatDuration(timerSeconds / 60) : "");
  cookingStepText.textContent = steps[cookingStepIndex];
  cookingTimerBlock.hidden = !timerSeconds;
  cookingTimerToggle.disabled = !timerSeconds;
  cookingTimerReset.disabled = !timerSeconds;
  cookingPrev.disabled = cookingStepIndex === 0;
  cookingNext.textContent = cookingStepIndex === steps.length - 1 ? "Fertig ✓" : "Weiter →";
  updateCookingTimerDisplay();
}

function openCookingMode() {
  if (!currentRecipeDish) return;
  cookingDish = currentRecipeDish;
  cookingStepIndex = 0;
  cookingTimerStepIndex = 0;
  cookingSessionRecorded = false;
  recipeOverlay.setAttribute("aria-hidden", "true");
  cookingOverlay.style.display = "flex";
  cookingOverlay.setAttribute("aria-hidden", "false");
  renderCookingMode(true);
  cookingClose.focus({ preventScroll: true });
}

function openDetachedCookingTimer(timerId) {
  const index = detachedCookingTimers.findIndex(function(timer){ return timer.id === timerId; });
  if (index === -1) return;
  const timer = detachedCookingTimers[index];
  const dish = dishByRef(timer.recipeId);
  if (!dish) return;
  if (cookingTimerRunning) detachRunningCookingTimer();
  currentRecipeDish = dish;
  recipePeopleCountValue = peopleCount;
  renderRecipeSheet();
  cookingDish = dish;
  cookingStepIndex = Math.max(0, Math.min(dish.steps.length - 1, timer.stepIndex));
  cookingTimerStepIndex = cookingStepIndex;
  cookingSessionRecorded = false;
  cookingTimerEnd = timer.end;
  cookingTimerRemaining = Math.max(0, Math.ceil((timer.end - Date.now()) / 1000));
  cookingTimerRunning = cookingTimerRemaining > 0;
  detachedCookingTimers.splice(index, 1);
  saveDetachedCookingTimers();
  if (cookingTimerRunning) cookingTimerInterval = setInterval(updateCookingTimerDisplay, 1000);
  [favoritesOverlay, cartOverlay, menuOverlay, accountOverlay, adminOverlay].forEach(function(overlay){
    if (overlay.style.display === "flex") {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  });
  recipeOverlay.style.display = "flex";
  recipeOverlay.setAttribute("aria-hidden", "true");
  cookingOverlay.style.display = "flex";
  cookingOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("recipe-modal-open");
  lockPageScroll();
  setAppModalState(true);
  renderCookingMode(false);
  renderDetachedCookingTimers();
  cookingClose.focus({ preventScroll: true });
}

function recordCookingCompletion(dish) {
  if (!dish || !profileLoaded || cookingSessionRecorded) return;
  cookingSessionRecorded = true;
  const nowIso = new Date().toISOString();
  profile.cookLog.push({ id: "recipe-" + Date.now() + "-" + Math.random().toString(36).slice(2), dishId: dish.id, name: dish.name, ts: nowIso, mode: "recipe", hasPhoto: false });
  const discoveredNow = markDishSeen(dish, false);
  const earnedXp = rewardCook(dish, null) + (discoveredNow ? 15 : 0);
  if (currentDish && currentDish.id === dish.id) {
    confirmedForCurrentResult = true;
    renderConfirmRow(dish);
  }
  afterProgressUpdate();
  showToast(earnedXp ? ("+" + earnedXp + " XP · Rezept abgeschlossen") : "Rezept als gekocht gespeichert");
}

function closeCookingMode(finished) {
  const completedDish = cookingDish;
  if (!finished) detachRunningCookingTimer();
  stopCookingTimer();
  cookingOverlay.style.display = "none";
  cookingOverlay.setAttribute("aria-hidden", "true");
  recipeOverlay.setAttribute("aria-hidden", "false");
  cookingDish = null;
  if (recipeStartCooking.offsetParent !== null) recipeStartCooking.focus({ preventScroll: true });
  if (finished) recordCookingCompletion(completedDish);
}

function toggleCookingTimer() {
  if (!cookingDish) return;
  if (cookingTimerRunning) {
    cookingTimerRemaining = Math.max(0, Math.ceil((cookingTimerEnd - Date.now()) / 1000));
    stopCookingTimer();
    updateCookingTimerDisplay();
    return;
  }
  if (cookingTimerRemaining <= 0) cookingTimerRemaining = cookingStepSeconds();
  if (cookingTimerRemaining <= 0) return;
  cookingTimerRunning = true;
  cookingTimerEnd = Date.now() + cookingTimerRemaining * 1000;
  cookingTimerInterval = setInterval(updateCookingTimerDisplay, 1000);
  updateCookingTimerDisplay();
}

function trapRecipeFocus(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeRecipe();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = Array.from(recipeOverlay.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter(function(el){
    return el.offsetParent !== null;
  });
  if (focusable.length === 0) {
    event.preventDefault();
    recipeClose.focus();
    return;
  }
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderResultIngredients(dish) {
  const missing = dish.ingredients.filter(function(id){ return !have.has(id); });
  const source = recipeSource(dish);
  const toAdd = missing.filter(function(id){ return cartSourceNeedsUpdate(id, source, dish, peopleCount); });
  const updatingCart = missing.some(function(id){ return cartHasSource(id, source); });
  let html = "";
  if (missing.length > 0) {
    html += '<p class="missing-line"><span class="lbl">Fehlt dir: </span>' + missing.map(function(id){ return formatQuantity(scaledRecipeQuantity(dish, id, peopleCount).amount, scaledRecipeQuantity(dish, id, peopleCount).unit) + " " + ingredientVocab[id].label; }).join(", ") + "</p>";
  } else {
    html += '<span class="all-have">Du hast schon alles da 🎉</span>';
  }
  html += '<button type="button" class="ing-toggle" id="ingToggle">Alle Zutaten anzeigen ▾</button>';
  html += '<div class="ing-full" id="ingFull" style="display:none;">' + dish.ingredients.map(function(id){
    return '<span class="ing' + (missing.indexOf(id) !== -1 ? " missing" : "") + '">' + formatQuantity(scaledRecipeQuantity(dish, id, peopleCount).amount, scaledRecipeQuantity(dish, id, peopleCount).unit) + " " + ingredientVocab[id].label + "</span>";
  }).join(", ") + "</div>";
  ingredientLineEl.innerHTML = html;
  document.getElementById("ingToggle").addEventListener("click", function(){
    const box = document.getElementById("ingFull");
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    this.textContent = isHidden ? "Zutaten ausblenden ▴" : "Alle Zutaten anzeigen ▾";
  });

  if (missing.length > 0) {
    if (toAdd.length > 0) {
      cartActionEl.innerHTML = '<button type="button" class="cart-btn" id="addCartBtn">' +
        (updatingCart ? "Warenkorb aktualisieren (" : "Fehlendes in den Warenkorb (") + toAdd.length + ")</button>";
      document.getElementById("addCartBtn").addEventListener("click", function(){
        addToCart(toAdd, { dish: dish, portions: peopleCount, source: source });
        showToast("Zutaten mit Mengen hinzugefügt 🛒");
        renderResultIngredients(dish);
      });
    } else {
      cartActionEl.innerHTML = '<button type="button" class="cart-btn" disabled>Bereits im Warenkorb</button>';
    }
  } else {
    cartActionEl.innerHTML = "";
  }
}

function renderConfirmRow(dish) {
  confirmRowEl.innerHTML = "";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "confirm-btn";
  if (confirmedForCurrentResult) {
    btn.textContent = "✅ Als gekocht gespeichert";
    btn.disabled = true;
    confirmRowEl.appendChild(btn);
    return;
  }
  btn.textContent = tier === "premium" ? "📸 Ich hab's gekocht" : "✅ Ich hab's gekocht";
  let skipBtn = null;
  if (tier === "premium") {
    skipBtn = document.createElement("button");
    skipBtn.type = "button";
    skipBtn.className = "confirm-skip";
    skipBtn.textContent = "ohne Foto bestätigen";
    skipBtn.addEventListener("click", function(){ confirmCook(dish, null, btn, skipBtn); });
  }
  btn.addEventListener("click", function(){ handleConfirmClick(dish, btn, skipBtn); });
  confirmRowEl.appendChild(btn);
  if (skipBtn) confirmRowEl.appendChild(skipBtn);
}

function handleConfirmClick(dish, btn, skipBtn) {
  if (tier === "premium") { pendingConfirmContext = { type: "reel", dish: dish, btn: btn, skipBtn: skipBtn }; photoInputEl.click(); }
  else { confirmCook(dish, null, btn, skipBtn); }
}

function compressImage(file) {
  return new Promise(function(resolve, reject){
    if (!file || !/^image\//.test(file.type || "")) {
      reject(new Error("Ungültige Bilddatei"));
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e){
      const img = new Image();
      img.onload = function(){
        const maxEdge = 480;
        const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Bild konnte nicht verarbeitet werden"));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.6));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

photoInputEl.addEventListener("change", async function(e){
  const file = e.target.files[0];
  const ctx = pendingConfirmContext;
  pendingConfirmContext = null;
  if (!file || !ctx) { photoInputEl.value = ""; return; }
  let dataUrl = null;
  try {
    dataUrl = await compressImage(file);
  } catch (error) {
    dataUrl = null;
    showToast("Foto konnte nicht verarbeitet werden – ohne Foto gespeichert.");
  }
  if (ctx.type === "reel") { confirmCook(ctx.dish, dataUrl, ctx.btn, ctx.skipBtn); }
  else if (ctx.type === "week") { confirmWeekDay(ctx.day, dataUrl); }
  photoInputEl.value = "";
});

function confirmCook(dish, photoDataUrl, btn, skipBtn) {
  if (!profileLoaded || confirmedForCurrentResult) return;
  confirmedForCurrentResult = true;
  const nowIso = new Date().toISOString();
  profile.cookLog.push({ id: "cook-" + Date.now() + "-" + Math.random().toString(36).slice(2), dishId: dish.id, name: dish.name, ts: nowIso, mode: state.ingredientMode, hasPhoto: !!photoDataUrl });
  if (photoDataUrl) {
    profile.photos = profile.photos || [];
    profile.photos.unshift({ id: Date.now() + "-" + Math.random().toString(36).slice(2), dishId: dish.id, name: dish.name, ts: nowIso, dataUrl: photoDataUrl });
    if (profile.photos.length > 20) profile.photos.length = 20;
  }
  const discoveredNow = markDishSeen(dish, false);
  const earnedXp = rewardCook(dish, photoDataUrl) + (discoveredNow ? 15 : 0);
  showToast(earnedXp ? ("+" + earnedXp + " XP · Gekocht: " + dish.name) : ("Gekocht gespeichert · heute bereits belohnt"));
  if (btn) { btn.disabled = true; btn.textContent = photoDataUrl ? "📸 Bestätigt ✓" : "✅ Bestätigt ✓"; }
  if (skipBtn) { skipBtn.disabled = true; skipBtn.style.display = "none"; }
  afterProgressUpdate();
}

function syncCartToProfile() {
  profile.cartItems = Array.from(cartMap.entries()).map(function(entry){
    const item = entry[1];
    return {
      id: entry[0],
      checked: !!item.checked,
      manual: !!item.manual,
      contributions: (item.contributions || []).map(function(part){
        return { source: part.source, amount: part.amount, unit: part.unit };
      })
    };
  });
}

function restoreCartFromProfile() {
  cartMap.clear();
  (profile.cartItems || []).forEach(function(item){
    if (!ingredientVocab[item.id]) return;
    cartMap.set(item.id, {
      checked: !!item.checked,
      manual: !!item.manual,
      contributions: Array.isArray(item.contributions) ? item.contributions.slice() : []
    });
  });
  const items = Array.from(cartMap.values());
  cartWasComplete = items.length > 0 && items.every(function(item){ return item.checked; });
  renderCart();
}

function cartHasSource(id, source) {
  const item = cartMap.get(id);
  if (!item) return false;
  return (item.contributions || []).some(function(part){ return part.source === source; });
}

function cartSourceNeedsUpdate(id, source, dish, portions) {
  const item = cartMap.get(id);
  if (!item) return true;
  const part = (item.contributions || []).find(function(entry){ return entry.source === source; });
  if (!part) return true;
  const quantity = scaledRecipeQuantity(dish, id, portions);
  return part.amount !== quantity.amount || part.unit !== quantity.unit;
}

function cartQuantityText(id, item) {
  const parts = item.contributions || [];
  if (parts.length === 0) return formatAmount(id);
  const totals = {};
  parts.forEach(function(part){ totals[part.unit] = (totals[part.unit] || 0) + part.amount; });
  return Object.keys(totals).map(function(unit){ return formatQuantity(totals[unit], unit); }).join(" + ");
}

function addToCart(ids, options) {
  const opts = options || {};
  ids.forEach(function(id){
    let item = cartMap.get(id);
    if (!item) {
      item = { checked: false, manual: !opts.source, contributions: [] };
      cartMap.set(id, item);
    }
    if (!Array.isArray(item.contributions)) item.contributions = [];
    if (!opts.source) {
      item.manual = true;
      return;
    }
    const quantity = scaledRecipeQuantity(opts.dish, id, opts.portions || peopleCount);
    const existing = item.contributions.find(function(part){ return part.source === opts.source; });
    if (existing) {
      if (existing.amount === quantity.amount && existing.unit === quantity.unit) return;
      existing.amount = quantity.amount;
      existing.unit = quantity.unit;
    } else {
      item.contributions.push({ source: opts.source, amount: quantity.amount, unit: quantity.unit });
    }
    item.checked = false;
  });
  cartWasComplete = false;
  if (!opts.defer) {
    syncCartToProfile();
    renderCart();
    saveProfile();
  }
}

function checkCartCompletion() {
  const items = Array.from(cartMap.values());
  const allChecked = items.length > 0 && items.every(function(it){ return it.checked; });
  if (allChecked && !cartWasComplete) {
    cartWasComplete = true;
    if (claimProfileReward("rewardedCartCompletions", isoWeekKey(new Date()), 104)) {
      profile.cartCompletions = (profile.cartCompletions || 0) + 1;
      addXp(10);
      showToast("Warenkorb komplett! +10 XP 🎉");
    } else {
      showToast("Warenkorb komplett · diese Woche bereits belohnt");
    }
  } else if (!allChecked) { cartWasComplete = false; }
}

function renderCart(forceDetails) {
  const items = Array.from(cartMap.entries()).sort(function(a, b){
    const checkedDifference = Number(a[1].checked) - Number(b[1].checked);
    const categoryDifference = String(ingredientVocab[a[0]].cat).localeCompare(String(ingredientVocab[b[0]].cat), "de");
    return checkedDifference || categoryDifference || ingredientVocab[a[0]].label.localeCompare(ingredientVocab[b[0]].label, "de");
  });
  const checkedCount = items.filter(function(entry){ return entry[1].checked; }).length;
  cartCountEl.textContent = items.length;
  cartCountEl.style.display = items.length ? "inline-block" : "none";
  cartClearBtn.style.display = items.length ? "inline-block" : "none";
  cartRemoveCheckedBtn.style.display = checkedCount ? "inline-block" : "none";
  cartStatusEl.textContent = items.length ? ((items.length - checkedCount) + " offen · " + checkedCount + " erledigt") : "";
  cartIconBadge.textContent = items.length;
  cartIconBadge.style.display = items.length ? "flex" : "none";
  if (!forceDetails && cartOverlay.style.display !== "flex") return;
  if (items.length === 0) { cartListEl.innerHTML = ""; cartEmptyEl.style.display = "block"; return; }
  cartEmptyEl.style.display = "none";
  cartListEl.innerHTML = items.map(function(entry){
    const id = entry[0], item = entry[1];
    return '<li class="cart-item' + (item.checked ? " checked" : "") + '"><input class="cart-item-check" type="checkbox" id="cart-' + id + '" data-item="' + escapeHtml(id) + '" ' + (item.checked ? "checked" : "") + '><label for="cart-' + id + '"><span>' + escapeHtml(ingredientVocab[id].label) + '</span><span class="cart-item-amount">' + escapeHtml(cartQuantityText(id, item)) + '</span></label><button class="cart-item-remove" type="button" data-id="' + escapeHtml(id) + '" aria-label="' + escapeHtml(ingredientVocab[id].label) + ' entfernen">×</button></li>';
  }).join("");
}

cartListEl.addEventListener("change", function(event){
  const checkbox = event.target.closest(".cart-item-check");
  if (!checkbox || !cartListEl.contains(checkbox)) return;
  const id = checkbox.dataset.item;
  const item = cartMap.get(id);
  if (!item) return;
  item.checked = checkbox.checked;
  if (profileLoaded && checkbox.checked) {
    const rewardKey = isoWeekKey(new Date()) + "|" + id;
    if (claimProfileReward("rewardedCartChecks", rewardKey, 1000)) addXp(2);
  }
  renderCart();
  if (profileLoaded) { checkCartCompletion(); syncCartToProfile(); afterProgressUpdate(); }
});

cartListEl.addEventListener("click", function(event){
  const button = event.target.closest(".cart-item-remove");
  if (!button || !cartListEl.contains(button)) return;
  cartMap.delete(button.dataset.id);
  cartWasComplete = false;
  syncCartToProfile();
  renderCart();
  saveProfile();
});

function tick(dish) {
  reelInner.style.transition = "none";
  reelInner.style.transform = "rotateX(-90deg)";
  void reelInner.offsetWidth;
  reelEmoji.textContent = dish.emoji;
  reelName.textContent = dish.name;
  renderTags(dish);
  reelInner.style.transition = "transform 100ms ease-out";
  reelInner.style.transform = "rotateX(0deg)";
}

function pickFinal(pool) {
  let candidates = pool;
  if (state.ingredientMode === "reste" && pool.length > 0) {
    const score = function(dish){ return dish.ingredients.filter(function(id){ return have.has(id); }).length / dish.ingredients.length; };
    const bestScore = score(pool[0]);
    candidates = pool.filter(function(dish){ return Math.abs(score(dish) - bestScore) < 0.000001; });
  }
  const recent = new Set(profile && Array.isArray(profile.recentPicks) ? profile.recentPicks : []);
  if (candidates.length > 1 && lastPick) recent.add(lastPick.id);
  const fresh = candidates.filter(function(d){ return !recent.has(d.id); });
  if (fresh.length) candidates = fresh;
  else if (candidates.length > 1 && lastPick) candidates = candidates.filter(function(d){ return d.id !== lastPick.id; });
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function recordRecentPick(dish) {
  if (!profile || !dish) return;
  profile.recentPicks = (profile.recentPicks || []).filter(function(id){ return id !== dish.id; });
  profile.recentPicks.push(dish.id);
  if (profile.recentPicks.length > 8) profile.recentPicks = profile.recentPicks.slice(-8);
}

function finish(dish) {
  spinning = false;
  lastPick = dish;
  currentDish = dish;
  confirmedForCurrentResult = false;
  helperText.textContent = "Nicht überzeugt? Einfach nochmal klicken.";
  recipeLink.href = "#recipe";
  recipeLink.style.display = "inline-block";
  renderPortionPrice(dish);
  renderResultIngredients(dish);
  renderConfirmRow(dish);
  renderFavoriteBtn(dish);

  reelInner.classList.remove("rare");
  reelInner.style.animation = "none";
  void reelInner.offsetWidth;
  reelInner.style.animation = "settle 260ms ease-out";
  if (dish.premium) {
    void reelInner.offsetWidth;
    reelInner.classList.add("rare");
  }

  if (profileLoaded) {
    recordRecentPick(dish);
    if (markDishSeen(dish, true)) afterProgressUpdate();
    else saveProfile();
  }
  updatePoolCount();
}

function spin() {
  if (spinning) return;
  const pool = updatePoolCount();
  if (pool.length === 0 || !profileLoaded) return;
  spinning = true;
  rollBtn.disabled = true;
  recipeLink.style.display = "none";
  portionPriceEl.textContent = "";
  ingredientLineEl.innerHTML = "";
  cartActionEl.innerHTML = "";
  confirmRowEl.innerHTML = "";
  favoriteBtnEl.style.display = "none";
  reelInner.classList.remove("rare");
  helperText.textContent = "Es brutzelt …";

  const finalDish = pickFinal(pool);
  let ticks = 0;
  const maxTicks = 14;
  let delay = 60;
  function loop() {
    const randomDish = pool[Math.floor(Math.random() * pool.length)];
    tick(ticks === maxTicks - 1 ? finalDish : randomDish);
    ticks++;
    if (ticks < maxTicks) { delay *= 1.14; setTimeout(loop, delay); }
    else { finish(finalDish); }
  }
  loop();
}

/* week planner */
function getWeekShoppingEntries() {
  const weekPlan = (profile && profile.weekPlan) || {};
  const nextKey = peopleCount + "|" + weekDays.map(function(day){
    return selectedDays.has(day) ? (day + ":" + (weekPlan[day] || "")) : "";
  }).join("|") + "|" + Array.from(have).sort().join(",");
  if (weekShoppingCache && weekShoppingCacheKey === nextKey) return weekShoppingCache;
  const combined = new Map();
  weekDays.forEach(function(day) {
    if (!selectedDays.has(day)) return;
    const dishName = weekPlan[day];
    if (!dishName || dishName === REST_DAY) return;
    const dish = dishByName(dishName);
    if (!dish) return;
    dish.ingredients.forEach(function(id) {
      if (have.has(id)) return;
      const quantity = scaledRecipeQuantity(dish, id, peopleCount);
      let entry = combined.get(id);
      if (!entry) {
        entry = { id: id, quantities: {} };
        combined.set(id, entry);
      }
      entry.quantities[quantity.unit] = (entry.quantities[quantity.unit] || 0) + quantity.amount;
    });
  });
  weekShoppingCache = Array.from(combined.values()).sort(function(a, b) {
    return ingredientVocab[a.id].label.localeCompare(ingredientVocab[b.id].label, "de");
  });
  weekShoppingCacheKey = nextKey;
  return weekShoppingCache;
}

function getWeekMissingIngredients() {
  return Array.from(new Set(getWeekShoppingEntries().map(function(entry){ return entry.id; })));
}

function renderWeekShoppingPreview() {
  const entries = getWeekShoppingEntries();
  if (entries.length === 0) {
    weekShoppingPreviewEl.innerHTML = '<p class="cart-empty">Plane Gerichte oder markiere vorhandene Zutaten.</p>';
    return;
  }
  weekShoppingPreviewEl.innerHTML = entries.map(function(entry) {
    const amountText = Object.keys(entry.quantities).map(function(unit){
      return formatQuantity(roundedRecipeQuantity(entry.quantities[unit], unit), unit);
    }).join(" + ");
    return '<div class="week-shopping-item"><span>' + escapeHtml(ingredientVocab[entry.id].label) + '</span>' +
      '<span class="week-shopping-amount">' + escapeHtml(amountText) + '</span></div>';
  }).join("");
}

function rebuildWeekCart(deferSave) {
  Array.from(cartMap.entries()).forEach(function(entry){
    const item = entry[1];
    item.contributions = (item.contributions || []).filter(function(part){ return part.source.indexOf("week:") !== 0; });
    if (!item.manual && item.contributions.length === 0) cartMap.delete(entry[0]);
  });

  weekDays.forEach(function(day){
    if (!selectedDays.has(day)) return;
    const dishName = profile.weekPlan[day];
    if (!dishName || dishName === REST_DAY) return;
    const dish = dishByName(dishName);
    if (!dish) return;
    const missing = dish.ingredients.filter(function(id){ return !have.has(id); });
    addToCart(missing, {
      dish: dish,
      portions: peopleCount,
      source: "week:" + day + ":" + dish.id,
      defer: true
    });
  });

  cartWasComplete = false;
  syncCartToProfile();
  renderCart();
  if (!deferSave) saveProfile();
}

function hasWeekCartContributions() {
  return Array.from(cartMap.values()).some(function(item){
    return (item.contributions || []).some(function(part){ return part.source.indexOf("week:") === 0; });
  });
}

function removeWeekCartContributions() {
  Array.from(cartMap.entries()).forEach(function(entry){
    const item = entry[1];
    item.contributions = (item.contributions || []).filter(function(part){ return part.source.indexOf("week:") !== 0; });
    if (!item.manual && item.contributions.length === 0) cartMap.delete(entry[0]);
  });
  cartWasComplete = false;
  syncCartToProfile();
  renderCart();
}

function syncWeekCartIfActive() {
  if (!hasWeekCartContributions()) return false;
  rebuildWeekCart(true);
  return true;
}

function pickDayCandidate(pool) {
  const usedIds = weekDays.map(function(d){ return profile.weekPlan[d]; }).filter(function(id){ return id && id !== REST_DAY; });
  let candidates = pool.filter(function(d){ return usedIds.indexOf(d.id) === -1; });
  if (candidates.length === 0) candidates = pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function weekRowHTML(day, dish) {
  const dishName = profile.weekPlan[day];
  const isRestDay = dishName === REST_DAY;
  const confirmed = !!profile.weekConfirmed[day] && !!dish;
  const isLocked = lockedDays.has(day);
  const premiumTint = dish && dish.premium ? " dish-premium" : "";
  const confirmedCls = confirmed ? " confirmed" : "";
  const lockedCls = isLocked ? " locked" : "";
  const restCls = isRestDay ? " rest-day" : "";
  const detailLine = dish ? '<span class="week-portion-price">⏱ ' + escapeHtml(formatDuration(dish.minutes)) + ' · ≈' + formatEuro(dishPricePerPortion(dish)) + '/Portion</span>' : "";
  const dishLabel = dish
    ? '<a class="week-recipe-link" href="#recipe" data-recipe-id="' + escapeHtml(dish.id) + '">' + dish.emoji + " " + escapeHtml(dish.name) + "</a>"
    : (isRestDay ? "🥡 Restetag / Reste essen" : "Noch kein Gericht");
  const checkboxDisabled = (!dish || confirmed) ? " disabled" : "";
  const checkboxChecked = confirmed ? " checked" : "";
  const photoBtnHtml = (dish && tier === "premium" && !confirmed) ? '<button type="button" class="week-photo-btn" data-day="' + day + '" aria-label="Kochfoto aufnehmen">📸</button>' : "";
  const undoBtnHtml = confirmed ? '<button type="button" class="week-undo-btn" data-day="' + day + '" aria-label="Markierung für ' + day + ' rückgängig machen">Zurück</button>' : "";
  const lockBtnHtml = dishName && !confirmed
    ? '<button type="button" class="week-lock-btn' + (isLocked ? " active" : "") + '" data-day="' + day + '" aria-label="' + (isLocked ? "Tag entsperren" : "Tag sperren") + '" aria-pressed="' + (isLocked ? "true" : "false") + '">' + (isLocked ? "🔒" : "🔓") + "</button>"
    : "";
  const editHtml = confirmed ? "" :
    '<button type="button" class="week-roll-btn" data-day="' + day + '" aria-label="Gericht neu würfeln"' + (isLocked ? " disabled" : "") + '>🎲</button>' +
    '<button type="button" class="week-clear-btn' + (dishName ? "" : " hidden") + '" data-day="' + day + '" aria-label="Tag leeren">✕</button>';
  return '<div class="week-row' + premiumTint + confirmedCls + lockedCls + restCls + '" data-day="' + day + '">' +
    '<input type="checkbox" class="week-check" data-day="' + day + '" aria-label="' + day + ' als gekocht markieren"' + checkboxDisabled + checkboxChecked + '>' +
    '<span class="week-day-label">' + day + '</span>' +
    '<span class="week-dish-info"><span class="week-dish">' + dishLabel + '</span>' + detailLine + '</span>' +
    photoBtnHtml + undoBtnHtml + lockBtnHtml + editHtml +
  "</div>";
}

function refreshSingleRow(day) {
  const rowEl = weekDayRowsEl.querySelector('.week-row[data-day="' + day + '"]');
  if (!rowEl) return;
  const dishName = profile.weekPlan[day];
  const dish = dishName && dishName !== REST_DAY ? dishByName(dishName) : null;
  const wrap = document.createElement("div");
  wrap.innerHTML = weekRowHTML(day, dish);
  const replacement = wrap.firstElementChild;
  rowEl.replaceWith(replacement);
}

function updateRowContent(rowEl, dish, suppressPremiumTint) {
  if (!rowEl) return;
  const dishInfo = rowEl.querySelector(".week-dish-info");
  const detailLine = dish ? '<span class="week-portion-price">⏱ ' + escapeHtml(formatDuration(dish.minutes)) + ' · ≈' + formatEuro(dishPricePerPortion(dish)) + '/Portion</span>' : "";
  dishInfo.innerHTML = '<span class="week-dish">' + (dish ? (dish.emoji + " " + escapeHtml(dish.name)) : "Noch kein Gericht") + '</span>' + detailLine;
  if (!suppressPremiumTint) rowEl.classList.toggle("dish-premium", !!(dish && dish.premium));
}

function spinDayRow(day, pool, onComplete) {
  const rowEl = weekDayRowsEl.querySelector('.week-row[data-day="' + day + '"]');
  const finalDish = pickDayCandidate(pool);
  profile.weekPlan[day] = finalDish.id;
  profile.weekConfirmed[day] = false;
  if (profile.weekConfirmations) delete profile.weekConfirmations[day];
  const discoveredNow = profileLoaded && markDishSeen(finalDish, false);
  if (!rowEl || prefersReducedMotion) {
    refreshSingleRow(day);
    if (onComplete) onComplete(discoveredNow);
    return;
  }
  let ticks = 0;
  const maxTicks = 9;
  let delay = 60;
  function tickRow() {
    const isLast = ticks === maxTicks - 1;
    if (isLast) refreshSingleRow(day);
    else updateRowContent(rowEl, pool[Math.floor(Math.random() * pool.length)], true);
    ticks++;
    if (ticks < maxTicks) { delay *= 1.16; setTimeout(tickRow, delay); }
    else if (onComplete) onComplete(discoveredNow);
  }
  tickRow();
}

function updateAddWeekButton() {
  const missing = getWeekMissingIngredients();
  addWeekToCartBtn.disabled = missing.length === 0;
  const active = hasWeekCartContributions();
  addWeekToCartBtn.textContent = missing.length > 0
    ? ((active ? "Wochenliste aktualisieren (" : "Ganze Woche in den Warenkorb (") + missing.length + " Zutaten)")
    : "Keine fehlenden Zutaten";
  renderWeekShoppingPreview();
}

function formatWeekKey(key) {
  const match = /^(\d{4})-W(\d{2})$/.exec(key || "");
  return match ? ("KW " + Number(match[2]) + " · " + match[1]) : "Aktuelle Woche";
}

function renderWeekPeriod() {
  const currentKey = isoWeekKey(new Date());
  const planKey = profile.weekKey || currentKey;
  const stale = planKey !== currentKey;
  weekPeriodLabelEl.classList.toggle("stale", stale);
  weekPeriodLabelEl.textContent = stale
    ? (formatWeekKey(planKey) + " · vergangener Plan")
    : (formatWeekKey(currentKey) + " · aktueller Plan");
}

function ensureCurrentWeekForEdit() {
  const currentKey = isoWeekKey(new Date());
  if (profile.weekKey === currentKey) return true;
  const hasPlan = weekDays.some(function(day){ return !!profile.weekPlan[day]; });
  if (hasPlan && !window.confirm("Dieser Plan gehört zu " + formatWeekKey(profile.weekKey) + ". Jetzt eine neue Kalenderwoche starten?")) return false;
  removeWeekCartContributions();
  profile.weekPlan = {};
  profile.weekConfirmed = {};
  profile.weekConfirmations = {};
  profile.weekKey = currentKey;
  lockedDays.clear();
  profile.weekLockedDays = [];
  saveProfile();
  renderWeekRows();
  renderBudgetSummary();
  renderWeekPeriod();
  return true;
}

function refreshRowPrices() {
  weekDayRowsEl.querySelectorAll(".week-row").forEach(function(rowEl){
    const day = rowEl.dataset.day;
    const dishName = profile.weekPlan[day];
    const dish = dishName && dishName !== REST_DAY ? dishByName(dishName) : null;
    const priceEl = rowEl.querySelector(".week-portion-price");
    if (dish && priceEl) priceEl.textContent = "⏱ " + formatDuration(dish.minutes) + " · ≈" + formatEuro(dishPricePerPortion(dish)) + "/Portion";
  });
}

function confirmWeekDay(day, photoDataUrl) {
  if (!ensureCurrentWeekForEdit()) { refreshSingleRow(day); return; }
  const dishName = profile.weekPlan[day];
  if (!dishName || dishName === REST_DAY || profile.weekConfirmed[day]) return;
  const dish = dishByName(dishName);
  if (!dish) return;
  profile.weekConfirmed[day] = true;
  if (!profile.weekConfirmations) profile.weekConfirmations = {};
  lockedDays.delete(day);
  profile.weekLockedDays = Array.from(lockedDays);
  const nowIso = new Date().toISOString();
  const eventId = "week-" + Date.now() + "-" + Math.random().toString(36).slice(2);
  const photoId = photoDataUrl ? "photo-" + Date.now() + "-" + Math.random().toString(36).slice(2) : "";
  profile.cookLog.push({ id: eventId, dishId: dish.id, name: dish.name, ts: nowIso, mode: "week", hasPhoto: !!photoDataUrl });
  if (photoDataUrl) {
    profile.photos = profile.photos || [];
    profile.photos.unshift({ id: photoId, dishId: dish.id, name: dish.name, ts: nowIso, dataUrl: photoDataUrl });
    if (profile.photos.length > 20) profile.photos.length = 20;
  }
  const discoveredNow = markDishSeen(dish, false);
  const cookReward = rewardCook(dish, photoDataUrl);
  const earnedXp = cookReward + (discoveredNow ? 15 : 0);
  profile.weekConfirmations[day] = { dishId: dish.id, dishName: dish.name, logId: eventId, photoId: photoId, rewardKey: cookReward ? (localDateKey(new Date()) + "|" + dish.id) : "", earnedXp: earnedXp };
  showToast(earnedXp ? ("+" + earnedXp + " XP · Gekocht: " + dish.name) : ("Gekocht gespeichert · heute bereits belohnt"));
  afterProgressUpdate();
  refreshSingleRow(day);
}

function undoWeekDay(day) {
  if (!ensureCurrentWeekForEdit()) return;
  if (!profile.weekConfirmed[day]) return;
  const meta = profile.weekConfirmations && profile.weekConfirmations[day];
  const dishRef = profile.weekPlan[day];
  const plannedDish = dishByRef(dishRef);
  if (!window.confirm("„" + (plannedDish ? plannedDish.name : "Dieses Gericht") + "“ doch nicht als gekocht markieren?")) return;
  profile.weekConfirmed[day] = false;
  if (meta) {
    profile.cookLog = profile.cookLog.filter(function(entry){ return entry.id !== meta.logId; });
    if (meta.photoId) profile.photos = profile.photos.filter(function(photo){ return photo.id !== meta.photoId; });
    if (meta.rewardKey) profile.rewardedCookEvents = profile.rewardedCookEvents.filter(function(key){ return key !== meta.rewardKey; });
    profile.xp = Math.max(0, profile.xp - (meta.earnedXp || 0));
    delete profile.weekConfirmations[day];
  } else {
    const index = profile.cookLog.map(function(entry){ return entry.mode === "week" && (entry.dishId === dishRef || entry.name === dishRef); }).lastIndexOf(true);
    if (index !== -1) profile.cookLog.splice(index, 1);
  }
  revokeInvalidBadges();
  afterProgressUpdate();
  refreshSingleRow(day);
  showToast("Markierung rückgängig gemacht");
}

function toggleWeekDayLock(day) {
  if (!ensureCurrentWeekForEdit()) return;
  if (!profile.weekPlan[day] || profile.weekConfirmed[day]) return;
  if (lockedDays.has(day)) lockedDays.delete(day);
  else lockedDays.add(day);
  profile.weekLockedDays = Array.from(lockedDays);
  saveProfile();
  refreshSingleRow(day);
  showToast(lockedDays.has(day) ? day + " ist geschützt 🔒" : day + " ist wieder offen");
}

function rollDayDish(day) {
  if (!ensureCurrentWeekForEdit()) return;
  if (lockedDays.has(day)) { showToast(day + " ist geschützt."); return; }
  if (profile.weekConfirmed[day]) { showToast(day + " wurde bereits als gekocht markiert."); return; }
  const pool = getWeekPool();
  if (pool.length === 0) { showToast("Keine Gerichte für die aktuellen Wochen-Filter."); return; }
  const rowEl = weekDayRowsEl.querySelector('.week-row[data-day="' + day + '"]');
  if (rowEl) rowEl.classList.add("spinning");
  spinDayRow(day, pool, function(discoveredNow){
    syncWeekCartIfActive();
    if (discoveredNow) afterProgressUpdate();
    else saveProfile();
    updateAddWeekButton();
    renderBudgetSummary();
  });
}

function clearDayDish(day) {
  if (!ensureCurrentWeekForEdit()) return;
  profile.weekPlan[day] = null;
  profile.weekConfirmed[day] = false;
  if (profile.weekConfirmations) delete profile.weekConfirmations[day];
  lockedDays.delete(day);
  profile.weekLockedDays = Array.from(lockedDays);
  syncWeekCartIfActive();
  saveProfile();
  refreshSingleRow(day);
  updateAddWeekButton();
  renderBudgetSummary();
}

function addRestDay() {
  if (!ensureCurrentWeekForEdit()) return;
  const day = weekDays.find(function(candidate) {
    return selectedDays.has(candidate) && !profile.weekPlan[candidate] && !lockedDays.has(candidate);
  });
  if (!day) { showToast("Leere zuerst einen ausgewählten Tag für den Restetag."); return; }
  profile.weekPlan[day] = REST_DAY;
  profile.weekConfirmed[day] = false;
  if (profile.weekConfirmations) delete profile.weekConfirmations[day];
  lockedDays.add(day);
  profile.weekLockedDays = Array.from(lockedDays);
  syncWeekCartIfActive();
  saveProfile();
  refreshSingleRow(day);
  updateAddWeekButton();
  renderBudgetSummary();
  showToast("Restetag für " + day + " eingeplant 🥡");
}

function startNewWeek() {
  const hasPlan = weekDays.some(function(day){ return !!profile.weekPlan[day]; });
  if (hasPlan && !window.confirm("Den aktuellen Wochenplan leeren und eine neue Woche starten?")) return;
  removeWeekCartContributions();
  profile.weekPlan = {};
  profile.weekConfirmed = {};
  profile.weekConfirmations = {};
  profile.weekKey = isoWeekKey(new Date());
  lockedDays.clear();
  profile.weekLockedDays = [];
  saveProfile();
  renderWeekRows();
  renderBudgetSummary();
  renderWeekPeriod();
  showToast("Neue Woche ist bereit");
}

function rollWholeWeek() {
  if (weekSpinning) return;
  if (!ensureCurrentWeekForEdit()) return;
  const pool = getWeekPool();
  if (pool.length === 0) { showToast("Keine Gerichte für die aktuellen Wochen-Filter."); return; }
  if (selectedDays.size === 0) {
    weekDays.forEach(function(d){ selectedDays.add(d); });
    profile.weekSelectedDays = Array.from(selectedDays);
    renderWeekDayChips();
    renderWeekRows();
  }
  const activeDays = weekDays.filter(function(d){
    return selectedDays.has(d) && profile.weekPlan[d] !== REST_DAY && !lockedDays.has(d) && !profile.weekConfirmed[d];
  });
  if (activeDays.length === 0) { showToast("Alle gewählten Tage sind geschützt oder schon gekocht."); return; }

  weekSpinning = true;
  rollWeekBtn.disabled = true;
  const previousRollWeekLabel = rollWeekBtn.textContent;
  rollWeekBtn.textContent = "Woche wird erstellt …";
  rollWeekBtn.setAttribute("aria-busy", "true");
  let i = 0;
  let progressChanged = false;
  function next() {
    if (i >= activeDays.length) {
      weekSpinning = false;
      rollWeekBtn.disabled = false;
      rollWeekBtn.textContent = previousRollWeekLabel;
      rollWeekBtn.removeAttribute("aria-busy");
      syncWeekCartIfActive();
      if (progressChanged) afterProgressUpdate();
      else saveProfile();
      updateAddWeekButton();
      renderBudgetSummary();
      showToast("🎲 Offene Tage neu gewürfelt!");
      return;
    }
    const day = activeDays[i];
    const rowEl = weekDayRowsEl.querySelector('.week-row[data-day="' + day + '"]');
    if (rowEl) rowEl.classList.add("spinning");
    spinDayRow(day, pool, function(discoveredNow){
      if (discoveredNow) progressChanged = true;
      i++;
      setTimeout(next, prefersReducedMotion ? 0 : 90);
    });
  }
  next();
}

function renderWeekDayChips() {
  document.querySelectorAll("#weekDayChips .chip").forEach(function(btn){
    const active = selectedDays.has(btn.dataset.day);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function renderWeekRows() {
  const active = weekDays.filter(function(d){ return selectedDays.has(d); });
  if (active.length === 0) {
    weekDayRowsEl.innerHTML = '<p class="cart-empty">Öffne „Woche anpassen“ und wähle die gewünschten Tage aus.</p>';
  } else {
    weekDayRowsEl.innerHTML = active.map(function(day){
      const dishName = profile.weekPlan[day];
      const dish = dishName && dishName !== REST_DAY ? dishByName(dishName) : null;
      return weekRowHTML(day, dish);
    }).join("");
  }
  updateAddWeekButton();
}

weekDayRowsEl.addEventListener("click", function(event){
  const action = event.target.closest(".week-roll-btn, .week-clear-btn, .week-lock-btn, .week-undo-btn, .week-photo-btn, .week-recipe-link");
  if (!action || !weekDayRowsEl.contains(action)) return;
  const row = action.closest(".week-row");
  const day = action.dataset.day || (row && row.dataset.day);
  if (!day) return;
  if (action.classList.contains("week-roll-btn")) rollDayDish(day);
  else if (action.classList.contains("week-clear-btn")) clearDayDish(day);
  else if (action.classList.contains("week-lock-btn")) toggleWeekDayLock(day);
  else if (action.classList.contains("week-undo-btn")) undoWeekDay(day);
  else if (action.classList.contains("week-photo-btn")) {
    pendingConfirmContext = { type: "week", day: day };
    photoInputEl.click();
  } else if (action.classList.contains("week-recipe-link")) {
    event.preventDefault();
    openRecipe(dishByRef(action.dataset.recipeId), action);
  }
});

weekDayRowsEl.addEventListener("change", function(event){
  const checkbox = event.target.closest(".week-check");
  if (!checkbox || !weekDayRowsEl.contains(checkbox) || !checkbox.checked) return;
  confirmWeekDay(checkbox.dataset.day, null);
});

function renderBudgetSummary() {
  const entries = getWeekShoppingEntries();
  const scaledTotal = entries.reduce(function(sum, entry) {
    const meta = ingredientVocab[entry.id];
    return sum + Object.keys(entry.quantities).reduce(function(entrySum, unit){
      const amount = entry.quantities[unit];
      const ratio = unit === meta.unit ? amount / Math.max(1, meta.amount || amount) : 1;
      return entrySum + ((meta.usePrice || 0) * ratio);
    }, 0);
  }, 0);
  const totalStr = formatEuro(scaledTotal);
  if (typeof profile.weekBudget === "number") {
    const budgetStr = formatEuro(profile.weekBudget);
    const pct = profile.weekBudget > 0
      ? Math.max(0, Math.min(100, (scaledTotal / profile.weekBudget) * 100))
      : (scaledTotal > 0 ? 100 : 0);
    const over = scaledTotal > profile.weekBudget;
    budgetSummaryEl.innerHTML = '<div class="budget-track"><div class="budget-fill' + (over ? " over" : "") + '" style="width:' + pct + '%;"></div></div>' +
      '<p class="budget-text' + (over ? " over" : "") + '">≈ ' + totalStr + " von " + budgetStr + (over ? " – drüber!" : "") + "</p>";
  } else {
    budgetSummaryEl.innerHTML = '<p class="budget-text">≈ ' + totalStr + " geschätzt</p>";
  }
}

function renderPeopleCount() {
  peopleCountDisplayEl.textContent = peopleCount;
  peopleMinusBtn.disabled = peopleCount <= 1;
  peoplePlusBtn.disabled = peopleCount >= 12;
}

function renderWeekTab() {
  const locked = tier !== "premium";
  weekLockedEl.style.display = locked ? "block" : "none";
  weekContentEl.style.display = locked ? "none" : "block";
  if (!locked) {
    renderWeekPeriod();
    updateWeekPoolCount();
    renderWeekDayChips();
    renderWeekRows();
    renderBudgetSummary();
    renderPeopleCount();
  }
}

document.querySelectorAll("#weekDayChips .chip").forEach(function(btn){
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", function(){
    const day = btn.dataset.day;
    if (selectedDays.has(day)) { selectedDays.delete(day); btn.classList.remove("active"); }
    else { selectedDays.add(day); btn.classList.add("active"); }
    btn.setAttribute("aria-pressed", selectedDays.has(day) ? "true" : "false");
    profile.weekSelectedDays = Array.from(selectedDays);
    syncWeekCartIfActive();
    saveProfile();
    renderWeekRows();
    renderBudgetSummary();
  });
});

rollWeekBtn.addEventListener("click", rollWholeWeek);
addRestDayBtn.addEventListener("click", addRestDay);
newWeekBtn.addEventListener("click", startNewWeek);

function changePeopleCount(delta) {
  const nextCount = Math.max(1, Math.min(12, peopleCount + delta));
  if (nextCount === peopleCount) return;
  peopleCount = nextCount;
  profile.peopleCount = nextCount;
  const cartRendered = syncWeekCartIfActive();
  saveProfile();
  renderPeopleCount();
  refreshRowPrices();
  renderBudgetSummary();
  updateAddWeekButton();
  if (!cartRendered) renderCart();
  if (currentDish) { renderPortionPrice(currentDish); renderResultIngredients(currentDish); }
}
peopleMinusBtn.addEventListener("click", function(){ changePeopleCount(-1); });
peoplePlusBtn.addEventListener("click", function(){ changePeopleCount(1); });

budgetInputEl.addEventListener("input", function(){
  const val = parseFloat(budgetInputEl.value);
  profile.weekBudget = isNaN(val) ? null : Math.max(0, val);
  if (!isNaN(val) && val < 0) budgetInputEl.value = "0";
  renderBudgetSummary();
  if (budgetSaveTimer) clearTimeout(budgetSaveTimer);
  budgetSaveTimer = setTimeout(function(){
    budgetSaveTimer = null;
    saveProfile();
  }, 350);
});

function flushBudgetSave() {
  if (!budgetSaveTimer) return;
  clearTimeout(budgetSaveTimer);
  budgetSaveTimer = null;
  saveProfile();
}
budgetInputEl.addEventListener("change", flushBudgetSave);

addWeekToCartBtn.addEventListener("click", function(){
  if (getWeekMissingIngredients().length === 0) return;
  rebuildWeekCart();
  showToast("Wochenliste mit Mengen aktualisiert 🛒");
});

/* ingredient chip builder */
Object.keys(ingredientVocab).forEach(function(id){
  const meta = ingredientVocab[id];
  const container = document.querySelector('.ing-chips[data-cat="' + meta.cat + '"]');
  if (!container) return;
  const btn = document.createElement("button");
  btn.className = "chip chip-sm";
  btn.textContent = meta.label;
  btn.type = "button";
  btn.dataset.ingredient = id;
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", function(){
    if (have.has(id)) { have.delete(id); btn.classList.remove("active"); }
    else { have.add(id); btn.classList.add("active"); }
    btn.setAttribute("aria-pressed", have.has(id) ? "true" : "false");
    if (profile) {
      profile.pantryItems = Array.from(have);
      if (tier === "premium") syncWeekCartIfActive();
      saveProfile();
    }
    updatePoolCount();
    if (currentDish) renderResultIngredients(currentDish);
    if (tier === "premium") { updateAddWeekButton(); renderBudgetSummary(); }
  });
  container.appendChild(btn);
});

document.querySelectorAll(".filter-group:not(.day-picker):not(.week-filter-group)").forEach(function(group){
  const key = group.dataset.group;
  group.querySelectorAll(".chip").forEach(function(chip){
    chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
    chip.addEventListener("click", function(){
      group.querySelectorAll(".chip").forEach(function(c){ c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("active");
      chip.setAttribute("aria-pressed", "true");
      state[key] = chip.dataset.value;
      updatePoolCount();
    });
  });
});

document.querySelectorAll(".week-filter-group").forEach(function(group){
  const key = group.dataset.group;
  group.querySelectorAll(".chip").forEach(function(chip){
    chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
    chip.addEventListener("click", function(){
      group.querySelectorAll(".chip").forEach(function(c){ c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("active");
      chip.setAttribute("aria-pressed", "true");
      weekFilterState[key] = chip.dataset.value;
      updateWeekPoolCount();
    });
  });
});

tierToggleEl.querySelectorAll("[data-tier]").forEach(function(btn){
  btn.addEventListener("click", function(){
    if (currentSession) {
      showToast("Premium wird über dein Konto verwaltet.");
      renderTierState();
      return;
    }
    tier = btn.dataset.tier === "premium" ? "premium" : "free";
    profile.localTier = tier;
    saveProfile();
    renderTierState();
    updatePoolCount();
    renderDex();
    renderBadges();
    renderPhotoGallery();
    renderWeekTab();
    refreshRecipeLibrary();
    if (currentDish && !confirmedForCurrentResult) renderConfirmRow(currentDish);
  });
});

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function redirectUrl() {
  if (window.location.protocol === "file:") return "http://localhost:5500/kochorakel.html";
  return window.location.origin + window.location.pathname;
}

function setAuthMessage(message, kind) {
  authMessage.textContent = message || "";
  authMessage.className = "auth-message" + (kind ? " " + kind : "");
  authMessage.style.display = message ? "block" : "none";
}

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  document.querySelectorAll("[data-auth-mode]").forEach(function(btn){
    btn.classList.toggle("active", btn.dataset.authMode === authMode);
  });
  const registering = authMode === "register";
  displayNameField.classList.toggle("hidden", !registering);
  passwordRepeatField.classList.toggle("hidden", !registering);
  authPassword.autocomplete = registering ? "new-password" : "current-password";
  authSubmitBtn.textContent = registering ? "Konto erstellen" : "Anmelden";
  forgotPasswordBtn.classList.toggle("hidden", registering);
  authPasswordRepeat.required = registering;
  setAuthMessage("", "");
}

function renderTierState() {
  tierToggleEl.querySelectorAll("[data-tier]").forEach(function(btn){
    btn.classList.toggle("active", btn.dataset.tier === tier);
    btn.disabled = !!currentSession;
  });
  if (currentSession) {
    subscriptionHintEl.textContent = tier === "premium"
      ? "Premium ist für dieses Konto aktiv."
      : "Dieses Konto nutzt aktuell Free. Premium wird vom Administrator verwaltet.";
  } else {
    subscriptionHintEl.textContent = "Im Gastmodus kannst du Premium lokal ausprobieren. Bei Konten wird der Status sicher aus der Datenbank geladen.";
  }
}

function renderAccountState() {
  const signedIn = !!(currentSession && currentProfileRow);
  authLoggedOut.classList.toggle("hidden", signedIn);
  authLoggedIn.classList.toggle("hidden", !signedIn);
  accountDot.className = "account-dot" + (signedIn ? " online" : "");

  if (!signedIn) {
    accountBtn.setAttribute("aria-label", "Konto – Gastmodus");
    renderTierState();
    return;
  }

  const isAdmin = currentProfileRow.role === "admin";
  accountDot.classList.toggle("admin", isAdmin);
  accountDisplayName.textContent = currentProfileRow.display_name || "Kochorakel-Konto";
  accountEmail.textContent = currentProfileRow.email || currentSession.user.email || "";
  profileDisplayName.value = currentProfileRow.display_name || "";
  accountRoleBadge.textContent = isAdmin ? "Administrator" : "Nutzer";
  accountRoleBadge.className = "account-badge" + (isAdmin ? " admin" : "");
  accountTierBadge.textContent = currentProfileRow.is_premium ? "Premium" : "Free";
  accountTierBadge.className = "account-badge" + (currentProfileRow.is_premium ? " premium" : "");
  openAdminBtn.classList.toggle("hidden", !isAdmin);
  accountBtn.setAttribute("aria-label", "Konto – " + (currentProfileRow.display_name || currentProfileRow.email));
  renderTierState();
}

function applyProfileToUi() {
  have.clear();
  (profile.pantryItems || []).forEach(function(id){
    if (ingredientVocab[id]) have.add(id);
  });
  document.querySelectorAll(".ing-chips .chip[data-ingredient]").forEach(function(button){
    const active = have.has(button.dataset.ingredient);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  selectedDays.clear();
  (profile.weekSelectedDays || []).forEach(function(day){ selectedDays.add(day); });
  lockedDays.clear();
  (profile.weekLockedDays || []).forEach(function(day){ if (weekDays.indexOf(day) !== -1) lockedDays.add(day); });
  peopleCount = typeof profile.peopleCount === "number" ? profile.peopleCount : 4;
  budgetInputEl.value = typeof profile.weekBudget === "number" ? profile.weekBudget : "";
  applyAccentColor(profile.accentColor || "blue");
  applyTheme(profile.theme || "light");
  appIconTileEl.textContent = profile.appIcon || "🍳";
  iconRowEl.querySelectorAll(".icon-swatch").forEach(function(button){
    button.classList.toggle("selected", button.dataset.icon === (profile.appIcon || "🍳"));
  });
  updateFavoritesBadge();
  restoreCartFromProfile();
  updatePoolCount();
  renderXp();
  renderDex();
  renderBadges();
  renderPhotoGallery();
  renderWeekTab();
  refreshRecipeLibrary();
  renderTierState();
  renderAccountState();
}

async function activateSession(session) {
  profileLoaded = false;
  rollBtn.disabled = true;
  currentSession = session;
  try {
    await loadProfile();
    profileLoaded = true;
    applyProfileToUi();
    helperText.textContent = accountLoadedFromCache ? "Angemeldet · lokal verfügbar, Cloud-Abgleich folgt." : "Angemeldet und synchronisiert.";
    if (accountLoadedFromCache && navigator.onLine !== false) saveProfile();
    return true;
  } catch (error) {
    currentSession = null;
    currentProfileRow = null;
    profile = await loadGuestProfile();
    tier = profile.localTier === "premium" ? "premium" : "free";
    profileLoaded = true;
    applyProfileToUi();
    helperText.textContent = "Gastmodus";
    setAuthMessage(error.message || "Konto konnte nicht geladen werden.", "error");
    return false;
  }
}

async function switchToGuest() {
  currentSession = null;
  currentProfileRow = null;
  profileLoaded = false;
  profile = await loadGuestProfile();
  tier = profile.localTier === "premium" ? "premium" : "free";
  profileLoaded = true;
  applyProfileToUi();
  helperText.textContent = "Gastmodus – Fortschritt bleibt auf diesem Gerät.";
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (!supabaseClient) {
    setAuthMessage("Online-Anmeldung ist gerade nicht verfügbar. Der Gastmodus funktioniert weiter.", "error");
    return;
  }
  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;
  const displayName = authDisplayName.value.trim();

  if (!email || password.length < 8) {
    setAuthMessage("Bitte gib eine gültige E-Mail und mindestens 8 Passwortzeichen ein.", "error");
    return;
  }
  if (authMode === "register" && password !== authPasswordRepeat.value) {
    setAuthMessage("Die beiden Passwörter stimmen nicht überein.", "error");
    return;
  }

  authSubmitBtn.disabled = true;
  setAuthMessage("Bitte warten …", "");
  try {
    if (authMode === "register") {
      const result = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { display_name: displayName || email.split("@")[0] },
          emailRedirectTo: redirectUrl()
        }
      });
      if (result.error) throw result.error;
      authPassword.value = "";
      authPasswordRepeat.value = "";
      if (result.data.session) {
        await activateSession(result.data.session);
        setAuthMessage("Konto wurde erstellt.", "success");
      } else {
        setAuthMessage("Konto erstellt. Bitte bestätige jetzt den Link in deiner E-Mail.", "success");
      }
    } else {
      const result = await supabaseClient.auth.signInWithPassword({ email: email, password: password });
      if (result.error) throw result.error;
      authPassword.value = "";
      const active = await activateSession(result.data.session);
      if (active) setAuthMessage("", "");
    }
  } catch (error) {
    setAuthMessage(error.message || "Anmeldung fehlgeschlagen.", "error");
  } finally {
    authSubmitBtn.disabled = false;
  }
}

async function requestPasswordReset() {
  if (!supabaseClient) {
    setAuthMessage("Online-Anmeldung ist gerade nicht verfügbar. Der Gastmodus funktioniert weiter.", "error");
    return;
  }
  const email = authEmail.value.trim().toLowerCase();
  if (!email) {
    setAuthMessage("Trage zuerst deine E-Mail-Adresse ein.", "error");
    authEmail.focus();
    return;
  }
  forgotPasswordBtn.disabled = true;
  try {
    const result = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() });
    if (result.error) throw result.error;
    setAuthMessage("Wenn ein Konto existiert, wurde eine E-Mail zum Zurücksetzen gesendet.", "success");
  } catch (error) {
    setAuthMessage(error.message || "Die E-Mail konnte nicht gesendet werden.", "error");
  } finally {
    forgotPasswordBtn.disabled = false;
  }
}

async function updatePassword(event) {
  event.preventDefault();
  if (!supabaseClient) {
    setAuthMessage("Online-Anmeldung ist gerade nicht verfügbar.", "error");
    return;
  }
  if (newPassword.value.length < 8 || newPassword.value !== newPasswordRepeat.value) {
    setAuthMessage("Die Passwörter müssen übereinstimmen und mindestens 8 Zeichen haben.", "error");
    return;
  }
  const result = await supabaseClient.auth.updateUser({ password: newPassword.value });
  if (result.error) {
    setAuthMessage(result.error.message, "error");
    return;
  }
  newPassword.value = "";
  newPasswordRepeat.value = "";
  passwordRecoveryActive = false;
  passwordRecoveryBox.classList.add("hidden");
  setAuthMessage("Dein neues Passwort wurde gespeichert.", "success");
}

async function updateDisplayName(event) {
  event.preventDefault();
  const name = profileDisplayName.value.trim();
  if (!name) {
    showToast("Bitte gib einen Anzeigenamen ein.");
    return;
  }
  const result = await supabaseClient.rpc("update_my_profile", { p_display_name: name });
  if (result.error) {
    showToast("Name konnte nicht gespeichert werden.");
    return;
  }
  currentProfileRow.display_name = name.slice(0, 50);
  renderAccountState();
  showToast("Profil gespeichert");
}

async function signOut() {
  signOutBtn.disabled = true;
  try {
    await saveProfile();
    await supabaseClient.auth.signOut();
    await switchToGuest();
    closeAccountOverlay();
    showToast("Abgemeldet – Gastmodus aktiv");
  } finally {
    signOutBtn.disabled = false;
  }
}

async function loadAdminUsers() {
  if (!currentProfileRow || currentProfileRow.role !== "admin") return;
  adminUserList.innerHTML = '<p class="admin-empty">Nutzer werden geladen …</p>';
  const result = await supabaseClient
    .from("profiles")
    .select("id,email,display_name,role,is_premium,is_suspended,created_at")
    .order("created_at", { ascending: false });

  if (result.error) {
    adminUserList.innerHTML = '<p class="admin-empty">Nutzer konnten nicht geladen werden.</p>';
    return;
  }
  if (!result.data.length) {
    adminUserList.innerHTML = '<p class="admin-empty">Noch keine Nutzer vorhanden.</p>';
    return;
  }

  adminUserList.innerHTML = result.data.map(function(user){
    const own = currentSession && user.id === currentSession.user.id;
    const label = user.display_name || user.email || "Unbenannter Nutzer";
    return '<div class="admin-user" data-user-id="' + escapeHtml(user.id) + '">' +
      '<div class="admin-user-head"><div><div class="admin-user-name">' + escapeHtml(label) + '</div>' +
      '<div class="admin-user-email">' + escapeHtml(user.email || "") + '</div></div>' +
      '<span class="account-badge' + (user.role === "admin" ? " admin" : "") + '">' + (user.role === "admin" ? "Admin" : "Nutzer") + '</span></div>' +
      '<div class="admin-controls">' +
      '<label class="admin-check"><input type="checkbox" data-field="premium"' + (user.is_premium ? " checked" : "") + '> Premium</label>' +
      '<label class="admin-check"><input type="checkbox" data-field="suspended"' + (user.is_suspended ? " checked" : "") + (own ? " disabled" : "") + '> Gesperrt</label>' +
      '</div><button class="admin-save" type="button">Änderungen speichern</button></div>';
  }).join("");

  adminUserList.querySelectorAll(".admin-user").forEach(function(row){
    row.querySelector(".admin-save").addEventListener("click", async function(){
      const button = this;
      const premium = row.querySelector('[data-field="premium"]').checked;
      const suspended = row.querySelector('[data-field="suspended"]').checked;
      button.disabled = true;
      button.textContent = "Speichert …";
      const result = await supabaseClient.rpc("admin_set_user_access", {
        p_user_id: row.dataset.userId,
        p_is_premium: premium,
        p_is_suspended: suspended
      });
      if (result.error) {
        showToast("Änderung fehlgeschlagen");
      } else {
        showToast("Nutzer aktualisiert");
        if (currentSession && row.dataset.userId === currentSession.user.id) {
          currentProfileRow.is_premium = premium;
          tier = premium ? "premium" : "free";
          applyProfileToUi();
        }
      }
      button.disabled = false;
      button.textContent = "Änderungen speichern";
    });
  });
}

async function initializeAuth() {
  if (!supabaseClient) {
    currentSession = null;
    setAuthMessage("Online-Anmeldung ist gerade nicht erreichbar. Der Gastmodus funktioniert weiter.", "error");
    await loadProfile();
    profileLoaded = true;
    applyProfileToUi();
    return;
  }
  try {
    const result = await supabaseClient.auth.getSession();
    if (result.error) throw result.error;
    currentSession = result.data.session;
  } catch (error) {
    currentSession = null;
    setAuthMessage("Online-Anmeldung ist gerade nicht erreichbar. Der Gastmodus funktioniert weiter.", "error");
  }

  await loadProfile();
  profileLoaded = true;
  applyProfileToUi();

  supabaseClient.auth.onAuthStateChange(function(event, session){
    if (event === "PASSWORD_RECOVERY") {
      passwordRecoveryActive = true;
      passwordRecoveryBox.classList.remove("hidden");
      if (accountOverlay.style.display !== "flex") openAppSheet(accountOverlay, accountClose, accountBtn);
    } else if (event === "SIGNED_OUT" && currentSession) {
      setTimeout(function(){ switchToGuest(); }, 0);
    } else if (event === "SIGNED_IN" && session && (!currentSession || currentSession.user.id !== session.user.id)) {
      setTimeout(function(){ activateSession(session); }, 0);
    }
  });
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach(function(b){
    const active = b.dataset.tab === tabName;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active ? "true" : "false");
    b.tabIndex = active ? 0 : -1;
  });
  [
    ["panelKochen", tabName === "kochen"],
    ["panelRezepte", tabName === "rezepte"],
    ["panelWoche", tabName === "woche"],
    ["panelFortschritt", tabName === "fortschritt"]
  ].forEach(function(entry){
    const panel = document.getElementById(entry[0]);
    panel.classList.toggle("active", entry[1]);
    panel.setAttribute("aria-hidden", entry[1] ? "false" : "true");
  });
  if (tabName === "rezepte") renderRecipeLibrary();
  if (tabName === "fortschritt") renderPhotoGallery(true);
}
document.querySelectorAll(".tab-btn").forEach(function(btn){ btn.addEventListener("click", function(){ switchTab(btn.dataset.tab); }); });
recipeLibraryGridEl.addEventListener("click", function(event){
  const button = event.target.closest("[data-recipe-id]");
  if (!button || !recipeLibraryGridEl.contains(button)) return;
  const dish = dishByRef(button.dataset.recipeId);
  if (!dish) return;
  if (dish.premium && tier !== "premium") {
    showToast("🔒 Dieses Rezept gehört zu Premium");
    return;
  }
  openRecipe(dish, button);
});
recipeSearchEl.addEventListener("input", function(){
  recipeLibraryState.query = recipeSearchEl.value;
  if (recipeSearchDebounceTimer) clearTimeout(recipeSearchDebounceTimer);
  recipeSearchDebounceTimer = setTimeout(function(){ recipeSearchDebounceTimer = null; renderRecipeLibrary(); }, 120);
});
recipeSearchClearEl.addEventListener("click", function(){
  if (recipeSearchDebounceTimer) clearTimeout(recipeSearchDebounceTimer);
  recipeSearchDebounceTimer = null;
  recipeSearchEl.value = "";
  recipeLibraryState.query = "";
  refreshRecipeLibrary();
  recipeSearchEl.focus();
});
recipeLibraryDietEl.addEventListener("change", function(){ recipeLibraryState.diet = recipeLibraryDietEl.value; renderRecipeLibrary(); });
recipeLibraryTimeEl.addEventListener("change", function(){ recipeLibraryState.time = recipeLibraryTimeEl.value; renderRecipeLibrary(); });
recipeLibraryTypeEl.addEventListener("change", function(){ recipeLibraryState.type = recipeLibraryTypeEl.value; renderRecipeLibrary(); });
xpStripEl.addEventListener("click", function(){ switchTab("fortschritt"); });
xpStripEl.addEventListener("keydown", function(event){
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    switchTab("fortschritt");
    document.getElementById("tabFortschritt").focus();
  }
});
dexDetailsEl.addEventListener("toggle", function(){
  if (dexDetailsEl.open && dexRenderDirty) renderDex(true);
});

favoriteBtnEl.addEventListener("click", function(){ if (currentDish) toggleFavorite(currentDish.id); });
recipeLink.addEventListener("click", function(event){ event.preventDefault(); openRecipe(currentDish, recipeLink); });
recipeClose.addEventListener("click", closeRecipe);
recipeOverlay.addEventListener("click", function(event){ if (event.target === recipeOverlay) closeRecipe(); });
recipeOverlay.addEventListener("keydown", trapRecipeFocus);
let recipeTouchStartY = null;
recipeGrabber.addEventListener("touchstart", function(event){
  recipeTouchStartY = event.touches && event.touches[0] ? event.touches[0].clientY : null;
}, { passive: true });
recipeGrabber.addEventListener("touchend", function(event){
  if (recipeTouchStartY === null) return;
  const endY = event.changedTouches && event.changedTouches[0] ? event.changedTouches[0].clientY : recipeTouchStartY;
  if (endY - recipeTouchStartY > 65) closeRecipe();
  recipeTouchStartY = null;
}, { passive: true });
recipeFavoriteBtn.addEventListener("click", function(){
  if (!currentRecipeDish) return;
  toggleFavorite(currentRecipeDish.id);
  renderRecipeSheet();
});
recipePeopleMinus.addEventListener("click", function(){ updateRecipePortions(-1); });
recipePeoplePlus.addEventListener("click", function(){ updateRecipePortions(1); });
recipeStartCooking.addEventListener("click", openCookingMode);
cookingClose.addEventListener("click", function(){ closeCookingMode(false); });
cookingOverlay.addEventListener("keydown", function(event){ trapAppSheetFocus(event, cookingOverlay, function(){ closeCookingMode(false); }); });
cookingTimerToggle.addEventListener("click", toggleCookingTimer);
cookingTimerReset.addEventListener("click", resetCookingTimer);
cookingPrev.addEventListener("click", function(){
  if (!cookingDish || cookingStepIndex === 0) return;
  detachRunningCookingTimer();
  cookingStepIndex--;
  renderCookingMode(true);
});
cookingNext.addEventListener("click", function(){
  if (!cookingDish) return;
  const steps = cookingDish.steps || fallbackRecipeSteps(cookingDish);
  if (cookingStepIndex >= steps.length - 1) { closeCookingMode(true); return; }
  detachRunningCookingTimer();
  cookingStepIndex++;
  renderCookingMode(true);
});
recipeAddMissing.addEventListener("click", function(){
  if (!currentRecipeDish) return;
  const source = recipeSource(currentRecipeDish);
  const missing = currentRecipeDish.ingredients.filter(function(id){
    return !have.has(id) && cartSourceNeedsUpdate(id, source, currentRecipeDish, recipePeopleCountValue);
  });
  if (missing.length === 0) return;
  addToCart(missing, { dish: currentRecipeDish, portions: recipePeopleCountValue, source: source });
  showToast("Zutaten mit Mengen zum Warenkorb hinzugefügt 🛒");
  renderRecipeSheet();
  if (currentDish && currentDish.id === currentRecipeDish.id) renderResultIngredients(currentDish);
});

function openFavoritesOverlay() { renderFavoritesSheet(); openAppSheet(favoritesOverlay, favoritesClose, favoritesBtn); }
function closeFavoritesOverlay() { closeAppSheet(favoritesOverlay, favoritesBtn); }
favoritesBtn.addEventListener("click", openFavoritesOverlay);
favoritesClose.addEventListener("click", closeFavoritesOverlay);
favoritesOverlay.addEventListener("click", function(e){ if (e.target === favoritesOverlay) closeFavoritesOverlay(); });
favoritesOverlay.addEventListener("keydown", function(e){ trapAppSheetFocus(e, favoritesOverlay, closeFavoritesOverlay); });

function openCartOverlay() {
  openAppSheet(cartOverlay, cartClose, cartIconBtn);
  renderCart(true);
}

function closeCartOverlay() {
  closeAppSheet(cartOverlay, cartIconBtn);
}

cartIconBtn.addEventListener("click", openCartOverlay);
cartClose.addEventListener("click", closeCartOverlay);
cartOverlay.addEventListener("click", function(e){ if (e.target === cartOverlay) closeCartOverlay(); });
cartOverlay.addEventListener("keydown", function(e){ trapAppSheetFocus(e, cartOverlay, closeCartOverlay); });

function openMenuOverlay() { openAppSheet(menuOverlay, menuClose, menuBtn); }
function closeMenuOverlay() { closeAppSheet(menuOverlay, menuBtn); }
menuBtn.addEventListener("click", openMenuOverlay);
menuClose.addEventListener("click", closeMenuOverlay);
menuOverlay.addEventListener("click", function(e){ if (e.target === menuOverlay) closeMenuOverlay(); });
menuOverlay.addEventListener("keydown", function(e){ trapAppSheetFocus(e, menuOverlay, closeMenuOverlay); });

function openAccountOverlay() { renderAccountState(); openAppSheet(accountOverlay, accountClose, accountBtn); }
function closeAccountOverlay() { closeAppSheet(accountOverlay, accountBtn); }
accountBtn.addEventListener("click", openAccountOverlay);
accountClose.addEventListener("click", closeAccountOverlay);
accountOverlay.addEventListener("click", function(e){ if (e.target === accountOverlay) closeAccountOverlay(); });
accountOverlay.addEventListener("keydown", function(e){ trapAppSheetFocus(e, accountOverlay, closeAccountOverlay); });
continueGuestBtn.addEventListener("click", closeAccountOverlay);
document.querySelectorAll("[data-auth-mode]").forEach(function(btn){
  btn.addEventListener("click", function(){ setAuthMode(btn.dataset.authMode); });
});
authForm.addEventListener("submit", handleAuthSubmit);
forgotPasswordBtn.addEventListener("click", requestPasswordReset);
profileForm.addEventListener("submit", updateDisplayName);
signOutBtn.addEventListener("click", signOut);
passwordRecoveryForm.addEventListener("submit", updatePassword);
openAdminBtn.addEventListener("click", function(){
  closeAppSheet(accountOverlay, accountBtn, false);
  openAppSheet(adminOverlay, adminClose, openAdminBtn);
  loadAdminUsers();
});
function closeAdminOverlay() { closeAppSheet(adminOverlay, accountBtn); }
adminClose.addEventListener("click", closeAdminOverlay);
adminOverlay.addEventListener("click", function(e){ if (e.target === adminOverlay) closeAdminOverlay(); });
adminOverlay.addEventListener("keydown", function(e){ trapAppSheetFocus(e, adminOverlay, closeAdminOverlay); });

colorRowEl.querySelectorAll(".color-swatch").forEach(function(btn){
  btn.addEventListener("click", function(){
    profile.accentColor = btn.dataset.color;
    saveProfile();
    applyAccentColor(btn.dataset.color);
  });
});
iconRowEl.querySelectorAll(".icon-swatch").forEach(function(btn){
  btn.addEventListener("click", function(){
    profile.appIcon = btn.dataset.icon;
    saveProfile();
    appIconTileEl.textContent = btn.dataset.icon;
    iconRowEl.querySelectorAll(".icon-swatch").forEach(function(b){ b.classList.toggle("selected", b === btn); });
  });
});
themeToggleEl.querySelectorAll(".tier-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    profile.theme = btn.dataset.themeChoice;
    saveProfile();
    applyTheme(btn.dataset.themeChoice);
  });
});

cartClearBtn.addEventListener("click", function(){ cartMap.clear(); cartWasComplete = false; syncCartToProfile(); renderCart(); saveProfile(); });
cartRemoveCheckedBtn.addEventListener("click", function(){
  Array.from(cartMap.entries()).forEach(function(entry){ if (entry[1].checked) cartMap.delete(entry[0]); });
  cartWasComplete = false;
  syncCartToProfile();
  renderCart();
  saveProfile();
});

resetProgressBtn.addEventListener("click", async function(){
  if (!window.confirm("XP, Abzeichen, Entdeckungen, Kochhistorie, Fotos und Wochenplan löschen? Favoriten, Warenkorb und Einstellungen bleiben erhalten.")) return;
  const preserved = {
    cartItems: profile.cartItems,
    pantryItems: profile.pantryItems,
    favorites: profile.favorites,
    peopleCount: profile.peopleCount,
    weekBudget: profile.weekBudget,
    accentColor: profile.accentColor,
    appIcon: profile.appIcon,
    theme: profile.theme,
    localTier: profile.localTier
  };
  profile = defaultProfile();
  Object.assign(profile, preserved);
  selectedDays.clear();
  lockedDays.clear();
  await saveProfile();
  afterProgressUpdate();
  renderWeekTab();
  restoreCartFromProfile();
  updateFavoritesBadge();
  refreshRecipeLibrary();
  showToast("Fortschritt zurückgesetzt");
});

rollBtn.addEventListener("click", spin);

(async function init(){
  restoreDetachedCookingTimers();
  updatePoolCount();
  renderCart();
  setAuthMode("login");
  try {
    await initializeAuth();
    helperText.textContent = currentSession
      ? (accountLoadedFromCache ? "Angemeldet · offline gespeicherter Stand." : "Angemeldet und synchronisiert.")
      : "Gastmodus – Fortschritt bleibt auf diesem Gerät.";
  } catch (error) {
    currentSession = null;
    currentProfileRow = null;
    profile = await loadGuestProfile();
    tier = profile.localTier === "premium" ? "premium" : "free";
    profileLoaded = true;
    applyProfileToUi();
    helperText.textContent = "Gastmodus – Online-Anmeldung konnte nicht geladen werden.";
    setAuthMessage(error.message || "Online-Anmeldung ist nicht verfügbar.", "error");
  }
})();

window.addEventListener("online", function(){
  if (currentSession && profileLoaded) {
    if (syncStateEl) syncStateEl.textContent = "Internet wieder da – synchronisiert …";
    saveProfile();
  }
});
window.addEventListener("pagehide", function(){
  if (cookingTimerRunning) detachRunningCookingTimer();
  flushBudgetSave();
});

const canRegisterServiceWorker = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
if ("serviceWorker" in navigator && canRegisterServiceWorker) {
  window.addEventListener("load", function(){
    navigator.serviceWorker.register("./service-worker.js").catch(function(error){
      console.warn("Service Worker konnte nicht registriert werden:", error);
    });
  });
}
