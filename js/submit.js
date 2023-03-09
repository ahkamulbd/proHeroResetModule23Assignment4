/* ============ Problem 1: ============== */

/* Function Description: Taking a number parameter, mindGame Function will work with number parameter by multiplying 3, adding 10, dividing 2 and subtracting 5 respectively. Then it will return the result. */

function mindGame(number) {
    let numberMultiplied = number * 3;
    let numberAdded = numberMultiplied + 10;
    let numberDivided = numberAdded / 2;
    let numberSubtracted = numberDivided - 5;
    let numberSubtractedFixed = numberSubtracted.toFixed(1);

    if (typeof number !== 'number') {
        return 'Please Enter a number';
    }
    else {
        return numberSubtractedFixed;
    }
}


/* ============ Problem 2: ============== */

/* Function Description: This function will take a parameter as a text i.e. string. It will return whether the number of character in that string is even or odd.  */

function evenOdd(text) {

    let textLength = text.length;

    if (textLength % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}


/* ============ Problem 3: ============== */

/* Function Description: This function will take a parameter as a number. If difference between number and 7 is greater than 7 will return that difference, otherwise it will return the double of the number parameter */

function isLGSeven(number) {
    let difference = number - 7;
    let double = number * 2;

    if (difference < 7) {
        return difference;
    }
    else {
        return double;
    }
}

/* ============ Problem 4: ============== */

/* Function Description: This function will take a array parameter. It will check whether negative elements exist in that array and return the number of negative elements as badData.  */

function findingBadData(numbers) {
    let badData = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < 0) {
            badData.push(number);
        }
    }
    return badData.length;
}


/* ============ Problem 5: ============== */

/* Function Description: This function will take 3 numbers as a parameter which indicates the number of gems of 3 friends. It will multiply these numbers with their power i.e. a * 21 and add the results of multiplication which indicates total diamond. If the total diamond is greater than 2000, it will return the total by subtracting 2000. Otherwise, it will return total gems only.   */

function gemsToDiamond(a, b, c) {
    let firstFriendGems = a * 21;
    let secondFriendGems = b * 32;
    let ThirdFriendGems = c * 43;
    let totalGems = firstFriendGems + secondFriendGems + ThirdFriendGems;
    let restDiamond = totalGems - 2000;

    if (totalGems > 2000) {
        return restDiamond;
    }
    else {
        return totalGems;
    }
}