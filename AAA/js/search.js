
const birthFromText = document.querySelector("#birthFrom");
const birthToText = document.querySelector("#birthTo");
const searchBtn = document.querySelector("#searchBtn");
const dateTo = new Date(birthFromText);
const dateFrom = new Date(birthToText);

const insertCheck =()=>{
    // alert(bizSelect.selectedIndex);
    // alert(select);
    if(birthFromText.value != ""){
        if(!(isNaN(dateTo))){
            alert("生年月日はyyyy/mm/ddの形式で入力してください");
        }else if(!(birthFromText.value.match(/\d{4}\/\d{2}\/\d{2}/))){
            alert("生年月日は正しい日付を入力してください");
        }
    }

    if(birthToText.value != ""){
        if(!(isNaN(dateFrom))){
            alert("生年月日はyyyy/mm/ddの形式で入力してください");
        }else if(!(birthToText.value.match(/\d{4}\/\d{2}\/\d{2}/))){
            alert("生年月日は正しい日付を入力してください");
        }
    }
    
}

// function isValidDate(date) {
//     const regex = /^(19|20)\d{2}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
//     return regex.test(date);
//   }
//   let date="2021/9/27"
  

searchBtn.addEventListener('click',insertCheck);