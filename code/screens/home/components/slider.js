import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../../shared/img";

const Slider = ({ slides, _relativeURL, _ID, title }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="home-slider">
      <h3 className="home-slider-title">{title}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          {slides.map((slide) => {
            const { image, title, text } = slide;
            return (
              <div className="swiper-slide">
                <div className="swiper-slide-content">
                  <Img src={generateUrl(image)} />
                  <div className="swiper-slide-content-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <button className="link-btn show-contact-popup">
                      Узнать больше
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div class="swiper-button-prev">
          <Img src={generateUrl(images.shared.left)} />
        </div>
        <div class="swiper-button-next">
          <Img src={generateUrl(images.shared.right)} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
