import React from "react";

const Link = ({ name, path, options }) => {
  const className =
    options && options.length > 0
      ? "navbar-link navbar-link-with-options"
      : "navbar-link navbar-link-no-options";
  return (
    <div className={className} data-name={name}>
      <a href={path} rel="noopener noreferrer">
        {name}
      </a>
      {options && (
        <ul className="navbar-link-options">
          {options &&
            options.map((option) => {
              return <li>{option}</li>;
            })}
        </ul>
      )}
    </div>
  );
};

export default Link;
