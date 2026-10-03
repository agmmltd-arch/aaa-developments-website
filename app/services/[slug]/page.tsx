import Link from '@/components/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, ClipboardList, Phone } from 'lucide-react';
import { Shell, Picture } from '@/components/site';
import { services, tel, phone, siteUrl, photo } from '@/lib/site';
import { serviceContent } from '@/lib/service-content';
import { serviceSummaries } from '@/lib/service-summaries';
import { guides } from '@/lib/guides';
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const s = services.find(s => s.slug === slug);
  return {title: s ? `${s.name} in Padiham` : 'Service not found', description: serviceSummaries[slug]?.intro, alternates: {canonical: `/services/${slug}`}, openGraph: {title: s?.name, description: serviceSummaries[slug]?.intro, url: `/services/${slug}`, images: serviceContent[slug] ? [{url:photo(serviceContent[slug].hero).src,alt:photo(serviceContent[slug].hero).alt}] : []}};
}
export default async function ServicePage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const s = services.find(s => s.slug === slug);
  const c = serviceContent[slug];
  const brief = serviceSummaries[slug];
  if (!s || !c || !brief) notFound();
  const guide = guides.find(g => g.slug === brief.guide);
  const related = services.find(s => s.slug === brief.related);
  const gallery = c.gallery.filter(id => id !== c.hero).slice(0,3);
  return <Shell>
    <section className="inner-hero service-hero">
      <Picture id={c.hero} priority />
      <div className="inner-shade" />
      <div className="inner-hero-text">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/services">Services</Link></div>
        <span className="eyebrow">Padiham & East Lancashire</span>
        <h1>{s.name}</h1><p>{brief.intro}</p>
        <Link href="/contact#quote" className="button blue"><ClipboardList size={18}/> Get a free quote</Link>
      </div>
    </section>
    <section className="section service-essential">
      <div>
        <h2>What we can help with</h2>
        <ul className="service-includes">{brief.includes.map(item => <li key={item}><Check size={18}/>{item}</li>)}</ul>
        <details className="service-scope"><summary>About the work <span>+</span></summary><p>{brief.detail}</p></details>
        <Link href="/areas" className="text-link">Check our service areas <ArrowUpRight size={16}/></Link>
      </div>
      <aside className="service-booking"><span className="eyebrow">Speak directly to Kelvin</span><h2>Let’s get your job booked.</h2><p>Send your postcode, a few photos and what needs doing.</p><Link href="/contact#quote" className="button blue"><ClipboardList size={18}/> Request a quote</Link><Link href={tel} className="service-call"><Phone size={16}/> {phone}</Link></aside>
    </section>
    {gallery.length > 0 && <section className="section service-photos" aria-label={`${s.name} photos`}><div className="service-photo-grid">{gallery.map(id => <Picture id={id} key={id}/>)}</div></section>}
    <section className="section service-next"><h2>Useful next steps</h2><div className="service-next-grid">
      {guide && <Link href={'/blog/'+guide.slug}><span className="eyebrow">Advice</span><h3>{guide.title}</h3><ArrowUpRight size={22}/></Link>}
      {related && <Link href={'/services/'+related.slug}><span className="eyebrow">Related service</span><h3>{related.name}</h3><ArrowUpRight size={22}/></Link>}
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:s.name,description:brief.intro,url:`${siteUrl}/services/${slug}`,provider:{'@id':`${siteUrl}/#business`},areaServed:{'@type':'AdministrativeArea',name:'East Lancashire'}})}}/>
  </Shell>;
}
