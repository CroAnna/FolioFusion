import React from "react";

const Toggle = ({ text, defaultChecked = false, onChange }) => {
  return (
    <div className="form-control w-52">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Toggle;
