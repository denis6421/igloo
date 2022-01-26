import React from "react";

const Success = ({ title, _body }) => {
  return (
    <div className="subscribe-success">
      <div className="subscribe-success-content">
        <h4>{title}</h4>
        {_body}
      </div>
    </div>
  );
};

export default Success;
