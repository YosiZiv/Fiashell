import React, { useState } from "react";
import SlideIn from "../../layouts/SlideIn/SlideIn";
import Register from "../register/Register";
import Login from "../login/Login";
import Button from "@material-ui/core/Button";
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
        <p>My Pivate Product User</p>
      </div>
      <div className='main-body'>
        <Button
          id='register'
          onClick={slideInOpen}
          type='button'
          variant='contained'
          color='primary'
        >
          Register
        </Button>
        <Button
          id='login'
          type='button'
          onClick={slideInOpen}
          variant='contained'
          color='secondary'
        >
          Login
        </Button>
      </div>
      <SlideIn open={slideToggle}>
        {(slideToggle === "register" && <Register />) ||
          (slideToggle === "login" && <Login />)}
      </SlideIn>
    </div>
  );
};
export default Main;
