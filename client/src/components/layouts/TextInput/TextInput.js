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
}) => {
  const inputClass = error ? "text-input invalid" : "text-input";
  console.log(inputClass);

  return (
    <div className='text-input-container'>
      <p>
        <strong>
          {name} {required && <span className='text-input-header'>*</span>}
        </strong>
      </p>
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => handleInputChange(e, id, validation)}
        placeholder={`Enter ${name}`}
        autoComplete='off'
        className={inputClass}
      />
      <div className='text-input-error-message'>
        {error && <small className='text-danger'>{error}</small>}
      </div>
    </div>
  );
};

export default textInput;
