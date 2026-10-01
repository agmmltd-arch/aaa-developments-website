import Link from '@/components/link';
import { notFound } from 'next/navigation';
import { Shell, Picture, ContactBand } from '@/components/site';
import { guides } from '@/lib/guides';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: guides.find((g) => g.slug === slug)?.title || 'Guide not found',
    description: guides.find((g) => g.slug === slug)?.intro,
  };
}
export default async function Guide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <Shell>
      <section className="inner-hero">
        <Picture id={g.image} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/blog">Advice</Link>
          </div>
          <h1>{g.title}</h1>
          <p>{g.intro}</p>
        </div>
      </section>
      <article className="section article-content">
        {g.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </section>
        ))}
      </article>
      <section className="section guide-next">
        <div>
          <span className="eyebrow">Useful next step</span>
          <h2>Discuss the work with Kelvin.</h2>
        </div>
        <div className="guide-next-links">
          {slug === 'requesting-a-roofing-quote' && (
            <Link href="/services/roof-repairs">Explore roof repairs →</Link>
          )}
          {slug === 'planning-plastering-work' && (
            <Link href="/services/plastering">Explore plastering →</Link>
          )}
          {slug === 'planning-exterior-work' && (
            <>
              <Link href="/services/rendering">Explore rendering →</Link>
              <Link href="/services/jetwashing">Explore jetwashing →</Link>
            </>
          )}
          <Link href="/contact">Request a free quote →</Link>
        </div>
      </section>
      <ContactBand />
    </Shell>
  );
}
