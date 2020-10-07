const { performance } = require("perf_hooks");

const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
addUpTo(100000000000);
let t2 = performance.now();
console.log(`Time to run addUpTo: ${t2 - t1 / 1000} seconds.`);

t1 = performance.now();
addUpTo2(100000000000);
t2 = performance.now();
console.log(`Time to run addUpTo: ${t2 - t1 / 1000} seconds.`);

console.log("1: ", addUpTo(100));

console.log("2: ", addUpTo2(100));
