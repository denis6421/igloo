import React from "react";
import Img from "../../../shared/img";

const PageHeader = ({ image, title, _body }) => {
  return (
    <div className="investments-header">
      <Img src={image} customClassName="investments-header-bg absolute" />
      <div className="investments-header-content">
        <h1 className="investments-header-title">{title}</h1>
        {_body}
      </div>
    </div>
  );
};

export default PageHeader;
