class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var maxDepth = function (root) {
  let result = 0;
  let max = 0;
  let current = root;
  let stack = [];
  let dir = 0;
  while (current) {
    if (current.left && current.right && dir == 0) {
      stack.push([current, max])
    }
    max++;
    if (max > result) {
      result = max;
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
          max = popped[1];
          dir = 1;
        } else {
          break;
        }
      }
    } else {
      dir = 0;
      if (current.right) {
        current = current.right;
      }
    }
  }
  return result;
};
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root));