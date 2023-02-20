import React from "react";
import styles from "./Chip.module.scss";
import { ChipProps } from "./Chip.type";



const Chip: React.FC<ChipProps> = ({content}) => {
  return <div className={styles.chip}>{content}</div>;
};

export default Chip;
