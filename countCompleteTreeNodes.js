function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var countNodes = function (root) {
  let result = 0;
  let current = root;
  let stack = [];
  let dir = 0;
  while (current) {
    result++;
    if (current.left && current.right && dir == 0) {
      stack.push(current)
    }
    if (dir == 0) {
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
        result--;
        current = current.right;
      }
    }
  }
  return result;
};