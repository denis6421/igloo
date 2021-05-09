import { data } from "./data.js";
import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../shared.js";
import { globalInit } from "../index.js";
import {
  updateSearchParams,
  getPropertyFromUrl,
  getValuesFromSearchQuery,
} from "../util/url.js";

import { init } from "./filter.js";
import { pagination } from "./pagination.js";
import { elementsType, filterProperties } from "../consts.js";
import { createFacility } from "./inverstment-html-elements.js";
const limit = 16;
let priceTimeOut;
let selectedPage = 0;
let listToRender = [...data];
window.onload = () => {
  init();
  globalInit();
  setValuesFromQueryParams();
  addEventsToPaginationToggles();
  const page = getPropertyFromUrl("page");
  filterList(page || 1);
  addEventsToFilterToggle();
};

const toggleFilterMenu = (val) => {
  const menu = getElement(".filter-menu");
  if (val) {
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
  filterList();
  setValuesFromQueryParams();
};

const mapFiles = (list, start, end) => {
  const container = getElement(".investments-list");
  container.innerHTML = "";
  list.forEach((elem, index) => {
    if (index < start || index > end) {
      return;
    }
    const li = createFacility(elem);
    container.appendChild(li);
  });
};

const mapFilesByIndex = (list, page = 0) => {
  const start = limit * page;
  const end = start + limit;
  mapFiles(list, start, end);
};

const createPagination = (list, selected) => {
  selectedPage = selected;
  const lastPage = Math.ceil(list.length / limit);
  console.log(list);
  const pages = pagination(selected, lastPage);

  const container = getElement(".pagination-buttons");
  container.innerHTML = "";
  const prev = getElement(".pagination-back");
  prev.style.display = pages.length <= 1 || selected === 1 ? "none" : "block";
  const next = getElement(".pagination-next");
  next.style.display =
    pages.length === 1 || selected === lastPage ? "none" : "block";
  pages.forEach((page) => {
    const btn = createPaginationBtn(page, selected);
    container.appendChild(btn);
  });
};

const addEventsToPaginationToggles = () => {
  const prev = getElement(".pagination-back");
  const next = getElement(".pagination-next");
  addEvent(prev, "click", handlePrev);
  addEvent(next, "click", handleNext);
};

const handlePrev = () => {
  const prevPage = selectedPage - 1;
  if (prevPage === 0) {
    return;
  }
  selectPage(prevPage);
};
const handleNext = () => {
  const nextPage = Number(selectedPage) + 1;
  const lastPage = Math.ceil(listToRender.length / limit);
  if (nextPage === lastPage) {
    return;
  }
  selectPage(nextPage);
};
const createPaginationBtn = (i, selected) => {
  const pageBtn = document.createElement("button");
  pageBtn.classList.add("page-btn");
  if (i == selected) {
    pageBtn.classList.add("page-btn-active");
  } else {
    pageBtn.classList.remove("page-btn-active");
  }
  pageBtn.addEventListener("click", () => {
    selectPage(i);
  });
  pageBtn.innerText = i;
  return pageBtn;
};

const selectPage = (page) => {
  updateSearchParams("page", page);
  createPagination(listToRender, page);
  mapFilesByIndex(listToRender, page - 1);
};

export const setRangeRevenueValues = (e) => {
  window.clearTimeout(priceTimeOut);
  const value = e.target.value;
  priceTimeOut = setTimeout(() => {
    updateSearchParams(filterProperties.revenue, value);
    setValuesFromQueryParams();
    return filterList();
  }, 500);
};

export const setRangePriceValues = (e) => {
  window.clearTimeout(priceTimeOut);
  priceTimeOut = setTimeout(() => {
    const from = e.target.min;
    const to = e.target.value;
    updateSearchParams(filterProperties.price_from, from);
    updateSearchParams(filterProperties.price_to, to);
    setValuesFromQueryParams();
    return filterList();
  }, 500);
};

export const setPriceValues = (e) => {
  window.clearTimeout(priceTimeOut);
  const propertyName = getElementAttribute(e.target, "data-type");
  const value = e.target.value || 0;
  priceTimeOut = setTimeout(() => {
    updateSearchParams(propertyName, value);
    setValuesFromQueryParams();
    return filterList();
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
  setValuesFromQueryParams();
  return filterList();
};

export const setCheckBoxesValue = (e) => {
  const param = getElementAttribute(e.target, "data-type");
  const value = getElementAttribute(e.target, "data-value");
  const values = getPropertyFromUrl(param);
  const newValues = handleCheckBoxSelect(values, value);
  updateSearchParams(param, newValues);
  setValuesFromQueryParams();
  return filterList();
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

const setValuesFromQueryParams = () => {
  const values = getValuesFromSearchQuery(filterProperties);
  const elementsAndValues = getElementsAssignedToFilterProperty(values);
  elementsAndValues.forEach((filter) => {
    setElementsActiveIfNeeded(filter);
  });
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

const filterList = (page = 1) => {
  const values = getValuesFromSearchQuery(filterProperties);
  delete values.page;
  const list = data.filter((elem) => {
    let validation = [];
    Object.keys(values).forEach((key) => {
      const filterValue = values[key];
      const isValid = validateByType(elem, key, filterValue);
      validation.push(isValid);
    });
    return !validation.includes(false);
  });
  listToRender = list;
  selectPage(page);
};

const validateByType = (elem, key, filterValue) => {
  const elementValue = elem[key];
  if (!filterValue) {
    return true;
  }
  switch (key) {
    case filterProperties.price_from:
      return elem.price >= Number(filterValue);
    case filterProperties.price_to:
      return elem.price <= Number(filterValue);
    case filterProperties.revenue:
      return elem.revenue <= Number(filterValue);
    default:
      return !filterValue ? true : elementValue === filterValue;
  }
};
