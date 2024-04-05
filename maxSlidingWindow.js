/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let output =[]
    let deque = [];

    let r =0;

    while(r<nums.length){

        while(deque.length && nums[deque[deque.length -1]] < nums[r]){
            deque.pop();
        }
        deque.push(r);

        if(deque[0] < r-k+1){
            deque.shift();
        }

        if(r+1 >= k){
            output.push(nums[deque[0]])
        }
    r++

    }
    return output
};