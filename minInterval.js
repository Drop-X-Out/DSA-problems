
/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    // Sort intervals by their left endpoints
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Initialize a priority queue to store intervals sorted by their sizes
    const pq = new PriorityQueue((a, b) => a[1] - a[0] - (b[1] - b[0]));
    
    // Convert intervals to [start, end] format and add them to the priority queue
    for (const [start, end] of intervals) {
        pq.enqueue([start, end]);
    }
    
    const results = [];
    
    // Iterate through each query
    for (const query of queries) {
        let smallestInterval = null;
        
        // Pop intervals from the priority queue until we find one that contains the query value
        while (!pq.isEmpty() && (smallestInterval === null || smallestInterval[1] < query)) {
            smallestInterval = pq.dequeue();
        }
        
        if (smallestInterval === null || smallestInterval[0] > query) {
            // No interval contains the query value
            results.push(-1);
        } else {
            // Calculate the size of the smallest interval containing the query value
            results.push(smallestInterval[1] - smallestInterval[0] + 1);
        }
    }
    
    return results;
};
