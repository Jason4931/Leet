var solution = function (isBadVersion) {
  let i = 1;
  let found = false;
  let firstBadVer;
  while (true) {
    if (!found) {
      if (isBadVersion(i) == false) {
        i += 10;
        continue;
      } else {
        i -= 9;
        found = true;
        continue;
      }
    } else {
      if (isBadVersion(i) == false) {
        i++;
        continue;
      } else {
        firstBadVer = i;
        break;
      }
    }
  }
  return function (n) {
    if (n >= firstBadVer) {
      return firstBadVer;
    } else {
      return 0;
    }
  };
};
