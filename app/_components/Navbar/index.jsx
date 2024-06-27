import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl">
        daisyUII
      </Link>
    </div>
  );
};

export default Navbar;
