
/*
document.getElementsByTagName('li').style.backgoroundColor = "orchid";
Wont work have to use loop 
*/
const items = document.getElementsByTagName('li')

for (let i = 0; i < items.length; i++){
  items[i].style.color = 'orchid'
  items[i].style.backgroundColor = 'lavender'
}
     