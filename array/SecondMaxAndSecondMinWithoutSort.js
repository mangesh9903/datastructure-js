// Find the 2nd largest and the 2nd smallest element without sorting the array

const prompt = require('prompt-sync')();

    let numArray = [];

    for (index = 1; index < 10; index++) {
        let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
        numArray.push(num);
    }
    console.log("Array is " + numArray);

    let firstMax = numArray[0];
    let secondMax = numArray[0];
    let firstMin = numArray[0];
    let secondMin = numArray[0];
    
    for (let number of numArray) {
        if (number > firstMax) {
            secondMax = firstMax;
            firstMax = number;
        }
        else if (number > secondMax) {
            secondMax = number;
        }
        if (number < firstMin) {
            secondMin = firstMin;
            firstMin = number;
        }
        else if (number < secondMin) {
            secondMin = number;
        }
    }
    console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);