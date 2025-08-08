// Reverse The Numbers from 1234 to 4321




var number = 1234
var reveredNumber = 0;

while (number > 0) {
    let digit = number % 10  // gives the last digit
    reveredNumber = reveredNumber * 10 + digit
    number = Math.floor(number / 10) // remove the last digit from actual number 
}

console.log(reveredNumber);




