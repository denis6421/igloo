import React from "react";
import { elementsType } from "../../../../../../assets/js/consts";

const TextInput = ({ dataType, placeholder }) => {
  return (
    <input
      element-type={elementsType.input}
      data-type={dataType}
      type="text"
      placeholder={placeholder}
      className="text-input"
    />
  );
};

export default TextInput;
