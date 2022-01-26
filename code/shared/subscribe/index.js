import React from "react";
import Img from "../img";
import Loader from "../loader";

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
    name_error,
    phone_error,
    emailLabel,
    emailPlaceholder,
    email_error,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="subscribe">
      <Img src={generateUrl(image)} customClassName="subscribe-bg" />
      {/* {success} */}
      <form className="subscribe-form">
        <h3 className="subscribe-form-title">{title}</h3>
        <p className="subscribe-form-text">{text}</p>
        <div className="subscribe-form-flex flex-start">
          <section className="subscribe-form-section">
            <label htmlFor="name">{nameLabel}</label>
            <input type="text" name="name" placeholder={namePlaceholder} />
            <p className="subscribe-form-error name-error">{name_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="phone">{phoneLabel}</label>
            <input type="text" name="phone" placeholder={phonePlaceholder} />
            <p className="subscribe-form-error phone-error">{phone_error}</p>
          </section>
          <section className="subscribe-form-section">
            <label htmlFor="email">{emailLabel}</label>
            <input type="email" name="email" placeholder={emailPlaceholder} />
            <p className="subscribe-form-error email-error">{email_error}</p>
          </section>
          <div className="subscribe-form-section subscribe-form-submit">
            <input
              className="subscribe-form-submit-btn"
              value={submit}
              type="submit"
            />
            <Loader customClassName="subscribe-loader" />
            <h5 className="subscribe-success-text">Thank you!</h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
