import React from "react";
import Img from "../../../shared/img";

const TopSection = ({ image, _relativeURL, _ID, title }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="faq-top-section flex-between">
      {title}
      <Img src={generateUrl(image)} />
    </div>
  );
};

export default TopSection;
