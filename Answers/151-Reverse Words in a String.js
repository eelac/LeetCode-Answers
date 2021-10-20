var reverseWords = (s) => {
  var newString = s.replace(/\s+/g, " ");
  return newString.split(" ").reverse().join(" ").trim();
};
