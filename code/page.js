import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Page = ({
  title,
  stylesheet,
  header,
  body,
  footer,
  scripts,
  _relativeURL,
  _ID,
  librariesScript,
  libraryStyles,
  className,
}) => (
  <html>
    <head>
      <title>Orbs - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />

      {stylesheet != undefined ? (
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
        />
      ) : null}
      {libraryStyles != undefined
        ? libraryStyles.map((src) => {
            return <link rel="stylesheet" href={src} />;
          })
        : null}
    </head>
    <body
      className={`grid-page ${className}`}
      style={{ background: "#23566D" }}
    >
      <header className="main-header">{header}</header>
      {body}
      {footer}
      {scripts != undefined
        ? scripts.map((script) => {
            return (
              <script
                type="module"
                src={_relativeURL(`/assets/js/${script}.js`, _ID)}
              />
            );
          })
        : null}
      {librariesScript != undefined
        ? librariesScript.map((src) => {
            return <script src={src} />;
          })
        : null}
    </body>
  </html>
);

export default Page;
