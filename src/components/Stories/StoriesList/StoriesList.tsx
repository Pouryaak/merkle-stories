import { Story } from "@/types/Story";
import React from "react";
import StoryCard from "../StoryCard";
import styles from "./StoriesList.module.scss";

interface StoriesListProps {
  stories: Story[];
}

const StoriesList: React.FC<StoriesListProps> = ({ stories }) => {
  return (
    <div className={styles.container}>
      {stories.map((item) => (
        <div key={item.id + Math.random()} className={styles.item}>
          <StoryCard />
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
