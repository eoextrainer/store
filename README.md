# EOEX App Store – Project Documentation

**Project:** EOEX App Store  
**Author:** EOEX  
**Contributor:** Sosthene Grosset-Janin  
**Email:** educ1.eoex@gmail.com  
**Version:** v1.0.0-beta  
**Date:** December 2025

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Git & GitHub Integration](#git--github-integration)
3. [Python Virtual Environment](#python-virtual-environment)
4. [Dockerization](#dockerization)
5. [Frontend Development](#frontend-development)
6. [GitHub Pages Setup & Deployment](#github-pages-setup--deployment)
7. [Testing & Validation](#testing--validation)
8. [Tech Stack & Installation Scripts](#tech-stack--installation-scripts)
9. [Design, Layout, and Digital Assets](#design-layout-and-digital-assets)
10. [Backup, Archive, and Recovery](#backup-archive-and-recovery)
11. [Cloning & Redeployment](#cloning--redeployment)
12. [Appendix: Useful Scripts](#appendix-useful-scripts)

---

## Project Setup

### 1. Create Project Folder

```bash
mkdir -p /media/eoex/DOJO/CONSULTING/PROJECTS/TEST/eoex-test-store-HOSTED
cd /media/eoex/DOJO/CONSULTING/PROJECTS/TEST/eoex-test-store-HOSTED
```

### 2. Initialize Git

```bash
git init
```

---

## Git & GitHub Integration

### 1. Create GitHub Repository

- Repo: `git@github.com:eoextrainer/store.git`

### 2. Add Remote and Sync

```bash
git remote add origin git@github.com:eoextrainer/store.git
git branch -M main
git push -u origin main
```

### 3. Regular Commits & Restore Points

```bash
git add .
git commit -m "Describe your change"
git tag restore-point-YYYYMMDD
git push origin main --tags
```

---

## Python Virtual Environment

### 1. Create and Activate venv

```bash
python3 -m venv venv
source venv/bin/activate
```

### 2. Add venv to Git (if required)

```bash
git add venv/
git commit -m "Include Python venv"
git push
```

---

## Dockerization

### 1. Create Dockerfile

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "5000"]
```

### 2. Build and Run Docker Container

```bash
docker build -t eoex-app-store .
docker run -d -p 5000:5000 eoex-app-store
```

---

## Frontend Development

### 1. Create React App (with TypeScript)

```bash
npx create-react-app eoex-store-app --template typescript
cd eoex-store-app
```

### 2. Install Dependencies

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom gh-pages
```

### 3. Project Structure

```
eoex-store-app/
  public/
    index.html
    manifest.json
    favicon.ico
  src/
    App.js
    ContentGrid.js
    Header.js
    SubNav.js
    HeroSection.js
    FilterBar.js
    Footer.js
    App.css
    index.tsx
```

---

## GitHub Pages Setup & Deployment

### 1. Configure `package.json`

```json
"homepage": "https://eoextrainer.github.io/store",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 2. Build and Deploy

```bash
npm run build
npm run deploy
```

### 3. Set GitHub Pages Source

- Go to GitHub repo > Settings > Pages
- Set source to `gh-pages` branch

---

## Testing & Validation

### 1. Local Testing

```bash
npm start
```

### 2. Remote Testing with `curl`

```bash
curl -I https://eoextrainer.github.io/store/
curl https://eoextrainer.github.io/store/
```

### 3. Browser Testing

- Test on Chrome, Firefox, Safari, Edge
- Test on mobile and desktop

---

## Tech Stack & Installation Scripts

### 1. Tech Stack

- **Frontend:** React (TypeScript/JavaScript), Material UI, CSS Modules
- **Deployment:** GitHub Pages, Docker
- **Dev Tools:** Node.js, npm, Python 3, venv, git, gh-pages

### 2. Install All Dependencies (Linux)

```bash
# System
sudo apt update
sudo apt install -y python3 python3-venv python3-pip git docker.io nodejs npm

# Node & React
npm install -g npx
npx create-react-app eoex-store-app --template typescript
cd eoex-store-app
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom gh-pages

# Python venv
python3 -m venv venv
source venv/bin/activate

# Docker
sudo systemctl start docker
sudo systemctl enable docker
```

---

## Design, Layout, and Digital Assets

### 1. Fonts

- Google Sans (headings)
- Roboto (body)
- Material Symbols (icons)

### 2. Colors

- Primary: `#34A853`
- Accent Blue: `#4285F4`
- Accent Yellow: `#FBBC05`
- Accent Red: `#EA4335`
- Background: `#FFFFFF`
- Surface: `#F8F9FA`
- Card: `#FFFFFF`
- Text Primary: `#202124`
- Text Secondary: `#5F6368`

### 3. Layout

- 12-column responsive grid, max width 1280px
- 5x3 app grid (15 tiles)
- Sticky header, sub-nav, hero, filter bar, footer

### 4. Digital Assets (App Images)

```
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1dqVdAnnoQboletpfBXr0f8WuISentbaGA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcq7uY8sL-1Lchx7pns28m44RxgtbF2IrZA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNToyl3NGiCln1a_ZfR_KYEZOjq2uOEALkA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq2GXMNBfoXjErAJ7gz5JXVMVV1efI5ZTEA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtYSTg7onAO8H5Og408CxXcsNrsd85jEaoA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfun9D1pOz7Z4MFqZTzezqIsZSkY_3UhQAAw&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6PhfQoI88H45GmAMwOg-bUN-IPPtVEokwA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaENOBc2-4F6vc8-SxlIUyOItHSz0_3NxlLQ&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYLDdujw0NLJWt0iQYlu_HVArT7PklPc4_w&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdKMUDbQcXSW8mi4vHANgXLsbiJOfLWb1mw&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYLDdujw0NLJWt0iQYlu_HVArT7PklPc4_w&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcq7uY8sL-1Lchx7pns28m44RxgtbF2IrZA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNToyl3NGiCln1a_ZfR_KYEZOjq2uOEALkA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq2GXMNBfoXjErAJ7gz5JXVMVV1efI5ZTEA&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtYSTg7onAO8H5Og408CxXcsNrsd85jEaoA&s
```

---

## Backup, Archive, and Recovery

### 1. Create Archive Branch

```bash
git checkout -b archive
```

### 2. Create ZIP and TAR.GZ Archives

```bash
cd ..
zip -r eoex-app-store.zip eoex-store-app
tar -czvf eoex-app-store.tar.gz eoex-store-app
git add eoex-app-store.zip eoex-app-store.tar.gz
git commit -m "Add project archives"
git push origin archive
```

### 3. Restore from GitHub or Archive

```bash
# From GitHub
git clone git@github.com:eoextrainer/store.git

# From archive
unzip eoex-app-store.zip
# or
tar -xzvf eoex-app-store.tar.gz
```

---

## Cloning & Redeployment

### 1. Clone to New Location

```bash
git clone git@github.com:eoextrainer/store.git /media/eoex/DOJO/CONSULTING/PROJECTS/LAB/eoex-app-store
cd /media/eoex/DOJO/CONSULTING/PROJECTS/LAB/eoex-app-store/eoex-store-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build and Deploy

```bash
npm run build
npm run deploy
```

---

## Appendix: Useful Scripts

### 1. Full Local Setup Script

```bash
#!/bin/bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip git docker.io nodejs npm zip
git clone git@github.com:eoextrainer/store.git eoex-app-store
cd eoex-app-store/eoex-store-app
python3 -m venv venv
source venv/bin/activate
npm install
npm run build
npm run deploy
```

---

**End of Document**
