import React from "react";
import classes from "./IconItem.module.scss";

interface IconItemProps {
  Icon: any;
  content: string;
}

const IconItem: React.FC<IconItemProps> = ({ content, Icon }) => {
  return (
    <div className={classes["icon-item"]}>
      <div className={classes.item}>
        <Icon />
      </div>
      <div className={`${classes.item} ${classes.content}`}>{content}</div>
    </div>
  );
};

export default IconItem;
