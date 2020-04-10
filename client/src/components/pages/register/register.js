import React from "react";
import { connect } from "react-redux";
import Input from "../../layouts/TextInput/TextInput";
import { inputChange } from "../../../redux/actions/register";
import "./Register.scss";
const Register = (props) => {
  const { loading, registerForm } = props;
  const handleInputChange = ({ id, value, validation }) => {
    const { inputChange } = props;
    inputChange({ id, value, validation });
  };
  return (
    <>
      <div className='register-title'>
        <h2> BE ADMIN</h2>
      </div>

      <form className='register-form' onSubmit={(e) => e.preventDefault()}>
        <Input
          isValid={registerForm.firstName?.isValid ?? true}
          className='form-control'
          id='firstName'
          name='FIRST NAME'
          type='text'
          required
          disabled={loading}
          defaultValue={registerForm.firstName?.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 2,
            maxLength: 256,
          }}
        />
        <Input
          isValid={registerForm.lastName?.isValid ?? true}
          className='form-control'
          id='lastName'
          name='LAST NAME'
          type='text'
          required
          disabled={loading}
          defaultValue={registerForm.lastName?.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 2,
            maxLength: 256,
          }}
        />

        <Input
          isValid={registerForm.phone?.isValid ?? true}
          className='form-control'
          id='phone'
          name='PHONE'
          type='text'
          required
          disabled={loading}
          defaultValue={registerForm.phone?.value}
          inputChange={handleInputChange}
          validation={{
            isRequired: true,
            minLength: 6,
            maxLength: 256,
          }}
        />
        <Input
          isValid={registerForm.email?.isValid ?? true}
          className='form-control'
          id='email'
          name='EMAIL'
          type='email'
          required
          disabled={loading}
          defaultValue={registerForm.email?.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, isEmail: true }}
        />

        <Input
          isValid={registerForm.password?.isValid ?? true}
          className='form-control'
          id='password'
          name='PASSWORD'
          type='password'
          required
          disabled={loading}
          defaultValue={registerForm.password?.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, minLength: 6 }}
        />
        <Input
          isValid={registerForm.password?.isValid ?? true}
          className='form-control'
          id='passwordConfirm'
          name='RE PASSWORD'
          type='password'
          required
          disabled={loading}
          defaultValue={registerForm.passwordConfirm?.value}
          inputChange={handleInputChange}
          validation={{ isRequired: true, minLength: 6 }}
        />
        <div className='registerSubmit'>
          <button className='btn btn-primary'>BE ADMIN</button>
        </div>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    registerForm: state.register.registerForm,
    loading: state.ui.loading,
  };
};
export default connect(mapStateToProps, { inputChange })(Register);
