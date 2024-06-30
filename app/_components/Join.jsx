const Join = ({ items, onChange, name, value }) => {
  return (
    <div className="join">
      {items.map((el, index) => (
        <input
          key={index}
          className="join-item btn"
          type="radio"
          name={name}
          value={el}
          checked={el === value}
          aria-label={el}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Join;
