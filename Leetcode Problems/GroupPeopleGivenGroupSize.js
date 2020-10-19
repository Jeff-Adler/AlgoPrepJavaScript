/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

//Problem: You are given an array GroupSizes. [i] of the array indicates the persno's id. the value at [i] indicates the size of the group they belong to. Write a function that returns an array of arrays, where the subarrays are GROUPS of users, represented by their [i] ids. A user can only can be in one group, and every user must have a group.

//Approach: Declare an objects groups. Loop through groupSizes. Sort users by id ([i]) into groups in the object. An object key will correspond to a group size, the value will correspond to the users in it. Once, for example, a group of size three fills up, make another one. Return all the values in the object.

var groupThePeople = function(groupSizes) {
    const groups = {}
    for (let i = 0 ; i < groupSizes.length ; i++) {
        let groupSize = groupSizes[i]
        if (groups[groupSize]) {
            groups[groupSize].push(i)
        } else {
            groups[groupSize] = [i]
        }
    }
    const groupedUsers=[]
    for (let key in groups) {
        const group = groups[key]    
        for (let j = 0 ; j < group.length ; j += parseInt(key)) {  
            let subGroup = []
            for (let k = j ; k < (j + parseInt(key)) ; k++) {
                subGroup.push(group[k])
            }
            groupedUsers.push(subGroup)
        }
    }
    return groupedUsers
};

//Sample Outputs:
// console.log("Should return [[5],[0,1,2],[3,4,6]]: ", groupThePeople([3,3,3,3,3,1,3]))
// console.log("Should return [[1],[0,5],[2,3,4]]: ", groupThePeople([2,1,3,3,3,2]))