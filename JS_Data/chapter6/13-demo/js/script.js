const shoekirin = (entrles) => {
  const keyframe = {
    opacity:[0,1],
    translate:['200px 0',0],
  }
  entrles[0].target.animate(keyframe,700);
  console.log(entrles[0].target);
}

const kirinObserver = new IntersectionObserver(shoekirin);

kirinObserver.observe(document.querySelector('#kirin'));