import Link from 'next/link';
import {
  Shell,
  Picture,
  Actions,
  ServiceGrid,
  ReviewSection,
  FAQ,
  ContactBand,
  Stars,
} from '@/components/site';
import QuoteForm from '@/components/quote-form';
import { towns, google } from '@/lib/site';
export default function Home() {
  return (
    <Shell>
      <section className="home-hero">
        <Picture id={4} className="hero-photo" priority />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-location">
            AAA Developments, Padiham, Lancashire
          </span>
          <h1>
            ROOFING &amp;
            <br />
            REPAIRS
            <br />
            <span>IN PADIHAM.</span>
          </h1>
          <div className="hero-description">
            <p>
              Roofing, plastering and rendering from Kelvin and the team in
              Padiham.
            </p>
            <Actions />
            <Link
              href={google}
              className="hero-review"
              target="_blank"
              rel="noreferrer"
            >
              <Stars rating={4.6} />
              <strong>4.6 / 5</strong>
              <span>65 Google reviews ↗</span>
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
          <p>Speak to Kelvin about the work you need.</p>
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
                <span className="service-discover">View service</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section services-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Repairs, replacements and cleaning</span>
            <h2>More ways we can help.</h2>
          </div>
          <p>
            Choose the job that sounds like yours.
            <br />
            Not sure? Call Kelvin and talk it through.
          </p>
        </div>
        <ServiceGrid secondaryOnly />
        <Link className="text-link" href="/services">
          Explore all services →
        </Link>
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
          <p>Based in Padiham, working on homes across East Lancashire.</p>
          <p>
            Call about roofing, plastering or rendering. Send photos on WhatsApp
            to help Kelvin understand the job.
          </p>

          <Link href="/about" className="text-link">
            More about Kelvin →
          </Link>
        </div>
      </section>
      <ReviewSection
        ids={['ali', 'lucy', 'carl', 'emma', 'charlotte', 'jim']}
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
            q: 'Which areas do you cover?',
            a: 'AAA Developments works in Padiham, Burnley, Accrington, Blackburn, Nelson and Colne. Call with your postcode to discuss access and availability.',
          },
          {
            q: 'Can I send photos of the problem?',
            a: 'Yes. Send photos on WhatsApp with your postcode and a short description. Take photographs only from a safe position; there is no need to climb onto the roof.',
          },
          {
            q: 'Do you do more than roofing?',
            a: 'Yes. You can also enquire about plastering, rendering, guttering, fascias, soffits and jetwashing.',
          },
          {
            q: 'Can you help with an urgent roof leak?',
            a: 'Call Kelvin directly to explain what is happening. Attendance depends on the location, current work and safe access. A specific arrival time should be agreed on the call.',
          },
        ]}
      />
      <ContactBand />
    </Shell>
  );
}
