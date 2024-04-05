/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length ==0) return null

    let merge2Lists = function(l1,l2){
        if(!l1) return l2
        if(!l2) return l1

        if(l1.val < l2.val){
            l1.next = merge2Lists(l1.next,l2)
            return l1
        }
        else{
            l2.next = merge2Lists(l2.next,l1)
            return l2
        }
    }
    

    for(let i=1;i<lists.length ;i++){
        lists[0] = merge2Lists(lists[0],lists[i])
    }

    return lists[0]
};