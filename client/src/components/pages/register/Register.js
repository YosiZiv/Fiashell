import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik"; // Change to formik
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import * as yup from "yup"; // yup object for validation on form fields
import Input from "../../layouts/TextInput/TextInput"; // Field Component to use
import Message from "../../layouts/Message";
import { userRegister, clearRegister } from "../../../redux/actions/register";
import { clearUi } from "../../../redux/actions/ui";
import "./Register.scss";
const Register = ({
  userRegister,
  loading,
  close,
  finishRegister,
  message,
  clearRegister,
  clearUi,
}) => {
  useEffect(
    () => () => {
      clearUi();
      clearRegister();
    },
    [clearUi, clearRegister]
  );
  //Validation object register form
  const validationSchema = yup.object({
    firstName: yup.string().required().min(2).max(256),
    lastName: yup.string().required().min(2).max(256),
    phone: yup.string().required().min(6).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(256),
  });
  console.log(finishRegister);

  finishRegister && close();
  return (
    <div className='register-container'>
      <div className='login-close'>
        <CloseIcon
          onClick={close}
          style={{ fontSize: 30, cursor: "pointer" }}
        />
      </div>

      <div className='register-title'>
        <h2>Register</h2>
      </div>
      <div className='register-form'>
        <Formik
          // init value to form
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data) => userRegister(data)}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <Field
                error={touched.firstName && errors.firstName}
                title='First Name'
                name='firstName'
                type='input'
                as={Input}
              />
              <Field
                error={touched.lastName && errors.lastName}
                title='Last Name'
                name='lastName'
                type='input'
                as={Input}
              />
              <Field
                error={touched.email && errors.email}
                title='Email'
                name='email'
                type='email'
                as={Input}
              />
              <Field
                error={touched.phone && errors.phone}
                title='Phone'
                name='phone'
                type='input'
                as={Input}
              />
              <Field
                error={touched.password && errors.password}
                title='Password'
                name='password'
                type='password'
                as={Input}
              />
              <Field
                error={
                  touched.passwordConfirm &&
                  values.passwordConfirm !== values.password
                }
                title='Password Confirm'
                name='passwordConfirm'
                type='password'
                as={Input}
              />
              <div className='register-submit'>
                <Button
                  disabled={loading}
                  id='login'
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Register
                </Button>
              </div>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          )}
          {message && <Message text={message} color='red' />}
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  register: { finishRegister },
  ui: { message, loading, redirect },
}) => {
  return {
    message,
    loading,
    redirect,
    finishRegister,
  };
};
export default connect(mapStateToProps, {
  userRegister,
  clearRegister,
  clearUi,
})(Register);
