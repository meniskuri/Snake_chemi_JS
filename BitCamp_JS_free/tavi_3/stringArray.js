const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function davaleba2 () {
    
    rl.question('Enter something: ', (sheyvana) => {  
    // Log the user's input and the global variable value
    console.log(`You entered: ${sheyvana}`);
    
    let shemowmebeliStriqoni = `gio`
    let gasayofiRcixvi = 7
    
    console.log(`shesamowmebeli striqonia: ${shemowmebeliStriqoni}`)
    console.log(`shesamowmebeli ricxvia: ${gasayofiRcixvi}`) 

    if (isNaN(sheyvana) === true) {
        console.log("sheyvaniia striqoni")
        console.log(sheyvana.includes('gio'));
        // test 
        const array1 = [1, 2, 3];

        console.log("aq var")
        console.log(array1.includes(2));
        // Expected output: true

        const pets = ['cat', 'dog', 'bat'];

        console.log(pets.includes('cat'));
        // Expected output: true

        console.log(pets.includes('at'));
        // Expected output: false

        rl.close();
    } else {
        console.log("sheyvanilia ricxvi")
      
        // რიცხვი ლუწია თუ კენტი  
        if (sheyvana % 2 === 0) {
            console.log(`sheyvanili ricxvi: ${sheyvana} > luwia`)
        } else {
            console.log(`sheyvanili ricxvi: ${sheyvana} > kentia`)
        }
        // შეყვანილი რიცხვი უარყოფითია დადებითი თუ ნული
        if (sheyvana === 0) {
            console.log(`ricxvi 0 ia`)
        } else if (sheyvana > 0) {
            console.log(`ricxvi dadebitia`)
        } else {
            console.log(`ricxvi uaryofitia`)
        }
    }

    rl.close();

  }); 
}

davaleba2();
