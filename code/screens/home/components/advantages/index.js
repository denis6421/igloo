import React from "react";

const Advantages = ({ left_side, right_side }) => {
  return (
    <div className="home-advantages flex-between">
      {left_side}
      {right_side}
    </div>
  );
};

export default Advantages;
