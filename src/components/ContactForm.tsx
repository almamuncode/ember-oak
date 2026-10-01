'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get('name')).trim() || !String(data.get('message')).trim()) {
      setError('Please enter your name and a message.');
      return;
    }
    setError('');
    setSent(true);
  }
  if (sent)
    return (
      <div className="success-state" role="status">
        <span className="success-icon">
          <Check />
        </span>
        <h3>Thanks for stopping by.</h3>
        <p>
          Your demo message is complete. This portfolio form doesn’t send email or store your
          personal details.
        </p>
        <button className="button outline" onClick={() => setSent(false)}>
          Write another message
        </button>
      </div>
    );
  return (
    <form className="form-grid" onSubmit={submit}>
      <label>
        Name
        <input name="name" autoComplete="name" required placeholder="Your name" maxLength={100} />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <label>
        Phone <span className="muted">(optional)</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          pattern="[+0-9\(\) .\-]{7,20}"
          placeholder="Your phone number"
        />
      </label>
      <label>
        Subject
        <select name="subject" required defaultValue="">
          <option value="" disabled>
            What’s on your mind?
          </option>
          <option>General inquiry</option>
          <option>Private dining</option>
          <option>Dietary requirements</option>
          <option>Feedback</option>
        </select>
      </label>
      <label className="full">
        Your message
        <textarea name="message" rows={5} required maxLength={3000} placeholder="We’re all ears…" />
      </label>
      {error && (
        <p role="alert" className="full form-error">
          {error}
        </p>
      )}
      <button className="button full" type="submit">
        Send Message <ArrowUpRight size={17} />
      </button>
      <p className="micro full">This is a portfolio demo. Messages are not sent.</p>
    </form>
  );
}
