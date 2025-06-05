class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var minDepth = function (root) {
  if (!root) return 0;
  let result = Number.MAX_SAFE_INTEGER;
  let min = 0;
  let current = root;
  let stack = [];
  let dir = 0;
  while (current) {
    if (current.left && current.right && dir == 0) {
      stack.push([current, min])
    }
    min++;
    if (!current.left && !current.right) { 
      if (min < result) { 
        result = min;
      } 
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
          min = popped[1];
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