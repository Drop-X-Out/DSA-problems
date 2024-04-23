/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    const dp = new Array(n+1).fill(0)

    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i=2;i<=n;i++){
        dp[i] = Math.min(dp[i-1],dp[i-2] ) + ( i < n ? cost[i] : 0 )
    }
    return Math.min(dp[n-1],dp[n])
};