const Validator = require("validator");

exports.loginValidation = ({ email = "", password = "" }) => {
  const errors = {};
  //  Email validation
  if (Validator.isEmpty(email)) {
    errors.email = "Required!";
  }
  if (!Validator.isEmail(email)) {
    errors.email = "format incorrect";
  }
  //  password validation
  if (Validator.isEmpty(password)) {
    errors.password = "Required!";
  }
  if (!Validator.isLength(password, { min: 6, max: 256 })) {
    errors.password = "must be between 6 - 256";
  }
  return errors;
};

exports.validateCustomerInput = ({
  firstName = "",
  lastName = "",
  phone = "",
  address = "",
  email = "",
}) => {
  const errors = {};
  if (!Validator.isLength(firstName, { min: 2, max: 256 }))
    errors.firstName = "must be between 2 - 256 char ";

  if (Validator.isEmpty(firstName)) errors.firstName = "Required!";

  if (!Validator.isLength(lastName, { min: 2, max: 256 }))
    errors.lastName = "must be between 2 - 256 char ";

  if (Validator.isEmpty(lastName)) errors.lastName = "last name must be fill";

  if (!Validator.isLength(phone, { min: 6, max: 256 }))
    errors.phone = "phone must be between 6 - 256 char only";

  if (Validator.isEmpty(phone)) errors.phone = "Required";

  if (!Validator.isLength(address, { min: 2, max: 256 }))
    errors.address = "address must be between 2 - 256 char only";

  if (Validator.isEmpty(address)) errors.address = "Required";

  //  Email validation
  if (Validator.isEmpty(email)) errors.email = "email must be fill";

  if (!Validator.isEmail(email)) errors.email = "email format incorrect";
  return errors;
};
exports.createUserValidation = ({
  firstName = "",
  lastName = "",
  phone = "",
  email = "",
  password = "",
  passwordConfirm = "",
}) => {
  const errors = {};

  //  first name validations
  if (!Validator.isLength(firstName, { min: 2, max: 30 })) {
    errors.firstName = "must be between 2 - 30 char ";
  }
  if (Validator.isEmpty(firstName)) {
    errors.firstName = "Required!";
  }
  //  last_name validation
  if (!Validator.isLength(lastName, { min: 2, max: 30 })) {
    errors.lastName = "must be between 2 - 30 char ";
  }
  if (Validator.isEmpty(lastName)) {
    errors.lastName = "Required";
  }

  if (!Validator.isLength(phone, { min: 6, max: 30 })) {
    errors.phone = "must be between 6 - 30 char only";
  }
  if (Validator.isEmpty(phone)) {
    errors.phone = "Required";
  }
  if (Validator.isEmpty(email)) {
    errors.email = "Required";
  }
  if (!Validator.isEmail(email)) {
    errors.email = "format incorrect";
  }
  if (!Validator.isLength(password, { min: 6, max: 256 })) {
    errors.password = "must be between 6 - 256";
  }
  if (password !== passwordConfirm) {
    errors.passwordConfirm = "password didn't match";
  }
  return errors;
};
