import { Sort } from "@/types/Sort";
import React, { useState } from "react";
import styles from "./Sorting.module.scss";

interface SortingButtonsProps {
  sorts: { value: Sort; label: string }[];
  activeSorting: Sort;
  setActiveSorting: React.Dispatch<React.SetStateAction<Sort>>;
}

const SortingButtons: React.FC<SortingButtonsProps> = ({
  sorts,
  activeSorting,
  setActiveSorting,
}) => {
  return (
    <>
      <div className={styles.buttons}>
        {sorts.map((sort, i) => (
          <div
            className={`${styles["tab-button"]} ${
              sort.value === activeSorting ? styles.active : ""
            }`}
            key={`${sort}-${i}`}
            onClick={() => setActiveSorting(sort.value)}
          >
            {sort.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default SortingButtons;
