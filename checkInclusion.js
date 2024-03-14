/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const n1= s1.length;
    const n2 = s2.length;
 
    if(n1>n2) return false
 
    const s1Freq = Array(26).fill(0);
    const s2Freq = Array(26).fill(0);
    
 
    for(let i=0;i<n1;i++){
     s1Freq[s1.charCodeAt(i) -97] ++;
    }
 
    for(let i=0;i<n2;i++){
     s2Freq[s2.charCodeAt(i)-97]++
 
     if(i >= n1){
         s2Freq[s2.charCodeAt(i-n1)-97]--
     }
 
     if(arraysEqual(s1Freq,s2Freq)){
         return true
     }
    }
    return false
 };
 
 function arraysEqual(arr1,arr2){
     for(let i=0;i<arr1.length;i++){
         if(arr1[i] !== arr2[i]){
             return false
         }
     }
     return true
 }