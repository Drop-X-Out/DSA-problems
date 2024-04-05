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
var isBalanced = function(root) {
    if(!root) return 1

    let heightL = isBalanced(root.left)
    let heightR= isBalanced(root.right)

    if(heightL === false || heightR === false) return false
    if(Math.abs(heightL- heightR) > 1) return false

    return Math.max(heightL,heightR) +1;

};