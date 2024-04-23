/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps=0
    let maxReach = 0
    let lastJump = 0

    for(let i=0;i<nums.length -1;i++){
        maxReach = Math.max(maxReach,i+nums[i])
        if(i=== lastJump){
            steps++
            lastJump = maxReach
        }
    }
    return steps
};