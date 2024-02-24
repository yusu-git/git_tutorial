
const regist = document.querySelector('#registButton');
const kananame = document.querySelector('#kananame');
const kanjiname = document.querySelector('#kanjiname');
const sexkbn = document.querySelector('#sexkbn');
const birthyear = document.querySelector('#birthyear');
const checkFlg = true;

// 氏名（カナ）
kananame.addEventListener('keyup',()=>{
    isInput(kananame);
})

// 氏名（漢字）
kanjiname.addEventListener('keyup',()=>{
    isInput(kanjiname);
})

// 性別
sexkbn.addEventListener('keyup',()=>{
    isInput(sexkbn);
})

// 生年月日（年）
birthyear.addEventListener('keyup',()=>{
    flg = isInput(birthyear)
      alert(flg); 
})








const isInput=(target)=>{
    if(target.value == null || target.value == ""){
        alert('必須入力です。');
        document.getElementById(target.id).style.backgroundColor = 'red';
        return true;
    }else{
        document.getElementById(target.id).style.backgroundColor = '';
        return false;
    }
}

const isNumber=(word)=>{
    if(isNaN(word)){
        alert('数値以外で入力されています。');
        document.getElementById(target.id).style.backgroundColor = 'red';

    }else{
        document.getElementById(target.id).style.backgroundColor = '';
        return false;
    }
}

