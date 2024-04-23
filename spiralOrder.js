/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return 0

    const m = matrix.length
    const n = matrix[0].length
    const result=[]

    let top = 0
    let bottom = m-1
    let left=0
    let right = n-1

    while(top<=bottom && left <=right){
        for(let j=left ;j<= right;j++){
            result.push(matrix[top][j])
        }
        top++

        for(let i=top;i<=bottom;i++){
            result.push(matrix[i][right])
        }
        right--

        if(top<=bottom){
            for(let j=right;j>=left;j--){
                result.push(matrix[bottom][j])
            }
            bottom--
        }

        if(left<=right){
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++
        }
    }
    return result
};