/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums,arr=[],res=[]) {
    if(nums.length ===0 ) res.push([...arr]);

    for(let i=0;i<nums.length;i++){
        let rest = nums.filter((n,index) => index !== i)
        arr.push(nums[i])
        permute(rest,arr,res)

        arr.pop()
    }
    return res
};