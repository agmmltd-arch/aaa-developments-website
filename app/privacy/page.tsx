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
          The form sends your name, telephone number, postcode, job details and
          optional email address to AAA Developments at info@aaadevelopment.co.uk
          and its website support team at agmm.ltd@gmail.com. FormSubmit processes
          the form to deliver those emails. Please only include information needed
          to discuss your job.
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
          choose to use them. FormSubmit’s privacy information is available at
          <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noreferrer">FormSubmit’s privacy policy</a>.
        </p>
        <h2>Your information</h2>
        <p>Your enquiry is used to respond, arrange a visit and discuss or quote for the requested work. Ask AAA about access, correction or deletion of information you have shared. Enquiries should only be retained for as long as needed for the work and applicable record-keeping obligations.</p>
        <h2>Cookies</h2>
        <p>There are no advertising or analytics cookies. The hosting service may use essential security cookies. Dismissing the cookie information notice is remembered for the current browser session; scrolling dismisses the notice, not a consent request.</p>
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
