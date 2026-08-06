const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dataFile = path.join(root, 'data', 'products.json');
const tutorialsDir = path.join(root, 'content', 'tutorials');

function fail(msg) {
  console.error('Validation error:', msg);
  process.exitCode = 1;
}

function validateProducts() {
  if (!fs.existsSync(dataFile)) return;
  const raw = fs.readFileSync(dataFile, 'utf8');
  let products;
  try { products = JSON.parse(raw); } catch (e) { fail('data/products.json is not valid JSON'); return; }
  const seen = new Set();
  products.forEach((p, i) => {
    if (!p.slug) fail(`Product at index ${i} missing slug`);
    if (!p.name) fail(`Product at index ${i} missing name`);
    if (!p.category) fail(`Product ${p.slug || i} missing category`);
    if (seen.has(p.slug)) fail(`Duplicate product slug: ${p.slug}`);
    seen.add(p.slug);
  });
}

function parseFrontMatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const fm = raw.slice(3, end + 1).trim();
  const data = {};
  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    data[key] = val;
  });
  return data;
}

function validateTutorials() {
  if (!fs.existsSync(tutorialsDir)) return;
  const files = fs.readdirSync(tutorialsDir).filter((f) => f.endsWith('.md'));
  const seen = new Set();
  files.forEach((file) => {
    const raw = fs.readFileSync(path.join(tutorialsDir, file), 'utf8');
    const data = parseFrontMatter(raw);
    const slug = file.replace(/\.md$/, '');
    if (!data.title) fail(`Tutorial ${slug} missing frontmatter title`);
    if (seen.has(slug)) fail(`Duplicate tutorial slug: ${slug}`);
    seen.add(slug);
  });
}

function run() {
  validateProducts();
  validateTutorials();
  if (process.exitCode === 1) {
    console.error('Content validation failed');
    process.exit(1);
  }
  console.log('Content validation passed');
}

run();
