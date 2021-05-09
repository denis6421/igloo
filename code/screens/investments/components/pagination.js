import React from "react";
import Img from "../../../shared/img";

const pagination = ({ backBtn, nextBtn, _relativeURL, _ID }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="pagination">
      <button className="pagination-back pagination-toggle">
        <Img src={generateUrl(backBtn)} />
      </button>
      <div className="flex-start pagination-buttons"></div>
      <button className="pagination-next pagination-toggle">
        <Img src={generateUrl(nextBtn)} />
      </button>
    </div>
  );
};

export default pagination;
