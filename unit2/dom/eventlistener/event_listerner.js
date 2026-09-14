/*
    When you click anywhere in the body then it will print line 5

document.body.addEventListener("click", ()=>{
    console.log("Someone just clicked");
  });

*/ 

/*
When you click anywhere in the body it will change the webpage and line 16 will only appear
*/
const body = document.body;

body.addEventListener("click", () => {
    body.innerHTML = '<h1> Hello World!! </h1>';
 });

/*
Instead of ananomous you cna simpley call the function

const body = document.body;
body.addEventListener('click', function () {
  body.innerHTML = '<h1>Hello, world!</h1>';
});
*/