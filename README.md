# AAA Developments website

Production website for AAA Developments, covering roofing, plastering and rendering services across Padiham and East Lancashire.

- Production domain: <https://aaadevelopment.co.uk>
- Cloudflare Worker fallback: <https://aaa-developments-padiham.agmm-ltd.workers.dev>
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

The deployment uses the Worker name `aaa-developments-padiham` and updates the root domain, `www` hostname and permanent Workers.dev backup together.
