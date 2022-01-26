import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../shared.js";
let scrollPos;
export const handleSelectedRoute = () => {
  const body = document.body;
  const title = getElementAttribute(body, "data-title");
  const links = getElements(".navbar-link");
  links.forEach((link) => {
    const url = getElementAttribute(link, "data-name");
    if (url === title) {
      return link.classList.add("navbar-link-active");
    }
    if (title === "Main" && url === "Главная") {
      return link.classList.add("navbar-link-active");
    }
    return link.classList.remove("navbar-link-active");
  });
};

export const handleNavbarTransform = (navbar) => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -100) {
      navbar.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};

export const handleNavbarBackground = (navbar) => {
  const offsetTop = window.pageYOffset;
  if (offsetTop >= 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};

const toggleMenu = () => {
  const activeClass = "mobile-menu-content-active";
  const menu = getElement(".mobile-menu-content");
  if (menu.classList.contains(activeClass)) {
    return menu.classList.remove(activeClass);
  }
  menu.classList.add(activeClass);
};

export const addClickEventToMobileToggle = () => {
  // try {
  //   const toggles = getElements(".hamburger");
  //   toggles.forEach((btn) => {
  //     addEvent(btn, "click", toggleMenu);
  //   });
  //   setTimeout(() => {
  //     const menu = getElement(".mobile-menu-content");
  //     menu.style.display = "block";
  //   }, 100);
  // } catch (error) {}
};
