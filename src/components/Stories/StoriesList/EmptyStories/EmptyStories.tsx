import React from "react";
import styles from "./EmptyStories.module.scss";
import { ReactComponent as EmptyIcon } from "@/assets/images/empty.svg";

const EmptyStories = () => {
  return (
    <div className={styles.container}>
      <div>
        <EmptyIcon width={250} height={250} />
        <h3>No stories for now! Check out later</h3>
      </div>
    </div>
  );
};

export default EmptyStories;
