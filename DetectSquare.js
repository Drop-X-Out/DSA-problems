var DetectSquares = function() {
    this.points = {}; // Object to store points as key-value pairs
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;
    const key = `${x},${y}`; // Generating a unique key for each point
    this.points[key] = (this.points[key] || 0) + 1; // Incrementing the frequency of the point
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [x1, y1] = point;
    let count = 0;
    for (const key in this.points) {
        const [x2, y2] = key.split(',').map(Number); // Extracting x and y coordinates from the key
        if (x1 !== x2 && y1 !== y2 && Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
            // If the points are not on the same axis and form a square
            const key2 = `${x1},${y2}`; // Generating the key for the opposite corner of the square
            const key3 = `${x2},${y1}`; // Generating the key for the opposite corner of the square
            count += (this.points[key] || 0) * (this.points[key2] || 0) * (this.points[key3] || 0);
            // Multiplying the frequencies of the points to get the count
        }
    }
    return count;
};

// Usage
var obj = new DetectSquares();
obj.add([3, 10]);
obj.add([11, 2]);
obj.add([3, 2]);
console.log(obj.count([11, 10])); // Output: 1
console.log(obj.count([14, 8]));  // Output: 0
obj.add([11, 2]);
console.log(obj.count([11, 10])); // Output: 2
