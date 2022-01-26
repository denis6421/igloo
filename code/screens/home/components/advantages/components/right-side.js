import React from "react";
import Img from "../../../../../shared/img";

const RightSide = ({ image, _body, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="home-advantages-right-side">
      <div className="home-advantages-right-side-text"> {_body}</div>
      <Img src={generateUrl(image)} />
    </div>
  );
};

export default RightSide;
