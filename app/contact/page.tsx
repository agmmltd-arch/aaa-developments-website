import Link from '@/components/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { Shell, Picture, ContactBand } from '@/components/site';
import { ReviewSourceLogo } from '@/components/review-carousel';
import QuoteForm from '@/components/quote-form';
import { phone, tel, whatsapp, email, google } from '@/lib/site';
export const metadata = {
  title: 'Contact Kelvin & request a quote',
  description:
    'Call Kelvin or request a quote for roofing, plastering and rendering work across Padiham and East Lancashire.',
};
export default function Contact() {
  return (
    <Shell>
      <section className="home-hero contact-hero">
        <Picture id={14} className="hero-photo" priority />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-location">
            Roofing · Plastering · Rendering
          </span>
          <h1>
            LET’S TALK
            <br />
            <span>ABOUT YOUR JOB.</span>
          </h1>
          <div className="hero-description">
            <p>Call Kelvin, send a few photos, or fill in the form.</p>
            <div className="contact-methods">
              <Link href={tel}>
                <Phone size={18} />
                <span>{phone}</span>
              </Link>
              <Link href={whatsapp}>
                <WhatsAppIcon />
                <span>Message on WhatsApp</span>
              </Link>
              <Link href={'mailto:' + email}>
                <Mail size={18} />
                <span>{email}</span>
              </Link>
            </div>
            <Link
              href={google}
              className="hero-review"
              target="_blank"
              rel="noreferrer"
            >
              <ReviewSourceLogo source="Google" />
              <strong>4.6 Stars</strong>
            </Link>
          </div>
        </div>
        <QuoteForm />
      </section>
      <section className="section enquiry-details">
        <div>
          <MapPin />
          <h2>Based in Padiham</h2>
        </div>
        <div>
          <Phone />
          <h2>Something urgent?</h2>
        </div>
        <div>
          <WhatsAppIcon size={24} />
          <h2>Message on WhatsApp</h2>
        </div>
      </section>
      <ContactBand />
    </Shell>
  );
}
