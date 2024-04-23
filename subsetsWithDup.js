/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = []
    nums.sort((a,b) =>a-b)
    

    const dfs =  (i,nums,slate)=>{
        if(i===nums.length){
            result.push(slate.slice())
            return
        }

        dfs(i+1,nums,slate)
        slate.push(nums[i])
        dfs(i+1,nums,slate)
        slate.pop();
    }
    dfs(0,nums,[])
    const hash = {}
    for(let el of result){
        if(hash[el]) continue
        hash[el] = el
    }

    return Object.values(hash)
};