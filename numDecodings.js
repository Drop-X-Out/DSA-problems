/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length

    if(n===0) return 0

    const dp = new Array(n+1).fill(0)

    dp[0] = 1

    for(let i =1;i<=n;i++){
        if(s[i-1] !== '0'){
            dp[i] += dp[i-1]
        }
        if(i > 1 && s[i-2] !== '0' && parseInt(s.substring(i-2,i)) <=26){
            dp[i] += dp[i-2]
        }
    }
    return dp[n]
};