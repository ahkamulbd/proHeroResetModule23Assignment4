/*
Problem 5: Convert your gems into diamond

        তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

        ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
        ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
        ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

        [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

        এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

        Sample Input & Output:-

        Input: 1, 1, 1;  Output: 96

        Input: 20, 200, 50;  Output: 6970

        Input: 100, 5, 1;  Output: 303
*/

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

const gettingGems = gemsToDiamond(100, 5, 1);
console.log(gettingGems);