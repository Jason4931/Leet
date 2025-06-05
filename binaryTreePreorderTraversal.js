function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var preorderTraversal = function (root) {
  let result = [];
  let current = root;
  let stack = [];
  let dir = 0;
  while (current) {
    if (current.left && current.right && dir == 0) {
      stack.push(current);
    }
    if (dir == 0) {
      result.push(current.val);
      if (current.left) {
        current = current.left;
      } else if (current.right) {
        current = current.right;
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
      if (current.right) {
        current = current.right;
      }
    }
  }
  return result;
};