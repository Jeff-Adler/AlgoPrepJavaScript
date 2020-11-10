/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    if (points.length < 2) return null
    
    let totalDist = 0
    let distTraveled
    
    for (let i = 1 ; i < points.length ; i++){
        const [x1, y1] = points[i];
		const [x2, y2] = points[i - 1]; 
        
        distTraveled = Math.max(Math.abs(x1 - x2),Math.abs(y1 - y2))
        
        totalDist += distTraveled
    }
    
    return totalDist
};