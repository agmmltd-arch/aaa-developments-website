import Link from '@/components/link';
import { notFound } from 'next/navigation';
import {
  Shell,
  Picture,
  Actions,
  ReviewSection,
  FAQ,
  ContactBand,
} from '@/components/site';
import { services, towns } from '@/lib/site';
import { serviceContent } from '@/lib/service-content';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s ? `${s.name} in Padiham & nearby towns` : 'Service not found',
    description: serviceContent[slug]?.intro,
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  const c = serviceContent[slug];
  if (!s || !c) notFound();
  return (
    <Shell>
      <section className="inner-hero">
        <Picture id={c.hero} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link>{' '}
            / {s.name}
          </div>
          <span className="eyebrow">
            AAA Developments · Padiham & nearby towns
          </span>
          <h1>{s.name}</h1>
          <p>{c.intro}</p>
          <Actions quote />
        </div>
      </section>
      <section
        className={
          'section service-overview ' + (c.gallery.length ? '' : 'text-only')
        }
      >
        {c.gallery.length > 0 && <Picture id={c.gallery[0]} />}
        <div className="service-detail-grid">
          {c.sections.map((x, i) => (
            <article id={'detail-' + i} key={x.title}>
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <h2>{x.title}</h2>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
      {c.gallery.length > 1 && (
        <section className="section project-section" id="photos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A closer look</span>
              <h2>{s.name}: in pictures</h2>
            </div>
            <p>Roofing and property work, photographed up close.</p>
          </div>
          <div className="project-grid">
            {c.gallery.slice(1).map((id) => (
              <figure key={id}>
                <Picture id={id} />
              </figure>
            ))}
          </div>
        </section>
      )}
      <ReviewSection
        ids={c.reviews}
        title={
          slug === 'jetwashing' || slug === 'fascias-soffits'
            ? 'Customer feedback about AAA'
            : 'Customers on the work'
        }
      />
      <FAQ items={c.faq} />
      <section className="section related-areas">
        <h2>Available in your area</h2>
        <div className="town-links">
          {towns.map((t) => (
            <Link href={'/areas/' + t.toLowerCase()} key={t}>
              {t} <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </Shell>
  );
}
