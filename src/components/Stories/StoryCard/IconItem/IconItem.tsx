import React from "react";
import classes from "./IconItem.module.scss";

const IconItem = () => {
  return (
    <div className={classes["icon-item"]}>
      <div className={classes.item}>Icon</div>
      <div className={classes.item}>data</div>
    </div>
  );
};

export default IconItem;
