var NumArray = function (nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function (left, right) {
  return this.nums.slice(left, right + 1).reduce((a, b) => a + b);
};
