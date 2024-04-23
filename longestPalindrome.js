/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ""

    function isPal(s,left,right){
        while(left >=0 && right < s.length && s[left] === s[right]){
          left --
          right ++  
        }
        return s.slice(left+1,right)
    }
    for(let i=0;i<s.length ;i++){
       let oddPal= isPal(s,i,i)
       let evenPal = isPal(s,i,i+1)

       let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal

       if(longestPal.length > longest.length){
        longest = longestPal
       }
    }
    return longest
};