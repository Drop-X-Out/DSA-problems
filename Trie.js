var Trie = function() {
    this.root = {}
};
/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let map = this.root
    for(let c of word){
        if(!map[c]){
            map[c] = {}
        }else{

        }
        map = map[c]

        if(!map['isEnd']) map['isEnd'] = false
    }
    map['isEnd'] = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let map = this.root

    for(let c of word){
        if(!map[c]) return false

        map=map[c]
    }
    return map['isEnd']
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     let map = this.root

    for(let c of prefix){
        if(!map[c]) return false

        map=map[c]
    }
    return true
};
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */