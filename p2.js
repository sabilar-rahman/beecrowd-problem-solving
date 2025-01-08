// Your teacher would like to make a screen with the following characteristics:

// Have 39 dashes (-) on the first line;
// Have a | underneath the first dash and the thirty-ninth dash of the first line, below the dash should begin to write the word "Roberto" and the rest fill in the middle with white space;
// Have a | below the first dash and the thirty-ninth dash of the first line, fill in the middle with whitespace;
// Have a | below the first dash and the thirty-ninth dash of the first line, below the 10 dash you should begin to type the number "5786" and the rest fill in the middle with whitespace;
// Repeat procedure 3;
// Have a | underneath the first dash and the thirty-ninth dash of the first line, below the dash 10 should begin to write the word "UNIFEI" and the rest fill in the middle with white space;
// Repeat procedure 1.
// At the end should look like the following image:

// --------------------------------------- (39 traces)
// |        Roberto                      |
// |                                     |
// |        5786                         |
// |                                     |
// |        UNIFEI                       |
// --------------------------------------- (39 traces)

// Input

function printScreen() {
    const border = "-".repeat(39);
    const emptyLine = `|${" ".repeat(37)}|`;
    const robertoLine = `|${" ".repeat(8)}Roberto${" ".repeat(25)}|`;
    const numberLine = `|${" ".repeat(8)}5786${" ".repeat(27)}|`;
    const unifeiLine = `|${" ".repeat(8)}UNIFEI${" ".repeat(25)}|`;

    console.log(border);
    console.log(robertoLine);
    console.log(emptyLine);
    console.log(numberLine);
    console.log(emptyLine);
    console.log(unifeiLine);
    console.log(border);
}

// Call the function to print the output
printScreen();