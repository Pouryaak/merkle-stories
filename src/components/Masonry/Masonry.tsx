import React, { ReactNode } from "react";
import styles from "./Masonry.module.scss";

interface Props {
  children: [ReactNode, ReactNode, ReactNode];
}

const Masonry: React.FC<Props> = ({ children }: Props) => {
  const columns: ReactNode[][] = [[], [], []];

  children.forEach((child, index) => {
    columns[index % 3].push(child);
  });

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
