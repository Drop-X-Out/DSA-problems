class MaxHeap {
    constructor() {
        this.heap = [];
    }

    offer(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    poll() {
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;
            if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest !== index) {
                [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
                index = largest;
            } else {
                break;
            }
        }
    }
}


var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap()

    for (const stone of stones){
        maxHeap.offer(stone)
    }

    while(maxHeap.size() >= 2){
        const y = maxHeap.poll();
        const x = maxHeap.poll();

        if(x !== y){
            maxHeap.offer(y-x)
        }
    }

    return maxHeap.size() === 1 ? maxHeap.peek() : 0
};





