import Link from 'next/link';
import { Shell, Actions } from '@/components/site';
export default function NotFound() {
  return (
    <Shell>
      <section className="section not-found">
        <span className="eyebrow">Page not found</span>
        <h1>Let’s get you to the right place.</h1>
        <p style={{ marginTop: 20 }}>
          <Link href="/services" className="text-link">
            Browse our services →
          </Link>
        </p>
        <Actions quote />
      </section>
    </Shell>
  );
}
