/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let result = []
    let root = buildTrie(words)

    for(let i = 0; i< board.length ;i++){
        for(let j=0;j<board[0].length;j++){
            dfs(root,i,j,result,board)
        }
    }
    return result
};
function dfs(node,i,j,result,board){
    if(node.word){
        result.push(node.word)
        node.word = null
    }

    if(i<0 || j<0 || i > board.length -1 || j > board[0].length-1) return
    if(!node[board[i][j]]) return

    let c = board[i][j]
    board[i][j] = '#'

    dfs(node[c],i+1,j,result,board)
    dfs(node[c],i-1,j,result,board)
    dfs(node[c],i,j+1,result,board)
    dfs(node[c],i,j-1,result,board)
    board[i][j] = c

}

function buildTrie(words){
    let root = {}

    for(let word of words){
        let currNode = root

        for(let char of word){
            if(!currNode[char]) currNode[char] =  {}
            currNode = currNode[char]
        }
        currNode.word = word
    }
    return root
}