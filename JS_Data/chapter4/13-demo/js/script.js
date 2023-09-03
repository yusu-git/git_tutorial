

const getScrollPercent = () =>{
  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = document.documentElement.clientHeight;
  const scrolled = window.scrollY;
  const parsentage = scrolled /(pageHeight -viewHeight) *100;
  document.querySelector('#bar').style.width = `${parsentage}%`;
}


window.addEventListener('scroll',getScrollPercent);