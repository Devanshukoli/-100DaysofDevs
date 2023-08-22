// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
var holiday
holiday = "Independence Day"
console.log('holiday....', holiday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
var str
str = "Devanshu"
alert(str.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
console.log('enter into function ')
function sub(n1, n2, n3, n4, n5) {
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference))

}

sub(1, 2, 3, 4, 5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function nums(a, b, c) {
    console.log(`the lowest num is ${Math.min(a, b, c)} and the highest num is ${Math.max(a, b, c)}`)
    // console.log('lowest num : ', Math.min(a, b,c))
    // console.log('highest num : ', Math.max(a, b,c))
}

nums(1, 2, 3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTails() {
    let result = Math.random()
    if (result < 0.5) {
        return 'heads'
    } else {
        return 'tails'
    }

}

// console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function something(n) {
    for (let i = 1; i <= n; i++) {
        let result = headOrTails()
        console.log(result)
    }
}

something(1)