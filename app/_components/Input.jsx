import React from "react";

const Input = ({
  type = "text",
  label,
  value,
  icon,
  error,
  name,
  placeholder,
  disabled = false,
  onBlur,
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="label pb-0 pt-0">
          <span className="label-text text-base">{label}</span>
        </div>
      )}
      <div className="input-parent-wrapper input input-bordered flex items-center gap-2">
        {icon}
        <input
          className="grow w-full"
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
    </div>
  );
};

export default Input;
