'use client';
import { useState, type FormEvent } from 'react';
import { Check, ArrowRight } from 'lucide-react';
function austinNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const value = (type: string) => parts.find((part) => part.type === type)?.value || '';
  return {
    date: `${value('year')}-${value('month')}-${value('day')}`,
    time: `${value('hour')}:${value('minute')}`,
  };
}
function localDate() {
  return austinNow().date;
}
function hours(date: string) {
  const day = new Date(`${date}T12:00:00`).getDay();
  return { start: day === 0 ? 12 : 11, end: day === 0 ? 20 : day === 5 || day === 6 ? 22 : 21 };
}
export function ReservationForm() {
  const [date, setDate] = useState(localDate);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const available = hours(date || localDate());
  const times = Array.from({ length: (available.end - available.start) * 2 + 1 }, (_, index) => {
    const hour = available.start + Math.floor(index / 2);
    return `${String(hour).padStart(2, '0')}:${index % 2 ? '30' : '00'}`;
  });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const now = austinNow();
    const when = `${date}T${data.get('time')}`;
    if (!String(data.get('name')).trim() || when <= `${now.date}T${now.time}`) {
      setError('Please enter your name and choose a future date and time.');
      return;
    }
    // Integration boundary: send the validated FormData to your reservation API here.
    setError('');
    setSuccess(true);
  }
  if (success)
    return (
      <div className="success-state" role="status">
        <span className="success-icon">
          <Check />
        </span>
        <h3>A little taste of what’s next.</h3>
        <p>
          Your demo reservation request is complete. No table has been booked and no email will be
          sent.
        </p>
        <button className="button outline" onClick={() => setSuccess(false)}>
          Make another request
        </button>
      </div>
    );
  return (
    <>
      <p className="muted modal-intro">
        Good food tastes better with good company. Let’s find your table.
      </p>
      <form className="form-grid" onSubmit={submit}>
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your full name"
          />
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
        <label className="full">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            pattern="[+0-9\(\) .\-]{7,20}"
            placeholder="(512) 555-0123"
          />
        </label>
        <label>
          Date
          <input
            name="date"
            type="date"
            required
            min={localDate()}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Time
          <select name="time" key={date} required>
            {times.map((time) => (
              <option key={time} value={time}>
                {Number(time.slice(0, 2)) % 12 || 12}:{time.slice(3)}{' '}
                {Number(time.slice(0, 2)) >= 12 ? 'PM' : 'AM'}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          Guests
          <select name="guests" defaultValue="2">
            {Array.from({ length: 8 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} {index === 0 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          Special request <span className="muted">(optional)</span>
          <textarea
            name="request"
            rows={2}
            maxLength={1000}
            placeholder="A celebration, dietary preferences, or anything else…"
          />
        </label>
        {error && (
          <p className="form-error full" role="alert">
            {error}
          </p>
        )}
        <button className="button full" type="submit">
          Request Reservation <ArrowRight size={17} />
        </button>
        <p className="micro full">
          All times are Austin time (CT). Portfolio demo — no real table is booked.
        </p>
      </form>
    </>
  );
}
