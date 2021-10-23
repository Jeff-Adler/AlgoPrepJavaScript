const romanToInt = function(s) {

  const map = {
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
    "CM" : 900
  }

  let total = 0

    for (let i = s.length - 1; i >= 0; i--) {
      const precedingAndCurrentCharacter = i > 0 ? `${s[i-1]}${s[i]}` : ''

      if (precedingAndCurrentCharacter && map[precedingAndCurrentCharacter]) {
        total += map[precedingAndCurrentCharacter]
        i--
      } else {
        total += map[s[i]]
      }
    }
    return total
};

console.log(romanToInt("MCMXCIV"))