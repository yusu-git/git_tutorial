const text = document.querySelector('#text');
const count = document.querySelector('#count');
text.addEventListener
text.addEventListener('keyup',()=>{


  count.textContent = text.value.length;

if(text.value.length > 100){
  count.classList.add('alert');
}else{
  count.classList.toggle('alert');
}



})


