var sortedSquares = (nums) => {
  const square = nums.map((x) => x ** 2);
  const sort = square.sort(function (a, b) {
    return a - b;
  });
  return sort;
}