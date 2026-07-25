import Section from './Section';
import Loader from './Loader';
import { api } from '../api';
import { useAsync } from '../hooks/useAsync';
import type { Project } from '../types';
import { GithubIcon, ExternalIcon } from './icons';

// A little visual variety: pick an emoji per project based on its tags.
function iconFor(p: Project): string {
  const t = (p.tags.join(' ') + ' ' + p.title).toLowerCase();
  if (t.includes('python') || t.includes('vgg') || t.includes('tensorflow')) return '🤖';
  if (t.includes('opengl') || t.includes('c++')) return '🎮';
  if (t.includes('react') && t.includes('movie')) return '🎬';
  if (t.includes('react')) return '⚛️';
  if (t.includes('library')) return '📚';
  if (t.includes('commerce') || t.includes('api')) return '🛒';
  return '🚀';
}

export default function Projects() {
  const { data, loading, error } = useAsync<Project[]>(api.projects);

  return (
    <Section
      id="projects"
      alt
      eyebrow="04 — Projects"
      title="Things I've built"
      subtitle="A selection of my favourite work, served live from the database."
    >
      {loading && <Loader label="Loading projects…" />}

      {error && <p className="load-error">Couldn't load projects. Is the API running?</p>}

      {data && (
        <div className="projects-grid">
          {data.map((p) => (
            <article className="project-card" data-reveal key={p._id}>
              {p.highlight && <span className="featured-badge">Featured</span>}
              <div className="project-top">
                <div className="project-icon">{iconFor(p)}</div>
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Source code">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <ExternalIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
