import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// Disable deprecated options that cause warnings in marked@5+
marked.setOptions({ mangle: false, headerIds: false });

const dataDir = path.join(process.cwd(), 'data');
const tutorialsDir = path.join(process.cwd(), 'content', 'tutorials');

export function getProducts() {
  const file = path.join(dataDir, 'products.json');
  const raw = fs.readFileSync(file, 'utf8');
  return JSON.parse(raw);
}

export function getProductBySlug(slug) {
  return getProducts().find((p) => p.slug === slug);
}

function parseFrontMatter(raw) {
  // very small frontmatter parser: expects ---\nkey: value lines\n---\ncontent
  if (!raw.startsWith('---')) return { data: {}, content: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {}, content: raw };
  const fm = raw.slice(3, end + 1).trim();
  const content = raw.slice(end + 4).trim();
  const data = {};
  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      try { val = JSON.parse(val); } catch (e) { val = val.slice(1, -1).split(',').map(s => s.trim()); }
    }
    data[key] = val;
  });
  return { data, content };
}

function markdownToHtml(md) {
  return marked.parse(md || '');
}

function escapeHtml(str) {
  return str.replace(/[&<>\"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

export function getTutorials() {
  if (!fs.existsSync(tutorialsDir)) return [];
  const files = fs.readdirSync(tutorialsDir).filter((f) => f.endsWith('.md'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(tutorialsDir, file), 'utf8');
    const { data, content } = parseFrontMatter(raw);
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title || file.replace(/\.md$/, ''),
      description: data.description || (content.split('\n').find(l => l.trim()) || '').slice(0, 160),
      content,
    };
  });
}

export function getTutorialBySlug(slug) {
  const file = path.join(tutorialsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = parseFrontMatter(raw);
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    html: markdownToHtml(content),
    raw: content,
  };
}
