import React from "react";
import { images } from "../../../../assets/js/images";
import Img from "../../../shared/img";
import Slider from "./slider";

const Popup = ({
  title,
  _body,
  slides,
  generateUrl,
  popup_growth_text,
  popup_btn_text,
  popup_price_text,
  popup_date_text,
  popup_class_text,
  popup_class_type_text,
  price_from,
  price_to,
  revenue,
  date,
}) => {
  return (
    <div className="facillity-popup">
      <section className="facillity-popup-overlay"></section>
      <div className="facillity-popup-content flex-between">
        <div className="facillity-popup-left facillity-popup-slider">
          <Slider slides={slides} generateUrl={generateUrl} />
        </div>
        <div className="facillity-popup-right flex-column">
          <button className="facillity-popup-close">X</button>
          <div className="facillity-popup-right-first">
            <h2 className="facillity-popup-right-title"> {title}</h2>
            {_body}
          </div>
          <div className="facillity-popup-right-second">
            <ul className="facillity-popup-right-list">
              <li className="flex-between">
                <h4>{popup_date_text}</h4>
                <h5 className="facillity-popup-date">{date}</h5>
              </li>
              <li className="flex-between">
                <h4>{popup_class_text}</h4>
                <h5 className="facillity-popup-class">
                  {popup_class_type_text}
                </h5>
              </li>
              <li className="flex-between">
                <h4>{popup_price_text}</h4>
                <h5 className="facillity-popup-price">{`${price_from}-${price_to} $/М²`}</h5>
              </li>
              <li className="flex-between">
                <h4>{popup_growth_text}</h4>
                <h5 className="facillity-popup-percent">{`${revenue}%`}</h5>
              </li>
            </ul>
            <button className="facillity-btn">{popup_btn_text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
