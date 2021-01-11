/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    // return ((salary.reduce((ele, total) => ele + total)) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
    
    salary.sort((a,b) => a - b)
    return ((salary.reduce((ele, total) => ele + total) - salary[0] - salary[salary.length - 1]) / (salary.length - 2))
};