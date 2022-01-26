import React from "react";

const StepsList = ({ title, btn, list }) => {
  return (
    <div className="home-steps">
      <h5 className="home-steps-title home-sub-title">{title}</h5>
      <ul className="home-steps-list main-grid">{list}</ul>
      {btn}
    </div>
  );
};

export default StepsList;
