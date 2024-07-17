import { useState, useEffect, useCallback } from "react";

type AsyncFunction<T> = () => Promise<T>;

interface UseAsyncState<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

function useAsync<T>(
  asyncFunction: AsyncFunction<T>,
  dependencies: any[] = []
): UseAsyncState<T> {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: undefined,
    error: undefined,
    loading: true,
  });

  const execute = useCallback(async () => {
    setState({ data: undefined, error: undefined, loading: true });

    try {
      const response = await asyncFunction();
      setState({ data: response, error: undefined, loading: false });
    } catch (error) {
      setState({ data: undefined, error: error as Error, loading: false });
    }
  }, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}

export default useAsync;
