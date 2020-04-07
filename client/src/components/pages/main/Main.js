import React, { useState } from "react";
import "./Main.css";
import backgroundImage from "../../../assets/MainPageImage.jpg";
const Main = () => {
  return (
    <div
      className='MainPageBackground'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='MainPageContent'>
        <h2>MPPUM</h2>
        <p>My Pivate Product User Managment </p>
        <button className='btn btn-primary' type='button'>
          Become A Manager
        </button>
      </div>
    </div>
  );
};
export default Main;
