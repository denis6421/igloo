import React from "react";
import {
  elementsType,
  filterProperties,
} from "../../../../../assets/js/consts";
import RangeInput from "./parts/range-input";
import TextInput from "./parts/text-input";

const Price = ({
  min,
  max,
  value,
  title,
  from,
  to,
  maxText,
  minText,
  middleText,
}) => {
  return (
    <div className="filter-price filter-section">
      <h5 className=" filter-section-title">{title}</h5>
      <div className="filter-price-inputs flex-start">
        <TextInput dataType={filterProperties.price_from} placeholder={from} />
        <TextInput dataType={filterProperties.price_to} placeholder={to} />
      </div>
      <div className="filter-price-range">
        <RangeInput
          className="filter-price-range-input"
          min={min}
          max={max}
          value={value}
          dataType={filterProperties.price_to}
          minText={minText}
          middleText={middleText}
          maxText={maxText}
          inputCustomClassName="range-price"
        />
      </div>
    </div>
  );
};

export default Price;
