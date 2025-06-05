var convertToTitle = function(columnNumber) {
  let result = "";
  while (true) {
    let char = columnNumber % 26;
    if (char === 0) {
      char = 26;
    }
    result += String.fromCharCode(64 + char);
    if (columnNumber % 26 == 0) {
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnNumber = Math.floor(columnNumber / 26);
    }
    if (columnNumber <= 0) {
      break;
    }
  }
  return result.split("").reverse().join("");
};