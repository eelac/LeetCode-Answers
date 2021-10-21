var isPalindrome = (s) => {
  var outString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var reverseString = outString.split("").reverse().join("");
  if (outString === reverseString) {
    return true;
  } else {
    return false;
  }
};
