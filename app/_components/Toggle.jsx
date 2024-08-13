import React from "react";

const Toggle = ({ text, onChange, checked, yesNo = false }) => {
  return (
    <div className={`form-control w-60 ${yesNo && "w-[440px]"}`}>
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <div className={`flex gap-2 ${yesNo && "ml-4"}`}>
          {yesNo && <p>NO</p>}
          <input
            type="checkbox"
            className="toggle toggle-primary"
            onChange={onChange}
            checked={checked}
          />
          {yesNo && <p>YES</p>}
        </div>
      </label>
    </div>
  );
};

export default Toggle;
