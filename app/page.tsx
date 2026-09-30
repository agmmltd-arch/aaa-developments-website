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
              Roof repairs, reroofing and flat roofs from Kelvin and the team.
              Plastering, rendering and jetwashing too.
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
            <p className="hero-areas">
              Padiham · Burnley · Accrington · Blackburn · Nelson · Colne
            </p>
          </div>
        </div>
        <QuoteForm />
      </section>
      <section className="section process">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Roofing projects</span>
            <h2>On the roof, step by step.</h2>
          </div>
          <p>Repairs, preparation and finished roof details from AAA’s work.</p>
        </div>
        <div className="process-grid">
          {[
            {
              id: 16,
              n: '01',
              title: 'Roof repairs',
              text: 'Work where pitched tiles meet a flat roof. Junctions and edges need the same attention as the main covering.',
            },
            {
              id: 6,
              n: '02',
              title: 'Membrane and battens',
              text: 'A roof during installation, with the membrane and timber battens in place before the tiles go on.',
            },
            {
              id: 3,
              n: '03',
              title: 'Finished tiling',
              text: 'Grey roof tiles and hip details. See more of the work on our roofing pages.',
            },
          ].map((p) => (
            <article key={p.n}>
              <Picture id={p.id} />
              <div className="process-title">
                <span>{p.n}</span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section services-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Roofing and more</span>
            <h2>What needs doing?</h2>
          </div>
          <p>
            Choose the job that sounds like yours.
            <br />
            Not sure? Call Kelvin and talk it through.
          </p>
        </div>
        <ServiceGrid />
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
          <p>
            Kelvin and AAA Developments are based in Padiham, working on homes
            across the neighbouring towns.
          </p>
          <p>
            Call about a roof repair, a full reroof or work inside and outside
            your home. You can send photos on WhatsApp before arranging a visit.
          </p>
          <ul>
            <li>Roofing, from local repairs to full replacements</li>
            <li>Interior plastering and exterior rendering</li>
            <li>Guttering, roofline and outdoor cleaning</li>
            <li>One contact to discuss the work you need</li>
          </ul>
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
