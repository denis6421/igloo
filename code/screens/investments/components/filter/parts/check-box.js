import React from "react";
import { elementsType } from "../../../../../../assets/js/consts";
import { images } from "../../../../../../assets/js/images";
import Img from "../../../../../shared/img";

const CheckBox = ({ text, dataType, dataValue, generateUrl }) => {
  return (
    <div className="check-box">
      <figure
        className="check-box-figure"
        data-type={dataType}
        data-value={dataValue}
        element-type={elementsType.checkbox}
      >
        <Img src={generateUrl(images.shared.check)} />
      </figure>
      <p>{text}</p>
    </div>
  );
};

export default CheckBox;
