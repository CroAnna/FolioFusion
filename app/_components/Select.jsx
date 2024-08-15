import React from "react";

const Select = ({
  value = null,
  label,
  options,
  name,
  onChange,
  disabled = false,
  placeholder,
  valueAttribute = "value",
  labelAttribute = "label",
}) => {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label pb-0 pt-0">
          <span className="label-text  text-base">{label} </span>
        </div>
      )}
      <select
        disabled={disabled}
        className="select select-bordered w-full"
        name={name}
        onChange={onChange}
        value={value}
      >
        <option disabled selected>
          {placeholder || "Select"}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option[valueAttribute]}
            disabled={disabled}
          >
            {option[labelAttribute]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
