const items = document.querySelectorAll('.img-item');




for(let i = 0;i < items.length ;i++){
const keyflame = {
opacity:[0,1],
rotate:['x 5deg', 0],
/*translate:['0 100px', 0],*/
scale:[1.1,1],
filter:['blur(20px)','blur(0)']
}

const option ={
duration:2000,
fill:'forwards',
delay:i * 300,

}



  items[i].animate(keyflame,option);
}
