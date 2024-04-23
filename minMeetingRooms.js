class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.heap.pop();

        const minVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minVal;
    }

    heapifyUp() {
        let currentIndex = this.size() - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex === currentIndex) break;

            this.swap(currentIndex, smallestChildIndex);
            currentIndex = smallestChildIndex;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals based on start time
    const minHeap = new MinHeap();
    
    for (const interval of intervals) {
        const [start, end] = interval;
        
        if (!minHeap.isEmpty() && minHeap.heap[0] <= start) {
            // If the earliest ending meeting has already ended, remove it from the min heap
            minHeap.pop();
        }
        
        // Add the current meeting's end time to the min heap
        minHeap.push(end);
    }
    
    return minHeap.size(); // The size of the min heap indicates the number of rooms needed
};

// Example usage:
const intervals1 = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals1)); // Output: 2

const intervals2 = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals2)); // Output: 1
