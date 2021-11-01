// Answer 1
var numberOfSteps = (num) => {
  let count = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num - 1;
      count++;
    }
  }
  return count;
};

// Answer 2
var numberOfSteps = (num) => {
  let count = 0;
  while (num !== 0) {
    num = num % 2 === 0 ? num / 2 : --num;
    count++;
  }
  return count;
};
