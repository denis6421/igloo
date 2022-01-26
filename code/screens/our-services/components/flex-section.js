import React from "react";
import { images } from "../../../../assets/js/images";
import AbsoluteTitle from "../../../shared/absolute-title";
import Img from "../../../shared/img";
import BackgroundTitle from "../../../shared/title-bg";

const FlexSection = (props) => {
  const { _relativeURL, _ID, image, img_title, bg_title } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <div className="services-section">
      {img_title ? <AbsoluteTitle {...props} /> : bg_title}

      <Img src={generateUrl(image)} customClassName="services-section-image" />
    </div>
  );
};

export default FlexSection;
