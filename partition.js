/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []

    const dfs = (i,s,slate) => {

        if(i=== s.length){
            result.push(slate.slice())
            return;
        }

        for(let j=i;j<s.length;j++){
            if(isPalindrome(s,i,j)){
                slate.push(s.slice(i,j+1))
                dfs(j+1,s,slate)
                slate.pop()
            }
        }
    }
    dfs(0,s,[])
    return result
};

const isPalindrome = (s,start,end) => {
    while(start<end){
        if(s[start] !== s[end]) return false
        start ++
        end --
    }
    return true
}