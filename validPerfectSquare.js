var isPerfectSquare = function (num) {
  i = 0;
  while (true) {
    if (i * i > num) {
      return false;
    }
    if (i * i == num) {
      return true;
    }
    i++;
  }
};
