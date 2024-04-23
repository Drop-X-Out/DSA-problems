class KthLargest{
    constructor(k,nums){
        this.k = k;
        this.q = new MinHeap(k);
        for(const n of nums){
                this.add(n)
        }
         
    }


add(n){
    if(this.q.size() < this.k){
        this.q.offer(n)
    }else if(this.q.peek() < n){
        this.q.poll()
        this.q.offer(n)
    }
    return this.q.peek()
}
}

class MinHeap {
    constructor(capacity) {
        this.heap = [];
        this.capacity = capacity;
    }

    offer(val) {
        if (this.heap.length < this.capacity) {
            this.heap.push(val);
            this.heapifyUp();
        } else {
            if (val > this.heap[0]) {
                this.heap[0] = val;
                this.heapifyDown();
            }
        }
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
            if (this.heap[parentIndex] > this.heap[index]) {
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
            let smallest = index;
            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest !== index) {
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

