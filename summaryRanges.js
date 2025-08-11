var summaryRanges = function (nums) {
  let result = [];
  let stack = [];
  let i = 0;
  while (i < nums.length) {
    if (stack.length == 0) {
      stack.push(nums[i]);
    } else {
      if (nums[i] - stack[stack.length - 1] == 1) {
        stack.push(nums[i]);
      } else {
        result.push(stack);
        stack = [];
        i--;
      }
    }
    i++;
  }
  if (stack.length > 0) {
    result.push(stack);
  }
  return result.map((range) => {
    if (range.length == 1) {
      return range[0].toString();
    } else {
      return `${range[0]}->${range[range.length - 1]}`;
    }
  });
};