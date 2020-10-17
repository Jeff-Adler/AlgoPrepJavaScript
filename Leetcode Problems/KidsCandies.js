/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//Problem: The array candies lists how many candies the kid at [i] has. The problem is to see, for every kid, is there enough candies in the extraCandies such that they could have the greatest number of candies among the students (where greatest equal more than everyone or the same as other greatest)

//Approach: Since kids are represented by [i], we cannot sort the array.
//Find highest number in the array
//Subtract extraCandies from highest number
//anyone with less candies than that is false, everyone else true
    //Time Complexity: O(n)

    var kidsWithCandies = function(candies, extraCandies) {
        // const max = candies.reduce((a,b) => {
        //     return Math.max(a,b)
        // })
        const max = Math.max(...candies)
        const min = max - extraCandies
        const canBeGreatest = candies.map((candyCount) => {
            return candyCount >= min
        })
        return canBeGreatest
    };
    
    //Sample Outputs:
    console.log("Should return [true,true,true,false,true]: ", kidsWithCandies([2,3,5,1,3],3))
    console.log("Should return  [true,false,false,false,false]: ", kidsWithCandies([4,2,1,1,2],1))