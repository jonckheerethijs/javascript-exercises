const sumAll = function(first, second) {
    let result = 0
    if (typeof(first)!="number"||typeof(second)!="number"||first<0||second<0){
        return 'ERROR'
    }
    if (second < first){
        let x = second
        second = first
        first = x
    }
    for (let i = first;i<=second;i++){
        result += i
    }
    console.log(result)
    return result
};

// Do not edit below this line
module.exports = sumAll;
