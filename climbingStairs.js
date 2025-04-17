var climbStairs = function(n) {
  let result = 0;
  for (let i = 0; i <= n/2; i++) {
    result += combination(n - i, i);
  }
  return result;
};
function combination(a, b) {
  let result = factorial(a) / (factorial(b) * factorial(a - b));
  return result;
}
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}