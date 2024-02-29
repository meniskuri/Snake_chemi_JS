// Generate a random number between 0 and 1
// let randomNum = Math.random();

// Generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

// Example usage:
let minimum = 7;
let maximum = 15;

let mtvleli = 0

while (mtvleli < 10){
    let randomNumber = getRandomInt(minimum, maximum);
    console.log(randomNumber); // Output will be a random number between 1 and 99
    mtvleli++
}

