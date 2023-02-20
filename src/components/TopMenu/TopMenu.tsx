import React from "react";
import classes from "./TopMenu.module.scss";
import { ReactComponent as Logo } from "@/assets/logo.svg";

const TopMenu = () => {
  return (
    <div className={classes.topMenu}>
      <Logo className={classes.logo} />
    </div>
  );
};

export default TopMenu;
