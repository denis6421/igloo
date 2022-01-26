import React from "react";
import Img from "../../../shared/img";
import Popup from "./popup";
import Slider from "./slider";

const Facillity = (props) => {
  const {
    title,
    slides,
    image,
    area,
    url,
    location,
    property_class,
    _relativeURL,
    _ID,
    btn_text,
    commissioning,
    price_from,
    price_to,
    revenue,
    investment,
    location_text,
  } = props;
  const isOutherLink = (url) => {
    if (!url) {
      return false;
    }
    return url.startsWith("http") || url.startsWith("https");
  };

  const generateUrl = (url) => {
    if (isOutherLink(url)) {
      return url;
    }
    return `${_relativeURL(url, _ID)}`;
  };

  return (
    <li
      style={{ display: "none" }}
      className="facillity list-element"
      commissioning={commissioning}
      price_from={price_from}
      price_to={price_to}
      revenue={revenue}
      location={location}
      property_class={property_class}
      investment={investment}
    >
      <Img src={generateUrl(image)} />
      <div className="facillity-info">
        <h4>{title}</h4>
        <h5>{location_text}</h5>
      </div>
      <button className="facillity-btn"> {btn_text}</button>
      <Popup {...props} generateUrl={generateUrl} />
    </li>
  );
};

export default Facillity;
