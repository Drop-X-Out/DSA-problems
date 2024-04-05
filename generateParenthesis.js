/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result =[];

    const backtrack = (open,close,str)=>{
        if(str.length === 2 *n){
            result.push(str)
            return
        }

        if(open<n){
            backtrack(open+1,close,str+'(')
        }
        if(open>close){
            backtrack(open,close+1,str+')')
        }
    }

    backtrack(0,0,"")

    return result
};