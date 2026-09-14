/*
document.getElementById('headline') => this selects the id name
.style.border => Here you are trying to style the border

code: document.getElementById('headline').style.border = 'solid 2px red'
*/

//make a habit of making a variable and store the document. so that the code doesnt look messy

const headline = document.getElementById('headline');
//compare document.getElementById('headline').style.border = 'solid 2px red' looks a lot better
headline.style.border = 'solid 2px red' 

const btn_main = document.getElementById('btn-main');
btn_main.style.border = 'dotted 3px lavender' 