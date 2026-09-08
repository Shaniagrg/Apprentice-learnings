const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
  };

for (let propertys in person){

//access key by simply calling the key 
console.log(`this is key: ${propertys}`);

//access value by variableName[key] ccuz DOT notation wont work 
console.log(`This is a property: ${person[propertys]}`);
}

