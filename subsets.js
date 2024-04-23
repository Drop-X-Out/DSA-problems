/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result =[[]]

    function dfs(index,current){
        for(let i=index;i<nums.length;i++){
            current.push(nums[i]);
            result.push([...current])

            dfs(i+1,current)

            current.pop()
        }
    }
    dfs(0,[])
    return result
};