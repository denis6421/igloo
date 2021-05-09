import { addEvent, getElement, getElements } from "./shared.js";

export const addEvents = () => {
  const form = getElement(".subscribe-form");
  addEvent(form, "submit", hadleSubmit);
};

const hadleSubmit = () => {
  const inputs = getElements(".subscribe-form-section inputs");
  inputs.forEach((input) => {
    console.log(input);
  });
};
