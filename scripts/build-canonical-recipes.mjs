import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { dishes as sourceDishes, ingredientVocab as sourceIngredients } from '../src/data/recipes.js';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(scriptDir, '../src/data/recipes.js');

const allergenIngredients = {
  gluten: new Set(['nudeln','mehl','toast','couscous','tortilla','gnocchi','sojasauce','bulgur','haferflocken','loeffelbiskuits','paniermehl','bagel','filoteig','fladenbrot','gyozateig','fruehlingsrollenteig','baguette','lasagneplatten','butterkekse','burgerbroetchen','udonnudeln']),
  milch: new Set(['milch','sahne','butter','reibekaese','joghurt','mozzarella','feta','pesto','quark','parmesan','frischkaese','mascarpone','halloumi','ricotta','cheddar','paneer']),
  laktose: new Set(['milch','sahne','butter','reibekaese','joghurt','mozzarella','feta','quark','frischkaese','mascarpone','halloumi','ricotta','cheddar','paneer']),
  eier: new Set(['eier','loeffelbiskuits']),
  nuesse: new Set(['mandeln','pesto']),
  erdnuesse: new Set(['erdnuesse']),
  soja: new Set(['tofu','sojasauce','miso']),
  fisch: new Set(['fisch','thunfisch','lachs','raeucherlachs','fischsauce']),
  schalentiere: new Set(['garnelen']),
  sesam: new Set(['sesam']),
  sellerie: new Set(['sellerie']),
  senf: new Set(['senf'])
};

const unitMinutes = { minute: 1, minuten: 1, stunde: 60, stunden: 60, tag: 1440, tage: 1440, tagen: 1440 };

function capitalize(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : trimmed;
}

function ensurePeriod(text) {
  const clean = text.trim();
  return /[.!?]$/.test(clean) ? clean : clean + '.';
}

function splitLogicalStep(text) {
  const parts = text.split(/;\s+/).map(part => part.trim()).filter(Boolean);
  if (parts.length < 2 || parts.some(part => part.length < 18)) return [text.trim()];
  return parts.map(part => ensurePeriod(capitalize(part)));
}

function durationCandidates(text) {
  const normalized = text.toLowerCase();
  const candidates = [];
  const range = /(\d+)\s*(?:bis|–|-)\s*(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  const single = /(\d+)\s*(minuten?|stunden?|tage?n?)/g;
  let match;
  while ((match = range.exec(normalized))) {
    const unit = match[3].replace(/n$/, '');
    const factor = unitMinutes[unit] || unitMinutes[match[3]] || 1;
    candidates.push(Number(match[2]) * factor);
  }
  while ((match = single.exec(normalized))) {
    const unit = match[2].replace(/n$/, '');
    const factor = unitMinutes[unit] || unitMinutes[match[2]] || 1;
    candidates.push(Number(match[1]) * factor);
  }
  if (/über nacht/.test(normalized)) candidates.push(480);
  return candidates.filter(value => Number.isFinite(value) && value > 0);
}

function timerForStep(text) {
  const candidates = durationCandidates(text);
  return candidates.length ? Math.max(...candidates) : null;
}

function allergensForIngredients(ingredients) {
  return Object.entries(allergenIngredients)
    .filter(([, ids]) => ingredients.some(id => ids.has(id)))
    .map(([allergen]) => allergen);
}

function cleanAmountMap(dish) {
  return Object.fromEntries(dish.ingredients.map(id => [id, dish.amounts[id]]));
}

const dishes = sourceDishes.map((dish, index) => {
  const steps = dish.steps.flatMap(splitLogicalStep).slice(0, 8);
  const stepTimers = steps.map(timerForStep);
  const longestExplicitTimer = Math.max(0, ...stepTimers.filter(Boolean));
  const baseMinutes = dish.prepMinutes + dish.cookMinutes;
  const restMinutes = Number.isFinite(dish.restMinutes)
    ? Math.max(0, dish.restMinutes)
    : (longestExplicitTimer > dish.minutes ? longestExplicitTimer : 0);
  const minutes = baseMinutes + restMinutes;
  return {
    id: `ko-${String(index + 1).padStart(4, '0')}`,
    name: dish.name,
    emoji: dish.emoji,
    time: minutes <= 30 ? 'schnell' : minutes >= 60 ? 'aufwendig' : 'normal',
    diet: dish.diet,
    type: dish.type,
    premium: dish.premium === true,
    ingredients: [...dish.ingredients],
    amounts: cleanAmountMap(dish),
    prepMinutes: dish.prepMinutes,
    cookMinutes: dish.cookMinutes,
    restMinutes,
    minutes,
    difficulty: dish.difficulty,
    allergens: allergensForIngredients(dish.ingredients),
    steps,
    stepTimers,
    tip: dish.tip
  };
});

const banner = `// Kochorakel 0.2.3 – kanonische Rezeptdaten.\n// Diese Datei enthält alle Rezepte, Mengen, Schritte, Timer und Allergenangaben.\n\n`;
const moduleText = banner +
  `export const ingredientVocab = ${JSON.stringify(sourceIngredients, null, 2)};\n\n` +
  `export const dishes = ${JSON.stringify(dishes, null, 2)};\n`;

await writeFile(outputPath, moduleText, 'utf8');
console.log(JSON.stringify({ outputPath, dishes: dishes.length, ingredients: Object.keys(sourceIngredients).length, variableStepRecipes: dishes.filter(d => d.steps.length !== 5).length, timerSteps: dishes.reduce((sum, dish) => sum + dish.stepTimers.filter(Boolean).length, 0) }, null, 2));
