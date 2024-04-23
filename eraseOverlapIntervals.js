/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0

    intervals.sort((a,b) => a[1] - b[1])

    let removed =0
    let lastNonOverlappingEnd = intervals[0][1]

    for(let i=1;i<intervals.length;i++){
        const [start,end] = intervals[i]

        if(start < lastNonOverlappingEnd){
            removed++
        }else{
            lastNonOverlappingEnd = end
        }
    }
    return removed

};