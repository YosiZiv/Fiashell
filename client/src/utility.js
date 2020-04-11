export const checkValidity = (id, value, validation) => {
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const intPattern = /^\d+$/;
  const errors = {};
  if (!validation) {
    return errors;
  }
  if (validation.isRequired && value.trim() === "") {
    errors[id] = `${id} field is require`;
  }
  if (validation.minLength && value.length < validation.minLength) {
    errors[id] = `${id} require min ${validation.minLength}`;
  }
  if (validation.maxLength && value.length > validation.maxLength) {
    errors[id] = `${id} require max length ${validation.maxLength}`;
  }
  if (validation.isEmail && !emailPattern.test(value)) {
    errors[id] = `${id} field is incorrect please enter valid ${id}`;
  }
  if (validation.isNumeric && intPattern.test(value)) {
    errors[id] = `${id} field is not a number`;
  }
  return errors;
};
