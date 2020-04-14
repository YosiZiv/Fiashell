import React, { useState } from "react";
import SlideIn from "../../layouts/SlideIn/SlideIn";
import Register from "../register/register";
import { NavLink } from "react-router-dom";
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
          Register
        </button>
        <button type='button'>
          <NavLink activeClassName='NavSelect' to='/login' className='navLink'>
            Login
          </NavLink>
        </button>
      </div>
      <SlideIn open={slideToggle}>
        <Register />
      </SlideIn>
    </div>
  );
};
export default Main;
