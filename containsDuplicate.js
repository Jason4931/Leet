var containsDuplicate = function (nums) {
  let count = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      return true;
    } else {
      count.add(nums[i]);
    }
  }
  return false;
};