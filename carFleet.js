/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos,index) => ({pos,speed:speed[index]}))
    cars.sort((a,b) => b.pos - a.pos);

    let lastTime = -1
    let fleetCount =0 
    for(const car of cars){
        const time = (target - car.pos) /car.speed 
        if(time>lastTime){
            fleetCount++;
            lastTime = time
        }
    }

    return fleetCount
};