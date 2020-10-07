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

console.log("1: ", addUpTo(100));
console.log("2: ", addUpTo2(100));
