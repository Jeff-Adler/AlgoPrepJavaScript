const romanToInt = function(s) {

  const romanToIntConversionTable = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
    "IV" : 4,
    "IX" : 9,
    "XL" : 40,
    "XC" : 90,
    "CD" : 400,
    "CM" : 1000
  }

  let total = 0

    for (let i = s.length - 1; i >= 0; i--) {
      console.log(s[i])

    }
};

romanToInt("III")