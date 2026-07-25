import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  alt?: boolean;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, subtitle, alt, children }: Props) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className="section-head" data-reveal>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
