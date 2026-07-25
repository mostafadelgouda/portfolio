interface Props {
  label?: string;
}

/** Simple three-dot bounce loader shown while a section fetches its data. */
export default function Loader({ label = 'Loading…' }: Props) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="loader-label">{label}</span>
    </div>
  );
}
