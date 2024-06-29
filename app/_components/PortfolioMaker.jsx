const PortfolioMaker = ({ children }) => {
  return (
    <div className="overflow-y-scroll" style={{ height: "calc(100vh - 88px)" }}>
      {children}
    </div>
  );
};

export default PortfolioMaker;
