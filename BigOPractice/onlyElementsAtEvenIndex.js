function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
            console.log(newArray[i/2])
        }
    }
    return newArray;
}

const array = [1,2,3,4,5,6,7]

onlyElementsAtEvenIndex(array)