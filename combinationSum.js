/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []

    function dfs(index,currentVal,arr){
        if(currentVal<0) return
        if(currentVal === 0){
            result.push([...arr])
        }
        for(let i =index;i<candidates.length;i++){
            arr.push(candidates[i])
            dfs(i,currentVal-candidates[i],arr)
            arr.pop()
        }
    }
    dfs(0,target,[])

    return result
};