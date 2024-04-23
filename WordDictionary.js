var WordDictionary = function() {
    this.dictionary = new Set()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.dictionary.add(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(word.indexOf('.') != -1){
        for(let str of this.dictionary){
            if(str.length != word.length) continue
            let i
            for(i =0;i< str.length;i++){
                if( word[i] == '.') continue
                if(word[i] != str[i]) break
            }
            if(i == str.length) return true
        }
        return false
    }else{
        return this.dictionary.has(word)
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */