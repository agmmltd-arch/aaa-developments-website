import Link from '@/components/link';
import { notFound } from 'next/navigation';
import {
  Shell,
  Picture,
  Actions,
  ReviewSection,
  ContactBand,
} from '@/components/site';
import { areaContent } from '@/lib/area-content';
import { services, towns } from '@/lib/site';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = areaContent[slug];
  return {
    title: a ? `Roofing & property services in ${a.name}` : 'Area not found',
    description: a?.intro,
  };
}
export default async function Area({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = areaContent[slug];
  if (!a) notFound();
  return (
    <Shell>
      <section className="inner-hero">
        <Picture id={a.hero} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/areas">Areas</Link> /{' '}
            {a.name}
          </div>
          <span className="eyebrow">AAA Developments</span>
          <h1>Roofing & property work in {a.name}</h1>
          <p>{a.intro}</p>
          <Actions quote />
        </div>
      </section>
      <section className="section area-intro">
        <div>
          <span className="eyebrow">Your local enquiry</span>
          <h2>{a.heading}</h2>
          <p>{a.text}</p>
        </div>
        <aside className="area-note">
          <h3>Arranging your visit</h3>
          <p>{a.note}</p>
          <Link href="/contact">Send an enquiry →</Link>
          <Link href="/emergency">Urgent roof problem →</Link>
        </aside>
      </section>
      <section className="section project-section">
        <span className="eyebrow">Available in {a.name}</span>
        <h2>Services for your property</h2>
        <div className="area-service-links">
          {services.map((s) => (
            <Link href={'/services/' + s.slug} key={s.slug}>
              {s.name}
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our work</span>
            <h2>A closer look at our work</h2>
          </div>
          <p>Roofing, rendering and property work by AAA Developments.</p>
        </div>
        <div className="project-grid">
          {a.gallery.map((id) => (
            <figure key={id}>
              <Picture id={id} />
            </figure>
          ))}
        </div>
      </section>
      <ReviewSection
        ids={a.reviews}
        title={
          ['burnley', 'accrington'].includes(slug)
            ? 'Feedback from local customers'
            : 'What AAA customers say'
        }
      />
      <section className="section related-areas">
        <h2>Other nearby areas</h2>
        <div className="town-links">
          {towns
            .filter((t) => t !== a.name)
            .map((t) => (
              <Link href={'/areas/' + t.toLowerCase()} key={t}>
                {t}
                <span>↗</span>
              </Link>
            ))}
        </div>
      </section>
      <ContactBand />
    </Shell>
  );
}
