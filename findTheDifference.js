var findTheDifference = function (s, t) {
  let tarr = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (tarr.includes(s[i])) {
      tarr.splice(tarr.indexOf(s[i]), 1);
    }
  }
  return tarr.join("");
};
