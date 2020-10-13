//Same: given two arrays, check if, given two arrays, every value in the array 
// has its corresponding value SQUARED in the second array. 
//Frequency of values must be the same. Order does not matter.

//Understand the Problem
    //Can I restate the problem in my own words?
    //What are the inputs that go into the problem?
    //What are the outputs that should come from the solution to the problem?
    //Can the outputs be determined from the inputs? (In other words, do I have info to solve the problem?)
    //How should I label the important pieces of data that are a part of the problem?

//Explore Concrete Examples
    //Simple examples
    //Complex examples
    //Examples with null or empty inputs
    //Examples with invalid inputs

//Break It Down
    //Explicitly write out the steps you need to take

//Solve/Simplify
    //If you know you can't solve the entire problem, solve a simplified version of the problem first

//Look back and Refactor
    //Can you check the result?
    //Can you derive the result differently?
    //Can you understand it at a glance?
    //Can you use the result or method for some other problem?
    //Can you improve the performance of your solution?
    //Can you think of other ways to refactor?
    //How have other people solved this problem?

//O(n^2) solution
const sameSquared = (arr1,arr2) => {
    //failsafe; not strictly necessary
    if (arr1.length !== arr2.length) {
        return false
    }
    //loop 1
    for (const i of arr1) {
        //loop 2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //indexOf returns -1 if no value isn't found in array
        if (correctIndex === -1) {
            return false
        }
        //This reduces the array each time squared value is found, to ensure frequencies match
        arr2.splice(correctIndex,1)
    }
    return true
}