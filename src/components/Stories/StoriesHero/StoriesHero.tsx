import Masonry from "@/components/Masonry/Masonry";
import React from "react";
import StoryCard from "../StoryCard";

const StoriesHero = () => {
  return (
    <>
      <Masonry>
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </Masonry>
    </>
  );
};

export default StoriesHero;
