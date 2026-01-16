# Deployment Guide

Detailed instructions on how to submit your work for "Add to Cart Task Using Router".

## 1. Prepare Your Code
Ensure your project works locally:
```bash
npm run dev
```
If everything looks good, you are ready to ship.

## 2. Push to GitHub
1.  Create a new repository on [GitHub](https://github.com/new) named `router-shopping-cart`.
2.  Initialize git in your project folder (if not already done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit - Add to Cart App"
    ```
3.  Link your local repo to GitHub:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/router-shopping-cart.git
    git branch -M main
    git push -u origin main
    ```

## 3. Deploy to Netlify
1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import from existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify and choose your `router-shopping-cart` repository.
5.  **Build Settings**:
    - **Base directory**: (leave empty)
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Click **"Deploy site"**.

## 4. Submit
Once deployed, copy your **Netlify URL** (e.g., `https://your-site-name.netlify.app`) and your **GitHub Repo URL** and submit them in the portal.
