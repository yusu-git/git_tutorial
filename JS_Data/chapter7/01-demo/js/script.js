const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGeen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',()=>{




    loadingAreaGray.animate({
        opacity:[1,0],
        visibility:'hidden'
    },{
        duration:2000,
        delay:1200,
        easing:'ease',
        fill:'forwards',

    }
    );

    loadingAreaGeen.animate(
        {
            translate:['0 100vh','0 0','0 -100vh']
        },{
            duration:2000,
            delay:800,
            easing:'ease',
            fill:'forwards',
        }
    );

    loadingText.animate(
        [{
            opacity:1,
            offset:.8,
        },{
            opacity:0,
            offset:1,
        }
    ],{
            duration:1200,
            easing:'ease',
            fill:'forwards',
        }
    );











})


const mainImage = document.querySelector('.gallery-image img');
const thumbImage = document.querySelectorAll('.gallery-thumbnails img');

//for(let i = 0;i < thumbImage.length;i++){
//    thumbImage[i].addEventListener('mouseover',(event)=>{
//        console.log(event.target.src);
//        mainImage.src = event.target.src;
//        mainImage.animate({opacity:[0,1]},500);
//
//    });
//    }
thumbImage.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover',(event)=>{
                mainImage.src = event.target.src;
                mainImage.animate({opacity:[0,1]},500);
        
            });



    
});