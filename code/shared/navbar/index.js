import React from "react";

import DesktopMenu from "./menu";
import MobileMenu from "./mobile-menu";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <DesktopMenu {...props} />
    </div>
  );
};

export default Navbar;
