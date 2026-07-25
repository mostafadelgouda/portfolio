import { useEffect, useState } from 'react';

interface State<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/** Runs an async loader once on mount and tracks loading/error/data state. */
export function useAsync<T>(loader: () => Promise<T>): State<T> {
  const [state, setState] = useState<State<T>>({ data: null, loading: true, error: null });

  useEffect(() => {
    let alive = true;
    loader()
      .then((data) => alive && setState({ data, loading: false, error: null }))
      .catch((err: unknown) =>
        alive &&
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to load',
        })
      );
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
