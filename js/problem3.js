/*
Problem 3: Is Less or Greater than seven

        তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

        এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

        Input : 6; Output: -1

        Input: -15; Output: -22

        Input: 15;  Output: 30        
*/

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

const result = isLGSeven(15);
console.log(result);