class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
    }

    get(key){
        if(this.map.has(key)){
            let val = this.map.get(key);
            this.map.delete(key)
            this.map.set(key,val)
            return val
        }else{
            return -1
        }
    }

    put(key,val){
        if(this.get(key) === -1){
            if(this.capacity === this.map.size){
                for(let keyVal of this.map){
                    this.map.delete(keyVal[0])
                    break
                }
            }
        }
        this.map.set(key,val)
    }
}