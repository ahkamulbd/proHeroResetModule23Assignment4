/*
Problem 1: Let’s play a mind game

        তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

        এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

        Sample Input & Output

        Input: 5;  Output: 7.5

        Input: 50;  Output: 75

        Input: 33; Output: 49.5
*/

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

const result = mindGame(33);
console.log(result);



