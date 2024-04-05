/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const stack = []
    const prev = new Array(n).fill(-1)
    const next = new Array(n).fill(n)

    let maxArea = 0;

    for(let i =0;i<n;i++){
        while(stack.length >0 && heights[stack[stack.length -1]] > heights[i]){
            next[stack.pop()] = i
        }
        stack.push(i);
    }

    stack.length = 0;

    for(let i =n-1;i>=0;i--){
        while(stack.length >0 && heights[stack[stack.length -1]] > heights[i]){
            prev[stack.pop()] = i
        }
        stack.push(i);
    }

    for(let i=0;i<n;i++){
        maxArea = Math.max(maxArea,heights[i] * (next[i] - prev[i] -1))
    }

    return maxArea;
};