// fib: accepts a number and returns the nth number in the Fib sequence.
// The fib sequence is the sequence of whole numbers 1,1,2,3,5,8 which starts 
// with 1 and 1, and where every number thereafter is equal to the sum of the
// previous two numbers.

const fib = (num, arr = [1,1]) => {
    if (arr.length === num) return arr[num - 1]
    return fib(num,arr.concat([arr[arr.length - 1] + arr[arr.length - 2]]))
}

console.log(fib(4))

//simpler solution
function fib2(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}