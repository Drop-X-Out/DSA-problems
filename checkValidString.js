/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0
    let maxOpen =0

    for(let char of s){
        if(char === '('){
            minOpen++
            maxOpen++
        }else if(char === ')'){
            minOpen = Math.max(minOpen-1,0)
            maxOpen--
        }else{
            minOpen = Math.max(minOpen-1,0)
            maxOpen++
        }
        if(maxOpen < 0) return false
    }
    return minOpen === 0
};