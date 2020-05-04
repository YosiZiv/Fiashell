import React from "react";
import { connect } from "react-redux";
import "./Message.scss";
const Messages = ({ messages, color }) => {
  console.log("rendering messing component");
  const mapMessages = Object.entries(messages).map((message) => (
    <label
      key={message[0]}
      style={{ color }}
    >{`${message[0]} ${message[1]}`}</label>
  ));
  return <div className='message-container'>{mapMessages}</div>;
};
const mapStateToProps = ({ ui: { messages } }) => {
  return {
    messages,
  };
};
export default connect(mapStateToProps)(Messages);
