var titleToNumber = function(columnTitle) {
  let arr = columnTitle.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += (arr[i].charCodeAt(0) - 64)*Math.pow(26, arr.length - 1 - i);
  }
  return result;
};