const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function davaleba2 () {
  console.log("tavidan dawyebashi var")

  rl.question('Enter something: ', (sheyvana) => {  
    // Log the user's input and the global variable value
    console.log(`You entered: ${sheyvana}`);
    console.log(`sheyvana aris ${typeof sheyvana}`)  
    sheyvana = parseFloat(sheyvana)
    console.log(`sheyvana aris ${typeof sheyvana}`)
    console.log(`You entered: ${sheyvana}`);

    if (isNaN(sheyvana) === true) {
      console.log("sheyvanet ricxvi")
      davaleba2()
    } else {
      console.log("aq var da unda shevamowmo sheyvanili ricxvi")
      rl.close();
    }
    
  }); 
}

davaleba2();
