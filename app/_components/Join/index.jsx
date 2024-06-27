import React from "react";

const Join = ({ items, setSelected }) => {
  return (
    <div className="join">
      {items.map((el, index) => (
        <input
          key={index}
          className="join-item btn"
          type="radio"
          name="options"
          aria-label={el}
          onClick={() => setSelected(el)}
        />
      ))}
    </div>
  );
};

export default Join;
