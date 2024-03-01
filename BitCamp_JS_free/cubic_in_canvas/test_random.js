// Generate a random number between 0 and 1
let randomNum = Math.random();

// Generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

// Example usage:
let minimum = 7;
let maximum = 15;

randomNum = getRandomInt(minimum, maximum);

console.log(randomNum)


