/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[]
    const mapping = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for(let i= 0; i<s.length ;i++){
        const char = s[i];
        if(char in mapping){
            const topElement = stack.pop() || '#'
            if(mapping[char] !== topElement){
                return false;
            }
        }
        else{
             stack.push(char)
        }

       
    }

    return stack.length === 0;
};