var countBits = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    let binary = binaryConvert(i, false)
      .split("")
      .map((item) => parseInt(item));
    result[i] = 0;
    for (num in binary) {
      result[i] += binary[num];
    }
  }
  return result;
};
function binaryConvert(val, md) {
  if (md) {
    let current = 1;
    let result = 0;
    for (let i = val.length - 1; i >= 0; i--) {
      result += val[i] * current;
      current *= 2;
    }
    return result;
  } else {
    let result = "";
    for (let i = 0; i <= 1000000; i++) {
      result += String(val % 2);
      if (val % 2 == 1) {
        val = (val - 1) / 2;
      } else {
        val = val / 2;
      }
      if (val == 1) {
        result += "1";
        break;
      } else if (val == 0) {
        break;
      }
    }
    return result.split("").reverse().join("");
  }
}
