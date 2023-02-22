import { StoryWithAuthor } from "@/types/Story";
import React from "react";
import StoryCard from "../StoryCard";
import EmptyStories from "./EmptyStories";
import styles from "./StoriesList.module.scss";

interface StoriesListProps {
  stories: StoryWithAuthor[];
}

const StoriesList: React.FC<StoriesListProps> = ({ stories }) => {
  if (!stories.length) return <EmptyStories />;

  return (
    <div className={styles.container}>
      {stories.map((item) => (
        <div key={item.id + Math.random()} className={styles.item}>
          <StoryCard story={item} />
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
