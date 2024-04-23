/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const adjacencyList = new Array(n).fill().map(()=>[])
    for(const [u,v] of edges){
        adjacencyList[u].push(v);
        adjacencyList[v].push(u)
    }

    const visited = new Set();

    function dfs(node){
        visited.add(node);
        for(const neighbor of adjacencyList[node]){
            if(!visited.has(neighbor)){
                dfs(neighbor)
            }
        }
    }

    let components = 0;
    for(let i=0;i<n;i++){
        if(!visited.has(i)){
            dfs(i);
            components++
        }
    }
    return components
};