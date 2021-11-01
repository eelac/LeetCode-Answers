var lengthOfLastWord = (s) => {
  let arr = s.trim().split(" ");
  return arr.pop().length;
};
