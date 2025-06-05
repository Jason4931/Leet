var maxProfit = function(prices) {
  let maxFuturePrice = 0;
  let profit = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    maxFuturePrice = Math.max(maxFuturePrice, prices[i]);
    profit = Math.max(profit, maxFuturePrice - prices[i]);
  }
  return profit;
};