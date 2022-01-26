import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../img";

const Footer = ({
  _relativeURL,
  _ID,
  link1_name,
  link1_url,
  link2_name,
  link2_url,
  link3_name,
  link3_url,
  link4_name,
  link4_url,
  link5_name,
  link5_url,
  phone,
  btn_text,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <footer className="footer">
      <div className="main-grid footer-flex">
        <div className="footer-logo">
          <a href={generateUrl("/")}>
            <Img src={generateUrl(images.shared.logo)} />
          </a>
        </div>
        <section className="footer-navigation">
          <div>
            <p>
              <a href={generateUrl(link1_url)}>{link1_name}</a>
            </p>
            <p>
              <a href={generateUrl(link2_url)}>{link2_name}</a>
            </p>
          </div>
          <div>
            <p>
              <a href={generateUrl(link3_url)}>{link3_name}</a>
            </p>
            <p>
              <a href={generateUrl(link4_url)}>{link4_name}</a>
            </p>
          </div>
          <div>
            <p>
              <a href={generateUrl(link5_url)}>{link5_name}</a>
            </p>
            <div className="footer-socials">
              <Img src={images.shared.facebook} />
              <Img src={images.shared.instagram} />
              <Img src={images.shared.youtube} />
            </div>
          </div>
          <div className="footer-contact">
            <h4>{phone}</h4>
            <button className="show-contact-popup">{btn_text}</button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
