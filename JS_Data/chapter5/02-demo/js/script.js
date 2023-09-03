const menu = document.querySelector('#menu');

const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];
console.log(lists);




for(let i = 0;i < lists.length;i++){
    const content = `<div><img src="images/${lists[i]}" alt=""><h2>ストロベリー</h2></div>`
    menu.insertAdjacentHTML("afterbegin",content);
}

//menu.textContent = content;
