import Link from 'next/link';
import {
  Shell,
  Picture,
  Actions,
  ServiceGrid,
  ReviewSection,
  FAQ,
  ContactBand,
} from '@/components/site';
import { ReviewSourceLogo } from '@/components/review-carousel';
import QuoteForm from '@/components/quote-form';
import { towns, google } from '@/lib/site';
export default function Home() {
  return (
    <Shell>
      <div className="home-page">
        <section className="home-hero">
          <Picture id={35} className="hero-photo" priority />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>
              Roofing,
              <br />
              Plastering,
              <br />
              Rendering.
              <br />
              <span>Think AAA.</span>
            </h1>
            <div className="hero-description">
              <Actions />
              <Link
                href={google}
                className="hero-review"
                target="_blank"
                rel="noreferrer"
              >
                <ReviewSourceLogo source="Google" />
                <strong>4.6 / 5</strong>
                <span>65 reviews ↗</span>
              </Link>
            </div>
          </div>
          <QuoteForm />
        </section>
        <section className="section primary-services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Inside and outside your home</span>
              <h2>Roofing. Plastering. Rendering.</h2>
            </div>
          </div>
          <div className="primary-service-grid">
            {[
              {
                id: 16,
                title: 'Roofing',
                text: 'Repairs, flat roofs and full replacements.',
                href: '/services/roof-repairs',
              },
              {
                id: 30,
                title: 'Plastering',
                text: 'Walls, ceilings and a smooth finish indoors.',
                href: '/services/plastering',
              },
              {
                id: 13,
                title: 'Rendering',
                text: 'Exterior finishes, including K-rend.',
                href: '/services/rendering',
              },
            ].map((s) => (
              <Link href={s.href} className="primary-service" key={s.title}>
                <Picture id={s.id} />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="section services-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                Repairs, replacements and cleaning
              </span>
              <h2>More ways we can help.</h2>
            </div>
          </div>
          <ServiceGrid secondaryOnly />
        </section>
        <section className="team-section">
          <Picture id={25} />
          <div>
            <span className="eyebrow">Meet AAA Developments</span>
            <h2>
              KELVIN &amp;
              <br />
              THE TEAM.
            </h2>
            <p>Over 25 years on the tools, working across East Lancashire.</p>

            <Link href="/about" className="text-link">
              More about Kelvin →
            </Link>
          </div>
        </section>
        <ReviewSection
          ids={['ali', 'maxine', 'jamie', 'lucy', 'caroline', 'phoenix']}
        />
        <section className="section area-strip">
          <span className="eyebrow">Based in Padiham</span>
          <h2>Working across East Lancashire.</h2>
          <div className="town-links">
            {towns.map((t) => (
              <Link href={'/areas/' + t.toLowerCase()} key={t}>
                {t}
                <span>↗</span>
              </Link>
            ))}
          </div>
        </section>
        <FAQ
          items={[
            {
              q: 'How do I know whether my roof needs repairing or replacing?',
              a: 'A localised leak, slipped tiles or damaged flashing may only need a repair. Widespread damage, repeated leaks or an ageing roof may make replacement the better option. Kelvin can inspect the roof and explain what is needed.',
            },
            {
              q: 'Can you help with an urgent roof leak?',
              a: 'Call Kelvin directly and explain where the water is entering. Attendance depends on location, current work and safe access, so agree the timing on the call.',
            },
            {
              q: 'Do you repair flat roofs?',
              a: 'Yes. AAA Developments handles flat roof repairs and replacement work. The first step is to check the surface, edges, outlets and the point where the flat roof meets the main building.',
            },
            {
              q: 'Can you repair guttering, fascias and soffits?',
              a: 'Yes. Ask about leaking or damaged guttering, worn fascias and soffits, and roofline work alongside a roof repair or replacement.',
            },
            {
              q: 'Do you plaster full rooms as well as small repairs?',
              a: 'Yes. You can enquire about full rooms, ceilings, damaged areas and making good after other work. Send room photos and approximate sizes when requesting a quote.',
            },
            {
              q: 'What rendering work do you take on?',
              a: 'AAA Developments works on exterior rendering and K-rend finishes. Kelvin can assess the existing surface, access and preparation before quoting.',
            },
            {
              q: 'Can I send photos before arranging a visit?',
              a: 'Yes. Send clear photos on WhatsApp with your postcode and a short description. Photograph roof problems only from a safe position. There is no need to climb onto the roof.',
            },
            {
              q: 'Which areas do you cover?',
              a: 'AAA Developments works in Padiham, Burnley, Accrington, Blackburn, Nelson and Colne. Call with your postcode to check availability.',
            },
          ]}
        />
        <ContactBand />
      </div>
    </Shell>
  );
}
