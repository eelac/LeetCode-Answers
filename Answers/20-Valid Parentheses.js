var isValid = (s) => {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (i = 0; i < s.length; i++) {
    let curChar = s[i];
    switch (curChar) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (curChar !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
