var addBinary = function (a, b) {
  a = binaryConvert(a, true);
  b = binaryConvert(b, true);
  let c = a + b;
  return binaryConvert(c, false);
};
function binaryConvert(val, md) {
  if (md) {
    let current = 1n;
    let result = 0n;
    for (let i = val.length - 1; i >= 0; i--) {
      result += BigInt(val[i]) * current;
      current *= 2n;
    }
    return result;
  } else {
    let result = "";
    for (let i = 0n; i <= 1000000n; i++) {
      result += String((val % 2n))
      if (val % 2n == 1n) {
        val = (val - 1n) / 2n;
      } else {
        val = val / 2n;
      }
      if (val == 1n) {
        result += "1";
        break;
      } else if (val == 0n) {
        break;
      }
    }
    return result.split("").reverse().join("");
  }
}