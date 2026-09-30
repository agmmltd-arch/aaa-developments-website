import Link from 'next/link';
import { Shell } from '@/components/site';
import QuoteForm from '@/components/quote-form';
import {
  phone,
  tel,
  whatsapp,
  email,
  bark,
  mybuilder,
  google,
} from '@/lib/site';
export const metadata = { title: 'Contact Kelvin & request a quote' };
export default function Contact() {
  return (
    <Shell>
      <section className="page-heading section">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / Contact
        </div>
        <span className="eyebrow">Tell us what needs doing</span>
        <h1>Contact Kelvin.</h1>
        <p>
          Roofing, plastering, rendering or jetwashing. Call Kelvin, send photos
          on WhatsApp or use the form below.
        </p>
      </section>
      <section className="section contact-layout">
        <div>
          <h2>Speak to Kelvin</h2>
          <p>
            For an urgent roof problem, please call directly. For planned work,
            a description, postcode and a few photographs are a useful starting
            point.
          </p>
          <Link className="contact-line" href={tel}>
            {phone}
          </Link>
          <Link className="contact-line" href={whatsapp}>
            Message on WhatsApp ↗
          </Link>
          <Link className="contact-line" href={'mailto:' + email}>
            {email}
          </Link>
          <p style={{ marginTop: 30 }}>
            AAA Developments
            <br />
            54 Ingham Street
            <br />
            Padiham, Lancashire BB12 8DR
          </p>
          <p>Property visits by arrangement. Call to confirm availability.</p>
          <div className="actions">
            <Link
              href={google}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Google ↗
            </Link>
            <Link
              href={mybuilder}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              MyBuilder ↗
            </Link>
            <Link
              href={bark}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Bark ↗
            </Link>
          </div>
        </div>
        <QuoteForm />
      </section>
    </Shell>
  );
}
