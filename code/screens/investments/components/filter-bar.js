import React from "react";

const FilterBar = ({
  location,
  toggleText,
  price,
  commissioning,
  investment,
  classLevel,
  revenue,
}) => {
  return (
    <div className="filter flex-start">
      {location}
      <div className="filter-menu">
        <section className="filter-menu-overlay"></section>
        <div className="filter-menu-content">
          <div className="filter-menu-content-flex main-grid">
            <div className="flex-start filter-menu-content-flex-toggles">
              <div className="filter-toggle filter-toggle-close">
                {toggleText}
              </div>
              <button className="clear-filters filter-toggle">Clear</button>
            </div>
            <div className="filter-menu-content-flex-sections">
              {price}
              {investment}
              {revenue}
              {commissioning}
              {classLevel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
