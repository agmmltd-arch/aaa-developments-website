import Link from '@/components/link';
import { notFound } from 'next/navigation';
import { Shell, Picture, ContactBand } from '@/components/site';
import { guides } from '@/lib/guides';
import { services, siteUrl, photo } from '@/lib/site';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  return {
    title: guide?.seoTitle || guide?.title || 'Guide not found',
    description: guide?.intro,
    openGraph: {type:'article',title:guide?.title,description:guide?.intro,url:`/blog/${slug}`,images:guide ? [{url:photo(guide.image).src,alt:photo(guide.image).alt}] : []},
    alternates: {canonical: `/blog/${slug}`},
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
          {g.service && <Link href={'/services/' + g.service}>{services.find(s => s.slug === g.service)?.name} →</Link>}
          {guides.filter(next => next.slug !== g.slug && next.service === g.service).slice(0, 1).map(next => <Link key={next.slug} href={'/blog/' + next.slug}>{next.title} →</Link>)}
          <Link href="/contact">Request a free quote →</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.intro,image:siteUrl+photo(g.image).src,mainEntityOfPage:siteUrl+'/blog/'+g.slug,publisher:{'@id':siteUrl+'/#business'}})}}/>
      <ContactBand />
    </Shell>
  );
}
