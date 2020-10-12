const { performance } = require("perf_hooks");

//General Trend: n operations
const addUpTo = (n) => {
  //one assignment
  let total = 0;
  //one assignment
  //n comparisons(?)
  //n additions and n assignments
  for (let i = 1; i <= n; i++) {
    //n additions and n assignments
    total += i;
  }
  return total;
};

//Three Operations: multiplication, addition, division
const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time to run addUpTo: ${(t2 - t1) / 1000} seconds.`);

t1 = performance.now();
addUpTo2(1000000000);
t2 = performance.now();
console.log(`Time to run addUpTo2: ${(t2 - t1) / 1000} seconds.`);
