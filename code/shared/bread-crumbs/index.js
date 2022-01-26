import React from "react";

const BreadCrumbs = ({ back, back_text, current, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="bread-crumbs flex-start main-grid">
      <a href={generateUrl(back)}>{back_text}</a>
      <small>/</small>
      <p>{current}</p>
    </div>
  );
};

export default BreadCrumbs;
