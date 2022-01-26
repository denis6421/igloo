import React from "react";
import Img from "../../../shared/img";

const Flex1 = ({ title, _relativeURL, _ID, image, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="about-flex about-flex-1" data-aos="fade-up">
      <section className="about-flex-1-left">
        <h3 className="about-flex-title">{title}</h3>
        {_body}
      </section>
      <section className="about-flex-1-right">
        <Img src={generateUrl(image)} />
      </section>
    </div>
  );
};

export default Flex1;
