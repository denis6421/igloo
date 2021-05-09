import React from "react";

const About = ({ flex1, flex2, subscribe, slider }) => {
  return (
    <div className="about page">
      <main className="flex-column">
        {flex1}
        {flex2}
        {slider}
        {subscribe}
      </main>
    </div>
  );
};

export default About;
