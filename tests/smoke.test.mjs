import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const read = (relativePath) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
const exists = (relativePath) => fs.existsSync(path.join(projectRoot, relativePath));

const packageJson = JSON.parse(read('package.json'));
assert.equal(packageJson.name, 'escape-weekend-trip-planner');
for (const script of ['dev', 'build', 'test', 'typecheck']) {
  assert.ok(packageJson.scripts[script], `${script} script is missing`);
}
assert.ok(!packageJson.dependencies.motion, 'Unused motion dependency should be removed');

for (const required of [
  'index.html',
  'vite.config.ts',
  'src/main.tsx',
  'src/App.tsx',
  'src/data/destinations.ts',
  'src/utils/storage.ts',
  'src/utils/filters.ts',
  'src/hooks/useTripLists.ts',
  'src/components/WeekendMatch.tsx',
  'tests/smoke.test.mjs',
  '.github/workflows/main.yml',
]) {
  assert.ok(exists(required), `Required file is missing: ${required}`);
}

const viteConfig = read('vite.config.ts');
assert.match(viteConfig, /base:\s*['"]\/escape_weekend-trip-planner\/['"]/);

const appSource = read('src/App.tsx');
assert.ok(!/\bas any\b|:\s*any\b/.test(appSource), 'App.tsx contains unsafe any casts');
assert.ok(!appSource.includes('import.meta.env'), 'App.tsx should not depend on runtime environment injection');
assert.match(appSource, /WeekendMatch/);

const filterSource = read('src/utils/filters.ts');
assert.match(filterSource, /filterAndSortDestinations/);
assert.match(filterSource, /calculateWeekendMatch/);
assert.match(filterSource, /Math\.min\(100/);

const destinationSource = read('src/data/destinations.ts');
assert.ok(!destinationSource.includes('images.unsplash.com'), 'Destination data contains external image URLs');

const heroSource = read('src/components/Hero.tsx');
assert.ok(!heroSource.includes('images.unsplash.com'), 'Hero contains external image URL');

const cardSource = read('src/components/DestinationCard.tsx');
assert.match(cardSource, /aria-pressed=\{isFavorite\}/);
assert.match(cardSource, /aria-pressed=\{isCompared\}/);

for (const image of ['goa.webp', 'jaipur.webp', 'manali.webp', 'mount-abu.webp', 'pushkar.webp', 'rishikesh.webp', 'saputara.webp', 'udaipur.webp']) {
  assert.ok(exists(`public/images/${image}`), `Optimized image is missing: ${image}`);
}

for (const forbidden of ['.env.example', 'metadata.json']) {
  assert.ok(!exists(forbidden), `Unnecessary configuration file still exists: ${forbidden}`);
}

console.log('✅ ESCAPE evaluator smoke tests passed');
