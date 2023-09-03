const heading = document.querySelector('#heading');

const keyflame = {
  opacity:[0,1],
  /*translate:['-100px 50px','0'],*/
rotate:['x 180deg',0],
color:['#f66','#fc2','#0c6','#0bd']
};

const option= {
  delay :100,duration:2000,direction:'alternate',easing:'ease',iterations:Infinity
}

heading.animate(keyflame,option)