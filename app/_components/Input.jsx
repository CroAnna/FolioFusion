import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
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
    <div>
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
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
