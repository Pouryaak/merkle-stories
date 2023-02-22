import React from "react";
import IconItem from "./IconItem";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import styles from "./StoryCard.module.scss";

import {
  BsFillCalendar2WeekFill,
  BsFillShareFill,
  BsPersonFill,
} from "react-icons/bs";
import { StoryWithAuthor } from "@/types/Story";
import { convertTimestampToDataString } from "@/utils";
import ShareButton from "@/components/ShareButton";

interface StoryCardProps {
  story: StoryWithAuthor;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${story.image}')`,
      }}
    >
      <div className="flex">
        <Chip content={`Score: ${story.score}`} />
        {/* <IconItem Icon={BsFillShareFill} content="" /> */}
        <ShareButton title={story.title} url={story.url ? story.url : ""} />
      </div>

      <div className={styles["card__content"]}>
        <h4>{story.title}</h4>
        <IconItem
          Icon={BsFillCalendar2WeekFill}
          content={`${convertTimestampToDataString(story.time)}`}
        />
        <div className={`flex ${styles.action}`}>
          <IconItem
            Icon={BsPersonFill}
            content={`${story.by}`}
            secondLine={`(karma: ${story.author.karma})`}
          />
          <Button
            title="Read More"
            onClick={() => window.open(story.url, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
