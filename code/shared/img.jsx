import React from "react";

const Img = ({ src, customClassName }) => {
  const className = customClassName ? `${customClassName} img` : "img";
  return (
    <figure className={className}>
      <img src={src} />
    </figure>
  );
};

export default Img;
