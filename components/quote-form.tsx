'use client';
import Link from '@/components/link';
import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { services, email, whatsapp } from '@/lib/site';
export default function QuoteForm() {
  const [service, setService] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSent(false);
    if (!service) {
      setError('Please choose the service you need.');
      return;
    }
    const f = new FormData(e.currentTarget);
    const field = (key: string) => {
      const value = f.get(key);
      return typeof value === 'string' ? value : '';
    };
    setMessage(
      `Hello Kelvin, I would like a quote.\nName: ${field('name')}\nPhone: ${field('phone')}\nPostcode: ${field('postcode')}\nService: ${service}\nDetails: ${field('notes')}${field('email') ? '\nEmail: ' + field('email') : ''}`,
    );
    setSending(true);
    try {
      const response = await fetch('/api/enquiry', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:field('name'),phone:field('phone'),postcode:field('postcode'),notes:field('notes'),email:field('email'),website:field('website'),service})});
      const result = await response.json() as {message?: string};
      if (!response.ok) setError(result.message || 'Please try again or call Kelvin.');
      else { setSent(true); setMessage(''); }
    } catch { setError('Unable to send right now. Please use WhatsApp or email below.'); }
    finally { setSending(false); }

  }
  return (
    <div className="quote-panel" id="quote">
      <h2>Get a free quote</h2>
      <p>Tell Kelvin what needs doing.</p>
      <form onSubmit={submit}>
        <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
        <div className="form-row">
          <label>
            Your name
            <input
              autoComplete="name"
              name="name"
              placeholder="e.g. John Smith"
              required
              maxLength={100}
            />
          </label>
          <label>
            Phone
            <input
              autoComplete="tel"
              type="tel"
              name="phone"
              placeholder="e.g. 07700 900000"
              required
              minLength={10}
              maxLength={25}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Postcode
            <input
              name="postcode"
              autoComplete="postal-code"
              placeholder="e.g. BB12 8DR"
              required
              maxLength={12}
            />
          </label>
          <div>
            <label id="service-label" htmlFor="service-choice">
              Service
            </label>
            <Select
              value={service}
              onValueChange={setService}
              items={services.map((s) => ({ label: s.name, value: s.name }))}
            >
              <SelectTrigger
                id="service-choice"
                aria-labelledby="service-label"
                className="service-select"
              >
                <SelectValue placeholder="Please select…" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <label>
          About the job
          <textarea
            name="notes"
            placeholder="Brief description…"
            rows={3}
            required
            maxLength={2000}
          />
        </label>
        <button
          className="email-toggle"
          type="button"
          onClick={() => setShowEmail(!showEmail)}
        >
          {showEmail ? 'Hide optional email' : 'Add email (optional)'}
        </button>
        {showEmail && (
          <label>
            Email address
            <input
              type="email"
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              maxLength={150}
            />
          </label>
        )}
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
        <button type="submit" disabled={sending} className="button blue quote-submit">
          {sending ? 'Sending…' : 'Get a Free Quote'} <ClipboardList size={18} />
        </button>
        {sent && <output className="form-success">Your enquiry has been sent. Kelvin will be in touch.</output>}
        <small className="privacy-note">
          For replying to your enquiry.{' '}
          <Link href="/privacy">Privacy policy</Link>
        </small>
      </form>
      {message && error && (
        <div className="send-options">
          <output>You can also send your enquiry directly.</output>
          <p>
            Choose a method below, then press send in WhatsApp or your email
            app.
          </p>
          <Link
            className="button outline whatsapp-button"
            href={whatsapp + '?text=' + encodeURIComponent(message)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Message on WhatsApp
          </Link>
          <Link
            className="button outline"
            href={
              'mailto:' +
              email +
              '?subject=' +
              encodeURIComponent('Website quote request') +
              '&cc=agmm.ltd%40gmail.com&body=' +
              encodeURIComponent(message)
            }
          >
            Send with email ↗
          </Link>
        </div>
      )}
    </div>
  );
}
