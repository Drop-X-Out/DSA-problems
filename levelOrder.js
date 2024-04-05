/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }

    const que =[]
    const res= []

    que.push(root)
    while(que.length){
        
        const tmp = []
        const size = que.length
    for(let i=0;i<size;i++){
        const node = que.shift()
        tmp.push(node.val)
        if(node.left){
            que.push(node.left)
        }
        if(node.right){
            que.push(node.right)
        }
    }
       res.push(tmp) 
    }
    return res
};
