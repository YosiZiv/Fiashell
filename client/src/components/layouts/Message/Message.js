import React from "react";
import "./Message.scss";
const Message = ({ color, text }) => (
  <div className='message-container'>
    <label style={{ color }}>{text}</label>
  </div>
);
export default Message;
