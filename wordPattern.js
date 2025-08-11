var wordPattern = function (pattern, s) {
  let patterns = pattern.split("");
  let strings = s.split(" ");
  if (patterns.length != strings.length) {
    return false;
  }
  let match = {};
  for (let i = 0; i < patterns.length; i++) {
    if (match[patterns[i]]) {
      if (match[patterns[i]] != strings[i]) {
        return false;
      }
    } else {
      if (Object.values(match).includes(strings[i])) {
        return false;
      }
      match[patterns[i]] = strings[i];
    }
  }
  return true;
};
