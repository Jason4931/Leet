var searchInsert = function (nums, target) {
  nums.sort((a, b) => (a - b));
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      }
    }
    return nums.length;
  }
};