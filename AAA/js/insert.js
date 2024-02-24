const nameText = document.querySelector("#nameText");
const birthText = document.querySelector("#birthText");
const insertBtn = document.querySelector("#insert");
const maleSelect = document.querySelector("#male");
const femaleSelect = document.querySelector("#female");
const bizSelect = document.querySelector("#biz");
const pass = document.querySelector("#pass");
const date = new Date(birthText);
var select = document.getElementById('#biz');

const insertCheck =()=>{
    // alert(bizSelect.selectedIndex);
    // alert(select);
    if(nameText.value == ""){
        alert("名前は必須入力です");
    }else if(birthText.value == ""){
        alert("生年月日は必須入力です");
    }else if(!(isNaN(date))){
        alert("生年月日はyyyy/mm/ddの形式で入力してください");
    }else if(!(birthText.value.match(/\d{4}\/\d{2}\/\d{2}/))){
        alert("生年月日は正しい日付を入力してください");
    }else if(!(maleSelect.checked) && !(femaleSelect.checked)){
        alert("生年月日は正しい日付を入力してください");
    }else if(bizSelect.selectedIndex == 0){
        alert("部署は必須入力です");
    }else if(pass.value == ""){
        alert("パスワードは必須入力です");
    }else if(pass.value.length > 8){
        alert("パスワードは8桁以内で入力してください");
    }else if(!(birthText.value.match([/^[0-9a-zA-Z]*$/]))){
        alert("パスワードは半角英数字で入力してください");
    }
}

function isValidDate(date) {
    const regex = /^(19|20)\d{2}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(date);
  }
//   let date="2021/9/27"
  
insertBtn.addEventListener('click',insertCheck);