/*  Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
    etc and store them in an array
*/
// Range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

const prompt = require('prompt-sync')();

function isRepeating(number) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    if (remainder == number && number != 0)
        return true;
    return false;
}

let start = Number(prompt("Enter a start number : "));
let end = Number(prompt("Enter a end number : "));

repeatedArray = [];

for (index = start; index < end; index++) {
    if (isRepeating(index))
        repeatedArray.push(index);
}

console.log("Numbers that has repeating digits are " + repeatedArray);