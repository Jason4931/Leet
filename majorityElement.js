var majorityElement = function (nums) {
  let result = null;
  let count = 0;
  let freqMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!freqMap.has(nums[i])) {
      freqMap.set(nums[i], nums.filter(num => num == nums[i]).length);
    }
    if (count < freqMap.get(nums[i]) || result == null) {
      count = freqMap.get(nums[i]);
      result = nums[i];
    }
  }
  return result;
};