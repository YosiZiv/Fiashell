import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik"; // Change to formik
import * as yup from "yup"; // yup object for validation on form fields
import Input from "../../layouts/TextInput/TextInput"; // Field Component to use
import { userRegister } from "../../../redux/actions/register";
import Button from "@material-ui/core/Button";
import "./Register.scss";
const Register = ({ userRegister, loading }) => {
  //Validation object register form
  const validationSchema = yup.object({
    firstName: yup.string().required().min(2).max(256),
    lastName: yup.string().required().min(2).max(256),
    phone: yup.string().required().min(6).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(256),
  });
  return (
    <div className='register-container'>
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
                type='input'
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
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = ({ ui: { message, loading } }) => {
  return {
    message,
    loading,
  };
};
export default connect(mapStateToProps, { userRegister })(Register);
