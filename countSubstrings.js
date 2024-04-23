/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    

    let count =0;

    function countPalindromes(left,right){
        palindrome = 0;
        while(left >=0 && right < s.length && s[left] === s[right]) {
            palindrome ++
            left--
            right++
        }
        return palindrome
    }

    for(let i =0;i<s.length ;i++){
        count+= countPalindromes(i,i)
        count+= countPalindromes(i,i+1)
    }
    return count
};