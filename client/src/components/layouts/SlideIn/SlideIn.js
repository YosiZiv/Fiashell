import React from "react";
import "./SlideIn.scss";
const slideIn = ({ open = false, close = false, children }) => {
  const { open, children } = props;
  //TODO ADD CLOSE METHOD
  const openCheck = open ? " is-open" : "";
  return <div className={"slider" + openCheck}>{children}</div>;
};

export default slideIn;
