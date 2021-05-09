import React from "react";
import { elementsType } from "../../../../../../assets/js/consts";

const RangeInput = ({
  dataType,
  min,
  max,
  value,
  className,
  minText,
  middleText,
  maxText,
  inputCustomClassName,
}) => {
  const inputClassName = inputCustomClassName
    ? `${inputCustomClassName} range-input`
    : "range-input";
  return (
    <div className={className}>
      <input
        element-type={elementsType.range}
        data-type={dataType}
        type="range"
        min={min}
        max={max}
        value={value}
        className={inputClassName}
      />
      <section className="range-numbers flex-between">
        <p>{minText}</p>
        <p>{middleText}</p>
        <p>{maxText}</p>
      </section>
    </div>
  );
};

export default RangeInput;
