/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas =0
    let totalCost =0
    let tank =0
    let start =0

    for(let i=0;i< gas.length;i ++){
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i]

        if(tank<0){
            tank =0
            start = i+1
        }

       
    }
 return totalGas >= totalCost ? start : -1
};