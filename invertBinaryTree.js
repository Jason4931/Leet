function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var invertTree = function(root) {
  if (root == null) {
    return null;
  }
  let leftMirrored = invertTree(root.left);
  let rightMirrored = invertTree(root.right);
  root.left = rightMirrored;
  root.right = leftMirrored;
  return root;
};