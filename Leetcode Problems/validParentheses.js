const isValid = (str) => {

  const dict = {
    "{":"}",
    "(":")",
    "[":"]"
  }

  if (str.length % 2 !== 0) {
    return false
  }

  let i = 0
  let j = str.length - 1

  while (j > i) {
    if (dict[str[i]] !== str[j]) {
      return false;
    }
    i++
    j--
  }

  return true
}

const result = isValid('{[]}')

console.log(result)