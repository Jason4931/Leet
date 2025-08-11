var moveZeroes = function (nums) {
  let result = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      result.push(nums[i]);
    } else {
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
};
