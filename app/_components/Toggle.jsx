import React from "react";

const Toggle = ({ text, defaultChecked = false, onChange, value }) => {
  return (
    <div className="form-control w-52">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          defaultChecked={defaultChecked}
          onChange={onChange}
          checked={value}
        />
      </label>
    </div>
  );
};

export default Toggle;
