# Developer & Maintenance Guide

This guide contains instructions on how to maintain, update, and deploy the Jake Altom Portfolio.

## 1. Setup Your Assets
For your assets to appear on GitHub Pages, they **must** be placed in the `public/assets/` folder. This ensures the technical build process includes them in your final website.

- **Professional Photo (Home):** Place in `public/assets/IMG_8484.JPG`.
- **Personal Photo (About):** Place in `public/assets/about-fun.JPG` (currently missing).
- **Resume:** Place in `public/assets/jake-altom-resume.pdf`. 

> **Note:** Filenames are case-sensitive on GitHub. Ensure they match the code exactly (e.g., `.JPG` vs `.jpg`).

## 2. How to Edit Content
- **Text Content:** Every HTML file (`index.html`, `about.html`, etc.) has clearly commented sections. Search for specific text to make updates.
- **Projects:** Open `projects.html` and edit the content within the `project-card` blocks.
- **Styling:** Open `style.css`. The `:root` section contains high-level theme variables like `--primary-color` and `--accent-color`.

## 3. How to Upload to GitHub
When you export to GitHub from AI Studio, it will handle most of this. If you are doing it manually:
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Deployment commit"
   ```
2. Connect and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## 4. How to Publish on GitHub Pages
1. Go to your repository **Settings**.
2. Click **Pages** in the sidebar.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder (if you are pushing the built `dist` folder, choose that instead, or use a GitHub Action for Vite).

