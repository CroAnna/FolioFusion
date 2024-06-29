import React from "react";

const Select = ({ label, options, name, onChange, placeholder }) => {
  return (
    <label className="form-control w-full max-w-xs">
      {label && (
        <div className="label pb-0 pt-0">
          <span className="label-text  text-base">{label} </span>
        </div>
      )}
      <select
        className="select select-bordered w-full"
        name={name}
        onChange={onChange}
      >
        <option disabled selected>
          {placeholder || "Pick one"}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
