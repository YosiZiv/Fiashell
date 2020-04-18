import React from "react";
import "./TextInput.scss";
const textInput = ({ title, name, type, error, value, onChange, onBlur }) => {
  const inputClass = error ? "text-input invalid" : "text-input";
  console.log(error);

  return (
    <div className='text-input-container'>
      <p>
        <strong>
          {title} {required && <span className='text-input-header'>*</span>}
        </strong>
      </p>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={`Enter ${title}`}
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
