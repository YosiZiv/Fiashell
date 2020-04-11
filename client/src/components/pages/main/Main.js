import React, { useState } from "react";
import SlideIn from "../../layouts/SlideIn/SlideIn";
import Register from "../register/Register";
import "./Main.scss";
const Main = () => {
  const [slideToggle, setSlideToggle] = useState(false);
  const slideInToggle = () => {
    setSlideToggle(!slideToggle);
  };
  return (
    <div className='main-container'>
      <div className='main-header'>
        <h2>MPPUM</h2>
        <p>My Pivate Product User BULBULnt </p>
        <button onClick={slideInToggle} type='button'>
          Become A Manager
        </button>
      </div>
      <div className='main-register'>
        <SlideIn open={slideToggle}>
          <Register />
        </SlideIn>
      </div>
    </div>
  );
};
export default Main;
