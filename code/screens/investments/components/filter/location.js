import React from "react";
import {
  elementsType,
  filterProperties,
  filterPropertyValues,
} from "../../../../../assets/js/consts";

const Location = ({ location1, location2, location3 }) => {
  return (
    <div className="filter-location">
      <section
        className="text-box"
        element-type={elementsType.box}
        data-type={filterProperties.location}
        data-value={filterPropertyValues.location.option_1}
      >
        {location1}
      </section>
      <section
        className="text-box"
        element-type={elementsType.box}
        data-type={filterProperties.location}
        data-value={filterPropertyValues.location.option_2}
      >
        {location2}
      </section>
      <section
        className="text-box"
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
