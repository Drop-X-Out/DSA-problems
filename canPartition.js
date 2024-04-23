/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((acc,num) => acc+num,0)

    if(totalSum % 2 !== 0){
        return false
    }

    const targetSum = totalSum/2;
    const n = nums.length

    const dp = new Array(targetSum +1).fill(false)
    dp[0]= true

    for(const num of nums){
        for(let j = targetSum;j>= num ; j--){
            dp[j] = dp[j] || dp[j-num]
        }
    }
    return dp[targetSum]
};