import React from "react";

const BackgroundTitle = ({ title, _body }) => {
  return (
    <div className="title-bg">
      <section className="title-bg-filled">
        <h3>{title}</h3>
      </section>
      <section>{_body}</section>
    </div>
  );
};

export default BackgroundTitle;
