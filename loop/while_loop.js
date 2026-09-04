function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
  
  let counter = 0;

  //It will 1st check the condition then move to line 9 if the condition is true
  while ( counter < 10 ) {
    console.log( getRandomNumber(10) );
    counter += 1;
  }