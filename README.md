# Config-Driven React Application

A **Config-Driven UI React application** where pages, layouts, and components are rendered dynamically using configuration instead of hardcoded page components.

This project demonstrates a scalable UI architecture using a **Component Registry + Resolver pattern**, strong **TypeScript type safety**, and **theme switching**.

---

## ✅ Features

- **Config-driven pages**
  - Entire page structure is controlled through config
  - Add new pages by editing config only
- **Reusable UI components**
  - Generic, reusable components (no page-specific components)
- **Component Resolver**
  - Maps config objects → React components using a registry pattern
- **Strong TypeScript safety**
  - Config objects are strictly typed using discriminated unions
- **Theme system**
  - Themes stored in configuration (`dark` / `light`)
  - Runtime theme switching via toggle button
  - Theme applied using CSS variables

---

## 🛠️ Tech Stack

- React + TypeScript
- React Router DOM
- Tailwind CSS
- Config-driven architecture

---

## 🚀 Getting Started (Run Locally)

### 1) Clone repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd <PROJECT_FOLDER>

🔧 Development
Scripts
bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint


🧩 Architecture Overview

The app follows this rendering pipeline:

AppConfig → PageRenderer → ComponentResolver → UI

1) AppConfig

appConfig contains:

theme (themes + active theme)

navigation items

pages (route + title + components)

Example:

pages: {
  home: homePage,
  products: productsPage,
  profile: profilePage,
}

2) Page Rendering

The page renderer reads the matching page config based on route and renders its components list.

Example:

components: [
  { type: "hero", title: "...", subtitle: "..." },
  { type: "section", title: "Features", children: [...] }
]

3) ComponentResolver (Core Concept)

Each config object is rendered using a registry:

const registry = {
  heading: Heading,
  paragraph: Paragraph,
  hero: Hero,
  section: Section,
  ...
};


Example config:

{ type: "heading", text: "Welcome", level: 1 }


Rendered output:

<Heading text="Welcome" level={1} />


✅ This makes UI fully driven by config, not hardcoded pages.


3) ComponentResolver (Core Concept)

Each config object is rendered using a registry:

const registry = {
  heading: Heading,
  paragraph: Paragraph,
  hero: Hero,
  section: Section,
  ...
};


Example config:

{ type: "heading", text: "Welcome", level: 1 }


Rendered output:

<Heading text="Welcome" level={1} />


✅ This makes UI fully driven by config, not hardcoded pages.

➕ Add a New Page (Config Only)

To add a new page:

1) Create a new page config

Create: src/config/pages/about.page.ts

import type { PageConfig } from "../types";

export const aboutPage: PageConfig = {
  route: "/about",
  title: "About",
  components: [
    {
      type: "hero",
      title: "About Page",
      subtitle: "This page was added using config only",
    },
  ],
};  

➕ Add a New Page (Config Only)

To add a new page:

1) Create a new page config

Create: src/config/pages/about.page.ts

import type { PageConfig } from "../types";

export const aboutPage: PageConfig = {
  route: "/about",
  title: "About",
  components: [
    {
      type: "hero",
      title: "About Page",
      subtitle: "This page was added using config only",
    },
  ],
};

📁 Folder Structure
src/
  components/
    renderer/
      ComponentResolver.tsx
    ui/
      Heading.tsx
      Button.tsx
      Hero.tsx
      Section.tsx
      ...
  config/
    app.config.ts
    theme.config.ts
    pages/
      home.page.ts
      products.page.ts
      profile.page.ts
    types/
      shared.ts
      components.ts
      app.ts
      index.ts
  hooks/
    useAppConfig.ts
    useTheme.ts


✅ Architecture Decisions & Tradeoffs
✅ Decisions

Config as the source of truth for UI

Registry + resolver to map config types to components

Modular config structure (theme/pages/types separated)

⚠️ Tradeoffs

Config can become verbose for complex UIs

Registry must be updated when adding new component types

UI conditional logic is easier in JSX than in pure config

👤 Author

Built by Sourav
React / MERN Stack Developer