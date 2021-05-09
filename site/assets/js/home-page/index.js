import { data } from "./data.js";
import { addEvent, getElement, getElementAttribute } from "../shared.js";
import { globalInit } from "../index.js";
import { updateSearchParams, getPropertyFromUrl } from "../util/url.js";

import { init } from "./filter.js";
import { pagination } from "./pagination.js";
const limit = 16;
let priceTimeOut;
let selectedPage = 0;
window.onload = () => {
  init();
  globalInit();
  addEventsToPaginationToggles();
  const page = getPropertyFromUrl("page");
  if (!page) {
    return selectPage(1);
  }
  return selectPage(page);
};

const createElem = (data) => {
  const { image, title, area } = data;
  const li = document.createElement("li");
  const html = `
   <img src = ${image} />
    <section>
    <div >
     <h3>${title}</h3>
    <h4>${area}</h4></div>
    <button>Click</button>
    </section>
    `;
  li.classList.add("investment-facility");
  li.innerHTML = html;
  return li;
};
const mapFiles = (start, end) => {
  const container = getElement(".investments-list");
  container.innerHTML = "";
  const arr = data.slice(start, end);
  console.log(arr);
  arr.forEach((elem) => {
    const li = createElem(elem);
    container.appendChild(li);
  });
};

const mapFilesByIndex = (page = 0) => {
  const start = limit * page;
  const end = start + limit;
  mapFiles(start, end);
};

const createPagination = (selected) => {
  if (!selected) return;
  selectedPage = selected;
  const lastPage = Math.ceil(data.length / limit);
  const pages = pagination(selected, lastPage);

  const container = getElement(".pagination-buttons");
  container.innerHTML = "";
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
  console.log(selectedPage);
  if (prevPage === 0) {
    return;
  }
  selectPage(prevPage);
};
const handleNext = () => {
  const nextPage = Number(selectedPage) + 1;
  const lastPage = Math.ceil(data.length / limit);
  if (nextPage === lastPage) {
    return;
  }
  selectPage(nextPage);
};

const createPaginationBtn = (i, selected) => {
  console.log(selected);
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
  createPagination(page);
  mapFilesByIndex(page - 1);
};

export const setCheckBoxesValue = (e) => {
  const propertyName = getElementAttribute(e.target, "data-type");
  const value = getElementAttribute(e.target, "data-value");
  const isActive = e.target.classList.contains("check-box-figure-active");
  if (isActive) {
    e.target.classList.remove("check-box-figure-active");
  } else {
    e.target.classList.add("check-box-figure-active");
  }
  updatePriceInSearchQuery(propertyName, value);
};

const updatePriceInSearchQuery = (from, to) => {
  updateSearchParams("price_from", from);
  updateSearchParams("price_to", to);
};
