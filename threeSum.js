/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)

    const res = []

    for(let i = 0 ; i<nums.length;i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue
        }


        let l = i+1
        let r= nums.length-1

        while(l < r){
            const sum = nums[i] + nums[l] + nums[r]

            if(sum>0){
                r--
            }
            if(sum < 0){
                l++
            }
            if(sum === 0){
                res.push([nums[i] , nums[l] , nums[r]])
                l++;
                while(nums[l] == nums[l-1] && l<r){
                    l++
                }
            }
        }
    }
    return res
};