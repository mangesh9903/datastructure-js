    // Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element

    const prompt = require('prompt-sync')();

    let numArray = new Array();

    for (index = 1; index < 10; index++) {
        let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
        numArray.push(num);
    }
    console.log("Array is " + numArray);
    
    let secondMinimum = numArray.sort()[1];
    let secondMaximum = numArray.sort()[numArray.length - 2];
    
    console.log("With Sorting ");
    console.log("Second Maximum : " + secondMaximum + "  Second Minimum : " + secondMinimum);
