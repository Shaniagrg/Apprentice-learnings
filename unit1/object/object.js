const person ={
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
  }
  
  //Access  by using DOT NOTATION
console.log(person.name); 
console.log(person.city);

//Access using the name of key inside string
console.log(person['name']);

//Use of dot notation in a string
const message = `Hi, I'm ${person.name}. I live in ${person.city}.`;
console.log(message);

//Chnage the value of the key
console.log(`Most know me as ${person.name = "Duke"}`)
//Value of the name has been changed to Duke
console.log(person.name)

//Access to the array and using it by join() or .lenght to find the length
const skillsEdward = `I have ${person.skills.length} skills: ${person.skills.join(', ')}`
console.log(skillsEdward)