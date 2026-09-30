/* eslint-disable nextjs/no-img-element -- User photographs are served as original static assets. */
import Link from 'next/link';
import { WhatsAppIcon } from './whatsapp-icon';
import { ReviewCarousel, ReviewSourceLogo } from './review-carousel';
import {
  ArrowUpRight,
  Phone,
  ClipboardList,
  ArrowRight,
  Star,
} from 'lucide-react';
import {
  photo,
  services,
  phone,
  tel,
  whatsapp,
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
          <Link href="/about">About</Link>
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
            <ClipboardList size={16} /> Get a Free Quote
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
      <Link
        href={quote ? '/contact' : whatsapp}
        className="button outline whatsapp-button"
      >
        {quote ? <ClipboardList size={18} /> : <WhatsAppIcon size={18} />}{' '}
        {quote ? 'Get a Free Quote' : 'Message on WhatsApp'}
      </Link>
    </div>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer" id="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">AAA Developments</Link>
            <Link href={tel} className="footer-phone">
              {phone}
            </Link>
            <Link href={'mailto:' + email}>{email}</Link>
          </div>
          <div>
            <h3>Key services</h3>
            <Link href="/services/roof-repairs">Roof repairs</Link>
            <Link href="/services/new-roofs">New roofs</Link>
            <Link href="/services/flat-roofing">Flat roofing</Link>
            <Link href="/services/plastering">Plastering</Link>
            <Link href="/services/rendering">Rendering</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span>© {new Date().getFullYear()} AAA Developments</span>
          <span>Built by AGMM</span>
        </div>
      </footer>
      <nav className="mobile-contact" aria-label="Quick contact">
        <Link href={tel}>
          <Phone size={18} />
          <span>Call now</span>
        </Link>
        <Link href={whatsapp} className="mobile-whatsapp">
          <WhatsAppIcon size={18} />
          <span>WhatsApp</span>
        </Link>
        <Link href="/contact">
          <ClipboardList size={18} />
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
    <section className="review-section section" id="reviews">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Read their experiences</span>
          <h2>{title}</h2>
        </div>
        <p>Original reviews from verified customer profiles.</p>
      </div>
      <div className="review-scorebar" aria-label="Review profiles">
        <Link
          href={google}
          target="_blank"
          rel="noreferrer"
          className="review-score"
        >
          <ReviewSourceLogo source="Google" />
          <span>
            <strong>4.6 / 5</strong>
          </span>
        </Link>
        <Link
          href={mybuilder}
          target="_blank"
          rel="noreferrer"
          className="review-score"
        >
          <ReviewSourceLogo source="MyBuilder" />
          <span>
            <strong>5 / 5</strong>
          </span>
        </Link>
        <Link
          href={bark}
          target="_blank"
          rel="noreferrer"
          className="review-score"
        >
          <ReviewSourceLogo source="Bark" />
          <span>Read reviews on Bark</span>
        </Link>
      </div>
      <ReviewCarousel ids={ids} />
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <Picture id={4} className="contact-band-photo" />
      <div className="contact-band-shade" />
      <div>
        <span className="eyebrow">Roofing · Plastering · Rendering</span>
        <h2>GET A QUOTE FROM KELVIN.</h2>
        <p>Tell Kelvin what needs doing. Call or send photos on WhatsApp.</p>
      </div>
      <Actions />
    </section>
  );
}
export function ServiceGrid({
  secondaryOnly = false,
}: {
  secondaryOnly?: boolean;
}) {
  return (
    <div className="service-grid">
      {services
        .filter(
          (s) =>
            !secondaryOnly || !['plastering', 'rendering'].includes(s.slug),
        )
        .map((s) => (
          <Link
            className="service-card"
            href={'/services/' + s.slug}
            key={s.slug}
          >
            <Picture id={s.image} />
            <div>
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
      <div className="faq-heading">
        <span className="eyebrow">Before you book</span>
        <h2>FAQs</h2>
      </div>
      <div className="faq-grid">
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
