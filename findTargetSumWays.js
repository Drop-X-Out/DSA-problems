/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const cache = new Map();

    function dp(index,sum){
        if(index === nums.length){
            return sum === target ? 1 : 0
        }

        const key = index + ',' + sum;
        if(cache.has(key)){
            return cache.get(key)
        }

        const ways = dp(index+1,sum+nums[index]) + dp(index+1,sum-nums[index])

        cache.set(key,ways)

        return ways
    }

    return dp(0,0)
};