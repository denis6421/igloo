import React from "react";

const Link = ({ name, url }) => {
  return (
    <li className="navbar-link">
      <a href={url} rel="noopener noreferrer">
        {name}
      </a>
    </li>
  );
};

export default Link;
