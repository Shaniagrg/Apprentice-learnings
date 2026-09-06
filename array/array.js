const instruments = ['piano', 'drums', 'trumpet'];

instruments.push('guitar');
console.log(instruments);

//You can add more than one element in an array
instruments.push('guitar', 'flute');
console.log(instruments);

instruments.unshift('bell');
console.log(instruments);

instruments.unshift('bell','flute');
console.log(instruments);