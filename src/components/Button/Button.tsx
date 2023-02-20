import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles["button-text"]}>{title}</span>
      <div className={styles["fill-container"]}></div>
    </button>
  );
};

export default Button;
