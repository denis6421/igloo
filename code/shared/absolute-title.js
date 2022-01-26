import React from "react";
import Img from "./img";

const AbsoluteTitle = (props) => {
  const { _relativeURL, _ID, img_title, title, sub_title, _body } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="absolute-title list-element">
      <aside className="absolute-title-figure" />

      <div className="flex-start absolute-title-content">
        <Img src={generateUrl(img_title)} />
        <section className="absolute-title-content-text">
          <h4>{title}</h4>
          <section className="absolute-title-content-text-right">
            <div className="absolute-title-text-content-right-top">
              {sub_title}
            </div>
            {_body}
          </section>
        </section>
      </div>
    </div>
  );
};

export default AbsoluteTitle;
