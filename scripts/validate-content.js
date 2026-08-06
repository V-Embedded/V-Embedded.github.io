const fs = require('fs');
const path = require('path');

const root = process.cwd();
const productsDir = path.join(root, '_products');
const postsDir = path.join(root, '_posts');

function fail(msg) {
  console.error('Validation error:', msg);
  process.exitCode = 1;
}

function validateMarkdownDirectory(directory, requiredFields, label) {
  if (!fs.existsSync(directory)) {
    fail(`${label} directory is missing`);
    return;
  }

  const files = fs.readdirSync(directory).filter((file) => file.endsWith('.md'));
  const seen = new Set();
  files.forEach((file) => {
    const raw = fs.readFileSync(path.join(directory, file), 'utf8');
    const data = parseFrontMatter(raw);
    requiredFields.forEach((field) => {
      if (!data[field]) fail(`${label} ${file} missing frontmatter ${field}`);
    });
    const slug = data.slug || file.replace(/\.md$/, '');
    if (seen.has(slug)) fail(`Duplicate ${label.toLowerCase()} slug: ${slug}`);
    seen.add(slug);
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

function run() {
  validateMarkdownDirectory(productsDir, ['title', 'name', 'category', 'summary', 'description'], 'Product');
  validateMarkdownDirectory(postsDir, ['title', 'date'], 'Tutorial');
  if (process.exitCode === 1) {
    console.error('Content validation failed');
    process.exit(1);
  }
  console.log('Content validation passed');
}

run();
