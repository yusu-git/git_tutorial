const ab = document.querySelector('#abtn');
const bb = document.querySelector('#bbtn');
const cc = document.querySelector('#tmpa');
const bo = document.querySelector('html');

const chg = () =>{
    // cc.innerHTML = '<table border ="1px solid"><tr><td>1行目</td></tr><table><tr><td>2行目</td></tr>'
    cc.insertAdjacentHTML('afterend',"<table border='1'>")
for (i = 0; i < 10; i++) {
    cc.insertAdjacentHTML('afterend',"<tr><td>"+i+"行目</td></tr>")
    // cc.innerHTML += '<tr><td>1行目</td></tr>';
    // cc.innerHTML += '<tr><td>2行目</td></tr>';
	}
    cc.insertAdjacentHTML('afterend','</table>')


    // document.write("<table border='1'>");
	// for (i = 0; i < 10; i++) {
	// 	document.write("<tr><td>",i,"行目</td></tr>");
	// }
	// document.write("</table>");



    bb.textContent = 'にんにく';
    if(document.body.classList.contains('dark-theme')){
        document.body.classList.remove('dark-theme');
    }else{document.body.classList.add('dark-theme') ;}
    
}

ab.addEventListener('click',chg);

const alt = ()=>{
    alert("Hello！");
}


// dayOfWeek = date.getDay() ;

// const date = Date();
// alert(date);
// bo.addEventListener('load',alt)

const cal1 = document.querySelector('#cal1');
const cal2 = document.querySelector('#cal2');
const cal3 = document.querySelector('#cal3');
const calGo = document.querySelector('#calGo');

const calc = ()=>{
    // if(cal1.value == "" || cal2.value == "" ){
    //     alert("計算する値が入力されていません");
    // }else{
    //     cal3.value = Number(cal1.value) + Number(cal2.value);
        
    // }
    alert(document.calForm.ptn.selectedIndex);

    
}

calGo.addEventListener('click',calc)


