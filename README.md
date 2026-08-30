# Portfolio

Personal portfolio website, built to showcase my projects and background as a client-server software engineer.

**Live site:** [yumankh.github.io/Portfolio](https://yumankh.github.io/Portfolio/)

## About This Project

This page was first built as a static HTML/CSS site to practice core web fundamentals without any framework.

It was then rebuilt from scratch using React and TypeScript, introducing component-based architecture and client-side routing with React Router.

## Tech Stack

- **React** — component-based UI
- **TypeScript** — static typing across the frontend
- **React Router** — client-side navigation between pages
- **Vite** — build tool and dev server
- **CSS** — custom styling, no framework

## Project Structure

```
src/
├── assets/          # images and static assets
├── Header.tsx
├── Footer.tsx
├── MainPage.tsx      # project showcase
├── AboutMe.tsx
├── ContactMe.tsx
├── App.tsx           # routes
├── main.tsx           # entry point
└── index.css           # global styles
```

## Running Locally

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Deployment

Deployed to GitHub Pages via the `gh-pages` package:

```bash
npm run build
npm run deploy
```

## Author

**© 2026 Yuman Khoufache. All rights reserved.** 

- GitHub: [@YumanKh](https://github.com/YumanKh)