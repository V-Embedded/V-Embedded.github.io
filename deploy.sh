#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables (edit if needed)
BUILD_DIR="_site"
BRANCH="gh-pages"
MAIN_BRANCH="main"

echo "📦 Building Jekyll site..."
bundle exec jekyll build

echo "🔀 Switching to $BRANCH branch..."
git checkout $BRANCH

echo "🧹 Cleaning branch..."
# Remove everything tracked
git rm -rf . > /dev/null

echo "📁 Copying built site to root..."
cp -r $BUILD_DIR/* ./

# Optional: prevent GitHub Pages from using Jekyll processing
touch .nojekyll

echo "📌 Committing changes..."
git add .
git commit -m "Deploy site on $(date +'%Y-%m-%d %H:%M:%S')"

echo "🚀 Pushing to $BRANCH..."
git push origin $BRANCH

echo "🔄 Returning to $MAIN_BRANCH..."
git checkout $MAIN_BRANCH

echo "✅ Done!"