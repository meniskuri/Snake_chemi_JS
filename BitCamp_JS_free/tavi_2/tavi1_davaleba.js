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
    
    // Perform the calculation (here, addition is used as an example)
    var result1 = text1 + text2;
    var result2 = parseInt(text1) + parseInt(text2)
    var result3 = parseInt(text1) - parseInt(text2)
    var result4 = parseInt(text1) / parseInt(text2)

    // Display the result in the output text box
    document.getElementById('text1').value = text1
    document.getElementById('text2').value = text2

    document.getElementById('result1').value = `var ${result1} is  ${typeof result1}`
    document.getElementById('result1_numbers').value = `var ${result2} is  ${typeof result2}`
    document.getElementById('result1_numbers_minus').value = `var ${result3} is  ${typeof result3}`
    document.getElementById('result1_numbers_gayofa').value = result4
    // უნდა ჩავამატო მინუსი გამრავლება გაყოფა და ნაშთი და isNaN სადმე გამოვიყენო
  
}

function clear_button(){
    document.getElementById('text1').value = ""
    document.getElementById('text2').value = ""
    document.getElementById('result1').value = ""
    document.getElementById('result1_numbers').value = ""
    document.getElementById('result1_numbers_minus').value = ""


}


