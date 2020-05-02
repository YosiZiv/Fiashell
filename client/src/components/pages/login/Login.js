import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import Input from "../../layouts/TextInput/TextInput";
import Button from "@material-ui/core/Button";
import Message from "../../layouts/Message/Message";
import {
  loginInputChange,
  userLogin,
  clearLogin,
} from "../../../redux/actions/login";
import { clearUi } from "../../../redux/actions/ui";
import CloseIcon from "@material-ui/icons/Close";
import "./Login.scss";
const Login = ({
  close,
  userLogin,
  finishLogin,
  messages,
  clearUi,
  clearLogin,
}) => {
  useEffect(
    () => () => {
      clearUi();
      clearLogin();
    },
    [clearUi, clearLogin]
  );
  finishLogin && close();
  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(256),
  });
  const mapMessages = Object.entries(messages).map((message) => (
    <Message
      key={message[0]}
      color='red'
      text={`${message[0]} ${message[1]}`}
    />
  ));
  return (
    <div className='login-container'>
      <div className='login-close'>
        <CloseIcon
          onClick={close}
          style={{ fontSize: 30, cursor: "pointer" }}
        />
      </div>

      <div className='login-header'>
        <h2>Login</h2>
      </div>
      <div className='login-form'>
        <Formik
          // init value to form
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data) => userLogin(data)}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div className='login-close'></div>

              <Field
                error={touched.email && errors.email}
                title='Email'
                name='email'
                type='email'
                as={Input}
              />
              <Field
                error={touched.email && errors.email}
                title='Password'
                name='password'
                type='password'
                as={Input}
              />

              <div className='login-submit'>
                <Button
                  id='login'
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Login
                </Button>
              </div>
              {mapMessages}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  login: { loginForm, finishLogin },
  ui: { messages, loading },
}) => {
  return {
    loginForm,
    messages,
    loading,
    finishLogin,
  };
};

export default connect(mapStateToProps, {
  loginInputChange,
  userLogin,
  clearLogin,
  clearUi,
})(Login);
