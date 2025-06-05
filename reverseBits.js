var reverseBits = function (n) {
  let digits = BigInt(n)
    .toString(2)
    .padStart(32, '0')
    .split('')
    .reverse();
  let arr = digits.map(Number)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * Math.pow(2, arr.length - i - 1);
  }
  return sum >>> 0;
};