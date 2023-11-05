"use strict";
/*

*/

const inputSentence = "I Love JavaScript";
//Arrow functions
const reverseWords = (s) =>
  s
    .split(" ") // "I"  "Love" "JavaScript"
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

const reversedSentence = reverseWords(inputSentence);
console.log("Original Sentence: " + inputSentence);
console.log("Reversed Sentence: " + reversedSentence);

/*
B. Perform sorting of an array in descending order.
 */
console.log("Array descending order");
const arr = [4, 2, 7, 1, 9];
arr.sort((a, b) => b - a); // Sort in descending order(highest to lowest)
console.log(arr);
