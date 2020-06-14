/*
============================================
; Title:  controlStatements-error.js
; Author: Marie Nicole Barleta
; Date:   9 June 2020
; Modified By: Devan Wong
; Description: Find the error
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Control Statements Find Errors"));
console.log("\n")

/*
Find multiple errors.

Expected Output:

1 is odd
2 is even
3 is odd
4 is even
5 is odd

*/

//Start of code

for (var i=1; i <= 5; i++){
  if (num % 2 != 0){
    console.log(i + " is odd");
  }
  else {
    console.log(i + " is even");
  }
}


