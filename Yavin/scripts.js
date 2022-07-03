// 1 Write a JavaScript function that reverse a number.
// function reverse_num(num) {
//   num = num + "";
//   return num.split("").reverse().join("");
// }
// reverse_num(32243);

// 2 Write a JavaScript function that checks whether a passed string is palindrome or not
// function palindrome(str) {
//   var reverse = str.split("").reverse().join("");
//   if (reverse === str) return true;
//   return false;
// }

// palindrome("madam");

// 3. Write a JavaScript function that generates all combinations of a string.
// let generatesAll = (str) => {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let z = i + 1; z < str.length + 1; z++) {
//       combinations.push(str.slice(i, z));
//     }
//   }
//   return combinations;
// };

// generatesAll("Dog");

// 4 Write a JavaScript function that returns a passed string with letters in alphabetical order

// let alphabeticalOrder = (str) => {
//   return str.split("").sort().join("");
// };
// console.log(alphabeticalOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.

// const upperCaseWords = (str) => {
//   let texts = str.split(" ");
//   for (let i = 0; i < texts.length; i++) {
//     let firstLeter = texts[i].split("");
//     firstLeter[0] = firstLeter[0].toUpperCase();

//     texts[i] = firstLeter.join("");
//   }
//   console.log(texts.join(" "));
// };
// upperCaseWords("the quick brown fox");

// 6 Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.

// let longestWord = (str) => {
//   str = str.split(" ");
//   return str.sort((a, b) => b.length - a.length)[0];
// };

// console.log(longestWord("Web Development Tutorial"));

// 7 Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

// let vowelsCount = (str) => {
//   let vowelList = "euioo";
//   let vowels = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowelList.indexOf(str[i]) !== -1) {
//       vowels++;
//     }
//   }
//   return vowels;
// };

// console.log(vowelsCount("The quick brown fox"));

// 8 Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.

// let test_prime = (num) => {
//   if (num === 1) {
//     return false;
//   } else if (num === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// console.log(test_prime(2));

// 9 Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined

// let dataType = (value) => {
//   var types = [Function, RegExp, Number, String, Boolean, Object],
//     i,
//     len;

//   if (typeof value === "object" || typeof value === "function") {
//     for (i = 0, len = types.length; i < len; i++) {
//       if (value instanceof types[i]) {
//         return types[i];
//       }
//     }
//   }

//   return typeof value;
// };
// console.log(dataType(true));

//10 Write a JavaScript function which returns the n rows by n columns identity matrix.

// let matrix = (z) => {
//   let i;
//   let t;

//   for (i = 0; i < z; i++) {
//     for (t = 0; t < z; t++) {
//       if (i === t) {
//         console.log(" 1 ");
//       } else {
//         console.log(" 0 ");
//       }
//     }
//   }
// };
// matrix(10);

// 11 Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively

// let SecondGreatestLowest = (arr_num) => {
//   arr_num.sort(function (x, y) {
//     return x - y;
//   });
//   let stored = [arr_num[0]];
//   let find = [];

//   for (let j = 1; j < arr_num.length; j++) {
//     if (arr_num[j - 1] !== arr_num[j]) {
//       stored.push(arr_num[j]);
//     }
//   }
//   find.push(stored[1], stored[stored.length - 2]);
//   return find.join(",");
// };

// console.log(SecondGreatestLowest([1, 2, 3, 4, 5]));

// 12

// let perfectNum = (num) => {
//   let perfect = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       perfect += i;
//     }
//   }
//   if (perfect === num && perfect !== 0) {
//     console.log("perfect number");
//   } else {
//     console.log("not a perfect number");
//   }
// };

// perfectNum(27);

//13

// let factors = (z) => {
//   var num = [],
//     i;

//   for (i = 1; i <= Math.floor(Math.sqrt(z)); i += 1)
//     if (z % i === 0) {
//       num.push(i);
//       if (z / i !== i) num.push(z / i);
//     }
//   num.sort(function (x, y) {
//     return x - y;
//   }); // numeric sort
//   return num;
// };
// console.log(factors(3));

// 14

// let amountTocoins = (amount, coins) => {
//   if (amount === 0) {
//     return [];
//   } else {
//     if (amount >= coins[0]) {
//       lessCoins = amount - coins[0];
//       return [coins[0]].concat(amountTocoins(lessCoins, coins));
//     } else {
//       coins.shift();
//       return amountTocoins(amount, coins);
//     }
//   }
// };
// console.log(amountTocoins(55, [30, 15, 7, 1, 4]));

// 15

// function exp(b, n) {
//   var ans = 1;
//   for (var i = 1; i <= n; i++) {
//     ans = b * ans;
//   }
//   return ans;
// }
// console.log(exp(2, 3));

// 16 Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg

// let uniqueChar = (str) => {
//   var str1 = str;
//   var outPut = "";
//   for (let i = 0; i < str1.length; i++) {
//     if (outPut.indexOf(str1.charAt(i)) == -1) {
//       outPut += str1[i];
//     }
//   }
//   return outPut;
// };
// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17 Write a JavaScript function to get the number of occurrences of each letter in specified string

// const charCount = (str) => {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let count = str[i];
//     if (result[count] > 0) {
//       result[count]++;
//     } else {
//       result[count] = 1;
//     }
//   }
//   return result;
// };

