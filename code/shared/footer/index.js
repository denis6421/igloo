import React from "react";
import Img from "../img";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-grid footer-flex">
        <section className="footer-navigation flex-start">
          <div>
            <h4>О компании</h4>
            <h4>О компании</h4>
          </div>
          <div>
            <h4>О компании</h4>
            <h4>О компании</h4>
          </div>
          <div>
            <h4>FAQ</h4>
            <div>
              <Img src="" />
              <Img src="" />
              <Img src="" />
            </div>
          </div>
          <div>
            <h4>О компании</h4>
            <button>Заказать звонок</button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
