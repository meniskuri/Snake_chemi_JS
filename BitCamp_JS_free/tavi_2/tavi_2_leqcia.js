function example() {
    if (true) {
        var x = 10; // function-scoped with hoisting
        var y = 20; // block-scoped
    }

    console.log(x); // 10
    console.log(y); // ReferenceError: y is not defined
}

example()

const x = 5
console.log(`x = ${x}`)

if (x < 10){
    console.log("1")
} 
if (x < 10) {
    console.log("2")
}