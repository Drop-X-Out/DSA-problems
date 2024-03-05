/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    //Sort Both strings and compare
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;

};

//Test Cases
const s1= "anagram",t1 = "nagaram"
const s2 = "rat" , t2= "car"

console.log(isAnagram(s1,t1));
console.log(isAnagram(s2,t2));
