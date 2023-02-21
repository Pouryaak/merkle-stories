import React from "react";
import img1 from "@/assets/images/img1.jpeg";
import IconItem from "./IconItem";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import {
  BsFillCalendar2WeekFill,
  BsFillShareFill,
  BsPersonFill,
} from "react-icons/bs";

const StoryCard = () => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img1}')`,
      }}
    >
      <div className="flex">
        <Chip content="Score: 5" />
        <IconItem Icon={BsFillShareFill} content="" />
      </div>

      <div className="card__content">
        <h4>
          Show HN: Turn Your Pandas Dataframe into a Tableau-Style UI for Visual
          Analysis
        </h4>
        <IconItem Icon={BsFillCalendar2WeekFill} content="23/4/2023" />
        <div className="flex action">
          <IconItem Icon={BsPersonFill} content="Pourya (karma: 56)" />
          <Button title="Read More" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
