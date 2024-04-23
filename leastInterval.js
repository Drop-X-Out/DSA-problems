/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const frequencyMap = new Map()

    for(const task of tasks){
        frequencyMap.set(task,(frequencyMap.get(task) || 0) +1 )
    }

    const queue = []

    for(const [task,frequency] of frequencyMap){
        queue.push({task,frequency})
    }

    queue.sort((a,b) => b.frequency - a.frequency)

    let time = 0;
    let cooldown
    while(queue.length || cooldown >0){
        let cooldown = n+1

        const tempQueue =[]
        while(queue.length && cooldown >0){
            const current = queue.shift()
            current.frequency --
            if(current.frequency >0){
                tempQueue.push(current)
            }
            cooldown--
            time++
        }

        for(const task of tempQueue){
            queue.push(task)
        }

        if(queue.length){
            time +=cooldown
        }

        queue.sort((a,b) => b.frequency-a.frequency)
    }
    return time
};