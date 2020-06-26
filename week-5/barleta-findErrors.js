/*
 	============================================
 	; Title: barleta-findErrors.js
 	; Author: Marie Nicole Barleta
 	; Date: 25 June 2020
 	; Modified By: Devan Wong
 	; Description: Find errors advanced arrays
 	;===========================================
   */
   
/*Expected output:
 	Do
 	Re
 	Mi
 	Fa
 	So
 	La
 	Ti
 	Do
 	*/

 	//Code has multiple errors
 	let chords = new Map();
// added lots of ';' to make code more legible. 
 	chords.set('C', 'Do' );
 	chords.set('D', 'Re' );
 	chords.set('E', 'Mi' );
 	chords.set('F', 'Fa' );
 	chords.set('G', 'So' );
 	chords.set('A', 'La' );
 	chords.set('B', 'Ti' );

  //deletes all the console.log so we can see a clean output.
 	for (let [key, value] of chords){
    console.log(value);
   }
  //deleted "key" and kept it C to grab the value 'Do'.
  console.log(chords.get('C'));
