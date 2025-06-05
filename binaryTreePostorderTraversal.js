function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var postorderTraversal = function (root) {
  let result = [];
  let current = root;
  let stack = [];
  let dir = 0;
  while (current) {
    if (current.right && current.left && dir == 0) {
      stack.push(current);
    }
    if (dir == 0) {
      result.push(current.val);
      if (current.right) {
        current = current.right;
      } else if (current.left) {
        current = current.left;
      } else {
        if (stack.length > 0) {
          current = stack.pop();
          dir = 1;
        } else {
          break;
        }
      }
    } else {
      dir = 0;
      if (current.left) {
        current = current.left;
      }
    }
  }
  return result.reverse();
};