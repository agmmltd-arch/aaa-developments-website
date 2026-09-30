import Link from 'next/link';
import {
  Shell,
  Picture,
  Actions,
  ContactBand,
  ReviewSection,
} from '@/components/site';
export const metadata = { title: 'Urgent roof repairs | Call Kelvin' };
export default function Emergency() {
  return (
    <Shell>
      <section className="inner-hero">
        <Picture id={36} priority />
        <div className="inner-shade" />
        <div className="inner-hero-text">
          <span className="eyebrow">Urgent roofing enquiry</span>
          <h1>
            Roof leaking?
            <br />
            Call Kelvin.
          </h1>
          <p>
            Describe what is happening and give your postcode. Kelvin can
            discuss current availability and the next step.
          </p>
          <Actions />
        </div>
      </section>
      <section className="section article-content">
        <h2>What to tell us</h2>
        <p>
          Explain where the water is appearing, when it started and whether
          tiles or other roof parts have moved. Mention the type of property and
          anything that affects access.
        </p>
        <h2>Photographs from a safe position</h2>
        <p>
          You can send photos on WhatsApp from the ground or inside the
          property. Do not climb onto the roof to investigate. If there is
          immediate danger to people, contact the emergency services.
        </p>
        <h2>Agree attendance directly</h2>
        <p>
          A visit depends on the location, existing work, weather and safe
          access. Call rather than waiting for an email reply if your problem is
          urgent.
        </p>
        <Link className="text-link" href="/services/emergency-roof-repairs">
          More about emergency roof repairs →
        </Link>
      </section>
      <ReviewSection ids={['maxine', 'ali', 'charlotte']} />
      <ContactBand />
    </Shell>
  );
}
