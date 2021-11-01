// Answer 1
var myPow = (x, n) => {
  let num = Math.pow(x, n);
  return num;
};

// Answer 2
var myPow = (x, n) => {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};

var pow = (x, n) => {
  if (n === 1) return x;
  var num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};
