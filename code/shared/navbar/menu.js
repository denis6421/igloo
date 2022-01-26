import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../img";

function DesktopMenu({
  _relativeURL,
  _ID,
  home,
  link,
  link1,
  link2,
  link3,
  link4,
}) {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="flex-start navbar-flex navbar-menu desktop-menu">
      <div className="navbar-left">
        <div className="flex-start navbar-links">
          {link}
          {link1}
          {link2}
        </div>
      </div>
      <a href={generateUrl(home)} className="navbar-logo">
        <Img
          src={generateUrl(images.shared.logo)}
          customClassName="navbar-logo-image"
        />
      </a>
      <div className="navbar-right">
        <div className="flex-start navbar-links">
          {link3} {link4}
        </div>
        <div className="navbar-socials">
          <section>
            <img src={images.shared.calculator} />
          </section>
          <section>
            <img src={images.shared.bitcoin} />
          </section>
          <section>
            <img src={images.shared.watsapp} />
          </section>
          <section>
            <img src={images.shared.telegram} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default DesktopMenu;
