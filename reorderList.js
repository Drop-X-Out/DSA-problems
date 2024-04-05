/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
    //step 1
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next
    }
    //step 2
    let prev= null
    let curr = slow.next

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr= temp
    }
    slow.next = null

    //step 3

    let first = head
    let second = prev

    while(second){
        let temp1 = first.next
        let temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }

};