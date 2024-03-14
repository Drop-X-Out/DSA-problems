/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const n= s.length;
    let maxLength = 0;
    let maxCount = 0;
    let left = 0;
    const charCounts = new Map();

    for(let right =0;right<n;right++){
        const char = s[right];
        charCounts.set(char,(charCounts.get(char) || 0) +1);
        maxCount = Math.max(maxCount,charCounts.get(char));

        if(right-left +1 - maxCount > k){
            const leftChar = s[left];
            charCounts.set(leftChar,charCounts.get(leftChar) -1);
            left++;
        }
        maxLength = Math.max(maxLength,right-left +1)
    }

    return maxLength
};