import Section from './Section';
import { profile } from '../data/profile';

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="05 — Achievements"
      title="Beyond the code"
      subtitle="Competitive programming and community work that shaped how I build."
    >
      <div className="ach-grid">
        {profile.achievements.map((a) => (
          <div className="ach-card" data-reveal key={a.title}>
            <div className="ach-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
