function calculate() {
    
    // Get the values from the input boxes
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;


    var length_text1 = text1.length;
    var length_text2 = text2.length;  

    if (length_text1 == 0) {
        text1 = prompt("sheiyvane ricxvi text1: ")        
    }
    if (length_text2 == 0) {
        text2 = prompt("sheiyvane ricxvi text2: ")
    }
    
    var text3 = parseInt(text1)
    document.getElementById('result1 numbers').value = `var ${text3} is  ${typeof text3}`
      
    // Perform the calculation (here, addition is used as an example)
    var result1 = text1 + text2;
    var result2 = text1 - text2;

    // Display the result in the output text box
    document.getElementById('result1').value = `var ${result1} is  ${typeof result1}`
}

