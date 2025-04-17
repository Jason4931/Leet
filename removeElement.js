var removeElement = function(nums, val) {
  let result = [];
  for (let i of nums) {
    if(i != val) {
      result.push(i);
    }
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return result.length;
};