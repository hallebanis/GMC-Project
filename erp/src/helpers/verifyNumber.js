export const verifyNumber = (txt) => {
  if (isNaN(txt)) return txt.slice(0, txt.length - 1);
  return txt;
};
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
