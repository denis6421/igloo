import React from "react";

const investments = ({
  header,
  subscribe,
  filterBar,
  pagination,
  facilities,
  breadCrumbs,
}) => {
  return (
    <main className="investments page page-grid">
      {breadCrumbs}
      {header}
      <div className="investments-content">
        {filterBar}
        {facilities}
        {pagination}
      </div>
      {subscribe}
    </main>
  );
};

export default investments;
