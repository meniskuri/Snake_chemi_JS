function calculate() {
    // Get the values from the input boxes
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;

    // Perform the calculation (here, addition is used as an example)
    var result1 = text1 + text2;


    // Display the result in the output text box
    document.getElementById('result1').value = result1;
    document.getElementById('result2').value = typeof result1;
}

