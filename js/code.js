const obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function romanToInt(s) {
    const arrOfNums =  s.split('').map(num => obj[num]);
    let sum = 0;
    for (let i = 0; i < arrOfNums.length; i += 1) {
        if (arrOfNums[i] < arrOfNums[i + 1]) {
            arrOfNums[i + 1] = arrOfNums[i + 1] - arrOfNums[i];
            arrOfNums[i] = 0;
        }
        sum += arrOfNums[i];
    }
    return sum;
}

console.log(romanToInt("XLIV"))




