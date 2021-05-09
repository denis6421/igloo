export const isRoot = (_ID) => {
  const root = _ID === "ko" || _ID === "jp" || _ID === ".";
  return root;
};

export const isBlogPage = (_ID, blogName) => {
  const isBlogList = _ID.indexOf(blogName) > -1;
  return isBlogList;
};
