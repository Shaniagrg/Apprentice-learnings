// Step 1: Select all checkbox inputs in the document
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

                  
                                                   
// Step 2: Loop through each checkbox
checkboxes.forEach(checkbox => {
                                                   
// Step 3: Add an event listener for the 'focus' event to each checkbox
   checkbox.addEventListener('focus',() => {
// Step 3.1: When a checkbox gains focus, add the 'focus' class to the checkbox
      checkbox.classList.add('focus');                                                                       
  // Step 3.2: Also add the 'focus' class to the parent label element
      checkbox.parentElement.classList.add('focus');
   });                                   

// Step 4: Add an event listener for the 'blur' event to each checkbox
   checkbox.addEventListener('blur',() => {
                                                   
  // Step 4.1: When a checkbox loses focus, remove the 'focus' class
      checkbox.classList.remove('focus');
                                                   
  // Step 4.2: Also remove the 'focus' class from the parent label element
      checkbox.parentElement.classList.remove('focus');
   });
 });                                                   