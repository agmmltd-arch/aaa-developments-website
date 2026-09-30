/* eslint-disable nextjs/no-img-element -- User photographs are served as original static assets. */
import Link from 'next/link';
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import {
  photo,
  services,
  towns,
  phone,
  tel,
  whatsapp,
  reviews,
  bark,
  email,
  mybuilder,
  google,
} from '@/lib/site';
// Original user photographs are served directly from local static assets.
export function Picture({
  id,
  className = '',
  priority = false,
}: {
  id: number;
  className?: string;
  priority?: boolean;
}) {
  const p = photo(id);
  return (
    <img
      src={p.src}
      alt={p.alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      data-photo-id={id}
    />
  );
}
export function Header() {
  return (
    <>
      <Link className="skip" href="#main-content">
        Skip to content
      </Link>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="AAA Developments home">
          <span>AAA Developments</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <details className="services-menu">
            <summary>
              Services <span>⌄</span>
            </summary>
            <div className="nav-dropdown">
              {services.map((s) => (
                <Link key={s.slug} href={'/services/' + s.slug}>
                  {s.name}
                </Link>
              ))}
              <Link href="/services">
                All services <ArrowRight size={16} />
              </Link>
            </div>
          </details>
          <Link href="/areas">Areas</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/emergency">Emergency</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link href={tel} className="button blue phone-button">
            <Phone size={16} />
            {phone}
          </Link>
          <Link href="/contact" className="button outline small">
            Get a Free Quote
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            Menu <span>☰</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/areas">Areas</Link>
            <Link href="/about">About Kelvin</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/emergency">Emergency</Link>
            <Link href="/contact">Contact / free quote</Link>
          </nav>
        </details>
      </header>
    </>
  );
}
export function Actions({ quote = false }: { quote?: boolean }) {
  return (
    <div className="actions">
      <Link href={tel} className="button blue">
        <Phone size={18} />
        Call {phone}
      </Link>
      <Link href={quote ? '/contact' : whatsapp} className="button outline">
        {quote ? <ArrowUpRight size={18} /> : <MessageCircle size={18} />}{' '}
        {quote ? 'Get a Free Quote' : 'Message on WhatsApp'}
      </Link>
    </div>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">AAA Developments</Link>
            <p>
              Roofing, plastering, rendering and jetwashing. Based in Padiham.
              Working across nearby Lancashire towns.
            </p>
            <Link href={tel}>{phone}</Link>
            <Link href={'mailto:' + email}>{email}</Link>
            <p>
              54 Ingham Street, Padiham
              <br />
              Lancashire BB12 8DR
            </p>
          </div>
          <div>
            <h3>Services</h3>
            {services.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug}>
                {s.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>Areas</h3>
            {towns.map((t) => (
              <Link key={t} href={'/areas/' + t.toLowerCase()}>
                {t}
              </Link>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/about">About Kelvin</Link>
            <Link href="/services">All services</Link>
            <Link href="/areas">All areas</Link>
            <Link href="/blog">Advice & guides</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/emergency">Emergency</Link>
            <Link href={mybuilder} target="_blank" rel="noreferrer">
              MyBuilder reviews ↗
            </Link>
            <Link href={bark} target="_blank" rel="noreferrer">
              Bark reviews ↗
            </Link>
            <Link href={google} target="_blank" rel="noreferrer">
              Google profile ↗
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AAA Developments</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <span>Built by AGMM</span>
          </div>
        </div>
      </footer>
      <Link href={tel} className="floating-call">
        <Phone size={20} />
        Call {phone}
      </Link>
      <nav className="mobile-contact" aria-label="Quick contact">
        <Link href={tel}>
          <Phone size={18} />
          <span>Call now</span>
        </Link>
        <Link href={whatsapp}>
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </Link>
        <Link href="/contact">
          <ArrowUpRight size={18} />
          <span>Free quote</span>
        </Link>
      </nav>
    </>
  );
}
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
export function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="review-stars">
      <span className="sr-only">{rating} out of 5 stars</span>
      {[0, 1, 2, 3, 4].map((n) => (
        <span key={n} className="star-unit" aria-hidden="true">
          <Star size={17} fill="currentColor" strokeWidth={0} />
          <span
            style={{ width: `${Math.max(0, Math.min(1, rating - n)) * 100}%` }}
          >
            <Star size={17} fill="currentColor" strokeWidth={0} />
          </span>
        </span>
      ))}
    </span>
  );
}
export function ReviewSection({
  ids = ['ali', 'lucy', 'carl'],
  title = 'Customer reviews',
}: {
  ids?: string[];
  title?: string;
}) {
  return (
    <section className="review-section section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Read their experiences</span>
          <h2>{title}</h2>
        </div>
        <Link
          href={mybuilder}
          className="text-link"
          target="_blank"
          rel="noreferrer"
        >
          More customer reviews <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="review-scorebar">
        <Link
          href={google}
          target="_blank"
          rel="noreferrer"
          className="review-score"
        >
          <strong>
            4.6<span>/5</span>
          </strong>
          <div>
            <Stars rating={4.6} />
            <span>
              65 reviews on <b>Google</b>
            </span>
          </div>
        </Link>
        <Link
          href={mybuilder}
          target="_blank"
          rel="noreferrer"
          className="review-score"
        >
          <strong>
            5.0<span>/5</span>
          </strong>
          <div>
            <Stars />
            <span>
              8 reviews on <b>MyBuilder</b>
            </span>
          </div>
        </Link>
        <div className="review-platforms">
          <Link href={bark} target="_blank" rel="noreferrer">
            More reviews on Bark ↗
          </Link>
          <small>Ratings checked September 2026</small>
        </div>
      </div>
      <div className="review-grid">
        {ids.map((id) => {
          const r = reviews.find((x) => x.id === id)!;
          return (
            <article key={id} className="review">
              <div className="review-person">
                <span className="review-avatar" aria-hidden="true">
                  {r.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')
                    .replace(',', '')}
                </span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
                <span className="source-tag">
                  {r.sourceName || 'Google via Bark'}
                </span>
              </div>
              {(r.sourceName === 'MyBuilder' || r.sourceName === 'Google') && (
                <Stars />
              )}
              <span className="review-topic">{r.topic}</span>
              <p>{r.quote ? <>“{r.quote}”</> : r.summary}</p>
              <Link href={r.source || bark} target="_blank" rel="noreferrer">
                {r.sourceName || 'Google review via Bark'} ↗
              </Link>
              <small>{r.quote ? 'Review excerpt' : 'Review summary'}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <span className="eyebrow">Roofing & property services</span>
        <h2>GET A QUOTE FROM KELVIN.</h2>
        <p>Call Kelvin to discuss the job, or send a few photos on WhatsApp.</p>
      </div>
      <Actions />
    </section>
  );
}
export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((s, i) => (
        <Link
          className={'service-card ' + (i === 0 ? 'featured' : '')}
          href={'/services/' + s.slug}
          key={s.slug}
        >
          <Picture id={s.image} />
          <div>
            <p>{s.problem}</p>
            <h3>{s.name}</h3>
            <ArrowUpRight className="card-arrow" size={24} />
          </div>
        </Link>
      ))}
    </div>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section faq-section">
      <div>
        <span className="eyebrow">Before you book</span>
        <h2>Questions we get asked</h2>
      </div>
      <div>
        {items.map((i) => (
          <details key={i.q} className="faq">
            <summary>
              {i.q}
              <span>+</span>
            </summary>
            <p>{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
