import React from "react";
import Img from "../../../shared/img";

const Slider = ({ slides, generateUrl }) => {
  return (
    <React.Fragment>
      <div className="primary-slider" id="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide) => {
              return (
                <li class="splide__slide">
                  <Img src={generateUrl(slide)} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="secondary-slider" id="splide">
        <div className="splide__track">
          <ul className="splide__list flex-start">
            {slides.map((slide) => {
              return (
                <li class="splide__slide">
                  <Img src={generateUrl(slide)} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="primary-mobile-slider" id="splide">
        <div className="splide__track">
          <ul className="splide__list flex-start">
            {slides.map((slide) => {
              return (
                <li class="splide__slide">
                  <Img src={generateUrl(slide)} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="secondary-mobile-slider" id="splide">
        <div className="splide__track">
          <ul className="splide__list flex-start">
            {slides.map((slide) => {
              return (
                <li class="splide__slide">
                  <Img src={generateUrl(slide)} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
