// Give the prime number.
// Has only two factors → 1 and itself

//  Examples of Prime Numbers: 
// 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

// 2 is prime because it is divisible only by 1 and 2.
// 3 is prime because it is divisible only by 1 and 3.


const number = 3;


if (isNaN(number)) {
    console.log("Please enter a valid number");
    return
}

if (number <= 0) {
    console.log("Please enter a positive number");
    return;
}


for (let i = 2; i <= Math.floor(number / 2); i++) {

    var isPrime = true;
    if (number % i === 0) {
        isPrime = false;
        break;
    }

}
console.log(isPrime);



