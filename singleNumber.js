var singleNumber = function (nums) {
  nums.sort((a, b) => (a - b));
  for (let i = 0; i < nums.length; i++) {
    if (nums.find((num, index) => num == nums[i] && index != i) == undefined) {
      return nums[i];
    }
  }
  return null;
};