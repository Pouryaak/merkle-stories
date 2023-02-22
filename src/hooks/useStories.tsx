import { useEffect, useReducer, useRef, useState } from "react";
import { StoryFetchTypes } from "@/types/Story";

interface State<T> {
  items?: T | null;
  loading: boolean;
  error?: Error;
}

type Cache<T> = { [type: string]: T };

const useStories = <T extends unknown>(
  type: StoryFetchTypes,
  fetcher: () => Promise<T>
): State<T> => {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const [items, setItems] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!type) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      setLoading(true);

      if (cache.current[type]) {
        setItems(cache.current[type]);
        setLoading(false);

        return;
      }

      try {
        const data = await fetcher();

        cache.current[type] = data;
        if (cancelRequest.current) return;
        setItems(data);
      } catch (error) {
        if (cancelRequest.current) return;

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return { items, loading, error };
};

export default useStories;
