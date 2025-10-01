var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (true) {
    if (n == 1) {
      return true;
    } else if (n < 1) {
      return false;
    }
    n /= 3;
  }
};
