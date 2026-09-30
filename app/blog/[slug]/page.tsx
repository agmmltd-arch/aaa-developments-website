import Link from 'next/link';
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
      <ContactBand />
    </Shell>
  );
}
