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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const inOrderTraversal = (node,prev) => {
        if(!node) return true

        if(!inOrderTraversal(node.left,prev)) return false

        if(prev!== null && node.val <= prev.val) return false
    prev = node

    return inOrderTraversal(node.right,prev)
    }

    return inOrderTraversal(root,null)
};