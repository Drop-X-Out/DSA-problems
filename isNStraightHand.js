/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    const cardFreq = new Map()

    for(const card of hand){
        cardFreq.set(card,(cardFreq.get(card) || 0) +1)
    }

    const sortedCards = [...cardFreq.keys()].sort((a,b) => a-b)

    for(const card of sortedCards){
        if(cardFreq.get(card) > 0){
            for(let i=0;i<groupSize;i++){
                if(!cardFreq.has(card + i) || cardFreq.get(card + i) === 0){
                    return false
                }
                cardFreq.set(card+i,cardFreq.get(card+i)-1)
            }
        }
    }

    return true
};