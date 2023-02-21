import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
  return (
    <div className={styles.section}>
      <div>{title}</div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Section;
