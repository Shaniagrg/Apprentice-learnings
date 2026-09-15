//line 16 in index.html chnage the id to class <button class="btn-main">Update Heading</button>  


const btn_main = document.querySelector('.btn-main');



const items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i++){
  items[i].style.color = 'orchid'
  items[i].style.backgroundColor = 'lavender'
}

const highlights = document.querySelectorAll('.highlight');

for (const i of highlights){
  i.style.backgroundColor = "cornsilk"
}
     
btn_main.addEventListener('click', () => {
    headline.style.border = 'solid 2px red';
    headline.style.fontSize = '60px'
});