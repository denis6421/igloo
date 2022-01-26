import React from "react";

const About = ({ header, flex2, subscribe, slider, breadCrumbs }) => {
  return (
    <div className="about page">
      {breadCrumbs}
      <main className="flex-column">
        {header}
        {flex2}
        {slider}
        {subscribe}
      </main>
    </div>
  );
};

export default About;
