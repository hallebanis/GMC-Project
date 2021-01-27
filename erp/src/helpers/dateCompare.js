export const dateCompare = (d1, d2) => {
  let x = new Date(d1);
  let y = new Date(d2);
  if (x.getFullYear() > y.getFullYear()) return 1;
  else if (x.getFullYear() < y.getFullYear()) return -1;
  else if (x.getMonth() > y.getMonth()) return 1;
  else if (x.getMonth() < y.getMonth()) return -1;
  else if (x.getDay() > y.getDay()) return 1;
  else if (x.getDay() < y.getDay()) return -1;
  return 0;
};
