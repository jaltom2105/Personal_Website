# Developer & Maintenance Guide

This guide contains instructions on how to maintain, update, and deploy the Jake Altom Portfolio.

## 1. Setup Your Assets
Before publishing, ensure personal files are in the `assets/` folder:
- **Professional Photo (Home):** Name it `IMG_8484.JPG`.
- **Personal Photo (About):** Name it `about-fun.JPG`.
- **Resume:** Name it `Jake Altom - Resume.pdf`.

## 2. How to Edit Content
- **Text Content:** Every HTML file (`index.html`, `about.html`, etc.) has clearly commented sections. Search for specific text to make updates.
- **Projects:** Open `projects.html` and edit the content within the `project-card` blocks.
- **Styling:** Open `style.css`. The `:root` section contains high-level theme variables like `--primary-color` and `--accent-color`.

## 3. How to Upload to GitHub
1. Create a repository on GitHub.
2. Run these commands in your project root:
   ```bash
   git init
   git add .
   git commit -m "Deployment commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## 4. How to Publish on GitHub Pages
1. Go to your repository **Settings**.
2. Click **Pages** in the sidebar.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Save and wait for the live URL to generate.
