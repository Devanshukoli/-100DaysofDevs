//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShow = ['the office', 'games of thrones', 'breaking bad', 'stragner things', 'the walking dead']
// for (let i = 0; i < tvShow.length; i++) {
//     console.log(tvShow[i])
// }
tvShow.forEach(tvShow => console.log(tvShow))

//Create and array of numbers
let num = [1, 2, 3, 4, 5]
//Return a new array of numbers that includes every even number from the previous Arrays
let evenNum = num.filter(num => num % 2 == 0)
console.log(evenNum)

//Create a function that takes in an array of numbers
function number(num) {
    num = [1, 2, 3, 4, 5]
    sum = Math.max(...num) + Math.min(...num)
    alert(sum)
    return sum
}
console.log(number(num))
//Alert the sum of the second lowest and the second highest number
