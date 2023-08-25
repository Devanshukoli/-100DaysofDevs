// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
var sentance = "hello, How are you?"
// let ans = sentance.search((findQuestionMark) => findQuestionMark === '?' ? 'Yes, it is a question' : 'No, it is not a question')
let ans = sentance.endsWith('?') ? 'Yes, it is a question' : 'No, it is not a question'
console.log(ans)

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
var str = 'Hello, I am Devanshu. And I am a jr. dev'
var replaceable = str.replace('jr. dev', 'software engineer')
console.log(replaceable)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function randomRockPaperScissors() {
    let draw = Math.random()
    if (draw < .33) {
        return 'rock'
    } else if (draw < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
console.log(randomRockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function game(playerChoice) {
    let botChoice = randomRockPaperScissors()
    if ((botChoice === 'rock' && playerChoice === 'paper') || (botChoice === 'paper' && playerChoice === 'scissors') || (botChoice === 'scissors' && playerChoice === 'rock')) {
        return 'You win'
    } else if (botChoice === playerChoice) {
        return 'You tied'
    } else {
        return 'You lost'
    }
}
console.log(game('rock'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function takeXTime(arr) {
    return arr.forEach(choice => game(choice));
}
takeXTime(['rock', 'paper', 'scissors'])
