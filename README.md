# Om Javia — AI Product & GTM Engineer

Personal portfolio website for [Om Javia](https://omjavia.vercel.app/) — Founding Manager at MegaShot (AI Product & Go-to-Market) and AI Product Engineer.

---

## Design Language — "Tactile Intelligence"

Warm editorial light canvas (`#F5F5F0`), **Instrument Serif** display typography, **Geist Sans / Geist Mono** for body and technical metadata, and intentional signal accents (Cobalt `#4F5EEB`, Signal Teal `#22B8A8`, Signal Coral `#FF826E`, Electric Lime `#C8E879`), with dark contrast surfaces reserved selectively for the MegaShot Pickl+ flagship section and footer.

- **Liquid Glass (`GlassSurface`)**: Tiered translucent surface with `backdrop-filter` blur, refractive hairline gradient border, pointer-reactive specular highlight, and `prefers-reduced-transparency` fallback.
- **Interactive 3D Smart Paddle**: Stylized procedural Three.js / React Three Fiber paddle (`components/three/`) with scroll-driven state progression, pointer parallax, drag-to-rotate, intersection-based off-screen pause, demand rendering on mobile/reduced-motion, and static product-photo fallback.
- **Command Menu (`⌘K` / `Ctrl+K`)**: Keyboard-accessible recruiter navigation for jumping to sections, opening the résumé, or copying contact details.

---

## Architecture

| Path | Purpose |
|---|---|
| `data/content.js` | Single source of truth for homepage copy, verified metrics, projects, experience, and links. Every metric carries its source context (see `CONTENT_VERIFICATION.md`). |
| `components/site/` | Homepage sections (`Hero`, `Proof`, `Pickl`, `Capabilities`, `Projects`, `Method`, `Experience`, `Closing`), `GlassSurface`, and shared motion primitives. |
| `components/three/` | Lazy-loaded client-only WebGL paddle (`PaddleStage`, `PaddleScene`) with ErrorBoundary and fallback. |
| `components/CommandMenu.jsx` | `Cmd/Ctrl + K` accessible command palette. |
| `pages/case-studies/`, `pages/notes/` | Long-form project case studies and engineering decision notes. |
| `CONTENT_VERIFICATION.md` | Claims and metrics verification matrix. |

---

## Tech Stack

- **Framework:** Next.js 14 (Pages Router), React 18
- **Styling:** Tailwind CSS 3 (`tailwind.config.js`, `styles/globals.css`)
- **Typography:** `geist` (`GeistSans`, `GeistMono`) + `next/font/google` (`Instrument_Serif`)
- **Motion & 3D:** `framer-motion`, `three`, `@react-three/fiber`
- **Analytics:** Vercel Analytics, Speed Insights, PostHog, Microsoft Clarity

---

## Local Development & Deployment

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint check
npm run build    # Production build
npm start        # Serve production build
```

Deploys automatically to Vercel from `main`. Set `NEXT_PUBLIC_POSTHOG_KEY` in Vercel environment variables for PostHog analytics.

---

## Contact

- **Website:** [omjavia.vercel.app](https://omjavia.vercel.app/)
- **Email:** [omjavia18@gmail.com](mailto:omjavia18@gmail.com)
- **LinkedIn:** [linkedin.com/in/omjavia](https://www.linkedin.com/in/omjavia/)
- **GitHub:** [github.com/OmJavia](https://github.com/OmJavia)
- **Résumé:** [omjavia.vercel.app/resume.pdf](https://omjavia.vercel.app/resume.pdf)
