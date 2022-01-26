import api from "../services/api.js";

import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../shared.js";

const addEvents = () => {
  const form = getElement(".contact-form");

  addEvent(form, "submit", hadleSubmit);
  const inputs = getElements(".contact-form-input");
  inputs.forEach((input) => {
    const isRequired = getElementAttribute(input, "data-required");
    if (!isRequired) return;

    addEvent(input, "blur", handleBlur);
    addEvent(input, "focus", handleFocus);
  });
  closePopupEvent();
  showPopupEvent();
};

const closePopupEvent = () => {
  const closeBtn = getElement(".contact-form-close");
  addEvent(closeBtn, "click", hidePopup);
  const overlay = getElement(".contact-overlay");
  addEvent(overlay, "click", hidePopup);
};

const showPopupEvent = () => {
  const showPopupBtns = getElements(".show-contact-popup");
  showPopupBtns.forEach((btn) => {
    addEvent(btn, "click", showPopup);
  });
};

const showPopup = () => {
  const popup = getElement(".contact");
  popup.classList.add("contact-active");
};

const hidePopup = () => {
  const popup = getElement(".contact");
  popup.classList.remove("contact-active");
};

const handleBlur = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  if (!value) {
    handleError(name, true);
  }
};

const handleFocus = (e) => {
  const name = e.target.name;
  handleError(name);
};

const handleLoading = () => {
  //   const subscribe = getElement(".subscribe");
  //   return subscribe.classList.add("subscribe-loading");
};

const handleSuccess = (inputs) => {
  //   const subscribe = getElement(".subscribe");
  //   subscribe.classList.remove("subscribe-loading");
  //   inputs.forEach((input) => {
  //     input.value = "";
  //   });
  //   return subscribe.classList.add("subscribe-submitted");
};

const hadleSubmit = async (e) => {
  e.preventDefault();
  const inputs = getElements(".contact-form-input");
  const body = {};
  inputs.forEach((input) => {
    const name = input.name;
    const value = input.value;
    const isRequired = getElementAttribute(input, "data-required");
    if (!value && isRequired) {
      return handleError(name, true);
    }
    body[name] = value;
  });

  const { name, phone } = body;
  if (!phone || !name) return;
  handleLoading();
  try {
    await api.sendUserDetails(body);
    handleSuccess(inputs);
  } catch (error) {}
};
const handleError = (name, show) => {
  const error = getElement(`.${name}-error`);
  console.log(error);
  if (show) {
    return (error.style.display = "block");
  }
  error.style.display = "none";
};
export default {
  addEvents,
};
