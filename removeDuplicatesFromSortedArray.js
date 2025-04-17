var removeDuplicates = function (nums) {
  nums.sort((a, b) => (a - b));
  let currentnumber = nums[0];
  let duplicate = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (currentnumber > nums[i]) {
      duplicate++;
    } else {
      currentnumber = nums[i] + 1;
      result = [...result, nums[i]];
    }
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return result;
};