import React from "react";
import Img from "./img";

const BackgroundTitleWithImage = ({
  title,
  _body,
  image,
  _relativeURL,
  _ID,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="title-bg-with-img flex-between" data-aos="fade-up">
      <div className="title-bg">
        <section className="title-bg-filled">
          <h3>{title}</h3>
        </section>
        <section>{_body}</section>
      </div>
      <Img src={generateUrl(image)} extraContent={_body} />
    </div>
  );
};

export default BackgroundTitleWithImage;
