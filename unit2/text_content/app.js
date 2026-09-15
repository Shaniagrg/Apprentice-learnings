//line 14 and 15 its referring to in index.html

const btn_main = document.querySelector('.btn-main');
     
btn_main.addEventListener('click', () => {
   const headline = document.getElementById('headline');

   //selecting the class .input-main
   const input = document.querySelector('.input-main');

   //inside the healine adding the tectcontent
   // input.value => Allows the user to input any topics and update the heading
   headline.textContent = input.value;

   //once the heading is updated you want the input field to be BLANK so we set it empty '' after change
   input.value = '';
    
});