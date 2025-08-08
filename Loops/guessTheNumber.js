// Guess the Number Between 1 to 100 

const randomNumber = Math.floor(Math.random() * 100) + 1 // Generates a random number between 1 and 100

console.log("Guess the number between 1 and 100!");

let guessNumber = 0;

while (guessNumber !== randomNumber) {

    guessNumber = prompt('Enter The Number');

    if (isNaN(guess) || guessNumber < 1 || guessNumber > 100) {
        console.log('please enter the number between 1 to 100 ');
        continue
    }

    if (guessNumber < randomNumber) {
        console.log('too low...');
    } else if (guessNumber > randomNumber) {
        console.log('too high...');
    } else {
        console.log('Congrats 😍' + 'the Number is' + guessNumber);
    }

}