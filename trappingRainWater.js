/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length === 0){
        return 0;
    }

    const n = height.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    rightMax[n-1] = height[n-1];

    for(let i =1; i<n ;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }

    for(let i = n-2;i >= 0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }

    let waterTrapped =0 ;
    for(let i=0;i<n ;i++){
        waterTrapped += Math.min(leftMax[i],rightMax[i]) - height[i];
    }

    return waterTrapped
};