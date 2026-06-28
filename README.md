# Emaan Fatima - Premium MERN Portfolio

A premium dark-theme portfolio website for **Emaan Fatima**, positioned as a **MERN Stack Developer** and React Native developer. The content is populated from the uploaded CVs and organized through `src/data/portfolio.ts` so the website can be updated from one central source.

## Tech Stack

- React.js + Vite
- TypeScript
- Tailwind CSS v4 using `@tailwindcss/vite`
- Framer Motion
- React Router
- React Icons
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Three.js / React Three Fiber hero visual
- EmailJS with mailto fallback
- React Helmet Async SEO

## Folder Structure

```txt
emaan-fatima-premium-portfolio/
├── public/
│   ├── EmaanFatima-CV.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Container.tsx
│   │   │   ├── CursorGlow.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SEO.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── SmoothScrollProvider.tsx
│   │   └── projects/
│   │       ├── ProjectMockup.tsx
│   │       └── ProjectModal.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── useGsapReveal.ts
│   │   ├── useLenis.ts
│   │   └── useTypewriter.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   └── Testimonials.tsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── animations.ts
│   │   └── cn.ts
│   ├── App.tsx
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Start From Zero

### 1. Install Node.js

Use Node.js 20.19+ or 22.12+ for current Vite versions.

```bash
node -v
npm -v
```

### 2. Create a Vite React project

```bash
npm create vite@latest emaan-fatima-premium-portfolio -- --template react-ts
cd emaan-fatima-premium-portfolio
```

### 3. Install portfolio dependencies

```bash
npm install
npm install framer-motion react-router-dom react-icons gsap lenis three @react-three/fiber @emailjs/browser react-helmet-async
npm install -D tailwindcss @tailwindcss/vite
```

This project already includes those packages in `package.json`, so if you use the zip, just run:

```bash
npm install
```

### 4. Run locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```txt
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
npm run preview
```

## EmailJS Setup

The contact form works without EmailJS by opening a mailto link. For real in-site sending, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart the dev server.

## Customization Checklist

- Replace the photo placeholder in `About.tsx` with a real professional image.
- Add GitHub and LinkedIn URLs in `src/data/portfolio.ts` when available.
- Replace placeholder testimonials with real client/team feedback.
- Replace project mockup placeholders with screenshots in `ProjectMockup.tsx` or create an `assets/projects` folder.
- Update `robots.txt` and `sitemap.xml` with the final production domain.
- Add an actual Open Graph image at `public/og-image.png`.

## Design Decisions

- **Dark luxury direction:** black base, electric blue and purple glows, glassmorphism, gradient borders, and soft depth.
- **Performance-aware animation:** Framer Motion handles component-level motion, GSAP handles scroll reveal, Lenis handles smooth scrolling, and reduced-motion users are respected.
- **Reusable data architecture:** portfolio content is centralized in `src/data/portfolio.ts` to avoid repeated hard-coded content.
- **No fake CV data:** GitHub/LinkedIn/certifications are not invented because they were not listed in the CV. Placeholders are clearly labeled and easy to replace.
- **Responsive-first:** cards, timelines, modals, navigation, hero, and grids are mobile-friendly with no horizontal overflow.

## Deployment

### Vercel

```bash
npm run build
```

Push to GitHub, import into Vercel, and set environment variables if using EmailJS.

### Netlify

Build command:

```bash
npm run build
```

Publish directory:

```txt
dist
```
