const isAgree = document.querySelector('#check');
const btn = document.querySelector('#btn');


isAgree.addEventListener('change',()=>{

    btn.disabled = !isAgree.checked;


})

