var isIsomorphic = function(s, t) {
  let arr = [];
  s = s.split("");
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (!arr[s[i]]) {
      arr[s[i]] = t[i];
    } else if (arr[s[i]] != t[i]) {
      return false;
    }
  }
  const values = Object.values(arr);
  const counts = {};
  for (const val of values) {
    counts[val] = (counts[val] || 0) + 1;
  }
  if (Object.values(counts).some(count => count >= 2)) {
    return false;
  }
  return true;
};