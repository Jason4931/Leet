var addDigits = function (num) {
  let sum = num;
  while (true) {
    strnum = sum.toString();
    arrnum = strnum.split('').map(Number);
    sum = 0;
    for (let i = 0; i < arrnum.length; i++) {
      sum += arrnum[i];
    }
    if (sum < 10) {
      return sum;
    }
  }
};