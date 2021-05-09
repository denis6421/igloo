import React from "react";
import Img from "../img";
import Link from "./link";

const Navbar = ({ links, logo, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="navbar">
      <div className="flex-start navbar-flex main-grid">
        <Img src={generateUrl(logo)} customClassName="navbar-logo" />
        <ul className="flex-start navbar-links">
          {links.map((link) => {
            const { name, url } = link;
            return <Link name={name} url={generateUrl(url)} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
