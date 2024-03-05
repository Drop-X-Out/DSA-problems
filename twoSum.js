/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function add(nums, target) {
    const numSet = new Set(); // Set to store numbers

    for(let i=0;i<nums.length;i++){
        const complement = target - nums[i];

        if(numSet.has(complement)){
            const complementIndex = nums.indexOf(complement);
            return [complementIndex,i]
        }

        numSet.add(nums[i]);
    }

    return []
};

//Test Cases

const nums1 = [2,7,11,15] ,target1 = 9;
const nums2 = [3,2,4], target2 = 6;
const nums3 = [3,3], target3 = 6;


console.log(twoSum(nums1,target1))
console.log(twoSum(nums2,target2))
console.log(twoSum(nums3,target3))