// console.log(charCount("JavaScript"));

// 18  Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

// const binarySearch = (items, value) => {
//   let firstIndex = 0,
//     lastIndex = items.length - 1,
//     middleIndex = Math.floor((lastIndex + firstIndex) / 2);

//   while (items[middleIndex] != value && firstIndex < lastIndex) {
//     if (value < items[middleIndex]) {
//       lastIndex = middleIndex - 1;
//     } else if (value > items[middleIndex]) {
//       firstIndex = middleIndex + 1;
//     }
//     middleIndex = Math.floor((lastIndex + firstIndex) / 2);
//   }

//   return items[middleIndex] != value ? -1 : middleIndex;
// };
// let items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binarySearch(items, 1));

// 19 Write a JavaScript function that returns array elements larger than a number.

// const bigNum = (num, arr) => {
//   let resultNum = [];
//   for (i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//       result.push(arr[i]);
//     }
//   }
//   return resultNum;
// };

// console.log(bigNum((10)[(1, 2, 3, 4, 5, 6)]));

// 20 Write a JavaScript function that generates a string id (specified length) of random characters

// const num = (str) => {
//   let text = "";
//   let charList =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < str; i++) {
//     text += charList.charAt(Math.floor(Math.random() * charList.length));
//   }
//   return text;
// };
// console.log(num(20));

// 21;Write a JavaScript function to get all possible subset with a fixed length (for example 2)

// function subset(arr, arrStr) {
//   let result_set = [],
//     result;
//   for (let x = 0; x < Math.pow(2, arr.length); x++) {
//     result = [];
//     i = arr.length - 1;
//     do {
//       if ((x & (1 << i)) !== 0) {
//         result.push(arr[i]);
//       }
//     } while (i--);
//     if (result.length >= arrStr) {
//       result_set.push(result);
//     }
//   }
//   return result_set;
// }
// console.log(subset([1, 2, 3], 2));

// 22 Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.

// const accepts = (str, letter) => {
//   let letterCount = 0;
//   for (let position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// };

// console.log(accepts("microsoft.com", "o"));

// 23 Write a JavaScript function to find the first not repeated character.

// const findFirstRepeated = (str) => {
//   let arr1 = str.split("");
//   let result = "";
//   let count = 0;

//   for (let x = 0; x < arr1.length; x++) {
//     count = 0;

//     for (let y = 0; y < arr1.length; y++) {
//       if (arr1[x] === arr1[y]) {
//         count += 1;
//       }
//     }

//     if (count < 2) {
//       result = arr1[x];
//       break;
//     }
//   }
//   return result;
// };
// console.log(findFirstRepeated("abacddbec"));

// 24 Write a JavaScript function to apply Bubble Sort algorithm.

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (z = 0; z < arr.length - i - 1; z++) {
//       if (arr[z] < arr[z + 1]) {
//         let temp = arr[z];
//         arr[z] = arr[z + 1];
//         arr[z + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

// 25 Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output

// const LongestCountry = (country_name) => {
//   return country_name.reduce(function (lname, country) {
//     return lname.length > country.length ? lname : country;
//   }, "");
// };
// console.log(
//   LongestCountry(["Australia", "Germany", "United States of America"])
// );

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

// function sort(names) {
//   str = "";
//   str1 = "";
//   nameString = names.split("");

//   for (j = 0; j < nameString.length; j++) {
//     for (i = j; i < nameString.length; i++) {
//       if (str.includes(nameString[i])) break;
//       else str += nameString[i];
//     }
//     if (str1.length < str.length) str1 = str;
//     string = "";
//   }
//   return str1;
// }
// console.log(sort("Abtra"));

// 27 Write a JavaScript function that returns the longest palindrome in a given string.

// function isPalindrome(str1) {
//   let arr = str1.split("").reverse().join("");
//   return str1 == arr;
// }
// function longestPalindrome(str1) {
//   let maxLength = 0,
//     map = "";

//   for (let i = 0; i < str1.length; i++) {
//     let subs = str1.substr(i, str1.length);

//     for (let j = subs.length; j >= 0; j--) {
//       let subSubsStr = subs.substr(0, j);
//       if (subSubsStr.length <= 1) continue;

//       if (isPalindrome(subSubsStr)) {
//         if (subSubsStr.length > maxLength) {
//           maxLength = subSubsStr.length;
//           map = subSubsStr;
//         }
//       }
//     }
//   }

//   return map;
// }
// console.log(longestPalindrome("Seattle"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

// function greet() {
//   return "Hello";
// }

// function name(user, func) {
//   const message = func();

//   console.log(`${message} ${user}`);
// }

// name("Ethan", greet);

// 29 Write a JavaScript function to get the function name.

// const FunctionName = (sum) => {
//   return sum.name;
// };
// const funcName = () => {
//   return funcName.name;
// };

// console.log("FunctionName");
// console.log(funcName());

//  Reducer
// Array.prototype.myReduce = function (num) {
//   let result = 0;
//   for (let i = 0; i < this.length; i++) {
//     num((result += this[i]));
//   }
//   return result;
// };

// const findSum = [10, 20, 30];
// let sum = (findSum) => {
//   return findSum.myReduce((z, y) => {
//     return z + y;
//   }, 0);
// };

// console.log(sum(findSum));
