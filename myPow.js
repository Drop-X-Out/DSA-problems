/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1
    if(n<0) return 1/myPow(x,-n)

    let result = 1

    while(n>0){
        if(n% 2=== 1){
            result *=x
        }
        x *= x
        n = Math.floor(n/2)
    }
    return result
};