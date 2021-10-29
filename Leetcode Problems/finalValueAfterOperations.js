const finalValueAfterOperations = (arr) => {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "++X" || arr[i] == "X++") {
      x++;
    } else {
      x--;
    }
  }

  return x;
};

const result = finalValueAfterOperations(["++X", "++X", "X++"]);
console.log(result);
