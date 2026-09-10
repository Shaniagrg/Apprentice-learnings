/*
    document.querySelector('main')
document: represents your HTML document/page.
querySelector('main'): finds the first <main> element in my HTML
*/

const main = document.querySelector('main');
let html = '';

for (let i = 1; i<=10; i++){
    //stores div like this: html = "<div>1</div><div>2</div><div>3</div>...<div>10</div>"
  html += `<div>${i}</div>`;
}

//Puts the HTML stored in the html variable inside the <main> element.
main.innerHTML = html;