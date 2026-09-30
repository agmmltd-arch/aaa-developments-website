import { Shell } from '@/components/site';
export const metadata = { title: 'Website information' };
export default function Terms() {
  return (
    <Shell>
      <section className="page-heading section">
        <h1>Website information</h1>
        <p>Enquiries, photographs and the scope of work.</p>
      </section>
      <section className="section article-content">
        <h2>Enquiries and quotations</h2>
        <p>
          Sending an enquiry does not book a visit or agree a price. The scope,
          timing, materials, payment arrangements and any guarantee should be
          confirmed directly with AAA before work begins.
        </p>
        <h2>Availability</h2>
        <p>
          Attendance and job dates depend on the specific work, location, access
          and conditions. Contact Kelvin for current availability.
        </p>
        <h2>Project photographs</h2>
        <p>
          Images show a selection of roofing and property work and details. A
          photograph on an area page is an example of the work and does not, by
          itself, identify that project’s location.
        </p>
        <h2>Customer feedback</h2>
        <p>
          Review excerpts and summaries link to their source. A review describes
          that customer’s experience. It does not create a general promise about
          completion times, price or guarantees for another job.
        </p>
      </section>
    </Shell>
  );
}
