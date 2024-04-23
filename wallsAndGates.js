var wallsAndGates = function(rooms) {
    if (!rooms || rooms.length === 0 || rooms[0].length === 0) return;

    const m = rooms.length;
    const n = rooms[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const queue = [];

    // Add all gates to the queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new position is within bounds and an empty room
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && rooms[newX][newY] === 2147483647) {
                rooms[newX][newY] = rooms[x][y] + 1; // Update the distance
                queue.push([newX, newY]); // Add the new position to the queue for further exploration
            }
        }
    }
};
