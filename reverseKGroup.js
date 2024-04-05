/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || k===1) return head

    const dummy = new ListNode(0);
    dummy.next = head

    let prev = dummy;
    let current = head;
    let count =0;

    while(current){
        count++
        if(count % k === 0){
            prev = reverse(prev,current.next)
            current = prev.next
        }
        else{
            current = current.next
        }
    }
    return dummy.next
};



var reverse = function(prev,next){
    let last = prev.next
    let current = last.next
    while(current !== next){
        last.next = current.next;
        current.next = prev.next;
        prev.next = current;
        current = last.next;
    }

    return last
}