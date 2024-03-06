/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsMap = new Map();

    for(const word of strs){

        const sortedWord = word.split('').sort().join('');

        if(anagramsMap.has(sortedWord)){
            anagramsMap.get(sortedWord).push(word);
        }
        else{
            anagramsMap.set(sortedWord,[word]);
        }
    }
    return Array.from(anagramsMap.values())
};

//Test cases
const strs1 = ["eat","tea","tan","ate","nat","bat"]
const strs2 = [""]
const strs3 = ["a"]

console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))