var subtractProductAndSum = (n) => {
  let mult = n
    .toString()
    .split("")
    .reduce((a, b) => a * b * 1, 1);
  let add = n
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0);
  return mult - add;
};
