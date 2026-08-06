# V EMBEDDED Website

Jekyll website for V EMBEDDED, built locally with Bundler/npm and deployed automatically with GitHub Actions.

## Local Setup

```bash
git clone https://github.com/V-Embedded/V-Embedded.github.io
cd V-Embedded.github.io
npm install
bundle install
```

## Develop Locally

```bash
npm run dev
```

Open http://localhost:4000 in your browser.

## Local Checks

Run the same checks used before deployment:

```bash
npm run doctor
npm run build
npm run proof
```

`npm run proof` runs HTMLProofer against `_site` after a build. External links are disabled, so the check focuses on generated HTML, internal links, images, scripts, and HTTPS enforcement.

## Deployment

Deployment is handled by `.github/workflows/ci.yml`. Do not deploy manually.

When a pull request targets `main`, GitHub Actions runs:

```bash
npm run doctor
npm run build
npm run proof

```

When changes are pushed or merged into `main`, GitHub Actions:

1. Increments the patch site version.
2. Commits the updated version files back to `main` with `[skip ci]`.
3. Runs the pre-deploy checks.
4. Builds the production site into `_site`.
5. Publishes the generated site to the root of the `gh-pages` branch.
6. Refreshes the `devel` branch from the updated `main`.

In the repository's GitHub Pages settings, set **Build and deployment** to **Deploy from a branch**, then select the `gh-pages` branch and the `/(root)` folder. The published URL is `https://v-embedded.github.io`.

## Site Version

The site version is stored in:

- `package.json`
- `package-lock.json`
- `_data/site_version.yml`

The footer displays the version from `_data/site_version.yml`. On every normal push or merge to `main`, the workflow increments the patch version automatically.

To bump the version manually for testing:

```bash
npm run version:bump
```

Only commit a manual version bump if you intentionally want to change the displayed site version outside the deployment workflow.

## Publishing Changes

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

After the push, check the GitHub Actions run for deployment status.
