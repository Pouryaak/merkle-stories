import Masonry from "@/components/Masonry/Masonry";
import Section from "@/components/Section";
import React from "react";
import StoryCard from "../StoryCard";
import styles from "./StoriesHero.module.scss";

const StoriesHero = () => {
  return (
    <div className={styles.container}>
      <Section title="Recent Stories" />
      <Masonry>
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </Masonry>
    </div>
  );
};

export default StoriesHero;
