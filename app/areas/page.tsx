import Link from '@/components/link';
import { Shell, ContactBand, Picture } from '@/components/site';
import { towns } from '@/lib/site';
export const metadata = {
  title: 'Areas we cover',
  description:
    'AAA Developments covers Padiham, Burnley, Accrington, Blackburn, Nelson and Colne.',
};
export default function Areas() {
  return (
    <Shell>
      <section className="inner-hero directory-hero">
        <Picture id={12} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Areas
          </div>
          <span className="eyebrow">Padiham and the surrounding towns</span>
          <h1>Areas we cover</h1>
          <p>
            Based in Padiham. Roofing, plastering, rendering and jetwashing
            across six nearby towns.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="town-links">
          {towns.map((t) => (
            <Link href={'/areas/' + t.toLowerCase()} key={t}>
              {t}
              <span>↗</span>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 35 }}>
          Not sure whether your address is covered? Call with your postcode and
          discuss the job with Kelvin.
        </p>
      </section>
      <ContactBand />
    </Shell>
  );
}
