import React, { useEffect } from "react";

const Join = ({ items, setSelected, name, value }) => {
  useEffect(() => {
    if (value) {
      console.log(value);
      setSelected(value);
    } else {
      setSelected(items[0]);
    }
  }, []);

  return (
    <div className="join">
      {items.map((el, index) => (
        <input
          key={index}
          className="join-item btn"
          type="radio"
          name={name}
          value={value}
          defaultChecked={el == value}
          aria-label={el}
          onClick={() => setSelected(el)}
        />
      ))}
    </div>
  );
};

export default Join;
