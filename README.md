# HOW TO USE THIS WEBSITE

Congratulations on your new portfolio! This project follows a **Constructivist** and **Functional** design style, specifically tailored for a student in AI and Psychology.

## 1. Setup Your Assets
Before publishing, you need to add your personal files to the `assets/` folder:
- **Professional Photo (Home):** Name it `IMG_8484.JPG`.
- **Personal Photo (About):** Name it `about-fun.JPG`.
- **Resume:** Name it `Jake Altom - Resume.pdf`.

## 2. How to Edit Text
- **Names/Titles:** Every HTML file (`index.html`, `about.html`, etc.) has clearly commented sections. Search for your name or school to make quick changes.
- **Projects:** Open `projects.html` and edit the content within the `<div class="project-card">` blocks.
- **Colors:** Open `style.css`. At the very top, you'll see a `:root` section. Change `--primary-color` (Forest Green) or `--secondary-color` (Cream) to experiment with different looks.

## 3. How to Upload to GitHub
1. Create a new repository on GitHub (e.g., `jake-portfolio`).
2. Initialize git in your local folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
3. Connect and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## 4. How to Publish on GitHub Pages
1. Go to your repository on GitHub.com.
2. Click on **Settings**.
3. In the left sidebar, click **Pages**.
4. Under "Build and deployment", select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Click **Save**.
7. In a few minutes, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

## 5. Features
- **Dark Mode:** A toggle is provided in the navigation. Your preference is saved using your browser's local storage.
- **Responsive Design:** The layout automatically adjusts for mobile and desktop viewing.
- **Constructivist Style:** High-contrast grids and bold typography provide a professional and academic vibe.

---
Built by Jake Altom (and your AI assistant).
