import React from "react";
import img1 from "@/assets/images/img1.jpeg";
import IconItem from "./IconItem";
import Button from "@/components/Button";
import Chip from "@/components/Chip";

const StoryCard = () => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img1}')`,
      }}
    >
      <div className="flex">
        <Chip content="Scores: 5" />
        <IconItem />
      </div>

      <div className="card__content">
        <h4>
          Show HN: Turn Your Pandas Dataframe into a Tableau-Style UI for Visual
          Analysis
        </h4>
        <IconItem />
        <div className="flex">
          <IconItem />
          <Button title="Read More" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
