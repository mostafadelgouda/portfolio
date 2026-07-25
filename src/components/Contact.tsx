import { useState } from 'react';
import Section from './Section';
import { api } from '../api';
import { profile } from '../data/profile';
import { WhatsappIcon, MailIcon, GithubIcon, LinkedinIcon, MapPinIcon } from './icons';

type Status = { type: 'idle' | 'sending' | 'ok' | 'err'; msg?: string };
type Channel = 'whatsapp' | 'email';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [via, setVia] = useState<Channel>('whatsapp');
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status.type === 'sending') return;
    setStatus({ type: 'sending' });
    try {
      await api.contact({ ...form, via });
      setStatus({
        type: 'ok',
        msg:
          via === 'whatsapp'
            ? "Thanks! Your message is on its way to my WhatsApp — I'll get back to you soon."
            : "Thanks! Your message is on its way to my inbox — I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '', company: '' });
    } catch (err) {
      setStatus({
        type: 'err',
        msg: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    }
  }

  return (
    <Section id="contact" eyebrow="06 — Contact">
      <div className="contact-grid">
        <div className="contact-intro" data-reveal>
          <h2>
            Let's <span className="accent-text">build something</span> together
          </h2>
          <p>
            Have a project in mind, a role to fill, or just want to say hi? Drop me a message and
            pick how it reaches me — WhatsApp or email.
          </p>

          <div className="contact-note">
            <span className="wa">
              <WhatsappIcon size={22} />
            </span>
            <span>
              You choose the channel — your message lands on my <strong>WhatsApp</strong> or in my{' '}
              <strong>inbox</strong>, and I reply fast either way.
            </span>
          </div>

          <div className="contact-list">
            <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer">
              <WhatsappIcon size={18} /> Chat with me on WhatsApp
            </a>
            <a href={profile.socials.email}>
              <MailIcon size={18} /> {profile.email}
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <GithubIcon size={18} /> github.com/mostafadelgouda
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={18} /> linkedin.com/in/mostafadelgouda
            </a>
            <span className="contact-list-loc" style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-muted)' }}>
              <MapPinIcon size={18} /> {profile.location}
            </span>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit} data-reveal noValidate>
          <div className="field">
            <span className="field-label">Send my message via</span>
            <div className="channel-toggle" role="radiogroup" aria-label="Delivery channel">
              <button
                type="button"
                role="radio"
                aria-checked={via === 'whatsapp'}
                className={`channel-btn${via === 'whatsapp' ? ' active' : ''}`}
                onClick={() => setVia('whatsapp')}
              >
                <WhatsappIcon size={17} /> WhatsApp
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={via === 'email'}
                className={`channel-btn${via === 'email' ? ' active' : ''}`}
                onClick={() => setVia('email')}
              >
                <MailIcon size={17} /> Email
              </button>
            </div>
          </div>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
              required
              maxLength={100}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email (optional)</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              maxLength={200}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me about your project or idea…"
              required
              maxLength={4000}
            />
          </div>

          {/* Honeypot — hidden from real users, catches bots */}
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={update('company')}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? (
              <>
                <span className="spinner" aria-hidden="true" /> Sending…
              </>
            ) : via === 'whatsapp' ? (
              <>
                Send to WhatsApp <WhatsappIcon size={18} />
              </>
            ) : (
              <>
                Send as email <MailIcon size={18} />
              </>
            )}
          </button>

          {(status.type === 'ok' || status.type === 'err') && (
            <div className={`form-status ${status.type === 'ok' ? 'ok' : 'err'}`}>{status.msg}</div>
          )}
        </form>
      </div>
    </Section>
  );
}
