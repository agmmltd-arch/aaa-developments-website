import { Shell } from '@/components/site';
export const metadata = {
  title: 'Privacy information',
  description: 'How AAA Developments handles website enquiry information.',
};
export default function Privacy() {
  return (
    <Shell>
      <section className="page-heading section">
        <h1>Privacy</h1>
        <p>How enquiries through this website work.</p>
      </section>
      <section className="section article-content">
        <h2>Your enquiry</h2>
        <p>
          The enquiry form prepares a message using the details you enter. You
          choose whether to send it through your own email app or WhatsApp. Your
          form entries are not submitted to a website enquiry database.
        </p>
        <h2>Contacting AAA</h2>
        <p>
          Your contact details and information about the job are used to respond
          to your enquiry and discuss the requested work. Contact
          info@aaadevelopment.co.uk if you have a question about information you
          have shared with AAA.
        </p>
        <h2>External services</h2>
        <p>
          Links to WhatsApp, Google, Bark and MyBuilder open services with their
          own privacy policies. Those services receive information when you
          choose to use them.
        </p>
        <h2>Website hosting</h2>
        <p>
          The hosting service may process technical connection information
          needed to deliver and protect the website. This website does not add
          advertising trackers or a marketing analytics service.
        </p>
      </section>
    </Shell>
  );
}
