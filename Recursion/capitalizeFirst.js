// capitalizeFirst: given array of string, capitalize first letter of each string in the array

function capitalizeFirst (arr) {
    let newArr = []
    
    if (arr.length === 0) return newArr

    newArr.push(capitalizeFirstLetter(arr[0]))

    newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
    
    return newArr
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(capitalizeFirst(['car','taco','banana']))