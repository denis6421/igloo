import { addEvent, getElement, getElements } from "../shared.js";
import {
  setPriceValues,
  setRangePriceValues,
  setCheckBoxesValue,
} from "./index.js";

const addEventsToPrice = () => {
  const elements = getElements(".filter-price-inputs input");
  elements.forEach((element) => {
    addEvent(element, "keyup", setPriceValues);
  });
  const range = getElement(".filter-price-range-input");
  addEvent(range, "input", setRangePriceValues);
};

const addEventsToCheckBoxes = () => {
  const elements = getElements(".check-box");
  elements.forEach((element) => {
    addEvent(element, "click", setCheckBoxesValue);
  });
  const range = getElement(".filter-price-range-input");
  addEvent(range, "input", setRangePriceValues);
};
export const init = () => {
  addEventsToPrice();
  addEventsToCheckBoxes();
};
