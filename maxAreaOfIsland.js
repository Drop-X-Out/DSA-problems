/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0) return 0

    const rows = grid.length
    const cols = grid[0].length;
    let maxArea = 0

    const dfs = (i,j) => {
        if(i<0 || i>=rows || j<0 || j>= cols || grid[i][j] === 0) return 0

        grid[i][j] = 0

        let area = 1;
        area+= dfs(i+1,j)
        area+= dfs(i-1,j)
        area+= dfs(i,j+1)
        area+= dfs(i,j-1)

        return area
    }

    for(let i = 0; i< rows; i++){
        for(let j =0;j<cols;j++){
            if(grid[i][j] === 1){
                maxArea = Math.max(maxArea,dfs(i,j))
            }
        }
    }

    return maxArea
};