var hammingWeight = function (n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 2);
    n = Math.floor(n / 2);
  }
  let sum = 0;
  arr.forEach(e => {
    sum += e;
  });
  return sum;
};