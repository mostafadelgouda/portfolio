import { profile } from '../data/profile';
import Terminal from './Terminal';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div data-reveal>
            <span className="hero-status">
              <span className="dot" />
              Software Engineer @ Huawei
            </span>
            <h1>
              Hi, I'm <span className="accent-text">{profile.name}</span>
            </h1>
            <p className="hero-role">{profile.tagline}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="social-btn"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                className="social-btn"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a className="social-btn" href={profile.socials.email} aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <Terminal />
        </div>

        <div className="hero-stats" data-reveal>
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value accent-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
