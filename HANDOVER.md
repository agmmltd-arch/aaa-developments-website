# AAA Developments website handover

This repository is the complete, independent source of the AAA Developments website. It does not require Codex Sites to run or deploy.

## Permanent locations

- GitHub repository: <https://github.com/agmmltd-arch/aaa-developments-website>
- Production domain: <https://aaadevelopment.co.uk>
- Current Cloudflare Worker: <https://aaa-developments-padiham.agmm-ltd.workers.dev>
- GitHub owner: `agmmltd-arch`
- Default branch: `main`
- Cloudflare Worker name: `aaa-developments-padiham`
- Cloudflare account email: `agmm.ltd@gmail.com`

Do not store GitHub tokens, Cloudflare tokens or other secrets in this repository.

## Pick the project back up

Install Node.js 22.13 or newer and Git. Then run:

```bash
git clone https://github.com/agmmltd-arch/aaa-developments-website.git
cd aaa-developments-website
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

Before editing, always pull the latest source:

```bash
git switch main
git pull --ff-only origin main
```

## Save and publish future changes

Run the checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Commit and push the source:

```bash
git add -A
git commit -m "Describe the website update"
git push origin main
```

Authenticate with Cloudflare once on a new computer:

```bash
npx wrangler login
```

Deploy the current source to the existing Worker:

```bash
npm run deploy
```

The command builds the site, keeps the permanent Worker backup available, and deploys the update to:

- `https://aaadevelopment.co.uk`
- `https://www.aaadevelopment.co.uk`
- `https://aaa-developments-padiham.agmm-ltd.workers.dev`

## Domain and DNS

The production domain is connected to the Worker in the same Cloudflare account. The canonical hostname is the bare domain, `https://aaadevelopment.co.uk`.

- Registrar: GoDaddy
- Cloudflare zone ID: `0a743cad0205e9c8a4ea872bee20b078`
- Cloudflare nameservers: `ali.ns.cloudflare.com` and `mcgrory.ns.cloudflare.com`
- Worker routes: `aaadevelopment.co.uk/*` and `www.aaadevelopment.co.uk/*`
- Search indexing: enabled

The imported Cloudflare zone preserves the existing Zoho MX, SPF, verification and DKIM records. Check these addresses after each deployment:

```text
https://aaadevelopment.co.uk/
https://aaadevelopment.co.uk/robots.txt
https://aaadevelopment.co.uk/sitemap.xml
```

## Site structure

- `app/` contains all pages and global styling.
- `components/` contains shared navigation, forms, service cards and review components.
- `lib/site.ts` contains contact details, review profile URLs, service definitions and the canonical site URL settings.
- `lib/assets.json` maps the numbered photographs used throughout the site.
- `public/images/` contains project photographs.
- `public/reviews/` contains the supplied review screenshots and review-source graphics.
- `vite.config.ts` defines the Cloudflare Worker build.
- `package.json` contains the development, checking and deployment commands.

## Important business details

- Telephone: `07568 425666`
- WhatsApp: `+44 7568 425666`
- Email: `info@aaadevelopment.co.uk`
- Address used in structured data: `54 Ingham Street, Padiham, BB12 8DR`

Confirm these details with the business owner before the final domain launch.

## Post-launch checklist

- Confirm the telephone number, email and postal address.
- Confirm every service and coverage area remains accurate.
- Test the quote form, telephone links and WhatsApp links on a real phone.
- Confirm the Google, MyBuilder and Bark profile links.
- Check the privacy and terms pages.
- Submit `/sitemap.xml` in Google Search Console after launch.
