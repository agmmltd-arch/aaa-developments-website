# AAA Developments website handover

This repository is the complete, independent source of the AAA Developments website. It does not require Codex Sites to run or deploy.

## Permanent locations

- GitHub repository: <https://github.com/agmmltd-arch/aaa-developments-website>
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

The command builds the site and deploys it to `aaa-developments-padiham.agmm-ltd.workers.dev`.

## Connect the finished domain

The domain must be present in the same Cloudflare account as the Worker.

1. Open the Cloudflare dashboard.
2. Go to **Workers & Pages**.
3. Open **aaa-developments-padiham**.
4. Open **Settings**, then **Domains & Routes**.
5. Select **Add**, then **Custom Domain**.
6. Enter the final hostname, such as `www.example.co.uk`, and complete the Cloudflare prompts.
7. Choose one canonical hostname. Redirect the other version, such as the bare domain, to it using a Cloudflare Redirect Rule.
8. Rebuild and deploy with the real canonical address and search indexing enabled:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.co.uk NEXT_PUBLIC_SITE_LIVE=true npm run deploy
```

Replace `https://www.example.co.uk` with the actual canonical domain. Do not include a trailing slash.

9. Check these addresses after deployment:

```text
https://www.example.co.uk/
https://www.example.co.uk/robots.txt
https://www.example.co.uk/sitemap.xml
```

The temporary Worker deployment deliberately remains excluded from search engines. `NEXT_PUBLIC_SITE_LIVE=true` enables indexing when the final domain is ready.

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

## Final domain launch checklist

- Confirm the final domain and preferred `www` or bare-domain format.
- Confirm the telephone number, email and postal address.
- Confirm every service and coverage area remains accurate.
- Test the quote form, telephone links and WhatsApp links on a real phone.
- Confirm the Google, MyBuilder and Bark profile links.
- Check the privacy and terms pages.
- Deploy with `NEXT_PUBLIC_SITE_URL` set to the real domain.
- Deploy with `NEXT_PUBLIC_SITE_LIVE=true` only when the site is ready for search engines.
- Submit `/sitemap.xml` in Google Search Console after launch.
