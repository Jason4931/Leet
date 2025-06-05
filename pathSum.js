class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var hasPathSum = function (root, targetSum) {
  if(root == null) return false;
  let stack = [];
  let current = root;
  let total = 0;
  let dir = 0;
  while (true) {
    if (current == null) break;
    if (current.left && current.right && dir == 0) {
      stack.push([current, total]);
    }
    total += current.val;
    if (total == targetSum && !current.left && !current.right) {
      return true;
    }
    if (dir == 0) {
      if (current.left) {
        current = current.left;
      } else if (current.right) {
        current = current.right;
      } else {
        if (stack.length > 0) {
          let popped = stack.pop();
          current = popped[0];
          total = popped[1];
          dir = 1;
        } else {
          return false;
        }
      }
    } else {
      dir = 0;
      current = current.right;
    }
  }
};
