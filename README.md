# V EMBEDDED Website

Jekyll website for V EMBEDDED, built locally with Bundler/npm and deployed from a local release command.

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

## Deployment

From an up-to-date, clean `main` branch, publish a release with:

```bash
npm run release
```

The command runs content validation, Jekyll doctor, a production build, HTMLProofer, and an `_site/index.html` check before incrementing the patch version. It then commits and pushes the version update to `main`, creates and pushes a `v<version>` release tag, publishes `_site` to the root of `gh-pages`, and refreshes `devel` from `main`.

In the repository's GitHub Pages settings, set **Build and deployment** to **Deploy from a branch**, then select the `gh-pages` branch and the `/(root)` folder. The published URL is `https://v-embedded.github.io`.

## Site Version

The site version is stored in:

- `package.json`
- `package-lock.json`
- `_data/site_version.yml`

The footer displays the version from `_data/site_version.yml`. `npm run release` increments the patch version automatically after all release checks pass.

## Publishing Changes

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

Run `npm run release` when the committed changes are ready to publish.
