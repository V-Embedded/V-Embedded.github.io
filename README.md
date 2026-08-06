# Content editing: products & tutorials

This site reads products from `data/products.json` and tutorials from markdown files in `content/tutorials/`.

Add or edit products

- Open `data/products.json` and add an object with:
  - `slug` (unique, used in URLs),
  - `name`,
  - `category`,
  - `summary`,
  - `description`,
  - optional `highlights` (array of strings).

Example entry:

```
{
  "slug": "my-product",
  "name": "My Product",
  "category": "Board",
  "summary": "Short summary",
  "description": "Full description",
  "highlights": ["Feature A", "Feature B"]
}
```

Add or edit tutorials

- Create a markdown file in `content/tutorials/` named `your-slug.md`.
- Include frontmatter at the top with `title` and optional `description`:

```
---
title: My Tutorial
description: Short summary
---

Your markdown content here.
```

Validation

- Run content validation to catch missing fields and duplicate slugs:

```bash
npm run validate-content
```

Build / develop

```bash
npm install
npm run dev
npm run build
```
# V Embedded LLC Website

A modern Next.js and Tailwind CSS site for V Embedded LLC, designed for educational embedded hardware content and hosted on GitHub Pages.

## Tech stack
- Next.js 14 (App Router)
- Tailwind CSS
- Static export for GitHub Pages

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000.

## Production build

Build the static export:

```bash
npm run build
```

The generated site output will be written to the [site](site) directory.

## Deployment to GitHub Pages

This project uses GitHub Actions to build and deploy the site automatically.

### GitHub Pages setup
1. Go to your repository settings.
2. Open Pages.
3. Set the source to the gh-pages branch.
4. Use the root folder for the published site.

### Automatic deployment
Push changes to the main branch and the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will:
- install dependencies
- run the production build
- publish the contents of [site](site) to the gh-pages branch

### Manual deployment
If you need to publish manually, you can run:

```bash
npm run build
```

Then push the generated contents of [site](site) to the gh-pages branch.

## Project structure
- [app](app) contains the App Router pages and layouts
- [public](public) can be used for static assets if needed
- [site](site) is the generated static export output
