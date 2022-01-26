import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
  toggleBodyOverflow,
} from "../shared.js";
import {
  updateSearchParams,
  getPropertyFromUrl,
  getValuesFromSearchQuery,
} from "../util/url.js";

import { init } from "./filter.js";
import { createPagination } from "./pagination.js";
import { elementsType, filterProperties, settings } from "../consts.js";
import { initSlider } from "./slider.js";
import { globalInit } from "../index.js";
let priceTimeOut;
let facillities = [];
let container;
window.onload = () => {
  init();
  globalInit();
  addEventsToFilterToggle();
  getFacillities();
};

const handleFacillityPopup = (popup, show) => {
  const body = document.body;

  if (show) {
    body.appendChild(popup);
    setTimeout(() => {
      popup.classList.add("facillity-popup-active");
    }, 0);
    toggleBodyOverflow(true);
    return initSlider();
  }
  const popupToRemove = getElement(".facillity-popup");
  popup.classList.remove("facillity-popup-active");
  toggleBodyOverflow();
  return setTimeout(() => {
    body.removeChild(popupToRemove);
  }, 200);
};

const getFacillities = () => {
  const page = getPropertyFromUrl("page");
  container = getElement(".investments-list");
  facillities = getElements(".facillity");
  facillities.forEach((facillity) => {
    addEventsToFacillity(facillity);
  });
  selectPage(page || 1, true);
};

const addEventsToFacillity = (facillity) => {
  const popupOverlay = facillity.querySelector(".facillity-popup-overlay");
  const popup = facillity.querySelector(".facillity-popup");
  const close = facillity.querySelector(".facillity-popup-close");
  addEvent(close, "click", () => handleFacillityPopup(popup));
  addEvent(popupOverlay, "click", () => handleFacillityPopup(popup));
  addEvent(facillity, "click", () => handleFacillityPopup(popup, true));
  facillity.style.display = "flex";
  facillity.removeChild(popup);
};

const toggleFilterMenu = (val) => {
  const menu = getElement(".filter-menu");
  if (val) {
    scrollToTopOfList();
    return menu.classList.add("filter-menu-active");
  }
  return menu.classList.remove("filter-menu-active");
};

const addEventsToFilterToggle = () => {
  const toggle = getElement(".filter-toggle-open");
  addEvent(toggle, "click", () => toggleFilterMenu(true));
  const close = getElement(".filter-toggle-close");
  const overlay = getElement(".filter-menu-overlay");
  addEvent(overlay, "click", () => toggleFilterMenu());
  addEvent(close, "click", () => toggleFilterMenu());
  const clearBtn = getElement(".clear-filters");
  addEvent(clearBtn, "click", clearFilters);
};

const clearFilters = () => {
  window.history.replaceState({}, document.title, "/" + "investments/?page=1");
  return selectPage(1);
};

const selectPage = (page, disableScroll) => {
  updateSearchParams("page", page);
  filterList(facillities, container, page, disableScroll);
};

export const setRangeRevenueValues = (e) => {
  window.clearTimeout(priceTimeOut);
  const value = e.target.value;
  priceTimeOut = setTimeout(() => {
    updateSearchParams(filterProperties.revenue, value);
    return selectPage(1);
  }, 500);
};

export const setRangePriceValues = (e) => {
  window.clearTimeout(priceTimeOut);
  priceTimeOut = setTimeout(() => {
    const from = e.target.min;
    const to = e.target.value;
    updateSearchParams(filterProperties.price_from, from);
    updateSearchParams(filterProperties.price_to, to);
    return selectPage(1);
  }, 500);
};

export const setPriceValues = (e) => {
  window.clearTimeout(priceTimeOut);
  const propertyName = getElementAttribute(e.target, "data-type");
  const value = e.target.value || 0;
  priceTimeOut = setTimeout(() => {
    updateSearchParams(propertyName, value);
    return selectPage(1);
  }, 500);
};

export const setTextBoxesValue = (e) => {
  const param = getElementAttribute(e.target, "data-type");
  const value = getElementAttribute(e.target, "data-value");
  const currentValue = getPropertyFromUrl(param);
  if (currentValue === value) {
    updateSearchParams(param, "");
  } else {
    updateSearchParams(param, value);
  }
  return selectPage(1);
};

