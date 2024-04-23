/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0
    for(let i =0;i<32 ;i++){
      const lsb = n & 1;
      const reverseLsb = lsb << (31 - i);
      result = result | reverseLsb;
      n = n >>> 1;
    }
    return result >>> 0;
  };