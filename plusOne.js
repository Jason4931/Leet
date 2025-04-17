var plusOne = function (digits) {
  let number = BigInt(digits.join('')) + 1n;
  return number.toString().split('').map(Number);
};