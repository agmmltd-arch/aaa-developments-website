import Link from '@/components/link';
import { Shell, Picture, ContactBand } from '@/components/site';
import { guides } from '@/lib/guides';
export const metadata = {
  title: 'Roofing, plastering & rendering advice',
  description: 'Practical advice on roof repairs, guttering, plastering and rendering. Plan your job and find the right service with AAA Developments in Padiham.',
};
export default function Blog() {
  return (
    <Shell>
      <section className="inner-hero directory-hero">
        <Picture id={6} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <span className="eyebrow">AAA Developments</span>
          <h1>Advice for your home</h1>
          <p>Useful details for planning the work and asking for a quote.</p>
        </div>
      </section>
      <section className="section guide-grid">
        {guides.map((g) => (
          <Link href={'/blog/' + g.slug} className="guide-card" key={g.slug}>
            <Picture id={g.image} />
            <span className="eyebrow">{g.category}</span>
            <h2>{g.title}</h2>
            <p>{g.intro}</p>
            <span className="text-link">Read guide →</span>
          </Link>
        ))}
      </section>
      <ContactBand />
    </Shell>
  );
}
