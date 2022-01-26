import React from "react";

const ServicesList = ({ title, btn, list }) => {
  return (
    <div className="home-services">
      <h5 className="home-services-title home-sub-title">{title}</h5>
      <ul className="home-services-list main-grid">{list}</ul>
      {btn}
    </div>
  );
};

export default ServicesList;
