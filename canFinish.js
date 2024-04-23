var canFinish = function(numCourses, prerequisites) {
    let adjList = {}
    let visited = new Set();

    for(let [a,b] of prerequisites){
        if(!adjList[a]){
            adjList[a] = [b]
        }else{
            adjList[a].push(b)
        }
    }

    function dfs(curr){
        if(visited.has(curr)) return false

        if(adjList[curr] === []) return true

        visited.add(curr)

        if(adjList[curr]){
            for(let neigh of adjList[curr]){
                if(!dfs(neigh)){
                    return false
                }
            }
        }

        visited.delete(curr)
        adjList[curr] = []
        return true
    }

    for(let key in adjList){
        if(!dfs(key)){
            return false
        }
    }
    return true;
};
