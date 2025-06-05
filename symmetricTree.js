class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var isSymmetric = function(root) {
  if (JSON.stringify(root) == JSON.stringify(mirror(root))) {
    return true;
  } else {
    return false;
  }
};
function mirror(root) {
  if (root == null) {
    return null;
  }
  let leftMirrored = mirror(root.left);
  let rightMirrored = mirror(root.right);
  root.left = rightMirrored;
  root.right = leftMirrored;
  return root;
}