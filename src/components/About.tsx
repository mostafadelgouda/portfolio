import Section from './Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="about-grid">
        <div className="about-text" data-reveal>
          <p>
            I'm a software engineer from {profile.location}, currently building enterprise
            applications at <strong>Huawei</strong> and teaching programming as an instructor at{' '}
            <strong>Coach Academy</strong>. I enjoy building the parts of an application users never
            see but always feel — reliable APIs, thoughtful data models and systems that scale
            gracefully.
          </p>
          <p>
            Most of my professional work lives in the backend: designing REST APIs with{' '}
            <strong>Node.js</strong> and <strong>TypeScript</strong>, modelling relational data in{' '}
            <strong>PostgreSQL</strong>, and wiring up authentication, payments and role-based
            access control for real products.
          </p>
          <p>
            My competitive-programming background (4× ACPC finalist, ECPC judge and problem setter)
            shaped how I approach engineering — I care about correctness, edge cases and writing code
            that's easy to reason about.
          </p>
        </div>

        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {profile.education.map((edu) => (
            <div className="about-card" key={edu.degree}>
              <div className="label">Education</div>
              <h3>{edu.degree}</h3>
              <div className="school">{edu.school}</div>
              <div className="period">{edu.period}</div>
              <div className="label">Relevant coursework</div>
              <p className="coursework">{edu.coursework}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
