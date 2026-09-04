function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
  
  let counter = 0;
  while ( counter < 10 ) {
    console.log( getRandomNumber(10) );
    counter += 1;
  }