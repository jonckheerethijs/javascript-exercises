const removeFromArray = function (array, ...toRemove) {
    let newArray=[]
    array.forEach((item) => {
      if (!toRemove.includes(item)){
        newArray.push(item)
      }
    })
    console.log(newArray)
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
