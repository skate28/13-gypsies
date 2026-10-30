# 13 Gypsies

Pitch site for 13 Gypsies, a Spanish tapas bistro at 887 Stockton St, Jacksonville, FL 32204 (Riverside).

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

- All content lives in `src/content/site.ts`; photos in `public/images/`.
- Search indexing is OFF (`noindex, nofollow`, robots.txt `Disallow: /`, `X-Robots-Tag`) until the owner signs off. Set `ALLOW_INDEXING=true` to enable.

Built by [nicklopacki.com](https://nicklopacki.com).
