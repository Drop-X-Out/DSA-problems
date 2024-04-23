/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(!matrix || matrix.length === 0) return 0

    const rows = matrix.length
    const cols = matrix[0].length
    const directions = [[0,1],[0,-1],[1,0],[-1,0]]

    let maxPath = 0

    const dp = new Array(rows).fill(0).map(()=> new Array(cols).fill(0))

    function dfs(i,j){
        if(dp[i][j] !== 0) return dp[i][j]

        let max = 1

        for(const [dx,dy] of directions){
            const x = i + dx;
            const y = j + dy;

            if(x>=0 && x < rows && y>=0 && y<cols && matrix[x][y] > matrix[i][j]){
                max = Math.max(max,1+dfs(x,y))
            }
        }
        dp[i][j] = max
        return max
    }

    for(let i =0;i<rows;i++){
        for(let j=0;j<cols;j++){
            maxPath = Math.max(maxPath,dfs(i,j))
        }
    }

    return maxPath
};