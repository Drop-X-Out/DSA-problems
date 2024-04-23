/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // Initialize max and min products
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Store the current maximum product so far
        const tempMax = maxProd;
        
        // Update the maximum product considering both positive and negative cases
        maxProd = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd);
        
        // Update the minimum product considering both positive and negative cases
        minProd = Math.min(nums[i], nums[i] * tempMax, nums[i] * minProd);
        
        // Update the overall maximum product
        result = Math.max(result, maxProd);
    }
    
    return result;
};
