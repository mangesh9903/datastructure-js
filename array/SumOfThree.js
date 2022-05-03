// Program to find Sum of Three Integer is equal to Zero 

    function sumOfThreeInteger(numArray, n) {
        var found = false;
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (numArray[i] + numArray[j] + numArray[k] == 0) {
                        console.log("(" + numArray[i] + ", " + numArray[j] + ", " + numArray[k] + ")\n");
                        found = true;
                    }
                }
            }
        }
        if (found == false)
            console.log("Tripplet does not exist.");
    }

    let array = [0, -1, 2, -3, 1, -2, 4];
    let size = array.length;
    sumOfThreeInteger(array, size);
