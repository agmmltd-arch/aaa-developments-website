'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { services, email, whatsapp, mybuilder } from '@/lib/site';
export default function QuoteForm() {
  const [urgency, setUrgency] = useState([3]);
  const [service, setService] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
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
      `Hello Kelvin, I would like a quote.\nName: ${field('name')}\nPhone: ${field('phone')}\nPostcode: ${field('postcode')}\nService: ${service}\nUrgency: ${urgency[0]} out of 5\nDetails: ${field('notes')}${field('email') ? '\nEmail: ' + field('email') : ''}`,
    );
  }
  return (
    <div className="quote-panel" id="quote">
      <h2>Get a free written quote</h2>
      <p>Tell Kelvin what needs doing.</p>
      <form onSubmit={submit}>
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
            Phone number
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
        <div className="urgency">
          <span className="form-label" id="urgency-label">
            How urgent is it?
          </span>
          <Slider
            aria-labelledby="urgency-label"
            aria-label="Urgency from 1 to 5"
            value={urgency}
            onValueChange={(v) => setUrgency(Array.isArray(v) ? v : [v])}
            min={1}
            max={5}
            step={1}
          />
          <div className="urgency-numbers">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                aria-pressed={urgency[0] === n}
                onClick={() => setUrgency([n])}
              >
                {n}
              </button>
            ))}
          </div>
          <small>1 is no rush. 5 is an urgent problem.</small>
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
              Service required
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
          Tell us the problem
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
          {showEmail
            ? 'Hide optional email'
            : 'Add an email for a written quote'}
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
        <div className="quote-review">
          <Link href={mybuilder} target="_blank" rel="noreferrer">
            ★★★★★ 5.0 on MyBuilder ↗
          </Link>
        </div>
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
        <button type="submit" className="button blue quote-submit">
          Get a Free Quote <ClipboardList size={18} />
        </button>
        <small className="form-note">
          Next, choose WhatsApp or email to send your enquiry.
        </small>
        <small className="privacy-note">
          Your details are used to reply.{' '}
          <Link href="/privacy">Privacy policy</Link>
        </small>
      </form>
      {message && (
        <div className="send-options">
          <output>Your enquiry is ready to send.</output>
          <p>
            Choose a method below, then press send in WhatsApp or your email
            app.
          </p>
          <Link
            className="button blue"
            href={whatsapp + '?text=' + encodeURIComponent(message)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Send with WhatsApp
          </Link>
          <Link
            className="button outline"
            href={
              'mailto:' +
              email +
              '?subject=' +
              encodeURIComponent('Website quote request') +
              '&body=' +
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
