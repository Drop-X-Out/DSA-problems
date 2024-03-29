var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    // If no solution found, return empty array
    return [];
};

// Example usage:
const numbers1 = [2,7,11,15];
const target1 = 9;
console.log(twoSum(numbers1, target1)); // Output: [1, 2]

const numbers2 = [2,3,4];
const target2 = 6;
console.log(twoSum(numbers2, target2)); // Output: [1, 3]

const numbers3 = [-1,0];
const target3 = -1;
console.log(twoSum(numbers3, target3)); // Output: [1, 2]
