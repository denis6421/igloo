import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../../shared/img";

const Slider = ({ slides, _relativeURL, _ID, title }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="team-slider" data-aos="fade-up">
      <h3 className="team-slider-title">{title}</h3>
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
                  <div className="swiper-slide-content-text">
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="swiper-button-prev">
        <Img src={generateUrl(images.shared.left)} />
      </div>
      <div class="swiper-button-next">
        <Img src={generateUrl(images.shared.right)} />
      </div>
    </div>
  );
};

export default Slider;
