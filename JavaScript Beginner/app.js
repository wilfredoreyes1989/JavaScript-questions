

// Question 1. Return the sum of Two Numbers
// Create a function that takes two arguments as functions and return their sum.

function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3, 5))


// Question 2. Convert Hours into Seconds
// Create a function that converts hours into seconds
// Example -
// hoursIntoSeconds(2) -> 7200
// hoursIntoSeconds(10) -> 36000
// hoursIntoSeconds(24) -> 86400

function hoursIntoSeconds(hour) {
    return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));


// Question 3. Calculate the Perimeter of a Rectangle 
// Create a function that takes length and width of a rectangle and return it's perimeter.
// Example -
// calcPerimeter(6,7) -> 26
// calcPerimeter(20,10) -> 60
// calcPerimeter(2,9) -> 22

function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20,10))
console.log(calcPerimeter(2,9))


// Question 4. Calculate the Area of a Triangle
// Write a function that takes the base and height and return its area.
// Example - 
// calcTriangleArea(3,2) -> 3
// calcTriangleArea(10,10) -> 50
// calcTriangleArea(20,20) -> 200
// Take in two arguments, base & height
// Formula to calculate area is 0.5 * base * height
// Return the answer and console.log it

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(3,2))
console.log(calcAreaOfTriangle(10,10))
console.log(calcAreaOfTriangle(20,20))


// Question 5. Extend a string
// Write a function accepts a string and adds 'Frontend' onto the end of it.
// Example -
// appendFrontend('Apple') - > "AppleFrontend"
// appendFrontend('Banana') - > "BananaFrontend"
// appendFrontend('Orange') - > "OrangeFrontend"
// Accept a string 
// Adding strings is similar to adding numbers
// Don't forget to return your result

function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'));
console.log(appendFrontend('Banana'));
console.log(appendFrontend('Orange'));


// Question 6. Greater than 100?
// Given two numbers, return true if the sum of both numbers is greater then 100.
// Otherwise, return false.
// Example - 
// sumGreaterThan100(20,10) -> false
// sumGreaterThan100(50,60) -> true
// sumGreaterThan100(100,-50) -> false

function sumGreaterThan100(num1, num2) {
    return num1+ num2 >= 100
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));


// Question 7. Less than or Rqual to Zero?
// Write a function that accepts a number and return true if it is less than or
// equal to zero, otherwise returns false.
// Example -
// lessThanOrEqualToZero(3) -> false
// lessThanOrEqualToZero(0) -> true
// lessThanOrEqualToZero(-2) -> true

function lessThanOrEqualToZero(number) {
    return number <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


// Question 8. Given a boolean (true or false), return the opposite boolean
// Example -
// oppositeBoolean(true) -> false
// oppositeBoolean(false) -> true

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(false));
console.log(oppositeBoolean(true));


// Question 9. Is not the number 0
// Given ANY element, return true if it is NOT the number 0.
// Example -
// isNotZero(5) -> true
// isNotZero(0) -> false
// isNotZero(null) -> true

function isNotZero(num) {
    if (num !== 0) {
        return true;
    }
    else {
        return false
    }
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(''))

// you can also use the code below for shorter code

function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(''));


// Question 10. Calculate the remainder
// Given two numbers, return their remainder when divided by each other.
// Example -
// calcRemainder(4,2) -> 0
// calcRemainder(7,8) -> 7
// calcRemainder(9,8) -> 1

function calcRemainder(num1, num2) {
    return num1 % num2; 
}

console.log(calcRemainder(4,2));
console.log(calcRemainder(7,8));
console.log(calcRemainder(9,8));


// Question 11. Is the number odd?
// Given two numbers, return true if the number is odd
// Example -
// isOdd(1) -> true
// isOdd(2) -> false
// isOdd(3) -> true

function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));


// Question 12. If a number is even, return 1 otherwise return -1
// Create a function that takes a number argument and returns 1 if the number 
// is even. If the number is odd return -1
// Example -
// booleanInteger(1) -> -1
// booleanInteger(2) -> 1
// booleanInteger(5) -> -1

function booleanInteger(num) {
    if (num % 2 === 0) {
        return 1;
    }
    return -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// you can also use the code below for shorter code

function booleanInteger(num) {
    return num % 2 === 0 ? 1: -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));


// Question 13. Check if a user is logged in AND subscribed
// Create a function that takes in two strings. If the first string is
// equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED'
// return true, otherwise return false 
// Example -
// isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED) -> true
// isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED) -> false
// isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED) -> false

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));


// Question 14. Check if a user is logged in OR subscribed
// Create a function that tales in two strings. If the first string 
// is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED'
// return true, otherwise return false
// isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED) -> true
// isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED) -> false
// isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED) -> false

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));