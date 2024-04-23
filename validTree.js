/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const adjacencyList = new Array(n).fill().map(()=>[])
    for(const [u,v] of edges){
        adjacencyList[u].push(v)
        adjacencyList[v].push(u)
    }

    const visited  = new Set();

    function hasCycle(node,parent){
        visited.add(node)
        for(const neighbor of adjacencyList[node]){
            if(!visited.has(neighbor)){
                if(hasCycle(neighbor,node)){
                    return true;
                }
            }else if(neighbor !== parent){
                return true
            }
        }
        return false
    }

    if(hasCycle(0,-1)){
        return false
    }

    return visited.size === n
};