export const setCheckBoxesValue = (e) => {
  const param = getElementAttribute(e.target, "data-type");
  const value = getElementAttribute(e.target, "data-value");
  const values = getPropertyFromUrl(param);
  const newValues = handleCheckBoxSelect(values, value);
  updateSearchParams(param, newValues);
  return selectPage(1);
};

const handleCheckBoxSelect = (values, value) => {
  if (!values) {
    return [value];
  }
  const arr = values.split(",");
  let newArr = [...arr];

  if (arr.includes(value)) {
    newArr = arr.filter((m) => m !== value);
    return newArr;
  }
  newArr.push(value);
  return newArr;
};

const setElementsActiveIfNeeded = (filter) => {
  const { values } = filter;
  filter.elements.forEach((element) => {
    const elementType = getElementAttribute(element, "element-type");
    switch (elementType) {
      case elementsType.box:
        return handleTextBox(element, values);
      case elementsType.checkbox:
        return handleCheckBox(element, values);
      case elementsType.input:
      case elementsType.range:
        return handleInput(element, values);
      default:
        break;
    }
  });
};

const handleInput = (element, values) => {
  element.value = values;
};
const handleCheckBox = (element, values) => {
  const elementValue = getElementAttribute(element, "data-value");
  const isSelected = values && values.includes(elementValue);
  if (isSelected) {
    return element.classList.add("selected");
  }
  return element.classList.remove("selected");
};

const handleTextBox = (element, value) => {
  const elementValue = getElementAttribute(element, "data-value");
  const isSelected = value === elementValue;
  if (isSelected) {
    return element.classList.add("text-box-selected");
  }
  return element.classList.remove("text-box-selected");
};

const getElementsAssignedToFilterProperty = (values) => {
  return Object.keys(values).map(function (key) {
    const isArray = values[key] && values[key].indexOf(",") > -1;
    const formattedValues = isArray ? values[key].split(",") : values[key];
    const elements = getElements(`[data-type=${key}]`);
    return {
      elements,
      values: formattedValues,
    };
  });
};
const handleElementsPagination = (index, start, end) => {
  return index >= start && index < end;
};

const scrollToTopOfList = () => {
  const list = getElement(".investments-content");
  const listOffset = list.offsetTop - 100;
  window.scrollTo(0, listOffset);
};

const filterList = (list, container, page = 1, disableScroll) => {
  if (!disableScroll) {
    scrollToTopOfList();
  }
  setTimeout(() => {
    const searchParams = getValuesFromSearchQuery(filterProperties);
    delete searchParams.page;
    container.innerHTML = "";
    let listToRender = [];
    const elementsAndValues = getElementsAssignedToFilterProperty(searchParams);
    elementsAndValues.forEach((filter) => {
      setElementsActiveIfNeeded(filter);
    });
    const start = settings.listLimit * (page - 1);
    const end = start + settings.listLimit;
    list.forEach((facillity, index) => {
      appendFacillities(
        listToRender,
        searchParams,
        container,
        facillity,
        index,
        start,
        end
      );
    });
    createPagination(listToRender, page, selectPage);
  }, 100);
};

const appendFacillities = (
  listToRender,
  searchParams,
  container,
  facillity,
  index,
  start,
  end
) => {
  const isValid = handleIsElementValid(searchParams, facillity);
  const isInRange = handleElementsPagination(index, start, end);
  if (isValid) {
    listToRender.push(facillity);
    if (isInRange) {
      container.appendChild(facillity);
    }
  }
};

const handleIsElementValid = (searchParams, facillity) => {
  let validation = [];
  Object.keys(searchParams).forEach((key) => {
    const filterValue = searchParams[key];
    const isValid = validateByType(facillity, key, filterValue);
    validation.push(isValid);
  });
  return !validation.includes(false);
};

const validateByType = (element, key, filterValue) => {
  const elementValue = getElementAttribute(element, key);
  if (!filterValue) {
    return true;
  }

  switch (key) {
    case filterProperties.price_from:
      const elementPriceFrom = getElementAttribute(element, "price_from");
      return elementPriceFrom >= Number(filterValue);
    case filterProperties.price_to:
      const elementPriceTo = getElementAttribute(element, "price_to");
      return elementPriceTo <= Number(filterValue);
    case filterProperties.revenue:
      const elementRevenue = getElementAttribute(element, "revenue");
      return elementRevenue == Number(filterValue);
    default:
      return !filterValue ? true : elementValue === filterValue;
  }
};
