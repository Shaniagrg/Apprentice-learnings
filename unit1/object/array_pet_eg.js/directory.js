let html = '';

for (let i = 0; i < pets.length; i++ ){
 
  let displayPet = pets[i];
      
  html += `<h2>${displayPet.name}</h2>
      <h3>${displayPet.type} | ${displayPet.breed}</h3>
      <p>Age: ${displayPet.age}</p>
      <img src=${displayPet.photo} alt=${displayPet.breed}`
}

document.querySelector('main').insertAdjacentHTML('beforeend', html)