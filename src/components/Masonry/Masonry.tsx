import React, { ReactNode } from "react";
import EmptyStories from "../Stories/StoriesList/EmptyStories";
import styles from "./Masonry.module.scss";

interface Props {
  children: any;
}

const Masonry: React.FC<Props> = ({ children }: Props) => {
  if (!children.length) return <EmptyStories />;
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{children[0]}</div>
      <div className={styles.right}>
        <div className={styles.top}>{children[1]}</div>
        <div className={styles.bottom}>{children[2]}</div>
      </div>
    </div>
  );
};

export default Masonry;
