import Loader from "@/components/Loader/Loader";
import Masonry from "@/components/Masonry/Masonry";
import Section from "@/components/Section";
import useStories from "@/hooks/useStories";
import { Sort } from "@/types/Sort";
import { sortStories } from "@/utils";
import React from "react";
import StoryCard from "../StoryCard";
import styles from "./StoriesHero.module.scss";

const StoriesHero = () => {
  const { items, loading, error } = useStories(Sort.TIMESTAMP);
  const sortedItems = sortStories(items ? items : []);
  return (
    <div className={styles.container}>
      <Section title="Recent Stories" />
      {loading && <Loader />}
      {!loading && (
        <Masonry>
          {sortedItems.slice(0, 3).map((item) => (
            <StoryCard key={item.id} story={item} />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default StoriesHero;
