var isAnagram = function(s, t) {
  let stack = s.split('');
  let count = [];
  for (let char of stack) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  for (let char in count) {
    if (count[char] != 0) {
      return false;
    }
  }
  return true;
};