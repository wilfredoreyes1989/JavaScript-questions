

// Question 8. Opposite boolean
// Given a boolean (true or false), return the opposite boolean.
// Example -
// oppositeBoolean(true) -> false
// oppositeBoolean(false) -> true

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(false));


// Question 9. Is not the number 0
// Given ANY element, return true if it is NOT the number 0
// Example -
// isNotZero(5) -> true
// isNotZero(0) -> false
// isNotZero(null) -> true

function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));


// Question 10. Calculate the remainder
// Given two numbers, return their remainder when divided by each other.
// Example -
// calcRemainder(4,2) -> 0
// calcRemainder(7,8) -> 7
// calcRemainder(9,8) -> 1

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4,2));
console.log(calcRemainder(7,8));
console.log(calcRemainder(9,8));


// Question 11. 