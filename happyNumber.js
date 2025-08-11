var isHappy = function (n) {
  let i = 0;
  while (true) {
    let arr = n.toString().split('').map(Number);
    let count = 0;
    arr.forEach(e => {
      count += e ** 2;
    });
    n = count;
    if (count == 1) {
      return true;
    }
    i++;
    if (i >= 7) {
      return false;
    }
  }
};