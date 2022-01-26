import React from "react";

const Img = ({ src, customClassName, extraContent }) => {
  const className = customClassName ? `${customClassName} img` : "img";
  return (
    <figure className={className}>
      <img src={src} />
      {extraContent && extraContent}
    </figure>
  );
};

export default Img;
