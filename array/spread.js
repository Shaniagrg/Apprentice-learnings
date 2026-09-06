//Spread operator allows you to build, combine and manipulate arrays quickly and more seamlessly

const middle = ['lettuce', 'cheese', 'patty'];
//... the 3 dots is necessary 
const burger = ['top bun', ...middle, 'bottom bun'];
console.log(burger);

const cup = ['small', 'medium', 'large'];
const drink = ['cappucino', 'latte'];

const starbucks = [...cup, ...drink];

console.log(starbucks);

//add an element in the cup
cup.push('grande');
console.log(cup);

//You won't see the value added inside cup added to starbucks cuz the value is already copied
console.log(starbucks);