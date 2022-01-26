import React from "react";

const FAQ = ({ list, subscribe, top_section, bread_crumbs }) => {
  return (
    <div className="faq page-grid page">
      {bread_crumbs}
      {top_section}
      <main className="main-grid">{list}</main>
      {subscribe}
    </div>
  );
};

export default FAQ;
