import React from "react";
import { connect } from "react-redux";
import Input from "../../layouts/TextInput/TextInput";
import Button from "@material-ui/core/Button";
import { loginInputChange, userLogin } from "../../../redux/actions/login";
import "./Login.scss";
const Login = ({
  loginForm,
  loading,
  message,
  loginInputChange,
  userLogin,
}) => {
  const handleInputChange = (event, id, validation) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    loginInputChange({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    const loginData = {
      email: loginForm.email?.value ?? "",
      password: loginForm.password?.value ?? "",
    };
    console.log("login function work", loginData, userLogin);

    userLogin(loginData);
  };
  return (
    <div className='login-container'>
      <div className='login-header'>
        <h1>Login</h1>
      </div>
      <div className='register-form'>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            id='email'
            name='Email'
            type='email'
            required
            validation={{ isRequired: true, isEmail: true }}
            error={loginForm.email?.error ?? message.email}
            disabled={loading}
            value={loginForm.email?.value ?? ""}
            handleInputChange={handleInputChange}
          />
          <Input
            id='password'
            name='Password'
            type='password'
            required
            validation={{ isRequired: true, minLength: 6 }}
            error={loginForm.password?.error ?? message.password}
            disabled={loading}
            value={loginForm.password?.value ?? ""}
            handleInputChange={handleInputChange}
          />
          <div className='register-submit'>
            <Button
              id='login'
              type='button'
              onClick={handleFormSubmit}
              variant='contained'
              color='primary'
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  login: { loginForm },
  ui: { message, loading },
}) => {
  return {
    loginForm,
    message,
    loading,
  };
};

export default connect(mapStateToProps, { loginInputChange, userLogin })(Login);
