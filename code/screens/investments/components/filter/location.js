import React from "react";
import {
  elementsType,
  filterProperties,
  filterPropertyValues,
} from "../../../../../assets/js/consts";

const Location = ({ location1, location2, location3, filter_toggle }) => {
  return (
    <div className="filter-location main-grid">
      <button className="filter-toggle filter-toggle-open filter-location-element">
        {filter_toggle}
      </button>
      <section
        className="text-box filter-location-element"
        element-type={elementsType.box}
        data-type={filterProperties.location}
        data-value={filterPropertyValues.location.option_1}
      >
        {location1}
      </section>
      <section
        className="text-box filter-location-element"
        element-type={elementsType.box}
        data-type={filterProperties.location}
        data-value={filterPropertyValues.location.option_2}
      >
        {location2}
      </section>
      <section
        className="text-box filter-location-element"
        element-type={elementsType.box}
        data-type={filterProperties.location}
        data-value={filterPropertyValues.location.option_3}
      >
        {location3}
      </section>
    </div>
  );
};

export default Location;
