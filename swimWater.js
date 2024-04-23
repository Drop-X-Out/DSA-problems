/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length
    let low = 0;
    let high = n * n -1


    function bfs(time){
        const directions = [[-1,0],[1,0],[0,-1],[0,1]]
        const visited = Array(n).fill().map(()=> Array(n).fill(false))
        const queue = [[0,0]]
        visited[0][0] = true


        while (queue.length > 0){
            const [x,y] = queue.shift()
            if(x === n-1 && y === n-1) return true
            for(const [dx,dy] of directions){
                const nx = x + dx;
                const ny = y + dy;

                if(nx>=0 && nx < n && ny <n && !visited[nx][ny] && grid[nx][ny] <= time){
                    visited[nx][ny] = true;
                    queue.push([nx,ny])
                }
            }
        }
        return false
    }

    while(low<high){
        const mid = Math.floor((low+high) / 2)
        if(bfs(mid)){
            high = mid
        }
        else{
            low = mid + 1;
        }
    }
    return high
};