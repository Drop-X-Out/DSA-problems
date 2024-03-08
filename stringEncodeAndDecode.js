var encode = function(strs){
    return strs.map(str => `${str.length}/${str}`).join('');
}

var decode = function(s){
    const result =[];

    let i=0;

    while(i<s.length){
        const slashIndex = s.indexOf('/',i)
        const length = parseInt(s.slice(i,slashIndex))
        result.push(s.slice(slashIndex+1,slashIndex+1+length))
        i= slashIndex +length +1;
    }
    return result;
}


const originalStrings = ["hello","world","leetcode"];
const encodedString = encode(originalStrings)
console.log(encodedString)

const decodedString = decode(encodedString);
console.log(decodedString)