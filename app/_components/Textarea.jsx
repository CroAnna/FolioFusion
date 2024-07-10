import React from "react";

const Textarea = ({
  label = "",
  error,
  name,
  placeholder,
  disabled = false,
  onChange,
  rows,
  value = null,
}) => {
  return (
    <div className="w-full">
      <label className="form-control">
        <div className="label pb-0 pt-0">
          <span className="label-text text-base">{label}</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 text-base"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          value={value}
        ></textarea>
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Textarea;
