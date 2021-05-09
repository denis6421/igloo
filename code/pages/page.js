import React from "react";

const Page = ({ title, navbar, main, script, _relativeURL, _ID }) => (
  <html>
    <head>
      <title>Igloo - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/reset.css`, _ID)}
      />
    </head>
    {navbar}
    <body>
      {main}
      {script != undefined ? (
        <script
          type="module"
          src={_relativeURL(`/assets/js/${script}.js`, _ID)}
        />
      ) : null}
    </body>
  </html>
);

export default Page;
