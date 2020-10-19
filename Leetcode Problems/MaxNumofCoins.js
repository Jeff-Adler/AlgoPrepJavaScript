/**
 * @param {number[]} piles
 * @return {number}
 */

//Problem: You are given an array piles. Piles.length is a multiple of 3.
//each element in piles represents a pile of coins of at least one coin
//There are three people choosing piles, including you. Of the three piles picked, Alice gets the the maximum possible pile. You pick the next most maximum pile.
//Bob picks any pile. Given any possible arrangement of who takes which piles, what thes most piles you can end up with?

//Solution: Sort the array. Count down from right. Assume bob takes the samllest 

var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b)
    let pilesPerPerson = piles.length/3
    piles = piles.slice(pilesPerPerson)
    let myCoins = 0
    for (let i = 0 ; i < piles.length ; i+=2) {
        myCoins += piles[i]
    }
    return myCoins
};

//Sample outputs:
// console.log("Should return 4: ", maxCoins([2,4,5]))
// console.log("Should return 18: ", maxCoins([9,8,7,6,5,1,2,3,4]))