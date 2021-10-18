var findMedianSortedArrays = (nums1, nums2) => {
  var arr = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });
  var arrHalf = Math.floor(arr.length / 2);

  if (arr.length % 2 == 0) {
    return (arr[arrHalf - 1] + arr[arrHalf]) / 2;
  } else {
    return arr[arrHalf];
  }
};
