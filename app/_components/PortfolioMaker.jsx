const PortfolioMaker = ({ children }) => {
  return (
    <div className="overflow-scroll" style={{ height: "calc(100vh - 88px)" }}>
      {children}
    </div>
  );
};

export default PortfolioMaker;
