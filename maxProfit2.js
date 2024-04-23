var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    const n = prices.length;
    const buy = new Array(n).fill(0);
    const sell = new Array(n).fill(0);
    const cooldown = new Array(n).fill(0);
    
    buy[0] = -prices[0];
    sell[0] = 0;
    cooldown[0] = 0;
    
    for (let i = 1; i < n; i++) {
        buy[i] = Math.max(buy[i - 1], cooldown[i - 1] - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
        cooldown[i] = Math.max(cooldown[i - 1], sell[i - 1]);
    }
    
    return Math.max(sell[n - 1], cooldown[n - 1]);
};
