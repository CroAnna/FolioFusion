import React from "react";

const Select = ({
  label,
  options,
  name,
  onChange,
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
        className="select select-bordered w-full"
        name={name}
        onChange={onChange}
      >
        <option disabled selected>
          {placeholder || "Select"}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option[valueAttribute]}>
            {option[labelAttribute]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
