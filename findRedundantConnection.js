/**
 * @param {number[][]} edges
 * @return {number[]}
 */

class UnionFind{
    constructor(n){
        this.parent = Array.from({length:n+1},(_,i)=>i)
        this.rank = new Array(n+1).fill(0)
    }

    find(x){
        if(this.parent[x] !== x){
            this.parent[x] = this.find(this.parent[x])

        }
        return this.parent[x]
    }

    union(x,y){
        let rootX = this.find(x);
        let rootY = this.find(y);

        if(rootX === rootY){
            return false
        }

        if(this.rank[rootX] < this.rank[rootY]){
            this.parent[rootX] = rootY
        }else if(this.rank[rootX] > this.rank[rootY]){
            this.parent[rootY] = rootX
        }else{
            this.parent[rootY] = rootX
            this.rank[rootX]++
        }
        return true
    }
 }
var findRedundantConnection = function(edges) {
    const uf = new UnionFind(edges.length)

    for(let edge of edges){
        let x = edge[0]
        let y = edge[1]

        if(!uf.union(x,y)){
            return edge
        }
    }

    return []
};