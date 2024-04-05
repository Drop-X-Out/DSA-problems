
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)){
        this.map.set(key,[])
    }
    this.map.get(key).push({value,timestamp})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)){
        return ""
    }
    const pairs = this.map.get(key);
    let left =0;
    let right = pairs.length -1

    while(left <= right){
        const mid = Math.floor((left + right) /2);
        if(pairs[mid].timestamp === timestamp){
            return pairs[mid].value
        }
        else if(pairs[mid].timestamp < timestamp){
            left = mid +1
        }
        else{
            right = mid -1;
        }
    }
    if(right === -1){
        return ""
    }
    return pairs[right].value
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */