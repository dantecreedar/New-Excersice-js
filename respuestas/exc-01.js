//Solution

const solution = () => {
    document.write("Solution 1 <br> <hr>")
    for (let string = '#'; string.length != 7; string += '#') {
        console.log(string);
        document.write(`${string} <br>`);
    }
}

solution();