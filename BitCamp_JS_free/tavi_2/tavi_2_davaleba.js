const readline = require('readline');

const randomNumber = Math.floor(Math.random() * 100) + 1;

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the game
function startGame() {
  rl.question('Guess a number between 1 and 100: ', (input) => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
      startGame(); // Ask for input again
    } else {
      if (guess === randomNumber) {
        console.log('Congratulations! You guessed the correct number.');
        rl.close(); // Close the readline interface
      } else if (guess < randomNumber) {
        console.log('The number is higher. Try again.');
        startGame(); // Ask for input again
      } else {
        console.log('The number is lower. Try again.');
        startGame(); // Ask for input again
      }
    }
  });
}

// Start the game
startGame();