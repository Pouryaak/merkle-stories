import { Story } from "@/types/Story";
import React from "react";
import StoryCard from "../StoryCard";
import styles from "./StoriesList.module.scss";
import * as StoryService from "@/services/Story.service";
import useStories from "@/hooks/useStories";
import Loader from "@/components/Loader/Loader";
import { Sort } from "@/types/Sort";
import { sortByScore, sortByTimestamp } from "@/utils";

interface StoriesListProps {
  sorting: Sort;
}

const StoriesList: React.FC<StoriesListProps> = ({ sorting }) => {
  const { items, loading, error } = useStories<Story[]>("getAll", () =>
    StoryService.getFullStories()
  );

  if (error) return <div>Error</div>;
  if (loading) return <Loader />;

  let sortedItems = items;
  if (sorting === Sort.SCORE) {
    sortedItems = sortByScore(items!);
  }
  if (sorting === Sort.TIMESTAMP) {
    sortedItems = sortByTimestamp(items!);
  }

  return (
    <div className={styles.container}>
      {sortedItems &&
        sortedItems.map((item) => (
          <div key={item.id + Math.random()} className={styles.item}>
            <StoryCard story={item} />
          </div>
        ))}
    </div>
  );
};

export default StoriesList;
