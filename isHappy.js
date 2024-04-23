/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNextNumber(num){
        let sum=0;
        while(num>0){
            const digit = num % 10
            sum +=digit*digit
            num = Math.floor(num/10)
        }
        return sum
    }

    let slow =n
    let fast = getNextNumber(n)

    while(fast!==1 && slow!==fast){
        slow = getNextNumber(slow)
        fast= getNextNumber(getNextNumber(fast))
    }

    return fast ===1
};