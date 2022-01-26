import api from "./services/api.js";
import { addEvent, getElement, getElements } from "./shared.js";

const addEvents = () => {
  const form = getElement(".subscribe-form");
  addEvent(form, "submit", hadleSubmit);
  const inputs = getElements(".subscribe-form-section input");
  inputs.forEach((input) => {
    addEvent(input, "blur", handleBlur);
    addEvent(input, "focus", handleFocus);
  });
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
  const subscribe = getElement(".subscribe");
  return subscribe.classList.add("subscribe-loading");
};

const handleSuccess = (inputs) => {
  const subscribe = getElement(".subscribe");
  subscribe.classList.remove("subscribe-loading");
  inputs.forEach((input) => {
    input.value = "";
  });
  return subscribe.classList.add("subscribe-submitted");
};

const hadleSubmit = async (e) => {
  e.preventDefault();
  const inputs = getElements(".subscribe-form-section input");
  const body = {};
  inputs.forEach((input) => {
    const name = input.name;
    const value = input.value;
    if (!value) {
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
  if (show) {
    return error.classList.add("subscribe-form-error-active");
  }
  return error.classList.remove("subscribe-form-error-active");
};
export default {
  addEvents,
};
