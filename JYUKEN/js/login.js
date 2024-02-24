

// const user = document.querySelector('#user');
// const pass = document.querySelector('#pass');

// // カラーピッカーを操作したときの一連の動作
// const colorBg = () => {
//   // カラーコードを表示
//   text.textContent = "aaaa";
// }

// // カラーピッカーが変更されたら colorBg を発動させる
// user.addEventListener('input', colorBg);



const user = document.querySelector('#user');
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作したときの一連の動作
const colorBg = () => {
  // 選択した色を背景色に設定
  
  user.value = "aaaaaa";
}

// カラーピッカーが変更されたら colorBg を発動させる
user.addEventListener('click', colorBg);