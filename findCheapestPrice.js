
function findCheapestPrice(n, flights, src, dst, k) {
    const adjacencyList = new Map();

    // Step 1: Construct the adjacency list representation of the graph
    for (const [from, to, price] of flights) {
        if (!adjacencyList.has(from)) {
            adjacencyList.set(from, []);
        }
        adjacencyList.get(from).push([to, price]);
    }

    const pq = new PriorityQueue();
    pq.enqueue([src, 0, 0]); // [city, cost, stops]

    // Step 4: Dijkstra's algorithm with modified priority queue
    while (!pq.isEmpty()) {
        const [city, cost, stops] = pq.dequeue();

        if (city === dst) {
            return cost; // Reached the destination city
        }

        if (stops > k) {
            continue; // Exceeded maximum stops
        }

        if (adjacencyList.has(city)) {
            for (const [nextCity, nextCost] of adjacencyList.get(city)) {
                pq.enqueue([nextCity, cost + nextCost, stops + 1]);
            }
        }
    }

    return -1; // Destination not reached within k stops
}

// Test the function
const n = 4;
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]];
const src = 0;
const dst = 3;
const k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k)); // Output: 700
