// Read two integer values. After this, calculate the product between them and store the result in a variable named PROD. Print the result like the example below. Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

// Input
// The input file contains 2 integer numbers.

// Output
// Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.

// Input Samples	Output Samples
// 3
// 9 // PROD = 27

// -30
// 10 // PROD = -300

// 0
// 9 // PROD = 0


function sum(a, b) {
    var x = a * b;  // multiplication 
    console.log(`PROD = ${x}`);
}

sum(3, 9); 
sum(-30, 10); 
sum(0, 0);
