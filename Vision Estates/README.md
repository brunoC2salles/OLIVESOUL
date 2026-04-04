# Vision Estates

Curadoria exclusiva dos melhores imóveis de alto padrão em Porto Belo — a cidade litorânea que mais cresce no Brasil.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** next-intl (pt / en / es)
- **Images:** next/image
- **Deployment:** Vercel

## Design System

### Colors
- Navy: 900 → 100
- Gold: 600 → 100
- Stone: 200, 400, 600

### Typography
- Display: Cormorant Garamond
- Body: Jost
- Mono: DM Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/pt](http://localhost:3000/pt) in your browser.

## Project Structure

```
/app/[locale]/        — Pages with i18n routing
/components           — Reusable components
/lib                  — Utilities & data
/messages             — Translation files
/public               — Static assets
```

## Documentation

See `VISION_ESTATES_MASTER_BRIEF.md` for complete project specifications.
See `CLAUDE.md` for Claude Code development guidelines.
