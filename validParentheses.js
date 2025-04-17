var isValid = function(s) {
  let stack = [];
  let pairs = { ')': '(', ']': '[', '}': '{' };
  for (let char of s) {
    if (char in pairs) { 
      if (stack.length == 0 || stack.pop() != pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
};