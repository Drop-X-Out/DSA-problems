/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = new Map()

    for(const [from,to] of tickets){
        if(!graph.has(from)){
            graph.set(from,[])
        }
        graph.get(from).push(to)
    }


    for(const [from,toList] of graph.entries()){
        toList.sort()
    }

    const itinerary = []

    function dfs(node){
        const destinations = graph.get(node) || []

        while(destinations.length > 0){
            const nextNode = destinations.shift()
            dfs(nextNode)
        }
        itinerary.unshift(node)
    }
    dfs('JFK')

    return itinerary
};