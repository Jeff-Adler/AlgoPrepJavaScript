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
  let stack = []

  while (i < str.length) {
    if (Object.keys(dict).includes(str[i])) {
      stack.push(str[i])
    } else if (dict[stack[stack.length - 1]] === str[i]) {
      stack.pop()
    } else {
      return false;
    }
    i++
  }

  return stack.length === 0
}

const result = isValid('{[]}')

console.log(result)