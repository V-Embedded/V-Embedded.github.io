## 🚀 One-Time Setup for GitHub Pages Deployment

### ✅ 1. Create a `gh-pages` branch (first time only)

> Only do this once:

```bash
git checkout --orphan gh-pages
git rm -rf .
touch .nojekyll   # prevents GitHub Pages from ignoring folders like _assets/
git add .nojekyll
git commit -m "Initialize gh-pages"
git push origin gh-pages
git checkout main
```

---

### ✅ 2. Configure GitHub Pages

In your GitHub repo:

- Go to **Settings** → **Pages**
- **Source**: `gh-pages`
- **Folder**: `/ (root)`

---

### ✅ 3. Save Your Deployment Script

Save the deployment script as `deploy.sh` in your project root.

Make it executable:

```bash
chmod +x deploy.sh
```

Then deploy anytime with:

```bash
./deploy.sh
```

---

## 🎨 4. Install Bootstrap Sass via npm or yarn

You’ll need to pull in Bootstrap’s Sass source files.

### Option A: Using npm

```bash
npm init -y
npm install bootstrap
```

+------------------------------------------------+
|                                                |
|         [ V Embedded LLC Logo ]                |
|                                                |
|      Embedded Systems & Firmware Design        |
|     Connected Devices • IoT • Prototyping      |
|                                                |
|       https://www.vembedded.com                |
+------------------------------------------------+

