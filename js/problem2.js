/*
Problem 2: Finding even or odd

        তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

        এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

        Input: ‘Phero’; Output: odd

        Input: ‘Batch7’; Output: even

        Input: ‘chatgpt’; Output: odd
*/

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

const myString = 'Batch7';
const string = evenOdd(myString);
console.log(string);
