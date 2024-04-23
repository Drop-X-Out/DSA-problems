/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null

    const visited = new Map();

    const dfs = (originalNode) => {
        if(visited.has(originalNode.val)) return visited.get(originalNode.val)

        const cloneNode= new Node(originalNode.val)
        visited.set(cloneNode.val,cloneNode)

        for(let neighbor of originalNode.neighbors){
            cloneNode.neighbors.push(dfs(neighbor))
        }

        return cloneNode
    }

    return dfs(node)
};