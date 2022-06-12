const solution = () =>{
    document.write("Solutio-02 <br> <hr>")
    // 1 - Simple Solution
for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log('FizzBuzz');
        document.write('FizzBuzz <br>')
    }
    else if (n % 3 == 0) {
        console.log('Fizz');
        document.write('Fizz <br>')
    }
    else if (n % 5 == 0) {
        console.log('Buzz');
        document.write('Buzz <br>')
    }
    else {
        console.log(n);
        document.write(`${n} <br>`)
    }
}

// 2 - Clever Solution
for (let n = 1; n <= 100; n++) {
    // Insert word(s) into `output` string, using conditionals.
    let output = '';

    if (n % 3 == 0) {
        output += 'Fizz';
    }
    
    if (n % 5 == 0) {
        output += 'Buzz';
    }

    // Using OR operator to shortcircuit expression
    console.log(output || n);    
}


}

solution();