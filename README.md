# SK. — Senthilkumar Rajendran · Portfolio

Personal portfolio and case study site built with React, Vite, and Tailwind CSS v4.

**Live site:** [your-netlify-url.netlify.app](https://your-netlify-url.netlify.app)  
**LinkedIn:** [linkedin.com/in/skumar-r](https://www.linkedin.com/in/skumar-r)

---

## Tech stack

| Layer | Tool |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router 8 |
| Language | TypeScript 5.7 |
| Package manager | pnpm |
| Hosting | Netlify |

---

## Running locally

**Prerequisites:** Node.js 18+ and pnpm installed.

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.  
The site hot-reloads on every file save.

---

## Project structure

```
src/
├── pages/
│   ├── Home.tsx                          # Portfolio landing page
│   ├── Root.tsx                          # Router shell (scroll reset)
│   └── case-studies/
│       ├── FintechOnboarding.tsx         # Case study 1
│       ├── EnterpriseAnalytics.tsx       # Case study 2
│       ├── CheckoutConversion.tsx        # Case study 3
│       └── TokenSyncPlugin.tsx          # Case study 4
├── components/
│   ├── CaseStudyLayout.tsx              # Shared case study shell + reusable blocks
│   ├── ThemeToggle.tsx                  # Light / dark mode toggle
│   └── ScrollToTop.tsx                  # Resets scroll on route change
├── context/
│   └── ThemeContext.tsx                 # Theme state (persisted to localStorage)
├── routes.ts                            # All page routes
├── App.tsx                              # Router entry point
├── main.tsx                             # React root mount
└── index.css                            # Global styles + Tailwind + CSS variables
```

---

## Updating content

### Edit your personal info (hero, stats, contact)
Open `src/pages/Home.tsx` and update the text directly.

### Edit a case study
Open the relevant file in `src/pages/case-studies/` and change the text.  
Each case study is a standalone file — no shared data file to worry about.

### Add a new case study

**Step 1** — Copy an existing file:
```bash
cp src/pages/case-studies/FintechOnboarding.tsx src/pages/case-studies/MyNewProject.tsx
```

**Step 2** — Add a route in `src/routes.ts`:
```tsx
import MyNewProject from "./pages/case-studies/MyNewProject";

// inside createBrowserRouter children:
{ path: "/case-study/my-new-project", Component: MyNewProject },
```

**Step 3** — Add a card in `src/pages/Home.tsx` (inside the `PROJECTS` array):
```js
{
  id: 5,
  slug: "my-new-project",
  tag: "Case Study · Your Category",
  title: "Your project title",
  desc: "One or two sentence summary.",
  tools: ["Figma", "..."],
  year: "2025",
  accent: "#your-color",
  bg: "#your-dark-bg",
},
```

### Duplicate a section inside a case study
Each `<Section>` block is independent JSX. Copy the block and paste it:

```tsx
{/* Original */}
<Section>
  <SectionLabel label="Research" accent="#6c47ff" />
  <SectionHeading>First round findings</SectionHeading>
  <StatGrid items={[...]} />
</Section>

{/* Duplicate — add alt to alternate the background */}
<Section alt>
  <SectionLabel label="Research" accent="#6c47ff" />
  <SectionHeading>Second round findings</SectionHeading>
  <StatGrid items={[...]} />
</Section>
```

Available section components (imported from `CaseStudyLayout`):

| Component | Use for |
|---|---|
| `<StatGrid items={[{ stat, label }]} />` | Key numbers / research stats |
| `<Blockquote text="..." attribution="..." />` | Quotes, problem statements |
| `<Section>` / `<Section alt>` | Section wrapper (alt = subtle background) |
| `<SectionLabel label="..." accent="..." />` | Small uppercase label above heading |
| `<SectionHeading>` | Section title |
| `<ToolChips tools={[...]} />` | Tool tags row |

---

## Building for production

```bash
pnpm build
```

Output goes to the `dist/` folder.

---

## Deploying to Netlify

### Option A — Drag and drop (quickest)
1. Run `pnpm build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page

### Option B — Connect GitHub repo (recommended)
1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Set these build settings:

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Publish directory | `dist` |
| Node version | 20 |

Netlify will auto-deploy on every push to `main`.

### Netlify redirects (required for React Router)
Create a file at `public/_redirects` with this content:

```
/*  /index.html  200
```

This ensures page refreshes and direct URL visits work correctly on Netlify.

---

## Theme

The site supports light and dark mode. The toggle is in the top navigation.  
Preference is saved to `localStorage` and respects the system setting on first visit.

CSS variables for both themes live in `src/index.css` under `:root` (dark) and `[data-theme="light"]`.

---

## Fonts

| Role | Font | Source |
|---|---|---|
| Display / headings | DM Serif Display | Google Fonts |
| Body / UI | DM Sans | Google Fonts |

Loaded via `@import` in `src/index.css`. No installation required.

---

## License

This portfolio is personal work. The code structure is free to use as a template.  
Please do not republish the case study content or personal details as your own.
