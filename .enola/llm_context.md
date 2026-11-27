# Architecture Snapshot

## Repository Map

| Module | Language | Symbols | Exported |
|--------|----------|---------|----------|
| `.` | typescript | 3 | 0 |
| `components` | typescript | 5 | 5 |
| `components/site` | typescript | 26 | 17 |
| `components/three` | typescript | 17 | 2 |
| `data` | typescript | 14 | 14 |
| `lib` | typescript | 3 | 2 |
| `pages` | typescript | 12 | 3 |
| `pages/case-studies` | typescript | 26 | 0 |
| `pages/notes` | typescript | 10 | 4 |

## Extraction Quality

- Files parsed: **42** / 79 seen (0 file(s) + 3 directory tree(s) skipped by ignore globs)
- Parse errors: 0

## Architecture Pattern

**Architecture pattern: nextjs** (confidence: 78%)

Recognised nextjs from directory names: 7 of 9 typescript modules classified. All 37 imports between ordered layers run inward; none run against the order.

Layer mapping:
- module "components" maps to layer "components"
- module "components/site" maps to layer "components"
- module "components/three" maps to layer "components"
- module "lib" maps to layer "lib"
- module "pages" maps to layer "pages"
- module "pages/case-studies" maps to layer "pages"
- module "pages/notes" maps to layer "pages"

## How to Add a Feature

This code is laid out as **nextjs**. A dependency runs from an outer layer to an inner one, so a feature is built inward:

1. **pages** — e.g. `pages`
2. **components** — e.g. `components`
3. **lib** — e.g. `lib`

## Entry Points

17 routes, 15 shown:
- **route** GET `/about.js` (pages/about.js)
- **route** GET `/case-studies/aerpace.js` (pages/case-studies/aerpace.js)
- **route** GET `/case-studies/ai-blog-generator.js` (pages/case-studies/ai-blog-generator.js)
- **route** GET `/case-studies/apna-mechanic.js` (pages/case-studies/apna-mechanic.js)
- **route** GET `/case-studies/coding-sharks.js` (pages/case-studies/coding-sharks.js)
- **route** GET `/case-studies/mars-rover.js` (pages/case-studies/mars-rover.js)
- **route** GET `/case-studies/megashot-pickl.js` (pages/case-studies/megashot-pickl.js)
- **route** GET `/case-studies/metashot.js` (pages/case-studies/metashot.js)
- **route** GET `/case-studies/movieflix.js` (pages/case-studies/movieflix.js)
- **route** GET `/case-studies/nirmanbook.js` (pages/case-studies/nirmanbook.js)
- **route** GET `/case-studies/pdf-searcher.js` (pages/case-studies/pdf-searcher.js)
- **route** GET `/contact.js` (pages/contact.js)
- **route** GET `/index.js` (pages/index.js)
- **route** GET `/notes/index.js` (pages/notes/index.js)
- **route** GET `/notes/isro-path-planner.js` (pages/notes/isro-path-planner.js)
- … and 2 more (query_facts(kind="route") for all)

## Routes

| Method | Path | File | Type |
|--------|------|------|------|
| GET | `/about.js` | `pages/about.js` | page |
| GET | `/case-studies/aerpace.js` | `pages/case-studies/aerpace.js` | page |
| GET | `/case-studies/ai-blog-generator.js` | `pages/case-studies/ai-blog-generator.js` | page |
| GET | `/case-studies/apna-mechanic.js` | `pages/case-studies/apna-mechanic.js` | page |
| GET | `/case-studies/coding-sharks.js` | `pages/case-studies/coding-sharks.js` | page |
| GET | `/case-studies/mars-rover.js` | `pages/case-studies/mars-rover.js` | page |
| GET | `/case-studies/megashot-pickl.js` | `pages/case-studies/megashot-pickl.js` | page |
| GET | `/case-studies/metashot.js` | `pages/case-studies/metashot.js` | page |
| GET | `/case-studies/movieflix.js` | `pages/case-studies/movieflix.js` | page |
| GET | `/case-studies/nirmanbook.js` | `pages/case-studies/nirmanbook.js` | page |
| GET | `/case-studies/pdf-searcher.js` | `pages/case-studies/pdf-searcher.js` | page |
| GET | `/contact.js` | `pages/contact.js` | page |
| GET | `/index.js` | `pages/index.js` | page |
| GET | `/notes/index.js` | `pages/notes/index.js` | page |
| GET | `/notes/isro-path-planner.js` | `pages/notes/isro-path-planner.js` | page |
| GET | `/notes/pickl-swing-loop.js` | `pages/notes/pickl-swing-loop.js` | page |
| GET | `/notes/sub-80ms.js` | `pages/notes/sub-80ms.js` | page |

## Dependency Rules

- `components` -> `lib`

## Critical Modules

| Module | Fan-In | Fan-Out | Criticality |
|--------|--------|---------|-------------|
| `components` | 0 | 1 | low |
| `lib` | 1 | 0 | low |

---

*Generated at 2026-11-26T17:22:53Z in 411.51175ms. 424 facts, 12 insights.*
