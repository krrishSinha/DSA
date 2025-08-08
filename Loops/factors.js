// Calculate the factors of a number using a loop

const number = 12;

if (isNaN(number)) {
    console.log("Please enter a valid number");
    return
}

if (number <= 0) {
    console.log("Please enter a positive number");
    return;
}


for (var i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
console.log(number);