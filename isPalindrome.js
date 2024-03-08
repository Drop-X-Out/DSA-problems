/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    return cleanedS === cleanedS.split('').reverse().join('')
};