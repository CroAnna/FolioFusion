import React, { useEffect } from "react";

const Join = ({ items, setSelected, name }) => {
  useEffect(() => {
    setSelected(items[0]);
  }, []);

  return (
    <div className="join">
      {items.map((el, index) => (
        <input
          key={index}
          className="join-item btn"
          type="radio"
          name={name}
          defaultChecked={el == items[0]}
          aria-label={el}
          onClick={() => setSelected(el)}
        />
      ))}
    </div>
  );
};

export default Join;
