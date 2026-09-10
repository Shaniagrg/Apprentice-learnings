const brass = [ ['trumpet'], ['tuba'], ['trombone'] ];
const instruments = [...brass];

instruments.shift().shift(); 
//  "trumpet"

//  Notice how the brass array is also affected by this:
brass
//  [ [], ["tuba"], ["trombone"] ]