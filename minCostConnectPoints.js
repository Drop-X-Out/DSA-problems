function dis(point1, point2) {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

function minCostConnectPoints(points) {
    const n = points.length;
    const visited = new Array(n).fill(0);
    const minCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let currpoint = 0;
    minCost[0] = 0;
    let ans = 0;

    while (currpoint >= 0) {
        visited[currpoint] = 1;
        let nextpoint = -1;
        let mincurr = Number.MAX_SAFE_INTEGER;

        for (let point = 0; point < n; point++) {
            if (visited[point] || currpoint === point) {
                continue;
            }
            minCost[point] = Math.min(dis(points[currpoint], points[point]), minCost[point]);
            if (minCost[point] < mincurr) {
                mincurr = minCost[point];
                nextpoint = point;
            }
        }

        if (mincurr === Number.MAX_SAFE_INTEGER) {
            ans += 0;
        } else {
            ans += mincurr;
        }

        currpoint = nextpoint;
    }

    return ans;
}

// Test the function
const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
console.log(minCostConnectPoints(points)); // Output: 20
