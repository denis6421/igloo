import React from "react";
import { images } from "../../../assets/js/images";

function ContactForm({
  text,
  section_1_label,
  section_1_placeholder,
  section_2_label,
  section_2_placeholder,
  section_3_label,
  section_3_placeholder,
  section_4_label,
  section_4_placeholder,
  submitText,
  img,
  _relativeURL,
  _ID,
}) {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="contact">
      <div className="contact-overlay"></div>
      <form className="contact-form flex">
        <button className="contact-form-close">
          <img src={generateUrl(images.shared.closeX)} />
        </button>
        <div className="contact-form-left">
          <img src={generateUrl(img)} alt="form image" />
        </div>
        <div className="contact-form-right">
          <h3>{text}</h3>
          <div className="contact-form-right-sections">
            <section>
              <h4>{section_1_label}</h4>
              <input
                data-required="1"
                placeholder={section_1_placeholder}
                name="firstName"
                className="contact-form-input"
              />
              <p className="firstName-error">Required field</p>
            </section>
            <section>
              <h4>{section_2_label}</h4>
              <input
                data-required="1"
                placeholder={section_2_placeholder}
                name="lastName"
                className="contact-form-input"
              />
              <p className="lastName-error">Required field</p>
            </section>
            <section>
              <h4>{section_3_label}</h4>
              <input
                data-required="1"
                placeholder={section_3_placeholder}
                name="contactPhone"
                className="contact-form-input"
              />
              <p className="contactPhone-error">Required field</p>
            </section>
            <section>
              <h4>{section_4_label}</h4>
              <input
                data-required="1"
                placeholder={section_4_placeholder}
                name="contactEmail"
                className="contact-form-input"
              />
              <p className="contactEmail-error">Required field</p>
            </section>
            <section>
              <h4>{section_4_label}</h4>
              <textarea name="contactComments" className="contact-form-input" />
            </section>
          </div>
          <input
            className="contact-form-submit"
            type="submit"
            value={submitText}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
