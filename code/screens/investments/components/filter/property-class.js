import React from "react";
import {
  filterProperties,
  filterPropertyValues,
} from "../../../../../assets/js/consts";
import CheckBox from "./parts/check-box";

const CheckBoxSection = ({ text1, text2, text3, title, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="check-box-section filter-section">
      <h5 className="filter-section-title">{title}</h5>
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.property_class}
        text={text1}
        dataValue={filterPropertyValues.property_class.option_1}
      />
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.property_class}
        text={text2}
        dataValue={filterPropertyValues.property_class.option_2}
      />
      <CheckBox
        generateUrl={generateUrl}
        dataType={filterProperties.property_class}
        text={text3}
        dataValue={filterPropertyValues.property_class.option_3}
      />
    </div>
  );
};

export default CheckBoxSection;
