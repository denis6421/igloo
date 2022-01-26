import React from "react";
import Img from "../../../../../shared/img";

const LeftSide = ({ image, _body, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="home-advantages-left-side">
      <Img src={generateUrl(image)} />
      <div className="home-advantages-left-side-text">{_body}</div>
    </div>
  );
};

export default LeftSide;
