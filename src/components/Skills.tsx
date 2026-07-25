import Section from './Section';
import Loader from './Loader';
import { api } from '../api';
import { useAsync } from '../hooks/useAsync';
import type { Skill } from '../types';

export default function Skills() {
  const { data, loading, error } = useAsync<Skill[]>(api.skills);

  return (
    <Section
      id="skills"
      alt
      eyebrow="02 — Skills"
      title="Technologies I work with"
      subtitle="Loaded live from the database — the tools I reach for across the stack."
    >
      {loading && <Loader label="Loading skills…" />}

      {error && <p className="load-error">Couldn't load skills. Is the API running?</p>}

      {data && (
        <div className="skills-grid">
          {data.map((group) => (
            <div className="skill-card" data-reveal key={group._id}>
              <div className="skill-card-head">
                <div className="skill-icon">{group.icon || '⚡'}</div>
                <h3>{group.category}</h3>
              </div>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
