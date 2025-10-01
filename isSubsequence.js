var isSubsequence = function (s, t) {
  let tarr = t.split("");
  let currentidx = 0;
  let result = [];
  for (let i = 0; i < tarr.length; i++) {
    if (tarr[i] == s[currentidx]) {
      result.push(tarr[i]);
      currentidx++;
    }
  }
  if (result.join("") == s) {
    return true;
  }
  return false;
};
