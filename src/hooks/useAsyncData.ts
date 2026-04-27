import { useEffect, useState } from 'react';

type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

type UseAsyncData<T> = {
  state: AsyncState<T>;
  reload: () => void;
};

/**
 * Generic loader hook with proper cancellation. Pass a stable
 * `loader` reference (wrap with useCallback when needed); the
 * effect re-runs whenever a value in `deps` changes or `reload()`
 * is called.
 */
export function useAsyncData<T>(
  loader: () => Promise<T>,
  deps: ReadonlyArray<unknown> = [],
): UseAsyncData<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const [reloadIndex, setReloadIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });
    loader()
      .then((data) => {
        if (!cancelled) setState({ status: 'success', data });
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({
            status: 'error',
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, reloadIndex]);

  return {
    state,
    reload: () => setReloadIndex((i) => i + 1),
  };
}
