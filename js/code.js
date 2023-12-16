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
    const arrOfNums =  s.split('').map(numb => obj[numb]);
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

console.log(romanToInt("CCC"))

function intToRoman(num) {
    const arrOfNum = num.toString().split('').reverse();

    const a = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const b = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const c = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const d = ['M', 'MM', 'MMM'];

    for (let i = 0; i < arrOfNum.length; i += 1) {
        const arrOfRoman = [];
        if (arrOfNum[i] !== 0) {
            for (let j = 0; j < a.length; j += 1) {
                if (arrOfNum[0] - 1 === j) {
                arrOfRoman.push(a[j]);
                }
            }

            for (let k = 0; k < b.length; k += 1) {
                if (arrOfNum[1] - 1 === k) {
                arrOfRoman.push(b[k]);
                }
            }

            for (let l = 0; l < c.length; l += 1) {
                if (arrOfNum[2] - 1 === l) {
                arrOfRoman.push(c[l]);
                }
            }

            for (let m = 0; m < d.length; m += 1) {
                if (arrOfNum[3] - 1 === m) {
                arrOfRoman.push(d[m]);
                }
            }
        }
        const str = arrOfRoman.reverse().join('');
        return str;
    }
}
console.log(intToRoman(1245))





