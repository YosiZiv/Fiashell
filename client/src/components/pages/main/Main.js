import React, { useState } from "react";
import SlideIn from "../../layouts/SlideIn/SlideIn";
import "./Main.scss";
const Main = () => {
  return (
    <div className='main-container'>
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
