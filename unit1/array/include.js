const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//check if Week included 'Monday' and it does so Prints true
console.log(week.includes('Monday'));

//check if Week included 'Tommy' and it does NOT so Prints false
console.log(week.includes('Tommy'));

/*
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (!search){
  message = `<strong>In stock:</strong>${inStock.join(', ')}`;
}else if (inStock.includes(search.toLowerCase())){
  message = `Yes, we have <strong>${search}</strong>`;
}else{
  message = `Sorry we don't have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase())}`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;
*/
