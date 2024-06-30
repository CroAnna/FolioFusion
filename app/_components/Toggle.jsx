import React from "react";

const Toggle = ({ text, onChange, checked }) => {
  return (
    <div className="form-control w-52">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          onChange={onChange}
          checked={checked}
        />
      </label>
    </div>
  );
};

export default Toggle;
