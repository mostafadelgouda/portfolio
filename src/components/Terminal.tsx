import { useEffect, useMemo, useState } from 'react';

// An animated terminal that "types" a quick introduction.
const LINES = [
  { cmd: 'whoami', out: 'Mostafa Adel — Software Engineer' },
  { cmd: 'mission', out: 'Turning complex problems into reliable, scalable software' },
  { cmd: 'now', out: 'Engineering enterprise systems @ Huawei' },
  { cmd: 'battle-scars', out: '4× ACPC finalist · ECPC judge · 3 yrs mentoring engineers' },
];

const TYPE_MS = 55; // per character
const OUT_DELAY = 350; // pause before a command's output appears
const LINE_DELAY = 650; // pause before the next prompt starts

export default function Terminal() {
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const [pos, setPos] = useState(
    reduced ? { line: LINES.length, chars: 0, outShown: false } : { line: 0, chars: 0, outShown: false }
  );

  useEffect(() => {
    if (pos.line >= LINES.length) return;
    const current = LINES[pos.line];
    let t: number;
    if (pos.chars < current.cmd.length) {
      t = window.setTimeout(() => setPos((p) => ({ ...p, chars: p.chars + 1 })), TYPE_MS);
    } else if (!pos.outShown) {
      t = window.setTimeout(() => setPos((p) => ({ ...p, outShown: true })), OUT_DELAY);
    } else {
      t = window.setTimeout(
        () => setPos((p) => ({ line: p.line + 1, chars: 0, outShown: false })),
        LINE_DELAY
      );
    }
    return () => clearTimeout(t);
  }, [pos]);

  const finished = pos.line >= LINES.length;

  return (
    <div className="hero-card terminal" data-reveal aria-label="Animated introduction terminal">
      <div className="hero-card-bar">
        <span />
        <span />
        <span />
        <em className="term-title">mostafa@engineer: ~</em>
      </div>
      <div className="term-body">
        {LINES.map((l, i) => {
          if (i > pos.line) return null;
          const isCurrent = i === pos.line;
          const cmdText = isCurrent ? l.cmd.slice(0, pos.chars) : l.cmd;
          const showOut = !isCurrent || pos.outShown;
          return (
            <div className="term-line" key={l.cmd}>
              <div>
                <span className="term-prompt">~$</span> <span className="term-cmd">{cmdText}</span>
                {isCurrent && !pos.outShown && <span className="caret" />}
              </div>
              {showOut && <div className="term-out">{l.out}</div>}
            </div>
          );
        })}
        {finished && (
          <div className="term-line">
            <span className="term-prompt">~$</span> <span className="caret" />
          </div>
        )}
      </div>
    </div>
  );
}
