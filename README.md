# SahajPath — सहज पथ

A family companion for the teachings of Babuji Maharaj.

🌐 **Live**: https://shubham101194.github.io/sahajpath

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/sahajpath/`

## Deploy to GitHub Pages

```bash
# 1. Create a repo called "sahajpath" on GitHub

# 2. Push this code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/shubham101194/sahajpath.git
git push -u origin main

# 3. Deploy
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch.
GitHub Pages will serve it at `https://shubham101194.github.io/sahajpath`

## Features

- 📖 Daily teachings from Babuji Maharaj's works (28 days / Month 1)
- 🕉️ All Ten Maxims with commentary and practice tips
- 🌐 Bilingual: English + Hindi
- ⭐ Save favorite teachings
- 💬 Share via WhatsApp
- 📱 PWA: Add to Home Screen for app-like experience
- 🔌 Works offline (all content is local)
- 🔢 Day picker: jump to any day

## Tech

React + TypeScript + Vite + Zustand + React Router
Hosted on GitHub Pages. No backend. No accounts.

Built with love for our family. 🙏
