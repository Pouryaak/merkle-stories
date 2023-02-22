import Loader from "@/components/Loader/Loader";
import Section from "@/components/Section";
import useStories from "@/hooks/useStories";
import { Sort } from "@/types/Sort";
import { sortStories } from "@/utils";
import React, { useState } from "react";
import SortingButtons from "../Sorting";
import StoriesList from "../StoriesList";

const SortableStories = () => {
  const [activeSorting, setActiveSorting] = useState<Sort>(Sort.SCORE);
  const { items, loading, error } = useStories(activeSorting);
  const sortedItems = sortStories(items ? items : [], activeSorting);

  if (error) return <div>Error</div>;
  return (
    <div>
      <Section title="Sorted Stories" />
      <SortingButtons
        sorts={[
          { label: "Score: Low to High", value: Sort.SCORE },
          { label: "Latest", value: Sort.TIMESTAMP },
        ]}
        activeSorting={activeSorting}
        setActiveSorting={setActiveSorting}
      />
      {loading && <Loader />}
      {sortedItems && !loading && <StoriesList stories={sortedItems} />}
    </div>
  );
};

export default SortableStories;
