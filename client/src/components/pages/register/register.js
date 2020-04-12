import React from "react";
import { connect } from "react-redux";
import Input from "../../layouts/TextInput/TextInput";
import { inputChange, userRegister } from "../../../redux/actions/register";
import "./Register.scss";
const Register = ({ loading, registerForm, inputChange, userRegister }) => {
  const handleInputChange = (event, id, validation) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    inputChange({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    console.log("function 1 work", registerForm);

    const registerData = {
      firstName: registerForm.firstName?.value ?? "",
      lastName: registerForm.lastName?.value ?? "",
      phone: registerForm.phone?.value ?? "",
      email: registerForm.email?.value ?? "",
      password: registerForm.password?.value ?? "",
      passwordConfirm: registerForm.passwordConfirm?.value ?? "",
    };
    return userRegister(registerData);
  };
  return (
    <div className='register-container'>
      <div className='register-title'>
        <h2> BE ADMIN</h2>
      </div>
      <div className='register-form'>
        <div onSubmit={(e) => e.preventDefault()}>
          <Input
            id='firstName'
            name='First Name'
            type='text'
            required
            validation={{
              isRequired: true,
              minLength: 2,
              maxLength: 256,
            }}
            error={registerForm.firstName?.error}
            disabled={loading}
            value={registerForm.firstName?.value ?? ""}
            handleInputChange={handleInputChange}
          />

          <Input
            id='lastName'
            name='Last Name'
            type='text'
            required
            validation={{
              isRequired: true,
              minLength: 2,
              maxLength: 256,
            }}
            error={registerForm.lastName?.error}
            disabled={loading}
            value={registerForm.lastName?.value ?? ""}
            handleInputChange={handleInputChange}
          />
          <Input
            id='phone'
            name='Phone'
            type='text'
            required
            validation={{
              isRequired: true,
              minLength: 6,
              maxLength: 15,
            }}
            error={registerForm.phone?.error}
            disabled={loading}
            value={registerForm.phone?.value ?? ""}
            handleInputChange={handleInputChange}
          />

          <Input
            id='email'
            name='Email'
            type='email'
            required
            validation={{ isRequired: true, isEmail: true }}
            error={registerForm.email?.error}
            disabled={loading}
            value={registerForm.email?.value ?? ""}
            handleInputChange={handleInputChange}
          />

          <Input
            id='password'
            name='Password'
            type='password'
            required
            validation={{ isRequired: true, minLength: 6 }}
            error={registerForm.password?.error}
            disabled={loading}
            value={registerForm.password?.value ?? ""}
            handleInputChange={handleInputChange}
          />

          <Input
            id='passwordConfirm'
            name='Password Confirm'
            type='password'
            required
            validation={{ isRequired: true, minLength: 6 }}
            error={registerForm.passwordConfirm?.error}
            disabled={loading}
            value={registerForm.passwordConfirm?.value ?? ""}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className='registerSubmit'>
        <button className='btn btn-primary' onClick={handleFormSubmit}>
          BE ADMIN
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    registerForm: state.register.registerForm,

    loading: state.ui.loading,
  };
};
export default connect(mapStateToProps, { inputChange, userRegister })(
  Register
);
