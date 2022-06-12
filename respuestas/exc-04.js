document.write("Solution-04 <br> <hr>")
// 1 - Using function expressions
/*
const min = function(x, y) {
    return (x < y)? x: y;
};
*/
// 2 - Using function declarations
/*
function min(x, y) {
    return (x < y)? x: y;
}
*/
// 3 - Using arrow functions
const min = (x, y) => (x < y)? x: y;

// Test values
console.log(min(0, 10));
document.write(min(0, 10), '<br>')
// -> 0
console.log(min(0, -10));
document.write(min(0, -10));
// -> -10