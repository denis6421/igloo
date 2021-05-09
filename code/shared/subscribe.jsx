import React from "react";
import Img from "./img";

const Subscribe = (props) => {
  const {
    title,
    text,
    nameLabel,
    namePlaceholder,
    phoneLabel,
    phonePlaceholder,
    submit,
    image,
    _relativeURL,
    _ID,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="subscribe">
      <Img src={generateUrl(image)} customClassName="subscribe-bg" />

      <form className="subscribe-form">
        <h3 className="subscribe-form-title">{title}</h3>
        <p className="subscribe-form-text">{text}</p>
        <div className="subscribe-form-flex flex-start">
          <section className="subscribe-form-section">
            <label htmlFor="name">{nameLabel}</label>
            <input type="text" name="name" placeholder={namePlaceholder} />
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="phone">{phoneLabel}</label>
            <input type="text" name="phone" placeholder={phonePlaceholder} />
          </section>
          <input
            value={submit}
            className="subscribe-form-submit"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
