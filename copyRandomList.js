class Node{
    constructor(val,next,random){
        this.val = val
        this.next= next
        this.random = random
    }
}

var copyRandomList = function(head){
    if(!head) return null

    const map = new Map()

    let current = head

    while(current){
        map.set(current,new Node(current.val))
        current = current.next
    }

    current = head

    while(current){
        const newNode = map.get(current)
        newNode.next = map.get(current.next) || null
        newNode.random = map.get(current.random) || null
        current = current.next
    }

    return map.get(head)
};