var reverseVowels = function (s) {
  let vowel = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(s[i])) {
      vowel.push(s[i]);
      result += "*";
    } else {
      result += s[i];
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] == "*") {
      result =
        result.slice(0, i) + vowel.pop() + result.slice(i + 1, result.length);
    }
  }
  return result;
};
