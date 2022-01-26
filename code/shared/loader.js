import React from "react";

const Loader = ({ customClassName = "" }) => {
  const className = `lds-ellipsis loader ${customClassName}`;
  return (
    <div class={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
