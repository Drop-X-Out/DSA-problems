/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return 'null'

    const leftSerialized= serialize(root.left)
    const rightSerialized = serialize(root.right)

    return root.val + ',' +leftSerialized +',' + rightSerialized 
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split(',')

    const deserializeNodes = () => {
        const val = nodes.shift()

        if(val === 'null') return null;

        const node = new TreeNode(parseInt(val))

        node.left = deserializeNodes()
        node.right = deserializeNodes()

        return node;
    }

    return deserializeNodes()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */