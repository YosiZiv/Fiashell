import React from "react";
import { connect } from "react-redux";
import Input from "../../layouts/TextInput/TextInput";
import { inputChange } from "../../../redux/actions/register";
import "./Register.scss";
const Register = (props) => {
  const { loading, registerForm } = props;
  console.log(loading);

  const {
    firstName = "",
    lastName = "",
    phone = "",
    email = "",
    password = "",
    passwordConfirm = "",
  } = registerForm;
  const handleInputChange = ({ id, value, validation }) => {
    const { inputChange } = props;
    inputChange({ id, value, validation });
  };
  return (
    <div className='registerAdminContainer'>
      <div className='adminTitle'>
        <h2> BE ADMIN</h2>
      </div>
      <form className='adminRegisterForm' onSubmit={(e) => e.preventDefault()}>
        <Input
          isValid={firstName ? firstName.isValid : true}
          className='form-control'
          id='firstName'
          name='FIRST NAME'
          type='text'
          required
          disabled={loading}
          defaultValue={firstName && firstName.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 2,
            maxLength: 256,
          }}
        />
        <Input
          isValid={lastName ? lastName.isValid : true}
          className='form-control'
          id='lastName'
          name='LAST NAME'
          type='text'
          required
          disabled={loading}
          defaultValue={lastName && lastName.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 2,
            maxLength: 256,
          }}
        />

        <Input
          isValid={phone ? phone.isValid : true}
          className='form-control'
          id='phone'
          name='PHONE'
          type='text'
          required
          disabled={loading}
          defaultValue={phone && phone.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 6,
            maxLength: 256,
          }}
        />
        <Input
          isValid={email ? email.isValid : true}
          className='form-control'
          id='email'
          name='EMAIL'
          type='email'
          required
          disabled={loading}
          defaultValue={email && email.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, isEmail: true }}
        />

        <Input
          isValid={password ? password.isValid : true}
          className='form-control'
          id='password'
          name='PASSWORD'
          type='password'
          required
          disabled={loading}
          defaultValue={password && password.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, minLength: 6 }}
        />
        <Input
          isValid={password ? password.isValid : true}
          className='form-control'
          id='passwordConfirm'
          name='RE PASSWORD'
          type='password'
          required
          disabled={loading}
          defaultValue={passwordConfirm && passwordConfirm.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, minLength: 6 }}
        />
        <div className='registerSubmit'>
          <button className='btn btn-primary'>BE ADMIN</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    registerForm: state.register.registerForm,
    loading: state.ui.loading,
  };
};
export default connect(mapStateToProps, { inputChange })(Register);
