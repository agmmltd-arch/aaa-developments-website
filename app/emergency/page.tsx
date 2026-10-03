import Link from '@/components/link';
import {
  Shell,
  Picture,
  Actions,
  ContactBand,
  ReviewSection,
} from '@/components/site';
export const metadata = {
  title: 'Urgent roof repairs | Call Kelvin',
  description:
    'Call Kelvin at AAA Developments about an urgent roof leak in Padiham or nearby East Lancashire towns.',
};
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
      <section className="section emergency-help">
        <Picture id={20} />
        <div>
          <span className="eyebrow">When you call</span>
          <h2>Tell Kelvin what’s happening.</h2>
          <p>Explain where the water is appearing and when it started. Give your postcode and mention anything that affects access.</p>
          <p>Photos from indoors or ground level help. Do not climb onto the roof to take them.</p>
          <p className="attendance-note">
            Attendance depends on availability, weather and safe access. If
            people are in immediate danger, contact the emergency services.
          </p>
          <Link className="text-link" href="/services/emergency-roof-repairs">
            About emergency repairs
          </Link>
        </div>
      </section>
      <ReviewSection ids={['maxine', 'ali', 'charlotte']} />
      <ContactBand />
    </Shell>
  );
}
