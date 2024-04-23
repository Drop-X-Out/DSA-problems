var maxCoins = function(nums) {
    const n = nums.length;
    nums.unshift(1);
    nums.push(1);
    
    const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

    function dfs(left, right) {
        if (left > right) return 0;
        if (dp[left][right] > 0) return dp[left][right];
        
        let maxCoins = 0;
        for (let k = left; k <= right; k++) {
            const coins = nums[left - 1] * nums[k] * nums[right + 1];
            const leftCoins = dfs(left, k - 1);
            const rightCoins = dfs(k + 1, right);
            maxCoins = Math.max(maxCoins, coins + leftCoins + rightCoins);
        }
        
        dp[left][right] = maxCoins;
        return maxCoins;
    }
    
    return dfs(1, n);
};
