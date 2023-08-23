// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
var drink = ' limbu pani ';

console.log(drink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = 'apple, banana, orrange, pinaapple, grapes';

// method1
// let spliting = fruits.split(',')
// for (let i = 0; i < spliting.length; i++) {
//     var ans = ''
//     if (spliting[i] === 'apple') {
//         ans = 'yes, Apple is there'
//     } else {
//         ans = 'no, Apple is not there'
//     }
// }
// return ans

// method2
console.log(fruits.search('phone') > -1 ? 'yes, Apple is there' : 'no, Apple is not there')

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function random() {
//     let arr = ['rock', 'paper', 'scissors']
//     let random = Math.floor(Math.random() * arr.length)
//     // let random = Math.random() * arr.length
//     console.log('random', random)
//     return arr[random]
// }
// console.log(random())
function randomRockPaperScissors() {
    let random = Math.random()
    if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(randomRockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
    let botChoice = randomRockPaperScissors()
    if ((playerChoice === 'rock' && botChoice === 'scissors')  || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')) {
        console.log('You win')
    } else if (playerChoice === botChoice){
        console.log('You Tied')
    } else {
        console.log('You lose')
    }
}

checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
// function game1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(checkWin(arr[i]))
//     }
// }
// game1(['rock', 'paper', 'scissors'])
function playGameXTimes(arr) {
    arr.forEach(choice => checkWin(choice));
}

playGameXTimes(['rock', 'paper', 'scissors'])