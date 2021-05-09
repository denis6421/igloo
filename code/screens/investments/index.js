import React from "react";

const investments = ({ header, subscribe, filterBar, pagination }) => {
  return (
    <main className="investments page">
      {header}
      <div className="investments-content">
        {filterBar}
        <ul className="investments-list flex-start main-grid"></ul>
        {pagination}
      </div>
      {subscribe}
    </main>
  );
};

export default investments;
