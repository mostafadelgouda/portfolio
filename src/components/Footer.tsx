import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & MongoDB.</p>
        <div className="footer-socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.socials.email} aria-label="Email">
            <MailIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
