// DOM ELEMENTS
const dogImage = document.getElementById("dog-image");
const selectMenu = document.getElementById("dog-select");
const fetchButton = document.getElementById("fetch-btn");

// INITIALIZATION

// FETCH FUNCTIONS
// 1. You send the waiter (fetch)
fetch("https://dog.ceo/api/breeds/list/all") 
  // 2. Waiter brings sealed HTTP Response -> response.json() unpacks it into a JS object

  .then(response => response.json())
  // 3. 'data' gets that JS object -> pass 'data.message' (the breeds) to your function
  .then(data => populateBreedOptions(data.message))

  // 4. Safety net if the URL is wrong or internet drops
  .catch(error => console.error(`Error fetching data: ${error}`))

// UI HELPER FUNCTIONS
// 5. Helper function loops through key names and builds the HTML options
function populateBreedOptions(breeds){
  Object.keys(breeds).forEach(breed => {
    const option = document.createElement("option");
    option.value = breed;             // Hidden value for JS 
    option.textContent = breed;       // Visible text for human       
    selectMenu.appendChild(option);   // Pins option into HTML dropdown
  });
}
// EVENT LISTENERS
