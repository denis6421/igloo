export const formatNumber = (num) => {
  if (!num) return 0;
  if (!Number.isInteger(num)) return 0;
  return num.toLocaleString();
};
