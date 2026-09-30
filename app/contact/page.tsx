import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { Shell, Picture, ContactBand, Stars } from '@/components/site';
import QuoteForm from '@/components/quote-form';
import { phone, tel, whatsapp, email, google } from '@/lib/site';
export const metadata = { title: 'Contact Kelvin & request a quote' };
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
                <span>WhatsApp Kelvin</span>
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
              <Stars rating={4.6} />
              <strong>4.6 / 5</strong>
              <span>65 Google reviews</span>
            </Link>
          </div>
        </div>
        <QuoteForm />
      </section>
      <section className="section enquiry-details">
        <div>
          <MapPin />
          <h2>Based in Padiham</h2>
          <p>
            54 Ingham Street, Padiham, BB12 8DR. Property visits by arrangement.
          </p>
        </div>
        <div>
          <Phone />
          <h2>Something urgent?</h2>
          <p>
            Call directly about a roof leak. Kelvin will discuss access and
            availability.
          </p>
        </div>
        <div>
          <WhatsAppIcon size={24} />
          <h2>Useful to send</h2>
          <p>
            Your postcode, a short description and photos taken from a safe
            position.
          </p>
        </div>
      </section>
      <ContactBand />
    </Shell>
  );
}
