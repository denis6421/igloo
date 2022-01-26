export const getPropertyFromUrl = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  const elem = urlParams.get(param);
  return elem;
};

export const updateSearchParams = (param, value) => {
  const isArr = Array.isArray(value);
  const search = window.location.search;
  const newSearch = updateQueryStringParameter(search, param, value, isArr);
  return window.history.pushState({ path: newSearch }, "", newSearch);
};

const updateQueryStringParameter = (uri, key, value, isArr) => {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  const isEmptyValue = !value || (isArr && value).length === 0;

  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
};

export const getValuesFromSearchQuery = (properties) => {
  const values = {};
  Object.keys(properties).forEach((key) => {
    values[key] = getPropertyFromUrl(properties[key]);
  });
  return values;
};
