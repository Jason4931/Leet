var guess = function (num) {};

var guessNumber = function (n) {
  let far = true;
  let last;
  while (true) {
    switch (guess(n)) {
      case -1:
        !last ? (last = -1) : last == 1 && (far = false);
        far ? (n -= 10) : (n -= 1);
        break;
      case 1:
        !last ? (last = 1) : last == -1 && (far = false);
        far ? (n += 10) : (n += 1);
        break;
      case 0:
        return n;
    }
  }
};
