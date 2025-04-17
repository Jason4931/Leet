var mySqrt = function (x) {
  let result = 0;
  while (true) {
    if (x < (result*result)) {
      return (result-1);
    }
    result++;
  }
};