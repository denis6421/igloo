import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js";

export const initSlider = () => {
  handleDesktop();
  handleMobile();

  // Create the main slider.

  // Set the thumbnails slider as a sync target and then call mount.
};

const handleMobile = () => {
  var mobileSlider = new Splide(".secondary-mobile-slider", {
    type: "loop",
    rewind: true,
    perPage: 3,
    speed: 300,
    isNavigation: true,
    gap: 20,
    direction: "ttb",
    height: "380px",
    focus: "center",
    pagination: false,
    cover: true,
    perMove: 1,
    breakpoints: {
      600: {
        fixedWidth: 66,
        fixedHeight: 40,
      },
    },
  }).mount();
  const primary = createPrimarySlider(".primary-mobile-slider").mount();
  primary.sync(mobileSlider).mount();
};

const handleDesktop = () => {
  var secondarySlider = new Splide(".secondary-slider", {
    type: "loop",
    rewind: true,
    perPage: window.innerWidth > 800 ? 3 : 4,
    speed: 300,
    isNavigation: true,
    gap: window.innerWidth > 800 ? 20 : 0,
    focus: "center",
    pagination: false,
    cover: true,
    perMove: 1,
  }).mount();
  const primary = createPrimarySlider(".primary-slider").mount();
  primary.sync(secondarySlider).mount();
};

const createPrimarySlider = (elementClassname) => {
  return new Splide(elementClassname, {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  });
};
