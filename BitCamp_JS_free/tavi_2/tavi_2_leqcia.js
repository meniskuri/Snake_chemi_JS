const readline = require('readline');

// Define a global variable to store the user's input
let userInput = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (input) => {
  // Store the user's input in the global variable
  userInput = input;

  // Log the user's input and the global variable value
  console.log(`You entered: ${input}`);
  console.log(`Stored userInput: ${userInput}`);
  
  // Close the readline interface
  rl.close();
});
