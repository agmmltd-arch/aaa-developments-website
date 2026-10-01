import Link from '@/components/link';
import { Shell, Picture, ServiceGrid, ContactBand } from '@/components/site';
export const metadata = {
  title: 'Our services',
  description:
    'Roofing, roofline, plastering, rendering and jetwashing services from AAA Developments in Padiham.',
};
export default function Services() {
  return (
    <Shell>
      <section className="inner-hero directory-hero">
        <Picture id={35} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Services
          </div>
          <span className="eyebrow">AAA Developments</span>
          <h1>
            Roofing &amp;
            <br />
            property services
          </h1>
          <p>
            Roof repairs and replacements. Plastering, rendering, guttering and
            jetwashing. Choose a service to see the work involved.
          </p>
        </div>
      </section>
      <section className="section services-directory">
        <ServiceGrid />
      </section>
      <ContactBand />
    </Shell>
  );
}
