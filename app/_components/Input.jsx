import React from "react";

const Input = ({
  type = "text",
  label = "",
  value,
  error,
  name,
  placeholder,
  disabled = false,
  onBlur,
  onChange,
}) => {
  let inputClasses = `input input-bordered w-full max-w-xs `;
  let labelClasses = ``;

  return (
    <div className="input-parent-wrapper">
      <label htmlFor={label} className={labelClasses}>
        {label}
      </label>
      <input
        className={inputClasses}
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
