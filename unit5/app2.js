// DOM ELEMENTS
const dogImage = document.getElementById("dog-image");
const selectMenu = document.getElementById("dog-select");
const fetchButton = document.getElementById("fetch-btn");

// INITIALIZATION
fetchBreedList();

// FETCH FUNCTIONS

//async is when we use await and we are telling this function to pause at that line until the Promise is resolved cuz it takes time 
//while this is running JS can continue running other code elsewhere without blocking the rest of the program
async function fetchBreedList(){
    //await means You are telling JavaScript: "Stop right here and wait for the waiter to return with the response BEFORE moving to the next line."
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  populateBreedOptions(data.message);
}

// UI HELPER FUNCTIONS

function populateBreedOptions(breeds){
  Object.keys(breeds).forEach(breed => {
    const option = document.createElement("option");
    option.value = breed;             // Hidden value for JS 
    option.textContent = breed;       // Visible text for human       
    selectMenu.appendChild(option);   // Pins option into HTML dropdown
  });
}
// EVENT LISTENERS