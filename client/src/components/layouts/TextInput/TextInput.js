import React from "react";
import "./TextInput.scss";
const textInput = ({
  id,
  name,
  type,
  required,
  validation,
  error,
  disabled,
  value,
  handleInputChange,
}) => (
  <div className='text-input-container'>
    <h6>
      <strong>
        {name} {required && <span className='text-input-header'>*</span>}
      </strong>
    </h6>

    <input
      id={id}
      type={type}
      value={value}
      disabled={disabled}
      onChange={(e) => handleInputChange(e, id, validation)}
      placeholder={`Enter ${name}`}
      autoComplete='off'
      className={error && "invalid"}
    />
    <div className='text-input-error-message'>
      {error && <small className='text-danger'>{error}</small>}
    </div>
  </div>
);

export default textInput;
