import { addEvent, getElement, getElements } from "../shared.js";
import {
  setPriceValues,
  setRangeRevenueValues,
  setCheckBoxesValue,
  setRangePriceValues,
  setTextBoxesValue,
} from "./index.js";

const addEventsToRevenueRange = () => {
  const rangeInput = getElement(".range-revenue");
  addEvent(rangeInput, "input", setRangeRevenueValues);
};

const addEventsToPriceRange = () => {
  const priceInput = getElement(".range-price");
  addEvent(priceInput, "input", setRangePriceValues);
};

const addEventsToTextInputs = () => {
  const elements = getElements(".text-input");
  elements.forEach((element) => {
    addEvent(element, "keyup", setPriceValues);
  });
};

const addEventsToTextBox = () => {
  const elements = getElements(".text-box");
  elements.forEach((element) => {
    addEvent(element, "click", setTextBoxesValue);
  });
};

const addEventsToChecKBoxes = () => {
  const elements = getElements(".check-box");
  elements.forEach((element) => {
    addEvent(element, "click", setCheckBoxesValue);
  });
};
export const init = () => {
  addEventsToRevenueRange();
  addEventsToChecKBoxes();
  addEventsToTextInputs();
  addEventsToTextBox();
  addEventsToPriceRange();
};
