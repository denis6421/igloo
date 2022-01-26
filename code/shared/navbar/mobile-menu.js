import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../img";
import Link from "./link";

function MobileMenu({ _relativeURL, _ID, home, links }) {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="flex-start navbar-flex navbar-menu mobile-menu">
      <div className="mobile-menu-top flex-start">
        <a href={generateUrl(home)} className="navbar-logo">
          <Img
            src={generateUrl(images.shared.logo)}
            customClassName="navbar-logo-image"
          />
        </a>
        <button className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <div className="mobile-menu-content" style={{ display: "none" }}>
        <div className="mobile-menu-content-top flex-start">
          <a href={generateUrl(home)} className="navbar-logo-small">
            <Img
              src={generateUrl(images.shared.logo)}
              customClassName="navbar-logo-small-image"
            />
          </a>
          <button className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <ul className="flex-start navbar-links">
          {links.map((link) => {
            const { name, url } = link;
            return <Link name={name} url={generateUrl(url)} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
