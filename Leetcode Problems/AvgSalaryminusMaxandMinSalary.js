/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return ((salary.reduce((ele, total) => ele + total)) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
};