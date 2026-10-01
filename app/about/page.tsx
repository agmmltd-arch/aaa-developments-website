import Link from '@/components/link';
import { Shell, Picture, ReviewSection, ContactBand } from '@/components/site';
export const metadata = {
  title: 'About Kelvin & AAA Developments',
  description:
    'Meet Kelvin and AAA Developments, providing roofing, plastering and rendering services across East Lancashire.',
};
export default function About() {
  return (
    <Shell>
      <section className="page-heading section">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / About
        </div>
        <span className="eyebrow">AAA Developments · Padiham</span>
        <h1>About Kelvin &amp; AAA.</h1>
        <p>
          Roofing, plastering, rendering and property care from a local business
          based in Padiham.
        </p>
      </section>
      <section className="section about-team">
        <Picture id={14} />
        <div>
          <span className="eyebrow">The name on the van</span>
          <h2>Roofing and property work.</h2>
          <p>
            AAA Developments takes on roof repairs, replacements and flat
            roofing, alongside plastering, rendering, guttering and jetwashing.
          </p>
          <p>
            Speak directly to Kelvin about the job. Send your postcode and
            photographs on WhatsApp to arrange the next step.
          </p>
          <p>
            Based in Padiham, the service area includes Burnley, Accrington,
            Blackburn, Nelson and Colne.
          </p>
          <Link href="/contact" className="text-link">
            Talk to Kelvin →
          </Link>
        </div>
      </section>
      <section className="section project-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">People behind the work</span>
            <h2>Kelvin, the team and customers.</h2>
          </div>
        </div>
        <div className="about-photos">
          {[18, 25, 33, 34].map((id) => (
            <Picture key={id} id={id} />
          ))}
        </div>
      </section>
      <ReviewSection ids={['ali', 'lucy', 'caroline']} />
      <ContactBand />
    </Shell>
  );
}
