//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < arrNum.length; i++) {
//     sum += arrNum[i];
// }
// console.log(sum);
// alert(sum);
let sum = arrNum.reduce((acc, currentValue) => acc + currentValue, initialValue = 0)
console.log(sum);



//Create a function that takes in an array of numbers
function square(arr) {
    //Return a new array of numbers that is every original number squared
    return arr.map(x => x * x)
}

console.log(square(arrNum));

//Create a function that takes string
function reverseStr(str) {
    //Print the reverse of that string to the console
    return str.split("").reverse().join('')
    
}
console.log(reverseStr("hello"));

//Create a function that takes in a string
function checkPalindrome(str) {
    //Alert if the string is a palindrome or not
    if (str === str.split('').reverse().join('')) {
        console.log('Yes')
        // alert('Yes')
    } else {
        console.log('No')
        // alert('No')
    }
}

checkPalindrome('racecar')