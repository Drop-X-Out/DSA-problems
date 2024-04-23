/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length
    const n = num2.length
    const product = Array(m+n).fill(0)

    for(let i =m-1;i>=0;i--){
        for(let j =n-1;j>=0;j--){
            const mul = (num1[i] - '0') * (num2[j] - '0')
            const sum = mul + product[i+j+1]
            product[i+j] += Math.floor(sum/10)
            product[i+j+1] = sum % 10
        }
    }

    let result = ''
    for(let digit of product){
        if(!(result.length === 0 && digit === 0)){
            result += digit
        }
    }
    return result.length === 0 ? '0' : result
};