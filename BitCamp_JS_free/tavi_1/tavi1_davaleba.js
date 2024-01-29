function calculate() {
    // Get the values from the input boxes
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var text1 = document.getElementById("text1").value;
    

    // Perform the calculation (here, addition is used as an example)
    var result = parseFloat(num1) + parseFloat(num2);
    var result2 = parseFloat(num1) - parseFloat(num2);
    var result3 = text1 + result + result2;
    var result4 = text1

    // Display the result in the output text box
    document.getElementById('result').value = result;
    document.getElementById('result2').value = result2;
    document.getElementById('result3').value = result3;
    document.getElementById('result4').value = typeof result2;
}


