/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIdx = new Array(26).fill(-1)

    const result = []

    for(let i=0;i<s.length;i++){
        lastIdx[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i
    }

    let start = 0
    let end =0


    for(let i =0;i<s.length ;i++){
        end = Math.max(end,lastIdx[s.charCodeAt(i) - 'a'.charCodeAt(0)])


        if(i=== end){
            result.push(end-start +1)
            start = i+1
        }
    }
    return result
};