var isPalindrome = function(x) {
  let str_x = x.toString();
  let reverse_x = "";
  for(let i=str_x.length-1; i>=0; i--) {
    reverse_x += str_x[i]
  }
  if(parseInt(str_x) == parseInt(reverse_x)) {
    return true;
  } else {
    return false;
  }
};