const finalValueAfterOperations = (arr) => {
  return operations.reduce((final, operation) => {
    return final + (operation.includes("++") ? 1 : -1);
  }, 0);
};

const result = finalValueAfterOperations(["++X", "++X", "X++"]);
console.log(result);
