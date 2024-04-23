/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set(wordList)
    let queue = [[beginWord,1]]

    while(queue.length){
        let [currWord ,count] = queue.shift()

        if(currWord === endWord){
            return count
        }

        for(let i=0;i<26;i++){
            for(let j=0;j<currWord.length;j++){
                let letter = String.fromCharCode(97 +i)
                let newWord = currWord.slice(0,j) + letter + currWord.slice(j+1)

                if(set.has(newWord)){
                    queue.push([newWord,count+1])
                    set.delete(newWord)
                }
            }
        }
    }
        return 0
};