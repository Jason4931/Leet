var longestCommonPrefix = function (strs) {
  let array = [];
  for (let i = 0; i < strs.length; i++) {
    let string = [];
    for (let j = 0; j < strs[i].length; j++) {
      string.push(strs[i][j]);
    }
    array.push(string);
  }
  let breaks = false;
  let result = "";
  for (let j = 0; j < array[0].length; j++) {
    if (breaks) {
      break;
    }
    for (let i = 1; i < array.length; i++) {
      if (array[0][j] != array[i][j]) {
        breaks = true;
        break;
      }
    }
    if (breaks) {
      break;
    }
    result += array[0][j];
  }
  return result;
};