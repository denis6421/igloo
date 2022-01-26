import React from "react";
import Img from "../../../../shared/img";

const GridSectionElement = ({ image, _relativeURL, _ID, title, _body }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="home-grid-element">
      <Img src={generateUrl(image)} />
      <h5>{title}</h5>
      {_body}
    </section>
  );
};

export default GridSectionElement;
