export const facilityPopup = (facility) => {
  const container = document.createElement("div");
  container.classList.add("facility-popup");
  const title = facility.querySelector("h4");
  const area = facility.querySelector("h3");
};

export const createFacility = (data) => {
  const { image, title, area } = data;
  const li = document.createElement("li");
  const html = `
   <img src = ${image} />
    <section>
    <div >
     <h3>${title}</h3>
    <h4>${area}</h4></div>
    <button>Подробнее</button>
    </section>
    `;
  li.classList.add("investments-list-facility");
  li.innerHTML = html;
  return li;
};

const slider = () => {
  var secondarySlider = new Splide(".secondary-slider", {
    rewind: true,
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 10,
    focus: "center",
    pagination: false,
    cover: true,
    breakpoints: {
      600: {
        fixedWidth: 66,
        fixedHeight: 40,
      },
    },
  }).mount();

  // Create the main slider.
  var primarySlider = new Splide(".primary-slider", {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  });

  // Set the thumbnails slider as a sync target and then call mount.
  primarySlider.sync(secondarySlider).mount();
};
