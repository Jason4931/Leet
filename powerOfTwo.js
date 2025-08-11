var isPowerOfTwo = function(n) {
  while (true) {
    if (n == 1) {
      return true;
    } else if (n < 1) {
      return false;
    }
    n /= 2;
  }
};