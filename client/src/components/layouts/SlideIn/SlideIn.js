import React from "react";
import "./SlideIn.scss";
const slideIn = ({ open = false, close = false, children }) => {
  //TODO ADD CLOSE METHOD
  const openCheck = open ? " is-open" : " is-close";
  return <div className={"slider" + openCheck}>{children}</div>;
};

export default slideIn;
