/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    const m = grid.length
    const n = grid[0].length
    let freshOrange = 0;
    let queue = []

    for(let i =0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                freshOrange++
            } else if(grid[i][j] === 2){
                queue.push([i,j])
            }
        }
    }

    let minutes = 0;

    while(queue.length>0 && freshOrange >0){
        const nextQueue = []

        for(const [x,y] of queue) {
            for(const [dx,dy] of directions){
                const newX = x+dx
                const newY = y+dy

                if(newX >=0 && newX<m && newY >=0 && newY<n && grid[newX][newY] ===1){
                    grid[newX][newY] = 2;
                    freshOrange--
                    nextQueue.push([newX,newY])
                }
            }
        }
        minutes++
        queue = nextQueue
    }

    return freshOrange === 0 ? minutes : -1
};