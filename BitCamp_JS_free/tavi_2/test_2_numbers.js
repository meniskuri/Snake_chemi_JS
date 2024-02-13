const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input1, input2;

rl.question('Enter the first input: ', (answer1) => {
  input1 = answer1;
  rl.question('Enter the second input: ', (answer2) => {
    input2 = answer2;
    console.log(`You entered: ${input1} and ${input2}`);
    rl.close();
  });
});