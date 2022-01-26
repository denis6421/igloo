import {
  handleSelectedRoute,
  handleNavbarTransform,
  handleNavbarBackground,
  addClickEventToMobileToggle,
} from "./navbar/navbar.js";
import { getElement } from "./shared.js";
import subscribe from "./subscribe.js";
import contact from "./contact/index.js";

let navbar;
export const globalInit = () => {
  AOS.init();
  subscribe.addEvents();
  contact.addEvents();
  handleSelectedRoute();
  navbar = getElement(".navbar");
  handleOnScroll();
  addClickEventToMobileToggle();
};

const handleOnScroll = () => {
  document.addEventListener(
    "scroll",
    () => {
      handleNavbarTransform(navbar);
      handleNavbarBackground(navbar);
    },
    { passive: true }
  );
};
