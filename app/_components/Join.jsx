const Join = ({ items, onChange, name, value, disabled = false }) => {
  return (
    <div className="join flex-col md:flex-row">
      {items.map((el, index) => (
        <input
          key={index}
          className="join-item btn rounded-none md:rounded-lg"
          type="radio"
          name={name}
          value={el}
          disabled={disabled}
          checked={el === value}
          aria-label={el}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Join;
