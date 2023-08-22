//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(n1, n2) {
    alert(n1 - n2)
    // let res = n1 - n2
    // alert(res)
}
subTwoNumsAndAlert(50, 30)
// subTwoNumsAnd1Alert(100,33)

//create a function that divides three numbers and console logs the quotient
function dividesThreeNumsAndLogs(zebra, forest, unicorn) {
    console.log(zebra / forest / unicorn)
}
dividesThreeNumsAndLogs(12, 4, 3)

//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsAndReturn(num1, num2, num3) {
    console.log('this will run');
    return num1 * num2 * num3
    console.log('this will never run') //why? because return stops the function
}
console.log(multiplyThreeNumsAndReturn(5, 10, 2))

// create a function that takes in a number and multiplies it by itself. The function should return the product. Alert the return value of the function.
function turnIntoMoney() {
    let product = multiplyThreeNumsAndReturn(5, 10, 2)
    alert('$' + product)
}
turnIntoMoney()


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1, n2, n3) {
    return (n1 + n2) % n3
}
console.log(addTwoAndDivide(3, 3, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 then add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

// creat fun , take 4 nums
function doMath(a, b, c, d) {
    // multiply the first 2 nums 
    // a and b
    let multiply = a * b
    // console.log(multiply);

    if (multiply > 100) {
        console.log(multiply + (c + d))
    } else if (multiply < 100) {
        console.log(multiply - (c - d))
    } else if (multiply === 100) {
        alert((a * b * c) % d)
    }
}
doMath(2, 10, 10, 10)