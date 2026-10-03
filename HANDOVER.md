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

The Worker has routes and custom-domain bindings for both production hostnames in the same Cloudflare account. The canonical hostname is `https://aaadevelopment.co.uk`. As of the final check on 3 October 2026, the main domain still serves the previous Lovable site, while the Worker backup serves this repository correctly. Do not treat the custom-domain bindings alone as proof of a completed launch. The old provider connection must be resolved and the public domain checked again before sitemap submission.

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

## October 2026 update

- All ten service pages use a compact service summary, expandable details, booking CTA, photos and links to a related service and guide.
- The advice library contains 13 articles, including ten new articles: three roofing, three plastering, three rendering and one guttering.
- Local fonts now use their actual 400/500/600/700 weights rather than a Black font being labelled as variable.
- Photos have responsive WebP versions in `public/images/optimized/`; supplied originals are retained.
- Both quote forms share `components/quote-form.tsx` and submit to `app/api/enquiry/route.ts`. The route uses the activated FormSubmit endpoint for `agmm.ltd@gmail.com`, with `info@aaadevelopment.co.uk` fixed as the copy recipient. Both inboxes received the activation test, confirmed by the user.
- Form protections: same-origin requests, field validation and length limits, hidden spam field, limited requests per Worker isolate, provider abuse filtering, no customer details in application logs, error feedback and WhatsApp/email fallback. The per-isolate limiter is best effort; a dedicated edge rate-limit rule can be added if spam increases.
- Tracking remains disabled at the user's request. The cookie information notice dismisses on the first scroll and remembers dismissal for the browser session. It does not grant cookie consent or enable analytics.
- The site supplies canonical URLs, crawlable robots/sitemap, service/article structured data, CSP, frame blocking, content-type protection, referrer policy and permissions policy. `www` redirects permanently to the bare hostname.
- Vinext is updated to 1.0.1. `fflate` is overridden to 0.8.3, fixing its known malformed-archive advisory. The Shadcn generator is a development dependency. The dependency audit still flags the build-time braces/micromatch/fast-glob chain (six production dependency entries, all inherited from the same braces advisory); no patched braces release is currently available. No public endpoint accepts glob patterns, and these tools are not included in the deployed Worker bundle. Do not downgrade the framework or run forced audit fixes to suppress the report.

## Latest publication checks — 3 October 2026

- Current Worker release: `bb17264b-0a4b-4f71-b461-66dd401d3b38`. The permanent Worker address serves the new service pages.
- Lint, TypeScript and production build passed. The local crawl checked 38 pages, canonical URLs, titles, descriptions, internal links and images with no failures. All ten service pages fit a 390px mobile viewport without horizontal overflow.
- Search Console verification TXT is present. Google automatically verified ownership when the existing domain property was reopened. Sitemap submission remains pending the domain cutover and confirmation.
- The imported `_lovable` and `_lovable.www` website verification records were removed with user approval on 3 October 2026. Authoritative DNS confirms both are absent. Zoho MX, SPF, verification and the unrelated email records were preserved. If removing the old verification records does not release the hostname, disconnect the domain from the previous Lovable project or ask the previous provider to remove its custom-hostname binding.

## Domain cutover follow-up — 3 October 2026

The two old Lovable website TXT records have been removed. Both apex and www Worker bindings were reapplied successfully. Cloudflare authoritative DNS and public resolvers now return the new nameservers, but the public apex still returns the previous Lovable homepage. This points to an old SaaS custom-hostname connection taking precedence; changing the DNS verification TXT records alone did not release it. Access to the old Lovable project or its owner is required to disconnect `aaadevelopment.co.uk` and `www.aaadevelopment.co.uk` in Project → Settings → Domains. Do not delete any email connections or the project itself. After that, verify the new homepage, service pages, www redirect, robots and sitemap on the production domain before submitting the sitemap.

References: https://developers.cloudflare.com/ssl/reference/certificate-and-hostname-priority/#hostname-priority and https://docs.lovable.dev/features/custom-domain
