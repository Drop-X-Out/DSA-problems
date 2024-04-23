/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinPriorityQueue()
    for(let num of nums){
        minHeap.enqueue(num)
        if(minHeap.size() > k) minHeap.dequeue()
    }
    return minHeap.front().element
};