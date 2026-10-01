# AAA Developments website

Production website for AAA Developments, covering roofing, plastering and rendering services across Padiham and East Lancashire.

- Live site: <https://aaa-developments-padiham.agmm-ltd.workers.dev>
- Full continuation and domain instructions: [HANDOVER.md](HANDOVER.md)

## Requirements

- Node.js 22.13 or newer
- A Cloudflare account for deployment

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy to Cloudflare Workers

Authenticate once, then deploy:

```bash
npx wrangler login
npm run deploy
```

The deployment uses the worker name `aaa-developments-padiham`. A custom domain can be attached from the Cloudflare dashboard when ready.
