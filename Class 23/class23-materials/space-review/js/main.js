//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 3, 4, 54]
let sum = arr.reduce((acc, currentValue) => acc + currentValue, intialValue = 0)
console.log('sum', sum)

//Create a function that takes in an array of numbers
// function sumOfArray(arr) {
//     //Return a new array of numbers that is every original number squared
//     let square = arr.map((num) => num * num)
//     console.log(square)
// }
let sumOfArray = (arr) => arr.map((num) => num * num) 
console.log(sumOfArray(arr))

// //Create a function that takes string
// function reverseStr(str) {
//     //Print the reverse of that string to the console
//     return str.split('').reverse().join('')
// }
let reverseStr = (str) => str.split('').reverse().join('')
console.log(reverseStr('hello'))

// //Create a function that takes in a string
// function checkPalindrom(str) {
//     //Alert if the string is a palindrome or not
//     if (str === str.split('').reverse().join('')) {
//         return true
//     } else {
//         return false
//     }
// }
let checkPalindrome = (str) => str === str.split('').reverse().join('') ? true : false
console.log(checkPalindrome('racecar'))
