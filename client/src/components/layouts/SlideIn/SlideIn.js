import React from "react";
import "./SlideIn.scss";
const slideIn = (props) => {
  const { open, children } = props;
  const openCheck = open ? " is-open" : "";
  const style = "slider" + openCheck;
  return <div className={style}>{children}</div>;
};

export default slideIn;
