// Answer 1
var buildArray = (nums) => {
  return nums.map((arr) => nums[arr]);
};

// Answer 2
var buildArray = (nums) => {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[nums[i]];
  }
  return arr;
};
