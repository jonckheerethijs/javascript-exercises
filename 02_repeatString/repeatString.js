const repeatString = function(string, repeats) {
    if (repeats<0){
        return "ERROR"
    }
    result="";
    for (let i = 0; i<repeats; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
