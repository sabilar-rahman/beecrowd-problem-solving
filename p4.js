// Extremely Basic
// Adapted by Neilor Tonin, URI  Brazil

// Timelimit: 1
// Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

// Input
// The input file will contain 2 integer numbers.

// Output
// Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value of X, according to the following example.

// Obs.: don't forget the endline after all.


// function sum(a, b){
//     var x = a + b;  // Change the addition to subtraction
//     console.log(`X = ${x}`);
// }

// sum(10, 9); 
// sum(-10, 4); 
// sum(15, -7); 



var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log('X = ' + (a+b));
