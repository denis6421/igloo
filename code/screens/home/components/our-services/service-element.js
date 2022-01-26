import React from "react";
import Img from "../../../../shared/img";

const ServiceElement = ({ title, _body, image, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="home-services-list-element list-element">
      <aside />
      <Img src={generateUrl(image)} />
      <section className="home-services-list-element-text">
        <h4>0{title}</h4>
        {_body}
      </section>
    </li>
  );
};

export default ServiceElement;
