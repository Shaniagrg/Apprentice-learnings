// DOM ELEMENTS
const dogImage = document.getElementById("dog-image");
const selectMenu = document.getElementById("dog-select");
const fetchButton = document.getElementById("fetch-btn");

// INITIALIZATION
fetchBreedList();

// FETCH FUNCTIONS

//async is when we use await and we are telling this function to pause at that line until the promise is resolved without blocking the rest of the program
//while this is running JS can continue running other code elsewhere
async function fetchBreedList(){
  try{
    //if the URL is wrong will throw manual error and goes to catch
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    
    if (!response.ok){
      throw new Error(`Error data - Status${response}`)
    }
    const data = await response.json();
    populateBreedOptions(data.message);
  } catch (error){
      console.error(error);
  }
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