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
          <h2>Three useful details.</h2>
          <div className="practical-grid">
            <article>
              <span>01</span>
              <h3>What’s happening?</h3>
              <p>Where is the water appearing, and when did it start?</p>
            </article>
            <article>
              <span>02</span>
              <h3>Where’s the property?</h3>
              <p>
                Give your postcode and mention anything that affects access.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Can you send photos?</h3>
              <p>
                Take them from the ground or indoors. Don’t climb onto the roof.
              </p>
            </article>
          </div>
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
