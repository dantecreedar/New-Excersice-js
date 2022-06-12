document.write("Solutin-03 <br> <hr>")

const solution = ()=>{
    let size = 8;
let nextLetter = ' ';  // Represents topmost left square
let string = '';


// Create a string of length (size^2 + size) characters depicting a chessboard pattern.
for (let n = 1; n <= (size * size); n++) {
	string += nextLetter;

	// If a string has become `size` chars long, move to the new row;
	// Otherwise, alternate between ' ' & '#' based on the current value of nextLetter.
	if (n % size == 0) {
		string += '\n';
      	
      	// Perform another alternation of the value of nextLetter if size is an odd number,
        // to ensure that the new row starts with the letter opposite to the one in current row.
      	// This is not required when size's value is an even number.
      	if (size % 2 == 1) {
      		nextLetter = (nextLetter == ' ')? '#': ' ';
        }
	}
	else {
		nextLetter = (nextLetter == ' ')? '#': ' ';
	}
}

console.log(string);
document.write("View Console => PRESS CLICK F2")
}

solution();