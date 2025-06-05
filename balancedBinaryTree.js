class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var isBalanced = function (root) {
  if (root == null) {
    return true;
  }
  if(root.left == null && root.right == null) {
    return true;
  }
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }
  let result1;
  let result2;
  if (root.left) {
    result1 = isBalanced(root.left);
  }
  if (root.right) {
    result2 = isBalanced(root.right);
  }
  if (result1 == false || result2 == false) {
    return false;
  } else {
    return true;
  }
};
var maxDepth = function (node) {
  if (node == null) return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};