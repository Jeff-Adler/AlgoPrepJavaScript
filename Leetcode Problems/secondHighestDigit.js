const secondHighestDigit = (s) => {
  const numbers = s.split('').filter((character) => {
    console.log(parseInt(character));
    return !isNaN(parseInt(character));
  });

  if (!numbers.length) {
    return -1;
  }

  const highestDigit = Math.max(...numbers);

  const highestDigitRemoved = numbers.filter((number) => {
    return number < highestDigit;
  });

  console.log(numbers);
  console.log(highestDigitRemoved);

  return highestDigitRemoved.length ? Math.max(...highestDigitRemoved) : -1;
};

console.log(secondHighestDigit('ck077'));
