/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return []

    intervals.sort((a,b) => a[0] - b[0])

    const merged = [intervals[0]]

    for(let i=1;i<intervals.length;i++){
        const currentInterval = intervals[i]
        const lastMergedInterval = merged[merged.length -1]

        if(currentInterval[0] <= lastMergedInterval[1]){
            lastMergedInterval[1] = Math.max(lastMergedInterval[1],currentInterval[1])
        }else{
            merged.push(currentInterval)
        }
    }
    return merged
};