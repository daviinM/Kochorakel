import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const pkg = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));

async function replaceInFile(relativePath, pattern, replacement) {
  const file = resolve(root, relativePath);
  const before = await readFile(file, "utf8");
  if (!pattern.test(before)) throw new Error(`Versionsmarkierung fehlt: ${relativePath}`);
  const after = before.replace(pattern, replacement);
  if (after !== before) await writeFile(file, after, "utf8");
}

await replaceInFile(
  "index.html",
  /Kochorakel · Version \d+\.\d+\.\d+/,
  `Kochorakel · Version ${pkg.version}`
);
await replaceInFile(
  "public/service-worker.js",
  /const CACHE_NAME = "kochorakel-v[^"]+";/,
  `const CACHE_NAME = "kochorakel-v${pkg.version}";`
);

console.log(`Version ${pkg.version} synchronisiert.`);
