class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.sort();
    }
  
    dequeue() {
      if (this.isEmpty()) return null;
      return this.queue.shift().element;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    sort() {
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  }
  
  const networkDelayTime = (times, n, k) => {
    const graph = new Map();
    
    // Create adjacency list representation of the graph
    for (const [u, v, w] of times) {
      if (!graph.has(u)) {
        graph.set(u, []);
      }
      graph.get(u).push({ node: v, weight: w });
    }
  
    // Initialize distance array with Infinity
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
  
    const pq = new PriorityQueue();
    pq.enqueue(k, 0);
  
    while (!pq.isEmpty()) {
      const u = pq.dequeue();
      if (graph.has(u)) {
        for (const { node, weight } of graph.get(u)) {
          const newDist = dist[u] + weight;
          if (newDist < dist[node]) {
            dist[node] = newDist;
            pq.enqueue(node, newDist);
          }
        }
      }
    }
  
    // Find the maximum distance
    let maxDistance = 0;
    for (let i = 1; i <= n; i++) {
      maxDistance = Math.max(maxDistance, dist[i]);
    }
  
    return maxDistance === Infinity ? -1 : maxDistance;
  };
  
  // Example usage
  const times = [[2,1,1],[2,3,1],[3,4,1]];
  const n = 4;
  const k = 2;
  console.log(networkDelayTime(times, n, k)); // Output: 2
  