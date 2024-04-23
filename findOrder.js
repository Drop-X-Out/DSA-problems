/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjacencyList = new Map();
    const queue = []
    const result = []
    const inDegrees = new Array(numCourses).fill(0)

    for(const [course,prerequisite] of prerequisites){
        if(!adjacencyList.has(prerequisite)){
            adjacencyList.set(prerequisite,[])
        }
        adjacencyList.get(prerequisite).push(course);
        inDegrees[course]++
    }

    for(let i=0;i<numCourses;i++){
        if(inDegrees[i] === 0){
            queue.push(i)
        }
    }

    while(queue.length > 0){
        const prerequiste = queue.shift();
        result.push(prerequiste)

        if(adjacencyList.has(prerequiste)){
            for(const course of adjacencyList.get(prerequiste)){
                inDegrees[course]--
                if(inDegrees[course] === 0){
                    queue.push(course)
                }
            }
        }
    }
if(result.length !== numCourses){
    return []
}
return result
};