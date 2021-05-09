import React from "react";
import Img from "../../../shared/img";

const Flex2 = ({ title, _relativeURL, _ID, image, _body, btnText }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="about-flex about-flex-2">
      <div className="about-flex-2-content">
        <Img src={generateUrl(image)} />
        <section className="about-flex-2-content-text">
          <h3 className="about-flex-title">{title}</h3>
          {_body}
          <button className="about-flex-2-btn">{btnText}</button>
        </section>
      </div>
    </div>
  );
};

export default Flex2;
