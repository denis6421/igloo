export const getElement = (className) => {
  try {
    return document.querySelector(className);
  } catch (error) {
    return null;
  }
};

export const getElements = (className) => {
  try {
    return document.querySelectorAll(className);
  } catch (error) {
    return null;
  }
};

export const getElementAttribute = (element, attr) => {
  if (!element) return;
  return element.getAttribute(attr);
};

export const addEvent = (element, eventType, customEvent) => {
  if (!element || !customEvent || !eventType) return;
  element.addEventListener(eventType, (e) => customEvent(e));
};
