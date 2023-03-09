/*
Problem 2: Finding even or odd

        তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

        এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

        Input: ‘Phero’; Output: odd

        Input: ‘Batch7’; Output: even

        Input: ‘chatgpt’; Output: odd
*/

function evenOdd(text) {
        for (let i = 0; i < text.length; i++) {
                let textLength = text.length;
                if (textLength % 2 === 0) {
                        return 'even';
                }
                else {
                        return 'odd';
                }
        }
}

const myString = 'chatgpt';
const string = evenOdd(myString);
console.log(string);
