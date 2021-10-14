var isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const reverse = Number(x.toString().split("").reverse().join(""));
  if (x === reverse) {
    return true;
  } else {
    return false;
  }
};
