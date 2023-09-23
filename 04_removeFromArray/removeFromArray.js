const removeFromArray = function(array) {
    let elementsToRemove = arguments.length
    for (i=1;i<elementsToRemove;i++){
        if (array.length >= arguments[i]){
            console.log(`Remove element on position ${arguments[i]}`)
            console.log(`The element to be removed is ${array[arguments[i]-1]}`)
            array.splice(arguments[i]-1,1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
