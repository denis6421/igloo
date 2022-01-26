import { settings } from "../consts.js";
import { addEvent, getElement } from "../shared.js";

export const pagination = (c, m) => {
  var current = Number(c),
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
};

export const createPagination = (list, selected, callback) => {
  const lastPage = Math.ceil(list.length / settings.listLimit);
  const pages = pagination(selected, lastPage);
  const paginationContainer = getElement(".pagination-buttons");

  paginationContainer.innerHTML = "";
  // const prev = getElement(".pagination-back");
  // prev.style.display = pages.length <= 1 || selected === 1 ? "none" : "block";
  // const next = getElement(".pagination-next");
  // next.style.display =
  //   pages.length === 1 || selected === lastPage ? "none" : "block";
  if (pages.length == 1) return;
  pages.forEach((page) => {
    const btn = createPaginationBtn(page, selected, callback);
    paginationContainer.appendChild(btn);
  });
  addEventsToPaginationToggles(list, selected, callback);
};

const addEventsToPaginationToggles = (list, selected, callback) => {
  const prev = getElement(".pagination-back");
  const next = getElement(".pagination-next");
  addEvent(prev, "click", () => handlePrev(list, selected, callback));
  addEvent(next, "click", () => handleNext(list, selected, callback));
};

const handlePrev = (list, selected, callback) => {
  const prevPage = selected - 1;
  if (prevPage === 0) {
    return;
  }
  callback(prevPage);
};

const handleNext = (list, selected, callback) => {
  const nextPage = Number(selected) + 1;
  const lastPage = Math.ceil(list.length / settings.listLimit);
  if (nextPage === lastPage) {
    return;
  }
  callback(nextPage);
};

const createPaginationBtn = (i, selected, callback) => {
  const pageBtn = document.createElement("button");
  pageBtn.classList.add("page-btn");
  if (i == selected) {
    pageBtn.classList.add("page-btn-active");
  } else {
    pageBtn.classList.remove("page-btn-active");
  }
  pageBtn.addEventListener("click", () => {
    callback(i);
  });
  pageBtn.innerText = i;
  return pageBtn;
};
