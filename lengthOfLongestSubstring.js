/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let maxLength = 0;
    let left = 0;
    let right = 0;
    const set = new Set();

    while(right < n){
        if(!set.has(s[right])){
            set.add(s[right])
            maxLength = Math.max(maxLength,right - left +1);
            right ++
        } else{
            set.delete(s[left])
            left++
        }
    }
    return maxLength
};