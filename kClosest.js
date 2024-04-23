/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = points.map(([x,y]) => [x,y,Math.sqrt(x **2 + y **2)])

    distances.sort((a,b) => a[2] - b[2])

    return distances.slice(0,k).map(([x,y]) => [x,y])
};