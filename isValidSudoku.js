/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const seen = new Set();
    for(let i=0;i<9 ;i++){
        for( let j=0;j<9;j++){
            const cellVal = board[i][j];

            if(cellVal !== '.'){
                const rowVal = `row ${i} ${cellVal}` 
                const colVal = `col ${j} ${cellVal}`
                const boxVal = `box ${Math.floor(i/3)}-${Math.floor(j/3)} ${cellVal}`

                if(seen.has(rowVal) || seen.has(colVal) || seen.has(boxVal)){
                    return false;
                }

                seen.add(rowVal)
                seen.add(colVal)
                seen.add(boxVal)
            }
        }
    
    }
    return true;
};