import React from "react";

const Home = ({
  grid_section,
  header,
  our_services,
  about,
  advantages,
  cooporation,
  subscribe,
  slider,
}) => {
  return (
    <div className="home page-grid">
      {header}
      <main className="flex-column">
        <div className="home-flex">
          {grid_section}
          {about}
          {our_services}
          {advantages}
          {cooporation}
          {slider}
        </div>
        {subscribe}
      </main>
    </div>
  );
};

export default Home;
