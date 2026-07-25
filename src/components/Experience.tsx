import Section from './Section';
import Loader from './Loader';
import { api } from '../api';
import { useAsync } from '../hooks/useAsync';
import type { Experience as Exp } from '../types';

export default function Experience() {
  const { data, loading, error } = useAsync<Exp[]>(api.experience);

  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've worked"
      subtitle="Loaded live from the database."
    >
      {loading && <Loader label="Loading experience…" />}

      {error && <p className="load-error">Couldn't load experience. Is the API running?</p>}

      {data && (
        <div className="timeline">
          {data.map((job) => (
            <div className="tl-item" data-reveal key={job._id}>
              <div className="tl-period">
                {job.start} — {job.end || 'Present'}
              </div>
              <div className="tl-role">{job.role}</div>
              <div className="tl-company">
                {job.company}
                {job.location && <span className="loc"> · {job.location}</span>}
              </div>
              <ul className="tl-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
