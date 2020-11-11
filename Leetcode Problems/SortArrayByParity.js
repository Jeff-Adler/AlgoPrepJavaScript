/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    const sortedA = []

    while (A.length) {
        if (A[A.length - 1] % 2 === 0) {
            sortedA.unshift(A.pop())
        } else {
            sortedA.push(A.pop())
        }
    }

    return sortedA

};