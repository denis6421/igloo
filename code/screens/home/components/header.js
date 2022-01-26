import React from "react";
import Img from "../../../shared/img";

const Header = ({ image, _relativeURL, _ID, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <header className="home-header">
      <Img src={generateUrl(image)} />
      {_body}
    </header>
  );
};

export default Header;
