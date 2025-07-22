Create a gh-pages branch (first time only)
Only do this once:


git checkout --orphan gh-pages
git rm -rf .
touch .nojekyll   # prevents GitHub Pages from ignoring folders like _assets/
git add .nojekyll
git commit -m "Initialize gh-pages"
git push origin gh-pages
git checkout main


4. ✅ Configure GitHub Pages
In your GitHub repo → Settings → Pages:

Source: gh-pages

Folder: / (root)



Save as deploy.sh in your project root.

Make executable:

bash

chmod +x deploy.sh

Deploy anytime with:

bash

./deploy.sh


✅ 1. Install Bootstrap Sass via npm or yarn
You’ll need to pull in Bootstrap’s Sass source files.

Option A: Using npm
bash
Copy
Edit
npm init -y
npm install bootstrap