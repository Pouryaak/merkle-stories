import React from "react";
import classes from "./IconItem.module.scss";

interface IconItemProps {
  Icon: any;
  content: string;
  secondLine?: string;
}

const IconItem: React.FC<IconItemProps> = ({ content, Icon, secondLine }) => {
  return (
    <div className={classes["icon-item"]}>
      <div className={classes.item}>
        <Icon />
      </div>
      <div className={`${classes.item} ${classes.content}`}>
        {content}
        {secondLine && (
          <span>
            <br />
            {secondLine}
          </span>
        )}
      </div>
    </div>
  );
};

export default IconItem;
