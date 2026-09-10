//do whil execute the loop atleast one time before checking for the condition

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
  
  let counter = 0;
  do {
    console.log( getRandomNumber(10) ); //will print 1st
    counter ++; //increment operator 
  } while ( counter < 10 ); //then checks the condition

