//number 1 - century year
function solution(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        return parseInt(year / 100 + 1);
    }
}
module.exports = solution;

//number 2 - adjacent elements
function solution(inputArray) {
    var max = 0;

    for (let i = 0; i < inputArray.length; i++) {
        var adj = inputArray[i] * inputArray[++i]
        max = adj > max ? adj : max; //did some research on this, wasn't sure of myself.

    }
    return max;
}
module.exports = solution;

//number 3 - palindrome
const sol = (inputString) => {
    return inputString.reverse() == inputString
}

module.exports = sol;

//number 4