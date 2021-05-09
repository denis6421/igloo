import React from "react";
import { filterProperties } from "../../../../../assets/js/consts";
import RangeInput from "./parts/range-input";

const Revenue = ({ title, min, max, value, minText, middleText, maxText }) => {
  return (
    <div className="revenue filter-section">
      <h5 className="filter-section-title">{title}</h5>
      <RangeInput
        className="filter-price-range-input"
        min={min}
        max={max}
        value={value}
        dataType={filterProperties.revenue}
        minText={minText}
        middleText={middleText}
        maxText={maxText}
        inputCustomClassName="range-revenue"
      />
    </div>
  );
};

export default Revenue;
