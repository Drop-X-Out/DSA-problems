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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxD= 0

    function dfs(node){
        if(!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);
        let currD = left + right

        maxD = Math.max(currD,maxD)

        return Math.max(left,right)+1

    }

    dfs(root)

    return maxD
};