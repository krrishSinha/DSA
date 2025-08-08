// Sum of n Natural Numbers

let number = 5;
var sum = 0;

if(isNaN(number)){
    console.log("Please enter a valid number");
    return
}

if(number <=0){
    console.log("Please enter a positive number");
    return;
}

for (var i = 1; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);
