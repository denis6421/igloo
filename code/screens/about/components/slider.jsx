import React from "react";
import Img from "../../../shared/img";

const Slider = ({ slides, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div class="swiper-container">
      <div class="swiper-wrapper">
        {slides.map((slide) => {
          const { image, title, text } = slide;
          return (
            <div className="swiper-slide">
              <section className="swiper-slide-bg"></section>
              <div className="swiper-slide-content">
                <Img
                  src={generateUrl(image)}
                  customClassName="swiper-slide-image"
                />
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
};

export default Slider;
