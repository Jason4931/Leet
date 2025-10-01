var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (result.includes(nums1[i])) {
        if (
          nums2.filter((num) => num == nums1[i]).length >
          result.filter((num) => num == nums1[i]).length
        ) {
          result.push(nums1[i]);
        }
      } else {
        result.push(nums1[i]);
      }
    }
  }
  return result;
};
