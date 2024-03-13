/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max =0;
    let left = 0;
    let right = height.length -1;

    while(left < right){
        const width = right - left;
        const currentHeight = Math.min(height[left],height[right]);
        const area = width * currentHeight;
        max = Math.max(max,area)

        if(height[left] < height[right]){
            left++
        }
        else{
            right --;
        }
    }
    return max
};