// Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

// Input
// The input file contains 4 integer values.

// Output
// Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.

// Input Samples	Output Samples
// 5
// 6
// 7
// 8

// DIFERENCA = -26

function difference(A,B,C,D){
    var diferenca = (A * B) - (C * D); 
    console.log(`DIFERENCA = ${diferenca}`);
}

difference(5,6,7,8);
difference(0,0,7,8);
difference(5,6,-7,8);
