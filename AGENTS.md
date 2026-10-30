# Agent rules
- Content only in `src/content/site.ts`; never invent facts, hours, prices or reviews. If unconfirmed, leave it out.
- Only real photos of the restaurant/food in `public/images/`; no AI-generated food or interior photos.
- No owner or reviewer personal names, no research notes or photo-source URLs in the repo.
- Keep `noindex` until the owner approves. Keep "Built by nicklopacki.com" as the last footer line.
- `npm run typecheck && npm run lint && npm run build` must pass before pushing; Vercel deploys `main`.
