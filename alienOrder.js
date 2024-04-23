function alienOrder(words) {
    // Step 1: Build graph
    const graph = new Map();
    const indegree = new Map();

    for (const word of words) {
        for (const char of word) {
            graph.set(char, new Set());
            indegree.set(char, 0);
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        let found = false;
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            const char1 = word1[j];
            const char2 = word2[j];
            if (char1 !== char2) {
                if (!graph.get(char1).has(char2)) {
                    graph.get(char1).add(char2);
                    indegree.set(char2, indegree.get(char2) + 1);
                }
                found = true;
                break;
            }
        }
        if (!found && word1.length > word2.length) return ""; // Invalid ordering
    }

    // Step 2: Topological sort
    const result = [];
    const queue = [];
    indegree.forEach((value, key) => {
        if (value === 0) queue.push(key);
    });

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        for (const neighbor of graph.get(node)) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) queue.push(neighbor);
        }
    }

    if (result.length < indegree.size) return ""; // Cycle detected, invalid ordering

    return result.join("");
}

// Example usage:
const words = ["wrt","wrf","er","ett","rftt"];
console.log(alienOrder(words)); // Output: "wertf"
