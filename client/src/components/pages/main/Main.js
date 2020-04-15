import React, { useState } from "react";
import SlideIn from "../../layouts/SlideIn/SlideIn";
import Register from "../register/register";
import Login from "../login/Login";
import "./Main.scss";

const Main = () => {
  const [slideToggle, setSlideToggle] = useState(null);
  const slideInOpen = (e) => {
    console.log(e.currentTarget.value);
    setSlideToggle(e.currentTarget.id);
  };
  console.log(slideToggle);

  return (
    <div className='main-container'>
      <div className='main-header'>
        <h2>MPPUM</h2>
        <p>My Pivate Product User BULBULnt </p>
        <button id='register' onClick={slideInOpen} type='button'>
          Register
        </button>
        <button id='login' type='button' onClick={slideInOpen}>
          Login
        </button>
      </div>
      <SlideIn open={slideToggle}>
        {(slideToggle === "register" && <Register />) ||
          (slideToggle === "login" && <Login />)}
      </SlideIn>
    </div>
  );
};
export default Main;
