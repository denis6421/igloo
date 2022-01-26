import React from "react";

const OurServices = ({ flex_list, bread_crumbs, subscribe, header }) => {
  return (
    <main className="services page page-grid">
      {bread_crumbs}
      {header}
      {flex_list}
      {subscribe}
    </main>
  );
};

export default OurServices;
