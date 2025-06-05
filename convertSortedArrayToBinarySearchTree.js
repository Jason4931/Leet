class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  let root = new TreeNode(nums[Math.floor(nums.length / 2)]);
  if (nums.length > 1) {
    root.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length / 2)));
    root.right = sortedArrayToBST(nums.slice(Math.floor(nums.length / 2) + 1));
  }
  return root;
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));