/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const itin = []
    
    let searchTerm = "JFK"
    
    tickets = tickets.sort((tick1,tick2) => {
        return (
            tick1[1].localeCompare(tick2[1])
        )
    })
    
    let ticketIdx = tickets.findIndex((tick) => {return tick[0] === searchTerm})
    let ticket = tickets.splice(ticketIdx,1)
    itin.push(ticket[0][0])
    itin.push(ticket[0][1])    
    while (tickets.length){
        searchTerm = itin[itin.length - 1]
        
        let ticketIdx = tickets.findIndex((tick) => {return tick[0] === searchTerm})
    
        ticket = tickets.splice(ticketIdx,1)
        itin.push(ticket[0][1]) 
    }
    
    return itin
};