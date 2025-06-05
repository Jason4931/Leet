var isPalindrome = function (s) {
  let word = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < word.length/2; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};