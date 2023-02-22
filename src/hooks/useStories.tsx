import { useEffect, useRef, useState } from "react";
import { StoryWithAuthor } from "@/types/Story";
import { getFullStoriesWithAuthors } from "@/services/Story.service";
import { Sort } from "@/types/Sort";

interface State {
  items?: StoryWithAuthor[];
  loading: boolean;
  error?: Error;
}

const useStories = (activeSorting: Sort): State => {
  const cache = useRef<StoryWithAuthor[] | null>(null);
  const cacheExpiry = useRef<number | null>(null);
  const cacheDuration = 60000;
  const cancelRequest = useRef<boolean>(false);
  const [items, setItems] = useState<StoryWithAuthor[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    cancelRequest.current = false;

    const fetchData = async () => {
      setLoading(true);

      if (
        cache.current &&
        cacheExpiry.current &&
        Date.now() - cacheExpiry.current < cacheDuration
      ) {
        setItems(cache.current);
        setLoading(false);
        return;
      }

      try {
        const data = await getFullStoriesWithAuthors();

        cache.current = data;
        cacheExpiry.current = Date.now();
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
    // eslint-disable-next-line
  }, [activeSorting]);

  return { items, loading, error };
};
export default useStories;
