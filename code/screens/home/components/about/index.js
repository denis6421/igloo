import React from "react";
import Img from "../../../../shared/img";

const About = ({ button, _relativeURL, _ID, image, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="home-about">
      <div className="home-about-flex">
        <Img src={generateUrl(image)} customClassName="home-about-image" />
        <section className="home-about-content">
          {_body}
          {button}
        </section>
      </div>
    </div>
  );
};

export default About;
